"use strict";
exports.id = 6013;
exports.ids = [6013];
exports.modules = {

/***/ 6013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_spinner": () => (/* binding */ DyteSpinner)
/* harmony export */ });
/* harmony import */ var _index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67503);
/* harmony import */ var _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35461);
/* harmony import */ var _index_1faf994c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11810);




const dyteSpinnerCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);box-sizing:border-box;display:block;height:var(--dyte-space-10, 40px);width:var(--dyte-space-10, 40px);--dyte-spinner-color:currentColor}.spinner{height:100%;width:100%}@-webkit-keyframes spin{to{transform:rotate(360deg)}}@keyframes spin{to{transform:rotate(360deg)}}.spinner{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite;border-radius:9999px;background-color:transparent;-webkit-animation-duration:0.7s;animation-duration:0.7s}:host([size='md']){height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}:host([size='sm']){height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}";

const DyteSpinner = class {
  constructor(hostRef) {
    (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.iconPack = _default_icon_pack_e9908d58_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.size = 'md';
    this.t = (0,_index_1faf994c_js__WEBPACK_IMPORTED_MODULE_2__.u)();
  }
  render() {
    return ((0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fe685ee5_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "spinner", icon: this.iconPack.spinner, iconPack: this.iconPack, t: this.t })));
  }
};
DyteSpinner.style = dyteSpinnerCss;




/***/ })

};
;