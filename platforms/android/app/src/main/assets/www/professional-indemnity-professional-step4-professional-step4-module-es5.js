(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["professional-indemnity-professional-step4-professional-step4-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/professional-indemnity/professional-step4/professional-step4.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/professional-indemnity/professional-step4/professional-step4.page.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Incident details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"professional_form_step4\" autocomplete=\"off\">\r\n\r\n    <ion-label class=\"lbl-contact\">Claimant details</ion-label>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">First Name</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"tp_christian_claimant\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"professional_form_step4.controls.tp_christian_claimant.hasError('required') && professional_form_step4.controls.tp_christian_claimant.touched\">\r\n      <p class=\"content\">Please Enter First Name!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Last Name</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"tp_name_claimant\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"professional_form_step4.controls.tp_name_claimant.hasError('required') && professional_form_step4.controls.tp_name_claimant.touched\">\r\n      <p class=\"content\">Please Enter Last Name!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Street</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"tp_postal_street\" color=\"primary\" class=\"input-box\" id=\"tp_postal_street\" (ionFocus)=\"tp_postalAddress()\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"professional_form_step4.controls.tp_postal_street.hasError('required') && professional_form_step4.controls.tp_postal_street.touched\">\r\n      <p class=\"content\">Please Enter Street!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Suburb/Town</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"tp_postal_suburb\" color=\"primary\" class=\"input-box\" id=\"tp_postal_suburb\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"professional_form_step4.controls.tp_postal_suburb.hasError('required') && professional_form_step4.controls.tp_postal_suburb.touched\">\r\n      <p class=\"content\">Please Enter Town!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">PostCode</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"tp_postal_postcode\" color=\"primary\" class=\"input-box\" id=\"tp_postal_postcode\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"professional_form_step4.controls.tp_postal_postcode.hasError('required') && professional_form_step4.controls.tp_postal_postcode.touched\">\r\n      <p class=\"content\">Please Enter Postcode!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">State</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"tp_postal_state\" color=\"primary\" class=\"input-box\" id=\"tp_postal_state\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"professional_form_step4.controls.tp_postal_state.hasError('required') && professional_form_step4.controls.tp_postal_state.touched\">\r\n      <p class=\"content\">Please Enter State!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Email</ion-label>\r\n      <ion-input type=\"email\" formControlName=\"tp_postal_email\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"professional_form_step4.controls.tp_postal_email.hasError('required') && professional_form_step4.controls.tp_postal_email.touched\">\r\n      <p class=\"content\">Email Address is required!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"professional_form_step4.controls.tp_postal_email.hasError('pattern') && professional_form_step4.controls.tp_postal_email.touched\">\r\n      <p class=\"content\">Please Enter a Valid Email Address!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Telephone</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"tp_tele_main\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"professional_form_step4.controls.tp_tele_main.hasError('required') && professional_form_step4.controls.tp_tele_main.touched\">\r\n      <p class=\"content\">Please Enter Telephone!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl lbl-over\">What was the nature of the contract with the claimant?</ion-label>\r\n      <ion-textarea rows=\"3\" formControlName=\"business_contract\" type=\"text\" color=\"primary\" class=\"input-box\">\r\n      </ion-textarea>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"professional_form_step4.controls.business_contract.hasError('required') && professional_form_step4.controls.business_contract.touched\">\r\n      <p class=\"content\">Please Enter Required Field!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"professional_form_step4.controls.business_contract.hasError('maxlength') && professional_form_step4.controls.business_contract.touched\">\r\n      <p class=\"content\">Allow Only 140 Characters!</p>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">What was the value of the contract?</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"contract_value\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"professional_form_step4.controls.contract_value.hasError('required') && professional_form_step4.controls.contract_value.touched\">\r\n      <p class=\"content\">Please Enter Required Field!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">Where did this occur?</ion-label>\r\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"where_loss_damage\" class=\"btn-select bg\" mode=\"md\" (ionChange)=\"occurchange($event.target.value)\">\r\n            <ion-select-option *ngFor=\"let opt of where_loss_damage | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n          <!-- <ion-select-option value=\"Risk Address\">Risk Address</ion-select-option>\r\n          <ion-select-option value=\"Another Location\">Another Location</ion-select-option>\r\n          <ion-select-option value=\"In Transit\">In Transit</ion-select-option>\r\n          <ion-select-option value=\"Other\">Other</ion-select-option> -->\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"professional_form_step4.controls.where_loss_damage.hasError('required') && professional_form_step4.controls.where_loss_damage.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Another Location, Risk Address -->\r\n    <div\r\n      *ngIf=\"professional_form_step4.get('where_loss_damage').value == '1343' || professional_form_step4.get('where_loss_damage').value == '1344'\">\r\n      <ion-label class=\"lbl-contact add-margin\">Address details</ion-label>\r\n\r\n  <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Street</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"risk_street\" color=\"primary\" class=\"input-box\" id=\"address_line_1\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step4.controls.risk_street.hasError('required') && professional_form_step4.controls.risk_street.touched\">\r\n        <p class=\"content\">Please Enter Street!</p>\r\n      </ion-item>\r\n  \r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Suburb/Town</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"risk_suburb\" color=\"primary\" class=\"input-box\" id=\"city\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step4.controls.risk_suburb.hasError('required') && professional_form_step4.controls.risk_suburb.touched\">\r\n        <p class=\"content\">Please Enter Town!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">State</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"risk_state\" color=\"primary\" class=\"input-box\" id=\"state\"></ion-input>\r\n        </ion-item>\r\n      \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"professional_form_step4.controls.risk_state.hasError('required') && professional_form_step4.controls.risk_state.touched\">\r\n            <p class=\"content\">Please Enter State!</p>\r\n          </ion-item>\r\n  \r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">PostCode</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"risk_postcode\" color=\"primary\" class=\"input-box\" id=\"postcode\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step4.controls.risk_postcode.hasError('required') && professional_form_step4.controls.risk_postcode.touched\">\r\n        <p class=\"content\">Please Enter Postcode!</p>\r\n      </ion-item>\r\n  \r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Country</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"risk_country\" color=\"primary\" class=\"input-box\" id=\"country\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step4.controls.risk_country.hasError('required') && professional_form_step4.controls.risk_country.touched\">\r\n        <p class=\"content\">Please Enter Country!</p>\r\n      </ion-item>\r\n\r\n    </div>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"professional_form_step4.get('where_loss_damage').value == '1346'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"where_loss_damage_other\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step4.controls.where_loss_damage_other.hasError('required') && professional_form_step4.controls.where_loss_damage_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\" (click)=\"professionalStep4Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/professional-indemnity/professional-step4/professional-step4.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step4/professional-step4.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ProfessionalStep4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalStep4PageModule", function() { return ProfessionalStep4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professional_step4_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./professional-step4.page */ "./src/app/professional-indemnity/professional-step4/professional-step4.page.ts");










var routes = [
    {
        path: '',
        component: _professional_step4_page__WEBPACK_IMPORTED_MODULE_9__["ProfessionalStep4Page"]
    }
];
var ProfessionalStep4PageModule = /** @class */ (function () {
    function ProfessionalStep4PageModule() {
    }
    ProfessionalStep4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_professional_step4_page__WEBPACK_IMPORTED_MODULE_9__["ProfessionalStep4Page"]],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__["CommonMockService"],
            ],
        })
    ], ProfessionalStep4PageModule);
    return ProfessionalStep4PageModule;
}());



/***/ }),

/***/ "./src/app/professional-indemnity/professional-step4/professional-step4.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step4/professional-step4.page.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Zlc3Npb25hbC1pbmRlbW5pdHkvcHJvZmVzc2lvbmFsLXN0ZXA0L3Byb2Zlc3Npb25hbC1zdGVwNC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/professional-indemnity/professional-step4/professional-step4.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step4/professional-step4.page.ts ***!
  \**************************************************************************************/
/*! exports provided: ProfessionalStep4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalStep4Page", function() { return ProfessionalStep4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var ProfessionalStep4Page = /** @class */ (function () {
    function ProfessionalStep4Page(navCtrl, router, _cS, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.professional_step4_fb();
        this.formControlValueChanged();
        this.setClaimData();
    }
    ProfessionalStep4Page.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    ProfessionalStep4Page.prototype.professional_step4_fb = function () {
        this.professional_form_step4 = this.formBuilder.group({
            tp_christian_claimant: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tp_name_claimant: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tp_postal_street: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tp_postal_suburb: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tp_postal_postcode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tp_postal_state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tp_postal_email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            tp_tele_main: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            business_contract: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(140), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            contract_value: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            where_loss_damage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            where_loss_damage_other: [null],
            risk_street: [null],
            risk_suburb: [null],
            risk_state: [null],
            risk_postcode: [null],
            risk_country: [null],
        });
    };
    ProfessionalStep4Page.prototype.formControlValueChanged = function () {
        var _this = this;
        this.professional_form_step4.get('where_loss_damage')
            .valueChanges.subscribe(function (val) {
            var risk_street = _this.professional_form_step4.get('risk_street');
            var risk_suburb = _this.professional_form_step4.get('risk_suburb');
            var risk_state = _this.professional_form_step4.get('risk_state');
            var risk_postcode = _this.professional_form_step4.get('risk_postcode');
            var risk_country = _this.professional_form_step4.get('risk_country');
            var where_loss_damage_other = _this.professional_form_step4.get('where_loss_damage_other');
            if (val == "1343" || val == "1344") {
                risk_street.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                risk_suburb.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                risk_state.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                risk_postcode.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                risk_country.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                risk_street.patchValue(null);
                risk_street.clearValidators();
                risk_street.updateValueAndValidity();
                risk_suburb.patchValue(null);
                risk_suburb.clearValidators();
                risk_suburb.updateValueAndValidity();
                risk_state.patchValue(null);
                risk_state.clearValidators();
                risk_state.updateValueAndValidity();
                risk_postcode.patchValue(null);
                risk_postcode.clearValidators();
                risk_postcode.updateValueAndValidity();
                risk_country.patchValue(null);
                risk_country.clearValidators();
                risk_country.updateValueAndValidity();
            }
            if (val == "1346") {
                where_loss_damage_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                where_loss_damage_other.patchValue(null);
                where_loss_damage_other.clearValidators();
                where_loss_damage_other.updateValueAndValidity();
            }
        });
    };
    ProfessionalStep4Page.prototype.professionalStep4Next = function () {
        var _this = this;
        for (var v in this.professional_form_step4.controls) {
            this.professional_form_step4.controls[v].markAsTouched();
        }
        if (this.professional_form_step4.valid) {
            /* Tp_postal Addres Start */
            var tp_postalStreetValue = null;
            var tp_postalSuburbValue = null;
            var tp_postalPostCodeValue = null;
            var tp_postalStateValue = null;
            if (document.getElementById("tp_postal_street")) {
                tp_postalStreetValue = document.getElementById("tp_postal_street").value;
            }
            if (document.getElementById("tp_postal_suburb")) {
                tp_postalSuburbValue = document.getElementById("tp_postal_suburb").value;
            }
            if (document.getElementById("tp_postal_postcode")) {
                tp_postalPostCodeValue = document.getElementById("tp_postal_postcode").value;
            }
            if (document.getElementById("tp_postal_state")) {
                tp_postalStateValue = document.getElementById("tp_postal_state").value;
            }
            /* Tp_postal Addres End */
            /* riskAddres Start */
            var riskStreetValue = null;
            var riskSuburbValue = null;
            var riskPostCodeValue = null;
            var riskStateValue = null;
            var riskcountryValue = null;
            if (document.getElementById("address_line_1")) {
                riskStreetValue = document.getElementById("address_line_1").value;
            }
            if (document.getElementById("city")) {
                riskSuburbValue = document.getElementById("city").value;
            }
            if (document.getElementById("postcode")) {
                riskPostCodeValue = document.getElementById("postcode").value;
            }
            if (document.getElementById("state")) {
                riskStateValue = document.getElementById("state").value;
            }
            if (document.getElementById("country")) {
                riskcountryValue = document.getElementById("country").value;
            }
            /* riskAddres End */
            var step4 = {
                "step": 'step4',
                "ClaimNumber": localStorage.getItem('ProfessionalClaimNumber'),
                "tp_christian_claimant": this.professional_form_step4.value.tp_christian_claimant,
                "tp_name_claimant": this.professional_form_step4.value.tp_name_claimant,
                "tp_postal_street": tp_postalStreetValue,
                "tp_postal_suburb": tp_postalSuburbValue,
                "tp_postal_postcode": tp_postalPostCodeValue,
                "tp_postal_state": tp_postalStateValue,
                "tp_postal_email": this.professional_form_step4.value.tp_postal_email,
                "tp_tele_main": this.professional_form_step4.value.tp_tele_main,
                "business_contract": this.professional_form_step4.value.business_contract,
                "contract_value": this.professional_form_step4.value.contract_value,
                "where_loss_damage": this.professional_form_step4.value.where_loss_damage,
                "risk_street": riskStreetValue,
                "risk_suburb": riskSuburbValue,
                "risk_state": riskStateValue,
                "risk_postcode": riskPostCodeValue,
                "risk_country": riskcountryValue,
                "where_loss_damage_other": this.professional_form_step4.value.where_loss_damage_other
            };
            this._cS.put_API(this._cS.URL_Professional_Claim_Post(), step4)
                .subscribe(function (data) {
                if (data.status == 0) {
                    _this.setClaimData();
                    _this.router.navigate(['/professional-step5']);
                }
                else {
                }
            }, function (err) {
            });
        }
    };
    ProfessionalStep4Page.prototype.ngOnInit = function () {
        var _this = this;
        var script = document.createElement("script");
        script.src = "https://api.addressfinder.io/assets/v3/widget.js";
        script.async = true;
        document.body.appendChild(script);
        // DropDown Option List Value 
        /* Where did the loss/damage occur? */
        this._cS.getoptionvalue_API(48)
            .subscribe(function (data) {
            if (data.status == 0) {
                _this.where_loss_damage = data.data;
            }
        });
    };
    ProfessionalStep4Page.prototype.occurchange = function ($event) {
        var _this = this;
        if ($event == "1343" || $event == "1344") {
            setTimeout(function () {
                _this.riskAddress();
            }, 1000);
        }
    };
    ProfessionalStep4Page.prototype.back = function () {
        this.navCtrl.pop();
    };
    ProfessionalStep4Page.prototype.setClaimData = function () {
        var _this = this;
        var claimNumber = localStorage.getItem('ProfessionalClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe(function (data) {
                if (data.status == 0) {
                    _this.editClaimData = data.data;
                    if (_this.editClaimData.where_loss_damage) {
                        var where_loss_damage = JSON.parse(_this.editClaimData.where_loss_damage);
                        for (var where_loss_damage_set in where_loss_damage) {
                        }
                    }
                    else {
                        where_loss_damage_set = null;
                    }
                    _this.professional_form_step4.setValue({
                        tp_christian_claimant: _this.editClaimData.tp_christian_claimant,
                        tp_name_claimant: _this.editClaimData.tp_name_claimant,
                        tp_postal_street: _this.editClaimData.tp_postal_street,
                        tp_postal_suburb: _this.editClaimData.tp_postal_suburb,
                        tp_postal_postcode: _this.editClaimData.tp_postal_postcode,
                        tp_postal_state: _this.editClaimData.tp_postal_state,
                        tp_postal_email: _this.editClaimData.tp_postal_email,
                        tp_tele_main: _this.editClaimData.tp_tele_main,
                        business_contract: _this.editClaimData.business_contract,
                        contract_value: _this.editClaimData.contract_value,
                        where_loss_damage: where_loss_damage_set,
                        where_loss_damage_other: _this.editClaimData.where_loss_damage_other,
                        risk_street: _this.editClaimData.risk_street,
                        risk_suburb: _this.editClaimData.risk_suburb,
                        risk_state: _this.editClaimData.risk_state,
                        risk_postcode: _this.editClaimData.risk_postcode,
                        risk_country: _this.editClaimData.risk_country,
                    });
                }
            });
        }
    };
    ProfessionalStep4Page.prototype.riskAddress = function () {
        var _this = this;
        var widget = new AddressFinder.Widget(document.getElementById("address_line_1"), "PVW639JF4ET8ALGDHNKB", "AU", {});
        var returnResult = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        widget.on("result:select", function (fullAddress, metaData) {
            var selected = new AddressFinder.NZSelectedAddress(fullAddress, metaData);
            var SpaceCount = selected.originalAddressLines[1].split(" ").length;
            var setnum = SpaceCount - 2;
            var mainadddate = selected.originalAddressLines[1].split(" ").splice(-SpaceCount);
            var adddate = selected.originalAddressLines[1].split(" ").splice(setnum);
            this.addstate = adddate[0];
            this.addpincode = adddate[1];
            var index = mainadddate.indexOf(this.addstate);
            if (index !== -1) {
                mainadddate.splice(index, 1);
            }
            var index2 = mainadddate.indexOf(this.addpincode);
            if (index2 !== -1) {
                mainadddate.splice(index2, 2);
            }
            var returnJSON = {
                mainadddate: mainadddate,
                metaData: metaData
            };
            returnResult.next(returnJSON);
        });
        returnResult.subscribe(function (val) {
            if (val) {
                var address_line_1 = val.metaData.address_line_1;
                var mainadddate = val.mainadddate.join(' ');
                var postcode = val.metaData.postcode;
                var state_territory = val.metaData.state_territory;
                var country1 = "Australia";
                var JSON = {
                    risk_street: address_line_1,
                    risk_suburb: mainadddate,
                    risk_postcode: postcode,
                    risk_state: state_territory,
                    risk_country: country1
                };
                _this.professional_form_step4.patchValue(JSON);
            }
        });
    };
    ProfessionalStep4Page.prototype.tp_postalAddress = function () {
        var _this = this;
        var widget = new AddressFinder.Widget(document.getElementById("tp_postal_street"), "PVW639JF4ET8ALGDHNKB", "AU", {});
        var returnResult = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        widget.on("result:select", function (fullAddress, metaData) {
            var selected = new AddressFinder.NZSelectedAddress(fullAddress, metaData);
            var SpaceCount = selected.originalAddressLines[1].split(" ").length;
            var setnum = SpaceCount - 2;
            var mainadddate = selected.originalAddressLines[1].split(" ").splice(-SpaceCount);
            var adddate = selected.originalAddressLines[1].split(" ").splice(setnum);
            this.addstate = adddate[0];
            this.addpincode = adddate[1];
            var index = mainadddate.indexOf(this.addstate);
            if (index !== -1) {
                mainadddate.splice(index, 1);
            }
            var index2 = mainadddate.indexOf(this.addpincode);
            if (index2 !== -1) {
                mainadddate.splice(index2, 2);
            }
            var returnJSON = {
                mainadddate: mainadddate,
                metaData: metaData
            };
            returnResult.next(returnJSON);
        });
        returnResult.subscribe(function (val) {
            if (val) {
                var address_line_1 = val.metaData.address_line_1;
                var mainadddate = val.mainadddate.join(' ');
                var postcode = val.metaData.postcode;
                var state_territory = val.metaData.state_territory;
                var JSON = {
                    tp_postal_street: address_line_1,
                    tp_postal_suburb: mainadddate,
                    tp_postal_postcode: postcode,
                    tp_postal_state: state_territory,
                };
                _this.professional_form_step4.patchValue(JSON);
            }
        });
    };
    ProfessionalStep4Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] }
    ]; };
    ProfessionalStep4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-professional-step4',
            template: __webpack_require__(/*! raw-loader!./professional-step4.page.html */ "./node_modules/raw-loader/index.js!./src/app/professional-indemnity/professional-step4/professional-step4.page.html"),
            styles: [__webpack_require__(/*! ./professional-step4.page.scss */ "./src/app/professional-indemnity/professional-step4/professional-step4.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
    ], ProfessionalStep4Page);
    return ProfessionalStep4Page;
}());



/***/ })

}]);
//# sourceMappingURL=professional-indemnity-professional-step4-professional-step4-module-es5.js.map