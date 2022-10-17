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

/***/ "./src/components/BanPick/BanPickIndicator/Timer.jsx":
/*!***********************************************************!*\
  !*** ./src/components/BanPick/BanPickIndicator/Timer.jsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/moonhyeseong/Documents/assign-banpick/src/components/BanPick/BanPickIndicator/Timer.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nconst Timer = _ref => {\n  _s();\n\n  let {\n    leftTime,\n    setLeftTime,\n    initialTime\n  } = _ref;\n\n  const milToSeconds = leftTime => {\n    let leftSeconds = Math.ceil(leftTime / 1000).toString().padStart(2, '0');\n    return leftSeconds;\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    let timer;\n    timer = setInterval(() => {\n      setLeftTime(initialTime - new Date().getTime());\n    }, 1000);\n    leftTime < 0 && clearInterval(timer);\n    return () => clearInterval(timer);\n  }, [initialTime, leftTime, setLeftTime]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TimerText, {\n    children: milToSeconds(leftTime) > 0 ? milToSeconds(leftTime) : `00`\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Timer, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Timer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\nconst TimerText = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].p.withConfig({\n  displayName: \"Timer__TimerText\",\n  componentId: \"sc-14rg0ns-0\"\n})([\"font-size:50px;text-align:center;color:\", \";font-weight:700;\"], props => props.theme.white.white100);\n_c2 = TimerText;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Timer\");\n$RefreshReg$(_c2, \"TimerText\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CYW5QaWNrL0JhblBpY2tJbmRpY2F0b3IvVGltZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLE1BQU1HLEtBQUssR0FBRyxRQUE0QztFQUFBOztFQUFBLElBQTNDO0lBQUVDLFFBQUY7SUFBWUMsV0FBWjtJQUF5QkM7RUFBekIsQ0FBMkM7O0VBQ3hELE1BQU1DLFlBQVksR0FBR0gsUUFBUSxJQUFJO0lBQy9CLElBQUlJLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVOLFFBQVEsR0FBRyxJQUFyQixFQUNmTyxRQURlLEdBRWZDLFFBRmUsQ0FFTixDQUZNLEVBRUgsR0FGRyxDQUFsQjtJQUdBLE9BQU9KLFdBQVA7RUFDRCxDQUxEOztFQU9BUCxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFJWSxLQUFKO0lBQ0FBLEtBQUssR0FBR0MsV0FBVyxDQUFDLE1BQU07TUFDeEJULFdBQVcsQ0FBQ0MsV0FBVyxHQUFHLElBQUlTLElBQUosR0FBV0MsT0FBWCxFQUFmLENBQVg7SUFDRCxDQUZrQixFQUVoQixJQUZnQixDQUFuQjtJQUdBWixRQUFRLEdBQUcsQ0FBWCxJQUFnQmEsYUFBYSxDQUFDSixLQUFELENBQTdCO0lBRUEsT0FBTyxNQUFNSSxhQUFhLENBQUNKLEtBQUQsQ0FBMUI7RUFDRCxDQVJRLEVBUU4sQ0FBQ1AsV0FBRCxFQUFjRixRQUFkLEVBQXdCQyxXQUF4QixDQVJNLENBQVQ7RUFVQSxvQkFDRSw4REFBQyxTQUFEO0lBQUEsVUFDR0UsWUFBWSxDQUFDSCxRQUFELENBQVosR0FBeUIsQ0FBekIsR0FBNkJHLFlBQVksQ0FBQ0gsUUFBRCxDQUF6QyxHQUF1RDtFQUQxRDtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREY7QUFLRCxDQXZCRDs7R0FBTUQ7O0tBQUFBO0FBeUJOLCtEQUFlQSxLQUFmO0FBRUEsTUFBTWUsU0FBUyxHQUFHaEIsc0VBQUg7RUFBQTtFQUFBO0FBQUEscUVBR0prQixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxLQUFaLENBQWtCQyxRQUh2QixDQUFmO01BQU1MIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0JhblBpY2svQmFuUGlja0luZGljYXRvci9UaW1lci5qc3g/ZjQwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFRpbWVyID0gKHsgbGVmdFRpbWUsIHNldExlZnRUaW1lLCBpbml0aWFsVGltZSB9KSA9PiB7XG4gIGNvbnN0IG1pbFRvU2Vjb25kcyA9IGxlZnRUaW1lID0+IHtcbiAgICBsZXQgbGVmdFNlY29uZHMgPSBNYXRoLmNlaWwobGVmdFRpbWUgLyAxMDAwKVxuICAgICAgLnRvU3RyaW5nKClcbiAgICAgIC5wYWRTdGFydCgyLCAnMCcpO1xuICAgIHJldHVybiBsZWZ0U2Vjb25kcztcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lcjtcbiAgICB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldExlZnRUaW1lKGluaXRpYWxUaW1lIC0gbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgIH0sIDEwMDApO1xuICAgIGxlZnRUaW1lIDwgMCAmJiBjbGVhckludGVydmFsKHRpbWVyKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgfSwgW2luaXRpYWxUaW1lLCBsZWZ0VGltZSwgc2V0TGVmdFRpbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxUaW1lclRleHQ+XG4gICAgICB7bWlsVG9TZWNvbmRzKGxlZnRUaW1lKSA+IDAgPyBtaWxUb1NlY29uZHMobGVmdFRpbWUpIDogYDAwYH1cbiAgICA8L1RpbWVyVGV4dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVyO1xuXG5jb25zdCBUaW1lclRleHQgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLndoaXRlLndoaXRlMTAwfTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbmA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJzdHlsZWQiLCJUaW1lciIsImxlZnRUaW1lIiwic2V0TGVmdFRpbWUiLCJpbml0aWFsVGltZSIsIm1pbFRvU2Vjb25kcyIsImxlZnRTZWNvbmRzIiwiTWF0aCIsImNlaWwiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsIkRhdGUiLCJnZXRUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIlRpbWVyVGV4dCIsInAiLCJwcm9wcyIsInRoZW1lIiwid2hpdGUiLCJ3aGl0ZTEwMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/BanPick/BanPickIndicator/Timer.jsx\n"));

/***/ })

});