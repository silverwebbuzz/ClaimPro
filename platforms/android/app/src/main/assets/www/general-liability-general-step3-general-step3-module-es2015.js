(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-liability-general-step3-general-step3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/general-liability/general-step3/general-step3.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/general-liability/general-step3/general-step3.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Incident details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"general_form_step3\" autocomplete=\"off\">\r\n\r\n    <ion-label class=\"lbl-contact\">Claimant details</ion-label>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">First Name</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"tp_christian_claimant\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step3.controls.tp_christian_claimant.hasError('required') && general_form_step3.controls.tp_christian_claimant.touched\">\r\n      <p class=\"content\">Please Enter First Name!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Last Name</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"tp_name_claimant\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step3.controls.tp_name_claimant.hasError('required') && general_form_step3.controls.tp_name_claimant.touched\">\r\n      <p class=\"content\">Please Enter Last Name!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Street</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"tp_postal_street\" color=\"primary\" class=\"input-box\" id=\"tp_postal_street\" (ionFocus)=\"tp_postalAddress()\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step3.controls.tp_postal_street.hasError('required') && general_form_step3.controls.tp_postal_street.touched\">\r\n      <p class=\"content\">Please Enter Street!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Suburb/Town</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"tp_postal_suburb\" color=\"primary\" class=\"input-box\" id=\"tp_postal_suburb\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step3.controls.tp_postal_suburb.hasError('required') && general_form_step3.controls.tp_postal_suburb.touched\">\r\n      <p class=\"content\">Please Enter Town!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">PostCode</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"tp_postal_postcode\" color=\"primary\" class=\"input-box\" id=\"tp_postal_postcode\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step3.controls.tp_postal_postcode.hasError('required') && general_form_step3.controls.tp_postal_postcode.touched\">\r\n      <p class=\"content\">Please Enter Postcode!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">State</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"tp_postal_state\" color=\"primary\" class=\"input-box\" id=\"tp_postal_state\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step3.controls.tp_postal_state.hasError('required') && general_form_step3.controls.tp_postal_state.touched\">\r\n      <p class=\"content\">Please Enter State!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Email</ion-label>\r\n      <ion-input type=\"email\" formControlName=\"tp_postal_email\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step3.controls.tp_postal_email.hasError('required') && general_form_step3.controls.tp_postal_email.touched\">\r\n      <p class=\"content\">Email Address is required!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step3.controls.tp_postal_email.hasError('pattern') && general_form_step3.controls.tp_postal_email.touched\">\r\n      <p class=\"content\">Please Enter a Valid Email Address!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Telephone</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"tp_tele_main\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step3.controls.tp_tele_main.hasError('required') && general_form_step3.controls.tp_tele_main.touched\">\r\n      <p class=\"content\">Please Enter Telephone!</p>\r\n    </ion-item>\r\n\r\n    <div class=\"div-que add-margin\">\r\n\r\n      <ion-label class=\"lbl-head\">Does the claimant have legal representation?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"tp_legal_represented\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n\r\n    </div>\r\n\r\n    <div class=\"div-Y\" *ngIf=\"this.general_form_step3.get('tp_legal_represented').value == 'true'\">\r\n\r\n      <ion-item lines=\"none\" class=\"input-item\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Name of firm</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"tp_name_firm\" color=\"primary\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"general_form_step3.controls.tp_name_firm.hasError('required') && general_form_step3.controls.tp_name_firm.touched\">\r\n        <p class=\"content\">Please Enter Firm Name!</p>\r\n      </ion-item>\r\n\r\n    </div>\r\n\r\n    <div class=\"div-que add-margin\">\r\n      <ion-label class=\"lbl-head\">Does this notification relate to injury to a third party?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"related_injury\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n\r\n    </div>\r\n\r\n    <div class=\"div-Y\" *ngIf=\"this.general_form_step3.get('related_injury').value == 'true'\">\r\n\r\n      <ion-item lines=\"none\" class=\"input-item\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Nature of injury</ion-label>\r\n        <ion-textarea rows=\"3\" formControlName=\"nature_injury\" type=\"text\" color=\"primary\" class=\"input-box\">\r\n        </ion-textarea>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"general_form_step3.controls.nature_injury.hasError('required') && general_form_step3.controls.nature_injury.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"general_form_step3.controls.nature_injury.hasError('maxlength') && general_form_step3.controls.nature_injury.touched\">\r\n          <p class=\"content\">Allow Only 140 Characters!</p>\r\n        </ion-item>\r\n\r\n      <div class=\"div-que add-margin\">\r\n        <ion-label class=\"lbl-head\">Personal injury</ion-label>\r\n\r\n        <ion-radio-group formControlName=\"personal_injury\">\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">No</ion-label>\r\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <ion-item class=\"item-dropdown\" lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">What has been damaged?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"reported_loss\" class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"Personal Property\">Personal Property</ion-select-option>\r\n        <ion-select-option value=\"Neighbours Property\">Neighbours Property</ion-select-option>\r\n        <ion-select-option value=\"Third Party Vehicle\">Third Party Vehicle</ion-select-option>\r\n        <ion-select-option value=\"Other\">Other</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step3.controls.reported_loss.hasError('required') && general_form_step3.controls.reported_loss.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"general_form_step3.get('reported_loss').value == 'Other'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"reported_loss_other\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"general_form_step3.controls.reported_loss_other.hasError('required') && general_form_step3.controls.reported_loss_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Type of damage</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"type_damage\" class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"Water Damage\">Water Damage</ion-select-option>\r\n        <ion-select-option value=\"Fire\">Fire</ion-select-option>\r\n        <ion-select-option value=\"Smoke\">Smoke</ion-select-option>\r\n        <ion-select-option value=\"Dent\">Dent</ion-select-option>\r\n        <ion-select-option value=\"Scratch\">Scratch</ion-select-option>\r\n        <ion-select-option value=\"Broken\">Broken</ion-select-option>\r\n        <ion-select-option value=\"Lost\">Lost</ion-select-option>\r\n        <ion-select-option value=\"Other\">Other</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step3.controls.type_damage.hasError('required') && general_form_step3.controls.type_damage.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"general_form_step3.get('type_damage').value == 'Other'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"type_damage_other\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"general_form_step3.controls.type_damage_other.hasError('required') && general_form_step3.controls.type_damage_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">How did the damage occur?</ion-label>\r\n      <ion-textarea rows=\"3\" formControlName=\"how_damage_occur\" type=\"text\" color=\"primary\" class=\"input-box\">\r\n      </ion-textarea>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step3.controls.how_damage_occur.hasError('required') && general_form_step3.controls.how_damage_occur.touched\">\r\n      <p class=\"content\">Please Enter Required Field!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"general_form_step3.controls.how_damage_occur.hasError('maxlength') && general_form_step3.controls.how_damage_occur.touched\">\r\n          <p class=\"content\">Allow Only 140 Characters!</p>\r\n        </ion-item>\r\n\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Do you know the cost of the damage?</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"reported_gross_estimate\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step3.controls.reported_gross_estimate.hasError('required') && general_form_step3.controls.reported_gross_estimate.touched\">\r\n      <p class=\"content\">Please Enter Required Field!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl lbl-over\">What work were you contracted to do?</ion-label>\r\n      <ion-textarea rows=\"3\" formControlName=\"business_contract\" type=\"text\" color=\"primary\" class=\"input-box\">\r\n      </ion-textarea>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step3.controls.business_contract.hasError('required') && general_form_step3.controls.business_contract.touched\">\r\n      <p class=\"content\">Please Enter Required Field!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"general_form_step3.controls.business_contract.hasError('maxlength') && general_form_step3.controls.business_contract.touched\">\r\n          <p class=\"content\">Allow Only 140 Characters!</p>\r\n        </ion-item>\r\n\r\n    <!-- <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl lbl-over\">What was the value of the work you were performing ($)?\r\n      </ion-label>\r\n      <ion-input type=\"text\" formControlName=\"contract_value\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step3.controls.contract_value.hasError('required') && general_form_step3.controls.contract_value.touched\">\r\n      <p class=\"content\">Please Enter Required Field!</p>\r\n    </ion-item> -->\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" size=\"large\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" size=\"large\" class=\"btn-next\" (click)=\"GeneralStep3Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/general-liability/general-step3/general-step3.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/general-liability/general-step3/general-step3.module.ts ***!
  \*************************************************************************/
/*! exports provided: GeneralStep3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralStep3PageModule", function() { return GeneralStep3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _general_step3_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./general-step3.page */ "./src/app/general-liability/general-step3/general-step3.page.ts");










const routes = [
    {
        path: '',
        component: _general_step3_page__WEBPACK_IMPORTED_MODULE_9__["GeneralStep3Page"]
    }
];
let GeneralStep3PageModule = class GeneralStep3PageModule {
};
GeneralStep3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_general_step3_page__WEBPACK_IMPORTED_MODULE_9__["GeneralStep3Page"]],
        providers: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__["CommonMockService"],
        ],
    })
], GeneralStep3PageModule);



/***/ }),

/***/ "./src/app/general-liability/general-step3/general-step3.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/general-liability/general-step3/general-step3.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWwtbGlhYmlsaXR5L2dlbmVyYWwtc3RlcDMvZ2VuZXJhbC1zdGVwMy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/general-liability/general-step3/general-step3.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/general-liability/general-step3/general-step3.page.ts ***!
  \***********************************************************************/
/*! exports provided: GeneralStep3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralStep3Page", function() { return GeneralStep3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let GeneralStep3Page = class GeneralStep3Page {
    constructor(navCtrl, _cS, router, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this._cS = _cS;
        this.router = router;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.general_step3_fb();
        this.setClaimData();
        this.formControlValueChanged();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    general_step3_fb() {
        this.general_form_step3 = this.formBuilder.group({
            tp_christian_claimant: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tp_name_claimant: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tp_postal_street: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tp_postal_suburb: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tp_postal_postcode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tp_postal_state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tp_postal_email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])],
            tp_tele_main: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tp_legal_represented: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tp_name_firm: [null],
            related_injury: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nature_injury: [null],
            personal_injury: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            reported_loss: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            reported_loss_other: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            type_damage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            type_damage_other: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            how_damage_occur: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(140), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            reported_gross_estimate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            business_contract: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(280), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
        });
    }
    formControlValueChanged() {
        /* Step 3 Start */
        this.general_form_step3.get('tp_legal_represented')
            .valueChanges.subscribe((val) => {
            const tp_name_firm = this.general_form_step3.get('tp_name_firm');
            tp_name_firm.patchValue(null);
            tp_name_firm.clearValidators();
            tp_name_firm.updateValueAndValidity();
            if (val == "true") {
                tp_name_firm.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            }
        });
        this.general_form_step3.get('related_injury')
            .valueChanges.subscribe((val) => {
            const nature_injury = this.general_form_step3.get('nature_injury');
            const personal_injury = this.general_form_step3.get('personal_injury');
            nature_injury.patchValue(null);
            nature_injury.clearValidators();
            nature_injury.updateValueAndValidity();
            personal_injury.patchValue(null);
            personal_injury.clearValidators();
            personal_injury.updateValueAndValidity();
            if (val == "true") {
                nature_injury.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(140), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]);
                personal_injury.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            }
        });
        this.general_form_step3.get('type_damage')
            .valueChanges.subscribe((val) => {
            const type_damage_other = this.general_form_step3.get('type_damage_other');
            if (val == "Other") {
                type_damage_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            }
            else {
                type_damage_other.patchValue(null);
                type_damage_other.clearValidators();
                type_damage_other.updateValueAndValidity();
            }
        });
        this.general_form_step3.get('reported_loss')
            .valueChanges.subscribe((val) => {
            const reported_loss_other = this.general_form_step3.get('reported_loss_other');
            if (val == "Other") {
                reported_loss_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            }
            else {
                reported_loss_other.patchValue(null);
                reported_loss_other.clearValidators();
                reported_loss_other.updateValueAndValidity();
            }
        });
    }
    GeneralStep3Next() {
        for (let v in this.general_form_step3.controls) {
            this.general_form_step3.controls[v].markAsTouched();
        }
        if (this.general_form_step3.valid) {
            /* Patient Addres Start */
            let tp_postalStreetValue = null;
            let tp_postalSuburbValue = null;
            let tp_postalPostCodeValue = null;
            let tp_postalStateValue = null;
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
            const step3 = {
                "step": 'step3',
                ClaimNumber: localStorage.getItem('GeneralClaimNumber'),
                "tp_christian_claimant": this.general_form_step3.value.tp_christian_claimant,
                "tp_name_claimant": this.general_form_step3.value.tp_name_claimant,
                "tp_postal_street": tp_postalStreetValue,
                "tp_postal_suburb": tp_postalSuburbValue,
                "tp_postal_postcode": tp_postalPostCodeValue,
                "tp_postal_state": tp_postalStateValue,
                "tp_postal_email": this.general_form_step3.value.tp_postal_email,
                "tp_tele_main": this.general_form_step3.value.tp_tele_main,
                "tp_legal_represented": this.general_form_step3.value.tp_legal_represented,
                "tp_name_firm": this.general_form_step3.value.tp_name_firm,
                "related_injury": this.general_form_step3.value.related_injury,
                "nature_injury": this.general_form_step3.value.nature_injury,
                "personal_injury": this.general_form_step3.value.personal_injury,
                "reported_loss": this.general_form_step3.value.reported_loss,
                "reported_loss_other": this.general_form_step3.value.reported_loss_other,
                "type_damage": this.general_form_step3.value.type_damage,
                "type_damage_other": this.general_form_step3.value.type_damage_other,
                "how_damage_occur": this.general_form_step3.value.how_damage_occur,
                "reported_gross_estimate": this.general_form_step3.value.reported_gross_estimate,
                "business_contract": this.general_form_step3.value.business_contract,
            };
            this._cS.put_API(this._cS.URL_General_Claim_Post(), step3)
                .subscribe((data) => {
                // this.spinner.hide();
                if (data.status == 0) {
                    this.setClaimData();
                    this.router.navigate(['/general-step4']);
                }
                else {
                    // this._cS.Display_Toaster('error', data.message);
                }
                // this.spinner.hide();
            }, err => {
                // this.spinner.hide();
            });
        }
    }
    ngOnInit() {
        let script = document.createElement("script");
        script.src = "https://api.addressfinder.io/assets/v3/widget.js";
        script.async = true;
        document.body.appendChild(script);
    }
    tp_postalAddress() {
        let widget = new AddressFinder.Widget(document.getElementById("tp_postal_street"), "PVW639JF4ET8ALGDHNKB", "AU", {});
        let returnResult = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        widget.on("result:select", function (fullAddress, metaData) {
            var selected = new AddressFinder.NZSelectedAddress(fullAddress, metaData);
            let SpaceCount = selected.originalAddressLines[1].split(" ").length;
            let setnum = SpaceCount - 2;
            let mainadddate = selected.originalAddressLines[1].split(" ").splice(-SpaceCount);
            let adddate = selected.originalAddressLines[1].split(" ").splice(setnum);
            this.addstate = adddate[0];
            this.addpincode = adddate[1];
            const index = mainadddate.indexOf(this.addstate);
            if (index !== -1) {
                mainadddate.splice(index, 1);
            }
            const index2 = mainadddate.indexOf(this.addpincode);
            if (index2 !== -1) {
                mainadddate.splice(index2, 2);
            }
            let returnJSON = {
                mainadddate: mainadddate,
                metaData: metaData
            };
            returnResult.next(returnJSON);
        });
        returnResult.subscribe(val => {
            if (val) {
                let address_line_1 = val.metaData.address_line_1;
                let mainadddate = val.mainadddate.join(' ');
                let postcode = val.metaData.postcode;
                let state_territory = val.metaData.state_territory;
                var JSON = {
                    tp_postal_street: address_line_1,
                    tp_postal_suburb: mainadddate,
                    tp_postal_postcode: postcode,
                    tp_postal_state: state_territory,
                };
                this.general_form_step3.patchValue(JSON);
            }
        });
    }
    back() {
        this.navCtrl.pop();
    }
    setClaimData() {
        var claimNumber = localStorage.getItem('GeneralClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe((data) => {
                if (data.status == 0) {
                    this.editClaimData = data.data;
                    this.general_form_step3.setValue({
                        tp_christian_claimant: this.editClaimData.tp_christian_claimant,
                        tp_name_claimant: this.editClaimData.tp_name_claimant,
                        tp_postal_street: this.editClaimData.tp_postal_street,
                        tp_postal_suburb: this.editClaimData.tp_postal_suburb,
                        tp_postal_postcode: this.editClaimData.tp_postal_postcode,
                        tp_postal_state: this.editClaimData.tp_postal_state,
                        tp_postal_email: this.editClaimData.tp_postal_email,
                        tp_tele_main: this.editClaimData.tp_tele_main,
                        tp_legal_represented: this.editClaimData.tp_legal_represented,
                        tp_name_firm: this.editClaimData.tp_name_firm,
                        related_injury: this.editClaimData.related_injury,
                        nature_injury: this.editClaimData.nature_injury,
                        personal_injury: this.editClaimData.personal_injury,
                        reported_loss: this.editClaimData.reported_loss,
                        reported_loss_other: this.editClaimData.reported_loss_other,
                        type_damage: this.editClaimData.type_damage,
                        type_damage_other: this.editClaimData.type_damage_other,
                        how_damage_occur: this.editClaimData.how_damage_occur,
                        reported_gross_estimate: this.editClaimData.reported_gross_estimate,
                        business_contract: this.editClaimData.business_contract,
                        contract_value: this.editClaimData.contract_value,
                    });
                }
            });
        }
    }
};
GeneralStep3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] }
];
GeneralStep3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-general-step3',
        template: __webpack_require__(/*! raw-loader!./general-step3.page.html */ "./node_modules/raw-loader/index.js!./src/app/general-liability/general-step3/general-step3.page.html"),
        styles: [__webpack_require__(/*! ./general-step3.page.scss */ "./src/app/general-liability/general-step3/general-step3.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
], GeneralStep3Page);



/***/ })

}]);
//# sourceMappingURL=general-liability-general-step3-general-step3-module-es2015.js.map