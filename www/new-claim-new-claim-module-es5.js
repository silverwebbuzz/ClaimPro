(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-claim-new-claim-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/new-claim/new-claim.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/new-claim/new-claim.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"primary\" class=\"head\">New Claim</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"page-home\">\r\n\r\n    <img src=\"../../assets/images/placeholder.jpg\" class=\"img-head\"/>\r\n\r\n    <ion-label color=\"secondary\" class=\"lbl-head\">What type of claim would you like to make ?</ion-label>\r\n  \r\n    <ion-row class=\"row-card\">\r\n      <ion-col size=\"6\" class=\"col-card\">\r\n        <ion-card class=\"card-service\">\r\n            <!-- (click)=\"formProperty()\" -->\r\n          <img src=\"../../assets/images/services/w-property.png\" class=\"img-service home-img-clr\"/>\r\n          <ion-label color=\"secondary\" class=\"lbl-service\">Property</ion-label>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"col-card\">\r\n        <ion-card class=\"card-service\">\r\n            <!-- (click)=\"formVehicle()\" -->\r\n          <img src=\"../../assets/images/services/w-vehicle.png\" class=\"img-service home-img-clr\"/>\r\n          <ion-label color=\"secondary\" class=\"lbl-service\">Vehicle</ion-label>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  \r\n    <ion-row class=\"row-card\">\r\n      <ion-col size=\"6\" class=\"col-card\">\r\n        <ion-card class=\"card-service\">\r\n            <!-- (click)=\"formMedical()\" -->\r\n          <img src=\"../../assets/images/services/w-medical.png\" class=\"img-service home-img-clr\"/>\r\n          <ion-label color=\"secondary\" class=\"lbl-service\">Medical Malpractice</ion-label>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"col-card\">\r\n        <ion-card class=\"card-service\">\r\n            <!-- (click)=\"formProfestional()\" -->\r\n          <img src=\"../../assets/images/services/w-professional.png\" class=\"img-service home-img-clr\"/>\r\n          <ion-label color=\"secondary\" class=\"lbl-service\">Professional Indemnity</ion-label>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row class=\"row-card\">\r\n      <ion-col size=\"6\" class=\"col-card\">\r\n        <ion-card class=\"card-service\" (click)=\"formGeneral()\">\r\n          <img src=\"../../assets/images/services/w-general.png\" class=\"img-service home-img-clr\"/>\r\n          <ion-label color=\"secondary\" class=\"lbl-service\">General Liability</ion-label>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"col-card\">\r\n        <ion-card class=\"card-service\" (click)=\"formOther()\"> \r\n          <img src=\"../../assets/images/services/w-other.png\" class=\"img-service home-img-clr\"/>\r\n          <ion-label color=\"secondary\" class=\"lbl-service\">Other</ion-label>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/new-claim/new-claim.module.ts":
/*!***********************************************!*\
  !*** ./src/app/new-claim/new-claim.module.ts ***!
  \***********************************************/
/*! exports provided: NewClaimPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewClaimPageModule", function() { return NewClaimPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_claim_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-claim.page */ "./src/app/new-claim/new-claim.page.ts");







var routes = [
    {
        path: '',
        component: _new_claim_page__WEBPACK_IMPORTED_MODULE_6__["NewClaimPage"]
    }
];
var NewClaimPageModule = /** @class */ (function () {
    function NewClaimPageModule() {
    }
    NewClaimPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_new_claim_page__WEBPACK_IMPORTED_MODULE_6__["NewClaimPage"]]
        })
    ], NewClaimPageModule);
    return NewClaimPageModule;
}());



/***/ }),

/***/ "./src/app/new-claim/new-claim.page.scss":
/*!***********************************************!*\
  !*** ./src/app/new-claim/new-claim.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1jbGFpbS9uZXctY2xhaW0ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/new-claim/new-claim.page.ts":
/*!*********************************************!*\
  !*** ./src/app/new-claim/new-claim.page.ts ***!
  \*********************************************/
/*! exports provided: NewClaimPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewClaimPage", function() { return NewClaimPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");






var NewClaimPage = /** @class */ (function () {
    function NewClaimPage(navCtrl, _cS, router, statusBar) {
        this.navCtrl = navCtrl;
        this._cS = _cS;
        this.router = router;
        this.statusBar = statusBar;
    }
    NewClaimPage.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    NewClaimPage.prototype.ngOnInit = function () {
    };
    NewClaimPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    NewClaimPage.prototype.formOther = function () {
        this.router.navigate(['/other']);
    };
    NewClaimPage.prototype.formGeneral = function () {
        this.router.navigate(['/general-liability']);
    };
    NewClaimPage.prototype.formProfestional = function () {
        this.router.navigate(['/professional-indemnity']);
    };
    NewClaimPage.prototype.formMedical = function () {
        this.router.navigate(['/medical-malpractice']);
    };
    NewClaimPage.prototype.formVehicle = function () {
        this.router.navigate(['/vehicle']);
    };
    NewClaimPage.prototype.formProperty = function () {
        this.router.navigate(['/property']);
    };
    NewClaimPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_3__["CommonMockService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] }
    ]; };
    NewClaimPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-claim',
            template: __webpack_require__(/*! raw-loader!./new-claim.page.html */ "./node_modules/raw-loader/index.js!./src/app/new-claim/new-claim.page.html"),
            styles: [__webpack_require__(/*! ./new-claim.page.scss */ "./src/app/new-claim/new-claim.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_3__["CommonMockService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
    ], NewClaimPage);
    return NewClaimPage;
}());



/***/ })

}]);
//# sourceMappingURL=new-claim-new-claim-module-es5.js.map