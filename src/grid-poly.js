let polyfill = function() {
  console.log("grid is running");
  function indexInc(a) {
    return a + 1;
  }

  const gridNodes = document.querySelectorAll(".grid");
  const grids = Array.prototype.slice.call(gridNodes);

  const rSpan = /^span (\d?\d)$/;

  grids.forEach(function(el) {
    const childArray = Array.prototype.slice.call(el.children);
    let currCol = 0;
    let currRow = 0;

    for (let i = 0; i < childArray.length; i++) {
      const gi = el.children[i];
      let s = window.getComputedStyle(gi);
      if (s.display === "none") continue;

      let span = parseInt(s.msGridColumnSpan) || 1;
      let start = currCol + span > 12 ? 0 : currCol;
      if (start === 0) {
        currRow++;
      }

      console.log({ span: span, start: start, currCol: currCol });
      gi.classList.add("ms-col-" + (start + 1));
      gi.classList.add("ms-row-" + currRow);
      currCol = start + span;
    }
  });
};

module.exports = polyfill;
