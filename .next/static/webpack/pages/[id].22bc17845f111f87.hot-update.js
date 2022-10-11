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

/***/ "./src/components/WatingRoom/WatingRoom.js":
/*!*************************************************!*\
  !*** ./src/components/WatingRoom/WatingRoom.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _WatingList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WatingList */ \"./src/components/WatingRoom/WatingList.js\");\n/* harmony import */ var _LiftUserIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LiftUserIndicator */ \"./src/components/WatingRoom/LiftUserIndicator.js\");\n/* harmony import */ var _lib_socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/socket */ \"./lib/socket.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/moonhyeseong/Documents/assign-banpick/src/components/WatingRoom/WatingRoom.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst WatingRoom = _ref => {\n  _s();\n\n  let {\n    gameData,\n    setGameData\n  } = _ref;\n  // socket.emit('joinRoom', sessionStorage.getItem('GAME_ID'));\n  //유저 준비 여부 검사\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (gameData) {\n      const blueTeamUserList = gameData?.userList?.blue;\n      const redTeamUserList = gameData?.userList?.red;\n      const allUserList = [...blueTeamUserList, ...redTeamUserList];\n      const userCount = allUserList.length;\n      const preparedUsers = allUserList.filter(user => user.isReady);\n\n      if (userCount === preparedUsers.length) {// socket.emit('start-simulator', sessionStorage.getItem('GAME_ID'));\n      }\n    }\n  }, [gameData, gameData?.userList]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    _lib_socket__WEBPACK_IMPORTED_MODULE_4__.socket.once('userReadyEvent', updatedGameData => {\n      setGameData(updatedGameData);\n    });\n  }, [setGameData]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(WatingListLayout, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"title\", {\n        children: \"BanPick Simulator | Wating Room\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_WatingList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      mode: gameData?.mode,\n      side: \"blue\",\n      userList: gameData?.userList?.blue,\n      setGameData: setGameData\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_LiftUserIndicator__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      mode: gameData?.mode,\n      userList: gameData?.userList\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_WatingList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      mode: gameData?.mode,\n      side: \"red\",\n      userList: gameData?.userList?.red,\n      setGameData: setGameData\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(WatingRoom, \"3ubReDTFssvu4DHeldAg55cW/CI=\");\n\n_c = WatingRoom;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WatingRoom);\nconst WatingListLayout = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"WatingRoom__WatingListLayout\",\n  componentId: \"sc-fque6d-0\"\n})([\"position:relative;display:flex;justify-content:space-between;width:100%;height:776px;\"]);\n_c2 = WatingListLayout;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"WatingRoom\");\n$RefreshReg$(_c2, \"WatingListLayout\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XYXRpbmdSb29tL1dhdGluZ1Jvb20uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU1NLFVBQVUsR0FBRyxRQUErQjtFQUFBOztFQUFBLElBQTlCO0lBQUVDLFFBQUY7SUFBWUM7RUFBWixDQUE4QjtFQUNoRDtFQUVBO0VBQ0FSLGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQUlPLFFBQUosRUFBYztNQUNaLE1BQU1FLGdCQUFnQixHQUFHRixRQUFRLEVBQUVHLFFBQVYsRUFBb0JDLElBQTdDO01BQ0EsTUFBTUMsZUFBZSxHQUFHTCxRQUFRLEVBQUVHLFFBQVYsRUFBb0JHLEdBQTVDO01BQ0EsTUFBTUMsV0FBVyxHQUFHLENBQUMsR0FBR0wsZ0JBQUosRUFBc0IsR0FBR0csZUFBekIsQ0FBcEI7TUFFQSxNQUFNRyxTQUFTLEdBQUdELFdBQVcsQ0FBQ0UsTUFBOUI7TUFDQSxNQUFNQyxhQUFhLEdBQUdILFdBQVcsQ0FBQ0ksTUFBWixDQUFtQkMsSUFBSSxJQUFJQSxJQUFJLENBQUNDLE9BQWhDLENBQXRCOztNQUVBLElBQUlMLFNBQVMsS0FBS0UsYUFBYSxDQUFDRCxNQUFoQyxFQUF3QyxDQUN0QztNQUNEO0lBQ0Y7RUFDRixDQWJRLEVBYU4sQ0FBQ1QsUUFBRCxFQUFXQSxRQUFRLEVBQUVHLFFBQXJCLENBYk0sQ0FBVDtFQWVBVixnREFBUyxDQUFDLE1BQU07SUFDZEssb0RBQUEsQ0FBWSxnQkFBWixFQUE4QmlCLGVBQWUsSUFBSTtNQUMvQ2QsV0FBVyxDQUFDYyxlQUFELENBQVg7SUFDRCxDQUZEO0VBR0QsQ0FKUSxFQUlOLENBQUNkLFdBQUQsQ0FKTSxDQUFUO0VBTUEsb0JBQ0UsOERBQUMsZ0JBQUQ7SUFBQSx3QkFDRSw4REFBQyxrREFBRDtNQUFBLHVCQUNFO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxhQURGLGVBSUUsOERBQUMsbURBQUQ7TUFDRSxJQUFJLEVBQUVELFFBQVEsRUFBRWdCLElBRGxCO01BRUUsSUFBSSxFQUFDLE1BRlA7TUFHRSxRQUFRLEVBQUVoQixRQUFRLEVBQUVHLFFBQVYsRUFBb0JDLElBSGhDO01BSUUsV0FBVyxFQUFFSDtJQUpmO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFKRixlQVVFLDhEQUFDLDBEQUFEO01BQW1CLElBQUksRUFBRUQsUUFBUSxFQUFFZ0IsSUFBbkM7TUFBeUMsUUFBUSxFQUFFaEIsUUFBUSxFQUFFRztJQUE3RDtNQUFBO01BQUE7TUFBQTtJQUFBLGFBVkYsZUFXRSw4REFBQyxtREFBRDtNQUNFLElBQUksRUFBRUgsUUFBUSxFQUFFZ0IsSUFEbEI7TUFFRSxJQUFJLEVBQUMsS0FGUDtNQUdFLFFBQVEsRUFBRWhCLFFBQVEsRUFBRUcsUUFBVixFQUFvQkcsR0FIaEM7TUFJRSxXQUFXLEVBQUVMO0lBSmY7TUFBQTtNQUFBO01BQUE7SUFBQSxhQVhGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxhQURGO0FBb0JELENBN0NEOztHQUFNRjs7S0FBQUE7QUErQ04sK0RBQWVBLFVBQWY7QUFFQSxNQUFNa0IsZ0JBQWdCLEdBQUd0Qix3RUFBSDtFQUFBO0VBQUE7QUFBQSw2RkFBdEI7TUFBTXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1dhdGluZ1Jvb20vV2F0aW5nUm9vbS5qcz8yYjQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBXYXRpbmdMaXN0IGZyb20gJy4vV2F0aW5nTGlzdCc7XG5pbXBvcnQgTGlmdFVzZXJJbmRpY2F0b3IgZnJvbSAnLi9MaWZ0VXNlckluZGljYXRvcic7XG5pbXBvcnQgeyBzb2NrZXQgfSBmcm9tICcuLi8uLi8uLi9saWIvc29ja2V0JztcbmNvbnN0IFdhdGluZ1Jvb20gPSAoeyBnYW1lRGF0YSwgc2V0R2FtZURhdGEgfSkgPT4ge1xuICAvLyBzb2NrZXQuZW1pdCgnam9pblJvb20nLCBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdHQU1FX0lEJykpO1xuXG4gIC8v7Jyg7KCAIOykgOu5hCDsl6zrtoAg6rKA7IKsXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGdhbWVEYXRhKSB7XG4gICAgICBjb25zdCBibHVlVGVhbVVzZXJMaXN0ID0gZ2FtZURhdGE/LnVzZXJMaXN0Py5ibHVlO1xuICAgICAgY29uc3QgcmVkVGVhbVVzZXJMaXN0ID0gZ2FtZURhdGE/LnVzZXJMaXN0Py5yZWQ7XG4gICAgICBjb25zdCBhbGxVc2VyTGlzdCA9IFsuLi5ibHVlVGVhbVVzZXJMaXN0LCAuLi5yZWRUZWFtVXNlckxpc3RdO1xuXG4gICAgICBjb25zdCB1c2VyQ291bnQgPSBhbGxVc2VyTGlzdC5sZW5ndGg7XG4gICAgICBjb25zdCBwcmVwYXJlZFVzZXJzID0gYWxsVXNlckxpc3QuZmlsdGVyKHVzZXIgPT4gdXNlci5pc1JlYWR5KTtcblxuICAgICAgaWYgKHVzZXJDb3VudCA9PT0gcHJlcGFyZWRVc2Vycy5sZW5ndGgpIHtcbiAgICAgICAgLy8gc29ja2V0LmVtaXQoJ3N0YXJ0LXNpbXVsYXRvcicsIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0dBTUVfSUQnKSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbZ2FtZURhdGEsIGdhbWVEYXRhPy51c2VyTGlzdF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc29ja2V0Lm9uY2UoJ3VzZXJSZWFkeUV2ZW50JywgdXBkYXRlZEdhbWVEYXRhID0+IHtcbiAgICAgIHNldEdhbWVEYXRhKHVwZGF0ZWRHYW1lRGF0YSk7XG4gICAgfSk7XG4gIH0sIFtzZXRHYW1lRGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFdhdGluZ0xpc3RMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkJhblBpY2sgU2ltdWxhdG9yIHwgV2F0aW5nIFJvb208L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFdhdGluZ0xpc3RcbiAgICAgICAgbW9kZT17Z2FtZURhdGE/Lm1vZGV9XG4gICAgICAgIHNpZGU9XCJibHVlXCJcbiAgICAgICAgdXNlckxpc3Q9e2dhbWVEYXRhPy51c2VyTGlzdD8uYmx1ZX1cbiAgICAgICAgc2V0R2FtZURhdGE9e3NldEdhbWVEYXRhfVxuICAgICAgLz5cbiAgICAgIDxMaWZ0VXNlckluZGljYXRvciBtb2RlPXtnYW1lRGF0YT8ubW9kZX0gdXNlckxpc3Q9e2dhbWVEYXRhPy51c2VyTGlzdH0gLz5cbiAgICAgIDxXYXRpbmdMaXN0XG4gICAgICAgIG1vZGU9e2dhbWVEYXRhPy5tb2RlfVxuICAgICAgICBzaWRlPVwicmVkXCJcbiAgICAgICAgdXNlckxpc3Q9e2dhbWVEYXRhPy51c2VyTGlzdD8ucmVkfVxuICAgICAgICBzZXRHYW1lRGF0YT17c2V0R2FtZURhdGF9XG4gICAgICAvPlxuICAgIDwvV2F0aW5nTGlzdExheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdhdGluZ1Jvb207XG5cbmNvbnN0IFdhdGluZ0xpc3RMYXlvdXQgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzc2cHg7XG5gO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIkhlYWQiLCJzdHlsZWQiLCJXYXRpbmdMaXN0IiwiTGlmdFVzZXJJbmRpY2F0b3IiLCJzb2NrZXQiLCJXYXRpbmdSb29tIiwiZ2FtZURhdGEiLCJzZXRHYW1lRGF0YSIsImJsdWVUZWFtVXNlckxpc3QiLCJ1c2VyTGlzdCIsImJsdWUiLCJyZWRUZWFtVXNlckxpc3QiLCJyZWQiLCJhbGxVc2VyTGlzdCIsInVzZXJDb3VudCIsImxlbmd0aCIsInByZXBhcmVkVXNlcnMiLCJmaWx0ZXIiLCJ1c2VyIiwiaXNSZWFkeSIsIm9uY2UiLCJ1cGRhdGVkR2FtZURhdGEiLCJtb2RlIiwiV2F0aW5nTGlzdExheW91dCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/WatingRoom/WatingRoom.js\n"));

/***/ })

});