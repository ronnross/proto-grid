(function() {
  function indexInc(a) {
    return a + 1;
  }

  const gridNodes = document.querySelectorAll(".grid");
  const gridEls = Array.prototype.slice.call(gridNodes);

  gridEls.forEach(function(el) {
    const childArray = Array.prototype.slice.call(el.children);
    let offSet = 0;
    childArray.forEach(function(ch, idx) {
      let elList = ch.classList;
      if (elList.contains("span-2")) {
        elList.add("red-border");
        elList.add("ms-col-" + indexInc(idx + offSet));
        elList.add("span-2");
        offSet += 1;
      } else if (elList.contains("span-3-md")) {
        elList.add("blue-border");
        elList.add("ms-col-" + indexInc(idx + offSet));
        elList.add("span-2");
        offSet += 2;
      } else {
        elList.add("red-border");
        elList.add("ms-col-" + indexInc(idx + offSet));
      }
    });
  });
})();
