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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _WatingList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WatingList */ \"./src/components/WatingRoom/WatingList.js\");\n/* harmony import */ var _LiftUserIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LiftUserIndicator */ \"./src/components/WatingRoom/LiftUserIndicator.js\");\n/* harmony import */ var _lib_socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/socket */ \"./lib/socket.ts\");\n/* harmony import */ var _lib_games__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/games */ \"./lib/games.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/moonhyeseong/Documents/assign-banpick/src/components/WatingRoom/WatingRoom.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst WatingRoom = _ref => {\n  _s();\n\n  let {\n    gameData,\n    setGameData\n  } = _ref;\n  // socket.emit('joinRoom', sessionStorage.getItem('GAME_ID'));\n  //유저 준비 여부 검사\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (gameData) {\n      const blueTeamUserList = gameData?.userList?.blue;\n      const redTeamUserList = gameData?.userList?.red;\n      const allUserList = [...blueTeamUserList, ...redTeamUserList];\n      const userCount = allUserList.length;\n      const preparedUsers = allUserList.filter(user => user.isReady);\n\n      if (userCount === preparedUsers.length) {// socket.emit('start-simulator', sessionStorage.getItem('GAME_ID'));\n      }\n    }\n  }, [gameData, gameData?.userList]); //socket\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    console.log('유저 입장');\n    _lib_socket__WEBPACK_IMPORTED_MODULE_4__.socket.once('updateGameData', gameId => {\n      setTimeout(async () => {\n        const gameData = await (0,_lib_games__WEBPACK_IMPORTED_MODULE_5__.getGameData)(gameId);\n        setGameData(gameData);\n      }, 100);\n    });\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(WatingListLayout, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"title\", {\n        children: \"BanPick Simulator | Wating Room\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_WatingList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      mode: gameData?.mode,\n      side: \"blue\",\n      userList: gameData?.userList?.blue,\n      setGameData: setGameData\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_LiftUserIndicator__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      mode: gameData?.mode,\n      userList: gameData?.userList\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_WatingList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      mode: gameData?.mode,\n      side: \"red\",\n      userList: gameData?.userList?.red,\n      setGameData: setGameData\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(WatingRoom, \"3ubReDTFssvu4DHeldAg55cW/CI=\");\n\n_c = WatingRoom;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WatingRoom);\nconst WatingListLayout = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  displayName: \"WatingRoom__WatingListLayout\",\n  componentId: \"sc-fque6d-0\"\n})([\"position:relative;display:flex;justify-content:space-between;width:100%;height:776px;\"]);\n_c2 = WatingListLayout;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"WatingRoom\");\n$RefreshReg$(_c2, \"WatingListLayout\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XYXRpbmdSb29tL1dhdGluZ1Jvb20uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1PLFVBQVUsR0FBRyxRQUErQjtFQUFBOztFQUFBLElBQTlCO0lBQUVDLFFBQUY7SUFBWUM7RUFBWixDQUE4QjtFQUNoRDtFQUVBO0VBQ0FULGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQUlRLFFBQUosRUFBYztNQUNaLE1BQU1FLGdCQUFnQixHQUFHRixRQUFRLEVBQUVHLFFBQVYsRUFBb0JDLElBQTdDO01BQ0EsTUFBTUMsZUFBZSxHQUFHTCxRQUFRLEVBQUVHLFFBQVYsRUFBb0JHLEdBQTVDO01BQ0EsTUFBTUMsV0FBVyxHQUFHLENBQUMsR0FBR0wsZ0JBQUosRUFBc0IsR0FBR0csZUFBekIsQ0FBcEI7TUFFQSxNQUFNRyxTQUFTLEdBQUdELFdBQVcsQ0FBQ0UsTUFBOUI7TUFDQSxNQUFNQyxhQUFhLEdBQUdILFdBQVcsQ0FBQ0ksTUFBWixDQUFtQkMsSUFBSSxJQUFJQSxJQUFJLENBQUNDLE9BQWhDLENBQXRCOztNQUVBLElBQUlMLFNBQVMsS0FBS0UsYUFBYSxDQUFDRCxNQUFoQyxFQUF3QyxDQUN0QztNQUNEO0lBQ0Y7RUFDRixDQWJRLEVBYU4sQ0FBQ1QsUUFBRCxFQUFXQSxRQUFRLEVBQUVHLFFBQXJCLENBYk0sQ0FBVCxDQUpnRCxDQW1CaEQ7O0VBQ0FYLGdEQUFTLENBQUMsTUFBTTtJQUNkc0IsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtJQUNBbEIsb0RBQUEsQ0FBWSxnQkFBWixFQUE4Qm9CLE1BQU0sSUFBSTtNQUN0Q0MsVUFBVSxDQUFDLFlBQVk7UUFDckIsTUFBTWxCLFFBQVEsR0FBRyxNQUFNRix1REFBVyxDQUFDbUIsTUFBRCxDQUFsQztRQUNBaEIsV0FBVyxDQUFDRCxRQUFELENBQVg7TUFDRCxDQUhTLEVBR1AsR0FITyxDQUFWO0lBSUQsQ0FMRDtFQU1ELENBUlEsQ0FBVDtFQVVBLG9CQUNFLDhEQUFDLGdCQUFEO0lBQUEsd0JBQ0UsOERBQUMsa0RBQUQ7TUFBQSx1QkFDRTtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFERixlQUlFLDhEQUFDLG1EQUFEO01BQ0UsSUFBSSxFQUFFQSxRQUFRLEVBQUVtQixJQURsQjtNQUVFLElBQUksRUFBQyxNQUZQO01BR0UsUUFBUSxFQUFFbkIsUUFBUSxFQUFFRyxRQUFWLEVBQW9CQyxJQUhoQztNQUlFLFdBQVcsRUFBRUg7SUFKZjtNQUFBO01BQUE7TUFBQTtJQUFBLGFBSkYsZUFVRSw4REFBQywwREFBRDtNQUFtQixJQUFJLEVBQUVELFFBQVEsRUFBRW1CLElBQW5DO01BQXlDLFFBQVEsRUFBRW5CLFFBQVEsRUFBRUc7SUFBN0Q7TUFBQTtNQUFBO01BQUE7SUFBQSxhQVZGLGVBV0UsOERBQUMsbURBQUQ7TUFDRSxJQUFJLEVBQUVILFFBQVEsRUFBRW1CLElBRGxCO01BRUUsSUFBSSxFQUFDLEtBRlA7TUFHRSxRQUFRLEVBQUVuQixRQUFRLEVBQUVHLFFBQVYsRUFBb0JHLEdBSGhDO01BSUUsV0FBVyxFQUFFTDtJQUpmO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFYRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFERjtBQW9CRCxDQWxERDs7R0FBTUY7O0tBQUFBO0FBb0ROLCtEQUFlQSxVQUFmO0FBRUEsTUFBTXFCLGdCQUFnQixHQUFHMUIsd0VBQUg7RUFBQTtFQUFBO0FBQUEsNkZBQXRCO01BQU0wQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9XYXRpbmdSb29tL1dhdGluZ1Jvb20uanM/MmI0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgV2F0aW5nTGlzdCBmcm9tICcuL1dhdGluZ0xpc3QnO1xuaW1wb3J0IExpZnRVc2VySW5kaWNhdG9yIGZyb20gJy4vTGlmdFVzZXJJbmRpY2F0b3InO1xuaW1wb3J0IHsgc29ja2V0IH0gZnJvbSAnLi4vLi4vLi4vbGliL3NvY2tldCc7XG5pbXBvcnQgeyBnZXRHYW1lRGF0YSB9IGZyb20gJy4uLy4uLy4uL2xpYi9nYW1lcyc7XG5cbmNvbnN0IFdhdGluZ1Jvb20gPSAoeyBnYW1lRGF0YSwgc2V0R2FtZURhdGEgfSkgPT4ge1xuICAvLyBzb2NrZXQuZW1pdCgnam9pblJvb20nLCBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdHQU1FX0lEJykpO1xuXG4gIC8v7Jyg7KCAIOykgOu5hCDsl6zrtoAg6rKA7IKsXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGdhbWVEYXRhKSB7XG4gICAgICBjb25zdCBibHVlVGVhbVVzZXJMaXN0ID0gZ2FtZURhdGE/LnVzZXJMaXN0Py5ibHVlO1xuICAgICAgY29uc3QgcmVkVGVhbVVzZXJMaXN0ID0gZ2FtZURhdGE/LnVzZXJMaXN0Py5yZWQ7XG4gICAgICBjb25zdCBhbGxVc2VyTGlzdCA9IFsuLi5ibHVlVGVhbVVzZXJMaXN0LCAuLi5yZWRUZWFtVXNlckxpc3RdO1xuXG4gICAgICBjb25zdCB1c2VyQ291bnQgPSBhbGxVc2VyTGlzdC5sZW5ndGg7XG4gICAgICBjb25zdCBwcmVwYXJlZFVzZXJzID0gYWxsVXNlckxpc3QuZmlsdGVyKHVzZXIgPT4gdXNlci5pc1JlYWR5KTtcblxuICAgICAgaWYgKHVzZXJDb3VudCA9PT0gcHJlcGFyZWRVc2Vycy5sZW5ndGgpIHtcbiAgICAgICAgLy8gc29ja2V0LmVtaXQoJ3N0YXJ0LXNpbXVsYXRvcicsIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0dBTUVfSUQnKSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbZ2FtZURhdGEsIGdhbWVEYXRhPy51c2VyTGlzdF0pO1xuXG4gIC8vc29ja2V0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ+ycoOyggCDsnoXsnqUnKTtcbiAgICBzb2NrZXQub25jZSgndXBkYXRlR2FtZURhdGEnLCBnYW1lSWQgPT4ge1xuICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdhbWVEYXRhID0gYXdhaXQgZ2V0R2FtZURhdGEoZ2FtZUlkKTtcbiAgICAgICAgc2V0R2FtZURhdGEoZ2FtZURhdGEpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8V2F0aW5nTGlzdExheW91dD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QmFuUGljayBTaW11bGF0b3IgfCBXYXRpbmcgUm9vbTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8V2F0aW5nTGlzdFxuICAgICAgICBtb2RlPXtnYW1lRGF0YT8ubW9kZX1cbiAgICAgICAgc2lkZT1cImJsdWVcIlxuICAgICAgICB1c2VyTGlzdD17Z2FtZURhdGE/LnVzZXJMaXN0Py5ibHVlfVxuICAgICAgICBzZXRHYW1lRGF0YT17c2V0R2FtZURhdGF9XG4gICAgICAvPlxuICAgICAgPExpZnRVc2VySW5kaWNhdG9yIG1vZGU9e2dhbWVEYXRhPy5tb2RlfSB1c2VyTGlzdD17Z2FtZURhdGE/LnVzZXJMaXN0fSAvPlxuICAgICAgPFdhdGluZ0xpc3RcbiAgICAgICAgbW9kZT17Z2FtZURhdGE/Lm1vZGV9XG4gICAgICAgIHNpZGU9XCJyZWRcIlxuICAgICAgICB1c2VyTGlzdD17Z2FtZURhdGE/LnVzZXJMaXN0Py5yZWR9XG4gICAgICAgIHNldEdhbWVEYXRhPXtzZXRHYW1lRGF0YX1cbiAgICAgIC8+XG4gICAgPC9XYXRpbmdMaXN0TGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2F0aW5nUm9vbTtcblxuY29uc3QgV2F0aW5nTGlzdExheW91dCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3NzZweDtcbmA7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiSGVhZCIsInN0eWxlZCIsIldhdGluZ0xpc3QiLCJMaWZ0VXNlckluZGljYXRvciIsInNvY2tldCIsImdldEdhbWVEYXRhIiwiV2F0aW5nUm9vbSIsImdhbWVEYXRhIiwic2V0R2FtZURhdGEiLCJibHVlVGVhbVVzZXJMaXN0IiwidXNlckxpc3QiLCJibHVlIiwicmVkVGVhbVVzZXJMaXN0IiwicmVkIiwiYWxsVXNlckxpc3QiLCJ1c2VyQ291bnQiLCJsZW5ndGgiLCJwcmVwYXJlZFVzZXJzIiwiZmlsdGVyIiwidXNlciIsImlzUmVhZHkiLCJjb25zb2xlIiwibG9nIiwib25jZSIsImdhbWVJZCIsInNldFRpbWVvdXQiLCJtb2RlIiwiV2F0aW5nTGlzdExheW91dCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/WatingRoom/WatingRoom.js\n"));

/***/ })

});