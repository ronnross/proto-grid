(function() {
  function indexInc(a) {
    return a + 1;
  }

  const gridNodes = document.querySelectorAll(".grid");
  const grids = Array.prototype.slice.call(gridNodes);

  const rSpan = /^span (\d?\d)$/;

  grids.forEach(function(el) {
    const childArray = Array.prototype.slice.call(el.children);
    let currCol = 0;

    for (let i = 0; i < childArray.length; i++) {
      const gi = el.children[i];
      let s = window.getComputedStyle(gi);
      if (s.display === "none") continue;

      let span = parseInt(s.msGridColumnSpan) || 1;
      console.log("span!!!", span, s.msGridColumnSpan);
      /*const match = rSpan.exec(s.gridColumnStart);
      if (match) {
        span = Number(match[1]);
      }*/
      // console.log(gi.className, s.gridColumnStart)
      // console.log('s', s)
      console.log("span", s.msGridColumnSpan);
      //let list = el.children[i].classList;
      //let span = calculateColSpan(list);
      let start = currCol + span > 12 ? 0 : currCol;
      log({ span: span, start: start, currCol: currCol });
      gi.classList.add("ms-col-" + (start + 1));
      currCol = start + span;
    }
  });
})();