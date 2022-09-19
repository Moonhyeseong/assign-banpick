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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Modal_Form_userDataSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Modal/Form/userDataSlice */ \"./src/components/Modal/Form/userDataSlice.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst makeStore = ()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: {\n            userFormData: _components_Modal_Form_userDataSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n        }\n    });\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.createWrapper)(makeStore);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3N0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrRDtBQUNtQjtBQUNsQjtBQUVuRCxNQUFNRyxTQUFTLEdBQUcsSUFDaEJILGdFQUFjLENBQUM7UUFDYkksT0FBTyxFQUFFO1lBQ1BDLFlBQVksRUFBRUosNEVBQWU7U0FDOUI7S0FDRixDQUFDO0FBRUcsTUFBTUssT0FBTyxHQUFHSixpRUFBYSxDQUFDQyxTQUFTLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fzc2lnbi1iYW5waWNrLy4vc3JjL2FwcC9zdG9yZS5qcz81OGM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgdXNlckRhdGFSZWR1Y2VyIGZyb20gJy4uL2NvbXBvbmVudHMvTW9kYWwvRm9ybS91c2VyRGF0YVNsaWNlJztcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PlxuICBjb25maWd1cmVTdG9yZSh7XG4gICAgcmVkdWNlcjoge1xuICAgICAgdXNlckZvcm1EYXRhOiB1c2VyRGF0YVJlZHVjZXIsXG4gICAgfSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUpO1xuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwidXNlckRhdGFSZWR1Y2VyIiwiY3JlYXRlV3JhcHBlciIsIm1ha2VTdG9yZSIsInJlZHVjZXIiLCJ1c2VyRm9ybURhdGEiLCJ3cmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/store.js\n");

/***/ }),

/***/ "./src/components/Modal/Form/userDataSlice.js":
/*!****************************************************!*\
  !*** ./src/components/Modal/Form/userDataSlice.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getUserData\": () => (/* binding */ getUserData),\n/* harmony export */   \"initUserData\": () => (/* binding */ initUserData),\n/* harmony export */   \"updateUserData\": () => (/* binding */ updateUserData),\n/* harmony export */   \"userDataSlice\": () => (/* binding */ userDataSlice),\n/* harmony export */   \"userReadyAction\": () => (/* binding */ userReadyAction)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    userData: {\n        name: \"\",\n        side: \"\",\n        role: \"\",\n        isReady: false\n    }\n};\nconst userDataSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"userinfo\",\n    initialState,\n    reducers: {\n        updateUserData: (state, actions)=>{\n            state.userData = {\n                ...state.userData,\n                [actions.payload.type]: actions.payload.value\n            };\n        },\n        userReadyAction: (state)=>{\n            state.userData = {\n                ...state.userData,\n                isReady: !state.userData.isReady\n            };\n        },\n        initUserData: (state)=>{\n            state.userData = {\n                name: \"\",\n                side: \"\",\n                role: \"\",\n                isReady: false\n            };\n            sessionStorage.removeItem(\"USER_ID\");\n        },\n        getUserData: (state, actions)=>{\n            state.userData = actions.payload;\n        }\n    }\n});\nconst { updateUserData , initUserData , userReadyAction , getUserData  } = userDataSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userDataSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9Gb3JtL3VzZXJEYXRhU2xpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0M7QUFFL0MsTUFBTUMsWUFBWSxHQUFHO0lBQ25CQyxRQUFRLEVBQUU7UUFBRUMsSUFBSSxFQUFFLEVBQUU7UUFBRUMsSUFBSSxFQUFFLEVBQUU7UUFBRUMsSUFBSSxFQUFFLEVBQUU7UUFBRUMsT0FBTyxFQUFFLEtBQUs7S0FBRTtDQUMzRDtBQUVNLE1BQU1DLGFBQWEsR0FBR1AsNkRBQVcsQ0FBQztJQUN2Q0csSUFBSSxFQUFFLFVBQVU7SUFDaEJGLFlBQVk7SUFDWk8sUUFBUSxFQUFFO1FBQ1JDLGNBQWMsRUFBRSxDQUFDQyxLQUFLLEVBQUVDLE9BQU8sR0FBSztZQUNsQ0QsS0FBSyxDQUFDUixRQUFRLEdBQUc7Z0JBQ2YsR0FBR1EsS0FBSyxDQUFDUixRQUFRO2dCQUNqQixDQUFDUyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVGLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRSxLQUFLO2FBQzlDLENBQUM7UUFDSixDQUFDO1FBRURDLGVBQWUsRUFBRUwsQ0FBQUEsS0FBSyxHQUFJO1lBQ3hCQSxLQUFLLENBQUNSLFFBQVEsR0FBRztnQkFDZixHQUFHUSxLQUFLLENBQUNSLFFBQVE7Z0JBQ2pCSSxPQUFPLEVBQUUsQ0FBQ0ksS0FBSyxDQUFDUixRQUFRLENBQUNJLE9BQU87YUFDakMsQ0FBQztRQUNKLENBQUM7UUFFRFUsWUFBWSxFQUFFTixDQUFBQSxLQUFLLEdBQUk7WUFDckJBLEtBQUssQ0FBQ1IsUUFBUSxHQUFHO2dCQUFFQyxJQUFJLEVBQUUsRUFBRTtnQkFBRUMsSUFBSSxFQUFFLEVBQUU7Z0JBQUVDLElBQUksRUFBRSxFQUFFO2dCQUFFQyxPQUFPLEVBQUUsS0FBSzthQUFFLENBQUM7WUFDbEVXLGNBQWMsQ0FBQ0MsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFFREMsV0FBVyxFQUFFLENBQUNULEtBQUssRUFBRUMsT0FBTyxHQUFLO1lBQy9CRCxLQUFLLENBQUNSLFFBQVEsR0FBR1MsT0FBTyxDQUFDQyxPQUFPLENBQUM7UUFDbkMsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBRUksTUFBTSxFQUFFSCxjQUFjLEdBQUVPLFlBQVksR0FBRUQsZUFBZSxHQUFFSSxXQUFXLEdBQUUsR0FDekVaLGFBQWEsQ0FBQ0ksT0FBTyxDQUFDO0FBRXhCLGlFQUFlSixhQUFhLENBQUNhLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fzc2lnbi1iYW5waWNrLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwvRm9ybS91c2VyRGF0YVNsaWNlLmpzPzZlZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VyRGF0YTogeyBuYW1lOiAnJywgc2lkZTogJycsIHJvbGU6ICcnLCBpc1JlYWR5OiBmYWxzZSB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHVzZXJEYXRhU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICd1c2VyaW5mbycsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICB1cGRhdGVVc2VyRGF0YTogKHN0YXRlLCBhY3Rpb25zKSA9PiB7XG4gICAgICBzdGF0ZS51c2VyRGF0YSA9IHtcbiAgICAgICAgLi4uc3RhdGUudXNlckRhdGEsXG4gICAgICAgIFthY3Rpb25zLnBheWxvYWQudHlwZV06IGFjdGlvbnMucGF5bG9hZC52YWx1ZSxcbiAgICAgIH07XG4gICAgfSxcblxuICAgIHVzZXJSZWFkeUFjdGlvbjogc3RhdGUgPT4ge1xuICAgICAgc3RhdGUudXNlckRhdGEgPSB7XG4gICAgICAgIC4uLnN0YXRlLnVzZXJEYXRhLFxuICAgICAgICBpc1JlYWR5OiAhc3RhdGUudXNlckRhdGEuaXNSZWFkeSxcbiAgICAgIH07XG4gICAgfSxcblxuICAgIGluaXRVc2VyRGF0YTogc3RhdGUgPT4ge1xuICAgICAgc3RhdGUudXNlckRhdGEgPSB7IG5hbWU6ICcnLCBzaWRlOiAnJywgcm9sZTogJycsIGlzUmVhZHk6IGZhbHNlIH07XG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdVU0VSX0lEJyk7XG4gICAgfSxcblxuICAgIGdldFVzZXJEYXRhOiAoc3RhdGUsIGFjdGlvbnMpID0+IHtcbiAgICAgIHN0YXRlLnVzZXJEYXRhID0gYWN0aW9ucy5wYXlsb2FkO1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgdXBkYXRlVXNlckRhdGEsIGluaXRVc2VyRGF0YSwgdXNlclJlYWR5QWN0aW9uLCBnZXRVc2VyRGF0YSB9ID1cbiAgdXNlckRhdGFTbGljZS5hY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyRGF0YVNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJ1c2VyRGF0YSIsIm5hbWUiLCJzaWRlIiwicm9sZSIsImlzUmVhZHkiLCJ1c2VyRGF0YVNsaWNlIiwicmVkdWNlcnMiLCJ1cGRhdGVVc2VyRGF0YSIsInN0YXRlIiwiYWN0aW9ucyIsInBheWxvYWQiLCJ0eXBlIiwidmFsdWUiLCJ1c2VyUmVhZHlBY3Rpb24iLCJpbml0VXNlckRhdGEiLCJzZXNzaW9uU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJnZXRVc2VyRGF0YSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Modal/Form/userDataSlice.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/store */ \"./src/app/store.js\");\n\n\n\nconst MyApp = ({ Component , pageProps  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/moonhyeseong/Documents/assign-banpick/src/pages/_app.js\",\n        lineNumber: 4,\n        columnNumber: 45\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_app_store__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNhO0FBRXZDLE1BQU1FLEtBQUssR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLGlCQUFLLDhEQUFDRCxTQUFTO1FBQUUsR0FBR0MsU0FBUzs7Ozs7aUJBQUk7QUFFeEUsaUVBQWVILHlEQUFpQixDQUFDQyxLQUFLLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fzc2lnbi1iYW5waWNrLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJy4uL2FwcC9zdG9yZSc7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwid3JhcHBlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid2l0aFJlZHV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();