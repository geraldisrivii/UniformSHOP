(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([["src_views_productPage_vue"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/AddReviewDialog.vue?vue&type=style&index=0&id=378d4381&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/AddReviewDialog.vue?vue&type=style&index=0&id=378d4381&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.enabled[data-v-378d4381] {
  background-color: orange;
}
.preloader-enter-active[data-v-378d4381],
.preloader-leave-active[data-v-378d4381] {
  transition: opacity 0.5s ease;
}
.preloader-enter-from[data-v-378d4381],
.preloader-leave-to[data-v-378d4381] {
  opacity: 0;
}
.pleloader-box[data-v-378d4381] {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #003D99;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pleloader-box__image[data-v-378d4381] {
  width: 100px;
  height: 100px;
}
.add-review-dialog-backdrop[data-v-378d4381] {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}
.add-review-dialog[data-v-378d4381] {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 600px;
  padding: 20px;
  min-height: 300px;
  z-index: 10;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
@media (max-width: 768px) {
.add-review-dialog[data-v-378d4381] {
    width: 100%;
}
}
.add-review-dialog__title[data-v-378d4381] {
  border: 2px solid lightgray;
}
.add-review-dialog__textarea[data-v-378d4381] {
  height: 200px;
}
.add-review-dialog__image[data-v-378d4381] {
  width: 30px;
  height: 30px;
}`, "",{"version":3,"sources":["webpack://./src/components/AddReviewDialog.vue","webpack://./AddReviewDialog.vue","webpack://./src/variables.scss"],"names":[],"mappings":"AAEA;EACI,wBAAA;ACDJ;ADGA;;EAEI,6BAAA;ACAJ;ADGA;;EAEI,UAAA;ACAJ;ADKA;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,yBErBW;EFsBX,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ACFJ;ADII;EACI,YAAA;EACA,aAAA;ACFR;ADMA;EACI,WAAA;EACA,aAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,8BAAA;ACHJ;ADMA;EACI,eAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,gBAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,WAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;ACHJ;ADKI;AAfJ;IAgBQ,WAAA;ACFN;AACF;ADII;EACI,2BAAA;ACFR;ADMI;EACI,aAAA;ACJR;ADUI;EACI,WAAA;EACA,YAAA;ACRR","sourcesContent":["\n\n.enabled{\n    background-color: orange;\n}\n.preloader-enter-active,\n.preloader-leave-active {\n    transition: opacity 0.5s ease;\n}\n\n.preloader-enter-from,\n.preloader-leave-to {\n    opacity: 0;\n}\n\n@import '@/variables.scss';\n\n.pleloader-box {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-color: $accent-color;\n    border-radius: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    &__image {\n        width: 100px;\n        height: 100px;\n    }\n}\n\n.add-review-dialog-backdrop {\n    width: 100%;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.5);\n}\n\n.add-review-dialog {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: #fff;\n    width: 600px;\n    padding: 20px;\n    min-height: 300px;\n    z-index: 10;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n\n    @media (max-width: 768px) {\n        width: 100%;\n    }\n\n    &__title {\n        border: 2px solid lightgray;\n    }\n\n\n    &__textarea {\n        height: 200px;\n    }\n\n    &__file-input {}\n\n    &__button {}\n    &__image {\n        width: 30px ;\n        height: 30px;\n    }\n}\n",".enabled {\n  background-color: orange;\n}\n\n.preloader-enter-active,\n.preloader-leave-active {\n  transition: opacity 0.5s ease;\n}\n\n.preloader-enter-from,\n.preloader-leave-to {\n  opacity: 0;\n}\n\n.pleloader-box {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: #003D99;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.pleloader-box__image {\n  width: 100px;\n  height: 100px;\n}\n\n.add-review-dialog-backdrop {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.add-review-dialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #fff;\n  width: 600px;\n  padding: 20px;\n  min-height: 300px;\n  z-index: 10;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n@media (max-width: 768px) {\n  .add-review-dialog {\n    width: 100%;\n  }\n}\n.add-review-dialog__title {\n  border: 2px solid lightgray;\n}\n.add-review-dialog__textarea {\n  height: 200px;\n}\n.add-review-dialog__image {\n  width: 30px;\n  height: 30px;\n}","$primary-color: #0058DC;\n$background-color: #F1F5FF;\n$accent-color: #003D99;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Diginity.vue?vue&type=style&index=0&id=7692eed7&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Diginity.vue?vue&type=style&index=0&id=7692eed7&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.diginity[data-v-7692eed7] {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.diginity__title[data-v-7692eed7] {
  color: #000;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
}
.diginity__text[data-v-7692eed7] {
  color: #121212;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}`, "",{"version":3,"sources":["webpack://./src/components/Diginity.vue","webpack://./Diginity.vue"],"names":[],"mappings":"AACA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;ACAJ;ADEI;EACI,WAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;ACAR;ADGI;EACI,cAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;ACDR","sourcesContent":["\n.diginity {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n\n    &__title {\n        color: #000;\n        font-family: Montserrat;\n        font-size: 18px;\n        font-style: normal;\n        font-weight: 600;\n        line-height: normal;\n        text-transform: uppercase;\n    }\n\n    &__text {\n        color: #121212;\n        font-family: Montserrat;\n        font-size: 18px;\n        font-style: normal;\n        font-weight: 400;\n        line-height: normal;\n    }\n}\n\n.line {}\n",".diginity {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.diginity__title {\n  color: #000;\n  font-family: Montserrat;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.diginity__text {\n  color: #121212;\n  font-family: Montserrat;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Library.vue?vue&type=style&index=0&id=7186813b&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Library.vue?vue&type=style&index=0&id=7186813b&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.swiper-container[data-v-7186813b] {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}
.slider-images[data-v-7186813b] {
  overflow: hidden;
  padding: 50px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.slider-images__image[data-v-7186813b] {
  height: 80vh;
  width: 100%;
  object-fit: contain;
}
.slider-images__button[data-v-7186813b] {
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  width: 50px;
  height: 50px;
}
.slider-images__button[data-v-7186813b]::before {
  position: absolute;
  border-radius: 100%;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background-color: white;
  content: "";
}`, "",{"version":3,"sources":["webpack://./src/components/Library.vue","webpack://./Library.vue"],"names":[],"mappings":"AAGA;EACI,UAAA;EACA,cAAA;EACA,gBAAA;ACFJ;ADWA;EACI,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,aAAA;EACA,eAAA;EACA,WAAA;EACA,aAAA;EACA,MAAA;EACA,OAAA;EACA,oCAAA;ACRJ;ADUI;EACI,YAAA;EACA,WAAA;EACA,mBAAA;ACRR;ADWI;EACI,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;ACTR;ADWQ;EACI,kBAAA;EACA,mBAAA;EACA,WAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,WAAA;ACTZ","sourcesContent":["\n\n\n.swiper-container {\n    width: 80%;\n    margin: 0 auto;\n    overflow: hidden;\n}\n\n.swiper-wrapper {\n    // width: 100%;\n}\n\n.swiper-slide {}\n\n.slider-images {\n    overflow: hidden;\n    padding: 50px 80px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    z-index: 1000;\n    position: fixed;\n    width: 100%;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    background-color: rgba($color: #000000, $alpha: 0.6);\n\n    &__image {\n        height: 80vh;\n        width: 100%;\n        object-fit: contain;\n    }\n\n    &__button {\n        display: flex;\n        align-items: center;\n        position: relative;\n        justify-content: center;\n        width: 50px;\n        height: 50px;\n\n        &::before {\n            position: absolute;\n            border-radius: 100%;\n            z-index: -1;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: 50px;\n            height: 50px;\n            background-color: white;\n            content: '';\n        }\n    }\n}\n\n",".swiper-container {\n  width: 80%;\n  margin: 0 auto;\n  overflow: hidden;\n}\n\n.slider-images {\n  overflow: hidden;\n  padding: 50px 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 1000;\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.slider-images__image {\n  height: 80vh;\n  width: 100%;\n  object-fit: contain;\n}\n.slider-images__button {\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n}\n.slider-images__button::before {\n  position: absolute;\n  border-radius: 100%;\n  z-index: -1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 50px;\n  height: 50px;\n  background-color: white;\n  content: \"\";\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/ProductReview.vue?vue&type=style&index=0&id=075919a7&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/ProductReview.vue?vue&type=style&index=0&id=075919a7&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.close-button[data-v-075919a7] {
  position: fixed;
  top: 50px;
  right: 80px;
  height: 40px;
  width: 40px;
}
.close-button__line[data-v-075919a7] {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 40px;
  width: 2px;
  background-color: white;
  border-radius: 2px;
}
.close-button__line_1[data-v-075919a7] {
  transform: rotate(45deg);
}
.close-button__line_2[data-v-075919a7] {
  transform: rotate(-45deg);
}
.swiper-container[data-v-075919a7] {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}
.slider-images[data-v-075919a7] {
  overflow: hidden;
  padding: 50px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.slider-images__image[data-v-075919a7] {
  height: 80vh;
  width: 100%;
  object-fit: contain;
}
.slider-images__button[data-v-075919a7] {
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  width: 50px;
  height: 50px;
}
.slider-images__button[data-v-075919a7]::before {
  position: absolute;
  border-radius: 100%;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background-color: white;
  content: "";
}
.product-review-chosen-files[data-v-075919a7] {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-template-rows: repeat(auto-fit, 100px);
  width: 100%;
}
.product-review-chosen-files-file[data-v-075919a7] {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
}
.product-review-chosen-files-file__image[data-v-075919a7] {
  width: 100%;
  height: 80%;
  object-fit: cover;
  border-radius: 5px;
}
.product-review[data-v-075919a7] {
  padding: 20px 50px;
  background-color: white;
  border-radius: 6px;
}
.product-review__rate[data-v-075919a7] {
  margin-bottom: 10px;
}
.product-review__content[data-v-075919a7] {
  margin-bottom: 30px;
}
.product-review__title[data-v-075919a7] {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}`, "",{"version":3,"sources":["webpack://./src/components/ProductReview.vue","webpack://./ProductReview.vue"],"names":[],"mappings":"AACA;EACI,eAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;ACAJ;ADEI;EACI,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,YAAA;EACA,UAAA;EACA,uBAAA;EACA,kBAAA;ACAR;ADEQ;EACI,wBAAA;ACAZ;ADGQ;EACI,yBAAA;ACDZ;ADMA;EACI,UAAA;EACA,cAAA;EACA,gBAAA;ACHJ;ADYA;EACI,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,aAAA;EACA,eAAA;EACA,WAAA;EACA,aAAA;EACA,MAAA;EACA,OAAA;EACA,oCAAA;ACTJ;ADWI;EACI,YAAA;EACA,WAAA;EACA,mBAAA;ACTR;ADYI;EACI,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;ACVR;ADYQ;EACI,kBAAA;EACA,mBAAA;EACA,WAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,WAAA;ACVZ;ADeA;EACI,aAAA;EACA,SAAA;EACA,8CAAA;EACA,2CAAA;EACA,WAAA;ACZJ;ADeA;EACI,aAAA;EACA,sBAAA;EACA,WAAA;EAEA,gBAAA;ACbJ;ADeI;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,kBAAA;ACbR;ADkBA;EACI,kBAAA;EACA,uBAAA;EACA,kBAAA;ACfJ;ADiBI;EACI,mBAAA;ACfR;ADkBI;EACI,mBAAA;AChBR;ADmBI;EACI,eAAA;EACA,gBAAA;EACA,mBAAA;ACjBR","sourcesContent":["\n.close-button {\n    position: fixed;\n    top: 50px;\n    right: 80px;\n    height: 40px;\n    width: 40px;\n\n    &__line {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        height: 40px;\n        width: 2px;\n        background-color: white;\n        border-radius: 2px;\n\n        &_1 {\n            transform: rotate(45deg);\n        }\n\n        &_2 {\n            transform: rotate(-45deg);\n        }\n    }\n}\n\n.swiper-container {\n    width: 80%;\n    margin: 0 auto;\n    overflow: hidden;\n}\n\n.swiper-wrapper {\n    // width: 100%;\n}\n\n.swiper-slide {}\n\n.slider-images {\n    overflow: hidden;\n    padding: 50px 80px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    z-index: 1000;\n    position: fixed;\n    width: 100%;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    background-color: rgba($color: #000000, $alpha: 0.6);\n\n    &__image {\n        height: 80vh;\n        width: 100%;\n        object-fit: contain;\n    }\n\n    &__button {\n        display: flex;\n        align-items: center;\n        position: relative;\n        justify-content: center;\n        width: 50px;\n        height: 50px;\n\n        &::before {\n            position: absolute;\n            border-radius: 100%;\n            z-index: -1;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: 50px;\n            height: 50px;\n            background-color: white;\n            content: '';\n        }\n    }\n}\n\n.product-review-chosen-files {\n    display: grid;\n    gap: 20px;\n    grid-template-columns: repeat(auto-fit, 100px);\n    grid-template-rows: repeat(auto-fit, 100px);\n    width: 100%;\n}\n\n.product-review-chosen-files-file {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n\n    overflow: hidden;\n\n    &__image {\n        width: 100%;\n        height: 80%;\n        object-fit: cover;\n        border-radius: 5px;\n    }\n}\n\n\n.product-review {\n    padding: 20px 50px;\n    background-color: white;\n    border-radius: 6px;\n\n    &__rate {\n        margin-bottom: 10px;\n    }\n\n    &__content {\n        margin-bottom: 30px;\n    }\n\n    &__title {\n        font-size: 20px;\n        font-weight: 700;\n        margin-bottom: 10px;\n    }\n}\n",".close-button {\n  position: fixed;\n  top: 50px;\n  right: 80px;\n  height: 40px;\n  width: 40px;\n}\n.close-button__line {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 40px;\n  width: 2px;\n  background-color: white;\n  border-radius: 2px;\n}\n.close-button__line_1 {\n  transform: rotate(45deg);\n}\n.close-button__line_2 {\n  transform: rotate(-45deg);\n}\n\n.swiper-container {\n  width: 80%;\n  margin: 0 auto;\n  overflow: hidden;\n}\n\n.slider-images {\n  overflow: hidden;\n  padding: 50px 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 1000;\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.slider-images__image {\n  height: 80vh;\n  width: 100%;\n  object-fit: contain;\n}\n.slider-images__button {\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n}\n.slider-images__button::before {\n  position: absolute;\n  border-radius: 100%;\n  z-index: -1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 50px;\n  height: 50px;\n  background-color: white;\n  content: \"\";\n}\n\n.product-review-chosen-files {\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(auto-fit, 100px);\n  grid-template-rows: repeat(auto-fit, 100px);\n  width: 100%;\n}\n\n.product-review-chosen-files-file {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow: hidden;\n}\n.product-review-chosen-files-file__image {\n  width: 100%;\n  height: 80%;\n  object-fit: cover;\n  border-radius: 5px;\n}\n\n.product-review {\n  padding: 20px 50px;\n  background-color: white;\n  border-radius: 6px;\n}\n.product-review__rate {\n  margin-bottom: 10px;\n}\n.product-review__content {\n  margin-bottom: 30px;\n}\n.product-review__title {\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/ProductReview.vue?vue&type=style&index=1&id=075919a7&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/ProductReview.vue?vue&type=style&index=1&id=075919a7&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.product-review-content-title {
  margin-bottom: 10px;
  color: #000;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
}`, "",{"version":3,"sources":["webpack://./src/components/ProductReview.vue","webpack://./ProductReview.vue"],"names":[],"mappings":"AACA;EACI,mBAAA;EACA,WAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;ACAJ","sourcesContent":["\n.product-review-content-title {\n    margin-bottom: 10px;\n    color: #000;\n    font-family: Montserrat;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n    text-transform: uppercase;\n}\n",".product-review-content-title {\n  margin-bottom: 10px;\n  color: #000;\n  font-family: Montserrat;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  text-transform: uppercase;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/first-section.vue?vue&type=style&index=0&id=3d8c8dc0&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/first-section.vue?vue&type=style&index=0&id=3d8c8dc0&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.first-section-description__price[data-v-3d8c8dc0] {
  color: #003D99;
  text-align: center;
  font-family: Montserrat;
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
}
.first-section-description__price_has-sale[data-v-3d8c8dc0] {
  font-size: 20px;
  font-weight: 400;
  color: gray;
  text-decoration: line-through;
}
.first-section-description__price-box[data-v-3d8c8dc0] {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  margin-bottom: 35px;
}
.first-section-description__sale-price[data-v-3d8c8dc0] {
  color: red;
  text-align: center;
  font-family: Montserrat;
  font-size: 3rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
}
.first-section[data-v-3d8c8dc0] {
  background-color: white;
}
.first-section-container[data-v-3d8c8dc0] {
  padding-top: 100px;
  padding-bottom: 80px;
  display: grid;
  grid-template-columns: 4fr 7fr;
  gap: 140px;
}
@media (max-width: 1000px) {
.first-section-container[data-v-3d8c8dc0] {
    grid-template-columns: 1fr;
}
}
.first-section-left__image[data-v-3d8c8dc0] {
  width: 100%;
}
.first-section-description__line[data-v-3d8c8dc0] {
  margin-bottom: 20px;
  height: 5px;
}
.first-section-description__title[data-v-3d8c8dc0] {
  color: #000;
  font-family: Montserrat;
  font-size: 4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  margin-bottom: 30px;
}
.first-section-description__rates-brand[data-v-3d8c8dc0] {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
}
.first-section-description__brand[data-v-3d8c8dc0] {
  color: #292D32;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.product-description-rate[data-v-3d8c8dc0] {
  align-items: center;
  display: flex;
}
.first-section-description-diginties[data-v-3d8c8dc0] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 75%;
  gap: 30px;
  margin-bottom: 60px;
}
@media (max-width: 768px) {
.first-section-description-diginties[data-v-3d8c8dc0] {
    grid-template-columns: 1fr;
    width: 100%;
}
}`, "",{"version":3,"sources":["webpack://./src/sections/product/first-section.vue","webpack://./first-section.vue"],"names":[],"mappings":"AAEI;EACI,cAAA;EACA,kBAAA;EACA,uBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;ACDR;ADIQ;EACI,eAAA;EACA,gBAAA;EACA,WAAA;EACA,6BAAA;ACFZ;ADMI;EACI,aAAA;EACA,qBAAA;EACA,SAAA;EACA,mBAAA;ACJR;ADOI;EACI,UAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;ACLR;ADUA;EAEI,uBAAA;ACRJ;ADWA;EACI,kBAAA;EACA,oBAAA;EACA,aAAA;EACA,8BAAA;EAMA,UAAA;ACbJ;ADSI;AANJ;IAOQ,0BAAA;ACNN;AACF;ADYI;EACI,WAAA;ACTR;ADeI;EACI,mBAAA;EACA,WAAA;ACZR;ADeI;EACI,WAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,qBAAA;EACA,yBAAA;EACA,mBAAA;ACbR;ADgBI;EACI,aAAA;EACA,mBAAA;EACA,SAAA;EACA,mBAAA;ACdR;ADiBI;EACI,cAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;ACfR;ADqBA;EACI,mBAAA;EACA,aAAA;ACnBJ;ADsBA;EACI,aAAA;EACA,8BAAA;EACA,UAAA;EACA,SAAA;EAOA,mBAAA;ACzBJ;ADoBI;AANJ;IAOQ,0BAAA;IACA,WAAA;ACjBN;AACF","sourcesContent":["\n.first-section-description {\n    &__price {\n        color: #003D99;\n        text-align: center;\n        font-family: Montserrat;\n        font-size: 2.8rem;\n        font-style: normal;\n        font-weight: 500;\n        line-height: normal;\n        text-transform: uppercase;\n        // margin-bottom: 10px;\n\n        &_has-sale {\n            font-size: 20px;\n            font-weight: 400;\n            color: gray;\n            text-decoration: line-through;\n        }\n    }\n\n    &__price-box {\n        display: flex;\n        align-items: flex-end;\n        gap: 10px;\n        margin-bottom: 35px;\n    }\n\n    &__sale-price {\n        color: red;\n        text-align: center;\n        font-family: Montserrat;\n        font-size: 3rem;\n        font-style: normal;\n        font-weight: 500;\n        line-height: normal;\n        text-transform: uppercase;\n    }\n\n}\n\n.first-section {\n    // margin-top: 80px;\n    background-color: white;\n}\n\n.first-section-container {\n    padding-top: 100px;\n    padding-bottom: 80px;\n    display: grid;\n    grid-template-columns: 4fr 7fr;\n\n    @media (max-width: 1000px) {\n        grid-template-columns: 1fr;\n    }\n\n    gap: 140px;\n}\n\n.first-section-left {\n    &__image {\n        width: 100%;\n        // height: 100%;\n    }\n}\n\n.first-section-description {\n    &__line {\n        margin-bottom: 20px;\n        height: 5px;\n    }\n\n    &__title {\n        color: #000;\n        font-family: Montserrat;\n        font-size: 4rem;\n        font-style: normal;\n        font-weight: 600;\n        line-height: normal;\n        letter-spacing: 1.6px;\n        text-transform: uppercase;\n        margin-bottom: 30px;\n    }\n\n    &__rates-brand {\n        display: flex;\n        align-items: center;\n        gap: 20px;\n        margin-bottom: 40px;\n    }\n\n    &__brand {\n        color: #292D32;\n        font-family: Montserrat;\n        font-size: 16px;\n        font-style: normal;\n        font-weight: 700;\n        line-height: normal;\n    }\n\n    &__button {}\n}\n\n.product-description-rate {\n    align-items: center;\n    display: flex;\n}\n\n.first-section-description-diginties {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    width: 75%;\n    gap: 30px;\n\n    @media (max-width: 768px) {\n        grid-template-columns: 1fr;\n        width: 100%;\n    }\n\n    margin-bottom: 60px;\n\n    &__item {}\n}\n\n.button {\n    &_around {}\n}\n",".first-section-description__price {\n  color: #003D99;\n  text-align: center;\n  font-family: Montserrat;\n  font-size: 2.8rem;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.first-section-description__price_has-sale {\n  font-size: 20px;\n  font-weight: 400;\n  color: gray;\n  text-decoration: line-through;\n}\n.first-section-description__price-box {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  margin-bottom: 35px;\n}\n.first-section-description__sale-price {\n  color: red;\n  text-align: center;\n  font-family: Montserrat;\n  font-size: 3rem;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  text-transform: uppercase;\n}\n\n.first-section {\n  background-color: white;\n}\n\n.first-section-container {\n  padding-top: 100px;\n  padding-bottom: 80px;\n  display: grid;\n  grid-template-columns: 4fr 7fr;\n  gap: 140px;\n}\n@media (max-width: 1000px) {\n  .first-section-container {\n    grid-template-columns: 1fr;\n  }\n}\n\n.first-section-left__image {\n  width: 100%;\n}\n\n.first-section-description__line {\n  margin-bottom: 20px;\n  height: 5px;\n}\n.first-section-description__title {\n  color: #000;\n  font-family: Montserrat;\n  font-size: 4rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  letter-spacing: 1.6px;\n  text-transform: uppercase;\n  margin-bottom: 30px;\n}\n.first-section-description__rates-brand {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 40px;\n}\n.first-section-description__brand {\n  color: #292D32;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n}\n.product-description-rate {\n  align-items: center;\n  display: flex;\n}\n\n.first-section-description-diginties {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: 75%;\n  gap: 30px;\n  margin-bottom: 60px;\n}\n@media (max-width: 768px) {\n  .first-section-description-diginties {\n    grid-template-columns: 1fr;\n    width: 100%;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/second-section.vue?vue&type=style&index=0&id=a9dfdd38&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/second-section.vue?vue&type=style&index=0&id=a9dfdd38&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.second-section-description[data-v-a9dfdd38] {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 35px;
}
.second-section[data-v-a9dfdd38] {
  padding-top: 80px;
  background-color: white;
  padding-bottom: 100px;
}
.second-section__title[data-v-a9dfdd38] {
  color: #000;
  font-family: Montserrat;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.66px;
  text-transform: uppercase;
}
.second-section-grid[data-v-a9dfdd38] {
  display: grid;
  grid-template-columns: 5fr 2fr;
  gap: 60px;
}
@media (max-width: 768px) {
.second-section-grid[data-v-a9dfdd38] {
    grid-template-columns: 1fr;
}
}
.second-section-left__no-reviews[data-v-a9dfdd38] {
  color: #000;
  font-family: Montserrat;
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.66px;
  text-transform: uppercase;
}
.second-section-left-props[data-v-a9dfdd38] {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.second-section-right[data-v-a9dfdd38] {
  display: flex;
  flex-direction: column;
  gap: 30px;
}`, "",{"version":3,"sources":["webpack://./src/sections/product/second-section.vue","webpack://./second-section.vue"],"names":[],"mappings":"AACA;EACI,aAAA;EACA,mBAAA;EACA,SAAA;EACA,mBAAA;ACAJ;ADEA;EACI,iBAAA;EACA,uBAAA;EACA,qBAAA;ACCJ;ADCI;EACI,WAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,sBAAA;EACA,yBAAA;ACCR;ADGA;EACI,aAAA;EACA,8BAAA;EAIA,SAAA;ACHJ;ADAI;AAHJ;IAIQ,0BAAA;ACGN;AACF;ADEI;EACI,WAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,sBAAA;EACA,yBAAA;ACCR;ADGA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;ACAJ;ADGA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;ACAJ","sourcesContent":["\n.second-section-description{\n    display: flex;\n    align-items: center;\n    gap: 40px;\n    margin-bottom: 35px;\n}\n.second-section {\n    padding-top: 80px;\n    background-color: white;\n    padding-bottom: 100px;\n\n    &__title {\n        color: #000;\n        font-family: Montserrat;\n        font-size: 22px;\n        font-style: normal;\n        font-weight: 700;\n        line-height: normal;\n        letter-spacing: 0.66px;\n        text-transform: uppercase;\n    }\n}\n\n.second-section-grid {\n    display: grid;\n    grid-template-columns: 5fr 2fr;\n    @media (max-width: 768px) {\n        grid-template-columns: 1fr;\n    }\n    gap: 60px;\n}\n\n.second-section-left {\n    &__no-reviews{\n        color: #000;\n        font-family: Montserrat;\n        font-size: 22px;\n        font-style: normal;\n        font-weight: 300;\n        line-height: normal;\n        letter-spacing: 0.66px;\n        text-transform: uppercase;\n    }\n}\n\n.second-section-left-props {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n}\n\n.second-section-right {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n",".second-section-description {\n  display: flex;\n  align-items: center;\n  gap: 40px;\n  margin-bottom: 35px;\n}\n\n.second-section {\n  padding-top: 80px;\n  background-color: white;\n  padding-bottom: 100px;\n}\n.second-section__title {\n  color: #000;\n  font-family: Montserrat;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  letter-spacing: 0.66px;\n  text-transform: uppercase;\n}\n\n.second-section-grid {\n  display: grid;\n  grid-template-columns: 5fr 2fr;\n  gap: 60px;\n}\n@media (max-width: 768px) {\n  .second-section-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n.second-section-left__no-reviews {\n  color: #000;\n  font-family: Montserrat;\n  font-size: 22px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: normal;\n  letter-spacing: 0.66px;\n  text-transform: uppercase;\n}\n\n.second-section-left-props {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n\n.second-section-right {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/third-section.vue?vue&type=style&index=0&id=762d1157&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/third-section.vue?vue&type=style&index=0&id=762d1157&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.third-section[data-v-762d1157] {
  padding-top: 100px;
  padding-bottom: 100px;
}
.third-section-container[data-v-762d1157] {
  display: flex;
  flex-direction: column;
  gap: 65px;
}
.third-section-title-box[data-v-762d1157] {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max-content;
}
@media (max-width: 550px) {
.third-section-title-box[data-v-762d1157] {
    grid-template-columns: 1fr;
    gap: 60px;
}
}
.third-section-alike-products[data-v-762d1157] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
  gap: 20px;
}`, "",{"version":3,"sources":["webpack://./src/sections/product/third-section.vue","webpack://./third-section.vue"],"names":[],"mappings":"AACA;EACI,kBAAA;EACA,qBAAA;ACAJ;ADGA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;ACAJ;ADGA;EACI,aAAA;EACA,mBAAA;EACA,sCAAA;ACAJ;ADEI;AALJ;IAMQ,0BAAA;IACA,SAAA;ACCN;AACF;ADOA;EACI,aAAA;EACA,2DAAA;EACA,SAAA;ACLJ","sourcesContent":["\n.third-section {\n    padding-top: 100px;\n    padding-bottom: 100px;\n}\n\n.third-section-container {\n    display: flex;\n    flex-direction: column;\n    gap: 65px;\n}\n\n.third-section-title-box {\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr max-content;\n\n    @media (max-width: 550px ) {\n        grid-template-columns: 1fr;\n        gap: 60px;\n    }\n    &__button {}\n    &__header {\n        \n        // width: max-content;\n    }\n}\n\n.third-section-alike-products {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));\n    gap: 20px;\n}\n",".third-section {\n  padding-top: 100px;\n  padding-bottom: 100px;\n}\n\n.third-section-container {\n  display: flex;\n  flex-direction: column;\n  gap: 65px;\n}\n\n.third-section-title-box {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 1fr max-content;\n}\n@media (max-width: 550px) {\n  .third-section-title-box {\n    grid-template-columns: 1fr;\n    gap: 60px;\n  }\n}\n.third-section-alike-products {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));\n  gap: 20px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/views/productPage.vue?vue&type=style&index=0&id=f3c89618&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/views/productPage.vue?vue&type=style&index=0&id=f3c89618&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `main[data-v-f3c89618] {
  padding-top: 100px;
}`, "",{"version":3,"sources":["webpack://./src/views/productPage.vue","webpack://./productPage.vue"],"names":[],"mappings":"AACA;EACI,kBAAA;ACAJ","sourcesContent":["\nmain {\n    padding-top: 100px;\n}\n","main {\n  padding-top: 100px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/AddReviewDialog.vue":
/*!********************************************!*\
  !*** ./src/components/AddReviewDialog.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddReviewDialog_vue_vue_type_template_id_378d4381_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddReviewDialog.vue?vue&type=template&id=378d4381&scoped=true */ "./src/components/AddReviewDialog.vue?vue&type=template&id=378d4381&scoped=true");
/* harmony import */ var _AddReviewDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddReviewDialog.vue?vue&type=script&lang=js */ "./src/components/AddReviewDialog.vue?vue&type=script&lang=js");
/* harmony import */ var _AddReviewDialog_vue_vue_type_style_index_0_id_378d4381_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddReviewDialog.vue?vue&type=style&index=0&id=378d4381&lang=scss&scoped=true */ "./src/components/AddReviewDialog.vue?vue&type=style&index=0&id=378d4381&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AddReviewDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AddReviewDialog_vue_vue_type_template_id_378d4381_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-378d4381"],['__file',"src/components/AddReviewDialog.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/AddReviewDialog.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/AddReviewDialog.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _axiosWoocomerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/axiosWoocomerce */ "./src/axiosWoocomerce.js");
/* harmony import */ var _mixins_rate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/mixins/rate */ "./src/mixins/rate.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    computed: {
        inRate(){
            return 5 - this.rate;
        },
    },
    props: {
        isAddReviewDialogShow: {
            type: Boolean,
            required: true
        },
        review: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            images: [],
            isPreloaderEnabled: false,
            rate: 0,
            index: 1,
        }
    },
    methods: {
        async addReview(event) {
            let formData = new FormData(event.target)

            formData.append('product_id', this.$route.params.id)
            formData.append('reviewer', 'someone')
            formData.append('reviewer_email', 'someone@example.com')
            formData.append('images', this.images)
            formData.append('rating', this.index)

            this.isPreloaderEnabled = true;
            let response = await _axiosWoocomerce__WEBPACK_IMPORTED_MODULE_0__["default"].post('products/reviews', formData);
            this.isPreloaderEnabled = false;

            if (response.statusText == 'Created') {
                this.$emit('update:isAddReviewDialogShow', false)
                this.$emit('update:review', response.data)
            }
        },
        mouseEnter(event, index){
            let children = event.target.parentElement.children

            for (let i = 0; i <= index; i++) {
                children[i].src = this.$store.state.app.settings_light_start
            }
            this.index = index + 1;
            for (let i = index + 1; i < children.length; i++) {
                children[i].src = this.$store.state.app.settings_dark_start
            }
        },
    }
});


/***/ }),

/***/ "./src/components/Diginity.vue":
/*!*************************************!*\
  !*** ./src/components/Diginity.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Diginity_vue_vue_type_template_id_7692eed7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Diginity.vue?vue&type=template&id=7692eed7&scoped=true */ "./src/components/Diginity.vue?vue&type=template&id=7692eed7&scoped=true");
/* harmony import */ var _Diginity_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Diginity.vue?vue&type=script&lang=js */ "./src/components/Diginity.vue?vue&type=script&lang=js");
/* harmony import */ var _Diginity_vue_vue_type_style_index_0_id_7692eed7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Diginity.vue?vue&type=style&index=0&id=7692eed7&lang=scss&scoped=true */ "./src/components/Diginity.vue?vue&type=style&index=0&id=7692eed7&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Diginity_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Diginity_vue_vue_type_template_id_7692eed7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-7692eed7"],['__file',"src/components/Diginity.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Diginity.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Diginity.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    props: {
        title: {
            type: String,
        },
        text: {
            type: String,
        },
        lineWidth: {
            type: Number
        }
    },
});


/***/ }),

/***/ "./src/components/Library.vue":
/*!************************************!*\
  !*** ./src/components/Library.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Library_vue_vue_type_template_id_7186813b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Library.vue?vue&type=template&id=7186813b&scoped=true */ "./src/components/Library.vue?vue&type=template&id=7186813b&scoped=true");
/* harmony import */ var _Library_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Library.vue?vue&type=script&lang=js */ "./src/components/Library.vue?vue&type=script&lang=js");
/* harmony import */ var _Library_vue_vue_type_style_index_0_id_7186813b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Library.vue?vue&type=style&index=0&id=7186813b&lang=scss&scoped=true */ "./src/components/Library.vue?vue&type=style&index=0&id=7186813b&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Library_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Library_vue_vue_type_template_id_7186813b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-7186813b"],['__file',"src/components/Library.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Library.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Library.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins/swiper */ "./src/mixins/swiper.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    mixins: [_mixins_swiper__WEBPACK_IMPORTED_MODULE_0__["default"]],
    computed: {
        imagesCount() {
            return this.images.length
        },
        imagesMoreOne() {
            return this.imagesCount > 1;
        }
    },
    props: {
        isSliderShow: {
            type: Boolean,
            required: true
        },
        images: {
            type: [Array, Object],
            required: true
        }
    }, 
    mounted() {
        this.initializeSwiper();
    },
    methods: {
        initializeSwiper() {
            this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](this.$refs['swiper-container'], {
                loop: true,
                slidesPerView: 1,
            });
        }
    }
});


/***/ }),

/***/ "./src/components/ProductReview.vue":
/*!******************************************!*\
  !*** ./src/components/ProductReview.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductReview_vue_vue_type_template_id_075919a7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductReview.vue?vue&type=template&id=075919a7&scoped=true */ "./src/components/ProductReview.vue?vue&type=template&id=075919a7&scoped=true");
/* harmony import */ var _ProductReview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductReview.vue?vue&type=script&lang=js */ "./src/components/ProductReview.vue?vue&type=script&lang=js");
/* harmony import */ var _ProductReview_vue_vue_type_style_index_0_id_075919a7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductReview.vue?vue&type=style&index=0&id=075919a7&lang=scss&scoped=true */ "./src/components/ProductReview.vue?vue&type=style&index=0&id=075919a7&lang=scss&scoped=true");
/* harmony import */ var _ProductReview_vue_vue_type_style_index_1_id_075919a7_lang_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductReview.vue?vue&type=style&index=1&id=075919a7&lang=scss */ "./src/components/ProductReview.vue?vue&type=style&index=1&id=075919a7&lang=scss");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;



const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_ProductReview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductReview_vue_vue_type_template_id_075919a7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-075919a7"],['__file',"src/components/ProductReview.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/ProductReview.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/ProductReview.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_rate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins/rate */ "./src/mixins/rate.js");
/* harmony import */ var _mixins_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/mixins/swiper */ "./src/mixins/swiper.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var _Library_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Library.vue */ "./src/components/Library.vue");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    mixins: [_mixins_rate__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_swiper__WEBPACK_IMPORTED_MODULE_1__["default"]],
    data() {
        return {
            selectedImage: {},
            isSliderShow: false,
        };
    },
    computed: {
        imagesCount() {
            return this.images.length;
        },
        imagesMoreOne() {
            return this.imagesCount > 1;
        }
    },
    props: {
        content: {
            type: String,
            default: '<p class="product-review-content-title">Привет, это отзыв</p><p>Привет, это текст отзыва</p>'
        },
        title: {
            type: String,
            default: 'Отзыв'
        },
        images: {
            type: Object,
            default: () => []
        }
    },
    components: { Library: _Library_vue__WEBPACK_IMPORTED_MODULE_3__["default"] }
});


/***/ }),

/***/ "./src/sections/product/first-section.vue":
/*!************************************************!*\
  !*** ./src/sections/product/first-section.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _first_section_vue_vue_type_template_id_3d8c8dc0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./first-section.vue?vue&type=template&id=3d8c8dc0&scoped=true */ "./src/sections/product/first-section.vue?vue&type=template&id=3d8c8dc0&scoped=true");
/* harmony import */ var _first_section_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./first-section.vue?vue&type=script&lang=js */ "./src/sections/product/first-section.vue?vue&type=script&lang=js");
/* harmony import */ var _first_section_vue_vue_type_style_index_0_id_3d8c8dc0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./first-section.vue?vue&type=style&index=0&id=3d8c8dc0&lang=scss&scoped=true */ "./src/sections/product/first-section.vue?vue&type=style&index=0&id=3d8c8dc0&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_first_section_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_first_section_vue_vue_type_template_id_3d8c8dc0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-3d8c8dc0"],['__file',"src/sections/product/first-section.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/first-section.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/first-section.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Diginity_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Diginity.vue */ "./src/components/Diginity.vue");
/* harmony import */ var _mixins_rate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/mixins/rate */ "./src/mixins/rate.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    mixins: [_mixins_rate__WEBPACK_IMPORTED_MODULE_1__["default"]],
    props: {
        product: {
            type: Object,
            required: true
        },
    },
    methods: {
        productAdd(count) {
            if (count == 1) {
                return this.$store.commit('basket/addBasketELement', { product: this.product, quantity: count })
            }
            if (count == 0) {
                return this.$store.commit('basket/deleteBasketElement', { product: this.product, quantity: count })
            }
            return this.$store.commit('basket/updateBasketElement', { product: this.product, quantity: count })
        }
    },
    components: { Diginity: _components_Diginity_vue__WEBPACK_IMPORTED_MODULE_0__["default"] },
    mounted() {

    }
});


/***/ }),

/***/ "./src/sections/product/second-section.vue":
/*!*************************************************!*\
  !*** ./src/sections/product/second-section.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _second_section_vue_vue_type_template_id_a9dfdd38_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./second-section.vue?vue&type=template&id=a9dfdd38&scoped=true */ "./src/sections/product/second-section.vue?vue&type=template&id=a9dfdd38&scoped=true");
/* harmony import */ var _second_section_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./second-section.vue?vue&type=script&lang=js */ "./src/sections/product/second-section.vue?vue&type=script&lang=js");
/* harmony import */ var _second_section_vue_vue_type_style_index_0_id_a9dfdd38_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./second-section.vue?vue&type=style&index=0&id=a9dfdd38&lang=scss&scoped=true */ "./src/sections/product/second-section.vue?vue&type=style&index=0&id=a9dfdd38&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_second_section_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_second_section_vue_vue_type_template_id_a9dfdd38_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-a9dfdd38"],['__file',"src/sections/product/second-section.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/second-section.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/second-section.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AddReviewDialog_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/AddReviewDialog.vue */ "./src/components/AddReviewDialog.vue");
/* harmony import */ var _components_ProductReview_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ProductReview.vue */ "./src/components/ProductReview.vue");
/* harmony import */ var _components_QuestionBox_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/QuestionBox.vue */ "./src/components/QuestionBox.vue");
/* harmony import */ var _axiosWoocomerce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/axiosWoocomerce */ "./src/axiosWoocomerce.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    props:  {
        productProperties: {
            type: Object, 
            required: true,
        }
    },
    data() {
        return {
            propsHeight: '340px',
            isShowProps: false,
            currentVisibleMenu: { label: 'Свойства товара', value: 'props' },
            buttonsInMenu: [
                { label: 'Свойства товара', value: 'props' },
                { label: 'Отзывы о товаре', value: 'reviews' },
            ],
            reviewsPage: 1,
            productReviews: [],
            isAddReviewDialogShow: false,
            review: {},
        }
    },
    computed: {
        productIdComputed(){
            return this.$route.params.id
        },
    },
    watch: {
        reviewsPage(){
            this.getProductReviews()
        },
        productIdComputed(){
            this.getProductReviews()
        },
        review(){
            this.productReviews.unshift(this.review)
        }
    },
    components: { QuestionBox: _components_QuestionBox_vue__WEBPACK_IMPORTED_MODULE_2__["default"], ProductReview: _components_ProductReview_vue__WEBPACK_IMPORTED_MODULE_1__["default"], AddReviewDialog: _components_AddReviewDialog_vue__WEBPACK_IMPORTED_MODULE_0__["default"] },
    methods: {
        jivoOpen() {
            let result = jivo_api.open()
        },
        async getProductReviews(){
            let reviews = (await _axiosWoocomerce__WEBPACK_IMPORTED_MODULE_3__["default"].get('products/reviews', {
                params: {
                    product: this.productIdComputed,
                    per_page: 8,
                    page: this.reviewsPage
                }
            })).data;
            this.productReviews.push(...reviews)
        }
    },
    mounted(){
        this.getProductReviews()
    }

});


/***/ }),

/***/ "./src/sections/product/third-section.vue":
/*!************************************************!*\
  !*** ./src/sections/product/third-section.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _third_section_vue_vue_type_template_id_762d1157_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./third-section.vue?vue&type=template&id=762d1157&scoped=true */ "./src/sections/product/third-section.vue?vue&type=template&id=762d1157&scoped=true");
/* harmony import */ var _third_section_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./third-section.vue?vue&type=script&lang=js */ "./src/sections/product/third-section.vue?vue&type=script&lang=js");
/* harmony import */ var _third_section_vue_vue_type_style_index_0_id_762d1157_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./third-section.vue?vue&type=style&index=0&id=762d1157&lang=scss&scoped=true */ "./src/sections/product/third-section.vue?vue&type=style&index=0&id=762d1157&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_third_section_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_third_section_vue_vue_type_template_id_762d1157_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-762d1157"],['__file',"src/sections/product/third-section.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/third-section.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/third-section.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AddReviewDialog_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/AddReviewDialog.vue */ "./src/components/AddReviewDialog.vue");
/* harmony import */ var _components_Product_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Product.vue */ "./src/components/Product.vue");
/* harmony import */ var _axiosWoocomerce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/axiosWoocomerce */ "./src/axiosWoocomerce.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    props: {
        categories: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            products: [],
            isProductsLoaded: false,
            productId: this.$route.params.id,
        }
    },
    computed: {
        firstFourProducts() {
            return this.products.slice(0, 4);
        }
    },
    components: { Product: _components_Product_vue__WEBPACK_IMPORTED_MODULE_1__["default"], AddReviewDialog: _components_AddReviewDialog_vue__WEBPACK_IMPORTED_MODULE_0__["default"] },
    async beforeCreate() {
        let soretedCategories = this.categories.sort((first, second) => first.id - second.id < 0 ? 1 : -1)
        let sameProducts = [];
        for (let index = 0; index < this.categories.length; index++) {

            let beforeAddedSameProducts = (await _axiosWoocomerce__WEBPACK_IMPORTED_MODULE_2__["default"].get('products', {
                'params': {
                    'category': soretedCategories[index].id
                }
            })).data
            sameProducts.forEach(product => {
                beforeAddedSameProducts = beforeAddedSameProducts.filter(item => {
                    return item.id !== product.id
                })
            })
            sameProducts.push(...(beforeAddedSameProducts))
            sameProducts = sameProducts.filter(product => product.id != this.productId)
            if (sameProducts.length >= 4) {
                break;
            }
        }

        this.products = sameProducts;

        this.isProductsLoaded = true
    }
});


/***/ }),

/***/ "./src/views/productPage.vue":
/*!***********************************!*\
  !*** ./src/views/productPage.vue ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _productPage_vue_vue_type_template_id_f3c89618_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productPage.vue?vue&type=template&id=f3c89618&scoped=true */ "./src/views/productPage.vue?vue&type=template&id=f3c89618&scoped=true");
/* harmony import */ var _productPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productPage.vue?vue&type=script&lang=js */ "./src/views/productPage.vue?vue&type=script&lang=js");
/* harmony import */ var _productPage_vue_vue_type_style_index_0_id_f3c89618_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productPage.vue?vue&type=style&index=0&id=f3c89618&lang=scss&scoped=true */ "./src/views/productPage.vue?vue&type=style&index=0&id=f3c89618&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_productPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_productPage_vue_vue_type_template_id_f3c89618_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-f3c89618"],['__file',"src/views/productPage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/views/productPage.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/views/productPage.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _axiosWP__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/axiosWP */ "./src/axiosWP.js");
/* harmony import */ var _axiosWoocomerce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/axiosWoocomerce */ "./src/axiosWoocomerce.js");
/* harmony import */ var _sections_product_first_section_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/sections/product/first-section.vue */ "./src/sections/product/first-section.vue");
/* harmony import */ var _helpers_createOauthRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/createOauthRequest */ "./src/helpers/createOauthRequest.js");
/* harmony import */ var _sections_product_second_section_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/sections/product/second-section.vue */ "./src/sections/product/second-section.vue");
/* harmony import */ var _sections_product_third_section_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/sections/product/third-section.vue */ "./src/sections/product/third-section.vue");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    props: {
        isDataLoaded: {
            type: Boolean,
        },
        isAppLoaded: {
            type: Boolean
        }
    },
    data() {
        return {
            product: {},
            isProductLoaded: false
        }
    },
    computed: {
        productId() {
            return this.$route.params.id
        },
        // async averageRating(){
        //     let response = await WOO.get('products/reviews?product=' + this.product.id).then(response => response.data)

        //     // return 
        // }
    },
    async beforeCreate() {
        let pageData = (await _axiosWP__WEBPACK_IMPORTED_MODULE_0__["default"].get('pages/253')).data;
        this.$store.state.page = pageData.cfs;

        await this.getProduct()

        if (this.isDataLoaded == false) {
            this.$emit('update:isDataLoaded', !this.isDataLoaded);
        }
    },
    watch: {
        async productId(){
            await this.getProduct()
            this.$router.push({hash: '#first-section'})
        }
    },
    methods: {
        async getProduct() {
            this.isProductLoaded = false

            let response = await (0,_helpers_createOauthRequest__WEBPACK_IMPORTED_MODULE_3__["default"])({
                url: `products/${this.productId}`,
            }, false)

            this.product = response.data

            this.isProductLoaded = true

        }
    },
    components: { FirstSection: _sections_product_first_section_vue__WEBPACK_IMPORTED_MODULE_2__["default"], SecondSection: _sections_product_second_section_vue__WEBPACK_IMPORTED_MODULE_4__["default"], ThirdSection: _sections_product_third_section_vue__WEBPACK_IMPORTED_MODULE_5__["default"] }
});


/***/ }),

/***/ "./src/components/AddReviewDialog.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./src/components/AddReviewDialog.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_AddReviewDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_AddReviewDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./AddReviewDialog.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/AddReviewDialog.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/Diginity.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/components/Diginity.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Diginity_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Diginity_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Diginity.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Diginity.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/Library.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/components/Library.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Library_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Library_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Library.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Library.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/ProductReview.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/components/ProductReview.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_ProductReview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_ProductReview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./ProductReview.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/ProductReview.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/sections/product/first-section.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./src/sections/product/first-section.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_first_section_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_first_section_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./first-section.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/first-section.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/sections/product/second-section.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./src/sections/product/second-section.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_second_section_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_second_section_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./second-section.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/second-section.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/sections/product/third-section.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./src/sections/product/third-section.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_third_section_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_third_section_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./third-section.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/third-section.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/productPage.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/views/productPage.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_productPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_productPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./productPage.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/views/productPage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/AddReviewDialog.vue?vue&type=template&id=378d4381&scoped=true":
/*!**************************************************************************************!*\
  !*** ./src/components/AddReviewDialog.vue?vue&type=template&id=378d4381&scoped=true ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_AddReviewDialog_vue_vue_type_template_id_378d4381_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_AddReviewDialog_vue_vue_type_template_id_378d4381_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./AddReviewDialog.vue?vue&type=template&id=378d4381&scoped=true */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/AddReviewDialog.vue?vue&type=template&id=378d4381&scoped=true");


/***/ }),

/***/ "./src/components/Diginity.vue?vue&type=template&id=7692eed7&scoped=true":
/*!*******************************************************************************!*\
  !*** ./src/components/Diginity.vue?vue&type=template&id=7692eed7&scoped=true ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Diginity_vue_vue_type_template_id_7692eed7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Diginity_vue_vue_type_template_id_7692eed7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Diginity.vue?vue&type=template&id=7692eed7&scoped=true */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Diginity.vue?vue&type=template&id=7692eed7&scoped=true");


/***/ }),

/***/ "./src/components/Library.vue?vue&type=template&id=7186813b&scoped=true":
/*!******************************************************************************!*\
  !*** ./src/components/Library.vue?vue&type=template&id=7186813b&scoped=true ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Library_vue_vue_type_template_id_7186813b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Library_vue_vue_type_template_id_7186813b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Library.vue?vue&type=template&id=7186813b&scoped=true */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Library.vue?vue&type=template&id=7186813b&scoped=true");


/***/ }),

/***/ "./src/components/ProductReview.vue?vue&type=template&id=075919a7&scoped=true":
/*!************************************************************************************!*\
  !*** ./src/components/ProductReview.vue?vue&type=template&id=075919a7&scoped=true ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_ProductReview_vue_vue_type_template_id_075919a7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_ProductReview_vue_vue_type_template_id_075919a7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./ProductReview.vue?vue&type=template&id=075919a7&scoped=true */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/ProductReview.vue?vue&type=template&id=075919a7&scoped=true");


/***/ }),

/***/ "./src/sections/product/first-section.vue?vue&type=template&id=3d8c8dc0&scoped=true":
/*!******************************************************************************************!*\
  !*** ./src/sections/product/first-section.vue?vue&type=template&id=3d8c8dc0&scoped=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_first_section_vue_vue_type_template_id_3d8c8dc0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_first_section_vue_vue_type_template_id_3d8c8dc0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./first-section.vue?vue&type=template&id=3d8c8dc0&scoped=true */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/first-section.vue?vue&type=template&id=3d8c8dc0&scoped=true");


/***/ }),

/***/ "./src/sections/product/second-section.vue?vue&type=template&id=a9dfdd38&scoped=true":
/*!*******************************************************************************************!*\
  !*** ./src/sections/product/second-section.vue?vue&type=template&id=a9dfdd38&scoped=true ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_second_section_vue_vue_type_template_id_a9dfdd38_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_second_section_vue_vue_type_template_id_a9dfdd38_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./second-section.vue?vue&type=template&id=a9dfdd38&scoped=true */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/second-section.vue?vue&type=template&id=a9dfdd38&scoped=true");


/***/ }),

/***/ "./src/sections/product/third-section.vue?vue&type=template&id=762d1157&scoped=true":
/*!******************************************************************************************!*\
  !*** ./src/sections/product/third-section.vue?vue&type=template&id=762d1157&scoped=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_third_section_vue_vue_type_template_id_762d1157_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_third_section_vue_vue_type_template_id_762d1157_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./third-section.vue?vue&type=template&id=762d1157&scoped=true */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/third-section.vue?vue&type=template&id=762d1157&scoped=true");


/***/ }),

/***/ "./src/views/productPage.vue?vue&type=template&id=f3c89618&scoped=true":
/*!*****************************************************************************!*\
  !*** ./src/views/productPage.vue?vue&type=template&id=f3c89618&scoped=true ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_productPage_vue_vue_type_template_id_f3c89618_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_productPage_vue_vue_type_template_id_f3c89618_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./productPage.vue?vue&type=template&id=f3c89618&scoped=true */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/views/productPage.vue?vue&type=template&id=f3c89618&scoped=true");


/***/ }),

/***/ "./src/components/AddReviewDialog.vue?vue&type=style&index=0&id=378d4381&lang=scss&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./src/components/AddReviewDialog.vue?vue&type=style&index=0&id=378d4381&lang=scss&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_AddReviewDialog_vue_vue_type_style_index_0_id_378d4381_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./AddReviewDialog.vue?vue&type=style&index=0&id=378d4381&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/AddReviewDialog.vue?vue&type=style&index=0&id=378d4381&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_AddReviewDialog_vue_vue_type_style_index_0_id_378d4381_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_AddReviewDialog_vue_vue_type_style_index_0_id_378d4381_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_AddReviewDialog_vue_vue_type_style_index_0_id_378d4381_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_AddReviewDialog_vue_vue_type_style_index_0_id_378d4381_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/components/Diginity.vue?vue&type=style&index=0&id=7692eed7&lang=scss&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./src/components/Diginity.vue?vue&type=style&index=0&id=7692eed7&lang=scss&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Diginity_vue_vue_type_style_index_0_id_7692eed7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Diginity.vue?vue&type=style&index=0&id=7692eed7&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Diginity.vue?vue&type=style&index=0&id=7692eed7&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Diginity_vue_vue_type_style_index_0_id_7692eed7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Diginity_vue_vue_type_style_index_0_id_7692eed7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Diginity_vue_vue_type_style_index_0_id_7692eed7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Diginity_vue_vue_type_style_index_0_id_7692eed7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/components/Library.vue?vue&type=style&index=0&id=7186813b&lang=scss&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./src/components/Library.vue?vue&type=style&index=0&id=7186813b&lang=scss&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Library_vue_vue_type_style_index_0_id_7186813b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Library.vue?vue&type=style&index=0&id=7186813b&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Library.vue?vue&type=style&index=0&id=7186813b&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Library_vue_vue_type_style_index_0_id_7186813b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Library_vue_vue_type_style_index_0_id_7186813b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Library_vue_vue_type_style_index_0_id_7186813b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_Library_vue_vue_type_style_index_0_id_7186813b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/components/ProductReview.vue?vue&type=style&index=0&id=075919a7&lang=scss&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./src/components/ProductReview.vue?vue&type=style&index=0&id=075919a7&lang=scss&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_ProductReview_vue_vue_type_style_index_0_id_075919a7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./ProductReview.vue?vue&type=style&index=0&id=075919a7&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/ProductReview.vue?vue&type=style&index=0&id=075919a7&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_ProductReview_vue_vue_type_style_index_0_id_075919a7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_ProductReview_vue_vue_type_style_index_0_id_075919a7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_ProductReview_vue_vue_type_style_index_0_id_075919a7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_ProductReview_vue_vue_type_style_index_0_id_075919a7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/components/ProductReview.vue?vue&type=style&index=1&id=075919a7&lang=scss":
/*!***************************************************************************************!*\
  !*** ./src/components/ProductReview.vue?vue&type=style&index=1&id=075919a7&lang=scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_ProductReview_vue_vue_type_style_index_1_id_075919a7_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./ProductReview.vue?vue&type=style&index=1&id=075919a7&lang=scss */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/ProductReview.vue?vue&type=style&index=1&id=075919a7&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_ProductReview_vue_vue_type_style_index_1_id_075919a7_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_ProductReview_vue_vue_type_style_index_1_id_075919a7_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_ProductReview_vue_vue_type_style_index_1_id_075919a7_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_ProductReview_vue_vue_type_style_index_1_id_075919a7_lang_scss__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/sections/product/first-section.vue?vue&type=style&index=0&id=3d8c8dc0&lang=scss&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./src/sections/product/first-section.vue?vue&type=style&index=0&id=3d8c8dc0&lang=scss&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_first_section_vue_vue_type_style_index_0_id_3d8c8dc0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./first-section.vue?vue&type=style&index=0&id=3d8c8dc0&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/first-section.vue?vue&type=style&index=0&id=3d8c8dc0&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_first_section_vue_vue_type_style_index_0_id_3d8c8dc0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_first_section_vue_vue_type_style_index_0_id_3d8c8dc0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_first_section_vue_vue_type_style_index_0_id_3d8c8dc0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_first_section_vue_vue_type_style_index_0_id_3d8c8dc0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/sections/product/second-section.vue?vue&type=style&index=0&id=a9dfdd38&lang=scss&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./src/sections/product/second-section.vue?vue&type=style&index=0&id=a9dfdd38&lang=scss&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_second_section_vue_vue_type_style_index_0_id_a9dfdd38_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./second-section.vue?vue&type=style&index=0&id=a9dfdd38&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/second-section.vue?vue&type=style&index=0&id=a9dfdd38&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_second_section_vue_vue_type_style_index_0_id_a9dfdd38_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_second_section_vue_vue_type_style_index_0_id_a9dfdd38_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_second_section_vue_vue_type_style_index_0_id_a9dfdd38_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_second_section_vue_vue_type_style_index_0_id_a9dfdd38_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/sections/product/third-section.vue?vue&type=style&index=0&id=762d1157&lang=scss&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./src/sections/product/third-section.vue?vue&type=style&index=0&id=762d1157&lang=scss&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_third_section_vue_vue_type_style_index_0_id_762d1157_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./third-section.vue?vue&type=style&index=0&id=762d1157&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/third-section.vue?vue&type=style&index=0&id=762d1157&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_third_section_vue_vue_type_style_index_0_id_762d1157_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_third_section_vue_vue_type_style_index_0_id_762d1157_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_third_section_vue_vue_type_style_index_0_id_762d1157_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_third_section_vue_vue_type_style_index_0_id_762d1157_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/views/productPage.vue?vue&type=style&index=0&id=f3c89618&lang=scss&scoped=true":
/*!********************************************************************************************!*\
  !*** ./src/views/productPage.vue?vue&type=style&index=0&id=f3c89618&lang=scss&scoped=true ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_productPage_vue_vue_type_style_index_0_id_f3c89618_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./productPage.vue?vue&type=style&index=0&id=f3c89618&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/views/productPage.vue?vue&type=style&index=0&id=f3c89618&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_productPage_vue_vue_type_style_index_0_id_f3c89618_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_productPage_vue_vue_type_style_index_0_id_f3c89618_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_productPage_vue_vue_type_style_index_0_id_f3c89618_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_productPage_vue_vue_type_style_index_0_id_f3c89618_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/AddReviewDialog.vue?vue&type=template&id=378d4381&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/AddReviewDialog.vue?vue&type=template&id=378d4381&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-378d4381"),n=n(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),n)
const _hoisted_1 = { class: "add-review-dialog-container" }
const _hoisted_2 = { class: "product-review__rate" }
const _hoisted_3 = ["onMouseover", "src"]
const _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  placeholder: "Заголовок",
  name: "title",
  type: "text",
  class: "input-text add-review-dialog__title"
}, null, -1 /* HOISTED */))
const _hoisted_5 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
  name: "review",
  class: "text-area add-review-dialog__textarea"
}, null, -1 /* HOISTED */))
const _hoisted_6 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  class: "button button_around add-review-dialog__button"
}, "Отправить", -1 /* HOISTED */))
const _hoisted_7 = {
  key: 0,
  class: "pleloader-box"
}
const _hoisted_8 = ["src"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_file_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("file-input")
  const _component_modal_window = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("modal-window")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_modal_window, {
      "onUpdate:isDialogShow": _cache[2] || (_cache[2] = (newValue) => _ctx.$emit('update:isAddReviewDialogShow', newValue)),
      isDialogShow: $props.isAddReviewDialogShow
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
          onSubmit: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => ($options.addReview && $options.addReview(...args)), ["prevent"])),
          class: "add-review-dialog"
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.inRate, (inRate, index) => {
              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
                class: "add-review-dialog__image",
                onMouseover: (event) => $options.mouseEnter(event, index),
                key: index,
                src: _ctx.$store.state.app.settings_dark_start,
                alt: ""
              }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3))
            }), 128 /* KEYED_FRAGMENT */))
          ]),
          _hoisted_4,
          _hoisted_5,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_file_input, {
            isMultiple: true,
            images: $data.images,
            "onUpdate:images": _cache[0] || (_cache[0] = $event => (($data.images) = $event)),
            name: "images"
          }, null, 8 /* PROPS */, ["images"]),
          _hoisted_6,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, { name: "preloader" }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
              ($data.isPreloaderEnabled)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
                      class: "pleloader-box__image",
                      src: _ctx.$store.state.app.settings_preloader_icon,
                      alt: "preloader-icon"
                    }, null, 8 /* PROPS */, _hoisted_8)
                  ]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
            ]),
            _: 1 /* STABLE */
          })
        ], 32 /* HYDRATE_EVENTS */)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["isDialogShow"])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Diginity.vue?vue&type=template&id=7692eed7&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Diginity.vue?vue&type=template&id=7692eed7&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-7692eed7"),n=n(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),n)
const _hoisted_1 = { class: "diginity" }
const _hoisted_2 = { class: "diginity__title" }
const _hoisted_3 = ["innerHTML"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ width: $props.lineWidth + '%'}),
      class: "line"
    }, null, 4 /* STYLE */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1 /* TEXT */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
      class: "diginity__text",
      innerHTML: $props.text
    }, null, 8 /* PROPS */, _hoisted_3)
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Library.vue?vue&type=template&id=7186813b&scoped=true":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Library.vue?vue&type=template&id=7186813b&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-7186813b"),n=n(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),n)
const _hoisted_1 = { class: "slider-images-box" }
const _hoisted_2 = ["src"]
const _hoisted_3 = {
  ref: "swiper-container",
  class: "swiper-container"
}
const _hoisted_4 = { class: "swiper-wrapper" }
const _hoisted_5 = ["src", "alt"]
const _hoisted_6 = ["src"]
const _hoisted_7 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "close-button__line close-button__line_1" }, null, -1 /* HOISTED */))
const _hoisted_8 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "close-button__line close-button__line_2" }, null, -1 /* HOISTED */))
const _hoisted_9 = [
  _hoisted_7,
  _hoisted_8
]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      onClick: _cache[4] || (_cache[4] = $event => (_ctx.$emit('update:isSliderShow', false))),
      class: "slider-images"
    }, [
      ($options.imagesMoreOne)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
            key: 0,
            class: "slider-images__button",
            onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => (_ctx.swiperPrev && _ctx.swiperPrev(...args)), ["stop"]))
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
              src: _ctx.$store.state.app.settings_slider_icon_left,
              alt: ""
            }, null, 8 /* PROPS */, _hoisted_2)
          ]))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.images, (image, index) => {
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
              key: index,
              class: "swiper-slide"
            }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
                onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"])),
                class: "slider-images__image",
                src: image.path,
                alt: image.name
              }, null, 8 /* PROPS */, _hoisted_5)
            ]))
          }), 128 /* KEYED_FRAGMENT */))
        ])
      ], 512 /* NEED_PATCH */),
      ($options.imagesMoreOne)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
            key: 1,
            class: "slider-images__button",
            onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => (_ctx.swiperNext && _ctx.swiperNext(...args)), ["stop"]))
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
              src: _ctx.$store.state.app.settings_slider_icon_right,
              alt: ""
            }, null, 8 /* PROPS */, _hoisted_6)
          ]))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[3] || (_cache[3] = $event => (_ctx.$emit('update:isSliderShow', false))),
        class: "close-button"
      }, [..._hoisted_9])
    ], 512 /* NEED_PATCH */), [
      [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.isSliderShow]
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/ProductReview.vue?vue&type=template&id=075919a7&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/ProductReview.vue?vue&type=template&id=075919a7&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-075919a7"),n=n(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),n)
const _hoisted_1 = { class: "product-review" }
const _hoisted_2 = { class: "product-review__rate" }
const _hoisted_3 = ["src"]
const _hoisted_4 = ["src"]
const _hoisted_5 = { class: "product-review__title" }
const _hoisted_6 = ["innerHTML"]
const _hoisted_7 = { class: "product-review-chosen-files" }
const _hoisted_8 = ["onClick"]
const _hoisted_9 = ["src", "alt"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Library = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Library")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.rate, (rate, index) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
            key: index,
            src: _ctx.$store.state.app.settings_light_start,
            alt: ""
          }, null, 8 /* PROPS */, _hoisted_3))
        }), 128 /* KEYED_FRAGMENT */)),
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.inRate, (inRate, index) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
            key: index,
            src: _ctx.$store.state.app.settings_dark_start,
            alt: ""
          }, null, 8 /* PROPS */, _hoisted_4))
        }), 128 /* KEYED_FRAGMENT */))
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1 /* TEXT */),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: "product-review__content",
        innerHTML: $props.content
      }, null, 8 /* PROPS */, _hoisted_6),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.images, (image, index) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            key: index,
            class: "product-review-chosen-files-file"
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
              onClick: $event => ($data.selectedImage = image, $data.isSliderShow = true)
            }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
                class: "product-review-chosen-files-file__image",
                src: image.path,
                alt: image.name
              }, null, 8 /* PROPS */, _hoisted_9)
            ], 8 /* PROPS */, _hoisted_8)
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Library, {
      images: $props.images,
      isSliderShow: $data.isSliderShow,
      "onUpdate:isSliderShow": _cache[0] || (_cache[0] = $event => (($data.isSliderShow) = $event))
    }, null, 8 /* PROPS */, ["images", "isSliderShow"]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"slider-images-box\">\n        <div @click=\"isSliderShow = false\" v-show=\"isSliderShow\" class=\"slider-images\">\n            <button v-if=\"imagesMoreOne\" class=\"slider-images__button\" @click.stop=\"swiperPrev\">\n                <img :src=\"$store.state.app.settings_slider_icon_left\" alt=\"\">\n            </button>\n            <div ref=\"swiper-container\" class=\"swiper-container\">\n                <div class=\"swiper-wrapper\">\n                    <div v-for=\"(image, index) in images\" :key=\"index\" class=\"swiper-slide\">\n                        <img @click.stop class=\"slider-images__image\" :src=\"image.path\" :alt=\"image.name\">\n                    </div>\n                </div>\n            </div>\n            <button v-if=\"imagesMoreOne\" class=\"slider-images__button \" @click.stop=\"swiperNext\">\n                <img :src=\"$store.state.app.settings_slider_icon_right\" alt=\"\">\n            </button>\n            <button @click=\"isSliderShow = false\" class=\"close-button\">\n                <div class=\"close-button__line close-button__line_1\"></div>\n                <div class=\"close-button__line close-button__line_2\"></div>\n            </button>\n        </div>\n    </div> ")
  ], 64 /* STABLE_FRAGMENT */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/first-section.vue?vue&type=template&id=3d8c8dc0&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/first-section.vue?vue&type=template&id=3d8c8dc0&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-3d8c8dc0"),n=n(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),n)
const _hoisted_1 = { class: "first-section" }
const _hoisted_2 = { class: "first-section-container container" }
const _hoisted_3 = { class: "first-section-left" }
const _hoisted_4 = ["src"]
const _hoisted_5 = { class: "first-section-description" }
const _hoisted_6 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "line first-section-description__line" }, null, -1 /* HOISTED */))
const _hoisted_7 = { class: "first-section-description__title" }
const _hoisted_8 = { class: "first-section-description__rates-brand" }
const _hoisted_9 = { class: "product-description-rate" }
const _hoisted_10 = ["src"]
const _hoisted_11 = ["src"]
const _hoisted_12 = { class: "first-section-description__brand" }
const _hoisted_13 = { class: "first-section-description__price-box" }
const _hoisted_14 = {
  key: 0,
  class: "first-section-description__sale-price"
}
const _hoisted_15 = { class: "diginties first-section-description-diginties" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Diginity = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Diginity")
  const _component_basket_add_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("basket-add-button")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          class: "first-section-left__image",
          src: $props.product.images[0].src,
          alt: "product-image"
        }, null, 8 /* PROPS */, _hoisted_4)
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
        _hoisted_6,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.product.name), 1 /* TEXT */),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.rate, (rate, index) => {
              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
                key: index,
                src: _ctx.$store.state.app.settings_light_start,
                alt: ""
              }, null, 8 /* PROPS */, _hoisted_10))
            }), 128 /* KEYED_FRAGMENT */)),
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.inRate, (inRate, index) => {
              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
                key: index,
                src: _ctx.$store.state.app.settings_dark_start,
                alt: ""
              }, null, 8 /* PROPS */, _hoisted_11))
            }), 128 /* KEYED_FRAGMENT */))
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_12, "Бренда: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.product.cfs.brand), 1 /* TEXT */)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [
          ($props.product.sale_price)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.product.sale_price) + " ₽ ", 1 /* TEXT */))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["first-section-description__price", { 'first-section-description__price_has-sale': $props.product.sale_price }])
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.product.regular_price) + " ₽ ", 3 /* TEXT, CLASS */)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [
          ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.product.cfs.diginities, (diginity, index) => {
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Diginity, {
              key: index,
              class: "first-section-description-diginties__item",
              lineWidth: 100,
              title: diginity.title,
              text: diginity.text
            }, null, 8 /* PROPS */, ["title", "text"]))
          }), 128 /* KEYED_FRAGMENT */))
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_basket_add_button, {
          onProductAdd: $options.productAdd,
          text: 'Добавить',
          productId: $props.product.id
        }, null, 8 /* PROPS */, ["onProductAdd", "productId"])
      ])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/second-section.vue?vue&type=template&id=a9dfdd38&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/second-section.vue?vue&type=template&id=a9dfdd38&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-a9dfdd38"),n=n(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),n)
const _hoisted_1 = { class: "second-section" }
const _hoisted_2 = { class: "second-section-container container" }
const _hoisted_3 = { class: "second-section-description" }
const _hoisted_4 = { class: "second-section__title" }
const _hoisted_5 = { class: "second-section-grid" }
const _hoisted_6 = { class: "second-section-left" }
const _hoisted_7 = {
  key: 2,
  class: "second-section-left__no-reviews"
}
const _hoisted_8 = { class: "second-section-right" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_product_prop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("product-prop")
  const _component_props_slider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("props-slider")
  const _component_ProductReview = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ProductReview")
  const _component_product_review_box = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("product-review-box")
  const _component_my_menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("my-menu")
  const _component_QuestionBox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("QuestionBox")
  const _component_AddReviewDialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AddReviewDialog")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.currentVisibleMenu.label), 1 /* TEXT */),
          ($data.currentVisibleMenu.value === 'reviews')
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
                key: 0,
                onClick: _cache[0] || (_cache[0] = $event => ($data.isAddReviewDialogShow = !$data.isAddReviewDialogShow)),
                class: "button button_around second-section__button"
              }, "Добавить отзыв"))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
            ($data.currentVisibleMenu.value === 'props')
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_props_slider, {
                  key: 0,
                  isShow: $data.isShowProps,
                  "onUpdate:isShow": _cache[1] || (_cache[1] = () => { $data.propsHeight = '100%'; $data.isShowProps = !$data.isShowProps }),
                  height: $data.propsHeight,
                  class: "second-section-left-props"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.productProperties, (prop, index) => {
                      return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_product_prop, {
                        key: index,
                        class: "second-sections-left-props__item",
                        title: prop.key,
                        text: prop.value
                      }, null, 8 /* PROPS */, ["title", "text"]))
                    }), 128 /* KEYED_FRAGMENT */))
                  ]),
                  _: 1 /* STABLE */
                }, 8 /* PROPS */, ["isShow", "height"]))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
            ($data.productReviews.length > 0 && $data.currentVisibleMenu.value === 'reviews')
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_product_review_box, {
                  key: 1,
                  onPaginate: _cache[2] || (_cache[2] = $event => ($data.reviewsPage += 1))
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.productReviews, (productReview) => {
                      return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ProductReview, {
                        title: productReview.title,
                        images: productReview.images,
                        content: productReview.review,
                        key: "productReview.id",
                        rate: productReview.rating
                      }, null, 8 /* PROPS */, ["title", "images", "content", "rate"]))
                    }), 128 /* KEYED_FRAGMENT */))
                  ]),
                  _: 1 /* STABLE */
                }))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
            ($data.productReviews.length == 0 && $data.currentVisibleMenu.value === 'reviews')
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_7, " > Отзывов нет, будь первым "))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_my_menu, {
              buttons: $data.buttonsInMenu,
              currentValue: $data.currentVisibleMenu,
              "onUpdate:currentValue": _cache[3] || (_cache[3] = (newValue) => $data.currentVisibleMenu = newValue)
            }, null, 8 /* PROPS */, ["buttons", "currentValue"]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_QuestionBox, { onAction: $options.jivoOpen }, null, 8 /* PROPS */, ["onAction"])
          ])
        ])
      ])
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AddReviewDialog, {
      review: $data.review,
      "onUpdate:review": _cache[4] || (_cache[4] = $event => (($data.review) = $event)),
      "onUpdate:isAddReviewDialogShow": _cache[5] || (_cache[5] = $event => ($data.isAddReviewDialogShow = $event)),
      isAddReviewDialogShow: $data.isAddReviewDialogShow
    }, null, 8 /* PROPS */, ["review", "isAddReviewDialogShow"])
  ], 64 /* STABLE_FRAGMENT */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/third-section.vue?vue&type=template&id=762d1157&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/third-section.vue?vue&type=template&id=762d1157&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-762d1157"),n=n(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),n)
const _hoisted_1 = { class: "third-section" }
const _hoisted_2 = { class: "third-section-container container" }
const _hoisted_3 = { class: "third-section-title-box" }
const _hoisted_4 = { class: "button button_around third-section-title-box__button" }
const _hoisted_5 = {
  key: 0,
  class: "third-section-alike-products"
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_header_box = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("header-box")
  const _component_Product = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Product")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_header_box, {
          class: "third-section-title-box__header",
          title: _ctx.$store.state.page.alike_products_title
        }, null, 8 /* PROPS */, ["title"]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$store.state.page.alike_products_button_text), 1 /* TEXT */)
      ]),
      ($data.isProductsLoaded)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.firstFourProducts, (product, index) => {
              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Product, {
                key: index,
                rate: Math.floor(Number(product.average_rating)),
                title: product.name,
                sale_price: product.sale_price,
                price: product.regular_price,
                productId: product.id,
                imageSrc: product.images[0].src
              }, null, 8 /* PROPS */, ["rate", "title", "sale_price", "price", "productId", "imageSrc"]))
            }), 128 /* KEYED_FRAGMENT */))
          ]))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/views/productPage.vue?vue&type=template&id=f3c89618&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/views/productPage.vue?vue&type=template&id=f3c89618&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-f3c89618"),n=n(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),n)
const _hoisted_1 = { key: 0 }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FirstSection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FirstSection")
  const _component_SecondSection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SecondSection")
  const _component_ThirdSection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ThirdSection")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [
    ($props.isDataLoaded && $data.isProductLoaded && $props.isAppLoaded)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", _hoisted_1, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FirstSection, {
            id: "first-section",
            rate: Math.floor(Number($data.product.average_rating)),
            product: $data.product
          }, null, 8 /* PROPS */, ["rate", "product"]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SecondSection, {
            productProperties: $data.product.cfs.props
          }, null, 8 /* PROPS */, ["productProperties"]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ThirdSection, {
            categories: $data.product.categories
          }, null, 8 /* PROPS */, ["categories"])
        ]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
  ]))
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/AddReviewDialog.vue?vue&type=style&index=0&id=378d4381&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/AddReviewDialog.vue?vue&type=style&index=0&id=378d4381&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./AddReviewDialog.vue?vue&type=style&index=0&id=378d4381&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/AddReviewDialog.vue?vue&type=style&index=0&id=378d4381&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("5d271870", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Diginity.vue?vue&type=style&index=0&id=7692eed7&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Diginity.vue?vue&type=style&index=0&id=7692eed7&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Diginity.vue?vue&type=style&index=0&id=7692eed7&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Diginity.vue?vue&type=style&index=0&id=7692eed7&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("66e733ad", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Library.vue?vue&type=style&index=0&id=7186813b&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Library.vue?vue&type=style&index=0&id=7186813b&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Library.vue?vue&type=style&index=0&id=7186813b&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/Library.vue?vue&type=style&index=0&id=7186813b&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("10e21664", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/ProductReview.vue?vue&type=style&index=0&id=075919a7&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/ProductReview.vue?vue&type=style&index=0&id=075919a7&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./ProductReview.vue?vue&type=style&index=0&id=075919a7&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/ProductReview.vue?vue&type=style&index=0&id=075919a7&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("16c98833", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/ProductReview.vue?vue&type=style&index=1&id=075919a7&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/ProductReview.vue?vue&type=style&index=1&id=075919a7&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./ProductReview.vue?vue&type=style&index=1&id=075919a7&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/components/ProductReview.vue?vue&type=style&index=1&id=075919a7&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("7e8ac472", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/first-section.vue?vue&type=style&index=0&id=3d8c8dc0&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/first-section.vue?vue&type=style&index=0&id=3d8c8dc0&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./first-section.vue?vue&type=style&index=0&id=3d8c8dc0&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/first-section.vue?vue&type=style&index=0&id=3d8c8dc0&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("c26b7aa6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/second-section.vue?vue&type=style&index=0&id=a9dfdd38&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/second-section.vue?vue&type=style&index=0&id=a9dfdd38&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./second-section.vue?vue&type=style&index=0&id=a9dfdd38&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/second-section.vue?vue&type=style&index=0&id=a9dfdd38&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("2fa92f55", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/third-section.vue?vue&type=style&index=0&id=762d1157&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/third-section.vue?vue&type=style&index=0&id=762d1157&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./third-section.vue?vue&type=style&index=0&id=762d1157&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/sections/product/third-section.vue?vue&type=style&index=0&id=762d1157&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("5995031d", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/views/productPage.vue?vue&type=style&index=0&id=f3c89618&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/views/productPage.vue?vue&type=style&index=0&id=f3c89618&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./productPage.vue?vue&type=style&index=0&id=f3c89618&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./src/views/productPage.vue?vue&type=style&index=0&id=f3c89618&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("0b3ae524", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/mixins/swiper.js":
/*!******************************!*\
  !*** ./src/mixins/swiper.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    data() {
        return {
            swiper: {},
        }
    },
    methods: {
        swiperPrev() {
            this.swiper.slidePrev();
        },
        swiperNext() {
            this.swiper.slideNext();
        }
    }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sbUlBQW1JLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUss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Q0FBQyxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakI7SUFDSixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ1o7SUFDSixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRXhDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRXBDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLHdEQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUUvQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNsQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0M7UUFDSixDQUFDO1FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRWpELENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM3QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvRDtZQUNBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM5QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUQ7UUFDSixDQUFDO0lBQ0w7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGZ0Y7QUFDdEI7QUFDTDs7QUFFdEQsQ0FBZ0Y7O0FBRUE7QUFDaEYsaUNBQWlDLHlGQUFlLENBQUMsNkVBQU0sYUFBYSwyRkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDZGYsaUVBQWU7SUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2Y7SUFDSixDQUFDO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QitFO0FBQ3RCO0FBQ0w7O0FBRXJELENBQStFOztBQUVDO0FBQ2hGLGlDQUFpQyx5RkFBZSxDQUFDLDRFQUFNLGFBQWEsMEZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ3NCO0FBQ1Q7QUFDNUIsaUVBQWU7SUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsc0RBQU0sQ0FBQztJQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNOLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDVixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDL0I7SUFDSixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDO1FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNKLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakI7SUFDSixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDTixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsOENBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDVixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUM7UUFDTjtJQUNKO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURxRjtBQUN0QjtBQUNMOztBQUUzRCxDQUFxRjtBQUNaOztBQUVPO0FBQ2hGLGlDQUFpQyx5RkFBZSxDQUFDLGtGQUFNLGFBQWEsZ0dBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNnQmtCO0FBQ0k7QUFDVDtBQUNROzs7O0FBSXBDLGlFQUFlO0lBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLG9EQUFJLEVBQUUsc0RBQU0sQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDO0lBQ0wsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNWLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQy9CO0lBQ0osQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFHLENBQUM7UUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixDQUFDO1FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNKLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDcEI7SUFDSixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1REFBQztBQUMxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FcUY7QUFDdEI7QUFDTDs7QUFFM0QsQ0FBcUY7O0FBRUY7QUFDbkYsaUNBQWlDLHlGQUFlLENBQUMsa0ZBQU0sYUFBYSxnR0FBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNZa0M7QUFDaEI7O0FBRWpDLGlFQUFlO0lBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLG9EQUFJLENBQUM7SUFDZCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2QsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNuRztZQUNBLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdEc7WUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3RHO0lBQ0osQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtRUFBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOztJQUVWO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RHNGO0FBQ3RCO0FBQ0w7O0FBRTVELENBQXNGOztBQUVIO0FBQ25GLGlDQUFpQyx5RkFBZSxDQUFDLG1GQUFNLGFBQWEsaUdBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNrQmdEO0FBQ0o7QUFDSjtBQUNuQjs7QUFFcEMsaUVBQWU7SUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRztRQUNKLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQjtJQUNKLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDaEUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNYLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDNUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDbEQsQ0FBQztZQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZDtJQUNKLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNOLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNMLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDO0lBQ0osQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1RUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHlFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDBFQUFDLENBQUM7SUFDM0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsd0RBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzdDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ0osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQy9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QjtZQUNKLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNSLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QztJQUNKLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQjs7QUFFSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHcUY7QUFDdEI7QUFDTDs7QUFFM0QsQ0FBcUY7O0FBRUY7QUFDbkYsaUNBQWlDLHlGQUFlLENBQUMsa0ZBQU0sYUFBYSxnR0FBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGdEO0FBQ2hCO0FBQ1g7OztBQUdwQyxpRUFBZTtJQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pCO0lBQ0osQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEM7SUFDSixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDTixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDO0lBQ0osQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsMEVBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2pCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOztZQUV6RCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSx3REFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDTixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQztZQUNKLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDN0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztZQUNMLENBQUM7WUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQzFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNUO1FBQ0o7O1FBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUU1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRW1GO0FBQ3RCO0FBQ0w7O0FBRXpELENBQW1GOztBQUVIO0FBQ2hGLGlDQUFpQyx5RkFBZSxDQUFDLGdGQUFNLGFBQWEsOEZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JXO0FBQ1M7QUFDNkI7QUFDRjtBQUNJO0FBQ0Y7QUFDaEUsaUVBQWU7SUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDVixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDO1FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDVCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEI7SUFDSixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekI7SUFDSixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDTixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUNELENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFakgsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixDQUFDLEVBQUU7SUFDUCxDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxnREFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUVyQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFdEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pEO0lBQ0osQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QztJQUNKLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDZixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUUzQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsdUVBQWtCLENBQUM7Z0JBQ3BDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUVSLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRTNCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDOztRQUU5QjtJQUNKLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQywrRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdGQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDhFQUFDO0FBQzVELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVpSjs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FHOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBRDs7Ozs7Ozs7Ozs7Ozs7OztBQ0FMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJ0QkNy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M0YsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUU7Ozs7Ozs7Ozs7QUNYZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQywybEJBQStTO0FBQ3JVO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnS0FBaUY7QUFDM0YsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUU7Ozs7Ozs7Ozs7QUNYZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxna0JBQWlTO0FBQ3ZUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw2SkFBOEU7QUFDeEYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQ1hmLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0FkZFJldmlld0RpYWxvZy52dWU/MDg5OSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9EaWdpbml0eS52dWU/ZjkwMCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9MaWJyYXJ5LnZ1ZT8yOWIzIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RSZXZpZXcudnVlP2Q0OWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdFJldmlldy52dWU/NWY2MiIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMvcHJvZHVjdC9maXJzdC1zZWN0aW9uLnZ1ZT80OWM3Iiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9wcm9kdWN0L3NlY29uZC1zZWN0aW9uLnZ1ZT8zOWEwIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9wcm9kdWN0L3RoaXJkLXNlY3Rpb24udnVlPzk4OGUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3ZpZXdzL3Byb2R1Y3RQYWdlLnZ1ZT9lZTAzIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0FkZFJldmlld0RpYWxvZy52dWU/MjJiNyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9BZGRSZXZpZXdEaWFsb2cudnVlIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0RpZ2luaXR5LnZ1ZT9kMWUwIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0RpZ2luaXR5LnZ1ZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9MaWJyYXJ5LnZ1ZT84YTE5Iiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0xpYnJhcnkudnVlIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RSZXZpZXcudnVlPzY3MGUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdFJldmlldy52dWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL3Byb2R1Y3QvZmlyc3Qtc2VjdGlvbi52dWU/YmI4OCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMvcHJvZHVjdC9maXJzdC1zZWN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMvcHJvZHVjdC9zZWNvbmQtc2VjdGlvbi52dWU/YjU0YiIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMvcHJvZHVjdC9zZWNvbmQtc2VjdGlvbi52dWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL3Byb2R1Y3QvdGhpcmQtc2VjdGlvbi52dWU/NjE2OCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMvcHJvZHVjdC90aGlyZC1zZWN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3MvcHJvZHVjdFBhZ2UudnVlP2MxZjEiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3ZpZXdzL3Byb2R1Y3RQYWdlLnZ1ZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9BZGRSZXZpZXdEaWFsb2cudnVlPzVhYzkiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvRGlnaW5pdHkudnVlPzc3OWYiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvTGlicmFyeS52dWU/ZDU1ZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UmV2aWV3LnZ1ZT9mM2EwIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9wcm9kdWN0L2ZpcnN0LXNlY3Rpb24udnVlPzliZTEiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL3Byb2R1Y3Qvc2Vjb25kLXNlY3Rpb24udnVlPzk3MWMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL3Byb2R1Y3QvdGhpcmQtc2VjdGlvbi52dWU/NzhmNiIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3MvcHJvZHVjdFBhZ2UudnVlP2VkNzYiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvQWRkUmV2aWV3RGlhbG9nLnZ1ZT9mNjZlIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0RpZ2luaXR5LnZ1ZT8xYzdmIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0xpYnJhcnkudnVlP2YzYmEiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdFJldmlldy52dWU/MzQ5YyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UmV2aWV3LnZ1ZT80YjQyIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9wcm9kdWN0L2ZpcnN0LXNlY3Rpb24udnVlPzQ3ZWMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL3Byb2R1Y3Qvc2Vjb25kLXNlY3Rpb24udnVlPzBhOTkiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL3Byb2R1Y3QvdGhpcmQtc2VjdGlvbi52dWU/YTVjMyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3MvcHJvZHVjdFBhZ2UudnVlPzI2YjciLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL21peGlucy9zd2lwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5lbmFibGVkW2RhdGEtdi0zNzhkNDM4MV0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG4ucHJlbG9hZGVyLWVudGVyLWFjdGl2ZVtkYXRhLXYtMzc4ZDQzODFdLFxuLnByZWxvYWRlci1sZWF2ZS1hY3RpdmVbZGF0YS12LTM3OGQ0MzgxXSB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xufVxuLnByZWxvYWRlci1lbnRlci1mcm9tW2RhdGEtdi0zNzhkNDM4MV0sXG4ucHJlbG9hZGVyLWxlYXZlLXRvW2RhdGEtdi0zNzhkNDM4MV0ge1xuICBvcGFjaXR5OiAwO1xufVxuLnBsZWxvYWRlci1ib3hbZGF0YS12LTM3OGQ0MzgxXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzRDk5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wbGVsb2FkZXItYm94X19pbWFnZVtkYXRhLXYtMzc4ZDQzODFdIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuLmFkZC1yZXZpZXctZGlhbG9nLWJhY2tkcm9wW2RhdGEtdi0zNzhkNDM4MV0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5hZGQtcmV2aWV3LWRpYWxvZ1tkYXRhLXYtMzc4ZDQzODFdIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDYwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgei1pbmRleDogMTA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMzBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuLmFkZC1yZXZpZXctZGlhbG9nW2RhdGEtdi0zNzhkNDM4MV0ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxufVxuLmFkZC1yZXZpZXctZGlhbG9nX190aXRsZVtkYXRhLXYtMzc4ZDQzODFdIHtcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5O1xufVxuLmFkZC1yZXZpZXctZGlhbG9nX190ZXh0YXJlYVtkYXRhLXYtMzc4ZDQzODFdIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi5hZGQtcmV2aWV3LWRpYWxvZ19faW1hZ2VbZGF0YS12LTM3OGQ0MzgxXSB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9BZGRSZXZpZXdEaWFsb2cudnVlXCIsXCJ3ZWJwYWNrOi8vLi9BZGRSZXZpZXdEaWFsb2cudnVlXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSx3QkFBQTtBQ0RKO0FER0E7O0VBRUksNkJBQUE7QUNBSjtBREdBOztFQUVJLFVBQUE7QUNBSjtBREtBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EseUJFckJXO0VGc0JYLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNGSjtBRElJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNGUjtBRE1BO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSw4QkFBQTtBQ0hKO0FETUE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNISjtBREtJO0FBZko7SUFnQlEsV0FBQTtBQ0ZOO0FBQ0Y7QURJSTtFQUNJLDJCQUFBO0FDRlI7QURNSTtFQUNJLGFBQUE7QUNKUjtBRFVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNSUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG4uZW5hYmxlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG4ucHJlbG9hZGVyLWVudGVyLWFjdGl2ZSxcXG4ucHJlbG9hZGVyLWxlYXZlLWFjdGl2ZSB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xcbn1cXG5cXG4ucHJlbG9hZGVyLWVudGVyLWZyb20sXFxuLnByZWxvYWRlci1sZWF2ZS10byB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbkBpbXBvcnQgJ0AvdmFyaWFibGVzLnNjc3MnO1xcblxcbi5wbGVsb2FkZXItYm94IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAmX19pbWFnZSB7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB9XFxufVxcblxcbi5hZGQtcmV2aWV3LWRpYWxvZy1iYWNrZHJvcCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4uYWRkLXJldmlldy1kaWFsb2cge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMHB4O1xcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICZfX3RpdGxlIHtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcXG4gICAgfVxcblxcblxcbiAgICAmX190ZXh0YXJlYSB7XFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB9XFxuXFxuICAgICZfX2ZpbGUtaW5wdXQge31cXG5cXG4gICAgJl9fYnV0dG9uIHt9XFxuICAgICZfX2ltYWdlIHtcXG4gICAgICAgIHdpZHRoOiAzMHB4IDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgfVxcbn1cXG5cIixcIi5lbmFibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLnByZWxvYWRlci1lbnRlci1hY3RpdmUsXFxuLnByZWxvYWRlci1sZWF2ZS1hY3RpdmUge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2U7XFxufVxcblxcbi5wcmVsb2FkZXItZW50ZXItZnJvbSxcXG4ucHJlbG9hZGVyLWxlYXZlLXRvIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5wbGVsb2FkZXItYm94IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDNEOTk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnBsZWxvYWRlci1ib3hfX2ltYWdlIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5hZGQtcmV2aWV3LWRpYWxvZy1iYWNrZHJvcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4uYWRkLXJldmlldy1kaWFsb2cge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogNjAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxuICB6LWluZGV4OiAxMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMzBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuYWRkLXJldmlldy1kaWFsb2cge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuLmFkZC1yZXZpZXctZGlhbG9nX190aXRsZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXk7XFxufVxcbi5hZGQtcmV2aWV3LWRpYWxvZ19fdGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuLmFkZC1yZXZpZXctZGlhbG9nX19pbWFnZSB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XCIsXCIkcHJpbWFyeS1jb2xvcjogIzAwNThEQztcXG4kYmFja2dyb3VuZC1jb2xvcjogI0YxRjVGRjtcXG4kYWNjZW50LWNvbG9yOiAjMDAzRDk5O1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmRpZ2luaXR5W2RhdGEtdi03NjkyZWVkN10ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG4uZGlnaW5pdHlfX3RpdGxlW2RhdGEtdi03NjkyZWVkN10ge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmRpZ2luaXR5X190ZXh0W2RhdGEtdi03NjkyZWVkN10ge1xuICBjb2xvcjogIzEyMTIxMjtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvRGlnaW5pdHkudnVlXCIsXCJ3ZWJwYWNrOi8vLi9EaWdpbml0eS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDQUo7QURFSTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0FSO0FER0k7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRFJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmRpZ2luaXR5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMnB4O1xcblxcbiAgICAmX190aXRsZSB7XFxuICAgICAgICBjb2xvcjogIzAwMDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB9XFxuXFxuICAgICZfX3RleHQge1xcbiAgICAgICAgY29sb3I6ICMxMjEyMTI7XFxuICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICB9XFxufVxcblxcbi5saW5lIHt9XFxuXCIsXCIuZGlnaW5pdHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxufVxcbi5kaWdpbml0eV9fdGl0bGUge1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLmRpZ2luaXR5X190ZXh0IHtcXG4gIGNvbG9yOiAjMTIxMjEyO1xcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3dpcGVyLWNvbnRhaW5lcltkYXRhLXYtNzE4NjgxM2JdIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2xpZGVyLWltYWdlc1tkYXRhLXYtNzE4NjgxM2JdIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNTBweCA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLnNsaWRlci1pbWFnZXNfX2ltYWdlW2RhdGEtdi03MTg2ODEzYl0ge1xuICBoZWlnaHQ6IDgwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLnNsaWRlci1pbWFnZXNfX2J1dHRvbltkYXRhLXYtNzE4NjgxM2JdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5zbGlkZXItaW1hZ2VzX19idXR0b25bZGF0YS12LTcxODY4MTNiXTo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb250ZW50OiBcIlwiO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvTGlicmFyeS52dWVcIixcIndlYnBhY2s6Ly8uL0xpYnJhcnkudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FEV0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQ0FBQTtBQ1JKO0FEVUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDUlI7QURXSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1RSO0FEV1E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ1RaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcblxcbi5zd2lwZXItY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zd2lwZXItd3JhcHBlciB7XFxuICAgIC8vIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc3dpcGVyLXNsaWRlIHt9XFxuXFxuLnNsaWRlci1pbWFnZXMge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiA1MHB4IDgwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjYpO1xcblxcbiAgICAmX19pbWFnZSB7XFxuICAgICAgICBoZWlnaHQ6IDgwdmg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgIH1cXG5cXG4gICAgJl9fYnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG5cXG4gICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgICAgICAgei1pbmRleDogLTE7XFxuICAgICAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cIixcIi5zd2lwZXItY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zbGlkZXItaW1hZ2VzIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiA1MHB4IDgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG4uc2xpZGVyLWltYWdlc19faW1hZ2Uge1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG4uc2xpZGVyLWltYWdlc19fYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuLnNsaWRlci1pbWFnZXNfX2J1dHRvbjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNsb3NlLWJ1dHRvbltkYXRhLXYtMDc1OTE5YTddIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwcHg7XG4gIHJpZ2h0OiA4MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuLmNsb3NlLWJ1dHRvbl9fbGluZVtkYXRhLXYtMDc1OTE5YTddIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmNsb3NlLWJ1dHRvbl9fbGluZV8xW2RhdGEtdi0wNzU5MTlhN10ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uY2xvc2UtYnV0dG9uX19saW5lXzJbZGF0YS12LTA3NTkxOWE3XSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uc3dpcGVyLWNvbnRhaW5lcltkYXRhLXYtMDc1OTE5YTddIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2xpZGVyLWltYWdlc1tkYXRhLXYtMDc1OTE5YTddIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNTBweCA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLnNsaWRlci1pbWFnZXNfX2ltYWdlW2RhdGEtdi0wNzU5MTlhN10ge1xuICBoZWlnaHQ6IDgwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLnNsaWRlci1pbWFnZXNfX2J1dHRvbltkYXRhLXYtMDc1OTE5YTddIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5zbGlkZXItaW1hZ2VzX19idXR0b25bZGF0YS12LTA3NTkxOWE3XTo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb250ZW50OiBcIlwiO1xufVxuLnByb2R1Y3QtcmV2aWV3LWNob3Nlbi1maWxlc1tkYXRhLXYtMDc1OTE5YTddIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAyMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMTAwcHgpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgMTAwcHgpO1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9kdWN0LXJldmlldy1jaG9zZW4tZmlsZXMtZmlsZVtkYXRhLXYtMDc1OTE5YTddIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJvZHVjdC1yZXZpZXctY2hvc2VuLWZpbGVzLWZpbGVfX2ltYWdlW2RhdGEtdi0wNzU5MTlhN10ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucHJvZHVjdC1yZXZpZXdbZGF0YS12LTA3NTkxOWE3XSB7XG4gIHBhZGRpbmc6IDIwcHggNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5wcm9kdWN0LXJldmlld19fcmF0ZVtkYXRhLXYtMDc1OTE5YTddIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5wcm9kdWN0LXJldmlld19fY29udGVudFtkYXRhLXYtMDc1OTE5YTddIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5wcm9kdWN0LXJldmlld19fdGl0bGVbZGF0YS12LTA3NTkxOWE3XSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RSZXZpZXcudnVlXCIsXCJ3ZWJwYWNrOi8vLi9Qcm9kdWN0UmV2aWV3LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUo7QURFSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0FSO0FERVE7RUFDSSx3QkFBQTtBQ0FaO0FER1E7RUFDSSx5QkFBQTtBQ0RaO0FETUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSEo7QURZQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG9DQUFBO0FDVEo7QURXSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNUUjtBRFlJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDVlI7QURZUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDVlo7QURlQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsOENBQUE7RUFDQSwyQ0FBQTtFQUNBLFdBQUE7QUNaSjtBRGVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUVBLGdCQUFBO0FDYko7QURlSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2JSO0FEa0JBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDZko7QURpQkk7RUFDSSxtQkFBQTtBQ2ZSO0FEa0JJO0VBQ0ksbUJBQUE7QUNoQlI7QURtQkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2pCUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uY2xvc2UtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIHJpZ2h0OiA4MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcblxcbiAgICAmX19saW5lIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICB3aWR0aDogMnB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuXFxuICAgICAgICAmXzEge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICZfMiB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4uc3dpcGVyLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc3dpcGVyLXdyYXBwZXIge1xcbiAgICAvLyB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnN3aXBlci1zbGlkZSB7fVxcblxcbi5zbGlkZXItaW1hZ2VzIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogNTBweCA4MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC42KTtcXG5cXG4gICAgJl9faW1hZ2Uge1xcbiAgICAgICAgaGVpZ2h0OiA4MHZoO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgICB9XFxuXFxuICAgICZfX2J1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuXFxuICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICAgICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLnByb2R1Y3QtcmV2aWV3LWNob3Nlbi1maWxlcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDEwMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDEwMHB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9kdWN0LXJldmlldy1jaG9zZW4tZmlsZXMtZmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICAmX19pbWFnZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogODAlO1xcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIH1cXG59XFxuXFxuXFxuLnByb2R1Y3QtcmV2aWV3IHtcXG4gICAgcGFkZGluZzogMjBweCA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcblxcbiAgICAmX19yYXRlIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICB9XFxuXFxuICAgICZfX3RpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB9XFxufVxcblwiLFwiLmNsb3NlLWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwcHg7XFxuICByaWdodDogODBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbn1cXG4uY2xvc2UtYnV0dG9uX19saW5lIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcbi5jbG9zZS1idXR0b25fX2xpbmVfMSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcbi5jbG9zZS1idXR0b25fX2xpbmVfMiB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4uc3dpcGVyLWNvbnRhaW5lciB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc2xpZGVyLWltYWdlcyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogNTBweCA4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuLnNsaWRlci1pbWFnZXNfX2ltYWdlIHtcXG4gIGhlaWdodDogODB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuLnNsaWRlci1pbWFnZXNfX2J1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbi5zbGlkZXItaW1hZ2VzX19idXR0b246OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgei1pbmRleDogLTE7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4ucHJvZHVjdC1yZXZpZXctY2hvc2VuLWZpbGVzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDIwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMTAwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDEwMHB4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvZHVjdC1yZXZpZXctY2hvc2VuLWZpbGVzLWZpbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5wcm9kdWN0LXJldmlldy1jaG9zZW4tZmlsZXMtZmlsZV9faW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJvZHVjdC1yZXZpZXcge1xcbiAgcGFkZGluZzogMjBweCA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbi5wcm9kdWN0LXJldmlld19fcmF0ZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4ucHJvZHVjdC1yZXZpZXdfX2NvbnRlbnQge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLnByb2R1Y3QtcmV2aWV3X190aXRsZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucHJvZHVjdC1yZXZpZXctY29udGVudC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0UmV2aWV3LnZ1ZVwiLFwid2VicGFjazovLy4vUHJvZHVjdFJldmlldy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0FKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5wcm9kdWN0LXJldmlldy1jb250ZW50LXRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXCIsXCIucHJvZHVjdC1yZXZpZXctY29udGVudC10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZmlyc3Qtc2VjdGlvbi1kZXNjcmlwdGlvbl9fcHJpY2VbZGF0YS12LTNkOGM4ZGMwXSB7XG4gIGNvbG9yOiAjMDAzRDk5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICBmb250LXNpemU6IDIuOHJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmZpcnN0LXNlY3Rpb24tZGVzY3JpcHRpb25fX3ByaWNlX2hhcy1zYWxlW2RhdGEtdi0zZDhjOGRjMF0ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiBncmF5O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5maXJzdC1zZWN0aW9uLWRlc2NyaXB0aW9uX19wcmljZS1ib3hbZGF0YS12LTNkOGM4ZGMwXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLmZpcnN0LXNlY3Rpb24tZGVzY3JpcHRpb25fX3NhbGUtcHJpY2VbZGF0YS12LTNkOGM4ZGMwXSB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmZpcnN0LXNlY3Rpb25bZGF0YS12LTNkOGM4ZGMwXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmZpcnN0LXNlY3Rpb24tY29udGFpbmVyW2RhdGEtdi0zZDhjOGRjMF0ge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciA3ZnI7XG4gIGdhcDogMTQwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4uZmlyc3Qtc2VjdGlvbi1jb250YWluZXJbZGF0YS12LTNkOGM4ZGMwXSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG59XG59XG4uZmlyc3Qtc2VjdGlvbi1sZWZ0X19pbWFnZVtkYXRhLXYtM2Q4YzhkYzBdIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZmlyc3Qtc2VjdGlvbi1kZXNjcmlwdGlvbl9fbGluZVtkYXRhLXYtM2Q4YzhkYzBdIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgaGVpZ2h0OiA1cHg7XG59XG4uZmlyc3Qtc2VjdGlvbi1kZXNjcmlwdGlvbl9fdGl0bGVbZGF0YS12LTNkOGM4ZGMwXSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAxLjZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5maXJzdC1zZWN0aW9uLWRlc2NyaXB0aW9uX19yYXRlcy1icmFuZFtkYXRhLXYtM2Q4YzhkYzBdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLmZpcnN0LXNlY3Rpb24tZGVzY3JpcHRpb25fX2JyYW5kW2RhdGEtdi0zZDhjOGRjMF0ge1xuICBjb2xvcjogIzI5MkQzMjtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuLnByb2R1Y3QtZGVzY3JpcHRpb24tcmF0ZVtkYXRhLXYtM2Q4YzhkYzBdIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5maXJzdC1zZWN0aW9uLWRlc2NyaXB0aW9uLWRpZ2ludGllc1tkYXRhLXYtM2Q4YzhkYzBdIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICB3aWR0aDogNzUlO1xuICBnYXA6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbi5maXJzdC1zZWN0aW9uLWRlc2NyaXB0aW9uLWRpZ2ludGllc1tkYXRhLXYtM2Q4YzhkYzBdIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zZWN0aW9ucy9wcm9kdWN0L2ZpcnN0LXNlY3Rpb24udnVlXCIsXCJ3ZWJwYWNrOi8vLi9maXJzdC1zZWN0aW9uLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0RSO0FESVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUNGWjtBRE1JO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDSlI7QURPSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDTFI7QURVQTtFQUVJLHVCQUFBO0FDUko7QURXQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFNQSxVQUFBO0FDYko7QURTSTtBQU5KO0lBT1EsMEJBQUE7QUNOTjtBQUNGO0FEWUk7RUFDSSxXQUFBO0FDVFI7QURlSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ1pSO0FEZUk7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDYlI7QURnQkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNkUjtBRGlCSTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNmUjtBRHFCQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ25CSjtBRHNCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBT0EsbUJBQUE7QUN6Qko7QURvQkk7QUFOSjtJQU9RLDBCQUFBO0lBQ0EsV0FBQTtBQ2pCTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5maXJzdC1zZWN0aW9uLWRlc2NyaXB0aW9uIHtcXG4gICAgJl9fcHJpY2Uge1xcbiAgICAgICAgY29sb3I6ICMwMDNEOTk7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweDtcXG5cXG4gICAgICAgICZfaGFzLXNhbGUge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX3ByaWNlLWJveCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcXG4gICAgfVxcblxcbiAgICAmX19zYWxlLXByaWNlIHtcXG4gICAgICAgIGNvbG9yOiByZWQ7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgfVxcblxcbn1cXG5cXG4uZmlyc3Qtc2VjdGlvbiB7XFxuICAgIC8vIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZmlyc3Qtc2VjdGlvbi1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciA3ZnI7XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuXFxuICAgIGdhcDogMTQwcHg7XFxufVxcblxcbi5maXJzdC1zZWN0aW9uLWxlZnQge1xcbiAgICAmX19pbWFnZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIC8vIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbn1cXG5cXG4uZmlyc3Qtc2VjdGlvbi1kZXNjcmlwdGlvbiB7XFxuICAgICZfX2xpbmUge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgICAgIGhlaWdodDogNXB4O1xcbiAgICB9XFxuXFxuICAgICZfX3RpdGxlIHtcXG4gICAgICAgIGNvbG9yOiAjMDAwO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XFxuICAgICAgICBmb250LXNpemU6IDRyZW07XFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjZweDtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICB9XFxuXFxuICAgICZfX3JhdGVzLWJyYW5kIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgfVxcblxcbiAgICAmX19icmFuZCB7XFxuICAgICAgICBjb2xvcjogIzI5MkQzMjtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgIH1cXG5cXG4gICAgJl9fYnV0dG9uIHt9XFxufVxcblxcbi5wcm9kdWN0LWRlc2NyaXB0aW9uLXJhdGUge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmlyc3Qtc2VjdGlvbi1kZXNjcmlwdGlvbi1kaWdpbnRpZXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGdhcDogMzBweDtcXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxuXFxuICAgICZfX2l0ZW0ge31cXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgICZfYXJvdW5kIHt9XFxufVxcblwiLFwiLmZpcnN0LXNlY3Rpb24tZGVzY3JpcHRpb25fX3ByaWNlIHtcXG4gIGNvbG9yOiAjMDAzRDk5O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XFxuICBmb250LXNpemU6IDIuOHJlbTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLmZpcnN0LXNlY3Rpb24tZGVzY3JpcHRpb25fX3ByaWNlX2hhcy1zYWxlIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogZ3JheTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG4uZmlyc3Qtc2VjdGlvbi1kZXNjcmlwdGlvbl9fcHJpY2UtYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcbn1cXG4uZmlyc3Qtc2VjdGlvbi1kZXNjcmlwdGlvbl9fc2FsZS1wcmljZSB7XFxuICBjb2xvcjogcmVkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5maXJzdC1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZmlyc3Qtc2VjdGlvbi1jb250YWluZXIge1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgN2ZyO1xcbiAgZ2FwOiAxNDBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLmZpcnN0LXNlY3Rpb24tY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVxcblxcbi5maXJzdC1zZWN0aW9uLWxlZnRfX2ltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZmlyc3Qtc2VjdGlvbi1kZXNjcmlwdGlvbl9fbGluZSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxufVxcbi5maXJzdC1zZWN0aW9uLWRlc2NyaXB0aW9uX190aXRsZSB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBsZXR0ZXItc3BhY2luZzogMS42cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLmZpcnN0LXNlY3Rpb24tZGVzY3JpcHRpb25fX3JhdGVzLWJyYW5kIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuLmZpcnN0LXNlY3Rpb24tZGVzY3JpcHRpb25fX2JyYW5kIHtcXG4gIGNvbG9yOiAjMjkyRDMyO1xcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuLnByb2R1Y3QtZGVzY3JpcHRpb24tcmF0ZSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZpcnN0LXNlY3Rpb24tZGVzY3JpcHRpb24tZGlnaW50aWVzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB3aWR0aDogNzUlO1xcbiAgZ2FwOiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuZmlyc3Qtc2VjdGlvbi1kZXNjcmlwdGlvbi1kaWdpbnRpZXMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNlY29uZC1zZWN0aW9uLWRlc2NyaXB0aW9uW2RhdGEtdi1hOWRmZGQzOF0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG4uc2Vjb25kLXNlY3Rpb25bZGF0YS12LWE5ZGZkZDM4XSB7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuLnNlY29uZC1zZWN0aW9uX190aXRsZVtkYXRhLXYtYTlkZmRkMzhdIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNjZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5zZWNvbmQtc2VjdGlvbi1ncmlkW2RhdGEtdi1hOWRmZGQzOF0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAyZnI7XG4gIGdhcDogNjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuLnNlY29uZC1zZWN0aW9uLWdyaWRbZGF0YS12LWE5ZGZkZDM4XSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG59XG59XG4uc2Vjb25kLXNlY3Rpb24tbGVmdF9fbm8tcmV2aWV3c1tkYXRhLXYtYTlkZmRkMzhdIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNjZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5zZWNvbmQtc2VjdGlvbi1sZWZ0LXByb3BzW2RhdGEtdi1hOWRmZGQzOF0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI1cHg7XG59XG4uc2Vjb25kLXNlY3Rpb24tcmlnaHRbZGF0YS12LWE5ZGZkZDM4XSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMzBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zZWN0aW9ucy9wcm9kdWN0L3NlY29uZC1zZWN0aW9uLnZ1ZVwiLFwid2VicGFjazovLy4vc2Vjb25kLXNlY3Rpb24udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDQUo7QURFQTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ0NSO0FER0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFJQSxTQUFBO0FDSEo7QURBSTtBQUhKO0lBSVEsMEJBQUE7QUNHTjtBQUNGO0FERUk7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ0NSO0FER0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDQUo7QURHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNBSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uc2Vjb25kLXNlY3Rpb24tZGVzY3JpcHRpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcXG59XFxuLnNlY29uZC1zZWN0aW9uIHtcXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxuXFxuICAgICZfX3RpdGxlIHtcXG4gICAgICAgIGNvbG9yOiAjMDAwO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XFxuICAgICAgICBmb250LXNpemU6IDIycHg7XFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjY2cHg7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB9XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMmZyO1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuICAgIGdhcDogNjBweDtcXG59XFxuXFxuLnNlY29uZC1zZWN0aW9uLWxlZnQge1xcbiAgICAmX19uby1yZXZpZXdze1xcbiAgICAgICAgY29sb3I6ICMwMDA7XFxuICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNjZweDtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIH1cXG59XFxuXFxuLnNlY29uZC1zZWN0aW9uLWxlZnQtcHJvcHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG59XFxuXCIsXCIuc2Vjb25kLXNlY3Rpb24tZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDQwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24ge1xcbiAgcGFkZGluZy10b3A6IDgwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXG59XFxuLnNlY29uZC1zZWN0aW9uX190aXRsZSB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBsZXR0ZXItc3BhY2luZzogMC42NnB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLnNlY29uZC1zZWN0aW9uLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDJmcjtcXG4gIGdhcDogNjBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuc2Vjb25kLXNlY3Rpb24tZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGVmdF9fbm8tcmV2aWV3cyB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBsZXR0ZXItc3BhY2luZzogMC42NnB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLnNlY29uZC1zZWN0aW9uLWxlZnQtcHJvcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDI1cHg7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMzBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudGhpcmQtc2VjdGlvbltkYXRhLXYtNzYyZDExNTddIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG4udGhpcmQtc2VjdGlvbi1jb250YWluZXJbZGF0YS12LTc2MmQxMTU3XSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNjVweDtcbn1cbi50aGlyZC1zZWN0aW9uLXRpdGxlLWJveFtkYXRhLXYtNzYyZDExNTddIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWF4LWNvbnRlbnQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcbi50aGlyZC1zZWN0aW9uLXRpdGxlLWJveFtkYXRhLXYtNzYyZDExNTddIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDYwcHg7XG59XG59XG4udGhpcmQtc2VjdGlvbi1hbGlrZS1wcm9kdWN0c1tkYXRhLXYtNzYyZDExNTddIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyODVweCwgMWZyKSk7XG4gIGdhcDogMjBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zZWN0aW9ucy9wcm9kdWN0L3RoaXJkLXNlY3Rpb24udnVlXCIsXCJ3ZWJwYWNrOi8vLi90aGlyZC1zZWN0aW9uLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUNBSjtBREdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ0FKO0FER0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQ0FKO0FERUk7QUFMSjtJQU1RLDBCQUFBO0lBQ0EsU0FBQTtBQ0NOO0FBQ0Y7QURPQTtFQUNJLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7QUNMSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4udGhpcmQtc2VjdGlvbiB7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcbn1cXG5cXG4udGhpcmQtc2VjdGlvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDY1cHg7XFxufVxcblxcbi50aGlyZC1zZWN0aW9uLXRpdGxlLWJveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1heC1jb250ZW50O1xcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHggKSB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGdhcDogNjBweDtcXG4gICAgfVxcbiAgICAmX19idXR0b24ge31cXG4gICAgJl9faGVhZGVyIHtcXG4gICAgICAgIFxcbiAgICAgICAgLy8gd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICB9XFxufVxcblxcbi50aGlyZC1zZWN0aW9uLWFsaWtlLXByb2R1Y3RzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyODVweCwgMWZyKSk7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXCIsXCIudGhpcmQtc2VjdGlvbiB7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxufVxcblxcbi50aGlyZC1zZWN0aW9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNjVweDtcXG59XFxuXFxuLnRoaXJkLXNlY3Rpb24tdGl0bGUtYm94IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWF4LWNvbnRlbnQ7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgLnRoaXJkLXNlY3Rpb24tdGl0bGUtYm94IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogNjBweDtcXG4gIH1cXG59XFxuLnRoaXJkLXNlY3Rpb24tYWxpa2UtcHJvZHVjdHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjg1cHgsIDFmcikpO1xcbiAgZ2FwOiAyMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYG1haW5bZGF0YS12LWYzYzg5NjE4XSB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9wcm9kdWN0UGFnZS52dWVcIixcIndlYnBhY2s6Ly8uL3Byb2R1Y3RQYWdlLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGtCQUFBO0FDQUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxubWFpbiB7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG59XFxuXCIsXCJtYWluIHtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0FkZFJldmlld0RpYWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzc4ZDQzODEmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BZGRSZXZpZXdEaWFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FkZFJldmlld0RpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0FkZFJldmlld0RpYWxvZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNzhkNDM4MSZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTM3OGQ0MzgxXCJdLFsnX19maWxlJyxcInNyYy9jb21wb25lbnRzL0FkZFJldmlld0RpYWxvZy52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMzc4ZDQzODFcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczNzhkNDM4MScsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzM3OGQ0MzgxJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BZGRSZXZpZXdEaWFsb2cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3OGQ0MzgxJnNjb3BlZD10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzM3OGQ0MzgxJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImFkZC1yZXZpZXctZGlhbG9nLWNvbnRhaW5lclwiPlxuICAgICAgICA8bW9kYWwtd2luZG93IEB1cGRhdGU6aXNEaWFsb2dTaG93PVwiKG5ld1ZhbHVlKSA9PiAkZW1pdCgndXBkYXRlOmlzQWRkUmV2aWV3RGlhbG9nU2hvdycsIG5ld1ZhbHVlKVwiXG4gICAgICAgICAgICA6aXNEaWFsb2dTaG93PVwiaXNBZGRSZXZpZXdEaWFsb2dTaG93XCI+XG4gICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJhZGRSZXZpZXdcIiBjbGFzcz1cImFkZC1yZXZpZXctZGlhbG9nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtcmV2aWV3X19yYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJhZGQtcmV2aWV3LWRpYWxvZ19faW1hZ2VcIiBAbW91c2VvdmVyPVwiKGV2ZW50KSA9PiBtb3VzZUVudGVyKGV2ZW50LCBpbmRleClcIiB2LWZvcj1cIihpblJhdGUsIGluZGV4KSBpbiBpblJhdGVcIiA6a2V5PVwiaW5kZXhcIiA6c3JjPVwiJHN0b3JlLnN0YXRlLmFwcC5zZXR0aW5nc19kYXJrX3N0YXJ0XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwi0JfQsNCz0L7Qu9C+0LLQvtC6XCIgbmFtZT1cInRpdGxlXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0LXRleHQgYWRkLXJldmlldy1kaWFsb2dfX3RpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInJldmlld1wiIGNsYXNzPVwidGV4dC1hcmVhIGFkZC1yZXZpZXctZGlhbG9nX190ZXh0YXJlYVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPGZpbGUtaW5wdXQgOmlzTXVsdGlwbGU9XCJ0cnVlXCIgdi1tb2RlbDppbWFnZXM9XCJpbWFnZXNcIiBuYW1lPVwiaW1hZ2VzXCIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ1dHRvbiBidXR0b25fYXJvdW5kIGFkZC1yZXZpZXctZGlhbG9nX19idXR0b25cIj7QntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbiBuYW1lPVwicHJlbG9hZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImlzUHJlbG9hZGVyRW5hYmxlZFwiIGNsYXNzPVwicGxlbG9hZGVyLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInBsZWxvYWRlci1ib3hfX2ltYWdlXCIgOnNyYz1cIiRzdG9yZS5zdGF0ZS5hcHAuc2V0dGluZ3NfcHJlbG9hZGVyX2ljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByZWxvYWRlci1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj4gICBcbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9tb2RhbC13aW5kb3c+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFdPTyBmcm9tICdAL2F4aW9zV29vY29tZXJjZSc7XG5pbXBvcnQgcmF0ZSBmcm9tICdAL21peGlucy9yYXRlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGluUmF0ZSgpe1xuICAgICAgICAgICAgcmV0dXJuIDUgLSB0aGlzLnJhdGU7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBpc0FkZFJldmlld0RpYWxvZ1Nob3c6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICByZXZpZXc6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbWFnZXM6IFtdLFxuICAgICAgICAgICAgaXNQcmVsb2FkZXJFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHJhdGU6IDAsXG4gICAgICAgICAgICBpbmRleDogMSxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhc3luYyBhZGRSZXZpZXcoZXZlbnQpIHtcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpXG5cbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZHVjdF9pZCcsIHRoaXMuJHJvdXRlLnBhcmFtcy5pZClcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncmV2aWV3ZXInLCAnc29tZW9uZScpXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Jldmlld2VyX2VtYWlsJywgJ3NvbWVvbmVAZXhhbXBsZS5jb20nKVxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZXMnLCB0aGlzLmltYWdlcylcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncmF0aW5nJywgdGhpcy5pbmRleClcblxuICAgICAgICAgICAgdGhpcy5pc1ByZWxvYWRlckVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgV09PLnBvc3QoJ3Byb2R1Y3RzL3Jldmlld3MnLCBmb3JtRGF0YSk7XG4gICAgICAgICAgICB0aGlzLmlzUHJlbG9hZGVyRW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzVGV4dCA9PSAnQ3JlYXRlZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6aXNBZGRSZXZpZXdEaWFsb2dTaG93JywgZmFsc2UpXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOnJldmlldycsIHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdXNlRW50ZXIoZXZlbnQsIGluZGV4KXtcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGluZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbltpXS5zcmMgPSB0aGlzLiRzdG9yZS5zdGF0ZS5hcHAuc2V0dGluZ3NfbGlnaHRfc3RhcnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpbmRleCArIDE7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gaW5kZXggKyAxOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbltpXS5zcmMgPSB0aGlzLiRzdG9yZS5zdGF0ZS5hcHAuc2V0dGluZ3NfZGFya19zdGFydFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cbi5lbmFibGVke1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cbi5wcmVsb2FkZXItZW50ZXItYWN0aXZlLFxuLnByZWxvYWRlci1sZWF2ZS1hY3RpdmUge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xufVxuXG4ucHJlbG9hZGVyLWVudGVyLWZyb20sXG4ucHJlbG9hZGVyLWxlYXZlLXRvIHtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG5AaW1wb3J0ICdAL3ZhcmlhYmxlcy5zY3NzJztcblxuLnBsZWxvYWRlci1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICZfX2ltYWdlIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIH1cbn1cblxuLmFkZC1yZXZpZXctZGlhbG9nLWJhY2tkcm9wIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5hZGQtcmV2aWV3LWRpYWxvZyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMzBweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICB9XG5cblxuICAgICZfX3RleHRhcmVhIHtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG5cbiAgICAmX19maWxlLWlucHV0IHt9XG5cbiAgICAmX19idXR0b24ge31cbiAgICAmX19pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAzMHB4IDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbn1cbjwvc3R5bGU+IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRGlnaW5pdHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2OTJlZWQ3JnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRGlnaW5pdHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0RpZ2luaXR5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vRGlnaW5pdHkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzY5MmVlZDcmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi03NjkyZWVkN1wiXSxbJ19fZmlsZScsXCJzcmMvY29tcG9uZW50cy9EaWdpbml0eS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNzY5MmVlZDdcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc3NjkyZWVkNycsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzc2OTJlZWQ3JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EaWdpbml0eS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzY5MmVlZDcmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNzY5MmVlZDcnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZGlnaW5pdHlcIj5cbiAgICAgICAgPGRpdiA6c3R5bGU9XCJ7IHdpZHRoOiBsaW5lV2lkdGggKyAnJSd9XCIgY2xhc3M9XCJsaW5lXCI+PC9kaXY+XG4gICAgICAgIDxwIGNsYXNzPVwiZGlnaW5pdHlfX3RpdGxlXCI+e3sgdGl0bGUgfX08L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiZGlnaW5pdHlfX3RleHRcIiB2LWh0bWw9XCJ0ZXh0XCI+XG4gICAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB9LFxuICAgICAgICBsaW5lV2lkdGg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgICB9XG4gICAgfSxcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4uZGlnaW5pdHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEycHg7XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgJl9fdGV4dCB7XG4gICAgICAgIGNvbG9yOiAjMTIxMjEyO1xuICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgfVxufVxuXG4ubGluZSB7fVxuPC9zdHlsZT4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9MaWJyYXJ5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MTg2ODEzYiZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xpYnJhcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xpYnJhcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9MaWJyYXJ5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcxODY4MTNiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtNzE4NjgxM2JcIl0sWydfX2ZpbGUnLFwic3JjL2NvbXBvbmVudHMvTGlicmFyeS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNzE4NjgxM2JcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc3MTg2ODEzYicsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzcxODY4MTNiJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9MaWJyYXJ5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MTg2ODEzYiZzY29wZWQ9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc3MTg2ODEzYicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJzbGlkZXItaW1hZ2VzLWJveFwiPlxuICAgICAgICA8ZGl2IEBjbGljaz1cIiRlbWl0KCd1cGRhdGU6aXNTbGlkZXJTaG93JywgZmFsc2UpXCIgdi1zaG93PVwiaXNTbGlkZXJTaG93XCIgY2xhc3M9XCJzbGlkZXItaW1hZ2VzXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHYtaWY9XCJpbWFnZXNNb3JlT25lXCIgY2xhc3M9XCJzbGlkZXItaW1hZ2VzX19idXR0b25cIiBAY2xpY2suc3RvcD1cInN3aXBlclByZXZcIj5cbiAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCIkc3RvcmUuc3RhdGUuYXBwLnNldHRpbmdzX3NsaWRlcl9pY29uX2xlZnRcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiByZWY9XCJzd2lwZXItY29udGFpbmVyXCIgY2xhc3M9XCJzd2lwZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN3aXBlci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIoaW1hZ2UsIGluZGV4KSBpbiBpbWFnZXNcIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cInN3aXBlci1zbGlkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBAY2xpY2suc3RvcCBjbGFzcz1cInNsaWRlci1pbWFnZXNfX2ltYWdlXCIgOnNyYz1cImltYWdlLnBhdGhcIiA6YWx0PVwiaW1hZ2UubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB2LWlmPVwiaW1hZ2VzTW9yZU9uZVwiIGNsYXNzPVwic2xpZGVyLWltYWdlc19fYnV0dG9uIFwiIEBjbGljay5zdG9wPVwic3dpcGVyTmV4dFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cIiRzdG9yZS5zdGF0ZS5hcHAuc2V0dGluZ3Nfc2xpZGVyX2ljb25fcmlnaHRcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCIkZW1pdCgndXBkYXRlOmlzU2xpZGVyU2hvdycsIGZhbHNlKVwiIGNsYXNzPVwiY2xvc2UtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlLWJ1dHRvbl9fbGluZSBjbG9zZS1idXR0b25fX2xpbmVfMVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZS1idXR0b25fX2xpbmUgY2xvc2UtYnV0dG9uX19saW5lXzJcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgc3dpcGVyIGZyb20gJ0AvbWl4aW5zL3N3aXBlcic7XG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbWl4aW5zOiBbc3dpcGVyXSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBpbWFnZXNDb3VudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmltYWdlcy5sZW5ndGhcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2VzTW9yZU9uZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmltYWdlc0NvdW50ID4gMTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgaXNTbGlkZXJTaG93OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2VzOiB7XG4gICAgICAgICAgICB0eXBlOiBbQXJyYXksIE9iamVjdF0sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9XG4gICAgfSwgXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplU3dpcGVyKCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGluaXRpYWxpemVTd2lwZXIoKSB7XG4gICAgICAgICAgICB0aGlzLnN3aXBlciA9IG5ldyBTd2lwZXIodGhpcy4kcmVmc1snc3dpcGVyLWNvbnRhaW5lciddLCB7XG4gICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuXG5cbi5zd2lwZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zd2lwZXItd3JhcHBlciB7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG59XG5cbi5zd2lwZXItc2xpZGUge31cblxuLnNsaWRlci1pbWFnZXMge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogNTBweCA4MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjYpO1xuXG4gICAgJl9faW1hZ2Uge1xuICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIH1cblxuICAgICZfX2J1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbjwvc3R5bGU+IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vUHJvZHVjdFJldmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDc1OTE5YTcmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Qcm9kdWN0UmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Qcm9kdWN0UmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vUHJvZHVjdFJldmlldy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNzU5MTlhNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIlxuaW1wb3J0IFwiLi9Qcm9kdWN0UmV2aWV3LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTA3NTkxOWE3Jmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtMDc1OTE5YTdcIl0sWydfX2ZpbGUnLFwic3JjL2NvbXBvbmVudHMvUHJvZHVjdFJldmlldy52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMDc1OTE5YTdcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcwNzU5MTlhNycsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzA3NTkxOWE3JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Qcm9kdWN0UmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNzU5MTlhNyZzY29wZWQ9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcwNzU5MTlhNycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LXJldmlld1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1yZXZpZXdfX3JhdGVcIj5cbiAgICAgICAgICAgIDxpbWcgdi1mb3I9XCIocmF0ZSwgaW5kZXgpIGluIHJhdGVcIiA6a2V5PVwiaW5kZXhcIiA6c3JjPVwiJHN0b3JlLnN0YXRlLmFwcC5zZXR0aW5nc19saWdodF9zdGFydFwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPGltZyB2LWZvcj1cIihpblJhdGUsIGluZGV4KSBpbiBpblJhdGVcIiA6a2V5PVwiaW5kZXhcIiA6c3JjPVwiJHN0b3JlLnN0YXRlLmFwcC5zZXR0aW5nc19kYXJrX3N0YXJ0XCIgYWx0PVwiXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzcz1cInByb2R1Y3QtcmV2aWV3X190aXRsZVwiPiB7eyB0aXRsZSB9fSA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LXJldmlld19fY29udGVudFwiIHYtaHRtbD1cImNvbnRlbnRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtcmV2aWV3LWNob3Nlbi1maWxlc1wiPlxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihpbWFnZSwgaW5kZXgpIGluIGltYWdlc1wiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwicHJvZHVjdC1yZXZpZXctY2hvc2VuLWZpbGVzLWZpbGVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNlbGVjdGVkSW1hZ2UgPSBpbWFnZSwgaXNTbGlkZXJTaG93ID0gdHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicHJvZHVjdC1yZXZpZXctY2hvc2VuLWZpbGVzLWZpbGVfX2ltYWdlXCIgOnNyYz1cImltYWdlLnBhdGhcIiA6YWx0PVwiaW1hZ2UubmFtZVwiPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxMaWJyYXJ5IDppbWFnZXM9XCJpbWFnZXNcIiB2LW1vZGVsOmlzU2xpZGVyU2hvdz1cImlzU2xpZGVyU2hvd1wiLz5cbiAgICA8IS0tIDxkaXYgY2xhc3M9XCJzbGlkZXItaW1hZ2VzLWJveFwiPlxuICAgICAgICA8ZGl2IEBjbGljaz1cImlzU2xpZGVyU2hvdyA9IGZhbHNlXCIgdi1zaG93PVwiaXNTbGlkZXJTaG93XCIgY2xhc3M9XCJzbGlkZXItaW1hZ2VzXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHYtaWY9XCJpbWFnZXNNb3JlT25lXCIgY2xhc3M9XCJzbGlkZXItaW1hZ2VzX19idXR0b25cIiBAY2xpY2suc3RvcD1cInN3aXBlclByZXZcIj5cbiAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCIkc3RvcmUuc3RhdGUuYXBwLnNldHRpbmdzX3NsaWRlcl9pY29uX2xlZnRcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiByZWY9XCJzd2lwZXItY29udGFpbmVyXCIgY2xhc3M9XCJzd2lwZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN3aXBlci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIoaW1hZ2UsIGluZGV4KSBpbiBpbWFnZXNcIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cInN3aXBlci1zbGlkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBAY2xpY2suc3RvcCBjbGFzcz1cInNsaWRlci1pbWFnZXNfX2ltYWdlXCIgOnNyYz1cImltYWdlLnBhdGhcIiA6YWx0PVwiaW1hZ2UubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB2LWlmPVwiaW1hZ2VzTW9yZU9uZVwiIGNsYXNzPVwic2xpZGVyLWltYWdlc19fYnV0dG9uIFwiIEBjbGljay5zdG9wPVwic3dpcGVyTmV4dFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cIiRzdG9yZS5zdGF0ZS5hcHAuc2V0dGluZ3Nfc2xpZGVyX2ljb25fcmlnaHRcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJpc1NsaWRlclNob3cgPSBmYWxzZVwiIGNsYXNzPVwiY2xvc2UtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlLWJ1dHRvbl9fbGluZSBjbG9zZS1idXR0b25fX2xpbmVfMVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZS1idXR0b25fX2xpbmUgY2xvc2UtYnV0dG9uX19saW5lXzJcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4gLS0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHJhdGUgZnJvbSAnQC9taXhpbnMvcmF0ZSc7XG5pbXBvcnQgc3dpcGVyIGZyb20gJ0AvbWl4aW5zL3N3aXBlcic7XG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG5pbXBvcnQgTGlicmFyeSBmcm9tICcuL0xpYnJhcnkudnVlJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaXhpbnM6IFtyYXRlLCBzd2lwZXJdLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWxlY3RlZEltYWdlOiB7fSxcbiAgICAgICAgICAgIGlzU2xpZGVyU2hvdzogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBpbWFnZXNDb3VudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmltYWdlcy5sZW5ndGg7XG4gICAgICAgIH0sXG4gICAgICAgIGltYWdlc01vcmVPbmUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbWFnZXNDb3VudCA+IDE7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICc8cCBjbGFzcz1cInByb2R1Y3QtcmV2aWV3LWNvbnRlbnQtdGl0bGVcIj7Qn9GA0LjQstC10YIsINGN0YLQviDQvtGC0LfRi9CyPC9wPjxwPtCf0YDQuNCy0LXRgiwg0Y3RgtC+INGC0LXQutGB0YIg0L7RgtC30YvQstCwPC9wPidcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICfQntGC0LfRi9CyJ1xuICAgICAgICB9LFxuICAgICAgICBpbWFnZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IFtdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHsgTGlicmFyeSB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLmNsb3NlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTBweDtcbiAgICByaWdodDogODBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG5cbiAgICAmX19saW5lIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuXG4gICAgICAgICZfMSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAmXzIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnN3aXBlci1jb250YWluZXIge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnN3aXBlci13cmFwcGVyIHtcbiAgICAvLyB3aWR0aDogMTAwJTtcbn1cblxuLnN3aXBlci1zbGlkZSB7fVxuXG4uc2xpZGVyLWltYWdlcyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiA1MHB4IDgwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuNik7XG5cbiAgICAmX19pbWFnZSB7XG4gICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgfVxuXG4gICAgJl9fYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnByb2R1Y3QtcmV2aWV3LWNob3Nlbi1maWxlcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDIwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDEwMHB4KTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgMTAwcHgpO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZHVjdC1yZXZpZXctY2hvc2VuLWZpbGVzLWZpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmX19pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG59XG5cblxuLnByb2R1Y3QtcmV2aWV3IHtcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuXG4gICAgJl9fcmF0ZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgJl9fY29udGVudCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxufVxuPC9zdHlsZT5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4ucHJvZHVjdC1yZXZpZXctY29udGVudC10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuPC9zdHlsZT4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZDhjOGRjMCZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNkOGM4ZGMwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtM2Q4YzhkYzBcIl0sWydfX2ZpbGUnLFwic3JjL3NlY3Rpb25zL3Byb2R1Y3QvZmlyc3Qtc2VjdGlvbi52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiM2Q4YzhkYzBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczZDhjOGRjMCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzNkOGM4ZGMwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZDhjOGRjMCZzY29wZWQ9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCczZDhjOGRjMCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiPHRlbXBsYXRlPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZmlyc3Qtc2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlyc3Qtc2VjdGlvbi1jb250YWluZXIgY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlyc3Qtc2VjdGlvbi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImZpcnN0LXNlY3Rpb24tbGVmdF9faW1hZ2VcIiA6c3JjPVwicHJvZHVjdC5pbWFnZXNbMF0uc3JjXCIgYWx0PVwicHJvZHVjdC1pbWFnZVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlyc3Qtc2VjdGlvbi1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5lIGZpcnN0LXNlY3Rpb24tZGVzY3JpcHRpb25fX2xpbmVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZpcnN0LXNlY3Rpb24tZGVzY3JpcHRpb25fX3RpdGxlXCI+e3sgcHJvZHVjdC5uYW1lIH19PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaXJzdC1zZWN0aW9uLWRlc2NyaXB0aW9uX19yYXRlcy1icmFuZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1kZXNjcmlwdGlvbi1yYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHYtZm9yPVwiKHJhdGUsIGluZGV4KSBpbiByYXRlXCIgOmtleT1cImluZGV4XCIgOnNyYz1cIiRzdG9yZS5zdGF0ZS5hcHAuc2V0dGluZ3NfbGlnaHRfc3RhcnRcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgdi1mb3I9XCIoaW5SYXRlLCBpbmRleCkgaW4gaW5SYXRlXCIgOmtleT1cImluZGV4XCIgOnNyYz1cIiRzdG9yZS5zdGF0ZS5hcHAuc2V0dGluZ3NfZGFya19zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZpcnN0LXNlY3Rpb24tZGVzY3JpcHRpb25fX2JyYW5kXCI+0JHRgNC10L3QtNCwOiB7eyBwcm9kdWN0LmNmcy5icmFuZCB9fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlyc3Qtc2VjdGlvbi1kZXNjcmlwdGlvbl9fcHJpY2UtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJwcm9kdWN0LnNhbGVfcHJpY2VcIiBjbGFzcz1cImZpcnN0LXNlY3Rpb24tZGVzY3JpcHRpb25fX3NhbGUtcHJpY2VcIj57eyBwcm9kdWN0LnNhbGVfcHJpY2UgfX0g4oK9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmaXJzdC1zZWN0aW9uLWRlc2NyaXB0aW9uX19wcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdmaXJzdC1zZWN0aW9uLWRlc2NyaXB0aW9uX19wcmljZV9oYXMtc2FsZSc6IHByb2R1Y3Quc2FsZV9wcmljZSB9XCI+IHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5yZWd1bGFyX3ByaWNlIH19IOKCvSA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpZ2ludGllcyBmaXJzdC1zZWN0aW9uLWRlc2NyaXB0aW9uLWRpZ2ludGllc1wiPlxuICAgICAgICAgICAgICAgICAgICA8RGlnaW5pdHkgdi1mb3I9XCIoZGlnaW5pdHksIGluZGV4KSBpbiBwcm9kdWN0LmNmcy5kaWdpbml0aWVzXCIgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmlyc3Qtc2VjdGlvbi1kZXNjcmlwdGlvbi1kaWdpbnRpZXNfX2l0ZW1cIiA6bGluZVdpZHRoPVwiMTAwXCIgOnRpdGxlPVwiZGlnaW5pdHkudGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnRleHQ9XCJkaWdpbml0eS50ZXh0XCIgLz5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxiYXNrZXQtYWRkLWJ1dHRvbiBAcHJvZHVjdEFkZD1cInByb2R1Y3RBZGRcIiA6dGV4dD1cIifQlNC+0LHQsNCy0LjRgtGMJ1wiIDpwcm9kdWN0SWQ9XCJwcm9kdWN0LmlkXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IERpZ2luaXR5IGZyb20gJ0AvY29tcG9uZW50cy9EaWdpbml0eS52dWUnO1xuaW1wb3J0IHJhdGUgZnJvbSAnQC9taXhpbnMvcmF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaXhpbnM6IFtyYXRlXSxcbiAgICBwcm9wczoge1xuICAgICAgICBwcm9kdWN0OiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBwcm9kdWN0QWRkKGNvdW50KSB7XG4gICAgICAgICAgICBpZiAoY291bnQgPT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5jb21taXQoJ2Jhc2tldC9hZGRCYXNrZXRFTGVtZW50JywgeyBwcm9kdWN0OiB0aGlzLnByb2R1Y3QsIHF1YW50aXR5OiBjb3VudCB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50ID09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuY29tbWl0KCdiYXNrZXQvZGVsZXRlQmFza2V0RWxlbWVudCcsIHsgcHJvZHVjdDogdGhpcy5wcm9kdWN0LCBxdWFudGl0eTogY291bnQgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5jb21taXQoJ2Jhc2tldC91cGRhdGVCYXNrZXRFbGVtZW50JywgeyBwcm9kdWN0OiB0aGlzLnByb2R1Y3QsIHF1YW50aXR5OiBjb3VudCB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7IERpZ2luaXR5IH0sXG4gICAgbW91bnRlZCgpIHtcblxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4uZmlyc3Qtc2VjdGlvbi1kZXNjcmlwdGlvbiB7XG4gICAgJl9fcHJpY2Uge1xuICAgICAgICBjb2xvcjogIzAwM0Q5OTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICAmX2hhcy1zYWxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fcHJpY2UtYm94IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gICAgfVxuXG4gICAgJl9fc2FsZS1wcmljZSB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cblxufVxuXG4uZmlyc3Qtc2VjdGlvbiB7XG4gICAgLy8gbWFyZ2luLXRvcDogODBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmZpcnN0LXNlY3Rpb24tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciA3ZnI7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cblxuICAgIGdhcDogMTQwcHg7XG59XG5cbi5maXJzdC1zZWN0aW9uLWxlZnQge1xuICAgICZfX2ltYWdlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8vIGhlaWdodDogMTAwJTtcbiAgICB9XG59XG5cbi5maXJzdC1zZWN0aW9uLWRlc2NyaXB0aW9uIHtcbiAgICAmX19saW5lIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMS42cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuXG4gICAgJl9fcmF0ZXMtYnJhbmQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgfVxuXG4gICAgJl9fYnJhbmQge1xuICAgICAgICBjb2xvcjogIzI5MkQzMjtcbiAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgICZfX2J1dHRvbiB7fVxufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1yYXRlIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5maXJzdC1zZWN0aW9uLWRlc2NyaXB0aW9uLWRpZ2ludGllcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBnYXA6IDMwcHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG5cbiAgICAmX19pdGVtIHt9XG59XG5cbi5idXR0b24ge1xuICAgICZfYXJvdW5kIHt9XG59XG48L3N0eWxlPiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL3NlY29uZC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hOWRmZGQzOCZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NlY29uZC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9zZWNvbmQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL3NlY29uZC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE5ZGZkZDM4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtYTlkZmRkMzhcIl0sWydfX2ZpbGUnLFwic3JjL3NlY3Rpb25zL3Byb2R1Y3Qvc2Vjb25kLXNlY3Rpb24udnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcImE5ZGZkZDM4XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnYTlkZmRkMzgnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCdhOWRmZGQzOCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2Vjb25kLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE5ZGZkZDM4JnNjb3BlZD10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJ2E5ZGZkZDM4JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCI8dGVtcGxhdGU+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJzZWNvbmQtc2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kLXNlY3Rpb24tY29udGFpbmVyIGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZC1zZWN0aW9uLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzZWNvbmQtc2VjdGlvbl9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgY3VycmVudFZpc2libGVNZW51LmxhYmVsIH19XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwiaXNBZGRSZXZpZXdEaWFsb2dTaG93ID0gIWlzQWRkUmV2aWV3RGlhbG9nU2hvd1wiIHYtaWY9XCJjdXJyZW50VmlzaWJsZU1lbnUudmFsdWUgPT09ICdyZXZpZXdzJ1wiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbl9hcm91bmQgc2Vjb25kLXNlY3Rpb25fX2J1dHRvblwiID7QlNC+0LHQsNCy0LjRgtGMINC+0YLQt9GL0LI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWNvbmQtc2VjdGlvbi1ncmlkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZC1zZWN0aW9uLWxlZnRcIj5cblxuICAgICAgICAgICAgICAgICAgICA8cHJvcHMtc2xpZGVyIHYtaWY9XCJjdXJyZW50VmlzaWJsZU1lbnUudmFsdWUgPT09ICdwcm9wcydcIiA6aXNTaG93PVwiaXNTaG93UHJvcHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTppc1Nob3c9XCIoKSA9PiB7IHByb3BzSGVpZ2h0ID0gJzEwMCUnOyBpc1Nob3dQcm9wcyA9ICFpc1Nob3dQcm9wcyB9XCIgOmhlaWdodD1cInByb3BzSGVpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2Vjb25kLXNlY3Rpb24tbGVmdC1wcm9wc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHByb2R1Y3QtcHJvcCB2LWZvcj1cIihwcm9wLCBpbmRleCkgaW4gcHJvZHVjdFByb3BlcnRpZXNcIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cInNlY29uZC1zZWN0aW9ucy1sZWZ0LXByb3BzX19pdGVtXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICA6dGl0bGU9XCJwcm9wLmtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cInByb3AudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9wcm9wcy1zbGlkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxwcm9kdWN0LXJldmlldy1ib3ggQHBhZ2luYXRlPVwicmV2aWV3c1BhZ2UgKz0gMVwiIHYtaWY9XCJwcm9kdWN0UmV2aWV3cy5sZW5ndGggPiAwICYmIGN1cnJlbnRWaXNpYmxlTWVudS52YWx1ZSA9PT0gJ3Jldmlld3MnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdFJldmlldyA6dGl0bGU9XCJwcm9kdWN0UmV2aWV3LnRpdGxlXCIgOmltYWdlcz1cInByb2R1Y3RSZXZpZXcuaW1hZ2VzXCIgOmNvbnRlbnQ9XCJwcm9kdWN0UmV2aWV3LnJldmlld1wiIHYtZm9yPVwicHJvZHVjdFJldmlldyBpbiBwcm9kdWN0UmV2aWV3c1wiIGtleT1cInByb2R1Y3RSZXZpZXcuaWRcIiA6cmF0ZT1cInByb2R1Y3RSZXZpZXcucmF0aW5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9wcm9kdWN0LXJldmlldy1ib3g+XG4gICAgICAgICAgICAgICAgICAgIDxwIFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInByb2R1Y3RSZXZpZXdzLmxlbmd0aCA9PSAwICYmIGN1cnJlbnRWaXNpYmxlTWVudS52YWx1ZSA9PT0gJ3Jldmlld3MnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2Vjb25kLXNlY3Rpb24tbGVmdF9fbm8tcmV2aWV3c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAg0J7RgtC30YvQstC+0LIg0L3QtdGCLCDQsdGD0LTRjCDQv9C10YDQstGL0LxcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWNvbmQtc2VjdGlvbi1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8bXktbWVudSA6YnV0dG9ucz1cImJ1dHRvbnNJbk1lbnVcIiA6Y3VycmVudFZhbHVlPVwiY3VycmVudFZpc2libGVNZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6Y3VycmVudFZhbHVlPVwiKG5ld1ZhbHVlKSA9PiBjdXJyZW50VmlzaWJsZU1lbnUgPSBuZXdWYWx1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkJveCBAYWN0aW9uPVwiaml2b09wZW5cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8QWRkUmV2aWV3RGlhbG9nIHYtbW9kZWw6cmV2aWV3PVwicmV2aWV3XCIgQHVwZGF0ZTppc0FkZFJldmlld0RpYWxvZ1Nob3c9XCJpc0FkZFJldmlld0RpYWxvZ1Nob3cgPSAkZXZlbnRcIiA6aXNBZGRSZXZpZXdEaWFsb2dTaG93PVwiaXNBZGRSZXZpZXdEaWFsb2dTaG93XCIvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBZGRSZXZpZXdEaWFsb2cgZnJvbSAnQC9jb21wb25lbnRzL0FkZFJldmlld0RpYWxvZy52dWUnO1xuaW1wb3J0IFByb2R1Y3RSZXZpZXcgZnJvbSAnQC9jb21wb25lbnRzL1Byb2R1Y3RSZXZpZXcudnVlJztcbmltcG9ydCBRdWVzdGlvbkJveCBmcm9tICdAL2NvbXBvbmVudHMvUXVlc3Rpb25Cb3gudnVlJztcbmltcG9ydCBXT08gZnJvbSAnQC9heGlvc1dvb2NvbWVyY2UnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6ICB7XG4gICAgICAgIHByb2R1Y3RQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsIFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9wc0hlaWdodDogJzM0MHB4JyxcbiAgICAgICAgICAgIGlzU2hvd1Byb3BzOiBmYWxzZSxcbiAgICAgICAgICAgIGN1cnJlbnRWaXNpYmxlTWVudTogeyBsYWJlbDogJ9Ch0LLQvtC50YHRgtCy0LAg0YLQvtCy0LDRgNCwJywgdmFsdWU6ICdwcm9wcycgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNJbk1lbnU6IFtcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAn0KHQstC+0LnRgdGC0LLQsCDRgtC+0LLQsNGA0LAnLCB2YWx1ZTogJ3Byb3BzJyB9LFxuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICfQntGC0LfRi9Cy0Ysg0L4g0YLQvtCy0LDRgNC1JywgdmFsdWU6ICdyZXZpZXdzJyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHJldmlld3NQYWdlOiAxLFxuICAgICAgICAgICAgcHJvZHVjdFJldmlld3M6IFtdLFxuICAgICAgICAgICAgaXNBZGRSZXZpZXdEaWFsb2dTaG93OiBmYWxzZSxcbiAgICAgICAgICAgIHJldmlldzoge30sXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHByb2R1Y3RJZENvbXB1dGVkKCl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kcm91dGUucGFyYW1zLmlkXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICByZXZpZXdzUGFnZSgpe1xuICAgICAgICAgICAgdGhpcy5nZXRQcm9kdWN0UmV2aWV3cygpXG4gICAgICAgIH0sXG4gICAgICAgIHByb2R1Y3RJZENvbXB1dGVkKCl7XG4gICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RSZXZpZXdzKClcbiAgICAgICAgfSxcbiAgICAgICAgcmV2aWV3KCl7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RSZXZpZXdzLnVuc2hpZnQodGhpcy5yZXZpZXcpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHsgUXVlc3Rpb25Cb3gsIFByb2R1Y3RSZXZpZXcsIEFkZFJldmlld0RpYWxvZyB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaml2b09wZW4oKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gaml2b19hcGkub3BlbigpXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGdldFByb2R1Y3RSZXZpZXdzKCl7XG4gICAgICAgICAgICBsZXQgcmV2aWV3cyA9IChhd2FpdCBXT08uZ2V0KCdwcm9kdWN0cy9yZXZpZXdzJywge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0OiB0aGlzLnByb2R1Y3RJZENvbXB1dGVkLFxuICAgICAgICAgICAgICAgICAgICBwZXJfcGFnZTogOCxcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogdGhpcy5yZXZpZXdzUGFnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKS5kYXRhO1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0UmV2aWV3cy5wdXNoKC4uLnJldmlld3MpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKXtcbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0UmV2aWV3cygpXG4gICAgfVxuXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLnNlY29uZC1zZWN0aW9uLWRlc2NyaXB0aW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi5zZWNvbmQtc2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42NnB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbn1cblxuLnNlY29uZC1zZWN0aW9uLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMmZyO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG4gICAgZ2FwOiA2MHB4O1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGVmdCB7XG4gICAgJl9fbm8tcmV2aWV3c3tcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNjZweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG59XG5cbi5zZWNvbmQtc2VjdGlvbi1sZWZ0LXByb3BzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyNXB4O1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tcmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDMwcHg7XG59XG48L3N0eWxlPiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL3RoaXJkLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2MmQxMTU3JnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGhpcmQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGhpcmQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL3RoaXJkLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzYyZDExNTcmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi03NjJkMTE1N1wiXSxbJ19fZmlsZScsXCJzcmMvc2VjdGlvbnMvcHJvZHVjdC90aGlyZC1zZWN0aW9uLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI3NjJkMTE1N1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzc2MmQxMTU3JywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNzYyZDExNTcnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RoaXJkLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2MmQxMTU3JnNjb3BlZD10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzc2MmQxMTU3JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCI8dGVtcGxhdGU+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ0aGlyZC1zZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aGlyZC1zZWN0aW9uLWNvbnRhaW5lciBjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aGlyZC1zZWN0aW9uLXRpdGxlLWJveFwiPlxuICAgICAgICAgICAgICAgIDxoZWFkZXItYm94IGNsYXNzPVwidGhpcmQtc2VjdGlvbi10aXRsZS1ib3hfX2hlYWRlclwiIDp0aXRsZT1cIiRzdG9yZS5zdGF0ZS5wYWdlLmFsaWtlX3Byb2R1Y3RzX3RpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbl9hcm91bmQgdGhpcmQtc2VjdGlvbi10aXRsZS1ib3hfX2J1dHRvblwiPnt7XG4gICAgICAgICAgICAgICAgICAgICRzdG9yZS5zdGF0ZS5wYWdlLmFsaWtlX3Byb2R1Y3RzX2J1dHRvbl90ZXh0IH19PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImlzUHJvZHVjdHNMb2FkZWRcIiBjbGFzcz1cInRoaXJkLXNlY3Rpb24tYWxpa2UtcHJvZHVjdHNcIj5cbiAgICAgICAgICAgICAgICA8UHJvZHVjdCB2LWZvcj1cIihwcm9kdWN0LCBpbmRleCkgaW4gZmlyc3RGb3VyUHJvZHVjdHNcIiA6a2V5PVwiaW5kZXhcIiA6cmF0ZT1cIk1hdGguZmxvb3IoTnVtYmVyKHByb2R1Y3QuYXZlcmFnZV9yYXRpbmcpKVwiXG4gICAgICAgICAgICAgICAgICAgIDp0aXRsZT1cInByb2R1Y3QubmFtZVwiIDpzYWxlX3ByaWNlPVwicHJvZHVjdC5zYWxlX3ByaWNlXCIgOnByaWNlPVwicHJvZHVjdC5yZWd1bGFyX3ByaWNlXCIgOnByb2R1Y3RJZD1cInByb2R1Y3QuaWRcIiA6aW1hZ2VTcmM9XCJwcm9kdWN0LmltYWdlc1swXS5zcmNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQWRkUmV2aWV3RGlhbG9nIGZyb20gJ0AvY29tcG9uZW50cy9BZGRSZXZpZXdEaWFsb2cudnVlJztcbmltcG9ydCBQcm9kdWN0IGZyb20gJ0AvY29tcG9uZW50cy9Qcm9kdWN0LnZ1ZSc7XG5pbXBvcnQgV09PIGZyb20gJ0AvYXhpb3NXb29jb21lcmNlJztcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgY2F0ZWdvcmllczoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvZHVjdHM6IFtdLFxuICAgICAgICAgICAgaXNQcm9kdWN0c0xvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICBwcm9kdWN0SWQ6IHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgZmlyc3RGb3VyUHJvZHVjdHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0cy5zbGljZSgwLCA0KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50czogeyBQcm9kdWN0LCBBZGRSZXZpZXdEaWFsb2cgfSxcbiAgICBhc3luYyBiZWZvcmVDcmVhdGUoKSB7XG4gICAgICAgIGxldCBzb3JldGVkQ2F0ZWdvcmllcyA9IHRoaXMuY2F0ZWdvcmllcy5zb3J0KChmaXJzdCwgc2Vjb25kKSA9PiBmaXJzdC5pZCAtIHNlY29uZC5pZCA8IDAgPyAxIDogLTEpXG4gICAgICAgIGxldCBzYW1lUHJvZHVjdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY2F0ZWdvcmllcy5sZW5ndGg7IGluZGV4KyspIHtcblxuICAgICAgICAgICAgbGV0IGJlZm9yZUFkZGVkU2FtZVByb2R1Y3RzID0gKGF3YWl0IFdPTy5nZXQoJ3Byb2R1Y3RzJywge1xuICAgICAgICAgICAgICAgICdwYXJhbXMnOiB7XG4gICAgICAgICAgICAgICAgICAgICdjYXRlZ29yeSc6IHNvcmV0ZWRDYXRlZ29yaWVzW2luZGV4XS5pZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKS5kYXRhXG4gICAgICAgICAgICBzYW1lUHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgICAgICBiZWZvcmVBZGRlZFNhbWVQcm9kdWN0cyA9IGJlZm9yZUFkZGVkU2FtZVByb2R1Y3RzLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgIT09IHByb2R1Y3QuaWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNhbWVQcm9kdWN0cy5wdXNoKC4uLihiZWZvcmVBZGRlZFNhbWVQcm9kdWN0cykpXG4gICAgICAgICAgICBzYW1lUHJvZHVjdHMgPSBzYW1lUHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5pZCAhPSB0aGlzLnByb2R1Y3RJZClcbiAgICAgICAgICAgIGlmIChzYW1lUHJvZHVjdHMubGVuZ3RoID49IDQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBzYW1lUHJvZHVjdHM7XG5cbiAgICAgICAgdGhpcy5pc1Byb2R1Y3RzTG9hZGVkID0gdHJ1ZVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4udGhpcmQtc2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuLnRoaXJkLXNlY3Rpb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA2NXB4O1xufVxuXG4udGhpcmQtc2VjdGlvbi10aXRsZS1ib3gge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtYXgtY29udGVudDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCApIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdhcDogNjBweDtcbiAgICB9XG4gICAgJl9fYnV0dG9uIHt9XG4gICAgJl9faGVhZGVyIHtcbiAgICAgICAgXG4gICAgICAgIC8vIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICB9XG59XG5cbi50aGlyZC1zZWN0aW9uLWFsaWtlLXByb2R1Y3RzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjg1cHgsIDFmcikpO1xuICAgIGdhcDogMjBweDtcbn1cbjwvc3R5bGU+IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vcHJvZHVjdFBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYzYzg5NjE4JnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcHJvZHVjdFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Byb2R1Y3RQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vcHJvZHVjdFBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjNjODk2MTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi1mM2M4OTYxOFwiXSxbJ19fZmlsZScsXCJzcmMvdmlld3MvcHJvZHVjdFBhZ2UudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcImYzYzg5NjE4XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnZjNjODk2MTgnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCdmM2M4OTYxOCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcHJvZHVjdFBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYzYzg5NjE4JnNjb3BlZD10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJ2YzYzg5NjE4JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPG1haW4gdi1pZj1cImlzRGF0YUxvYWRlZCAmJiBpc1Byb2R1Y3RMb2FkZWQgJiYgaXNBcHBMb2FkZWRcIj5cbiAgICAgICAgICAgIDxGaXJzdFNlY3Rpb24gaWQ9XCJmaXJzdC1zZWN0aW9uXCIgOnJhdGU9XCJNYXRoLmZsb29yKE51bWJlcihwcm9kdWN0LmF2ZXJhZ2VfcmF0aW5nKSlcIiA6cHJvZHVjdD1cInByb2R1Y3RcIiAvPlxuICAgICAgICAgICAgPFNlY29uZFNlY3Rpb24gOnByb2R1Y3RQcm9wZXJ0aWVzPVwicHJvZHVjdC5jZnMucHJvcHNcIi8+XG4gICAgICAgICAgICA8VGhpcmRTZWN0aW9uIDpjYXRlZ29yaWVzPVwicHJvZHVjdC5jYXRlZ29yaWVzXCIgLz5cbiAgICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBXUCBmcm9tICdAL2F4aW9zV1AnXG5pbXBvcnQgV09PIGZyb20gJ0AvYXhpb3NXb29jb21lcmNlJ1xuaW1wb3J0IEZpcnN0U2VjdGlvbiBmcm9tICdAL3NlY3Rpb25zL3Byb2R1Y3QvZmlyc3Qtc2VjdGlvbi52dWUnO1xuaW1wb3J0IGNyZWF0ZU9hdXRoUmVxdWVzdCBmcm9tICdAL2hlbHBlcnMvY3JlYXRlT2F1dGhSZXF1ZXN0JztcbmltcG9ydCBTZWNvbmRTZWN0aW9uIGZyb20gJ0Avc2VjdGlvbnMvcHJvZHVjdC9zZWNvbmQtc2VjdGlvbi52dWUnO1xuaW1wb3J0IFRoaXJkU2VjdGlvbiBmcm9tICdAL3NlY3Rpb25zL3Byb2R1Y3QvdGhpcmQtc2VjdGlvbi52dWUnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIGlzRGF0YUxvYWRlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgfSxcbiAgICAgICAgaXNBcHBMb2FkZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW5cbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2R1Y3Q6IHt9LFxuICAgICAgICAgICAgaXNQcm9kdWN0TG9hZGVkOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBwcm9kdWN0SWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kcm91dGUucGFyYW1zLmlkXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGFzeW5jIGF2ZXJhZ2VSYXRpbmcoKXtcbiAgICAgICAgLy8gICAgIGxldCByZXNwb25zZSA9IGF3YWl0IFdPTy5nZXQoJ3Byb2R1Y3RzL3Jldmlld3M/cHJvZHVjdD0nICsgdGhpcy5wcm9kdWN0LmlkKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG5cbiAgICAgICAgLy8gICAgIC8vIHJldHVybiBcbiAgICAgICAgLy8gfVxuICAgIH0sXG4gICAgYXN5bmMgYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgICBsZXQgcGFnZURhdGEgPSAoYXdhaXQgV1AuZ2V0KCdwYWdlcy8yNTMnKSkuZGF0YTtcbiAgICAgICAgdGhpcy4kc3RvcmUuc3RhdGUucGFnZSA9IHBhZ2VEYXRhLmNmcztcblxuICAgICAgICBhd2FpdCB0aGlzLmdldFByb2R1Y3QoKVxuXG4gICAgICAgIGlmICh0aGlzLmlzRGF0YUxvYWRlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOmlzRGF0YUxvYWRlZCcsICF0aGlzLmlzRGF0YUxvYWRlZCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIGFzeW5jIHByb2R1Y3RJZCgpe1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRQcm9kdWN0KClcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtoYXNoOiAnI2ZpcnN0LXNlY3Rpb24nfSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhc3luYyBnZXRQcm9kdWN0KCkge1xuICAgICAgICAgICAgdGhpcy5pc1Byb2R1Y3RMb2FkZWQgPSBmYWxzZVxuXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBjcmVhdGVPYXV0aFJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIHVybDogYHByb2R1Y3RzLyR7dGhpcy5wcm9kdWN0SWR9YCxcbiAgICAgICAgICAgIH0sIGZhbHNlKVxuXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3QgPSByZXNwb25zZS5kYXRhXG5cbiAgICAgICAgICAgIHRoaXMuaXNQcm9kdWN0TG9hZGVkID0gdHJ1ZVxuXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHsgRmlyc3RTZWN0aW9uLCBTZWNvbmRTZWN0aW9uLCBUaGlyZFNlY3Rpb24gfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbm1haW4ge1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cbjwvc3R5bGU+IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10udXNlWzBdIS4vQWRkUmV2aWV3RGlhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLnVzZVswXSEuL0FkZFJldmlld0RpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLnVzZVswXSEuL0RpZ2luaXR5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLnVzZVswXSEuL0RpZ2luaXR5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10udXNlWzBdIS4vTGlicmFyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi9MaWJyYXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10udXNlWzBdIS4vUHJvZHVjdFJldmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi9Qcm9kdWN0UmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10udXNlWzBdIS4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10udXNlWzBdIS4vc2Vjb25kLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10udXNlWzBdIS4vc2Vjb25kLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi90aGlyZC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLnVzZVswXSEuL3RoaXJkLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi9wcm9kdWN0UGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi9wcm9kdWN0UGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi9BZGRSZXZpZXdEaWFsb2cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Mzc4ZDQzODEmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjVkMjcxODcwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi9BZGRSZXZpZXdEaWFsb2cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Mzc4ZDQzODEmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLnVzZVswXSEuL0FkZFJldmlld0RpYWxvZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNzhkNDM4MSZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLnVzZVswXSEuL0RpZ2luaXR5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc2OTJlZWQ3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2NmU3MzNhZFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10udXNlWzBdIS4vRGlnaW5pdHkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzY5MmVlZDcmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLnVzZVswXSEuL0RpZ2luaXR5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc2OTJlZWQ3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10udXNlWzBdIS4vTGlicmFyeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MTg2ODEzYiZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMTBlMjE2NjRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLnVzZVswXSEuL0xpYnJhcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzE4NjgxM2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLnVzZVswXSEuL0xpYnJhcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzE4NjgxM2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi9Qcm9kdWN0UmV2aWV3LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA3NTkxOWE3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxNmM5ODgzM1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10udXNlWzBdIS4vUHJvZHVjdFJldmlldy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNzU5MTlhNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10udXNlWzBdIS4vUHJvZHVjdFJldmlldy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNzU5MTlhNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLnVzZVswXSEuL1Byb2R1Y3RSZXZpZXcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9MDc1OTE5YTcmbGFuZz1zY3NzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjdlOGFjNDcyXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi9Qcm9kdWN0UmV2aWV3LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTA3NTkxOWE3Jmxhbmc9c2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi9Qcm9kdWN0UmV2aWV3LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTA3NTkxOWE3Jmxhbmc9c2Nzc1wiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10udXNlWzBdIS4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZDhjOGRjMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYzI2YjdhYTZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLnVzZVswXSEuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2Q4YzhkYzAmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLnVzZVswXSEuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2Q4YzhkYzAmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi9zZWNvbmQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hOWRmZGQzOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMmZhOTJmNTVcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLnVzZVswXSEuL3NlY29uZC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE5ZGZkZDM4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi9zZWNvbmQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hOWRmZGQzOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLnVzZVswXSEuL3RoaXJkLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzYyZDExNTcmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjU5OTUwMzFkXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi90aGlyZC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc2MmQxMTU3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi90aGlyZC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc2MmQxMTU3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10udXNlWzBdIS4vcHJvZHVjdFBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjNjODk2MTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjBiM2FlNTI0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS51c2VbMF0hLi9wcm9kdWN0UGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mM2M4OTYxOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10udXNlWzBdIS4vcHJvZHVjdFBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjNjODk2MTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3dpcGVyOiB7fSxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzd2lwZXJQcmV2KCkge1xuICAgICAgICAgICAgdGhpcy5zd2lwZXIuc2xpZGVQcmV2KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHN3aXBlck5leHQoKSB7XG4gICAgICAgICAgICB0aGlzLnN3aXBlci5zbGlkZU5leHQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=