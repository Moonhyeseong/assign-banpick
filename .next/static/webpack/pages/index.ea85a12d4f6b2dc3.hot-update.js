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

/***/ "./src/components/GameList/GameList.js":
/*!*********************************************!*\
  !*** ./src/components/GameList/GameList.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_moonhyeseong_Documents_assign_banpick_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _ListFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListFilter */ \"./src/components/GameList/ListFilter.js\");\n/* harmony import */ var _GameRoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameRoom */ \"./src/components/GameList/GameRoom.js\");\n/* harmony import */ var _Modal_GameListModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Modal/GameListModal */ \"./src/components/Modal/GameListModal.js\");\n/* harmony import */ var _CONSTDATA_CONSTDATA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CONSTDATA/CONSTDATA */ \"./src/components/CONSTDATA/CONSTDATA.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Modal_Form_userDataSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Modal/Form/userDataSlice */ \"./src/components/Modal/Form/userDataSlice.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config */ \"./src/config.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _jsxFileName = \"/Users/moonhyeseong/Documents/assign-banpick/src/components/GameList/GameList.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_Users_moonhyeseong_Documents_assign_banpick_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\nconst GameList = _ref => {\n  _s();\n\n  let {\n    gameData\n  } = _ref;\n  console.log(gameData);\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n  const {\n    0: isModalActive,\n    1: setIsModalActive\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: selectedGameData,\n    1: setSelectedGameData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    0: games,\n    1: setGames\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  const {\n    0: filterData,\n    1: setFilterData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    searchFilter: '',\n    checkBoxFilter: {\n      one: '',\n      five: ''\n    }\n  }); //socket\n  // socket.once('updateGameList', () => {\n  //   setTimeout(() => {\n  //     getGameListAPI();\n  //   }, 100);\n  // });\n  //필터 적용 게임 리스트\n\n  const getGameList = () => {\n    const gameList = games?.filter(game => {\n      return game?.mode !== _CONSTDATA_CONSTDATA__WEBPACK_IMPORTED_MODULE_5__.CONSTDATA.MODEDATA.solo && game?.title.includes(filterData.searchFilter) || filterData.searchFilter.length > 8 && game?._id.includes(filterData.searchFilter);\n    });\n    const filterdByModeList = gameList?.filter(game => {\n      return game?.mode === filterData.checkBoxFilter.one || game?.mode === filterData.checkBoxFilter.five;\n    });\n\n    if (filterData.checkBoxFilter.one !== '' || filterData.checkBoxFilter.five !== '') {\n      return filterdByModeList;\n    } else {\n      return gameList;\n    }\n  }; //모달 실행\n\n\n  const showModal = (type, mode, userList) => {\n    setIsModalActive(true);\n    setSelectedGameData(_objectSpread(_objectSpread({}, selectedGameData), {}, {\n      type: type,\n      gameMode: mode,\n      userList: userList\n    }));\n  };\n\n  const initModalState = () => {\n    setIsModalActive(false);\n    setSelectedGameData('');\n    sessionStorage.removeItem('GAME_ID');\n    dispatch((0,_Modal_Form_userDataSlice__WEBPACK_IMPORTED_MODULE_7__.initUserData)());\n  }; //게임리스트 호출\n\n\n  const getGameListAPI = () => {// fetch(`${BASE_URL}:8080/list`)\n    //   .then(res => res.json())\n    //   .then(res => setGames(res));\n  }; //게임리스트 get\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    getGameListAPI();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(GameListLayout, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ListFilter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      showModal: showModal,\n      setFilterData: setFilterData,\n      filterData: filterData\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, undefined), isModalActive && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Modal_GameListModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      initModalState: initModalState,\n      selectedGameData: selectedGameData,\n      setSelectedGameData: setSelectedGameData,\n      showModal: showModal\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(GameRoomsLayout, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(GameRoomContainer, {\n        children: getGameList()?.length ? getGameList()?.map(gameData => {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_GameRoom__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            gameData: gameData,\n            showModal: showModal\n          }, gameData._id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 17\n          }, undefined);\n        }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(EmptyList, {\n          children: \"\\uC0DD\\uC131\\uB41C \\uAC8C\\uC784\\uC774 \\uC5C6\\uC2B5\\uB2C8\\uB2E4.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 94,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(GameList, \"HFieqvQiGkfoyVmRRNafVElCC/0=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch];\n});\n\n_c = GameList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameList);\nconst GameListLayout = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n  displayName: \"GameList__GameListLayout\",\n  componentId: \"sc-97fbyx-0\"\n})([\"display:flex;flex-direction:column;padding:4px;\"]);\n_c2 = GameListLayout;\nconst GameRoomsLayout = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n  displayName: \"GameList__GameRoomsLayout\",\n  componentId: \"sc-97fbyx-1\"\n})([\"text-align:center;width:100%;height:80vh;overflow-y:scroll;&::-webkit-scrollbar{width:8px;}&::-webkit-scrollbar-thumb{border-radius:4px;background:\", \";}\"], props => props.theme.white.white80);\n_c3 = GameRoomsLayout;\nconst GameRoomContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n  displayName: \"GameList__GameRoomContainer\",\n  componentId: \"sc-97fbyx-2\"\n})([\"display:flex;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;gap:16px;width:1332px;margin:auto;margin-top:16px;\"]);\n_c4 = GameRoomContainer;\nconst EmptyList = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n  displayName: \"GameList__EmptyList\",\n  componentId: \"sc-97fbyx-3\"\n})([\"display:flex;justify-content:center;align-items:center;font-size:36px;width:100%;height:70vh;\"]);\n_c5 = EmptyList;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"GameList\");\n$RefreshReg$(_c2, \"GameListLayout\");\n$RefreshReg$(_c3, \"GameRoomsLayout\");\n$RefreshReg$(_c4, \"GameRoomContainer\");\n$RefreshReg$(_c5, \"EmptyList\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYW1lTGlzdC9HYW1lTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTVUsUUFBUSxHQUFHLFFBQWtCO0VBQUE7O0VBQUEsSUFBakI7SUFBRUM7RUFBRixDQUFpQjtFQUNqQ0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7RUFDQSxNQUFNRyxRQUFRLEdBQUdQLHdEQUFXLEVBQTVCO0VBRUEsTUFBTTtJQUFBLEdBQUNRLGFBQUQ7SUFBQSxHQUFnQkM7RUFBaEIsSUFBb0NoQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBbEQ7RUFDQSxNQUFNO0lBQUEsR0FBQ2lCLGdCQUFEO0lBQUEsR0FBbUJDO0VBQW5CLElBQTBDbEIsK0NBQVEsQ0FBQyxFQUFELENBQXhEO0VBQ0EsTUFBTTtJQUFBLEdBQUNtQixLQUFEO0lBQUEsR0FBUUM7RUFBUixJQUFvQnBCLCtDQUFRLEVBQWxDO0VBRUEsTUFBTTtJQUFBLEdBQUNxQixVQUFEO0lBQUEsR0FBYUM7RUFBYixJQUE4QnRCLCtDQUFRLENBQUM7SUFDM0N1QixZQUFZLEVBQUUsRUFENkI7SUFFM0NDLGNBQWMsRUFBRTtNQUNkQyxHQUFHLEVBQUUsRUFEUztNQUVkQyxJQUFJLEVBQUU7SUFGUTtFQUYyQixDQUFELENBQTVDLENBUmlDLENBZ0JqQztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTs7RUFDQSxNQUFNQyxXQUFXLEdBQUcsTUFBTTtJQUN4QixNQUFNQyxRQUFRLEdBQUdULEtBQUssRUFBRVUsTUFBUCxDQUFjQyxJQUFJLElBQUk7TUFDckMsT0FDR0EsSUFBSSxFQUFFQyxJQUFOLEtBQWV6Qix5RUFBZixJQUNDd0IsSUFBSSxFQUFFSSxLQUFOLENBQVlDLFFBQVosQ0FBcUJkLFVBQVUsQ0FBQ0UsWUFBaEMsQ0FERixJQUVDRixVQUFVLENBQUNFLFlBQVgs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QUE7QUFBQSxrS0FZSGlELEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEtBQVosQ0FBa0JDLE9BWnhCLENBQXJCO01BQU1KO0FBZ0JOLE1BQU1LLGlCQUFpQixHQUFHckQseUVBQUg7RUFBQTtFQUFBO0FBQUEsMElBQXZCO01BQU1xRDtBQVdOLE1BQU1DLFNBQVMsR0FBR3RELHlFQUFIO0VBQUE7RUFBQTtBQUFBLHFHQUFmO01BQU1zRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9HYW1lTGlzdC9HYW1lTGlzdC5qcz9hNGEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMaXN0RmlsdGVyIGZyb20gJy4vTGlzdEZpbHRlcic7XG5pbXBvcnQgR2FtZVJvb20gZnJvbSAnLi9HYW1lUm9vbSc7XG5pbXBvcnQgR2FtZUxpc3RNb2RhbCBmcm9tICcuLi9Nb2RhbC9HYW1lTGlzdE1vZGFsJztcbmltcG9ydCB7IENPTlNUREFUQSB9IGZyb20gJy4uL0NPTlNUREFUQS9DT05TVERBVEEnO1xuXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGluaXRVc2VyRGF0YSB9IGZyb20gJy4uL01vZGFsL0Zvcm0vdXNlckRhdGFTbGljZSc7XG5pbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmNvbnN0IEdhbWVMaXN0ID0gKHsgZ2FtZURhdGEgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhnYW1lRGF0YSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBbaXNNb2RhbEFjdGl2ZSwgc2V0SXNNb2RhbEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZEdhbWVEYXRhLCBzZXRTZWxlY3RlZEdhbWVEYXRhXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2dhbWVzLCBzZXRHYW1lc10gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IFtmaWx0ZXJEYXRhLCBzZXRGaWx0ZXJEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBzZWFyY2hGaWx0ZXI6ICcnLFxuICAgIGNoZWNrQm94RmlsdGVyOiB7XG4gICAgICBvbmU6ICcnLFxuICAgICAgZml2ZTogJycsXG4gICAgfSxcbiAgfSk7XG5cbiAgLy9zb2NrZXRcbiAgLy8gc29ja2V0Lm9uY2UoJ3VwZGF0ZUdhbWVMaXN0JywgKCkgPT4ge1xuICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgZ2V0R2FtZUxpc3RBUEkoKTtcbiAgLy8gICB9LCAxMDApO1xuICAvLyB9KTtcblxuICAvL+2VhO2EsCDsoIHsmqkg6rKM7J6EIOumrOyKpO2KuFxuICBjb25zdCBnZXRHYW1lTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lTGlzdCA9IGdhbWVzPy5maWx0ZXIoZ2FtZSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAoZ2FtZT8ubW9kZSAhPT0gQ09OU1REQVRBLk1PREVEQVRBLnNvbG8gJiZcbiAgICAgICAgICBnYW1lPy50aXRsZS5pbmNsdWRlcyhmaWx0ZXJEYXRhLnNlYXJjaEZpbHRlcikpIHx8XG4gICAgICAgIChmaWx0ZXJEYXRhLnNlYXJjaEZpbHRlci5sZW5ndGggPiA4ICYmXG4gICAgICAgICAgZ2FtZT8uX2lkLmluY2x1ZGVzKGZpbHRlckRhdGEuc2VhcmNoRmlsdGVyKSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBmaWx0ZXJkQnlNb2RlTGlzdCA9IGdhbWVMaXN0Py5maWx0ZXIoZ2FtZSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBnYW1lPy5tb2RlID09PSBmaWx0ZXJEYXRhLmNoZWNrQm94RmlsdGVyLm9uZSB8fFxuICAgICAgICBnYW1lPy5tb2RlID09PSBmaWx0ZXJEYXRhLmNoZWNrQm94RmlsdGVyLmZpdmVcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBpZiAoXG4gICAgICBmaWx0ZXJEYXRhLmNoZWNrQm94RmlsdGVyLm9uZSAhPT0gJycgfHxcbiAgICAgIGZpbHRlckRhdGEuY2hlY2tCb3hGaWx0ZXIuZml2ZSAhPT0gJydcbiAgICApIHtcbiAgICAgIHJldHVybiBmaWx0ZXJkQnlNb2RlTGlzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdhbWVMaXN0O1xuICAgIH1cbiAgfTtcblxuICAvL+uqqOuLrCDsi6TtlolcbiAgY29uc3Qgc2hvd01vZGFsID0gKHR5cGUsIG1vZGUsIHVzZXJMaXN0KSA9PiB7XG4gICAgc2V0SXNNb2RhbEFjdGl2ZSh0cnVlKTtcbiAgICBzZXRTZWxlY3RlZEdhbWVEYXRhKHtcbiAgICAgIC4uLnNlbGVjdGVkR2FtZURhdGEsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgZ2FtZU1vZGU6IG1vZGUsXG4gICAgICB1c2VyTGlzdDogdXNlckxpc3QsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdE1vZGFsU3RhdGUgPSAoKSA9PiB7XG4gICAgc2V0SXNNb2RhbEFjdGl2ZShmYWxzZSk7XG4gICAgc2V0U2VsZWN0ZWRHYW1lRGF0YSgnJyk7XG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnR0FNRV9JRCcpO1xuICAgIGRpc3BhdGNoKGluaXRVc2VyRGF0YSgpKTtcbiAgfTtcblxuICAvL+qyjOyehOumrOyKpO2KuCDtmLjstpxcbiAgY29uc3QgZ2V0R2FtZUxpc3RBUEkgPSAoKSA9PiB7XG4gICAgLy8gZmV0Y2goYCR7QkFTRV9VUkx9OjgwODAvbGlzdGApXG4gICAgLy8gICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAvLyAgIC50aGVuKHJlcyA9PiBzZXRHYW1lcyhyZXMpKTtcbiAgfTtcblxuICAvL+qyjOyehOumrOyKpO2KuCBnZXRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRHYW1lTGlzdEFQSSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8R2FtZUxpc3RMYXlvdXQ+XG4gICAgICA8TGlzdEZpbHRlclxuICAgICAgICBzaG93TW9kYWw9e3Nob3dNb2RhbH1cbiAgICAgICAgc2V0RmlsdGVyRGF0YT17c2V0RmlsdGVyRGF0YX1cbiAgICAgICAgZmlsdGVyRGF0YT17ZmlsdGVyRGF0YX1cbiAgICAgIC8+XG4gICAgICB7aXNNb2RhbEFjdGl2ZSAmJiAoXG4gICAgICAgIDxHYW1lTGlzdE1vZGFsXG4gICAgICAgICAgaW5pdE1vZGFsU3RhdGU9e2luaXRNb2RhbFN0YXRlfVxuICAgICAgICAgIHNlbGVjdGVkR2FtZURhdGE9e3NlbGVjdGVkR2FtZURhdGF9XG4gICAgICAgICAgc2V0U2VsZWN0ZWRHYW1lRGF0YT17c2V0U2VsZWN0ZWRHYW1lRGF0YX1cbiAgICAgICAgICBzaG93TW9kYWw9e3Nob3dNb2RhbH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8R2FtZVJvb21zTGF5b3V0PlxuICAgICAgICA8R2FtZVJvb21Db250YWluZXI+XG4gICAgICAgICAge2dldEdhbWVMaXN0KCk/Lmxlbmd0aCA/IChcbiAgICAgICAgICAgIGdldEdhbWVMaXN0KCk/Lm1hcChnYW1lRGF0YSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEdhbWVSb29tXG4gICAgICAgICAgICAgICAgICBrZXk9e2dhbWVEYXRhLl9pZH1cbiAgICAgICAgICAgICAgICAgIGdhbWVEYXRhPXtnYW1lRGF0YX1cbiAgICAgICAgICAgICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8RW1wdHlMaXN0PuyDneyEseuQnCDqsozsnoTsnbQg7JeG7Iq164uI64ukLjwvRW1wdHlMaXN0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvR2FtZVJvb21Db250YWluZXI+XG4gICAgICA8L0dhbWVSb29tc0xheW91dD5cbiAgICA8L0dhbWVMaXN0TGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZUxpc3Q7XG5cbmNvbnN0IEdhbWVMaXN0TGF5b3V0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogNHB4O1xuYDtcblxuY29uc3QgR2FtZVJvb21zTGF5b3V0ID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA4cHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUud2hpdGUud2hpdGU4MH07XG4gIH1cbmA7XG5cbmNvbnN0IEdhbWVSb29tQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTZweDtcbiAgd2lkdGg6IDEzMzJweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuYDtcblxuY29uc3QgRW1wdHlMaXN0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzB2aDtcbmA7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZWQiLCJMaXN0RmlsdGVyIiwiR2FtZVJvb20iLCJHYW1lTGlzdE1vZGFsIiwiQ09OU1REQVRBIiwidXNlRGlzcGF0Y2giLCJpbml0VXNlckRhdGEiLCJCQVNFX1VSTCIsIkdhbWVMaXN0IiwiZ2FtZURhdGEiLCJjb25zb2xlIiwibG9nIiwiZGlzcGF0Y2giLCJpc01vZGFsQWN0aXZlIiwic2V0SXNNb2RhbEFjdGl2ZSIsInNlbGVjdGVkR2FtZURhdGEiLCJzZXRTZWxlY3RlZEdhbWVEYXRhIiwiZ2FtZXMiLCJzZXRHYW1lcyIsImZpbHRlckRhdGEiLCJzZXRGaWx0ZXJEYXRhIiwic2VhcmNoRmlsdGVyIiwiY2hlY2tCb3hGaWx0ZXIiLCJvbmUiLCJmaXZlIiwiZ2V0R2FtZUxpc3QiLCJnYW1lTGlzdCIsImZpbHRlciIsImdhbWUiLCJtb2RlIiwiTU9ERURBVEEiLCJzb2xvIiwidGl0bGUiLCJpbmNsdWRlcyIsImxlbmd0aCIsIl9pZCIsImZpbHRlcmRCeU1vZGVMaXN0Iiwic2hvd01vZGFsIiwidHlwZSIsInVzZXJMaXN0IiwiZ2FtZU1vZGUiLCJpbml0TW9kYWxTdGF0ZSIsInNlc3Npb25TdG9yYWdlIiwicmVtb3ZlSXRlbSIsImdldEdhbWVMaXN0QVBJIiwibWFwIiwiR2FtZUxpc3RMYXlvdXQiLCJkaXYiLCJHYW1lUm9vbXNMYXlvdXQiLCJwcm9wcyIsInRoZW1lIiwid2hpdGUiLCJ3aGl0ZTgwIiwiR2FtZVJvb21Db250YWluZXIiLCJFbXB0eUxpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/GameList/GameList.js\n"));

/***/ })

});