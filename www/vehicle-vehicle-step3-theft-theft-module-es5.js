(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle-vehicle-step3-theft-theft-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle-step3/theft/theft.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicle/vehicle-step3/theft/theft.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n        <ion-button color=\"primary\" (click)=\"back()\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Theft</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"theft_form\" autocomplete=\"off\">\r\n\r\n    <ion-label class=\"lbl-contact\">Theft Details</ion-label>\r\n\r\n    <div class=\"div-que add-margin\">\r\n\r\n      <ion-label class=\"lbl-head\">Was the vehicle locked?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"vehicle_was_locked\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n\r\n    </div>\r\n\r\n    <div class=\"div-que add-margin\">\r\n\r\n      <ion-label class=\"lbl-head\">Was the vehicle stolen?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"vehicle_was_stolen\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n\r\n    </div>\r\n\r\n    <div class=\"div-Y\" *ngIf=\"this.theft_form.get('vehicle_was_stolen').value == 'true'\">\r\n\r\n      <div class=\"div-que add-margin\">\r\n\r\n        <ion-label class=\"lbl-head\">Has the vehicle been recovered?</ion-label>\r\n\r\n        <ion-radio-group formControlName=\"vehicle_recovered\">\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">No</ion-label>\r\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/vehicle/vehicle-step3/theft/theft.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step3/theft/theft.module.ts ***!
  \*************************************************************/
/*! exports provided: TheftPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheftPageModule", function() { return TheftPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _theft_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theft.page */ "./src/app/vehicle/vehicle-step3/theft/theft.page.ts");







var routes = [
    {
        path: '',
        component: _theft_page__WEBPACK_IMPORTED_MODULE_6__["TheftPage"]
    }
];
var TheftPageModule = /** @class */ (function () {
    function TheftPageModule() {
    }
    TheftPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_theft_page__WEBPACK_IMPORTED_MODULE_6__["TheftPage"]]
        })
    ], TheftPageModule);
    return TheftPageModule;
}());



/***/ }),

/***/ "./src/app/vehicle/vehicle-step3/theft/theft.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step3/theft/theft.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUvdmVoaWNsZS1zdGVwMy90aGVmdC90aGVmdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/vehicle/vehicle-step3/theft/theft.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/vehicle/vehicle-step3/theft/theft.page.ts ***!
  \***********************************************************/
/*! exports provided: TheftPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheftPage", function() { return TheftPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");







var TheftPage = /** @class */ (function () {
    function TheftPage(navCtrl, router, _cS, route, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.route = route;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.theft_fb();
    }
    TheftPage.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    TheftPage.prototype.theft_fb = function () {
        this.theft_form = this.formBuilder.group({
            vehicle_was_locked: [null],
            vehicle_was_stolen: [null],
            vehicle_recovered: [null],
        });
    };
    TheftPage.prototype.theftNext = function () {
        for (var v in this.theft_form.controls) {
            this.theft_form.controls[v].markAsTouched();
        }
        if (this.theft_form.valid) {
            var step4 = {
                "vehicle_was_locked": this.theft_form.value.vehicle_was_locked,
                "vehicle_was_stolen": this.theft_form.value.vehicle_was_stolen,
                "vehicle_recovered": this.theft_form.value.vehicle_recovered,
            };
        }
    };
    TheftPage.prototype.ngOnInit = function () {
    };
    TheftPage.prototype.next = function () {
        this.router.navigate(['/vehicle-step5']);
    };
    TheftPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    TheftPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
    ]; };
    TheftPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-theft',
            template: __webpack_require__(/*! raw-loader!./theft.page.html */ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle-step3/theft/theft.page.html"),
            styles: [__webpack_require__(/*! ./theft.page.scss */ "./src/app/vehicle/vehicle-step3/theft/theft.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
    ], TheftPage);
    return TheftPage;
}());



/***/ })

}]);
//# sourceMappingURL=vehicle-vehicle-step3-theft-theft-module-es5.js.map