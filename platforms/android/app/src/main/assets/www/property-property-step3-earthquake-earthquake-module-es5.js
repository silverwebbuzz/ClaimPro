(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["property-property-step3-earthquake-earthquake-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/property/property-step3/earthquake/earthquake.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/property/property-step3/earthquake/earthquake.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons>\n        <ion-button color=\"primary\" (click)=\"back()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons> -->\n    <ion-title color=\"primary\" class=\"head\">Earthquake</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]=\"earthquake_form\" autocomplete=\"off\">\n\n    <ion-label class=\"lbl-contact\">Earthquake Details</ion-label>\n\n    <div class=\"div-que add-margin\">\n\n      <ion-label class=\"lbl-head\">Does the ground on your property appear to have been damaged?</ion-label>\n\n      <ion-radio-group formControlName=\"earthquake_ground_damage\">\n        <ion-item lines=\"none\" class=\"items-radio\">\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"items-radio\">\n          <ion-label class=\"lbl-radio\">No</ion-label>\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n    </div>\n\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">What appears to have been damaged?</ion-label>\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"earthquake_damage\"\n        class=\"btn-select bg\" mode=\"md\">\n        <ion-select-option value=\"Foundations of building\">Foundations of building</ion-select-option>\n        <ion-select-option value=\"Other\">Other</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"earthquake_form.controls.earthquake_damage.hasError('required') && earthquake_form.controls.earthquake_damage.touched\">\n      <p class=\"content\">Please Select Required Field!</p>\n    </ion-item>\n\n    <!-- Other -->\n    <div *ngIf=\"earthquake_form.get('earthquake_damage').value == 'Other'\">\n      <ion-item lines=\"none\" class=\"input-item add\">\n        <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"earthquake_damage_other\" class=\"input-box\">\n        </ion-input>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"earthquake_form.controls.earthquake_damage_other.hasError('required') && earthquake_form.controls.earthquake_damage_other.touched\">\n        <p class=\"content\">Please Enter Required Field!</p>\n      </ion-item>\n    </div>\n\n  </form>\n\n</ion-content>\n\n<ion-footer class=\"btns-footer\">\n  <ion-row class=\"row-footer\">\n    <ion-col class=\"col-footer border-R\">\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col class=\"col-footer border-L\">\n      <ion-button expand=\"full\" class=\"btn-next\">\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>"

/***/ }),

/***/ "./src/app/property/property-step3/earthquake/earthquake.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/property/property-step3/earthquake/earthquake.module.ts ***!
  \*************************************************************************/
/*! exports provided: EarthquakePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarthquakePageModule", function() { return EarthquakePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _earthquake_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./earthquake.page */ "./src/app/property/property-step3/earthquake/earthquake.page.ts");







var routes = [
    {
        path: '',
        component: _earthquake_page__WEBPACK_IMPORTED_MODULE_6__["EarthquakePage"]
    }
];
var EarthquakePageModule = /** @class */ (function () {
    function EarthquakePageModule() {
    }
    EarthquakePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_earthquake_page__WEBPACK_IMPORTED_MODULE_6__["EarthquakePage"]]
        })
    ], EarthquakePageModule);
    return EarthquakePageModule;
}());



/***/ }),

/***/ "./src/app/property/property-step3/earthquake/earthquake.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/property/property-step3/earthquake/earthquake.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L3Byb3BlcnR5LXN0ZXAzL2VhcnRocXVha2UvZWFydGhxdWFrZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/property/property-step3/earthquake/earthquake.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/property/property-step3/earthquake/earthquake.page.ts ***!
  \***********************************************************************/
/*! exports provided: EarthquakePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarthquakePage", function() { return EarthquakePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var EarthquakePage = /** @class */ (function () {
    function EarthquakePage(navCtrl, router, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.earthquake_fb();
    }
    EarthquakePage.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    EarthquakePage.prototype.earthquake_fb = function () {
        this.earthquake_form = this.formBuilder.group({
            earthquake_ground_damage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            earthquake_damage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            earthquake_damage_other: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    EarthquakePage.prototype.earthquakeNext = function () {
        for (var v in this.earthquake_form.controls) {
            this.earthquake_form.controls[v].markAsTouched();
        }
        if (this.earthquake_form.valid) {
            var body = {
                "earthquake_ground_damage": this.earthquake_form.value.earthquake_ground_damage,
                "earthquake_damage": this.earthquake_form.value.earthquake_damage,
                "earthquake_damage_other": this.earthquake_form.value.earthquake_damage_other,
            };
        }
    };
    EarthquakePage.prototype.ngOnInit = function () {
    };
    EarthquakePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    EarthquakePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
    ]; };
    EarthquakePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-earthquake',
            template: __webpack_require__(/*! raw-loader!./earthquake.page.html */ "./node_modules/raw-loader/index.js!./src/app/property/property-step3/earthquake/earthquake.page.html"),
            styles: [__webpack_require__(/*! ./earthquake.page.scss */ "./src/app/property/property-step3/earthquake/earthquake.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
    ], EarthquakePage);
    return EarthquakePage;
}());



/***/ })

}]);
//# sourceMappingURL=property-property-step3-earthquake-earthquake-module-es5.js.map