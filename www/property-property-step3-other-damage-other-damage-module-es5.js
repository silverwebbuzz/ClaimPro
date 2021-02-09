(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["property-property-step3-other-damage-other-damage-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/property/property-step3/other-damage/other-damage.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/property/property-step3/other-damage/other-damage.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons>\n        <ion-button color=\"primary\" (click)=\"back()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons> -->\n    <ion-title color=\"primary\" class=\"head\">Other</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]=\"other_damage_form\" autocomplete=\"off\">\n\n    <ion-label class=\"lbl-contact\">Other Details</ion-label>\n\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Severity of damage</ion-label>\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"severity_damage\"\n        class=\"btn-select bg\" mode=\"md\">\n        <ion-select-option value=\"Low\">Low</ion-select-option>\n        <ion-select-option value=\"Medium\">Medium</ion-select-option>\n        <ion-select-option value=\"High\">High</ion-select-option>\n        <ion-select-option value=\"Critical\">Critical</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"other_damage_form.controls.severity_damage.hasError('required') && other_damage_form.controls.severity_damage.touched\">\n      <p class=\"content\">Please Select Required Field!</p>\n    </ion-item>\n\n    <ion-label class=\"lbl-contact-blk add-margin\">Attach a list of items damaged</ion-label>\n\n    <div class=\"div-docs add-margin\">\n\n      <ion-row class=\"row-card\">\n        <ion-col size=\"6\" class=\"col-card\">\n          <ion-card class=\"card-upload\">\n            <ion-button fill=\"clear\" class=\"btn-close\" (click)=\"delete()\">\n              <ion-icon name=\"close\"></ion-icon>\n            </ion-button>\n            <img src=\"../../../assets/images/insurence-logo.png\" class=\"img-upload\" />\n            <ion-label class=\"lbl-filename\">FileName</ion-label>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <div class=\"upload-btn-wrapper\">\n        <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach Documents</ion-button>\n        <input type=\"file\" (change)=\"fileUpload($event)\"\n          accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\n      </div>\n\n      <!-- <ion-item no-padding lines=\"none\" class=\"validator-error error\"\n        *ngIf=\"other_damage_form.controls.myfile.hasError('required') && other_damage_form.controls.myfile.touched\">\n        <p class=\"content text\">Please Select Your Documents!</p>\n      </ion-item> -->\n\n    </div>\n\n    <ion-label class=\"lbl-contact-blk add-margin\">Attach up to 6 images of damage</ion-label>\n\n    <div class=\"div-docs add-margin\">\n\n      <ion-row class=\"row-card\">\n        <ion-col size=\"6\" class=\"col-card\">\n          <ion-card class=\"card-upload\">\n            <ion-button fill=\"clear\" class=\"btn-close\" (click)=\"delete()\">\n              <ion-icon name=\"close\"></ion-icon>\n            </ion-button>\n            <img src=\"../../../assets/images/insurence-logo.png\" class=\"img-upload\" />\n            <ion-label class=\"lbl-filename\">FileName</ion-label>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <div class=\"upload-btn-wrapper\">\n        <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach Documents</ion-button>\n        <input type=\"file\" (change)=\"fileUpload($event)\"\n          accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\n      </div>\n\n      <!-- <ion-item no-padding lines=\"none\" class=\"validator-error error\"\n        *ngIf=\"other_damage_form.controls.myfile.hasError('required') && other_damage_form.controls.myfile.touched\">\n        <p class=\"content text\">Please Select Your Documents!</p>\n      </ion-item> -->\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n<ion-footer class=\"btns-footer\">\n  <ion-row class=\"row-footer\">\n    <ion-col class=\"col-footer border-R\">\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col class=\"col-footer border-L\">\n      <ion-button expand=\"full\" class=\"btn-next\">\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>"

/***/ }),

/***/ "./src/app/property/property-step3/other-damage/other-damage.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/property/property-step3/other-damage/other-damage.module.ts ***!
  \*****************************************************************************/
/*! exports provided: OtherDamagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherDamagePageModule", function() { return OtherDamagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _other_damage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other-damage.page */ "./src/app/property/property-step3/other-damage/other-damage.page.ts");







var routes = [
    {
        path: '',
        component: _other_damage_page__WEBPACK_IMPORTED_MODULE_6__["OtherDamagePage"]
    }
];
var OtherDamagePageModule = /** @class */ (function () {
    function OtherDamagePageModule() {
    }
    OtherDamagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_other_damage_page__WEBPACK_IMPORTED_MODULE_6__["OtherDamagePage"]]
        })
    ], OtherDamagePageModule);
    return OtherDamagePageModule;
}());



/***/ }),

/***/ "./src/app/property/property-step3/other-damage/other-damage.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/property/property-step3/other-damage/other-damage.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L3Byb3BlcnR5LXN0ZXAzL290aGVyLWRhbWFnZS9vdGhlci1kYW1hZ2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/property/property-step3/other-damage/other-damage.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/property/property-step3/other-damage/other-damage.page.ts ***!
  \***************************************************************************/
/*! exports provided: OtherDamagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherDamagePage", function() { return OtherDamagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var OtherDamagePage = /** @class */ (function () {
    function OtherDamagePage(navCtrl, router, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.other_damage_fb();
    }
    OtherDamagePage.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    OtherDamagePage.prototype.other_damage_fb = function () {
        this.other_damage_form = this.formBuilder.group({
            severity_damage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    OtherDamagePage.prototype.otherDamageNext = function () {
        for (var v in this.other_damage_form.controls) {
            this.other_damage_form.controls[v].markAsTouched();
        }
        if (this.other_damage_form.valid) {
            var body = {
                "severity_damage": this.other_damage_form.value.severity_damage,
            };
        }
    };
    OtherDamagePage.prototype.ngOnInit = function () {
    };
    OtherDamagePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    OtherDamagePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
    ]; };
    OtherDamagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-other-damage',
            template: __webpack_require__(/*! raw-loader!./other-damage.page.html */ "./node_modules/raw-loader/index.js!./src/app/property/property-step3/other-damage/other-damage.page.html"),
            styles: [__webpack_require__(/*! ./other-damage.page.scss */ "./src/app/property/property-step3/other-damage/other-damage.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
    ], OtherDamagePage);
    return OtherDamagePage;
}());



/***/ })

}]);
//# sourceMappingURL=property-property-step3-other-damage-other-damage-module-es5.js.map