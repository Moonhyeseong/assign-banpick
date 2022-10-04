"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[id]";
exports.ids = ["pages/[id]"];
exports.modules = {

/***/ "./lib/games.ts":
/*!**********************!*\
  !*** ./lib/games.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllGames\": () => (/* binding */ getAllGames),\n/* harmony export */   \"getGameData\": () => (/* binding */ getGameData)\n/* harmony export */ });\n/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/config */ \"./src/config.js\");\n //전체 게임 리스트 GET\n\nasync function getAllGames() {\n  const res = await fetch(`${_src_config__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}:8080/game`);\n  const data = await res.json();\n  return data;\n} //단일 게임 데이터 GET\n\nasync function getGameData(id) {\n  const res = await fetch(`${_src_config__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}:8080/game/${id}`);\n  const data = await res.json();\n  return data;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ2FtZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0NBQ0E7O0FBQ08sZUFBZUMsV0FBZixHQUE2QjtFQUNsQyxNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVILGlEQUFTLFlBQWIsQ0FBdkI7RUFDQSxNQUFNSSxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFKLEVBQW5CO0VBRUEsT0FBT0QsSUFBUDtBQUNELEVBRUQ7O0FBQ08sZUFBZUUsV0FBZixDQUEyQkMsRUFBM0IsRUFBdUM7RUFDNUMsTUFBTUwsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFSCxpREFBUyxjQUFhTyxFQUFHLEVBQTdCLENBQXZCO0VBQ0EsTUFBTUgsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUFuQjtFQUNBLE9BQU9ELElBQVA7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Fzc2lnbi1iYW5waWNrLy4vbGliL2dhbWVzLnRzPzFhYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tICcuLi9zcmMvY29uZmlnJztcbi8v7KCE7LK0IOqyjOyehCDrpqzsiqTtirggR0VUXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsR2FtZXMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfTo4MDgwL2dhbWVgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8v64uo7J28IOqyjOyehCDrjbDsnbTthLAgR0VUXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R2FtZURhdGEoaWQ6IHN0cmluZykge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH06ODA4MC9nYW1lLyR7aWR9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn1cbiJdLCJuYW1lcyI6WyJCQVNFX1VSTCIsImdldEFsbEdhbWVzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImdldEdhbWVEYXRhIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/games.ts\n");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BASE_URL\": () => (/* binding */ BASE_URL)\n/* harmony export */ });\nconst BASE_URL = 'http://192.168.0.131'; // export const BASE_URL = 'http://192.168.35.31';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxRQUFRLEdBQUcsc0JBQWpCLEVBQ1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3NpZ24tYmFucGljay8uL3NyYy9jb25maWcuanM/MjRhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovLzE5Mi4xNjguMC4xMzEnO1xuLy8gZXhwb3J0IGNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly8xOTIuMTY4LjM1LjMxJztcbiJdLCJuYW1lcyI6WyJCQVNFX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config.js\n");

/***/ }),

/***/ "./src/pages/[id].tsx":
/*!****************************!*\
  !*** ./src/pages/[id].tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var _lib_games__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/games */ \"./lib/games.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/moonhyeseong/Documents/assign-banpick/src/pages/[id].tsx\";\n\n\n\nconst Simulator = ({\n  game\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: \"Simulator\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 10\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Simulator);\nconst getServerSideProps = async ({\n  params\n}) => {\n  const gameId = params.id.toString();\n  const game = await (0,_lib_games__WEBPACK_IMPORTED_MODULE_0__.getGameData)(gameId);\n  return {\n    props: {\n      game\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW2lkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7OztBQUVBLE1BQU1DLFNBQVMsR0FBRyxDQUFDO0VBQUVDO0FBQUYsQ0FBRCxLQUFjO0VBQzlCLG9CQUFPO0lBQUE7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBQVA7QUFDRCxDQUZEOztBQUlBLGlFQUFlRCxTQUFmO0FBRU8sTUFBTUUsa0JBQXNDLEdBQUcsT0FBTztFQUFFQztBQUFGLENBQVAsS0FBc0I7RUFDMUUsTUFBTUMsTUFBTSxHQUFHRCxNQUFNLENBQUNFLEVBQVAsQ0FBVUMsUUFBVixFQUFmO0VBQ0EsTUFBTUwsSUFBSSxHQUFHLE1BQU1GLHVEQUFXLENBQUNLLE1BQUQsQ0FBOUI7RUFFQSxPQUFPO0lBQ0xHLEtBQUssRUFBRTtNQUFFTjtJQUFGO0VBREYsQ0FBUDtBQUdELENBUE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3NpZ24tYmFucGljay8uL3NyYy9wYWdlcy9baWRdLnRzeD83ZjIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgZ2V0R2FtZURhdGEgfSBmcm9tICcuLi8uLi9saWIvZ2FtZXMnO1xuXG5jb25zdCBTaW11bGF0b3IgPSAoeyBnYW1lIH0pID0+IHtcbiAgcmV0dXJuIDxkaXY+U2ltdWxhdG9yPC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2ltdWxhdG9yO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBnYW1lSWQgPSBwYXJhbXMuaWQudG9TdHJpbmcoKTtcbiAgY29uc3QgZ2FtZSA9IGF3YWl0IGdldEdhbWVEYXRhKGdhbWVJZCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBnYW1lIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImdldEdhbWVEYXRhIiwiU2ltdWxhdG9yIiwiZ2FtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhcmFtcyIsImdhbWVJZCIsImlkIiwidG9TdHJpbmciLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/[id].tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/[id].tsx"));
module.exports = __webpack_exports__;

})();