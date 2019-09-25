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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bootstrap.js":
/*!*****************************!*\
  !*** ./src/js/bootstrap.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _components_ScrollControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ScrollControl */ \"./src/js/components/ScrollControl.js\");\n/* harmony import */ var _components_ScrollControl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_ScrollControl__WEBPACK_IMPORTED_MODULE_0__);\n\nclass App {\n  start() {\n    //-- Init ScrollControll\n    ScrollControl = new _components_ScrollControl__WEBPACK_IMPORTED_MODULE_0___default.a('main');\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/bootstrap.js?");

/***/ }),

/***/ "./src/js/components/ScrollControl.js":
/*!********************************************!*\
  !*** ./src/js/components/ScrollControl.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\src\\\\js\\\\components\\\\ScrollControl.js: Support for the experimental syntax 'classProperties' isn't currently enabled (5:11):\\n\\n\\u001b[0m \\u001b[90m 3 | \\u001b[39m\\u001b[36mexport\\u001b[39m \\u001b[36mdefault\\u001b[39m \\u001b[36mclass\\u001b[39m \\u001b[33mScrollControl\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 5 | \\u001b[39m  oldHash \\u001b[33m=\\u001b[39m \\u001b[32m''\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m          \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 | \\u001b[39m  actionSent \\u001b[33m=\\u001b[39m \\u001b[36mfalse\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 8 | \\u001b[39m  \\u001b[90m//-- Touche variables\\u001b[39m\\u001b[0m\\n\\nAdd @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.\\n    at Parser.raise (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6400:17)\\n    at Parser.expectPlugin (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7733:18)\\n    at Parser.parseClassProperty (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10933:12)\\n    at Parser.pushClassProperty (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10898:30)\\n    at Parser.parseClassMemberWithIsStatic (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10837:14)\\n    at Parser.parseClassMember (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10771:10)\\n    at withTopicForbiddingContext (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10726:14)\\n    at Parser.withTopicForbiddingContext (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9805:14)\\n    at Parser.parseClassBody (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10703:10)\\n    at Parser.parseClass (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10677:22)\\n    at Parser.parseExportDefaultExpression (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11102:19)\\n    at Parser.parseExport (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11008:31)\\n    at Parser.parseStatementContent (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10036:27)\\n    at Parser.parseStatement (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9932:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10508:25)\\n    at Parser.parseBlockBody (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10495:10)\\n    at Parser.parseTopLevel (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9861:10)\\n    at Parser.parse (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11373:17)\\n    at parse (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11409:38)\\n    at parser (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:168:34)\\n    at normalizeFile (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:102:11)\\n    at runSync (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:44:43)\\n    at runAsync (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:35:14)\\n    at process.nextTick.err (C:\\\\WTServer\\\\WWW\\\\webpack-issue\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:34:34)\\n    at _combinedTickCallback (internal/process/next_tick.js:73:7)\\n    at process._tickCallback (internal/process/next_tick.js:104:9)\");\n\n//# sourceURL=webpack:///./src/js/components/ScrollControl.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ \"./src/js/bootstrap.js\");\n\nnew start();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });