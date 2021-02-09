(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["property-property-step3-weather-related-weather-related-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/property/property-step3/weather-related/weather-related.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/property/property-step3/weather-related/weather-related.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons>\n        <ion-button color=\"primary\" (click)=\"back()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons> -->\n    <ion-title color=\"primary\" class=\"head\">Weather Related</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]=\"weather_related_form\" autocomplete=\"off\">\n\n    <ion-label class=\"lbl-contact\">Weather Related Details</ion-label>\n\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Type of damage</ion-label>\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"class_claim_sub\"\n        class=\"btn-select bg\" mode=\"md\">\n        <ion-select-option value=\"Accidental Damage\">Accidental Damage</ion-select-option>\n        <ion-select-option value=\"Personal Accident Injury or Illness\">Personal Accident Injury or Illness</ion-select-option>\n        <ion-select-option value=\"Crime\">Crime</ion-select-option>\n        <ion-select-option value=\"Earthquake\">Earthquake</ion-select-option>\n        <ion-select-option value=\"Escape of Water\">Escape of Water</ion-select-option>\n        <ion-select-option value=\"Financial Loss\">Financial Loss</ion-select-option>\n        <ion-select-option value=\"Fire\">Fire</ion-select-option>\n        <ion-select-option value=\"Impact\">Impact</ion-select-option>\n        <ion-select-option value=\"Flood\">Flood</ion-select-option>\n        <ion-select-option value=\"Motor Accident\">Motor Accident</ion-select-option>\n        <ion-select-option value=\"Accidental Loss\">Accidental Loss</ion-select-option>\n        <ion-select-option value=\"Mechanical/Electrical Failure\">Mechanical/Electrical Failure</ion-select-option>\n        <ion-select-option value=\"Electronic Failure\">Electronic Failure</ion-select-option>\n        <ion-select-option value=\"Weather\">Weather</ion-select-option>\n        <ion-select-option value=\"Medical Malpractice\">Medical Malpractice</ion-select-option>\n        <ion-select-option value=\"Professional Negligence\">Professional Negligence</ion-select-option>\n        <ion-select-option value=\"Property damage\">Property damage</ion-select-option>\n        <ion-select-option value=\"Vehicle damage\">Vehicle damage</ion-select-option>\n        <ion-select-option value=\"Third Party Liability Property Loss/Damage\">Third Party Liability Property Loss/Damage</ion-select-option>\n        <ion-select-option value=\"Third Party Liability Vehicle Damage\">Third Party Liability Vehicle Damage</ion-select-option>\n        <ion-select-option value=\"Vehicle Windscreen/Glass\">Vehicle Windscreen/Glass</ion-select-option>\n        <ion-select-option value=\"Management Liability\">Management Liability</ion-select-option>\n        <ion-select-option value=\"Cyber\">Cyber</ion-select-option>\n        <ion-select-option value=\"Third Party Liability Injury\">Third Party Liability Injury</ion-select-option>\n        <ion-select-option value=\"Excess Reimbursement\">Excess Reimbursement</ion-select-option>\n        <ion-select-option value=\"Firearm\">Firearm</ion-select-option>\n        <ion-select-option value=\"Other\">Other</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"weather_related_form.controls.class_claim_sub.hasError('required') && weather_related_form.controls.class_claim_sub.touched\">\n      <p class=\"content\">Please Select Required Field!</p>\n    </ion-item>\n\n    <!-- Other -->\n    <div *ngIf=\"weather_related_form.get('class_claim_sub').value == 'Other'\">\n      <ion-item lines=\"none\" class=\"input-item add\">\n        <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"class_claim_sub_other\" class=\"input-box\">\n        </ion-input>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"weather_related_form.controls.class_claim_sub_other.hasError('required') && weather_related_form.controls.class_claim_sub_other.touched\">\n        <p class=\"content\">Please Enter Required Field!</p>\n      </ion-item>\n    </div>\n\n  </form>\n\n</ion-content>\n\n<ion-footer class=\"btns-footer\">\n  <ion-row class=\"row-footer\">\n    <ion-col class=\"col-footer border-R\">\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col class=\"col-footer border-L\">\n      <ion-button expand=\"full\" class=\"btn-next\">\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>"

/***/ }),

/***/ "./src/app/property/property-step3/weather-related/weather-related.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/property/property-step3/weather-related/weather-related.module.ts ***!
  \***********************************************************************************/
/*! exports provided: WeatherRelatedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherRelatedPageModule", function() { return WeatherRelatedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _weather_related_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weather-related.page */ "./src/app/property/property-step3/weather-related/weather-related.page.ts");







var routes = [
    {
        path: '',
        component: _weather_related_page__WEBPACK_IMPORTED_MODULE_6__["WeatherRelatedPage"]
    }
];
var WeatherRelatedPageModule = /** @class */ (function () {
    function WeatherRelatedPageModule() {
    }
    WeatherRelatedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_weather_related_page__WEBPACK_IMPORTED_MODULE_6__["WeatherRelatedPage"]]
        })
    ], WeatherRelatedPageModule);
    return WeatherRelatedPageModule;
}());



/***/ }),

/***/ "./src/app/property/property-step3/weather-related/weather-related.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/property/property-step3/weather-related/weather-related.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L3Byb3BlcnR5LXN0ZXAzL3dlYXRoZXItcmVsYXRlZC93ZWF0aGVyLXJlbGF0ZWQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/property/property-step3/weather-related/weather-related.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/property/property-step3/weather-related/weather-related.page.ts ***!
  \*********************************************************************************/
/*! exports provided: WeatherRelatedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherRelatedPage", function() { return WeatherRelatedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var WeatherRelatedPage = /** @class */ (function () {
    function WeatherRelatedPage(navCtrl, router, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.weather_related_fb();
    }
    WeatherRelatedPage.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    WeatherRelatedPage.prototype.weather_related_fb = function () {
        this.weather_related_form = this.formBuilder.group({
            class_claim_sub: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            class_claim_sub_other: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    WeatherRelatedPage.prototype.weatherRelatedNext = function () {
        for (var v in this.weather_related_form.controls) {
            this.weather_related_form.controls[v].markAsTouched();
        }
        if (this.weather_related_form.valid) {
            var body = {
                "class_claim_sub": this.weather_related_form.value.class_claim_sub,
                "class_claim_sub_other": this.weather_related_form.value.class_claim_sub_other,
            };
        }
    };
    WeatherRelatedPage.prototype.ngOnInit = function () {
    };
    WeatherRelatedPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    WeatherRelatedPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
    ]; };
    WeatherRelatedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weather-related',
            template: __webpack_require__(/*! raw-loader!./weather-related.page.html */ "./node_modules/raw-loader/index.js!./src/app/property/property-step3/weather-related/weather-related.page.html"),
            styles: [__webpack_require__(/*! ./weather-related.page.scss */ "./src/app/property/property-step3/weather-related/weather-related.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
    ], WeatherRelatedPage);
    return WeatherRelatedPage;
}());



/***/ })

}]);
//# sourceMappingURL=property-property-step3-weather-related-weather-related-module-es5.js.map