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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_GameList_GameList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GameList/GameList */ \"./src/components/GameList/GameList.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/moonhyeseong/Documents/assign-banpick/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(_ref) {\n  _s();\n\n  let {\n    gameData\n  } = _ref;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(`${_config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL}:8080`, {\n      path: '/socket.io',\n      transports: ['websocket']\n    });\n    socket.connect();\n    socket.emit('socket-conncet', 'socket connect success');\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"title\", {\n        children: \"BanPick simulator\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_GameList_GameList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      gameData: gameData\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTs7OztBQUVlLFNBQVNLLElBQVQsT0FFNEM7RUFBQTs7RUFBQSxJQUY5QjtJQUMzQkM7RUFEMkIsQ0FFOEI7RUFDekROLGdEQUFTLENBQUMsTUFBTTtJQUNkLE1BQU1PLE1BQU0sR0FBR0osb0RBQUUsQ0FBRSxHQUFFQyw2Q0FBUyxPQUFiLEVBQXFCO01BQ3BDSSxJQUFJLEVBQUUsWUFEOEI7TUFFcENDLFVBQVUsRUFBRSxDQUFDLFdBQUQ7SUFGd0IsQ0FBckIsQ0FBakI7SUFJQUYsTUFBTSxDQUFDRyxPQUFQO0lBQ0FILE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGdCQUFaLEVBQThCLHdCQUE5QjtFQUNELENBUFEsRUFPTixFQVBNLENBQVQ7RUFRQSxvQkFDRTtJQUFBLHdCQUNFLDhEQUFDLGtEQUFEO01BQUEsdUJBQ0U7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREYsZUFJRSw4REFBQyxxRUFBRDtNQUFVLFFBQVEsRUFBRUw7SUFBcEI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUpGO0VBQUEsZ0JBREY7QUFRRDs7R0FuQnVCRDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgR2V0U2VydmVyU2lkZVByb3BzLCBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGUgfSBmcm9tICduZXh0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgR2FtZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9HYW1lTGlzdC9HYW1lTGlzdCc7XG5pbXBvcnQgeyBnZXRBbGxHYW1lcyB9IGZyb20gJy4uLy4uL2xpYi9nYW1lcyc7XG5cbmltcG9ydCB7IGlvIH0gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe1xuICBnYW1lRGF0YSxcbn06IEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZTx0eXBlb2YgZ2V0U2VydmVyU2lkZVByb3BzPikge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNvY2tldCA9IGlvKGAke0JBU0VfVVJMfTo4MDgwYCwge1xuICAgICAgcGF0aDogJy9zb2NrZXQuaW8nLFxuICAgICAgdHJhbnNwb3J0czogWyd3ZWJzb2NrZXQnXSxcbiAgICB9KTtcbiAgICBzb2NrZXQuY29ubmVjdCgpO1xuICAgIHNvY2tldC5lbWl0KCdzb2NrZXQtY29ubmNldCcsICdzb2NrZXQgY29ubmVjdCBzdWNjZXNzJyk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5CYW5QaWNrIHNpbXVsYXRvcjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8R2FtZUxpc3QgZ2FtZURhdGE9e2dhbWVEYXRhfSAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGdhbWVEYXRhID0gYXdhaXQgZ2V0QWxsR2FtZXMoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBnYW1lRGF0YSB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJIZWFkIiwiR2FtZUxpc3QiLCJpbyIsIkJBU0VfVVJMIiwiSG9tZSIsImdhbWVEYXRhIiwic29ja2V0IiwicGF0aCIsInRyYW5zcG9ydHMiLCJjb25uZWN0IiwiZW1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});