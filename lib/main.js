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


__webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/css-loader/index.js??ref--0-1!./node_modules/sass-loader/lib/loader.js??ref--0-2!./main.scss", function() {
			var newContent = require("!!./node_modules/css-loader/index.js??ref--0-1!./node_modules/sass-loader/lib/loader.js??ref--0-2!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, ".b1 {\n  border: 1px solid red; }\n\n.list-style-none {\n  list-style-type: none; }\n\n.display-block {\n  display: block; }\n\n.m0 {\n  margin: 0; }\n\n.m-auto {\n  margin: auto; }\n\n.p-none {\n  padding: 0; }\n\n.fl {\n  float: left; }\n\n.fs1 {\n  font-size: 1.2em; }\n\n/************** Mixins *************/\n.grid {\n  display: grid;\n  display: -ms-grid; }\n\n.of-12-cols {\n  grid-template-columns: repeat(12, 1fr);\n  -ms-grid-template-columns: repeat(12, 1fr); }\n\n.row-span-0 {\n  display: none; }\n\n/* \n creates a row-span-2 { grid-row: span 2 }\n from 1 to 12\n*/\n.row-span-1 {\n  grid-row: span 1;\n  -ms-grid-row-span: 1; }\n\n.row-span-2 {\n  grid-row: span 2;\n  -ms-grid-row-span: 2; }\n\n.row-span-3 {\n  grid-row: span 3;\n  -ms-grid-row-span: 3; }\n\n.row-span-4 {\n  grid-row: span 4;\n  -ms-grid-row-span: 4; }\n\n.row-span-5 {\n  grid-row: span 5;\n  -ms-grid-row-span: 5; }\n\n.row-span-6 {\n  grid-row: span 6;\n  -ms-grid-row-span: 6; }\n\n.row-span-7 {\n  grid-row: span 7;\n  -ms-grid-row-span: 7; }\n\n.row-span-8 {\n  grid-row: span 8;\n  -ms-grid-row-span: 8; }\n\n.row-span-9 {\n  grid-row: span 9;\n  -ms-grid-row-span: 9; }\n\n.row-span-10 {\n  grid-row: span 10;\n  -ms-grid-row-span: 10; }\n\n.row-span-11 {\n  grid-row: span 11;\n  -ms-grid-row-span: 11; }\n\n.row-span-12 {\n  grid-row: span 12;\n  -ms-grid-row-span: 12; }\n\n/* sizes */\n/* Mobile */\n.span-0 {\n  display: none; }\n\n/* \n creates a .span-12 { grid-column: span 12 }\n from 1 to 12\n*/\n.span-1 {\n  grid-column: span 1;\n  -ms-grid-column-span: 1;\n  display: initial; }\n\n.span-2 {\n  grid-column: span 2;\n  -ms-grid-column-span: 2;\n  display: initial; }\n\n.span-3 {\n  grid-column: span 3;\n  -ms-grid-column-span: 3;\n  display: initial; }\n\n.span-4 {\n  grid-column: span 4;\n  -ms-grid-column-span: 4;\n  display: initial; }\n\n.span-5 {\n  grid-column: span 5;\n  -ms-grid-column-span: 5;\n  display: initial; }\n\n.span-6 {\n  grid-column: span 6;\n  -ms-grid-column-span: 6;\n  display: initial; }\n\n.span-7 {\n  grid-column: span 7;\n  -ms-grid-column-span: 7;\n  display: initial; }\n\n.span-8 {\n  grid-column: span 8;\n  -ms-grid-column-span: 8;\n  display: initial; }\n\n.span-9 {\n  grid-column: span 9;\n  -ms-grid-column-span: 9;\n  display: initial; }\n\n.span-10 {\n  grid-column: span 10;\n  -ms-grid-column-span: 10;\n  display: initial; }\n\n.span-11 {\n  grid-column: span 11;\n  -ms-grid-column-span: 11;\n  display: initial; }\n\n.span-12 {\n  grid-column: span 12;\n  -ms-grid-column-span: 12;\n  display: initial; }\n\n/* Tablet */\n@media (min-width: 50rem) {\n  .span-0-md {\n    display: none; }\n  /*\n  Creates a .span-2-md { grid-column: span 2 }\n  from 1 to 12\n  */\n  .span-1-md {\n    grid-column: span 1;\n    -ms-grid-column-span: 1;\n    display: initial; }\n  .span-2-md {\n    grid-column: span 2;\n    -ms-grid-column-span: 2;\n    display: initial; }\n  .span-3-md {\n    grid-column: span 3;\n    -ms-grid-column-span: 3;\n    display: initial; }\n  .span-4-md {\n    grid-column: span 4;\n    -ms-grid-column-span: 4;\n    display: initial; }\n  .span-5-md {\n    grid-column: span 5;\n    -ms-grid-column-span: 5;\n    display: initial; }\n  .span-6-md {\n    grid-column: span 6;\n    -ms-grid-column-span: 6;\n    display: initial; }\n  .span-7-md {\n    grid-column: span 7;\n    -ms-grid-column-span: 7;\n    display: initial; }\n  .span-8-md {\n    grid-column: span 8;\n    -ms-grid-column-span: 8;\n    display: initial; }\n  .span-9-md {\n    grid-column: span 9;\n    -ms-grid-column-span: 9;\n    display: initial; }\n  .span-10-md {\n    grid-column: span 10;\n    -ms-grid-column-span: 10;\n    display: initial; }\n  .span-11-md {\n    grid-column: span 11;\n    -ms-grid-column-span: 11;\n    display: initial; }\n  .span-12-md {\n    grid-column: span 12;\n    -ms-grid-column-span: 12;\n    display: initial; } }\n\n/* Desktop */\n@media (min-width: 70rem) {\n  .span-0-lg {\n    display: none; }\n  /*\n  Creates a .span-2-lg { grid-column: span 2 }\n  from 1 to 12\n  */\n  .span-1-lg {\n    grid-column: span 1;\n    -ms-grid-column-span: 1;\n    display: initial; }\n  .span-2-lg {\n    grid-column: span 2;\n    -ms-grid-column-span: 2;\n    display: initial; }\n  .span-3-lg {\n    grid-column: span 3;\n    -ms-grid-column-span: 3;\n    display: initial; }\n  .span-4-lg {\n    grid-column: span 4;\n    -ms-grid-column-span: 4;\n    display: initial; }\n  .span-5-lg {\n    grid-column: span 5;\n    -ms-grid-column-span: 5;\n    display: initial; }\n  .span-6-lg {\n    grid-column: span 6;\n    -ms-grid-column-span: 6;\n    display: initial; }\n  .span-7-lg {\n    grid-column: span 7;\n    -ms-grid-column-span: 7;\n    display: initial; }\n  .span-8-lg {\n    grid-column: span 8;\n    -ms-grid-column-span: 8;\n    display: initial; }\n  .span-9-lg {\n    grid-column: span 9;\n    -ms-grid-column-span: 9;\n    display: initial; }\n  .span-10-lg {\n    grid-column: span 10;\n    -ms-grid-column-span: 10;\n    display: initial; }\n  .span-11-lg {\n    grid-column: span 11;\n    -ms-grid-column-span: 11;\n    display: initial; }\n  .span-12-lg {\n    grid-column: span 12;\n    -ms-grid-column-span: 12;\n    display: initial; } }\n", "", {"version":3,"sources":["/Users/rr11551/Dev/kroger/grid-proto/base.scss","/Users/rr11551/Dev/kroger/grid-proto/grid.scss"],"names":[],"mappings":"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","file":"main.scss","sourcesContent":[".b1 { border: 1px solid red }\n.list-style-none { list-style-type: none }\n.display-block { display: block }\n.m0 { margin: 0 }\n.m-auto { margin: auto }\n.p-none { padding: 0 }\n.fl { float: left }\n.fs1 { font-size: 1.2em }","$grid-start: 1;\n$grid-end: 12;\n\n/************** Mixins *************/\n@mixin breakpoint($point) {\n  @if $point == tablet {\n    @media (min-width: 50rem) {\n      @content;\n    }\n  } @else if $point == desktop {\n    @media (min-width: 70rem) {\n      @content;\n    }\n  }\n}\n\n.grid {\n  display: grid;\n  display: -ms-grid;\n}\n.of-12-cols {\n  grid-template-columns: repeat(12, 1fr);\n  -ms-grid-template-columns: repeat(12, 1fr);\n}\n\n.row-span-0 {\n  display: none;\n}\n/* \n creates a row-span-2 { grid-row: span 2 }\n from 1 to 12\n*/\n@for $i from $grid-start through $grid-end {\n  .row-span-#{$i} {\n    grid-row: span #{$i};\n    -ms-grid-row-span: #{$i};\n  }\n}\n\n/* sizes */\n\n/* Mobile */\n.span-0 {\n  display: none;\n}\n/* \n creates a .span-12 { grid-column: span 12 }\n from 1 to 12\n*/\n@for $i from $grid-start through $grid-end {\n  .span-#{$i} {\n    grid-column: span #{$i};\n    -ms-grid-column-span: #{$i};\n    display: initial;\n  }\n}\n\n/* Tablet */\n@include breakpoint(tablet) {\n  .span-0-md {\n    display: none;\n  }\n  /*\n  Creates a .span-2-md { grid-column: span 2 }\n  from 1 to 12\n  */\n  @for $i from $grid-start through $grid-end {\n    .span-#{$i}-md {\n      grid-column: span #{$i};\n      -ms-grid-column-span: #{$i};\n      display: initial;\n    }\n  }\n}\n\n/* Desktop */\n@include breakpoint(desktop) {\n  .span-0-lg {\n    display: none;\n  }\n  /*\n  Creates a .span-2-lg { grid-column: span 2 }\n  from 1 to 12\n  */\n  @for $i from $grid-start through $grid-end {\n    .span-#{$i}-lg {\n      grid-column: span #{$i};\n      -ms-grid-column-span: #{$i};\n      display: initial;\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map