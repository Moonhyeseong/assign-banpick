"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./src/components/Modal/Form/userDataSlice.ts
var userDataSlice = __webpack_require__(4196);
;// CONCATENATED MODULE: ./src/app/store.ts

 // import { createWrapper } from 'next-redux-wrapper';

const store = (0,toolkit_.configureStore)({
  reducer: {
    userFormData: userDataSlice/* default */.ZP
  }
});
/* harmony default export */ const app_store = (store);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/nav/Nav.tsx




const Nav = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(NavLayout, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
      children: "BanPick Simulator"
    }), /*#__PURE__*/jsx_runtime_.jsx(MenuList, {
      children: /*#__PURE__*/jsx_runtime_.jsx(NavItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "/",
          children: "Go To Lobby"
        })
      })
    })]
  });
};

/* harmony default export */ const nav_Nav = (Nav);
const NavLayout = external_styled_components_default().div.withConfig({
  displayName: "Nav__NavLayout",
  componentId: "sc-1nxhqed-0"
})(["display:flex;align-items:center;justify-content:space-between;width:100%;height:36px;padding-left:80px;padding-right:80px;padding-top:8px;background-color:", ";"], props => props.theme.black.black85);
const MenuList = external_styled_components_default().div.withConfig({
  displayName: "Nav__MenuList",
  componentId: "sc-1nxhqed-1"
})(["display:flex;gap:24px;height:80%;"]);
const NavItem = external_styled_components_default().div.withConfig({
  displayName: "Nav__NavItem",
  componentId: "sc-1nxhqed-2"
})(["display:flex;align-items:center;height:80%;font-size:20px;border-bottom:2px solid gray;cursor:pointer;"]);
const Title = external_styled_components_default().p.withConfig({
  displayName: "Nav__Title",
  componentId: "sc-1nxhqed-3"
})(["font-size:24px;font-weight:600;"]);
;// CONCATENATED MODULE: ./src/components/Layout/ContentsWrapper.tsx






const ContentsWrapper = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(nav_Nav, {}), /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
      children: children
    })]
  });
};

/* harmony default export */ const Layout_ContentsWrapper = (ContentsWrapper);
const Layout = external_styled_components_default().div.withConfig({
  displayName: "ContentsWrapper__Layout",
  componentId: "sc-g0247u-0"
})(["position:relative;width:100%;"]);
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "ContentsWrapper__Wrapper",
  componentId: "sc-g0247u-1"
})(["width:1360px;margin:0 auto;"]);
;// CONCATENATED MODULE: ./src/styles/theme.js
const theme = {
  white: {
    white100: '#F3F3F3',
    white80: '#C6C6C5',
    white60: '#9A9A98',
    white50: '#838382',
    white20: '#40403E'
  },
  black: {
    black100: '#131310',
    black93: '#232320',
    black90: '#292927',
    black85: '#353532',
    black80: '#40403D',
    black70: '#565654'
  },
  red: {
    redB40: '#58211E',
    redB50: '#692420',
    redB60: '#7C2823',
    redB70: '#8D2C27',
    redB80: '#9E2F2A',
    redMain: '#C13631',
    redW90: '#C64944',
    redW80: '#CB5C58',
    redW70: '#D06F6B',
    redW60: '#D5827F',
    redOPA20: 'rgba(193, 54, 49, 0.2)',
    redOPA40: 'rgba(193, 54, 49, 0.4)',
    redOPA60: 'rgba(193, 54, 49, 0.6)',
    redOPA80: 'rgba(193, 54, 49, 0.8)'
  },
  blue: {
    blueB40: '#1F3957',
    blueB50: '#214368',
    blueB60: '#254D7A',
    blueB70: '#28578C',
    blueB80: '#2B609D',
    blueMain: '#3173C1',
    blueW90: '#4480C6',
    blueW80: '#588DCB',
    blueW70: '#6B99D0',
    blueW60: '#7FA6D5',
    blueOPA20: 'rgba(49, 115, 193, 0.2)',
    blueOPA40: 'rgba(49, 115, 193, 0.4)',
    blueOPA60: 'rgba(49, 115, 193, 0.6)',
    blueOPA80: 'rgba(49, 115, 193, 0.8)'
  },
  green: {
    greenB40: '#4C6025',
    greenB50: '#5A7329',
    greenB60: '#69872E',
    greenB70: '#779A34',
    greenB80: '#86AE39',
    greenMain: '#A2D443',
    greenW80: '#B2DA66',
    greenW60: '#C2E089',
    greenW40: '#D3E7AD',
    greenW20: '#E3EDD0',
    greenOPA20: 'rgba(162, 212, 67, 0.2)',
    greenOPA40: 'rgba(162, 212, 67, 0.4)',
    greenOPA60: 'rgba(162, 212, 67, 0.6)',
    greenOPA80: 'rgba(162, 212, 67, 0.8)'
  }
};
;// CONCATENATED MODULE: external "styled-reset"
const external_styled_reset_namespaceObject = require("styled-reset");
var external_styled_reset_default = /*#__PURE__*/__webpack_require__.n(external_styled_reset_namespaceObject);
;// CONCATENATED MODULE: ./src/styles/GlobalStyle.js


const GlobalStyle = (0,external_styled_components_.createGlobalStyle)(["", " a{text-decoration:none;color:inherit;}*{box-sizing:border-box;border:none;background:none;}ul,dl,dt,dd,li{list-style:none;}body{background-color:#131310;color:#fff;cursor:default;}"], (external_styled_reset_default()));
/* harmony default export */ const styles_GlobalStyle = (GlobalStyle);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(styles_GlobalStyle, {}), /*#__PURE__*/jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
      theme: theme,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: app_store,
        children: /*#__PURE__*/jsx_runtime_.jsx(Layout_ContentsWrapper, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
        })
      })
    })]
  });
};

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [196], () => (__webpack_exec__(1841)));
module.exports = __webpack_exports__;

})();