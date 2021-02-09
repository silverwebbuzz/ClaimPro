(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["property-property-step3-accidental-damage-accidental-damage-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/property/property-step3/accidental-damage/accidental-damage.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/property/property-step3/accidental-damage/accidental-damage.page.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons>\n      <ion-button color=\"primary\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n    <ion-title color=\"primary\" class=\"head\">Accidental Damage</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]=\"accidental_form\" autocomplete=\"off\">\n\n    <ion-label class=\"lbl-contact\">Accidental Damage Details</ion-label>\n\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Type of resultant damage</ion-label>\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"resultant_damage\"\n        class=\"btn-select bg\" mode=\"md\">\n        <ion-select-option value=\"Water Damage\">Water Damage</ion-select-option>\n        <ion-select-option value=\"Fire\">Fire</ion-select-option>\n        <ion-select-option value=\"Smoke\">Smoke</ion-select-option>\n        <ion-select-option value=\"Dent\">Dent</ion-select-option>\n        <ion-select-option value=\"Scratch\">Scratch</ion-select-option>\n        <ion-select-option value=\"Broken\">Broken</ion-select-option>\n        <ion-select-option value=\"Lost\">Lost</ion-select-option>\n        <ion-select-option value=\"Burnt\">Burnt</ion-select-option>\n        <ion-select-option value=\"Chipped\">Chipped</ion-select-option>\n        <ion-select-option value=\"Other\">Other</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"accidental_form.controls.resultant_damage.hasError('required') && accidental_form.controls.resultant_damage.touched\">\n      <p class=\"content\">Please Select Required Field!</p>\n    </ion-item>\n\n    <!-- Other -->\n    <div *ngIf=\"accidental_form.get('resultant_damage').value == 'Other'\">\n      <ion-item lines=\"none\" class=\"input-item add\">\n        <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"resultant_damage_other\" class=\"input-box\">\n        </ion-input>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"accidental_form.controls.resultant_damage_other.hasError('required') && accidental_form.controls.resultant_damage_other.touched\">\n        <p class=\"content\">Please Enter Required Field!</p>\n      </ion-item>\n    </div>\n\n  </form>\n\n</ion-content>\n\n<ion-footer class=\"btns-footer\">\n  <ion-row class=\"row-footer\">\n    <ion-col class=\"col-footer border-R\">\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col class=\"col-footer border-L\">\n      <ion-button expand=\"full\" class=\"btn-next\">\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>"

/***/ }),

/***/ "./src/app/property/property-step3/accidental-damage/accidental-damage.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/property/property-step3/accidental-damage/accidental-damage.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AccidentalDamagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccidentalDamagePageModule", function() { return AccidentalDamagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _accidental_damage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accidental-damage.page */ "./src/app/property/property-step3/accidental-damage/accidental-damage.page.ts");







var routes = [
    {
        path: '',
        component: _accidental_damage_page__WEBPACK_IMPORTED_MODULE_6__["AccidentalDamagePage"]
    }
];
var AccidentalDamagePageModule = /** @class */ (function () {
    function AccidentalDamagePageModule() {
    }
    AccidentalDamagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_accidental_damage_page__WEBPACK_IMPORTED_MODULE_6__["AccidentalDamagePage"]]
        })
    ], AccidentalDamagePageModule);
    return AccidentalDamagePageModule;
}());



/***/ }),

/***/ "./src/app/property/property-step3/accidental-damage/accidental-damage.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/property/property-step3/accidental-damage/accidental-damage.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L3Byb3BlcnR5LXN0ZXAzL2FjY2lkZW50YWwtZGFtYWdlL2FjY2lkZW50YWwtZGFtYWdlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/property/property-step3/accidental-damage/accidental-damage.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/property/property-step3/accidental-damage/accidental-damage.page.ts ***!
  \*************************************************************************************/
/*! exports provided: AccidentalDamagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccidentalDamagePage", function() { return AccidentalDamagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AccidentalDamagePage = /** @class */ (function () {
    // property_damage_type: any = '';
    function AccidentalDamagePage(navCtrl, router, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        //this.property_damage_type = localStorage.getItem('property_damage_type');
        this.accidental_fb();
    }
    AccidentalDamagePage.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    AccidentalDamagePage.prototype.accidental_fb = function () {
        this.accidental_form = this.formBuilder.group({
            resultant_damage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            resultant_damage_other: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    AccidentalDamagePage.prototype.accidentalNext = function () {
        for (var v in this.accidental_form.controls) {
            this.accidental_form.controls[v].markAsTouched();
        }
        if (this.accidental_form.valid) {
            var body = {
                "resultant_damage": this.accidental_form.value.resultant_damage,
                "resultant_damage_other": this.accidental_form.value.resultant_damage_other,
            };
        }
    };
    AccidentalDamagePage.prototype.ngOnInit = function () {
    };
    // next(){
    //   const damageTypeArray = ['Other', 'Weather related', 'Escape of liquid', 'Earthquake']
    //   if(damageTypeArray.indexOf(this.property_damage_type) > -1 ){
    //     this.router.navigateByUrl('/property-step6');
    //   }
    //   else{
    //     this.router.navigateByUrl('/property-step5');
    //   }
    // }
    AccidentalDamagePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    AccidentalDamagePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
    ]; };
    AccidentalDamagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accidental-damage',
            template: __webpack_require__(/*! raw-loader!./accidental-damage.page.html */ "./node_modules/raw-loader/index.js!./src/app/property/property-step3/accidental-damage/accidental-damage.page.html"),
            styles: [__webpack_require__(/*! ./accidental-damage.page.scss */ "./src/app/property/property-step3/accidental-damage/accidental-damage.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
    ], AccidentalDamagePage);
    return AccidentalDamagePage;
}());



/***/ })

}]);
//# sourceMappingURL=property-property-step3-accidental-damage-accidental-damage-module-es5.js.map