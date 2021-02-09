(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["property-property-step10-property-step10-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/property/property-step10/property-step10.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/property/property-step10/property-step10.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Done</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"page-done\">\r\n\r\n  <ion-label class=\"lbl-head\">Claim completed!</ion-label>\r\n  <ion-label color=\"primary\" class=\"lbl-desc\">One of our consultants will be in contact with you shortly. A confirmation email is on the way. Your reference number is:</ion-label>\r\n  <ion-label color=\"primary\" class=\"lbl-ref\">{{Claim_number}}</ion-label>\r\n  <ion-label color=\"primary\" class=\"lbl-que\">Did you find this claim process helpful?</ion-label>\r\n  <ion-row>\r\n    <ion-col size=\"4\">\r\n      <ion-icon color=\"primary\" name=\"happy\" mode=\"md\" class=\"icon\"><a class=\"col-md-4\" (click)=\"submitFeedBack(Claim_number, 'A')\"></a></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"4\">\r\n        <ion-icon color=\"primary\" name=\"happy\" mode=\"md\" class=\"icon\"> <a class=\"col-md-4\" (click)=\"submitFeedBack(Claim_number, 'B')\"></a></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"4\">\r\n        <ion-icon color=\"primary\" name=\"happy\" mode=\"md\" class=\"icon\"> <a class=\"col-md-4\" (click)=\"submitFeedBack(Claim_number, 'C')\"></a></ion-icon>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer\">\r\n      <ion-button expand=\"full\" class=\"btn-next\"  routerLink=\"/home\">Go Home</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/property/property-step10/property-step10.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/property/property-step10/property-step10.module.ts ***!
  \********************************************************************/
/*! exports provided: PropertyStep10PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyStep10PageModule", function() { return PropertyStep10PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _property_step10_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./property-step10.page */ "./src/app/property/property-step10/property-step10.page.ts");







const routes = [
    {
        path: '',
        component: _property_step10_page__WEBPACK_IMPORTED_MODULE_6__["PropertyStep10Page"]
    }
];
let PropertyStep10PageModule = class PropertyStep10PageModule {
};
PropertyStep10PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_property_step10_page__WEBPACK_IMPORTED_MODULE_6__["PropertyStep10Page"]]
    })
], PropertyStep10PageModule);



/***/ }),

/***/ "./src/app/property/property-step10/property-step10.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/property/property-step10/property-step10.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L3Byb3BlcnR5LXN0ZXAxMC9wcm9wZXJ0eS1zdGVwMTAucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/property/property-step10/property-step10.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/property/property-step10/property-step10.page.ts ***!
  \******************************************************************/
/*! exports provided: PropertyStep10Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyStep10Page", function() { return PropertyStep10Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let PropertyStep10Page = class PropertyStep10Page {
    constructor(navCtrl, _cS, route, router, statusBar) {
        this.navCtrl = navCtrl;
        this._cS = _cS;
        this.route = route;
        this.router = router;
        this.statusBar = statusBar;
        this.route.queryParams.subscribe(params => {
            if (params && params.step) {
                this.Claim_number = params.step;
            }
        });
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    submitFeedBack(claim_id, Feedback) {
        var body = {
            claimid: +claim_id,
            claimfeedback: Feedback
        };
        this._cS.Display_Loader(true);
        this._cS.post_API(this._cS.URL_Claim_Feedback(), body)
            .subscribe((data) => {
            if (data.status == 0) {
                // this.router.navigate(['/home']);
                // this._cS.Display_Toaster('success', 'Thank you for your valuable feedback !!');
            }
            else {
                // this._cS.Display_Toaster('error', data.message);
            }
            this._cS.Display_Loader(false);
        }, err => {
            this._cS.Display_Loader(false);
        });
    }
    ;
    ngOnInit() {
    }
};
PropertyStep10Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_2__["CommonMockService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] }
];
PropertyStep10Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property-step10',
        template: __webpack_require__(/*! raw-loader!./property-step10.page.html */ "./node_modules/raw-loader/index.js!./src/app/property/property-step10/property-step10.page.html"),
        styles: [__webpack_require__(/*! ./property-step10.page.scss */ "./src/app/property/property-step10/property-step10.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_2__["CommonMockService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])
], PropertyStep10Page);



/***/ })

}]);
//# sourceMappingURL=property-property-step10-property-step10-module-es2015.js.map