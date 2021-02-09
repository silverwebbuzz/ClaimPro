(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button color=\"primary\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title color=\"primary\" class=\"head\">HOME</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content class=\"page-home\">\r\n  <img src=\"../../assets/images/placeholder.jpg\" class=\"img-head\"/>\r\n\r\n  <ion-label color=\"primary\" class=\"lbl-head\">We offer the following insurance services:</ion-label>\r\n\r\n  <ion-row class=\"row-card\">\r\n    <ion-col size=\"6\" class=\"col-card\">\r\n      <ion-card class=\"card-service\">\r\n        <img src=\"../../assets/images/services/property.png\" class=\"img-service home-img\"/>\r\n        <ion-label color=\"primary\" class=\"lbl-service\">Property</ion-label>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size=\"6\" class=\"col-card\">\r\n      <ion-card class=\"card-service\">\r\n        <img src=\"../../assets/images/services/vehicle.png\" class=\"img-service home-img\"/>\r\n        <ion-label color=\"primary\" class=\"lbl-service\">Vehicle</ion-label>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"row-card\">\r\n    <ion-col size=\"6\" class=\"col-card\">\r\n      <ion-card class=\"card-service\">\r\n        <img src=\"../../assets/images/services/medical.png\" class=\"img-service home-img\"/>\r\n        <ion-label color=\"primary\" class=\"lbl-service\">Medical Malpractice</ion-label>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size=\"6\" class=\"col-card\">\r\n      <ion-card class=\"card-service\">\r\n        <img src=\"../../assets/images/services/professional.png\" class=\"img-service home-img\"/>\r\n        <ion-label color=\"primary\" class=\"lbl-service\">Professional Indemnity</ion-label>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n  \r\n  <ion-row class=\"row-card\">\r\n    <ion-col size=\"6\" class=\"col-card\">\r\n      <ion-card class=\"card-service\">\r\n        <img src=\"../../assets/images/services/general.png\" class=\"img-service home-img\"/>\r\n        <ion-label color=\"primary\" class=\"lbl-service\">General Liability</ion-label>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size=\"6\" class=\"col-card\">\r\n      <ion-card class=\"card-service\">\r\n        <img src=\"../../assets/images/services/other.png\" class=\"img-service home-img\"/>\r\n        <ion-label color=\"primary\" class=\"lbl-service\">Other</ion-label>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");





var HomePage = /** @class */ (function () {
    function HomePage(router, menu, statusBar) {
        this.router = router;
        this.menu = menu;
        this.statusBar = statusBar;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.menu.enable(true);
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    HomePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map