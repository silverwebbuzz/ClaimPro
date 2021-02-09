(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["professional-indemnity-professional-step2-professional-step2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/professional-indemnity/professional-step2/professional-step2.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/professional-indemnity/professional-step2/professional-step2.page.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Client / Policyholder</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"professional_form_step2\" autocomplete=\"off\">\r\n\r\n    <!-- <div class=\"div-que\">\r\n      <ion-label class=\"lbl-head\">Do you trade under a business name?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"business_name\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div> -->\r\n\r\n    <!-- <div class=\"div-Y\" *ngIf=\"this.professional_form_step2.get('business_name').value == 'true'\">\r\n\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Trading name</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"trading_name\" color=\"primary\" class=\"input-box\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"professional_form_step2.controls.trading_name.hasError('required') && professional_form_step2.controls.trading_name.touched\">\r\n          <p class=\"content\">Please Enter Trading name!</p>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">ABN</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"abn_client\" color=\"primary\" class=\"input-box\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"professional_form_step2.controls.abn_client.hasError('required') && professional_form_step2.controls.abn_client.touched\">\r\n          <p class=\"content\">Please Enter ABN!</p>\r\n        </ion-item>\r\n\r\n      </div> -->\r\n\r\n      <ion-item class=\"item-dropdown\" lines=\"none\">\r\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">On what basis are you employed?</ion-label>\r\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"employee_basis\" class=\"btn-select bg\" mode=\"md\">\r\n          <ion-select-option value=\"Business Owner\">Business Owner</ion-select-option>\r\n          <ion-select-option value=\"Practioner\">Practioner</ion-select-option>\r\n          <ion-select-option value=\"Other\">Other</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step2.controls.employee_basis.hasError('required') && professional_form_step2.controls.employee_basis.touched\">\r\n        <p class=\"content\">Please Select Required Field!</p>\r\n      </ion-item>\r\n\r\n      <!-- Other -->\r\n      <div *ngIf=\"professional_form_step2.get('employee_basis').value == 'Other'\">\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n          <ion-input type=\"text\" color=\"primary\" formControlName=\"employee_basis_other\" class=\"input-box\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"professional_form_step2.controls.employee_basis_other.hasError('required') && professional_form_step2.controls.employee_basis_other.touched\">\r\n          <p class=\"content\">Please Enter Required Field!</p>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">What is your employment status?</ion-label>\r\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"employment_status2\" class=\"btn-select bg\" mode=\"md\">\r\n          <ion-select-option value=\"Full time\">Full time</ion-select-option>\r\n          <ion-select-option value=\"Part time\">Part time</ion-select-option>\r\n          <ion-select-option value=\"Locum\">Locum</ion-select-option>\r\n          <ion-select-option value=\"Other\">Other</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step2.controls.employment_status2.hasError('required') && professional_form_step2.controls.employment_status2.touched\">\r\n        <p class=\"content\">Please Select Required Field!</p>\r\n      </ion-item>\r\n\r\n      <!-- Other -->\r\n      <div *ngIf=\"professional_form_step2.get('employment_status2').value == 'Other'\">\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n          <ion-input type=\"text\" color=\"primary\" formControlName=\"employment_status2_other\" class=\"input-box\">\r\n          </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"professional_form_step2.controls.employment_status2_other.hasError('required') && professional_form_step2.controls.employment_status2_other.touched\">\r\n          <p class=\"content\">Please Enter Required Field!</p>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">What is your length experience?</ion-label>\r\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"length_experience\" class=\"btn-select bg\" mode=\"md\">\r\n          <ion-select-option value=\"less than 1 year\">Less than 1 year</ion-select-option>\r\n          <ion-select-option value=\"1 - 5 ears\">1 - 5 years</ion-select-option>\r\n          <ion-select-option value=\"more than 5 years\">More than 5 years</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step2.controls.length_experience.hasError('required') && professional_form_step2.controls.length_experience.touched\">\r\n        <p class=\"content\">Please Select Required Field!</p>\r\n      </ion-item>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\"(click)=\"professionalStep2Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/professional-indemnity/professional-step2/professional-step2.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step2/professional-step2.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ProfessionalStep2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalStep2PageModule", function() { return ProfessionalStep2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professional_step2_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./professional-step2.page */ "./src/app/professional-indemnity/professional-step2/professional-step2.page.ts");










var routes = [
    {
        path: '',
        component: _professional_step2_page__WEBPACK_IMPORTED_MODULE_9__["ProfessionalStep2Page"]
    }
];
var ProfessionalStep2PageModule = /** @class */ (function () {
    function ProfessionalStep2PageModule() {
    }
    ProfessionalStep2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_professional_step2_page__WEBPACK_IMPORTED_MODULE_9__["ProfessionalStep2Page"]],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__["CommonMockService"],
            ],
        })
    ], ProfessionalStep2PageModule);
    return ProfessionalStep2PageModule;
}());



/***/ }),

/***/ "./src/app/professional-indemnity/professional-step2/professional-step2.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step2/professional-step2.page.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Zlc3Npb25hbC1pbmRlbW5pdHkvcHJvZmVzc2lvbmFsLXN0ZXAyL3Byb2Zlc3Npb25hbC1zdGVwMi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/professional-indemnity/professional-step2/professional-step2.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step2/professional-step2.page.ts ***!
  \**************************************************************************************/
/*! exports provided: ProfessionalStep2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalStep2Page", function() { return ProfessionalStep2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");







var ProfessionalStep2Page = /** @class */ (function () {
    function ProfessionalStep2Page(navCtrl, router, _cS, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.professional_step2_fb();
        //this.formControlValueChanged();
        this.setClaimData();
    }
    ProfessionalStep2Page.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    ProfessionalStep2Page.prototype.professional_step2_fb = function () {
        this.professional_form_step2 = this.formBuilder.group({
            // business_name: [null, Validators.required],
            // abn_client: [null],
            // trading_name: [null],
            employee_basis: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            employee_basis_other: [null],
            employment_status2: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            employment_status2_other: [null],
            length_experience: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    ProfessionalStep2Page.prototype.formControlValueChanged = function () {
        var _this = this;
        this.professional_form_step2.get('business_name')
            .valueChanges.subscribe(function (val) {
            var abn_client = _this.professional_form_step2.get('abn_client');
            var trading_name = _this.professional_form_step2.get('trading_name');
            abn_client.patchValue(null);
            abn_client.clearValidators();
            abn_client.updateValueAndValidity();
            trading_name.patchValue(null);
            trading_name.clearValidators();
            trading_name.updateValueAndValidity();
            if (val == "true") {
                abn_client.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11)]);
                trading_name.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
        });
        this.professional_form_step2.get('employee_basis')
            .valueChanges.subscribe(function (val) {
            var employee_basis_other = _this.professional_form_step2.get('employee_basis_other');
            if (val == "Other") {
                employee_basis_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                employee_basis_other.patchValue(null);
                employee_basis_other.clearValidators();
                employee_basis_other.updateValueAndValidity();
            }
        });
        this.professional_form_step2.get('employment_status2')
            .valueChanges.subscribe(function (val) {
            var employment_status2_other = _this.professional_form_step2.get('employment_status2_other');
            if (val == "Other") {
                employment_status2_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                employment_status2_other.patchValue(null);
                employment_status2_other.clearValidators();
                employment_status2_other.updateValueAndValidity();
            }
        });
    };
    ProfessionalStep2Page.prototype.professionalStep2Next = function () {
        var _this = this;
        for (var v in this.professional_form_step2.controls) {
            this.professional_form_step2.controls[v].markAsTouched();
        }
        if (this.professional_form_step2.valid) {
            var step2 = {
                "step": 'step2',
                "ClaimNumber": localStorage.getItem('ProfessionalClaimNumber'),
                // "business_name": this.professional_form_step2.value.business_name,
                // "trading_name": this.professional_form_step2.value.trading_name,
                // "abn_client": this.professional_form_step2.value.abn_client,
                'employee_basis': this.professional_form_step2.value.employee_basis,
                "employee_basis_other": this.professional_form_step2.value.employee_basis_other,
                "employment_status2": this.professional_form_step2.value.employment_status2,
                "employment_status2_other": this.professional_form_step2.value.employment_status2_other,
                "length_experience": this.professional_form_step2.value.length_experience
            };
            this._cS.put_API(this._cS.URL_Professional_Claim_Post(), step2)
                .subscribe(function (data) {
                if (data.status == 0) {
                    _this.setClaimData();
                    _this.router.navigate(['/professional-step3']);
                }
                else {
                }
            }, function (err) {
            });
        }
    };
    ProfessionalStep2Page.prototype.ngOnInit = function () {
    };
    ProfessionalStep2Page.prototype.back = function () {
        this.navCtrl.pop();
    };
    ProfessionalStep2Page.prototype.setClaimData = function () {
        var _this = this;
        var claimNumber = localStorage.getItem('ProfessionalClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe(function (data) {
                if (data.status == 0) {
                    _this.editClaimData = data.data;
                    _this.professional_form_step2.setValue({
                        //business_name: this.editClaimData.business_name,
                        //abn_client: this.editClaimData.abn_client,
                        //trading_name: this.editClaimData.trading_name,
                        employee_basis: _this.editClaimData.employee_basis,
                        employee_basis_other: _this.editClaimData.employee_basis_other,
                        employment_status2: _this.editClaimData.employment_status2,
                        employment_status2_other: _this.editClaimData.employment_status2_other,
                        length_experience: _this.editClaimData.length_experience,
                    });
                }
            });
        }
    };
    ProfessionalStep2Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
    ]; };
    ProfessionalStep2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-professional-step2',
            template: __webpack_require__(/*! raw-loader!./professional-step2.page.html */ "./node_modules/raw-loader/index.js!./src/app/professional-indemnity/professional-step2/professional-step2.page.html"),
            styles: [__webpack_require__(/*! ./professional-step2.page.scss */ "./src/app/professional-indemnity/professional-step2/professional-step2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
    ], ProfessionalStep2Page);
    return ProfessionalStep2Page;
}());



/***/ })

}]);
//# sourceMappingURL=professional-indemnity-professional-step2-professional-step2-module-es5.js.map