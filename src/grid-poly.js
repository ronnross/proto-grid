let polyfill = function() {
  const NUM_COLS = 12;

  const gridNodes = document.querySelectorAll(".grid");
  const grids = Array.prototype.slice.call(gridNodes);

  const rSpan = /^span (\d?\d)$/;

  grids.forEach(function(el) {
    const childArray = Array.prototype.slice.call(el.children);
    let currCol = 1;
    let currRow = 1;
    let rowSpanned = [];

    function blockSquares(xStart, xEnd, yStart, yEnd) {
      for (let i = yStart; i <= yEnd; i++) {
        rowSpanned[i] = rowSpanned[i] || [];
        rowSpanned[i].push({ start: xStart, end: xEnd });
      }
    }

    function doesItFit(x, y, xSpan) {
      const toCheck = rowSpanned[y];
      for (let i = 0; i < (toCheck && toCheck.length) || 0; i++) {
        if (toCheck[i].start <= x + xSpan && toCheck[i].end >= x) {
          return toCheck[i];
        }
      }
    }

    function findNextFit(span) {
      // first try currCol and currRow, overflow if not enough room in row
      let x = currCol + span - 1 > NUM_COLS ? 1 : currCol;

      if (currCol !== 1 && x === 1) {
        currRow++;
      }

      const blockedBy = doesItFit(x, currRow, span);

      if (blockedBy) {
        currCol = blockedBy.end + 1;
        return findNextFit(span);
      }

      return [x, currRow];
    }

    for (let i = 0; i < childArray.length; i++) {
      const gi = el.children[i];
      let s = window.getComputedStyle(gi);
      if (s.display === "none") continue;

      let span = parseInt(s.msGridColumnSpan) || 1;
      let rowSpan = parseInt(s.msGridRowSpan) || 1;
      const bestFit = findNextFit(span);
      const colStart = bestFit[0];
      const rowStart = bestFit[1];

      // forward lookup for row spanned elements
      if (rowSpan > 1) {
        // console.log('need to span rows ', rowStart, ' - ', rowStart + rowSpan - 1)
        blockSquares(
          colStart,
          colStart + span - 1,
          rowStart,
          rowStart + rowSpan - 1
        );
      }

      // console.log({ span: span, colStart: colStart, rowStart: rowStart });
      gi.classList.add("start-" + colStart);
      gi.classList.add("ms-row-" + rowStart);
      currCol = colStart + span;
      currRow = rowStart;
    }
  });
};

module.exports = polyfill;
