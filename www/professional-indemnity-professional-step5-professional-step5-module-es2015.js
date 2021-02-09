(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["professional-indemnity-professional-step5-professional-step5-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/professional-indemnity/professional-step5/professional-step5.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/professional-indemnity/professional-step5/professional-step5.page.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Incident details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"professional_form_step5\" autocomplete=\"off\">\r\n\r\n    <div class=\"div-que\">\r\n      <ion-label class=\"lbl-head\">Does the complaint refer to a personal injury?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"personal_injury\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"div-Y\" *ngIf=\"this.professional_form_step5.get('personal_injury').value == 'true'\">\r\n\r\n      <ion-item lines=\"none\" class=\"input-item\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">How did the injury occur?</ion-label>\r\n        <ion-textarea rows=\"3\" formControlName=\"how_injury_occur\" type=\"text\" color=\"primary\" class=\"input-box\">\r\n        </ion-textarea>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step5.controls.how_injury_occur.hasError('required') && professional_form_step5.controls.how_injury_occur.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step5.controls.how_injury_occur.hasError('maxlength') && professional_form_step5.controls.how_injury_occur.touched\">\r\n        <p class=\"content\">Allow Only 140 Characters!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Nature of injury</ion-label>\r\n        <ion-textarea rows=\"3\" formControlName=\"nature_injury\" type=\"text\" color=\"primary\" class=\"input-box\">\r\n        </ion-textarea>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step5.controls.nature_injury.hasError('required') && professional_form_step5.controls.nature_injury.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step5.controls.nature_injury.hasError('maxlength') && professional_form_step5.controls.nature_injury.touched\">\r\n        <p class=\"content\">Allow Only 140 Characters!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">When did this occur?</ion-label>\r\n        <ion-datetime placeholder=\"Select Date\" class=\"input-box box\" formControlName=\"date_loss\"\r\n          displayFormat=\"DD MMM YYYY\" min=\"2016-01-01\" max=\"2039-12-31\"></ion-datetime>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step5.controls.date_loss.hasError('required') && professional_form_step5.controls.date_loss.touched\">\r\n        <p class=\"content\">Please Select Date!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">What time did this occur?</ion-label>\r\n          <ion-datetime placeholder=\"Select Time\" class=\"input-box box\" formControlName=\"time_loss\" displayFormat=\"hh:mm A\">\r\n          </ion-datetime>\r\n        </ion-item>\r\n    \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"professional_form_step5.controls.time_loss.hasError('required') && professional_form_step5.controls.time_loss.touched\">\r\n          <p class=\"content\">Please Select Time!</p>\r\n        </ion-item>\r\n\r\n    </div>\r\n\r\n    <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">What has been damaged?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"reported_loss\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"Personal Property\">Personal Property</ion-select-option>\r\n        <ion-select-option value=\"Neighbours Property\">Neighbours Property</ion-select-option>\r\n        <ion-select-option value=\"Third Party Vehicle\">Third Party Vehicle</ion-select-option>\r\n        <ion-select-option value=\"Other\">Other</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"professional_form_step5.controls.reported_loss.hasError('required') && professional_form_step5.controls.reported_loss.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"professional_form_step5.get('reported_loss').value == 'Other'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"reported_loss_other\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step5.controls.reported_loss_other.hasError('required') && professional_form_step5.controls.reported_loss_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Type of damage</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"type_damage\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"Water Damage\">Water Damage</ion-select-option>\r\n        <ion-select-option value=\"Fire\">Fire</ion-select-option>\r\n        <ion-select-option value=\"Smoke\">Smoke</ion-select-option>\r\n        <ion-select-option value=\"Dent\">Dent</ion-select-option>\r\n        <ion-select-option value=\"Scratch\">Scratch</ion-select-option>\r\n        <ion-select-option value=\"Broken\">Broken</ion-select-option>\r\n        <ion-select-option value=\"Lost\">Lost</ion-select-option>\r\n        <ion-select-option value=\"Other\">Other</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"professional_form_step5.controls.type_damage.hasError('required') && professional_form_step5.controls.type_damage.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"professional_form_step5.get('type_damage').value == 'Other'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"type_damage_other\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step5.controls.type_damage_other.hasError('required') && professional_form_step5.controls.type_damage_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">How did the damage occur?</ion-label>\r\n      <ion-textarea rows=\"3\" formControlName=\"how_damage_occur\" type=\"text\" color=\"primary\" class=\"input-box\">\r\n      </ion-textarea>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"professional_form_step5.controls.how_damage_occur.hasError('required') && professional_form_step5.controls.how_damage_occur.touched\">\r\n      <p class=\"content\">Please Enter Required Field!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"professional_form_step5.controls.how_damage_occur.hasError('maxlength') && professional_form_step5.controls.how_damage_occur.touched\">\r\n      <p class=\"content\">Allow Only 140 Characters!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Do you know the cost of the damage?</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"reported_gross_estimate\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"professional_form_step5.controls.reported_gross_estimate.hasError('required') && professional_form_step5.controls.reported_gross_estimate.touched\">\r\n      <p class=\"content\">Please Enter Required Field!</p>\r\n    </ion-item>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\" (click)=\"professionalStep5Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n      <!-- (click)=\"genralNext()\" -->\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/professional-indemnity/professional-step5/professional-step5.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step5/professional-step5.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ProfessionalStep5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalStep5PageModule", function() { return ProfessionalStep5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professional_step5_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./professional-step5.page */ "./src/app/professional-indemnity/professional-step5/professional-step5.page.ts");










const routes = [
    {
        path: '',
        component: _professional_step5_page__WEBPACK_IMPORTED_MODULE_9__["ProfessionalStep5Page"]
    }
];
let ProfessionalStep5PageModule = class ProfessionalStep5PageModule {
};
ProfessionalStep5PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_professional_step5_page__WEBPACK_IMPORTED_MODULE_9__["ProfessionalStep5Page"]],
        providers: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__["CommonMockService"],
        ],
    })
], ProfessionalStep5PageModule);



/***/ }),

/***/ "./src/app/professional-indemnity/professional-step5/professional-step5.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step5/professional-step5.page.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Zlc3Npb25hbC1pbmRlbW5pdHkvcHJvZmVzc2lvbmFsLXN0ZXA1L3Byb2Zlc3Npb25hbC1zdGVwNS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/professional-indemnity/professional-step5/professional-step5.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step5/professional-step5.page.ts ***!
  \**************************************************************************************/
/*! exports provided: ProfessionalStep5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalStep5Page", function() { return ProfessionalStep5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");







let ProfessionalStep5Page = class ProfessionalStep5Page {
    constructor(navCtrl, router, formBuilder, _cS, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
        this._cS = _cS;
        this.statusBar = statusBar;
        this.professional_step5_fb();
        //this.formControlValueChanged();
        this.setClaimData();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    professional_step5_fb() {
        this.professional_form_step5 = this.formBuilder.group({
            personal_injury: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            how_injury_occur: [null],
            nature_injury: [null],
            date_loss: [null],
            time_loss: [null],
            reported_loss: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reported_loss_other: [null],
            type_damage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            type_damage_other: [null],
            how_damage_occur: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(140), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            reported_gross_estimate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    formControlValueChanged() {
        this.professional_form_step5.get('personal_injury')
            .valueChanges.subscribe((val) => {
            const how_injury_occur = this.professional_form_step5.get('how_injury_occur');
            const nature_injury = this.professional_form_step5.get('nature_injury');
            const date_loss = this.professional_form_step5.get('date_loss');
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
                how_injury_occur.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(140), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]);
                nature_injury.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(140), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]);
                date_loss.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
        });
        this.professional_form_step5.get('type_damage')
            .valueChanges.subscribe((val) => {
            const type_damage_other = this.professional_form_step5.get('type_damage_other');
            if (val == "Other") {
                type_damage_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                type_damage_other.patchValue(null);
                type_damage_other.clearValidators();
                type_damage_other.updateValueAndValidity();
            }
        });
        this.professional_form_step5.get('reported_loss')
            .valueChanges.subscribe((val) => {
            const reported_loss_other = this.professional_form_step5.get('reported_loss_other');
            if (val == "Other") {
                reported_loss_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                reported_loss_other.patchValue(null);
                reported_loss_other.clearValidators();
                reported_loss_other.updateValueAndValidity();
            }
        });
    }
    professionalStep5Next() {
        for (let v in this.professional_form_step5.controls) {
            this.professional_form_step5.controls[v].markAsTouched();
        }
        if (this.professional_form_step5.valid) {
            const step5 = {
                "step": 'step5',
                "ClaimNumber": localStorage.getItem('ProfessionalClaimNumber'),
                "personal_injury": this.professional_form_step5.value.personal_injury,
                "how_injury_occur": this.professional_form_step5.value.how_injury_occur,
                "nature_injury": this.professional_form_step5.value.nature_injury,
                "date_loss": this.professional_form_step5.value.date_loss,
                "time_loss": this.professional_form_step5.value.time_loss,
                "reported_loss": this.professional_form_step5.value.reported_loss,
                "reported_loss_other": this.professional_form_step5.value.reported_loss_other,
                "type_damage": this.professional_form_step5.value.type_damage,
                "type_damage_other": this.professional_form_step5.value.type_damage_other,
                "how_damage_occur": this.professional_form_step5.value.how_damage_occur,
                "reported_gross_estimate": this.professional_form_step5.value.reported_gross_estimate,
            };
            this._cS.put_API(this._cS.URL_Professional_Claim_Post(), step5)
                .subscribe((data) => {
                // this.spinner.hide();
                if (data.status == 0) {
                    this.setClaimData();
                    this.router.navigate(['/professional-step6']);
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
                    this.professional_form_step5.setValue({
                        personal_injury: this.editClaimData.personal_injury,
                        how_injury_occur: this.editClaimData.how_injury_occur,
                        nature_injury: this.editClaimData.nature_injury,
                        date_loss: this.editClaimData.date_loss,
                        time_loss: this.editClaimData.time_loss,
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
};
ProfessionalStep5Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
];
ProfessionalStep5Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-professional-step5',
        template: __webpack_require__(/*! raw-loader!./professional-step5.page.html */ "./node_modules/raw-loader/index.js!./src/app/professional-indemnity/professional-step5/professional-step5.page.html"),
        styles: [__webpack_require__(/*! ./professional-step5.page.scss */ "./src/app/professional-indemnity/professional-step5/professional-step5.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
], ProfessionalStep5Page);



/***/ })

}]);
//# sourceMappingURL=professional-indemnity-professional-step5-professional-step5-module-es2015.js.map