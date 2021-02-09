(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle-vehicle-step9-vehicle-step9-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle-step9/vehicle-step9.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicle/vehicle-step9/vehicle-step9.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons>\n      <ion-button color=\"primary\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n    <ion-title color=\"primary\" class=\"head\">Done</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"page-done\">\n\n  <ion-label class=\"lbl-head\">Claim completed!</ion-label>\n  <ion-label color=\"primary\" class=\"lbl-desc\">One of our consultants will be in contact with you shortly. A confirmation email is on the way. Your reference number is:</ion-label>\n  <ion-label color=\"primary\" class=\"lbl-ref\">{{Claim_number}}</ion-label>\n  <ion-label color=\"primary\" class=\"lbl-que\">Did you find this claim process helpful?</ion-label>\n  <ion-row>\n    <ion-col size=\"4\">\n      <ion-icon color=\"primary\" name=\"happy\" mode=\"md\" class=\"icon\"><a class=\"col-md-4\" (click)=\"submitFeedBack(Claim_number, 'A')\"></a></ion-icon>\n    </ion-col>\n    <ion-col size=\"4\">\n        <ion-icon color=\"primary\" name=\"happy\" mode=\"md\" class=\"icon\"> <a class=\"col-md-4\" (click)=\"submitFeedBack(Claim_number, 'B')\"></a></ion-icon>\n    </ion-col>\n    <ion-col size=\"4\">\n        <ion-icon color=\"primary\" name=\"happy\" mode=\"md\" class=\"icon\"> <a class=\"col-md-4\" (click)=\"submitFeedBack(Claim_number, 'C')\"></a></ion-icon>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n<ion-footer class=\"btns-footer\">\n  <ion-row class=\"row-footer\">\n    <ion-col class=\"col-footer\">\n      <ion-button expand=\"full\" class=\"btn-next\"  routerLink=\"/home\">Go Home</ion-button>\n      <!-- (click)=\"otherStep3Next()\"    routerLink=\"/step4\" -->\n    </ion-col>\n  </ion-row>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/vehicle/vehicle-step9/vehicle-step9.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step9/vehicle-step9.module.ts ***!
  \***************************************************************/
/*! exports provided: VehicleStep9PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleStep9PageModule", function() { return VehicleStep9PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vehicle_step9_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehicle-step9.page */ "./src/app/vehicle/vehicle-step9/vehicle-step9.page.ts");







var routes = [
    {
        path: '',
        component: _vehicle_step9_page__WEBPACK_IMPORTED_MODULE_6__["VehicleStep9Page"]
    }
];
var VehicleStep9PageModule = /** @class */ (function () {
    function VehicleStep9PageModule() {
    }
    VehicleStep9PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vehicle_step9_page__WEBPACK_IMPORTED_MODULE_6__["VehicleStep9Page"]]
        })
    ], VehicleStep9PageModule);
    return VehicleStep9PageModule;
}());



/***/ }),

/***/ "./src/app/vehicle/vehicle-step9/vehicle-step9.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step9/vehicle-step9.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUvdmVoaWNsZS1zdGVwOS92ZWhpY2xlLXN0ZXA5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/vehicle/vehicle-step9/vehicle-step9.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step9/vehicle-step9.page.ts ***!
  \*************************************************************/
/*! exports provided: VehicleStep9Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleStep9Page", function() { return VehicleStep9Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");






var VehicleStep9Page = /** @class */ (function () {
    function VehicleStep9Page(navCtrl, _cS, route, router, statusBar) {
        var _this = this;
        this.navCtrl = navCtrl;
        this._cS = _cS;
        this.route = route;
        this.router = router;
        this.statusBar = statusBar;
        this.route.queryParams.subscribe(function (params) {
            if (params && params.step) {
                _this.Claim_number = params.step;
            }
        });
    }
    VehicleStep9Page.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    VehicleStep9Page.prototype.submitFeedBack = function (claim_id, Feedback) {
        var _this = this;
        var body = {
            claimid: +claim_id,
            claimfeedback: Feedback
        };
        this._cS.Display_Loader(true);
        this._cS.post_API(this._cS.URL_Claim_Feedback(), body)
            .subscribe(function (data) {
            if (data.status == 0) {
                // this.router.navigate(['/home']);
                // this._cS.Display_Toaster('success', 'Thank you for your valuable feedback !!');
            }
            else {
                // this._cS.Display_Toaster('error', data.message);
            }
            _this._cS.Display_Loader(false);
        }, function (err) {
            _this._cS.Display_Loader(false);
        });
    };
    ;
    VehicleStep9Page.prototype.ngOnInit = function () {
    };
    VehicleStep9Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_3__["CommonMockService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] }
    ]; };
    VehicleStep9Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle-step9',
            template: __webpack_require__(/*! raw-loader!./vehicle-step9.page.html */ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle-step9/vehicle-step9.page.html"),
            styles: [__webpack_require__(/*! ./vehicle-step9.page.scss */ "./src/app/vehicle/vehicle-step9/vehicle-step9.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_3__["CommonMockService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
    ], VehicleStep9Page);
    return VehicleStep9Page;
}());



/***/ })

}]);
//# sourceMappingURL=vehicle-vehicle-step9-vehicle-step9-module-es5.js.map