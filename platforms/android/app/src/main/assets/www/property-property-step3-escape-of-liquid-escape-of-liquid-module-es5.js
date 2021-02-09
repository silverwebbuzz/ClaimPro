(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["property-property-step3-escape-of-liquid-escape-of-liquid-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/property/property-step3/escape-of-liquid/escape-of-liquid.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/property/property-step3/escape-of-liquid/escape-of-liquid.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <!-- <ion-buttons>\n        <ion-button color=\"primary\" (click)=\"back()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons> -->\n      <ion-title color=\"primary\" class=\"head\">Escape of liquid</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n  \n    <form [formGroup]=\"escape_of_liquid_form\" autocomplete=\"off\">\n\n        <ion-label class=\"lbl-contact\">Escape of liquid Details</ion-label>\n  \n        <ion-item lines=\"none\" class=\"item-dropdown add\">\n          <ion-label position=\"stacked\" class=\"lbl-dropdown\">How did the liquid escape?</ion-label>\n          <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"how_liquid_escape\"\n            class=\"btn-select bg\" mode=\"md\">\n            <ion-select-option value=\"From the pipes\">From the pipes</ion-select-option>\n            <ion-select-option value=\"From the wall\">From the wall</ion-select-option>\n            <ion-select-option value=\"From the roof\">From the roof</ion-select-option>\n            <ion-select-option value=\"Other\">Other</ion-select-option>\n          </ion-select>\n        </ion-item>\n  \n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"escape_of_liquid_form.controls.how_liquid_escape.hasError('required') && escape_of_liquid_form.controls.how_liquid_escape.touched\">\n          <p class=\"content\">Please Select Required Field!</p>\n        </ion-item>\n  \n        <!-- Other -->\n        <div *ngIf=\"escape_of_liquid_form.get('how_liquid_escape').value == 'Other'\">\n          <ion-item lines=\"none\" class=\"input-item add\">\n            <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\n            <ion-input type=\"text\" color=\"primary\" formControlName=\"how_liquid_escape_other\" class=\"input-box\">\n            </ion-input>\n          </ion-item>\n  \n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\n            *ngIf=\"escape_of_liquid_form.controls.how_liquid_escape_other.hasError('required') && escape_of_liquid_form.controls.how_liquid_escape_other.touched\">\n            <p class=\"content\">Please Enter Required Field!</p>\n          </ion-item>\n        </div>\n  \n        <ion-item lines=\"none\" class=\"item-dropdown add\">\n          <ion-label position=\"stacked\" class=\"lbl-dropdown\">Why did the liquid escape?</ion-label>\n          <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"why_liquid_escape\"\n            class=\"btn-select bg\" mode=\"md\">\n            <ion-select-option value=\"Broken Plumbing\">Broken Plumbing</ion-select-option>\n            <ion-select-option value=\"Other\">Other</ion-select-option>\n          </ion-select>\n        </ion-item>\n  \n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"escape_of_liquid_form.controls.why_liquid_escape.hasError('required') && escape_of_liquid_form.controls.why_liquid_escape.touched\">\n          <p class=\"content\">Please Select Required Field!</p>\n        </ion-item>\n  \n        <!-- Other -->\n        <div *ngIf=\"escape_of_liquid_form.get('why_liquid_escape').value == 'Other'\">\n          <ion-item lines=\"none\" class=\"input-item add\">\n            <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\n            <ion-input type=\"text\" color=\"primary\" formControlName=\"why_liquid_escape_other\" class=\"input-box\">\n            </ion-input>\n          </ion-item>\n  \n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\n            *ngIf=\"escape_of_liquid_form.controls.why_liquid_escape_other.hasError('required') && escape_of_liquid_form.controls.why_liquid_escape_other.touched\">\n            <p class=\"content\">Please Enter Required Field!</p>\n          </ion-item>\n        </div>\n  \n        <div class=\"div-que add-margin\">\n  \n          <ion-label class=\"lbl-head\">Is the liquid still escaping?</ion-label>\n  \n          <ion-radio-group formControlName=\"is_liquid_escaping\">\n            <ion-item lines=\"none\" class=\"items-radio\">\n              <ion-label class=\"lbl-radio\">Yes</ion-label>\n              <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\" class=\"items-radio\">\n              <ion-label class=\"lbl-radio\">No</ion-label>\n              <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n  \n        </div>\n  \n      </form>\n\n    </ion-content>\n    \n    <ion-footer class=\"btns-footer\">\n      <ion-row class=\"row-footer\">\n        <ion-col class=\"col-footer border-R\">\n          <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\n            <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col class=\"col-footer border-L\">\n          <ion-button expand=\"full\" class=\"btn-next\">\n            <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-footer>"

/***/ }),

/***/ "./src/app/property/property-step3/escape-of-liquid/escape-of-liquid.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/property/property-step3/escape-of-liquid/escape-of-liquid.module.ts ***!
  \*************************************************************************************/
/*! exports provided: EscapeOfLiquidPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscapeOfLiquidPageModule", function() { return EscapeOfLiquidPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _escape_of_liquid_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./escape-of-liquid.page */ "./src/app/property/property-step3/escape-of-liquid/escape-of-liquid.page.ts");







var routes = [
    {
        path: '',
        component: _escape_of_liquid_page__WEBPACK_IMPORTED_MODULE_6__["EscapeOfLiquidPage"]
    }
];
var EscapeOfLiquidPageModule = /** @class */ (function () {
    function EscapeOfLiquidPageModule() {
    }
    EscapeOfLiquidPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_escape_of_liquid_page__WEBPACK_IMPORTED_MODULE_6__["EscapeOfLiquidPage"]]
        })
    ], EscapeOfLiquidPageModule);
    return EscapeOfLiquidPageModule;
}());



/***/ }),

/***/ "./src/app/property/property-step3/escape-of-liquid/escape-of-liquid.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/property/property-step3/escape-of-liquid/escape-of-liquid.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L3Byb3BlcnR5LXN0ZXAzL2VzY2FwZS1vZi1saXF1aWQvZXNjYXBlLW9mLWxpcXVpZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/property/property-step3/escape-of-liquid/escape-of-liquid.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/property/property-step3/escape-of-liquid/escape-of-liquid.page.ts ***!
  \***********************************************************************************/
/*! exports provided: EscapeOfLiquidPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscapeOfLiquidPage", function() { return EscapeOfLiquidPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var EscapeOfLiquidPage = /** @class */ (function () {
    function EscapeOfLiquidPage(navCtrl, router, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.escape_of_liquid_fb();
    }
    EscapeOfLiquidPage.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    EscapeOfLiquidPage.prototype.escape_of_liquid_fb = function () {
        this.escape_of_liquid_form = this.formBuilder.group({
            how_liquid_escape: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            how_liquid_escape_other: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            why_liquid_escape: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            why_liquid_escape_other: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            is_liquid_escaping: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    EscapeOfLiquidPage.prototype.escapeOfLiquidNext = function () {
        for (var v in this.escape_of_liquid_form.controls) {
            this.escape_of_liquid_form.controls[v].markAsTouched();
        }
        if (this.escape_of_liquid_form.valid) {
            var body = {
                "how_liquid_escape": this.escape_of_liquid_form.value.how_liquid_escape,
                "how_liquid_escape_other": this.escape_of_liquid_form.value.how_liquid_escape_other,
                "why_liquid_escape": this.escape_of_liquid_form.value.why_liquid_escape,
                "why_liquid_escape_other": this.escape_of_liquid_form.value.why_liquid_escape_other,
                "is_liquid_escaping": this.escape_of_liquid_form.value.is_liquid_escaping,
            };
        }
    };
    EscapeOfLiquidPage.prototype.ngOnInit = function () {
    };
    EscapeOfLiquidPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    EscapeOfLiquidPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
    ]; };
    EscapeOfLiquidPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-escape-of-liquid',
            template: __webpack_require__(/*! raw-loader!./escape-of-liquid.page.html */ "./node_modules/raw-loader/index.js!./src/app/property/property-step3/escape-of-liquid/escape-of-liquid.page.html"),
            styles: [__webpack_require__(/*! ./escape-of-liquid.page.scss */ "./src/app/property/property-step3/escape-of-liquid/escape-of-liquid.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
    ], EscapeOfLiquidPage);
    return EscapeOfLiquidPage;
}());



/***/ })

}]);
//# sourceMappingURL=property-property-step3-escape-of-liquid-escape-of-liquid-module-es5.js.map