(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contactus-contactus-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/contactus/contactus.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contactus/contactus.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-button color=\"primary\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"primary\" class=\"head\">Contact Us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n\n  <!-- <ion-label class=\"lbl-contact\">Contact Us</ion-label> -->\n\n  <div class=\"div-info\">\n    <ion-item lines=\"none\" class=\"item-info\">\n      <ion-label class=\"lbl-both\" color=\"secondary\">1300 305 834</ion-label>\n      <ion-icon slot=\"start\" name=\"call\" color=\"primary\" class=\"icons\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"item-info\">\n      <ion-label class=\"lbl-both\" color=\"secondary\">ih@ihgroup.com.au</ion-label>\n      <ion-icon slot=\"start\" name=\"mail\" color=\"primary\" class=\"icons\"></ion-icon>\n    </ion-item>\n  </div>\n\n  <!-- <ion-item class=\"item-dropdown add\" lines=\"none\">\n    <ion-label position=\"stacked\" color=\"primary\" class=\"lbl-dropdown\">Speak to a broker near you</ion-label>\n    <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" class=\"btn-select bg\" mode=\"md\">\n      <ion-select-option value=\"brown\">abc</ion-select-option>\n      <ion-select-option value=\"blonde\">def</ion-select-option>\n      <ion-select-option value=\"black\">ghi</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n  <!-- <div class=\"info\">\n  <ion-label color=\"primary\" class=\"lbl-name\">Sydney Office</ion-label>\n  <ion-label color=\"primary\" class=\"lbl-add1\">Level 2, 77 Pacific Highway</ion-label>\n  <ion-label color=\"primary\" class=\"lbl-add2\">North Sydney New South Wales 2060</ion-label>\n  <ion-label color=\"primary\" class=\"lbl-phn\">Phone: 02 8913 9100</ion-label>\n  <ion-label color=\"primary\" class=\"lbl-fax\">Fax: 1800 636 221</ion-label>\n  <ion-label color=\"primary\" class=\"lbl-email\">Email: ih@ihgroup.com.au</ion-label>\n  </div> -->\n\n  <ion-card class=\"info\">\n    <ion-label color=\"secondary\" class=\"lbl-name\">East Melbourne - Head Office</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add1\">Level 3, 100 Wellington Pde</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add2\">East Melbourne Victoria 3002</ion-label>\n    <ion-label class=\"lbl-phn\">Phone : <span class=\"lbl-phn-value\">03 9235 5222</span></ion-label>\n    <ion-label class=\"lbl-fax\">Fax : <span class=\"lbl-fax-value\">1800 636 221</span></ion-label>\n    <ion-label class=\"lbl-email\">Email : <span class=\"lbl-email-value\">ih@ihgroup.com.au</span></ion-label>\n  </ion-card>\n\n  <ion-card class=\"info\">\n    <ion-label color=\"secondary\" class=\"lbl-name\">Sydney Office</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add1\">Level 19, Suite 2, 227 Elizabeth Street</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add2\">Sydney New South Wales 2000</ion-label>\n    <ion-label class=\"lbl-phn\">Phone : <span class=\"lbl-phn-value\">02 8913 9100</span></ion-label>\n    <ion-label class=\"lbl-fax\">Fax : <span class=\"lbl-fax-value\">1800 636 221</span></ion-label>\n    <ion-label class=\"lbl-email\">Email : <span class=\"lbl-email-value\">ih@ihgroup.com.au</span></ion-label>\n  </ion-card>\n\n  <ion-card class=\"info\">\n    <ion-label color=\"secondary\" class=\"lbl-name\">Brisbane Office</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add1\">Level 1, 217 Logan Road</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add2\">Woolloongabba Queensland 4102</ion-label>\n    <ion-label class=\"lbl-phn\">Phone : <span class=\"lbl-phn-value\">07 3228 7600</span></ion-label>\n    <ion-label class=\"lbl-fax\">Fax : <span class=\"lbl-fax-value\">07 3228 7601</span></ion-label>\n    <ion-label class=\"lbl-email\">Email : <span class=\"lbl-email-value\">ih@ihgroup.com.au</span></ion-label>\n  </ion-card>\n\n  <ion-card class=\"info\">\n    <ion-label color=\"secondary\" class=\"lbl-name\">Echuca Office</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add1\">390 High Street</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add2\">Echuca Victoria 3564</ion-label>\n    <ion-label class=\"lbl-phn\">Phone : <span class=\"lbl-phn-value\">03 5483 1066</span></ion-label>\n    <ion-label class=\"lbl-fax\">Fax : <span class=\"lbl-fax-value\">1800 636 221</span></ion-label>\n    <ion-label class=\"lbl-email\">Email : <span class=\"lbl-email-value\">ih@ihgroup.com.au</span></ion-label>\n  </ion-card>\n\n  <ion-card class=\"info\">\n    <ion-label color=\"secondary\" class=\"lbl-name\">Boort Office</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add1\">99a Godfrey Street</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add2\">Boort Victoria 3537</ion-label>\n    <ion-label class=\"lbl-phn\">Phone : <span class=\"lbl-phn-value\">03 5483 1090</span></ion-label>\n    <ion-label class=\"lbl-fax\">Fax : <span class=\"lbl-fax-value\">1800 636 221</span></ion-label>\n    <ion-label class=\"lbl-email\">Email : <span class=\"lbl-email-value\">ih@ihgroup.com.au</span></ion-label>\n  </ion-card>\n\n  <ion-card class=\"info\">\n    <ion-label color=\"secondary\" class=\"lbl-name\">Erina Office</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add1\">Suite 8, First Floor, Fountain Plaza</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add2\">158 The Entrance Road Erina New South Wales 2250</ion-label>\n    <ion-label class=\"lbl-phn\">Phone : <span class=\"lbl-phn-value\">02 8913 9127</span></ion-label>\n    <ion-label class=\"lbl-fax\">Fax : <span class=\"lbl-fax-value\">1800 636 221</span></ion-label>\n    <ion-label class=\"lbl-email\">Email : <span class=\"lbl-email-value\">ih@ihgroup.com.au</span></ion-label>\n  </ion-card>\n\n  <ion-card class=\"info\">\n    <ion-label color=\"secondary\" class=\"lbl-name\">Kyabram Office</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add1\">187-189 Allan Street</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add2\">Kyabram Victoria 3620</ion-label>\n    <ion-label class=\"lbl-phn\">Phone : <span class=\"lbl-phn-value\">03 5851 0300</span></ion-label>\n    <ion-label class=\"lbl-fax\">Fax : <span class=\"lbl-fax-value\">03 5851 0301</span></ion-label>\n    <ion-label class=\"lbl-email\">Email : <span class=\"lbl-email-value\">ih@ihgroup.com.au</span></ion-label>\n  </ion-card>\n\n  <ion-card class=\"info\">\n    <ion-label color=\"secondary\" class=\"lbl-name\">Narrabri Office</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add1\">60 Maitland Street</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add2\">Narrabri New South Wales 2390</ion-label>\n    <ion-label class=\"lbl-phn\">Phone : <span class=\"lbl-phn-value\">02 6792 5557</span></ion-label>\n    <ion-label class=\"lbl-fax\">Fax : <span class=\"lbl-fax-value\">02 6792 5576</span></ion-label>\n    <ion-label class=\"lbl-email\">Email : <span class=\"lbl-email-value\">ih@ihgroup.com.au</span></ion-label>\n  </ion-card>\n\n  <ion-card class=\"info\">\n    <ion-label color=\"secondary\" class=\"lbl-name\">Tamworth Office</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add1\">26 Bourke Street</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add2\">Tamworth New South Wales 2340</ion-label>\n    <ion-label class=\"lbl-phn\">Phone : <span class=\"lbl-phn-value\">02 6766 9688</span></ion-label>\n    <ion-label class=\"lbl-fax\">Fax : <span class=\"lbl-fax-value\">1800 636 221</span></ion-label>\n    <ion-label class=\"lbl-email\">Email : <span class=\"lbl-email-value\">ih@ihgroup.com.au</span></ion-label>\n  </ion-card>\n\n  <ion-card class=\"info\">\n    <ion-label color=\"secondary\" class=\"lbl-name\">Wagga Wagga Office</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add1\">101 Peter Street</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add2\">Wagga Wagga New South Wales 2650</ion-label>\n    <ion-label class=\"lbl-phn\">Phone : <span class=\"lbl-phn-value\">02 8913 9154</span></ion-label>\n    <ion-label class=\"lbl-fax\">Fax : <span class=\"lbl-fax-value\">1800 636 221</span></ion-label>\n    <ion-label class=\"lbl-email\">Email : <span class=\"lbl-email-value\">ih@ihgroup.com.au</span></ion-label>\n  </ion-card>\n\n  <ion-card class=\"info\">\n    <ion-label color=\"secondary\" class=\"lbl-name\">Port Macquarie</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add1\">Suite 2, 85 William Street</ion-label>\n    <ion-label color=\"primary\" class=\"lbl-add2\">Port Macquarie New South Wales 2444</ion-label>\n    <ion-label class=\"lbl-phn\">Phone : <span class=\"lbl-phn-value\">02 6584 1284</span></ion-label>\n    <ion-label class=\"lbl-fax\">Fax : <span class=\"lbl-fax-value\">1800 636 221</span></ion-label>\n    <ion-label class=\"lbl-email\">Email : <span class=\"lbl-email-value\">ih@ihgroup.com.au</span></ion-label>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/contactus/contactus.module.ts":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.module.ts ***!
  \***********************************************/
/*! exports provided: ContactusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPageModule", function() { return ContactusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contactus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactus.page */ "./src/app/contactus/contactus.page.ts");







const routes = [
    {
        path: '',
        component: _contactus_page__WEBPACK_IMPORTED_MODULE_6__["ContactusPage"]
    }
];
let ContactusPageModule = class ContactusPageModule {
};
ContactusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_contactus_page__WEBPACK_IMPORTED_MODULE_6__["ContactusPage"]]
    })
], ContactusPageModule);



/***/ }),

/***/ "./src/app/contactus/contactus.page.scss":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3R1cy9jb250YWN0dXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/contactus/contactus.page.ts":
/*!*********************************************!*\
  !*** ./src/app/contactus/contactus.page.ts ***!
  \*********************************************/
/*! exports provided: ContactusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPage", function() { return ContactusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");




let ContactusPage = class ContactusPage {
    constructor(navCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.pop();
    }
};
ContactusPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] }
];
ContactusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contactus',
        template: __webpack_require__(/*! raw-loader!./contactus.page.html */ "./node_modules/raw-loader/index.js!./src/app/contactus/contactus.page.html"),
        styles: [__webpack_require__(/*! ./contactus.page.scss */ "./src/app/contactus/contactus.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
], ContactusPage);



/***/ })

}]);
//# sourceMappingURL=contactus-contactus-module-es2015.js.map