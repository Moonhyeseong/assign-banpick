"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/GameList",{

/***/ "./src/pages/GameList.js":
/*!*******************************!*\
  !*** ./src/pages/GameList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_GameList_ListFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GameList/ListFilter */ \"./src/components/GameList/ListFilter.js\");\n/* harmony import */ var _components_GameList_GameRoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GameList/GameRoom */ \"./src/components/GameList/GameRoom.js\");\n/* harmony import */ var _components_Modal_GameListModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Modal/GameListModal */ \"./src/components/Modal/GameListModal.js\");\n/* harmony import */ var _components_CONSTDATA__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CONSTDATA */ \"./src/components/CONSTDATA.js\");\n/* harmony import */ var _context_socket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/socket */ \"./src/context/socket.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Modal_Form_userDataSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Modal/Form/userDataSlice */ \"./src/components/Modal/Form/userDataSlice.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\n\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  padding: 4px;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  text-align: center;\\n  width: 100%;\\n  height: 80vh;\\n  overflow-y: scroll;\\n\\n  &::-webkit-scrollbar {\\n    width: 8px;\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    border-radius: 4px;\\n    background: \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: flex-start;\\n  align-content: flex-start;\\n  gap: 16px;\\n  width: 1332px;\\n  margin: auto;\\n  margin-top: 16px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 36px;\\n  width: 100%;\\n  height: 70vh;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar GameList = function() {\n    var ref, ref1;\n    _s();\n    var socket = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_socket__WEBPACK_IMPORTED_MODULE_7__.SocketContext);\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isModalActive = ref2[0], setIsModalActive = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), selectedGameData = ref3[0], setSelectedGameData = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), games = ref4[0], setGames = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        searchFilter: \"\",\n        checkBoxFilter: {\n            one: \"\",\n            five: \"\"\n        }\n    }), filterData = ref5[0], setFilterData = ref5[1];\n    //socket\n    socket.onc(\"updateGameList\", function() {\n        setTimeout(function() {\n            getGameListAPI();\n        }, 100);\n    });\n    //필터 적용 게임 리스트\n    var getGameList = function() {\n        var gameList = games === null || games === void 0 ? void 0 : games.filter(function(game) {\n            return (game === null || game === void 0 ? void 0 : game.mode) !== _components_CONSTDATA__WEBPACK_IMPORTED_MODULE_6__.CONSTDATA.MODEDATA.solo && (game === null || game === void 0 ? void 0 : game.title.includes(filterData.searchFilter)) || filterData.searchFilter.length > 8 && (game === null || game === void 0 ? void 0 : game._id.includes(filterData.searchFilter));\n        });\n        var filterdByModeList = gameList === null || gameList === void 0 ? void 0 : gameList.filter(function(game) {\n            return (game === null || game === void 0 ? void 0 : game.mode) === filterData.checkBoxFilter.one || (game === null || game === void 0 ? void 0 : game.mode) === filterData.checkBoxFilter.five;\n        });\n        if (filterData.checkBoxFilter.one !== \"\" || filterData.checkBoxFilter.five !== \"\") {\n            return filterdByModeList;\n        } else {\n            return gameList;\n        }\n    };\n    //모달 실행\n    var showModal = function(type, mode, userList) {\n        setIsModalActive(true);\n        setSelectedGameData((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])({}, selectedGameData), {\n            type: type,\n            gameMode: mode,\n            userList: userList\n        }));\n    };\n    var initModalState = function() {\n        setIsModalActive(false);\n        setSelectedGameData(\"\");\n        sessionStorage.removeItem(\"GAME_ID\");\n        dispatch((0,_components_Modal_Form_userDataSlice__WEBPACK_IMPORTED_MODULE_9__.initUserData)());\n    };\n    var getGameListAPI = function() {\n        fetch(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_10__.BASE_URL, \":8080/list\")).then(function(res) {\n            return res.json();\n        }).then(function(res) {\n            return setGames(res);\n        });\n    };\n    //게임리스트 get\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getGameListAPI();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GameListLayout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_GameList_ListFilter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                showModal: showModal,\n                setFilterData: setFilterData,\n                filterData: filterData\n            }, void 0, false, {\n                fileName: \"/Users/moonhyeseong/Documents/assign-banpick/src/pages/GameList.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, _this),\n            isModalActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Modal_GameListModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                initModalState: initModalState,\n                selectedGameData: selectedGameData,\n                setSelectedGameData: setSelectedGameData,\n                showModal: showModal\n            }, void 0, false, {\n                fileName: \"/Users/moonhyeseong/Documents/assign-banpick/src/pages/GameList.js\",\n                lineNumber: 100,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GameRoomsLayout, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GameRoomContainer, {\n                    children: [\n                        (ref = getGameList()) === null || ref === void 0 ? void 0 : ref.map(function(gameData) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_GameList_GameRoom__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                gameData: gameData,\n                                showModal: showModal\n                            }, gameData._id, false, {\n                                fileName: \"/Users/moonhyeseong/Documents/assign-banpick/src/pages/GameList.js\",\n                                lineNumber: 111,\n                                columnNumber: 15\n                            }, _this);\n                        }),\n                        ((ref1 = getGameList()) === null || ref1 === void 0 ? void 0 : ref1.length) < 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(EmptyList, {\n                            children: \"생성된 게임이 없습니다.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/moonhyeseong/Documents/assign-banpick/src/pages/GameList.js\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/moonhyeseong/Documents/assign-banpick/src/pages/GameList.js\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/moonhyeseong/Documents/assign-banpick/src/pages/GameList.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/moonhyeseong/Documents/assign-banpick/src/pages/GameList.js\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, _this);\n};\n_s(GameList, \"LbH7NFnkffjTqRRlF9ok/jBmM1U=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch\n    ];\n});\n_c = GameList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameList);\nvar GameListLayout = styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"].div(_templateObject());\n_c1 = GameListLayout;\nvar GameRoomsLayout = styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"].div(_templateObject1(), function(props) {\n    return props.theme.white.white80;\n});\n_c2 = GameRoomsLayout;\nvar GameRoomContainer = styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"].div(_templateObject2());\n_c3 = GameRoomContainer;\nvar EmptyList = styled_components__WEBPACK_IMPORTED_MODULE_13__[\"default\"].div(_templateObject3());\n_c4 = EmptyList;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameList\");\n$RefreshReg$(_c1, \"GameListLayout\");\n$RefreshReg$(_c2, \"GameRoomsLayout\");\n$RefreshReg$(_c3, \"GameRoomContainer\");\n$RefreshReg$(_c4, \"EmptyList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUV4QixJQUFNeUMsY0FBYyxHQUFHbEQsOERBQVUsbUJBSWhDO0FBSktrRCxNQUFBQSxjQUFjO0FBTXBCLElBQU1DLGVBQWUsR0FBR25ELDhEQUFVLHFCQVloQnlELFNBQUFBLEtBQUs7V0FBSUEsS0FBSyxDQUFDQyxLQUFLLENBQUNDLEtBQUssQ0FBQ0MsT0FBTztDQUFBLENBRW5EO0FBZEtULE1BQUFBLGVBQWU7QUFnQnJCLElBQU1DLGlCQUFpQixHQUFHcEQsOERBQVUsb0JBU25DO0FBVEtvRCxNQUFBQSxpQkFBaUI7QUFXdkIsSUFBTUcsU0FBUyxHQUFHdkQsOERBQVUsb0JBTzNCO0FBUEt1RCxNQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9HYW1lTGlzdC5qcz9mYWI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTGlzdEZpbHRlciBmcm9tICcuLi9jb21wb25lbnRzL0dhbWVMaXN0L0xpc3RGaWx0ZXInO1xuaW1wb3J0IEdhbWVSb29tIGZyb20gJy4uL2NvbXBvbmVudHMvR2FtZUxpc3QvR2FtZVJvb20nO1xuaW1wb3J0IEdhbWVMaXN0TW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2RhbC9HYW1lTGlzdE1vZGFsJztcbmltcG9ydCB7IENPTlNUREFUQSB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ09OU1REQVRBJztcbmltcG9ydCB7IFNvY2tldENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L3NvY2tldCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGluaXRVc2VyRGF0YSB9IGZyb20gJy4uL2NvbXBvbmVudHMvTW9kYWwvRm9ybS91c2VyRGF0YVNsaWNlJztcbmltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3QgR2FtZUxpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHNvY2tldCA9IHVzZUNvbnRleHQoU29ja2V0Q29udGV4dCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBbaXNNb2RhbEFjdGl2ZSwgc2V0SXNNb2RhbEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZEdhbWVEYXRhLCBzZXRTZWxlY3RlZEdhbWVEYXRhXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2dhbWVzLCBzZXRHYW1lc10gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IFtmaWx0ZXJEYXRhLCBzZXRGaWx0ZXJEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBzZWFyY2hGaWx0ZXI6ICcnLFxuICAgIGNoZWNrQm94RmlsdGVyOiB7XG4gICAgICBvbmU6ICcnLFxuICAgICAgZml2ZTogJycsXG4gICAgfSxcbiAgfSk7XG5cbiAgLy9zb2NrZXRcbiAgc29ja2V0Lm9uYygndXBkYXRlR2FtZUxpc3QnLCAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBnZXRHYW1lTGlzdEFQSSgpO1xuICAgIH0sIDEwMCk7XG4gIH0pO1xuXG4gIC8v7ZWE7YSwIOyggeyaqSDqsozsnoQg66as7Iqk7Yq4XG4gIGNvbnN0IGdldEdhbWVMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGdhbWVMaXN0ID0gZ2FtZXM/LmZpbHRlcihnYW1lID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIChnYW1lPy5tb2RlICE9PSBDT05TVERBVEEuTU9ERURBVEEuc29sbyAmJlxuICAgICAgICAgIGdhbWU/LnRpdGxlLmluY2x1ZGVzKGZpbHRlckRhdGEuc2VhcmNoRmlsdGVyKSkgfHxcbiAgICAgICAgKGZpbHRlckRhdGEuc2VhcmNoRmlsdGVyLmxlbmd0aCA+IDggJiZcbiAgICAgICAgICBnYW1lPy5faWQuaW5jbHVkZXMoZmlsdGVyRGF0YS5zZWFyY2hGaWx0ZXIpKVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbHRlcmRCeU1vZGVMaXN0ID0gZ2FtZUxpc3Q/LmZpbHRlcihnYW1lID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGdhbWU/Lm1vZGUgPT09IGZpbHRlckRhdGEuY2hlY2tCb3hGaWx0ZXIub25lIHx8XG4gICAgICAgIGdhbWU/Lm1vZGUgPT09IGZpbHRlckRhdGEuY2hlY2tCb3hGaWx0ZXIuZml2ZVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGlmIChcbiAgICAgIGZpbHRlckRhdGEuY2hlY2tCb3hGaWx0ZXIub25lICE9PSAnJyB8fFxuICAgICAgZmlsdGVyRGF0YS5jaGVja0JveEZpbHRlci5maXZlICE9PSAnJ1xuICAgICkge1xuICAgICAgcmV0dXJuIGZpbHRlcmRCeU1vZGVMaXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2FtZUxpc3Q7XG4gICAgfVxuICB9O1xuXG4gIC8v66qo64usIOyLpO2WiVxuICBjb25zdCBzaG93TW9kYWwgPSAodHlwZSwgbW9kZSwgdXNlckxpc3QpID0+IHtcbiAgICBzZXRJc01vZGFsQWN0aXZlKHRydWUpO1xuICAgIHNldFNlbGVjdGVkR2FtZURhdGEoe1xuICAgICAgLi4uc2VsZWN0ZWRHYW1lRGF0YSxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBnYW1lTW9kZTogbW9kZSxcbiAgICAgIHVzZXJMaXN0OiB1c2VyTGlzdCxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpbml0TW9kYWxTdGF0ZSA9ICgpID0+IHtcbiAgICBzZXRJc01vZGFsQWN0aXZlKGZhbHNlKTtcbiAgICBzZXRTZWxlY3RlZEdhbWVEYXRhKCcnKTtcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdHQU1FX0lEJyk7XG4gICAgZGlzcGF0Y2goaW5pdFVzZXJEYXRhKCkpO1xuICB9O1xuXG4gIGNvbnN0IGdldEdhbWVMaXN0QVBJID0gKCkgPT4ge1xuICAgIGZldGNoKGAke0JBU0VfVVJMfTo4MDgwL2xpc3RgKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihyZXMgPT4gc2V0R2FtZXMocmVzKSk7XG4gIH07XG5cbiAgLy/qsozsnoTrpqzsiqTtirggZ2V0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0R2FtZUxpc3RBUEkoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEdhbWVMaXN0TGF5b3V0PlxuICAgICAgPExpc3RGaWx0ZXJcbiAgICAgICAgc2hvd01vZGFsPXtzaG93TW9kYWx9XG4gICAgICAgIHNldEZpbHRlckRhdGE9e3NldEZpbHRlckRhdGF9XG4gICAgICAgIGZpbHRlckRhdGE9e2ZpbHRlckRhdGF9XG4gICAgICAvPlxuICAgICAge2lzTW9kYWxBY3RpdmUgJiYgKFxuICAgICAgICA8R2FtZUxpc3RNb2RhbFxuICAgICAgICAgIGluaXRNb2RhbFN0YXRlPXtpbml0TW9kYWxTdGF0ZX1cbiAgICAgICAgICBzZWxlY3RlZEdhbWVEYXRhPXtzZWxlY3RlZEdhbWVEYXRhfVxuICAgICAgICAgIHNldFNlbGVjdGVkR2FtZURhdGE9e3NldFNlbGVjdGVkR2FtZURhdGF9XG4gICAgICAgICAgc2hvd01vZGFsPXtzaG93TW9kYWx9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPEdhbWVSb29tc0xheW91dD5cbiAgICAgICAgPEdhbWVSb29tQ29udGFpbmVyPlxuICAgICAgICAgIHtnZXRHYW1lTGlzdCgpPy5tYXAoZ2FtZURhdGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEdhbWVSb29tXG4gICAgICAgICAgICAgICAga2V5PXtnYW1lRGF0YS5faWR9XG4gICAgICAgICAgICAgICAgZ2FtZURhdGE9e2dhbWVEYXRhfVxuICAgICAgICAgICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgICB7Z2V0R2FtZUxpc3QoKT8ubGVuZ3RoIDwgMSAmJiAoXG4gICAgICAgICAgICA8RW1wdHlMaXN0PuyDneyEseuQnCDqsozsnoTsnbQg7JeG7Iq164uI64ukLjwvRW1wdHlMaXN0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvR2FtZVJvb21Db250YWluZXI+XG4gICAgICA8L0dhbWVSb29tc0xheW91dD5cbiAgICA8L0dhbWVMaXN0TGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZUxpc3Q7XG5cbmNvbnN0IEdhbWVMaXN0TGF5b3V0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogNHB4O1xuYDtcblxuY29uc3QgR2FtZVJvb21zTGF5b3V0ID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA4cHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUud2hpdGUud2hpdGU4MH07XG4gIH1cbmA7XG5cbmNvbnN0IEdhbWVSb29tQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTZweDtcbiAgd2lkdGg6IDEzMzJweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuYDtcblxuY29uc3QgRW1wdHlMaXN0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzB2aDtcbmA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJzdHlsZWQiLCJMaXN0RmlsdGVyIiwiR2FtZVJvb20iLCJHYW1lTGlzdE1vZGFsIiwiQ09OU1REQVRBIiwiU29ja2V0Q29udGV4dCIsInVzZURpc3BhdGNoIiwiaW5pdFVzZXJEYXRhIiwiQkFTRV9VUkwiLCJHYW1lTGlzdCIsImdldEdhbWVMaXN0Iiwic29ja2V0IiwiZGlzcGF0Y2giLCJpc01vZGFsQWN0aXZlIiwic2V0SXNNb2RhbEFjdGl2ZSIsInNlbGVjdGVkR2FtZURhdGEiLCJzZXRTZWxlY3RlZEdhbWVEYXRhIiwiZ2FtZXMiLCJzZXRHYW1lcyIsInNlYXJjaEZpbHRlciIsImNoZWNrQm94RmlsdGVyIiwib25lIiwiZml2ZSIsImZpbHRlckRhdGEiLCJzZXRGaWx0ZXJEYXRhIiwib25jIiwic2V0VGltZW91dCIsImdldEdhbWVMaXN0QVBJIiwiZ2FtZUxpc3QiLCJmaWx0ZXIiLCJnYW1lIiwibW9kZSIsIk1PREVEQVRBIiwic29sbyIsInRpdGxlIiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJfaWQiLCJmaWx0ZXJkQnlNb2RlTGlzdCIsInNob3dNb2RhbCIsInR5cGUiLCJ1c2VyTGlzdCIsImdhbWVNb2RlIiwiaW5pdE1vZGFsU3RhdGUiLCJzZXNzaW9uU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiR2FtZUxpc3RMYXlvdXQiLCJHYW1lUm9vbXNMYXlvdXQiLCJHYW1lUm9vbUNvbnRhaW5lciIsIm1hcCIsImdhbWVEYXRhIiwiRW1wdHlMaXN0IiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsIndoaXRlIiwid2hpdGU4MCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/GameList.js\n"));

/***/ })

});