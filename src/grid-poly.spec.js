const polyfill = require('./grid-poly');

class GridElement {
    constructor ({ colSpan = 1, rowSpan = 1, display = 'block' }) {
        this.colSpan = colSpan;
        this.rowSpan = rowSpan;
        this.display = display;
        this.classNames = [];
    }

    get classList() {
        const self = this;
        return {
            add: (className) => {
                self.classNames.push(className);
            }
        };
    }
}

function runTest(conditions) {
    const elements = conditions.map(c => c[0]);
    const expected = conditions.map(c => c[1]);

    // mock out querySelectorAll
    document.querySelectorAll = jest.fn(() => ([{
        children: elements
    }]));

    window.getComputedStyle = jest.fn((el) => ({
        display: el.display,
        msGridColumnSpan: el.colSpan,
        msGridRowSpan: el.rowSpan,
    }));
    polyfill();

    for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        const ex = expected[i];

        try {
            // check column start
            if (ex.colStart) {
                expect(el.classNames.includes(`start-${ex.colStart}`)).toBeTruthy();
            }
            // console.log('checking ', el.classNames, ' for ', `ms-row-${ex.rowStart}`)
            if (ex.rowStart) {
                expect(el.classNames.includes(`ms-row-${ex.rowStart}`)).toBeTruthy();
            }
        } catch (e) {
            console.log(ex, ' didn\t match ', el.classNames);
            throw e;
        }
    }
}

describe('polyfill', () => {
    it('should work with 12 default elements in a row', () => {
        const allDefaults = [
            [new GridElement({}), { colStart: 1, rowStart: 1 }],
            [new GridElement({}), { colStart: 2, rowStart: 1 }],
            [new GridElement({}), { colStart: 3, rowStart: 1 }],
            [new GridElement({}), { colStart: 4, rowStart: 1 }],
            [new GridElement({}), { colStart: 5, rowStart: 1 }],
            [new GridElement({}), { colStart: 6, rowStart: 1 }],
            [new GridElement({}), { colStart: 7, rowStart: 1 }],
            [new GridElement({}), { colStart: 8, rowStart: 1 }],
            [new GridElement({}), { colStart: 9, rowStart: 1 }],
            [new GridElement({}), { colStart: 10, rowStart: 1 }],
            [new GridElement({}), { colStart: 11, rowStart: 1 }],
            [new GridElement({}), { colStart: 12, rowStart: 1 }],
        ];
        runTest(allDefaults);
    });

    it('should work fit bigger elements within a row', () => {
        const allDefaults = [
            [new GridElement({ colSpan: 4 }), { colStart: 1, rowStart: 1 }],
            [new GridElement({ colSpan: 6 }), { colStart: 5, rowStart: 1 }],
            [new GridElement({ colSpan: 2 }), { colStart: 11, rowStart: 1 }],
        ];
        runTest(allDefaults);
    });

    it('should bump elements down to the next row if the current row is filled', () => {
        const allDefaults = [
            [new GridElement({ colSpan: 6 }), { colStart: 1, rowStart: 1 }],
            [new GridElement({ colSpan: 6 }), { colStart: 7, rowStart: 1 }],
            [new GridElement({ colSpan: 6 }), { colStart: 1, rowStart: 2 }],
        ];
        runTest(allDefaults);
    });

    it('should bump elements down to the next row if they don\'t fit', () => {
        const allDefaults = [
            [new GridElement({ colSpan: 4 }), { colStart: 1, rowStart: 1 }],
            [new GridElement({ colSpan: 4 }), { colStart: 5, rowStart: 1 }],
            [new GridElement({ colSpan: 6 }), { colStart: 1, rowStart: 2 }],
        ];
        runTest(allDefaults);
    });

    it('should\'nt count display: none elements', () => {
        const allDefaults = [
            [new GridElement({ colSpan: 4, display: 'none' }), { }],
            [new GridElement({ colSpan: 4 }),                  { colStart: 1, rowStart: 1 }],
            [new GridElement({ colSpan: 4,  }),                { colStart: 5, rowStart: 1 }],
            [new GridElement({ colSpan: 6 }),                  { colStart: 1, rowStart: 2 }],
        ];
        runTest(allDefaults);
    });

    it('should not place elements over rowSpaned elements', () => {
        const allDefaults = [
            [new GridElement({ colSpan: 4, rowSpan: 2 }), { colStart: 1, rowStart: 1 }],
            [new GridElement({ colSpan: 4 }),             { colStart: 5, rowStart: 1 }],
            [new GridElement({ colSpan: 6 }),             { colStart: 5, rowStart: 2 }],
            [new GridElement({ colSpan: 4 }),             { colStart: 1, rowStart: 3 }],
        ];
        runTest(allDefaults);

        const largeArea = [
            [new GridElement({ colSpan: 2 }),              { colStart: 1, rowStart: 1 }],
            [new GridElement({ colSpan: 10, rowSpan: 5 }), { colStart: 3, rowStart: 1 }],
            [new GridElement({ colSpan: 4 }),              { colStart: 1, rowStart: 6 }]
        ];
        runTest(largeArea);
    });

});