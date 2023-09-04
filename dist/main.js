/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n\n\nwindow.addEventListener(\"load\", () => {\n\n    _modules_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].searchListener();\n    _modules_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tempUnitListner()\n\n});\n\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst weather = (() => {\n  \n    async function getData(location) {\n    const url = `https://api.weatherapi.com/v1/current.json?key=e069f2b106c04ce29a1142633233108&q=${location}`;\n\n    const response = await fetch(url);\n    const data = await response.json();\n    \n    return data;\n  }\n\n  return {\n    getData,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);\n\n\n//# sourceURL=webpack://weather_app/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/modules/api.js\");\n\n\nconst dom = (() => {\n\n    const form = document.getElementById(\"weathersearch\");\n    const input = document.querySelector(\"input.location\");\n    const conditionDom = document.querySelector(\".condition\");\n    const city = document.querySelector(\".city\");\n    const country = document.querySelector(\".country\");\n    const feelsLike = document.querySelector(\".feelslike.number\");\n    const tempButton = document.querySelector(\".temp-button\");\n    const feelsLikeUnit = document.querySelector(\".feelslike.sign\");\n\n    // One means current unit is Celsius, null means Fahrenheit\n    let tempUnit = 1;\n\n    function switchTemp(degrees) {\n\n        if (!tempUnit) return (degrees-32)*5/9\n        return degrees*9/5+32\n    }\n\n    function tempUnitListner() {\n        tempButton.addEventListener(\"click\", () => {\n            \n            feelsLike.textContent = Math.round(switchTemp(feelsLike.textContent)*10)/10;\n            \n            if (tempUnit) {\n                feelsLikeUnit.textContent = \"F\"\n                tempButton.textContent = \"F\"\n                tempUnit = 0;\n            }\n            else { \n                feelsLikeUnit.textContent = \"C\"\n                tempButton.textContent = \"C\"\n                tempUnit = 1;\n            }\n        })\n    }\n\n    function populateApp(data) {\n        conditionDom.textContent = data.current.condition.text;\n        city.textContent = data.location.name + \",\";\n        country.textContent = data.location.country;\n        feelsLike.textContent = data.current.feelslike_c;\n    }\n\n    function searchListener() {\n        \n        form.addEventListener(\"submit\", async (e) => {\n            e.preventDefault()\n            const data = await _api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getData(input.value);\n            populateApp(data);\n        })\n    }\n\n\n    return {\n        searchListener,\n        tempUnitListner\n    }\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://weather_app/./src/modules/dom.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;