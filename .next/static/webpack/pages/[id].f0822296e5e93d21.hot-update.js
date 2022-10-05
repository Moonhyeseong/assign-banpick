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

/***/ "./src/components/BanPick/PickBanList/BanCard.js":
/*!*******************************************************!*\
  !*** ./src/components/BanPick/PickBanList/BanCard.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/moonhyeseong/Documents/assign-banpick/src/components/BanPick/PickBanList/BanCard.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nconst BanCard = _ref => {\n  _s();\n\n  let {\n    index,\n    champion,\n    side,\n    selectedChampion,\n    banList,\n    turn,\n    phaseInfo\n  } = _ref;\n  const {\n    0: isSelecting,\n    1: setIsSelecting\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const currentIndex = banList.indexOf('');\n\n  const getImgURL = () => {\n    if (champion === 'NO DATA') {\n      return 'https://ddragon.leagueoflegends.com/cdn/12.13.1/img/profileicon/29.png';\n    } else if (champion) {\n      return `http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/${champion}.png`;\n    } else if (selectedChampion) {\n      return `http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/${selectedChampion}.png`;\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setIsSelecting(false);\n\n    if (phaseInfo === 'ban') {\n      if (turn === side) {\n        setIsSelecting(currentIndex === index);\n      }\n\n      if (champion) {\n        setIsSelecting(true);\n      }\n    }\n  }, [champion, currentIndex, index, phaseInfo, side, turn]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(BanCardLayout, {\n    children: (isSelecting || champion) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(BanCardImage, {\n      imgURL: getImgURL(),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GradientMask, {\n        side: side,\n        isSelecting: isSelecting,\n        champion: champion,\n        index: index\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(BanCard, \"Ew0q32yA9F/s50fIiczGPUjSegk=\");\n\n_c = BanCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BanCard);\nconst BanCardLayout = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"BanCard__BanCardLayout\",\n  componentId: \"sc-q8ac38-0\"\n})([\"position:relative;width:66px;height:66px;border:1px solid \", \";\"], props => props.theme.black.black85);\n_c2 = BanCardLayout;\nconst BanCardImage = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"BanCard__BanCardImage\",\n  componentId: \"sc-q8ac38-1\"\n})([\"position:absolute;width:100%;height:100%;background-image:\", \";background-repeat:no-repeat;background-size:cover;background-position:center;\"], props => `url(${props.imgURL})`);\n_c3 = BanCardImage;\nconst GradientMask = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"BanCard__GradientMask\",\n  componentId: \"sc-q8ac38-2\"\n})([\"width:100%;height:100%;\", \" \", \" @keyframes blink{0%{opacity:0;}100%{opacity:1;}}\"], props => props.side === 'blue' && props.isSelecting && !props.champion && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)([\"background:linear-gradient( to top,\", \" 5%,rgba(0,0,0,0) );animation:blink 0.5s ease-in-out infinite alternate;\"], props => props.theme.blue.blueB40), props => props.side === 'red' && props.isSelecting && !props.champion && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)([\"background:linear-gradient( to top,\", \" 5%,rgba(0,0,0,0) );animation:blink 0.5s ease-in-out infinite alternate;\"], props => props.theme.red.redB40));\n_c4 = GradientMask;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"BanCard\");\n$RefreshReg$(_c2, \"BanCardLayout\");\n$RefreshReg$(_c3, \"BanCardImage\");\n$RefreshReg$(_c4, \"GradientMask\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CYW5QaWNrL1BpY2tCYW5MaXN0L0JhbkNhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsTUFBTUssT0FBTyxHQUFHLFFBUVY7RUFBQTs7RUFBQSxJQVJXO0lBQ2ZDLEtBRGU7SUFFZkMsUUFGZTtJQUdmQyxJQUhlO0lBSWZDLGdCQUplO0lBS2ZDLE9BTGU7SUFNZkMsSUFOZTtJQU9mQztFQVBlLENBUVg7RUFDSixNQUFNO0lBQUEsR0FBQ0MsV0FBRDtJQUFBLEdBQWNDO0VBQWQsSUFBZ0NaLCtDQUFRLENBQUMsS0FBRCxDQUE5QztFQUNBLE1BQU1hLFlBQVksR0FBR0wsT0FBTyxDQUFDTSxPQUFSLENBQWdCLEVBQWhCLENBQXJCOztFQUVBLE1BQU1DLFNBQVMsR0FBRyxNQUFNO0lBQ3RCLElBQUlWLFFBQVEsS0FBSyxTQUFqQixFQUE0QjtNQUMxQixPQUFPLHdFQUFQO0lBQ0QsQ0FGRCxNQUVPLElBQUlBLFFBQUosRUFBYztNQUNuQixPQUFRLCtEQUE4REEsUUFBUyxNQUEvRTtJQUNELENBRk0sTUFFQSxJQUFJRSxnQkFBSixFQUFzQjtNQUMzQixPQUFRLCtEQUE4REEsZ0JBQWlCLE1BQXZGO0lBQ0Q7RUFDRixDQVJEOztFQVVBUixnREFBUyxDQUFDLE1BQU07SUFDZGEsY0FBYyxDQUFDLEtBQUQsQ0FBZDs7SUFDQSxJQUFJRixTQUFTLEtBQUssS0FBbEIsRUFBeUI7TUFDdkIsSUFBSUQsSUFBSSxLQUFLSCxJQUFiLEVBQW1CO1FBQ2pCTSxjQUFjLENBQUNDLFlBQVksS0FBS1QsS0FBbEIsQ0FBZDtNQUNEOztNQUVELElBQUlDLFFBQUosRUFBYztRQUNaTyxjQUFjLENBQUMsSUFBRCxDQUFkO01BQ0Q7SUFDRjtFQUNGLENBWFEsRUFXTixDQUFDUCxRQUFELEVBQVdRLFlBQVgsRUFBeUJULEtBQXpCLEVBQWdDTSxTQUFoQyxFQUEyQ0osSUFBM0MsRUFBaURHLElBQWpELENBWE0sQ0FBVDtFQWFBLG9CQUNFLDhEQUFDLGFBQUQ7SUFBQSxVQUNHLENBQUNFLFdBQVcsSUFBSU4sUUFBaEIsa0JBQ0MsOERBQUMsWUFBRDtNQUFjLE1BQU0sRUFBRVUsU0FBUyxFQUEvQjtNQUFBLHVCQUNFLDhEQUFDLFlBQUQ7UUFDRSxJQUFJLEVBQUVULElBRFI7UUFFRSxXQUFXLEVBQUVLLFdBRmY7UUFHRSxRQUFRLEVBQUVOLFFBSFo7UUFJRSxLQUFLLEVBQUVEO01BSlQ7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFGSjtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREY7QUFjRCxDQWpERDs7R0FBTUQ7O0tBQUFBO0FBbUROLCtEQUFlQSxPQUFmO0FBRUEsTUFBTWEsYUFBYSxHQUFHZix3RUFBSDtFQUFBO0VBQUE7QUFBQSx3RUFJR2lCLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEtBQVosQ0FBa0JDLE9BSjlCLENBQW5CO01BQU1MO0FBT04sTUFBTU0sWUFBWSxHQUFHckIsd0VBQUg7RUFBQTtFQUFBO0FBQUEscUpBSUlpQixLQUFLLElBQUssT0FBTUEsS0FBSyxDQUFDSyxNQUFPLEdBSmpDLENBQWxCO01BQU1EO0FBVU4sTUFBTUUsWUFBWSxHQUFHdkIsd0VBQUg7RUFBQTtFQUFBO0FBQUEsMEZBSWRpQixLQUFLLElBQ0xBLEtBQUssQ0FBQ1osSUFBTixLQUFlLE1BQWYsSUFDQVksS0FBSyxDQUFDUCxXQUROLElBRUEsQ0FBQ08sS0FBSyxDQUFDYixRQUZQLElBR0FILHNEQUhBLHNIQU1NZ0IsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWU0sSUFBWixDQUFpQkMsT0FOaEMsQ0FMYyxFQWlCZFIsS0FBSyxJQUNMQSxLQUFLLENBQUNaLElBQU4sS0FBZSxLQUFmLElBQ0FZLEtBQUssQ0FBQ1AsV0FETixJQUVBLENBQUNPLEtBQUssQ0FBQ2IsUUFGUCxJQUdBSCxzREFIQSxzSEFNTWdCLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlRLEdBQVosQ0FBZ0JDLE1BTi9CLENBbEJjLENBQWxCO01BQU1KIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0JhblBpY2svUGlja0Jhbkxpc3QvQmFuQ2FyZC5qcz9kN2U5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEJhbkNhcmQgPSAoe1xuICBpbmRleCxcbiAgY2hhbXBpb24sXG4gIHNpZGUsXG4gIHNlbGVjdGVkQ2hhbXBpb24sXG4gIGJhbkxpc3QsXG4gIHR1cm4sXG4gIHBoYXNlSW5mbyxcbn0pID0+IHtcbiAgY29uc3QgW2lzU2VsZWN0aW5nLCBzZXRJc1NlbGVjdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGN1cnJlbnRJbmRleCA9IGJhbkxpc3QuaW5kZXhPZignJyk7XG5cbiAgY29uc3QgZ2V0SW1nVVJMID0gKCkgPT4ge1xuICAgIGlmIChjaGFtcGlvbiA9PT0gJ05PIERBVEEnKSB7XG4gICAgICByZXR1cm4gJ2h0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMi4xMy4xL2ltZy9wcm9maWxlaWNvbi8yOS5wbmcnO1xuICAgIH0gZWxzZSBpZiAoY2hhbXBpb24pIHtcbiAgICAgIHJldHVybiBgaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTIuMTQuMS9pbWcvY2hhbXBpb24vJHtjaGFtcGlvbn0ucG5nYDtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQ2hhbXBpb24pIHtcbiAgICAgIHJldHVybiBgaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTIuMTQuMS9pbWcvY2hhbXBpb24vJHtzZWxlY3RlZENoYW1waW9ufS5wbmdgO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzU2VsZWN0aW5nKGZhbHNlKTtcbiAgICBpZiAocGhhc2VJbmZvID09PSAnYmFuJykge1xuICAgICAgaWYgKHR1cm4gPT09IHNpZGUpIHtcbiAgICAgICAgc2V0SXNTZWxlY3RpbmcoY3VycmVudEluZGV4ID09PSBpbmRleCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFtcGlvbikge1xuICAgICAgICBzZXRJc1NlbGVjdGluZyh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtjaGFtcGlvbiwgY3VycmVudEluZGV4LCBpbmRleCwgcGhhc2VJbmZvLCBzaWRlLCB0dXJuXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QmFuQ2FyZExheW91dD5cbiAgICAgIHsoaXNTZWxlY3RpbmcgfHwgY2hhbXBpb24pICYmIChcbiAgICAgICAgPEJhbkNhcmRJbWFnZSBpbWdVUkw9e2dldEltZ1VSTCgpfT5cbiAgICAgICAgICA8R3JhZGllbnRNYXNrXG4gICAgICAgICAgICBzaWRlPXtzaWRlfVxuICAgICAgICAgICAgaXNTZWxlY3Rpbmc9e2lzU2VsZWN0aW5nfVxuICAgICAgICAgICAgY2hhbXBpb249e2NoYW1waW9ufVxuICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQmFuQ2FyZEltYWdlPlxuICAgICAgKX1cbiAgICA8L0JhbkNhcmRMYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYW5DYXJkO1xuXG5jb25zdCBCYW5DYXJkTGF5b3V0ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjZweDtcbiAgaGVpZ2h0OiA2NnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJsYWNrLmJsYWNrODV9O1xuYDtcblxuY29uc3QgQmFuQ2FyZEltYWdlID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAke3Byb3BzID0+IGB1cmwoJHtwcm9wcy5pbWdVUkx9KWB9O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBHcmFkaWVudE1hc2sgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gICR7cHJvcHMgPT5cbiAgICBwcm9wcy5zaWRlID09PSAnYmx1ZScgJiZcbiAgICBwcm9wcy5pc1NlbGVjdGluZyAmJlxuICAgICFwcm9wcy5jaGFtcGlvbiAmJlxuICAgIGNzc2BcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgdG8gdG9wLFxuICAgICAgICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJsdWUuYmx1ZUI0MH0gNSUsXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMClcbiAgICAgICk7XG4gICAgICBhbmltYXRpb246IGJsaW5rIDAuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIGB9XG5cbiAgJHtwcm9wcyA9PlxuICAgIHByb3BzLnNpZGUgPT09ICdyZWQnICYmXG4gICAgcHJvcHMuaXNTZWxlY3RpbmcgJiZcbiAgICAhcHJvcHMuY2hhbXBpb24gJiZcbiAgICBjc3NgXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHRvIHRvcCxcbiAgICAgICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5yZWQucmVkQjQwfSA1JSxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwKVxuICAgICAgKTtcbiAgICAgIGFuaW1hdGlvbjogYmxpbmsgMC41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgYH1cblxuICBAa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5gO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJjc3MiLCJCYW5DYXJkIiwiaW5kZXgiLCJjaGFtcGlvbiIsInNpZGUiLCJzZWxlY3RlZENoYW1waW9uIiwiYmFuTGlzdCIsInR1cm4iLCJwaGFzZUluZm8iLCJpc1NlbGVjdGluZyIsInNldElzU2VsZWN0aW5nIiwiY3VycmVudEluZGV4IiwiaW5kZXhPZiIsImdldEltZ1VSTCIsIkJhbkNhcmRMYXlvdXQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiYmxhY2siLCJibGFjazg1IiwiQmFuQ2FyZEltYWdlIiwiaW1nVVJMIiwiR3JhZGllbnRNYXNrIiwiYmx1ZSIsImJsdWVCNDAiLCJyZWQiLCJyZWRCNDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/BanPick/PickBanList/BanCard.js\n"));

/***/ })

});