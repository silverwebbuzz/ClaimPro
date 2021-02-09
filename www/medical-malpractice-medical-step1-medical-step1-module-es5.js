(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medical-malpractice-medical-step1-medical-step1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/medical-malpractice/medical-step1/medical-step1.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/medical-malpractice/medical-step1/medical-step1.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Client / Policyholder</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"medical_form_step1\" autocomplete=\"off\">\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">How would you like to be contacted?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"preferred_communication\" class=\"btn-select bg\" mode=\"md\">\r\n          <ion-select-option *ngFor=\"let opt of preferred_communication | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n        <!-- <ion-select-option value=\"Telephone\">Telephone</ion-select-option>\r\n        <ion-select-option value=\"Email\">Email</ion-select-option>\r\n        <ion-select-option value=\"SMS\">SMS</ion-select-option>\r\n        <ion-select-option value=\"Letter\">Letter</ion-select-option> -->\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"medical_form_step1.controls.preferred_communication.hasError('required') && medical_form_step1.controls.preferred_communication.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown lbl-over\">Are you making a personal claim or business claim?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"type_entitiy\" class=\"btn-select bg\" mode=\"md\">\r\n          <ng-container *ngFor=\"let opt of client_type | keyvalue\">\r\n          <ion-select-option *ngIf=\"opt.key == '1001' || opt.key == '1002'\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n        <!-- <ion-select-option value=\"Personal\">Personal</ion-select-option>\r\n        <ion-select-option value=\"Commercial\">Commercial</ion-select-option>\r\n        <ion-select-option value=\"Government\">Government</ion-select-option>\r\n        <ion-select-option value=\"Association\">Association</ion-select-option> -->\r\n        </ng-container>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"medical_form_step1.controls.type_entitiy.hasError('required') && medical_form_step1.controls.type_entitiy.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <div *ngIf=\"medical_form_step1.get('type_entitiy').value == '1002' ||  medical_form_step1.get('type_entitiy').value == '1004' || medical_form_step1.get('type_entitiy').value == '1003'\">\r\n\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">Business name</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"client_company\" color=\"primary\" class=\"input-box\"></ion-input>\r\n          </ion-item>\r\n  \r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"medical_form_step1.controls.client_company.hasError('required') && medical_form_step1.controls.client_company.touched\">\r\n          <p class=\"content\">Please Enter Required Field!</p>\r\n        </ion-item>\r\n  \r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">Trading name</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"trading_name\" color=\"primary\" class=\"input-box\"></ion-input>\r\n          </ion-item>\r\n  \r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"medical_form_step1.controls.trading_name.hasError('required') && medical_form_step1.controls.trading_name.touched\">\r\n          <p class=\"content\">Please Enter Required Field!</p>\r\n        </ion-item>\r\n  \r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">ABN</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"abn_client\" color=\"primary\" class=\"input-box\"></ion-input>\r\n          </ion-item>\r\n  \r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"medical_form_step1.controls.abn_client.hasError('required') && medical_form_step1.controls.abn_client.touched\">\r\n          <p class=\"content\">Please Enter Required Field!</p>\r\n        </ion-item>\r\n  \r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">ITC%</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"itc_client\" color=\"primary\" class=\"input-box\"></ion-input>\r\n          </ion-item>\r\n  \r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"medical_form_step1.controls.itc_client.hasError('required') && medical_form_step1.controls.itc_client.touched\">\r\n          <p class=\"content\">Please Enter Required Field!</p>\r\n        </ion-item>\r\n\r\n    </div>\r\n    \r\n    <!-- <div class=\"div-que add-margin\">\r\n      <ion-label class=\"lbl-head\">Are you licensed to conduct Health Care Services?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"health_care_service\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div> -->\r\n\r\n    <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">What is your professional occupation?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"description_business\" class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"Acupuncture\">Acupuncture</ion-select-option>\r\n        <ion-select-option value=\"Chiropractor\">Chiropractor</ion-select-option>\r\n        <ion-select-option value=\"Doctor\">Doctor</ion-select-option>\r\n        <ion-select-option value=\"Herbalist\">Herbalist</ion-select-option>\r\n        <ion-select-option value=\"Instructor\">Instructor</ion-select-option>\r\n        <ion-select-option value=\"Masseuse\">Masseuse</ion-select-option>\r\n        <ion-select-option value=\"Myotherapy\">Myotherapy</ion-select-option>\r\n        <ion-select-option value=\"Nursing\">Nursing</ion-select-option>\r\n        <ion-select-option value=\"Osteopath\">Osteopath</ion-select-option>\r\n        <ion-select-option value=\"Pharmacist\">Pharmacist</ion-select-option>\r\n        <ion-select-option value=\"Physiotherapist\">Physiotherapist</ion-select-option>\r\n        <ion-select-option value=\"Podiatrist\">Podiatrist</ion-select-option>\r\n        <ion-select-option value=\"Psychologist\">Psychologist</ion-select-option>\r\n        <ion-select-option value=\"Spa and Beauty\">Spa and Beauty</ion-select-option>\r\n        <ion-select-option value=\"Therapist\">Therapist</ion-select-option>\r\n        <ion-select-option value=\"Other\">Other</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"medical_form_step1.controls.description_business.hasError('required') && medical_form_step1.controls.description_business.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"medical_form_step1.get('description_business').value == 'Other'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"description_business_other\" class=\"input-box\">\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step1.controls.description_business_other.hasError('required') && medical_form_step1.controls.description_business_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <div class=\"div-que add-margin\">\r\n      <ion-label class=\"lbl-head\">Are you required to be licensed to practice?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"licensed_service\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"div-que add-margin\">\r\n      <ion-label class=\"lbl-head\">Do you hold the required qualifications?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"required_qualifications\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <ion-item class=\"item-dropdown\" lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Select your professional association</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"association_name_picklist\" class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"MAA\">MAA</ion-select-option>\r\n        <ion-select-option value=\"ACPA\">ACPA</ion-select-option>\r\n        <ion-select-option value=\"APODdA\">APODdA</ion-select-option>\r\n        <ion-select-option value=\"MFAA\">MFAA</ion-select-option>\r\n        <ion-select-option value=\"Aussie Home Loans\">Aussie Home Loans</ion-select-option>\r\n        <ion-select-option value=\"Connective\">Connective</ion-select-option>\r\n        <ion-select-option value=\"Mortgage Choice\">Mortgage Choice</ion-select-option>\r\n        <ion-select-option value=\"Outsource Financial\">Outsource Financial</ion-select-option>\r\n        <ion-select-option value=\"National Mortgage Brokers\">National Mortgage Brokers</ion-select-option>\r\n        <ion-select-option value=\"BSA\">BSA</ion-select-option>\r\n        <ion-select-option value=\"APA\">APA</ion-select-option>\r\n        <ion-select-option value=\"Australian Podiatrists Council\">Australian Podiatrists Council</ion-select-option>\r\n        <ion-select-option value=\"PACFA\">PACFA</ion-select-option>\r\n        <ion-select-option value=\"Pay Wise\">Pay Wise</ion-select-option>\r\n        <ion-select-option value=\"APNA\">APNA</ion-select-option>\r\n        <ion-select-option value=\"Kings Transport\">Kings Transport</ion-select-option>\r\n        <ion-select-option value=\"MMS\">MMS</ion-select-option>\r\n        <ion-select-option value=\"SSAA\">SSAA</ion-select-option>\r\n        <ion-select-option value=\"Other\">Other</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"medical_form_step1.controls.association_name_picklist.hasError('required') && medical_form_step1.controls.association_name_picklist.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"medical_form_step1.get('association_name_picklist').value == 'Other'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"association_name_picklist_other\" class=\"input-box\">\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step1.controls.association_name_picklist_other.hasError('required') && medical_form_step1.controls.association_name_picklist_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\" (click)=\"medicalStep1Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/medical-malpractice/medical-step1/medical-step1.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/medical-malpractice/medical-step1/medical-step1.module.ts ***!
  \***************************************************************************/
/*! exports provided: MedicalStep1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalStep1PageModule", function() { return MedicalStep1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _medical_step1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medical-step1.page */ "./src/app/medical-malpractice/medical-step1/medical-step1.page.ts");







var routes = [
    {
        path: '',
        component: _medical_step1_page__WEBPACK_IMPORTED_MODULE_6__["MedicalStep1Page"]
    }
];
var MedicalStep1PageModule = /** @class */ (function () {
    function MedicalStep1PageModule() {
    }
    MedicalStep1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_medical_step1_page__WEBPACK_IMPORTED_MODULE_6__["MedicalStep1Page"]]
        })
    ], MedicalStep1PageModule);
    return MedicalStep1PageModule;
}());



/***/ }),

/***/ "./src/app/medical-malpractice/medical-step1/medical-step1.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/medical-malpractice/medical-step1/medical-step1.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGljYWwtbWFscHJhY3RpY2UvbWVkaWNhbC1zdGVwMS9tZWRpY2FsLXN0ZXAxLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/medical-malpractice/medical-step1/medical-step1.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/medical-malpractice/medical-step1/medical-step1.page.ts ***!
  \*************************************************************************/
/*! exports provided: MedicalStep1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalStep1Page", function() { return MedicalStep1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");







var MedicalStep1Page = /** @class */ (function () {
    /* dropdown option Variable End */
    function MedicalStep1Page(navCtrl, router, _cS, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.medical_step1_fb();
        this.setClaimData();
        this.formControlValueChanged();
    }
    MedicalStep1Page.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    MedicalStep1Page.prototype.medical_step1_fb = function () {
        this.medical_form_step1 = this.formBuilder.group({
            preferred_communication: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type_entitiy: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            client_company: [null],
            trading_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            abn_client: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            itc_client: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            //health_care_service: [null, Validators.required],
            description_business: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description_business_other: [null],
            licensed_service: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            required_qualifications: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            association_name_picklist: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            association_name_picklist_other: [null],
        });
    };
    MedicalStep1Page.prototype.formControlValueChanged = function () {
        var _this = this;
        this.medical_form_step1.get('type_entitiy')
            .valueChanges.subscribe(function (val) {
            var client_company = _this.medical_form_step1.get('client_company');
            if (val == "1001") {
                client_company.patchValue(null);
                client_company.clearValidators();
                client_company.updateValueAndValidity();
            }
            else {
                client_company.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
        });
        this.medical_form_step1.get('description_business')
            .valueChanges.subscribe(function (val) {
            var description_business_other = _this.medical_form_step1.get('description_business_other');
            if (val == "Other") {
                description_business_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                description_business_other.patchValue(null);
                description_business_other.clearValidators();
                description_business_other.updateValueAndValidity();
            }
        });
        this.medical_form_step1.get('association_name_picklist')
            .valueChanges.subscribe(function (val) {
            var description_business_other = _this.medical_form_step1.get('association_name_picklist_other');
            if (val == "Other") {
                description_business_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                description_business_other.patchValue(null);
                description_business_other.clearValidators();
                description_business_other.updateValueAndValidity();
            }
        });
    };
    MedicalStep1Page.prototype.medicalStep1Next = function () {
        var _this = this;
        for (var v in this.medical_form_step1.controls) {
            this.medical_form_step1.controls[v].markAsTouched();
        }
        if (this.medical_form_step1.valid) {
            var step1 = {
                "step": 'step1',
                "ClaimNumber": localStorage.getItem('MedicalClaimNumber'),
                "contacted": this.medical_form_step1.value.preferred_communication,
                "client_type": this.medical_form_step1.value.type_entitiy,
                "business_name": this.medical_form_step1.value.client_company,
                "trading_name": this.medical_form_step1.value.trading_name,
                "abn_client": this.medical_form_step1.value.abn_client,
                "itc_client": this.medical_form_step1.value.itc_client,
                //"health_care_service" : this.medical_form_step1.value.health_care_service,
                "description_business": this.medical_form_step1.value.description_business,
                "description_business_other": this.medical_form_step1.value.description_business_other,
                "licensed_service": this.medical_form_step1.value.licensed_service,
                "required_qualifications": this.medical_form_step1.value.required_qualifications,
                "association_name_picklist": this.medical_form_step1.value.association_name_picklist,
                "association_name_picklist_other": this.medical_form_step1.value.association_name_picklist_other,
            };
            this._cS.put_API(this._cS.URL_Medical_Claim_Post(), step1)
                .subscribe(function (data) {
                if (data.status == 0) {
                    _this.setClaimData();
                    _this.router.navigate(['/medical-step2']);
                }
                else {
                }
            }, function (err) {
            });
        }
    };
    MedicalStep1Page.prototype.setClaimData = function () {
        var _this = this;
        var claimNumber = localStorage.getItem('MedicalClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe(function (data) {
                if (data.status == 0) {
                    _this.editClaimData = data.data;
                    if (_this.editClaimData.preferred_communication) {
                        var preferred_communication = JSON.parse(_this.editClaimData.preferred_communication);
                        for (var preferred_communication_set in preferred_communication) {
                        }
                    }
                    else {
                        preferred_communication_set = null;
                    }
                    if (_this.editClaimData.type_entitiy) {
                        var type_entitiyArry = JSON.parse(_this.editClaimData.type_entitiy);
                        for (var type_entitiy_set in type_entitiyArry) {
                        }
                    }
                    else {
                        type_entitiy_set = null;
                    }
                    _this.medical_form_step1.setValue({
                        preferred_communication: preferred_communication_set,
                        type_entitiy: type_entitiy_set,
                        client_company: _this.editClaimData.client_company,
                        health_care_service: _this.editClaimData.health_care_service,
                        description_business: _this.editClaimData.description_business,
                        description_business_other: _this.editClaimData.description_business_other,
                        licensed_service: _this.editClaimData.licensed_service,
                        required_qualifications: _this.editClaimData.required_qualifications,
                        association_name_picklist: _this.editClaimData.association_name_picklist,
                        association_name_picklist_other: _this.editClaimData.association_name_picklist_other,
                    });
                }
            });
        }
    };
    MedicalStep1Page.prototype.ngOnInit = function () {
        var _this = this;
        // DropDown Option List Value 
        // How would you like to be contacted
        this._cS.getoptionvalue_API(5)
            .subscribe(function (data) {
            if (data.status == 0) {
                _this.preferred_communication = data.data;
            }
        });
        // Client type
        this._cS.getoptionvalue_API(1)
            .subscribe(function (data) {
            if (data.status == 0) {
                _this.client_type = data.data;
            }
        });
    };
    MedicalStep1Page.prototype.back = function () {
        this.navCtrl.pop();
    };
    MedicalStep1Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] }
    ]; };
    MedicalStep1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medical-step1',
            template: __webpack_require__(/*! raw-loader!./medical-step1.page.html */ "./node_modules/raw-loader/index.js!./src/app/medical-malpractice/medical-step1/medical-step1.page.html"),
            styles: [__webpack_require__(/*! ./medical-step1.page.scss */ "./src/app/medical-malpractice/medical-step1/medical-step1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
    ], MedicalStep1Page);
    return MedicalStep1Page;
}());



/***/ })

}]);
//# sourceMappingURL=medical-malpractice-medical-step1-medical-step1-module-es5.js.map