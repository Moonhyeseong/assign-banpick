"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_GameList_GameList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GameList/GameList */ \"./src/components/GameList/GameList.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/moonhyeseong/Documents/assign-banpick/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(_ref) {\n  _s();\n\n  let {\n    gameData\n  } = _ref;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io.connect(`${_config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL}:8080`, {\n      path: '/socket.io',\n      transports: ['websocket']\n    });\n    console.log(socket);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"title\", {\n        children: \"BanPick simulator\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_GameList_GameList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      gameData: gameData\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTs7OztBQUVlLFNBQVNLLElBQVQsT0FFNEM7RUFBQTs7RUFBQSxJQUY5QjtJQUMzQkM7RUFEMkIsQ0FFOEI7RUFDekROLGdEQUFTLENBQUMsTUFBTTtJQUNkLE1BQU1PLE1BQU0sR0FBR0osd0RBQUEsQ0FBWSxHQUFFQyw2Q0FBUyxPQUF2QixFQUErQjtNQUM1Q0ssSUFBSSxFQUFFLFlBRHNDO01BRTVDQyxVQUFVLEVBQUUsQ0FBQyxXQUFEO0lBRmdDLENBQS9CLENBQWY7SUFJQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlMLE1BQVo7RUFDRCxDQU5RLEVBTU4sRUFOTSxDQUFUO0VBT0Esb0JBQ0U7SUFBQSx3QkFDRSw4REFBQyxrREFBRDtNQUFBLHVCQUNFO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBSUUsOERBQUMscUVBQUQ7TUFBVSxRQUFRLEVBQUVEO0lBQXBCO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFKRjtFQUFBLGdCQURGO0FBUUQ7O0dBbEJ1QkQ7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEdldFNlcnZlclNpZGVQcm9wcywgSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEdhbWVMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvR2FtZUxpc3QvR2FtZUxpc3QnO1xuaW1wb3J0IHsgZ2V0QWxsR2FtZXMgfSBmcm9tICcuLi8uLi9saWIvZ2FtZXMnO1xuaW1wb3J0IHsgaW5pdFNvY2tldENvbm5lY3Rpb24gfSBmcm9tICcuLi9zb2NrZXRJTyc7XG5pbXBvcnQgeyBpbyB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tICcuLi9jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtcbiAgZ2FtZURhdGEsXG59OiBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGU8dHlwZW9mIGdldFNlcnZlclNpZGVQcm9wcz4pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzb2NrZXQgPSBpby5jb25uZWN0KGAke0JBU0VfVVJMfTo4MDgwYCwge1xuICAgICAgcGF0aDogJy9zb2NrZXQuaW8nLFxuICAgICAgdHJhbnNwb3J0czogWyd3ZWJzb2NrZXQnXSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhzb2NrZXQpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QmFuUGljayBzaW11bGF0b3I8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEdhbWVMaXN0IGdhbWVEYXRhPXtnYW1lRGF0YX0gLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBnYW1lRGF0YSA9IGF3YWl0IGdldEFsbEdhbWVzKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgZ2FtZURhdGEgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiSGVhZCIsIkdhbWVMaXN0IiwiaW8iLCJCQVNFX1VSTCIsIkhvbWUiLCJnYW1lRGF0YSIsInNvY2tldCIsImNvbm5lY3QiLCJwYXRoIiwidHJhbnNwb3J0cyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});