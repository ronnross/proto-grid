/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _gridPoly = __webpack_require__(1);

var _gridPoly2 = _interopRequireDefault(_gridPoly);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
  console.log("in ie ");
  (0, _gridPoly2.default)();
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var polyfill = function polyfill() {
  var NUM_COLS = 12;

  var gridNodes = document.querySelectorAll(".grid");
  var grids = Array.prototype.slice.call(gridNodes);

  var rSpan = /^span (\d?\d)$/;

  grids.forEach(function (el) {
    var childArray = Array.prototype.slice.call(el.children);
    var currCol = 1;
    var currRow = 1;
    var rowSpanned = [];

    function blockSquares(xStart, xEnd, yStart, yEnd) {
      for (var i = yStart; i <= yEnd; i++) {
        rowSpanned[i] = rowSpanned[i] || [];
        rowSpanned[i].push({ start: xStart, end: xEnd });
      }
    }

    function doesItFit(x, y, xSpan) {
      var toCheck = rowSpanned[y];
      for (var i = 0; i < (toCheck && toCheck.length) || 0; i++) {
        if (toCheck[i].start <= x + xSpan && toCheck[i].end >= x) {
          return toCheck[i];
        }
      }
    }

    function findNextFit(span) {
      // first try currCol and currRow, overflow if not enough room in row
      var x = currCol + span - 1 > NUM_COLS ? 1 : currCol;

      if (currCol !== 1 && x === 1) {
        currRow++;
      }

      var blockedBy = doesItFit(x, currRow, span);

      if (blockedBy) {
        currCol = blockedBy.end + 1;
        return findNextFit(span);
      }

      return [x, currRow];
    }

    for (var i = 0; i < childArray.length; i++) {
      var gi = el.children[i];
      var s = window.getComputedStyle(gi);
      if (s.display === "none") continue;

      var span = parseInt(s.msGridColumnSpan) || 1;
      var rowSpan = parseInt(s.msGridRowSpan) || 1;
      var bestFit = findNextFit(span);
      var colStart = bestFit[0];
      var rowStart = bestFit[1];

      // forward lookup for row spanned elements
      if (rowSpan > 1) {
        // console.log('need to span rows ', rowStart, ' - ', rowStart + rowSpan - 1)
        blockSquares(colStart, colStart + span - 1, rowStart, rowStart + rowSpan - 1);
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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map