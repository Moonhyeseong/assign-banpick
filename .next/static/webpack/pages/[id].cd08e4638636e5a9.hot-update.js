"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[id]",{

/***/ "./lib/games.ts":
/*!**********************!*\
  !*** ./lib/games.ts ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllGames\": function() { return /* binding */ getAllGames; },\n/* harmony export */   \"getChampionList\": function() { return /* binding */ getChampionList; },\n/* harmony export */   \"getGameData\": function() { return /* binding */ getGameData; }\n/* harmony export */ });\n/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/config */ \"./src/config.js\");\n //전체 게임 리스트 GET\n\nasync function getAllGames() {\n  const res = await fetch(`${_src_config__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}:8080/game`);\n  const data = await res.json();\n  return data;\n} //단일 게임 데이터 GET\n\nasync function getGameData(id) {\n  const res = id !== undefined && (await fetch(`${_src_config__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}:8080/game/${id}`));\n  const data = await res.json();\n  return data;\n}\nasync function getChampionList() {\n  const res = await fetch('https://ddragon.leagueoflegends.com/cdn/12.16.1/data/ko_KR/champion.json');\n  const data = await res.json();\n  return data;\n}\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ2FtZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztDQUNBOztBQUNPLGVBQWVDLFdBQWYsR0FBNkI7RUFDbEMsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFSCxpREFBUyxZQUFiLENBQXZCO0VBQ0EsTUFBTUksSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUFuQjtFQUVBLE9BQU9ELElBQVA7QUFDRCxFQUVEOztBQUNPLGVBQWVFLFdBQWYsQ0FBMkJDLEVBQTNCLEVBQXVDO0VBQzVDLE1BQU1MLEdBQUcsR0FBR0ssRUFBRSxLQUFLQyxTQUFQLEtBQXFCLE1BQU1MLEtBQUssQ0FBRSxHQUFFSCxpREFBUyxjQUFhTyxFQUFHLEVBQTdCLENBQWhDLENBQVo7RUFDQSxNQUFNSCxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFKLEVBQW5CO0VBQ0EsT0FBT0QsSUFBUDtBQUNEO0FBRU0sZUFBZUssZUFBZixHQUFpQztFQUN0QyxNQUFNUCxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUNyQiwwRUFEcUIsQ0FBdkI7RUFHQSxNQUFNQyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFKLEVBQW5CO0VBQ0EsT0FBT0QsSUFBUDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9nYW1lcy50cz8xYWEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSAnLi4vc3JjL2NvbmZpZyc7XG4vL+yghOyytCDqsozsnoQg66as7Iqk7Yq4IEdFVFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEdhbWVzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH06ODA4MC9nYW1lYCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vL+uLqOydvCDqsozsnoQg642w7J207YSwIEdFVFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdhbWVEYXRhKGlkOiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzID0gaWQgIT09IHVuZGVmaW5lZCAmJiAoYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9OjgwODAvZ2FtZS8ke2lkfWApKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2hhbXBpb25MaXN0KCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzEyLjE2LjEvZGF0YS9rb19LUi9jaGFtcGlvbi5qc29uJ1xuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJnZXRBbGxHYW1lcyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJnZXRHYW1lRGF0YSIsImlkIiwidW5kZWZpbmVkIiwiZ2V0Q2hhbXBpb25MaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/games.ts\n"));

/***/ })

});