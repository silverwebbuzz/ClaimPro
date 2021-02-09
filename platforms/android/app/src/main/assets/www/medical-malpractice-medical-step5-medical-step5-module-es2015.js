(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medical-malpractice-medical-step5-medical-step5-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/medical-malpractice/medical-step5/medical-step5.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/medical-malpractice/medical-step5/medical-step5.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Incident details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"medical_form_step5\" autocomplete=\"off\">\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Where did the loss/damage occur?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"where_loss_damage\" class=\"btn-select bg\" mode=\"md\" (ionChange)=\"occurchange($event.target.value)\">\r\n          <ion-select-option *ngFor=\"let opt of where_loss_damage | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n        <!-- <ion-select-option value=\"Risk Address\">Risk Address</ion-select-option>\r\n        <ion-select-option value=\"Another Location\">Another Location</ion-select-option>\r\n        <ion-select-option value=\"In Transit\">In Transit</ion-select-option>\r\n        <ion-select-option value=\"Other\">Other</ion-select-option> -->\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"medical_form_step5.controls.where_loss_damage.hasError('required') && medical_form_step5.controls.where_loss_damage.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Another Location, Risk Address -->\r\n    <div\r\n      *ngIf=\"medical_form_step5.get('where_loss_damage').value == '1343' || medical_form_step5.get('where_loss_damage').value == '1344'\">\r\n      <ion-label class=\"lbl-contact add-margin\">Address details</ion-label>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Street</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"risk_street\" color=\"primary\" class=\"input-box\" id=\"address_line_1\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step5.controls.risk_street.hasError('required') && medical_form_step5.controls.risk_street.touched\">\r\n        <p class=\"content\">Please Enter Street!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Suburb/Town</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"risk_suburb\" color=\"primary\" class=\"input-box\" id=\"city\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step5.controls.risk_suburb.hasError('required') && medical_form_step5.controls.risk_suburb.touched\">\r\n        <p class=\"content\">Please Enter Town!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">State</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"risk_state\" color=\"primary\" class=\"input-box\" id=\"state\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step5.controls.risk_state.hasError('required') && medical_form_step5.controls.risk_state.touched\">\r\n        <p class=\"content\">Please Enter State!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">PostCode</ion-label>\r\n        <ion-input type=\"number\" formControlName=\"risk_postcode\" color=\"primary\" class=\"input-box\" id=\"postcode\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step5.controls.risk_postcode.hasError('required') && medical_form_step5.controls.risk_postcode.touched\">\r\n        <p class=\"content\">Please Enter Postcode!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Country</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"risk_country\" color=\"primary\" class=\"input-box\" id=\"country\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step5.controls.risk_country.hasError('required') && medical_form_step5.controls.risk_country.touched\">\r\n        <p class=\"content\">Please Enter Country!</p>\r\n      </ion-item>\r\n\r\n    </div>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"medical_form_step5.get('where_loss_damage').value == '1346'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"where_loss_damage_other\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step5.controls.where_loss_damage_other.hasError('required') && medical_form_step5.controls.where_loss_damage_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <div class=\"div-que add-margin\">\r\n      <ion-label class=\"lbl-head\">Does the complaint refer to a personal injury?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"personal_injury\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"div-Y\" *ngIf=\"this.medical_form_step5.get('personal_injury').value == 'true'\">\r\n\r\n      <ion-item lines=\"none\" class=\"input-item\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">How did the injury occur?</ion-label>\r\n        <ion-textarea rows=\"3\" formControlName=\"how_injury_occur\" type=\"text\" color=\"primary\" class=\"input-box\">\r\n        </ion-textarea>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step5.controls.how_injury_occur.hasError('required') && medical_form_step5.controls.how_injury_occur.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"medical_form_step5.controls.how_injury_occur.hasError('maxlength') && medical_form_step5.controls.how_injury_occur.touched\">\r\n          <p class=\"content\">Allow Only 140 Characters!</p>\r\n        </ion-item>\r\n\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Nature of injury</ion-label>\r\n        <ion-textarea rows=\"3\" formControlName=\"nature_injury\" type=\"text\" color=\"primary\" class=\"input-box\">\r\n        </ion-textarea>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step5.controls.nature_injury.hasError('required') && medical_form_step5.controls.nature_injury.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"medical_form_step5.controls.nature_injury.hasError('maxlength') && medical_form_step5.controls.nature_injury.touched\">\r\n          <p class=\"content\">Allow Only 140 Characters!</p>\r\n        </ion-item>\r\n\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">When did this occur?</ion-label>\r\n        <ion-datetime placeholder=\"Select Date\" class=\"input-box box\" formControlName=\"date_loss\"\r\n          displayFormat=\"DD MMM YYYY\" min=\"2016-01-01\" max=\"2039-12-31\"></ion-datetime>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step5.controls.date_loss.hasError('required') && medical_form_step5.controls.date_loss.touched\">\r\n        <p class=\"content\">Please Select Date!</p>\r\n      </ion-item>\r\n\r\n    </div>\r\n\r\n    <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">What has been damaged?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"reported_loss\" class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"Personal Property\">Personal Property</ion-select-option>\r\n        <ion-select-option value=\"Neighbours Property\">Neighbours Property</ion-select-option>\r\n        <ion-select-option value=\"Third Party Vehicle\">Third Party Vehicle</ion-select-option>\r\n        <ion-select-option value=\"Other\">Other</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"medical_form_step5.controls.reported_loss.hasError('required') && medical_form_step5.controls.reported_loss.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"medical_form_step5.get('reported_loss').value == 'Other'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"reported_loss_other\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step5.controls.reported_loss_other.hasError('required') && medical_form_step5.controls.reported_loss_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Type of damage</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"type_damage\" class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"Water Damage\">Water Damage</ion-select-option>\r\n        <ion-select-option value=\"Fire\">Fire</ion-select-option>\r\n        <ion-select-option value=\"Smoke\">Smoke</ion-select-option>\r\n        <ion-select-option value=\"Dent\">Dent</ion-select-option>\r\n        <ion-select-option value=\"Scratch\">Scratch</ion-select-option>\r\n        <ion-select-option value=\"Broken\">Broken</ion-select-option>\r\n        <ion-select-option value=\"Lost\">Lost</ion-select-option>\r\n        <ion-select-option value=\"Other\">Other</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"medical_form_step5.controls.type_damage.hasError('required') && medical_form_step5.controls.type_damage.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"medical_form_step5.get('type_damage').value == 'Other'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"type_damage_other\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step5.controls.type_damage_other.hasError('required') && medical_form_step5.controls.type_damage_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">How did the damage occur?</ion-label>\r\n      <ion-textarea rows=\"3\" formControlName=\"how_damage_occur\" type=\"text\" color=\"primary\" class=\"input-box\">\r\n      </ion-textarea>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"medical_form_step5.controls.how_damage_occur.hasError('required') && medical_form_step5.controls.how_damage_occur.touched\">\r\n      <p class=\"content\">Please Enter Required Field!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"medical_form_step5.controls.how_damage_occur.hasError('maxlength') && medical_form_step5.controls.how_damage_occur.touched\">\r\n          <p class=\"content\">Allow Only 140 Characters!</p>\r\n        </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Do you know the cost of the damage?</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"reported_gross_estimate\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"medical_form_step5.controls.reported_gross_estimate.hasError('required') && medical_form_step5.controls.reported_gross_estimate.touched\">\r\n      <p class=\"content\">Please Enter Required Field!</p>\r\n    </ion-item>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\" (click)=\"medicalStep5Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/medical-malpractice/medical-step5/medical-step5.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/medical-malpractice/medical-step5/medical-step5.module.ts ***!
  \***************************************************************************/
/*! exports provided: MedicalStep5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalStep5PageModule", function() { return MedicalStep5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _medical_step5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medical-step5.page */ "./src/app/medical-malpractice/medical-step5/medical-step5.page.ts");







const routes = [
    {
        path: '',
        component: _medical_step5_page__WEBPACK_IMPORTED_MODULE_6__["MedicalStep5Page"]
    }
];
let MedicalStep5PageModule = class MedicalStep5PageModule {
};
MedicalStep5PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_medical_step5_page__WEBPACK_IMPORTED_MODULE_6__["MedicalStep5Page"]]
    })
], MedicalStep5PageModule);



/***/ }),

/***/ "./src/app/medical-malpractice/medical-step5/medical-step5.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/medical-malpractice/medical-step5/medical-step5.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGljYWwtbWFscHJhY3RpY2UvbWVkaWNhbC1zdGVwNS9tZWRpY2FsLXN0ZXA1LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/medical-malpractice/medical-step5/medical-step5.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/medical-malpractice/medical-step5/medical-step5.page.ts ***!
  \*************************************************************************/
/*! exports provided: MedicalStep5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalStep5Page", function() { return MedicalStep5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let MedicalStep5Page = class MedicalStep5Page {
    /* dropdown option Variable End */
    constructor(navCtrl, router, _cS, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.ImageServerURL = this._cS.imageUrl();
        this.medical_step5_fb();
        this.formControlValueChanged();
        this.setClaimData();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    medical_step5_fb() {
        this.medical_form_step5 = this.formBuilder.group({
            where_loss_damage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            where_loss_damage_other: [null],
            risk_street: [null],
            risk_suburb: [null],
            risk_state: [null],
            risk_postcode: [null],
            risk_country: [null],
            personal_injury: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            how_injury_occur: [null],
            nature_injury: [null],
            date_loss: [null],
            reported_loss: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            reported_loss_other: [null],
            type_damage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type_damage_other: [null],
            how_damage_occur: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(140), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            reported_gross_estimate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    formControlValueChanged() {
        this.medical_form_step5.get('where_loss_damage')
            .valueChanges.subscribe((val) => {
            const risk_street = this.medical_form_step5.get('risk_street');
            const risk_suburb = this.medical_form_step5.get('risk_suburb');
            const risk_state = this.medical_form_step5.get('risk_state');
            const risk_postcode = this.medical_form_step5.get('risk_postcode');
            const risk_country = this.medical_form_step5.get('risk_country');
            const where_loss_damage_other = this.medical_form_step5.get('where_loss_damage_other');
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
        this.medical_form_step5.get('personal_injury')
            .valueChanges.subscribe((val) => {
            const how_injury_occur = this.medical_form_step5.get('how_injury_occur');
            const nature_injury = this.medical_form_step5.get('nature_injury');
            const date_loss = this.medical_form_step5.get('date_loss');
            how_injury_occur.patchValue(null);
            how_injury_occur.clearValidators();
            how_injury_occur.updateValueAndValidity();
            nature_injury.patchValue(null);
            nature_injury.clearValidators();
            nature_injury.updateValueAndValidity();
            date_loss.patchValue(null);
            date_loss.clearValidators();
            date_loss.updateValueAndValidity();
            if (val == "true") {
                how_injury_occur.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(140)]);
                nature_injury.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(140)]);
                date_loss.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
        });
        this.medical_form_step5.get('type_damage')
            .valueChanges.subscribe((val) => {
            const type_damage_other = this.medical_form_step5.get('type_damage_other');
            if (val == 'Other') {
                type_damage_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                type_damage_other.patchValue(null);
                type_damage_other.clearValidators();
                type_damage_other.updateValueAndValidity();
            }
        });
        this.medical_form_step5.get('reported_loss')
            .valueChanges.subscribe((val) => {
            const reported_loss_other = this.medical_form_step5.get('reported_loss_other');
            if (val == "Other") {
                reported_loss_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                reported_loss_other.patchValue(null);
                reported_loss_other.clearValidators();
                reported_loss_other.updateValueAndValidity();
            }
        });
    }
    medicalStep5Next() {
        for (let v in this.medical_form_step5.controls) {
            this.medical_form_step5.controls[v].markAsTouched();
        }
        if (this.medical_form_step5.valid) {
            /* riskAddres Start */
            let riskStreetValue = null;
            let riskSuburbValue = null;
            let riskPostCodeValue = null;
            let riskStateValue = null;
            let riskcountryValue = null;
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
            const step5 = {
                "step": 'step5',
                "ClaimNumber": localStorage.getItem('MedicalClaimNumber'),
                "where_loss_damage": this.medical_form_step5.value.where_loss_damage,
                "risk_street": riskStreetValue,
                "risk_suburb": riskSuburbValue,
                "risk_state": riskStateValue,
                "risk_postcode": riskPostCodeValue,
                "risk_country": riskcountryValue,
                "where_loss_damage_other": this.medical_form_step5.value.where_loss_damage_other,
                "personal_injury": this.medical_form_step5.value.personal_injury,
                "how_injury_occur": this.medical_form_step5.value.how_injury_occur,
                "nature_injury": this.medical_form_step5.value.nature_injury,
                "date_loss": this.medical_form_step5.value.date_loss,
                "reported_loss": this.medical_form_step5.value.reported_loss,
                "reported_loss_other": this.medical_form_step5.value.reported_loss_other,
                "type_damage": this.medical_form_step5.value.type_damage,
                "type_damage_other": this.medical_form_step5.value.type_damage_other,
                "how_damage_occur": this.medical_form_step5.value.how_damage_occur,
                "reported_gross_estimate": this.medical_form_step5.value.reported_gross_estimate,
            };
            this._cS.put_API(this._cS.URL_Medical_Claim_Post(), step5)
                .subscribe((data) => {
                if (data.status == 0) {
                    this.setClaimData();
                    this.router.navigate(['/medical-step6']);
                }
                else {
                }
            }, err => {
            });
        }
    }
    setClaimData() {
        var claimNumber = localStorage.getItem('MedicalClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe((data) => {
                if (data.status == 0) {
                    this.editClaimData = data.data;
                    if (this.editClaimData.where_loss_damage) {
                        var where_loss_damage = JSON.parse(this.editClaimData.where_loss_damage);
                        for (var where_loss_damage_set in where_loss_damage) {
                        }
                    }
                    else {
                        where_loss_damage_set = null;
                    }
                    this.medical_form_step5.setValue({
                        where_loss_damage: where_loss_damage_set,
                        where_loss_damage_other: this.editClaimData.where_loss_damage_other,
                        risk_street: this.editClaimData.risk_street,
                        risk_suburb: this.editClaimData.risk_suburb,
                        risk_state: this.editClaimData.risk_state,
                        risk_postcode: this.editClaimData.risk_postcode,
                        risk_country: this.editClaimData.risk_country,
                        personal_injury: this.editClaimData.personal_injury,
                        how_injury_occur: this.editClaimData.how_injury_occur,
                        nature_injury: this.editClaimData.nature_injury,
                        date_loss: this.editClaimData.date_loss,
                        reported_loss: this.editClaimData.reported_loss,
                        reported_loss_other: this.editClaimData.reported_loss_other,
                        type_damage: this.editClaimData.type_damage,
                        type_damage_other: this.editClaimData.type_damage_other,
                        how_damage_occur: this.editClaimData.how_damage_occur,
                        reported_gross_estimate: this.editClaimData.reported_gross_estimate,
                    });
                }
            });
        }
    }
    ngOnInit() {
        let script = document.createElement("script");
        script.src = "https://api.addressfinder.io/assets/v3/widget.js";
        script.async = true;
        document.body.appendChild(script);
        // DropDown Option List Value 
        /* Where did the loss/damage occur? */
        this._cS.getoptionvalue_API(48)
            .subscribe((data) => {
            if (data.status == 0) {
                this.where_loss_damage = data.data;
            }
        });
    }
    occurchange($event) {
        if ($event == "1343" || $event == "1344") {
            setTimeout(() => {
                this.riskAddress();
            }, 1000);
        }
    }
    riskAddress() {
        let widget = new AddressFinder.Widget(document.getElementById("address_line_1"), "PVW639JF4ET8ALGDHNKB", "AU", {});
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
                let country1 = "Australia";
                var JSON = {
                    risk_street: address_line_1,
                    risk_suburb: mainadddate,
                    risk_postcode: postcode,
                    risk_state: state_territory,
                    risk_country: country1
                };
                this.medical_form_step5.patchValue(JSON);
            }
        });
    }
    back() {
        this.navCtrl.pop();
    }
};
MedicalStep5Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] }
];
MedicalStep5Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-medical-step5',
        template: __webpack_require__(/*! raw-loader!./medical-step5.page.html */ "./node_modules/raw-loader/index.js!./src/app/medical-malpractice/medical-step5/medical-step5.page.html"),
        styles: [__webpack_require__(/*! ./medical-step5.page.scss */ "./src/app/medical-malpractice/medical-step5/medical-step5.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
], MedicalStep5Page);



/***/ })

}]);
//# sourceMappingURL=medical-malpractice-medical-step5-medical-step5-module-es2015.js.map