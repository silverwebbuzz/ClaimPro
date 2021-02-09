(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["professional-indemnity-professional-step6-professional-step6-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/professional-indemnity/professional-step6/professional-step6.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/professional-indemnity/professional-step6/professional-step6.page.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Other information</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"professional_form_step6\" autocomplete=\"off\">\r\n\r\n    <div class=\"div-que\">\r\n      <ion-label class=\"lbl-head\">Have you been subjected to previous complaints in the past 3 years?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"previous_claims\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n\r\n    </div>\r\n\r\n    <div class=\"div-Y\" *ngIf=\"this.professional_form_step6.get('previous_claims').value == 'true'\">\r\n\r\n      <ion-item lines=\"none\" class=\"input-item\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Date of previous complaint</ion-label>\r\n        <ion-datetime placeholder=\"Select Date\" class=\"input-box box\" formControlName=\"previous_claim_date\"\r\n          displayFormat=\"DD MMM YYYY\" min=\"2016-01-01\" max=\"2039-12-31\"></ion-datetime>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step6.controls.previous_claim_date.hasError('required') && professional_form_step6.controls.previous_claim_date.touched\">\r\n        <p class=\"content\">Please Select Date!</p>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">Nature of previous complaint</ion-label>\r\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"previous_type_claim\" class=\"btn-select bg\" mode=\"md\">\r\n          <ion-select-option value=\"Misconduct\">Misconduct</ion-select-option>\r\n          <ion-select-option value=\"Patient Records\">Patient Records</ion-select-option>\r\n          <ion-select-option value=\"Misleading Marketing\">Misleading Marketing</ion-select-option>\r\n          <ion-select-option value=\"Boundary Transgression\">Boundary Transgression</ion-select-option>\r\n          <ion-select-option value=\"Breach of Privacy\">Breach of Privacy</ion-select-option>\r\n          <ion-select-option value=\"Negligence causing injury or damage\">Negligence causing injury or damage\r\n          </ion-select-option>\r\n          <ion-select-option value=\"Negligent treatment causing injury or damage\">Negligent treatment causing injury or\r\n            damage</ion-select-option>\r\n          <ion-select-option value=\"Negligent equipment causing injury or damage\">Negligent equipment causing injury or\r\n            damage</ion-select-option>\r\n          <ion-select-option value=\"Negligent advice causing injury or damage\">Negligent advice causing injury or damage\r\n          </ion-select-option>\r\n          <ion-select-option value=\"Coroners Inquiry\">Coroners Inquiry</ion-select-option>\r\n          <ion-select-option value=\"Cyber\">Cyber</ion-select-option>\r\n          <ion-select-option value=\"Defamation\">Defamation</ion-select-option>\r\n          <ion-select-option value=\"Other\">Other</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step6.controls.previous_type_claim.hasError('required') && professional_form_step6.controls.previous_type_claim.touched\">\r\n        <p class=\"content\">Please Select Required Field!</p>\r\n      </ion-item>\r\n\r\n      <!-- Other -->\r\n      <div *ngIf=\"professional_form_step6.get('previous_type_claim').value == 'Other'\">\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n          <ion-input type=\"text\" color=\"primary\" formControlName=\"previous_type_claim_other\" class=\"input-box\">\r\n          </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"professional_form_step6.controls.previous_type_claim_other.hasError('required') && professional_form_step6.controls.previous_type_claim_other.touched\">\r\n          <p class=\"content\">Please Enter Required Field!</p>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Insurer</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"previous_insurer\" color=\"primary\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step6.controls.previous_insurer.hasError('required') && professional_form_step6.controls.previous_insurer.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\" (click)=\"professionalStep6Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/professional-indemnity/professional-step6/professional-step6.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step6/professional-step6.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ProfessionalStep6PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalStep6PageModule", function() { return ProfessionalStep6PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professional_step6_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./professional-step6.page */ "./src/app/professional-indemnity/professional-step6/professional-step6.page.ts");










const routes = [
    {
        path: '',
        component: _professional_step6_page__WEBPACK_IMPORTED_MODULE_9__["ProfessionalStep6Page"]
    }
];
let ProfessionalStep6PageModule = class ProfessionalStep6PageModule {
};
ProfessionalStep6PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_professional_step6_page__WEBPACK_IMPORTED_MODULE_9__["ProfessionalStep6Page"]],
        providers: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__["CommonMockService"],
        ],
    })
], ProfessionalStep6PageModule);



/***/ }),

/***/ "./src/app/professional-indemnity/professional-step6/professional-step6.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step6/professional-step6.page.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Zlc3Npb25hbC1pbmRlbW5pdHkvcHJvZmVzc2lvbmFsLXN0ZXA2L3Byb2Zlc3Npb25hbC1zdGVwNi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/professional-indemnity/professional-step6/professional-step6.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step6/professional-step6.page.ts ***!
  \**************************************************************************************/
/*! exports provided: ProfessionalStep6Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalStep6Page", function() { return ProfessionalStep6Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");







let ProfessionalStep6Page = class ProfessionalStep6Page {
    constructor(navCtrl, router, _cS, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.professional_step6_fb();
        this.formControlValueChanged();
        this.setClaimData();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    formControlValueChanged() {
        this.professional_form_step6.get('previous_claims')
            .valueChanges.subscribe((val) => {
            const previous_claim_date = this.professional_form_step6.get('previous_claim_date');
            const previous_type_claim = this.professional_form_step6.get('previous_type_claim');
            const previous_insurer = this.professional_form_step6.get('previous_insurer');
            previous_claim_date.patchValue(null);
            previous_claim_date.clearValidators();
            previous_claim_date.updateValueAndValidity();
            previous_type_claim.patchValue(null);
            previous_type_claim.clearValidators();
            previous_type_claim.updateValueAndValidity();
            previous_insurer.patchValue(null);
            previous_insurer.clearValidators();
            previous_insurer.updateValueAndValidity();
            if (val == "true") {
                previous_claim_date.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                previous_type_claim.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                previous_insurer.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
        });
        this.professional_form_step6.get('previous_type_claim')
            .valueChanges.subscribe((val) => {
            const previous_type_claim_other = this.professional_form_step6.get('previous_type_claim_other');
            if (val == "Other") {
                previous_type_claim_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                previous_type_claim_other.patchValue(null);
                previous_type_claim_other.clearValidators();
                previous_type_claim_other.updateValueAndValidity();
            }
        });
    }
    professional_step6_fb() {
        this.professional_form_step6 = this.formBuilder.group({
            previous_claims: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            previous_claim_date: [null],
            previous_type_claim: [null],
            previous_type_claim_other: [null],
            previous_insurer: [null]
        });
    }
    professionalStep6Next() {
        for (let v in this.professional_form_step6.controls) {
            this.professional_form_step6.controls[v].markAsTouched();
        }
        if (this.professional_form_step6.valid) {
            const step6 = {
                "step": 'step6',
                "ClaimNumber": localStorage.getItem('ProfessionalClaimNumber'),
                "previous_claims": this.professional_form_step6.value.previous_claims,
                "previous_claim_date": this.professional_form_step6.value.previous_claim_date,
                "previous_type_claim": this.professional_form_step6.value.previous_type_claim,
                "previous_type_claim_other": this.professional_form_step6.value.previous_type_claim_other,
                "previous_insurer": this.professional_form_step6.value.previous_insurer
            };
            this._cS.put_API(this._cS.URL_Professional_Claim_Post(), step6)
                .subscribe((data) => {
                if (data.status == 0) {
                    this.setClaimData();
                    this.router.navigate(['/professional-step7']);
                }
                else {
                }
            }, err => {
            });
        }
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.pop();
    }
    setClaimData() {
        var claimNumber = localStorage.getItem('ProfessionalClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe((data) => {
                if (data.status == 0) {
                    this.editClaimData = data.data;
                    this.professional_form_step6.setValue({
                        previous_claims: this.editClaimData.previous_claims,
                        previous_claim_date: this.editClaimData.previous_claim_date,
                        previous_type_claim: this.editClaimData.previous_type_claim,
                        previous_type_claim_other: this.editClaimData.previous_type_claim_other,
                        previous_insurer: this.editClaimData.previous_insurer,
                    });
                }
            });
        }
    }
};
ProfessionalStep6Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] }
];
ProfessionalStep6Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-professional-step6',
        template: __webpack_require__(/*! raw-loader!./professional-step6.page.html */ "./node_modules/raw-loader/index.js!./src/app/professional-indemnity/professional-step6/professional-step6.page.html"),
        styles: [__webpack_require__(/*! ./professional-step6.page.scss */ "./src/app/professional-indemnity/professional-step6/professional-step6.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
], ProfessionalStep6Page);



/***/ })

}]);
//# sourceMappingURL=professional-indemnity-professional-step6-professional-step6-module-es2015.js.map