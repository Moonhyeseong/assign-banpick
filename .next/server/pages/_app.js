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

/***/ "./src/app/store.ts":
/*!**************************!*\
  !*** ./src/app/store.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Modal_Form_userDataSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Modal/Form/userDataSlice */ \"./src/components/Modal/Form/userDataSlice.ts\");\n\n // import { createWrapper } from 'next-redux-wrapper';\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: {\n    userFormData: _components_Modal_Form_userDataSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3N0b3JlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtDQUVBOztBQUVBLE1BQU1FLEtBQUssR0FBR0YsZ0VBQWMsQ0FBQztFQUMzQkcsT0FBTyxFQUFFO0lBQ1BDLFlBQVksRUFBRUgsNEVBQWVBO0VBRHRCO0FBRGtCLENBQUQsQ0FBNUI7QUFRQSxpRUFBZUMsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2Fzc2lnbi1iYW5waWNrLy4vc3JjL2FwcC9zdG9yZS50cz8xNDdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgdXNlckRhdGFSZWR1Y2VyIGZyb20gJy4uL2NvbXBvbmVudHMvTW9kYWwvRm9ybS91c2VyRGF0YVNsaWNlJztcbi8vIGltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIHVzZXJGb3JtRGF0YTogdXNlckRhdGFSZWR1Y2VyLFxuICB9LFxufSk7XG5cbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPjtcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoO1xuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJ1c2VyRGF0YVJlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJ1c2VyRm9ybURhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/store.ts\n");

/***/ }),

/***/ "./src/components/Layout/ContentsWrapper.tsx":
/*!***************************************************!*\
  !*** ./src/components/Layout/ContentsWrapper.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nav_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/Nav */ \"./src/components/nav/Nav.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/moonhyeseong/Documents/assign-banpick/src/components/Layout/ContentsWrapper.tsx\";\n\n\n\n\n\nconst ContentsWrapper = ({\n  children\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Layout, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_nav_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Wrapper, {\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentsWrapper);\nconst Layout = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({\n  displayName: \"ContentsWrapper__Layout\",\n  componentId: \"sc-g0247u-0\"\n})([\"position:relative;width:100%;\"]);\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({\n  displayName: \"ContentsWrapper__Wrapper\",\n  componentId: \"sc-g0247u-1\"\n})([\"width:1360px;margin:0 auto;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvQ29udGVudHNXcmFwcGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1HLGVBQWUsR0FBRyxDQUFDO0VBQUVDO0FBQUYsQ0FBRCxLQUFrQjtFQUN4QyxvQkFDRSw4REFBQyxNQUFEO0lBQUEsd0JBQ0UsOERBQUMsZ0RBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxhQURGLGVBRUUsOERBQUMsT0FBRDtNQUFBLFVBQVVBO0lBQVY7TUFBQTtNQUFBO01BQUE7SUFBQSxhQUZGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxhQURGO0FBTUQsQ0FQRDs7QUFTQSxpRUFBZUQsZUFBZjtBQUVBLE1BQU1FLE1BQU0sR0FBR0osdUVBQUg7RUFBQTtFQUFBO0FBQUEscUNBQVo7QUFLQSxNQUFNTSxPQUFPLEdBQUdOLHVFQUFIO0VBQUE7RUFBQTtBQUFBLG1DQUFiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXNzaWduLWJhbnBpY2svLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvQ29udGVudHNXcmFwcGVyLnRzeD8xYWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBOYXYgZnJvbSAnLi4vbmF2L05hdic7XG5cbmNvbnN0IENvbnRlbnRzV3JhcHBlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPE5hdiAvPlxuICAgICAgPFdyYXBwZXI+e2NoaWxkcmVufTwvV3JhcHBlcj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRzV3JhcHBlcjtcblxuY29uc3QgTGF5b3V0ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTM2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbmA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJOYXYiLCJDb250ZW50c1dyYXBwZXIiLCJjaGlsZHJlbiIsIkxheW91dCIsImRpdiIsIldyYXBwZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout/ContentsWrapper.tsx\n");

/***/ }),

/***/ "./src/components/Modal/Form/userDataSlice.ts":
/*!****************************************************!*\
  !*** ./src/components/Modal/Form/userDataSlice.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getUserData\": () => (/* binding */ getUserData),\n/* harmony export */   \"initUserData\": () => (/* binding */ initUserData),\n/* harmony export */   \"updateUserData\": () => (/* binding */ updateUserData),\n/* harmony export */   \"userDataSlice\": () => (/* binding */ userDataSlice),\n/* harmony export */   \"userReadyAction\": () => (/* binding */ userReadyAction)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  userData: {\n    userId: '',\n    name: '',\n    side: '',\n    role: '',\n    isReady: false\n  }\n};\nconst userDataSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'userinfo',\n  initialState,\n  reducers: {\n    updateUserData: (state, actions) => {\n      state.userData = _objectSpread(_objectSpread({}, state.userData), {}, {\n        [actions.payload.type]: actions.payload.value\n      });\n    },\n    userReadyAction: state => {\n      state.userData = _objectSpread(_objectSpread({}, state.userData), {}, {\n        isReady: !state.userData.isReady\n      });\n    },\n    initUserData: state => {\n      state.userData = {\n        userId: '',\n        name: '',\n        side: '',\n        role: '',\n        isReady: false\n      };\n      sessionStorage.removeItem('USER_ID');\n    },\n    getUserData: (state, actions) => {\n      state.userData = actions.payload;\n    }\n  }\n});\nconst {\n  updateUserData,\n  initUserData,\n  userReadyAction,\n  getUserData\n} = userDataSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userDataSlice.reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9Gb3JtL3VzZXJEYXRhU2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVlBLE1BQU1DLFlBQXNCLEdBQUc7RUFDN0JDLFFBQVEsRUFBRTtJQUFFQyxNQUFNLEVBQUUsRUFBVjtJQUFjQyxJQUFJLEVBQUUsRUFBcEI7SUFBd0JDLElBQUksRUFBRSxFQUE5QjtJQUFrQ0MsSUFBSSxFQUFFLEVBQXhDO0lBQTRDQyxPQUFPLEVBQUU7RUFBckQ7QUFEbUIsQ0FBL0I7QUFJTyxNQUFNQyxhQUFhLEdBQUdSLDZEQUFXLENBQUM7RUFDdkNJLElBQUksRUFBRSxVQURpQztFQUV2Q0gsWUFGdUM7RUFHdkNRLFFBQVEsRUFBRTtJQUNSQyxjQUFjLEVBQUUsQ0FDZEMsS0FEYyxFQUVkQyxPQUZjLEtBR1g7TUFDSEQsS0FBSyxDQUFDVCxRQUFOLG1DQUNLUyxLQUFLLENBQUNULFFBRFg7UUFFRSxDQUFDVSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLElBQWpCLEdBQXdCRixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JFO01BRjFDO0lBSUQsQ0FUTztJQVdSQyxlQUFlLEVBQUVMLEtBQUssSUFBSTtNQUN4QkEsS0FBSyxDQUFDVCxRQUFOLG1DQUNLUyxLQUFLLENBQUNULFFBRFg7UUFFRUssT0FBTyxFQUFFLENBQUNJLEtBQUssQ0FBQ1QsUUFBTixDQUFlSztNQUYzQjtJQUlELENBaEJPO0lBa0JSVSxZQUFZLEVBQUVOLEtBQUssSUFBSTtNQUNyQkEsS0FBSyxDQUFDVCxRQUFOLEdBQWlCO1FBQ2ZDLE1BQU0sRUFBRSxFQURPO1FBRWZDLElBQUksRUFBRSxFQUZTO1FBR2ZDLElBQUksRUFBRSxFQUhTO1FBSWZDLElBQUksRUFBRSxFQUpTO1FBS2ZDLE9BQU8sRUFBRTtNQUxNLENBQWpCO01BT0FXLGNBQWMsQ0FBQ0MsVUFBZixDQUEwQixTQUExQjtJQUNELENBM0JPO0lBNkJSQyxXQUFXLEVBQUUsQ0FBQ1QsS0FBRCxFQUFRQyxPQUFSLEtBQW9CO01BQy9CRCxLQUFLLENBQUNULFFBQU4sR0FBaUJVLE9BQU8sQ0FBQ0MsT0FBekI7SUFDRDtFQS9CTztBQUg2QixDQUFELENBQWpDO0FBc0NBLE1BQU07RUFBRUgsY0FBRjtFQUFrQk8sWUFBbEI7RUFBZ0NELGVBQWhDO0VBQWlESTtBQUFqRCxJQUNYWixhQUFhLENBQUNJLE9BRFQ7QUFHUCxpRUFBZUosYUFBYSxDQUFDYSxPQUE3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Fzc2lnbi1iYW5waWNrLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwvRm9ybS91c2VyRGF0YVNsaWNlLnRzPzFjZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxudHlwZSBVc2VyRGF0YSA9IHtcbiAgdXNlckRhdGE6IHtcbiAgICB1c2VySWQ6IHN0cmluZyB8IG51bGw7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHNpZGU6IHN0cmluZztcbiAgICByb2xlOiBzdHJpbmc7XG4gICAgaXNSZWFkeTogYm9vbGVhbjtcbiAgfTtcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogVXNlckRhdGEgPSB7XG4gIHVzZXJEYXRhOiB7IHVzZXJJZDogJycsIG5hbWU6ICcnLCBzaWRlOiAnJywgcm9sZTogJycsIGlzUmVhZHk6IGZhbHNlIH0sXG59O1xuXG5leHBvcnQgY29uc3QgdXNlckRhdGFTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3VzZXJpbmZvJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHVwZGF0ZVVzZXJEYXRhOiAoXG4gICAgICBzdGF0ZSxcbiAgICAgIGFjdGlvbnM6IFBheWxvYWRBY3Rpb248eyB0eXBlOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfT5cbiAgICApID0+IHtcbiAgICAgIHN0YXRlLnVzZXJEYXRhID0ge1xuICAgICAgICAuLi5zdGF0ZS51c2VyRGF0YSxcbiAgICAgICAgW2FjdGlvbnMucGF5bG9hZC50eXBlXTogYWN0aW9ucy5wYXlsb2FkLnZhbHVlLFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgdXNlclJlYWR5QWN0aW9uOiBzdGF0ZSA9PiB7XG4gICAgICBzdGF0ZS51c2VyRGF0YSA9IHtcbiAgICAgICAgLi4uc3RhdGUudXNlckRhdGEsXG4gICAgICAgIGlzUmVhZHk6ICFzdGF0ZS51c2VyRGF0YS5pc1JlYWR5LFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgaW5pdFVzZXJEYXRhOiBzdGF0ZSA9PiB7XG4gICAgICBzdGF0ZS51c2VyRGF0YSA9IHtcbiAgICAgICAgdXNlcklkOiAnJyxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIHNpZGU6ICcnLFxuICAgICAgICByb2xlOiAnJyxcbiAgICAgICAgaXNSZWFkeTogZmFsc2UsXG4gICAgICB9O1xuICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnVVNFUl9JRCcpO1xuICAgIH0sXG5cbiAgICBnZXRVc2VyRGF0YTogKHN0YXRlLCBhY3Rpb25zKSA9PiB7XG4gICAgICBzdGF0ZS51c2VyRGF0YSA9IGFjdGlvbnMucGF5bG9hZDtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHVwZGF0ZVVzZXJEYXRhLCBpbml0VXNlckRhdGEsIHVzZXJSZWFkeUFjdGlvbiwgZ2V0VXNlckRhdGEgfSA9XG4gIHVzZXJEYXRhU2xpY2UuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgdXNlckRhdGFTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidXNlckRhdGEiLCJ1c2VySWQiLCJuYW1lIiwic2lkZSIsInJvbGUiLCJpc1JlYWR5IiwidXNlckRhdGFTbGljZSIsInJlZHVjZXJzIiwidXBkYXRlVXNlckRhdGEiLCJzdGF0ZSIsImFjdGlvbnMiLCJwYXlsb2FkIiwidHlwZSIsInZhbHVlIiwidXNlclJlYWR5QWN0aW9uIiwiaW5pdFVzZXJEYXRhIiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiZ2V0VXNlckRhdGEiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Modal/Form/userDataSlice.ts\n");

/***/ }),

/***/ "./src/components/nav/Nav.tsx":
/*!************************************!*\
  !*** ./src/components/nav/Nav.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/moonhyeseong/Documents/assign-banpick/src/components/nav/Nav.tsx\";\n\n\n\nconst Nav = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavLayout, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Title, {\n      children: \"BanPick Simulator\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MenuList, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavItem, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n          href: \"/\",\n          children: \"Go To Lobby\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);\nconst NavLayout = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n  displayName: \"Nav__NavLayout\",\n  componentId: \"sc-1nxhqed-0\"\n})([\"display:flex;align-items:center;justify-content:space-between;width:100%;height:36px;padding-left:80px;padding-right:80px;padding-top:8px;background-color:\", \";\"], props => props.theme.black.black85);\nconst MenuList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n  displayName: \"Nav__MenuList\",\n  componentId: \"sc-1nxhqed-1\"\n})([\"display:flex;gap:24px;height:80%;\"]);\nconst NavItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n  displayName: \"Nav__NavItem\",\n  componentId: \"sc-1nxhqed-2\"\n})([\"display:flex;align-items:center;height:80%;font-size:20px;border-bottom:2px solid gray;cursor:pointer;\"]);\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({\n  displayName: \"Nav__Title\",\n  componentId: \"sc-1nxhqed-3\"\n})([\"font-size:24px;font-weight:600;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXYvTmF2LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7O0FBRUEsTUFBTUMsR0FBRyxHQUFHLE1BQU07RUFDaEIsb0JBQ0UsOERBQUMsU0FBRDtJQUFBLHdCQUNFLDhEQUFDLEtBQUQ7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFERixlQUVFLDhEQUFDLFFBQUQ7TUFBQSx1QkFDRSw4REFBQyxPQUFEO1FBQUEsdUJBQ0U7VUFBRyxJQUFJLEVBQUMsR0FBUjtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLGFBRkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREY7QUFVRCxDQVhEOztBQWFBLGlFQUFlQSxHQUFmO0FBRUEsTUFBTUMsU0FBUyxHQUFHRix1RUFBSDtFQUFBO0VBQUE7QUFBQSx5S0FTT0ksS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsS0FBWixDQUFrQkMsT0FUbEMsQ0FBZjtBQVlBLE1BQU1DLFFBQVEsR0FBR1IsdUVBQUg7RUFBQTtFQUFBO0FBQUEseUNBQWQ7QUFNQSxNQUFNUyxPQUFPLEdBQUdULHVFQUFIO0VBQUE7RUFBQTtBQUFBLDhHQUFiO0FBU0EsTUFBTVUsS0FBSyxHQUFHVixxRUFBSDtFQUFBO0VBQUE7QUFBQSx1Q0FBWCIsInNvdXJjZXMiOlsid2VicGFjazovL2Fzc2lnbi1iYW5waWNrLy4vc3JjL2NvbXBvbmVudHMvbmF2L05hdi50c3g/ZDk0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgTmF2ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxOYXZMYXlvdXQ+XG4gICAgICA8VGl0bGU+QmFuUGljayBTaW11bGF0b3I8L1RpdGxlPlxuICAgICAgPE1lbnVMaXN0PlxuICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICA8YSBocmVmPVwiL1wiPkdvIFRvIExvYmJ5PC9hPlxuICAgICAgICA8L05hdkl0ZW0+XG4gICAgICA8L01lbnVMaXN0PlxuICAgIDwvTmF2TGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuXG5jb25zdCBOYXZMYXlvdXQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM2cHg7XG4gIHBhZGRpbmctbGVmdDogODBweDtcbiAgcGFkZGluZy1yaWdodDogODBweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ibGFjay5ibGFjazg1fTtcbmA7XG5cbmNvbnN0IE1lbnVMaXN0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyNHB4O1xuICBoZWlnaHQ6IDgwJTtcbmA7XG5cbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDgwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JheTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuYDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJOYXYiLCJOYXZMYXlvdXQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiYmxhY2siLCJibGFjazg1IiwiTWVudUxpc3QiLCJOYXZJdGVtIiwiVGl0bGUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/nav/Nav.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/store */ \"./src/app/store.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout_ContentsWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout/ContentsWrapper */ \"./src/components/Layout/ContentsWrapper.tsx\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.js\");\n/* harmony import */ var _styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/GlobalStyle */ \"./src/styles/GlobalStyle.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/moonhyeseong/Documents/assign-banpick/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n      theme: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.theme,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_0__.Provider, {\n        store: _app_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Layout_ContentsWrapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLE1BQU1NLEtBQUssR0FBRyxDQUFDO0VBQUVDLFNBQUY7RUFBYUM7QUFBYixDQUFELEtBQXdDO0VBQ3BELG9CQUNFO0lBQUEsd0JBQ0UsOERBQUMsMkRBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxhQURGLGVBRUUsOERBQUMsNERBQUQ7TUFBZSxLQUFLLEVBQUVKLGdEQUF0QjtNQUFBLHVCQUNFLDhEQUFDLGlEQUFEO1FBQVUsS0FBSyxFQUFFSCxrREFBakI7UUFBQSx1QkFDRSw4REFBQywwRUFBRDtVQUFBLHVCQUNFLDhEQUFDLFNBQUQsb0JBQWVPLFNBQWY7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQURGO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFERjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxhQUZGO0VBQUEsZ0JBREY7QUFZRCxDQWJEOztBQWNBLGlFQUFlRixLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXNzaWduLWJhbnBpY2svLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vYXBwL3N0b3JlJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ29udGVudFdyYXBwZXIgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvQ29udGVudHNXcmFwcGVyJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vc3R5bGVzL3RoZW1lJztcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tICcuLi9zdHlsZXMvR2xvYmFsU3R5bGUnO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvQ29udGVudFdyYXBwZXI+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJzdG9yZSIsIlRoZW1lUHJvdmlkZXIiLCJDb250ZW50V3JhcHBlciIsInRoZW1lIiwiR2xvYmFsU3R5bGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/GlobalStyle.js":
/*!***********************************!*\
  !*** ./src/styles/GlobalStyle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-reset */ \"styled-reset\");\n/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_reset__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)([\"\", \" a{text-decoration:none;color:inherit;}*{box-sizing:border-box;border:none;background:none;}ul,dl,dt,dd,li{list-style:none;}body{background-color:#131310;color:#fff;cursor:default;}\"], (styled_reset__WEBPACK_IMPORTED_MODULE_1___default()));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL0dsb2JhbFN0eWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1FLFdBQVcsR0FBR0Ysb0VBQUgsZ01BQ2JDLHFEQURhLENBQWpCO0FBeUJBLGlFQUFlQyxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXNzaWduLWJhbnBpY2svLi9zcmMvc3R5bGVzL0dsb2JhbFN0eWxlLmpzPzhlMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgcmVzZXQgZnJvbSAnc3R5bGVkLXJlc2V0JztcblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgJHtyZXNldH1cblxuICBhe1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cblxuICAqe1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cblxuICB1bCxkbCxkdCxkZCxsaXtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cblxuICBib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzEzMTA7XG4gICAgY29sb3I6ICNmZmYgO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGU7XG4iXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJyZXNldCIsIkdsb2JhbFN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/GlobalStyle.js\n");

/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\nconst theme = {\n  white: {\n    white100: '#F3F3F3',\n    white80: '#C6C6C5',\n    white60: '#9A9A98',\n    white50: '#838382',\n    white20: '#40403E'\n  },\n  black: {\n    black100: '#131310',\n    black93: '#232320',\n    black90: '#292927',\n    black85: '#353532',\n    black80: '#40403D',\n    black70: '#565654'\n  },\n  red: {\n    redB40: '#58211E',\n    redB50: '#692420',\n    redB60: '#7C2823',\n    redB70: '#8D2C27',\n    redB80: '#9E2F2A',\n    redMain: '#C13631',\n    redW90: '#C64944',\n    redW80: '#CB5C58',\n    redW70: '#D06F6B',\n    redW60: '#D5827F',\n    redOPA20: 'rgba(193, 54, 49, 0.2)',\n    redOPA40: 'rgba(193, 54, 49, 0.4)',\n    redOPA60: 'rgba(193, 54, 49, 0.6)',\n    redOPA80: 'rgba(193, 54, 49, 0.8)'\n  },\n  blue: {\n    blueB40: '#1F3957',\n    blueB50: '#214368',\n    blueB60: '#254D7A',\n    blueB70: '#28578C',\n    blueB80: '#2B609D',\n    blueMain: '#3173C1',\n    blueW90: '#4480C6',\n    blueW80: '#588DCB',\n    blueW70: '#6B99D0',\n    blueW60: '#7FA6D5',\n    blueOPA20: 'rgba(49, 115, 193, 0.2)',\n    blueOPA40: 'rgba(49, 115, 193, 0.4)',\n    blueOPA60: 'rgba(49, 115, 193, 0.6)',\n    blueOPA80: 'rgba(49, 115, 193, 0.8)'\n  },\n  green: {\n    greenB40: '#4C6025',\n    greenB50: '#5A7329',\n    greenB60: '#69872E',\n    greenB70: '#779A34',\n    greenB80: '#86AE39',\n    greenMain: '#A2D443',\n    greenW80: '#B2DA66',\n    greenW60: '#C2E089',\n    greenW40: '#D3E7AD',\n    greenW20: '#E3EDD0',\n    greenOPA20: 'rgba(162, 212, 67, 0.2)',\n    greenOPA40: 'rgba(162, 212, 67, 0.4)',\n    greenOPA60: 'rgba(162, 212, 67, 0.6)',\n    greenOPA80: 'rgba(162, 212, 67, 0.8)'\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxLQUFLLEdBQUc7RUFDbkJDLEtBQUssRUFBRTtJQUNMQyxRQUFRLEVBQUUsU0FETDtJQUVMQyxPQUFPLEVBQUUsU0FGSjtJQUdMQyxPQUFPLEVBQUUsU0FISjtJQUlMQyxPQUFPLEVBQUUsU0FKSjtJQUtMQyxPQUFPLEVBQUU7RUFMSixDQURZO0VBU25CQyxLQUFLLEVBQUU7SUFDTEMsUUFBUSxFQUFFLFNBREw7SUFFTEMsT0FBTyxFQUFFLFNBRko7SUFHTEMsT0FBTyxFQUFFLFNBSEo7SUFJTEMsT0FBTyxFQUFFLFNBSko7SUFLTEMsT0FBTyxFQUFFLFNBTEo7SUFNTEMsT0FBTyxFQUFFO0VBTkosQ0FUWTtFQWtCbkJDLEdBQUcsRUFBRTtJQUNIQyxNQUFNLEVBQUUsU0FETDtJQUVIQyxNQUFNLEVBQUUsU0FGTDtJQUdIQyxNQUFNLEVBQUUsU0FITDtJQUlIQyxNQUFNLEVBQUUsU0FKTDtJQUtIQyxNQUFNLEVBQUUsU0FMTDtJQU1IQyxPQUFPLEVBQUUsU0FOTjtJQU9IQyxNQUFNLEVBQUUsU0FQTDtJQVFIQyxNQUFNLEVBQUUsU0FSTDtJQVNIQyxNQUFNLEVBQUUsU0FUTDtJQVVIQyxNQUFNLEVBQUUsU0FWTDtJQVdIQyxRQUFRLEVBQUUsd0JBWFA7SUFZSEMsUUFBUSxFQUFFLHdCQVpQO0lBYUhDLFFBQVEsRUFBRSx3QkFiUDtJQWNIQyxRQUFRLEVBQUU7RUFkUCxDQWxCYztFQW1DbkJDLElBQUksRUFBRTtJQUNKQyxPQUFPLEVBQUUsU0FETDtJQUVKQyxPQUFPLEVBQUUsU0FGTDtJQUdKQyxPQUFPLEVBQUUsU0FITDtJQUlKQyxPQUFPLEVBQUUsU0FKTDtJQUtKQyxPQUFPLEVBQUUsU0FMTDtJQU1KQyxRQUFRLEVBQUUsU0FOTjtJQU9KQyxPQUFPLEVBQUUsU0FQTDtJQVFKQyxPQUFPLEVBQUUsU0FSTDtJQVNKQyxPQUFPLEVBQUUsU0FUTDtJQVVKQyxPQUFPLEVBQUUsU0FWTDtJQVdKQyxTQUFTLEVBQUUseUJBWFA7SUFZSkMsU0FBUyxFQUFFLHlCQVpQO0lBYUpDLFNBQVMsRUFBRSx5QkFiUDtJQWNKQyxTQUFTLEVBQUU7RUFkUCxDQW5DYTtFQW9EbkJDLEtBQUssRUFBRTtJQUNMQyxRQUFRLEVBQUUsU0FETDtJQUVMQyxRQUFRLEVBQUUsU0FGTDtJQUdMQyxRQUFRLEVBQUUsU0FITDtJQUlMQyxRQUFRLEVBQUUsU0FKTDtJQUtMQyxRQUFRLEVBQUUsU0FMTDtJQU1MQyxTQUFTLEVBQUUsU0FOTjtJQU9MQyxRQUFRLEVBQUUsU0FQTDtJQVFMQyxRQUFRLEVBQUUsU0FSTDtJQVNMQyxRQUFRLEVBQUUsU0FUTDtJQVVMQyxRQUFRLEVBQUUsU0FWTDtJQVdMQyxVQUFVLEVBQUUseUJBWFA7SUFZTEMsVUFBVSxFQUFFLHlCQVpQO0lBYUxDLFVBQVUsRUFBRSx5QkFiUDtJQWNMQyxVQUFVLEVBQUU7RUFkUDtBQXBEWSxDQUFkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXNzaWduLWJhbnBpY2svLi9zcmMvc3R5bGVzL3RoZW1lLmpzPzE5ZjMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRoZW1lID0ge1xuICB3aGl0ZToge1xuICAgIHdoaXRlMTAwOiAnI0YzRjNGMycsXG4gICAgd2hpdGU4MDogJyNDNkM2QzUnLFxuICAgIHdoaXRlNjA6ICcjOUE5QTk4JyxcbiAgICB3aGl0ZTUwOiAnIzgzODM4MicsXG4gICAgd2hpdGUyMDogJyM0MDQwM0UnLFxuICB9LFxuXG4gIGJsYWNrOiB7XG4gICAgYmxhY2sxMDA6ICcjMTMxMzEwJyxcbiAgICBibGFjazkzOiAnIzIzMjMyMCcsXG4gICAgYmxhY2s5MDogJyMyOTI5MjcnLFxuICAgIGJsYWNrODU6ICcjMzUzNTMyJyxcbiAgICBibGFjazgwOiAnIzQwNDAzRCcsXG4gICAgYmxhY2s3MDogJyM1NjU2NTQnLFxuICB9LFxuXG4gIHJlZDoge1xuICAgIHJlZEI0MDogJyM1ODIxMUUnLFxuICAgIHJlZEI1MDogJyM2OTI0MjAnLFxuICAgIHJlZEI2MDogJyM3QzI4MjMnLFxuICAgIHJlZEI3MDogJyM4RDJDMjcnLFxuICAgIHJlZEI4MDogJyM5RTJGMkEnLFxuICAgIHJlZE1haW46ICcjQzEzNjMxJyxcbiAgICByZWRXOTA6ICcjQzY0OTQ0JyxcbiAgICByZWRXODA6ICcjQ0I1QzU4JyxcbiAgICByZWRXNzA6ICcjRDA2RjZCJyxcbiAgICByZWRXNjA6ICcjRDU4MjdGJyxcbiAgICByZWRPUEEyMDogJ3JnYmEoMTkzLCA1NCwgNDksIDAuMiknLFxuICAgIHJlZE9QQTQwOiAncmdiYSgxOTMsIDU0LCA0OSwgMC40KScsXG4gICAgcmVkT1BBNjA6ICdyZ2JhKDE5MywgNTQsIDQ5LCAwLjYpJyxcbiAgICByZWRPUEE4MDogJ3JnYmEoMTkzLCA1NCwgNDksIDAuOCknLFxuICB9LFxuXG4gIGJsdWU6IHtcbiAgICBibHVlQjQwOiAnIzFGMzk1NycsXG4gICAgYmx1ZUI1MDogJyMyMTQzNjgnLFxuICAgIGJsdWVCNjA6ICcjMjU0RDdBJyxcbiAgICBibHVlQjcwOiAnIzI4NTc4QycsXG4gICAgYmx1ZUI4MDogJyMyQjYwOUQnLFxuICAgIGJsdWVNYWluOiAnIzMxNzNDMScsXG4gICAgYmx1ZVc5MDogJyM0NDgwQzYnLFxuICAgIGJsdWVXODA6ICcjNTg4RENCJyxcbiAgICBibHVlVzcwOiAnIzZCOTlEMCcsXG4gICAgYmx1ZVc2MDogJyM3RkE2RDUnLFxuICAgIGJsdWVPUEEyMDogJ3JnYmEoNDksIDExNSwgMTkzLCAwLjIpJyxcbiAgICBibHVlT1BBNDA6ICdyZ2JhKDQ5LCAxMTUsIDE5MywgMC40KScsXG4gICAgYmx1ZU9QQTYwOiAncmdiYSg0OSwgMTE1LCAxOTMsIDAuNiknLFxuICAgIGJsdWVPUEE4MDogJ3JnYmEoNDksIDExNSwgMTkzLCAwLjgpJyxcbiAgfSxcblxuICBncmVlbjoge1xuICAgIGdyZWVuQjQwOiAnIzRDNjAyNScsXG4gICAgZ3JlZW5CNTA6ICcjNUE3MzI5JyxcbiAgICBncmVlbkI2MDogJyM2OTg3MkUnLFxuICAgIGdyZWVuQjcwOiAnIzc3OUEzNCcsXG4gICAgZ3JlZW5CODA6ICcjODZBRTM5JyxcbiAgICBncmVlbk1haW46ICcjQTJENDQzJyxcbiAgICBncmVlblc4MDogJyNCMkRBNjYnLFxuICAgIGdyZWVuVzYwOiAnI0MyRTA4OScsXG4gICAgZ3JlZW5XNDA6ICcjRDNFN0FEJyxcbiAgICBncmVlblcyMDogJyNFM0VERDAnLFxuICAgIGdyZWVuT1BBMjA6ICdyZ2JhKDE2MiwgMjEyLCA2NywgMC4yKScsXG4gICAgZ3JlZW5PUEE0MDogJ3JnYmEoMTYyLCAyMTIsIDY3LCAwLjQpJyxcbiAgICBncmVlbk9QQTYwOiAncmdiYSgxNjIsIDIxMiwgNjcsIDAuNiknLFxuICAgIGdyZWVuT1BBODA6ICdyZ2JhKDE2MiwgMjEyLCA2NywgMC44KScsXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbInRoZW1lIiwid2hpdGUiLCJ3aGl0ZTEwMCIsIndoaXRlODAiLCJ3aGl0ZTYwIiwid2hpdGU1MCIsIndoaXRlMjAiLCJibGFjayIsImJsYWNrMTAwIiwiYmxhY2s5MyIsImJsYWNrOTAiLCJibGFjazg1IiwiYmxhY2s4MCIsImJsYWNrNzAiLCJyZWQiLCJyZWRCNDAiLCJyZWRCNTAiLCJyZWRCNjAiLCJyZWRCNzAiLCJyZWRCODAiLCJyZWRNYWluIiwicmVkVzkwIiwicmVkVzgwIiwicmVkVzcwIiwicmVkVzYwIiwicmVkT1BBMjAiLCJyZWRPUEE0MCIsInJlZE9QQTYwIiwicmVkT1BBODAiLCJibHVlIiwiYmx1ZUI0MCIsImJsdWVCNTAiLCJibHVlQjYwIiwiYmx1ZUI3MCIsImJsdWVCODAiLCJibHVlTWFpbiIsImJsdWVXOTAiLCJibHVlVzgwIiwiYmx1ZVc3MCIsImJsdWVXNjAiLCJibHVlT1BBMjAiLCJibHVlT1BBNDAiLCJibHVlT1BBNjAiLCJibHVlT1BBODAiLCJncmVlbiIsImdyZWVuQjQwIiwiZ3JlZW5CNTAiLCJncmVlbkI2MCIsImdyZWVuQjcwIiwiZ3JlZW5CODAiLCJncmVlbk1haW4iLCJncmVlblc4MCIsImdyZWVuVzYwIiwiZ3JlZW5XNDAiLCJncmVlblcyMCIsImdyZWVuT1BBMjAiLCJncmVlbk9QQTQwIiwiZ3JlZW5PUEE2MCIsImdyZWVuT1BBODAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/theme.js\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-reset":
/*!*******************************!*\
  !*** external "styled-reset" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("styled-reset");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();