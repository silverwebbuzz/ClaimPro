(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medical-malpractice-medical-step2-medical-step2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/medical-malpractice/medical-step2/medical-step2.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/medical-malpractice/medical-step2/medical-step2.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <!-- <ion-buttons>\r\n        <ion-button color=\"primary\" (click)=\"back()\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons> -->\r\n      <ion-title color=\"primary\" class=\"head\">Client / Policyholder</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content padding>\r\n  \r\n    <form [formGroup]=\"medical_form_step2\" autocomplete=\"off\">\r\n  \r\n      <!-- <div class=\"div-que\">\r\n        <ion-label class=\"lbl-head\">Do you trade under a business name?</ion-label>\r\n  \r\n        <ion-radio-group formControlName=\"business_name\">\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">No</ion-label>\r\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </div> -->\r\n  \r\n      <!-- <div class=\"div-Y\" *ngIf=\"this.medical_form_step2.get('business_name').value == 'true'\">\r\n  \r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">Trading name</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"trading_name\" color=\"primary\" class=\"input-box\"></ion-input>\r\n          </ion-item>\r\n  \r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"medical_form_step2.controls.trading_name.hasError('required') && medical_form_step2.controls.trading_name.touched\">\r\n            <p class=\"content\">Please Enter Trading name!</p>\r\n          </ion-item>\r\n  \r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">ABN</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"abn_client\" color=\"primary\" class=\"input-box\"></ion-input>\r\n          </ion-item>\r\n  \r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"medical_form_step2.controls.abn_client.hasError('required') && medical_form_step2.controls.abn_client.touched\">\r\n            <p class=\"content\">Please Enter ABN!</p>\r\n          </ion-item>\r\n  \r\n        </div> -->\r\n  \r\n        <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n          <ion-label position=\"stacked\" class=\"lbl-dropdown\">On what basis are you employed?</ion-label>\r\n          <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"employment_classification\" class=\"btn-select bg\" mode=\"md\">\r\n              <ion-select-option *ngFor=\"let opt of employment_classification | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n            <!-- <ion-select-option value=\"Employee (Full time)\">Employee (Full time)</ion-select-option>\r\n            <ion-select-option value=\"Employee (Part Time)\">Employee (Part Time)</ion-select-option>\r\n            <ion-select-option value=\"Sole Trader\">Sole Trader</ion-select-option>\r\n            <ion-select-option value=\"Partner\">Partner</ion-select-option>\r\n            <ion-select-option value=\"Locum\">Locum</ion-select-option>\r\n            <ion-select-option value=\"Principle\">Principle</ion-select-option>\r\n            <ion-select-option value=\"Other\">Other</ion-select-option> -->\r\n          </ion-select>\r\n        </ion-item>\r\n  \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"medical_form_step2.controls.employment_classification.hasError('required') && medical_form_step2.controls.employment_classification.touched\">\r\n          <p class=\"content\">Please Select Required Field!</p>\r\n        </ion-item>\r\n  \r\n        <!-- Other -->\r\n        <div *ngIf=\"medical_form_step2.get('employment_classification').value == '1880'\">\r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n            <ion-input type=\"text\" color=\"primary\" formControlName=\"employment_classification_other\" class=\"input-box\"></ion-input>\r\n          </ion-item>\r\n  \r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"medical_form_step2.controls.employment_classification_other.hasError('required') && medical_form_step2.controls.employment_classification_other.touched\">\r\n            <p class=\"content\">Please Enter Required Field!</p>\r\n          </ion-item>\r\n        </div>\r\n  \r\n        <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n          <ion-label position=\"stacked\" class=\"lbl-dropdown\">What is your employment status?</ion-label>\r\n          <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"employment_status\" class=\"btn-select bg\" mode=\"md\">\r\n              <!-- <ion-select-option *ngFor=\"let opt of employment_status | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option> -->\r\n            <ion-select-option value=\"1882\">Private Practioner</ion-select-option>\r\n            <ion-select-option value=\"1883\">Partner</ion-select-option>\r\n            <ion-select-option value=\"1884\">Public Practioner</ion-select-option>\r\n            <ion-select-option value=\"1943\">Restricted(Less then 15 hours)</ion-select-option>\r\n            <ion-select-option value=\"1944\">Retiree</ion-select-option>\r\n            <ion-select-option value=\"1945\">1st Year Practioner</ion-select-option>\r\n            <ion-select-option value=\"1946\">Locum</ion-select-option>\r\n            <ion-select-option value=\"1947\">Student</ion-select-option>\r\n            <ion-select-option value=\"1885\">Other</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n  \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"medical_form_step2.controls.employment_status.hasError('required') && medical_form_step2.controls.employment_status.touched\">\r\n          <p class=\"content\">Please Select Required Field!</p>\r\n        </ion-item>\r\n  \r\n        <!-- Other -->\r\n        <div *ngIf=\"medical_form_step2.get('employment_status').value == '1885'\">\r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n            <ion-input type=\"text\" color=\"primary\" formControlName=\"employment_status_other\" class=\"input-box\">\r\n            </ion-input>\r\n          </ion-item>\r\n  \r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"medical_form_step2.controls.employment_status_other.hasError('required') && medical_form_step2.controls.employment_status_other.touched\">\r\n            <p class=\"content\">Please Enter Required Field!</p>\r\n          </ion-item>\r\n        </div>\r\n  \r\n        <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n          <ion-label position=\"stacked\" class=\"lbl-dropdown\">What is your length experience?</ion-label>\r\n          <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"years_experience\" class=\"btn-select bg\" mode=\"md\">\r\n            <ion-select-option value=\"Less than 1 year\">Less than 1 year</ion-select-option>\r\n            <ion-select-option value=\"1-5 years\">1 - 5 years</ion-select-option>\r\n            <ion-select-option value=\"More than 5 years\">More than 5 years</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n  \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"medical_form_step2.controls.years_experience.hasError('required') && medical_form_step2.controls.years_experience.touched\">\r\n          <p class=\"content\">Please Select Required Field!</p>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n            <ion-label position=\"stacked\" class=\"lbl-dropdown\">Where did you qualify?</ion-label>\r\n            <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"where_qualified\" class=\"btn-select bg\" mode=\"md\">\r\n                <ion-select-option *ngFor=\"let opt of where_qualified | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n              <!-- <ion-select-option value=\"University\">University</ion-select-option>\r\n              <ion-select-option value=\"Overseas Qualification\">Overseas Qualification</ion-select-option>\r\n              <ion-select-option value=\"Other\">Other</ion-select-option> -->\r\n            </ion-select>\r\n          </ion-item>\r\n    \r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"medical_form_step2.controls.where_qualified.hasError('required') && medical_form_step2.controls.where_qualified.touched\">\r\n            <p class=\"content\">Please Select Required Field!</p>\r\n          </ion-item>\r\n    \r\n          <!-- Other -->\r\n          <div *ngIf=\"medical_form_step2.get('where_qualified').value == '1895'\">\r\n            <ion-item lines=\"none\" class=\"input-item add\">\r\n              <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n              <ion-input type=\"text\" color=\"primary\" formControlName=\"where_qualified_other\" class=\"input-box\">\r\n              </ion-input>\r\n            </ion-item>\r\n    \r\n            <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n              *ngIf=\"medical_form_step2.controls.where_qualified_other.hasError('required') && medical_form_step2.controls.where_qualified_other.touched\">\r\n              <p class=\"content\">Please Enter Required Field!</p>\r\n            </ion-item>\r\n          </div>\r\n\r\n          <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n              <ion-label position=\"stacked\" class=\"lbl-dropdown\">What type of practitioner are you?</ion-label>\r\n              <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"type_practioner\" class=\"btn-select bg\" mode=\"md\">\r\n                  <ion-select-option *ngFor=\"let opt of type_practioner | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n                <!-- <ion-select-option value=\"General\">General</ion-select-option>\r\n                <ion-select-option value=\"Sports\">Sports</ion-select-option>\r\n                <ion-select-option value=\"Musculoskeletal\">Musculoskeletal</ion-select-option>\r\n                <ion-select-option value=\"Cardiothoracic\">Cardiothoracic</ion-select-option>\r\n                <ion-select-option value=\"Neurological\">Neurological</ion-select-option>\r\n                <ion-select-option value=\"Aquatic\">Aquatic</ion-select-option>\r\n                <ion-select-option value=\"Paediatric\">Paediatric</ion-select-option>\r\n                <ion-select-option value=\"Genontological\">Genontological</ion-select-option>\r\n                <ion-select-option value=\"Continence & Womens Health\">Continence & Womens Health</ion-select-option>\r\n                <ion-select-option value=\"Animal Physiotherapist\">Animal Physiotherapist</ion-select-option>\r\n                <ion-select-option value=\"Acupuncture\">Acupuncture</ion-select-option>\r\n                <ion-select-option value=\"Aged Care\">Aged Care</ion-select-option>\r\n                <ion-select-option value=\"Occupational Physiotherapy\">Occupational Physiotherapy</ion-select-option>\r\n                <ion-select-option value=\"Other\">Other</ion-select-option> -->\r\n              </ion-select>\r\n            </ion-item>\r\n      \r\n            <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n              *ngIf=\"medical_form_step2.controls.type_practioner.hasError('required') && medical_form_step2.controls.type_practioner.touched\">\r\n              <p class=\"content\">Please Select Required Field!</p>\r\n            </ion-item>\r\n      \r\n            <!-- Other -->\r\n            <div *ngIf=\"medical_form_step2.get('type_practioner').value == '1890'\">\r\n              <ion-item lines=\"none\" class=\"input-item add\">\r\n                <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n                <ion-input type=\"text\" color=\"primary\" formControlName=\"type_practioner_other\" class=\"input-box\">\r\n                </ion-input>\r\n              </ion-item>\r\n      \r\n              <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n                *ngIf=\"medical_form_step2.controls.type_practioner_other.hasError('required') && medical_form_step2.controls.type_practioner_other.touched\">\r\n                <p class=\"content\">Please Enter Required Field!</p>\r\n              </ion-item>\r\n            </div>\r\n  \r\n    </form>\r\n  \r\n  </ion-content>\r\n  \r\n  <ion-footer class=\"btns-footer\">\r\n    <ion-row class=\"row-footer\">\r\n      <ion-col class=\"col-footer border-R\">\r\n        <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n          <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col class=\"col-footer border-L\">\r\n        <ion-button expand=\"full\" class=\"btn-next\" (click)=\"medicalStep2Next()\">\r\n          <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-footer>"

/***/ }),

/***/ "./src/app/medical-malpractice/medical-step2/medical-step2.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/medical-malpractice/medical-step2/medical-step2.module.ts ***!
  \***************************************************************************/
/*! exports provided: MedicalStep2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalStep2PageModule", function() { return MedicalStep2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _medical_step2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medical-step2.page */ "./src/app/medical-malpractice/medical-step2/medical-step2.page.ts");







var routes = [
    {
        path: '',
        component: _medical_step2_page__WEBPACK_IMPORTED_MODULE_6__["MedicalStep2Page"]
    }
];
var MedicalStep2PageModule = /** @class */ (function () {
    function MedicalStep2PageModule() {
    }
    MedicalStep2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_medical_step2_page__WEBPACK_IMPORTED_MODULE_6__["MedicalStep2Page"]]
        })
    ], MedicalStep2PageModule);
    return MedicalStep2PageModule;
}());



/***/ }),

/***/ "./src/app/medical-malpractice/medical-step2/medical-step2.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/medical-malpractice/medical-step2/medical-step2.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGljYWwtbWFscHJhY3RpY2UvbWVkaWNhbC1zdGVwMi9tZWRpY2FsLXN0ZXAyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/medical-malpractice/medical-step2/medical-step2.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/medical-malpractice/medical-step2/medical-step2.page.ts ***!
  \*************************************************************************/
/*! exports provided: MedicalStep2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalStep2Page", function() { return MedicalStep2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");







var MedicalStep2Page = /** @class */ (function () {
    function MedicalStep2Page(navCtrl, _cS, router, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this._cS = _cS;
        this.router = router;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.medical_step2_fb();
        this.setClaimData();
        //this.formControlValueChanged();
    }
    MedicalStep2Page.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    MedicalStep2Page.prototype.medical_step2_fb = function () {
        this.medical_form_step2 = this.formBuilder.group({
            // business_name: [null, Validators.required],
            // trading_name: [null],
            // abn_client: [null],
            employment_classification: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            employment_classification_other: [null],
            employment_status: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            employment_status_other: [null],
            years_experience: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            where_qualified: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            where_qualified_other: [null],
            type_practioner: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type_practioner_other: [null],
        });
    };
    MedicalStep2Page.prototype.formControlValueChanged = function () {
        var _this = this;
        this.medical_form_step2.get('business_name')
            .valueChanges.subscribe(function (val) {
            var trading_name = _this.medical_form_step2.get('trading_name');
            var abn_client = _this.medical_form_step2.get('abn_client');
            trading_name.patchValue(null);
            trading_name.clearValidators();
            trading_name.updateValueAndValidity();
            abn_client.patchValue(null);
            abn_client.clearValidators();
            abn_client.updateValueAndValidity();
            if (val == "true") {
                trading_name.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                abn_client.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)]);
            }
        });
        this.medical_form_step2.get('employment_classification')
            .valueChanges.subscribe(function (val) {
            var employment_classification_other = _this.medical_form_step2.get('employment_classification_other');
            if (val == "1880") {
                employment_classification_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                employment_classification_other.patchValue(null);
                employment_classification_other.clearValidators();
                employment_classification_other.updateValueAndValidity();
            }
        });
        this.medical_form_step2.get('employment_status')
            .valueChanges.subscribe(function (val) {
            var employment_status_other = _this.medical_form_step2.get('employment_status_other');
            if (val == '1885') {
                employment_status_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                employment_status_other.patchValue(null);
                employment_status_other.clearValidators();
                employment_status_other.updateValueAndValidity();
            }
        });
        this.medical_form_step2.get('where_qualified')
            .valueChanges.subscribe(function (val) {
            var where_qualified_other = _this.medical_form_step2.get('where_qualified_other');
            if (val == "1895") {
                where_qualified_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                where_qualified_other.patchValue(null);
                where_qualified_other.clearValidators();
                where_qualified_other.updateValueAndValidity();
            }
        });
        this.medical_form_step2.get('type_practioner')
            .valueChanges.subscribe(function (val) {
            var type_practioner_other = _this.medical_form_step2.get('type_practioner_other');
            if (val == "1890") {
                type_practioner_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                type_practioner_other.patchValue(null);
                type_practioner_other.clearValidators();
                type_practioner_other.updateValueAndValidity();
            }
        });
    };
    MedicalStep2Page.prototype.medicalStep2Next = function () {
        var _this = this;
        for (var v in this.medical_form_step2.controls) {
            this.medical_form_step2.controls[v].markAsTouched();
        }
        if (this.medical_form_step2.valid) {
            var step2 = {
                "step": 'step2',
                "ClaimNumber": localStorage.getItem('MedicalClaimNumber'),
                // "business_name": this.medical_form_step2.value.business_name,
                // "trading_name": this.medical_form_step2.value.trading_name,
                // "abn_client": this.medical_form_step2.value.abn_client,
                'employment_classification': this.medical_form_step2.value.employment_classification,
                "employment_classification_other": this.medical_form_step2.value.employment_classification_other,
                "employment_status": this.medical_form_step2.value.employment_status,
                "employment_status_other": this.medical_form_step2.value.employment_status_other,
                "years_experience": this.medical_form_step2.value.years_experience,
                'where_qualified': this.medical_form_step2.value.where_qualified,
                "where_qualified_other": this.medical_form_step2.value.where_qualified_other,
                "type_practioner": this.medical_form_step2.value.type_practioner,
                "type_practioner_other": this.medical_form_step2.value.type_practioner_other,
            };
            this._cS.put_API(this._cS.URL_Medical_Claim_Post(), step2)
                .subscribe(function (data) {
                if (data.status == 0) {
                    _this.setClaimData();
                    _this.router.navigate(['/medical-step3']);
                }
                else {
                }
            }, function (err) {
            });
        }
    };
    MedicalStep2Page.prototype.ngOnInit = function () {
        var _this = this;
        // dropdown value
        /* Step - 2 employment_classification */
        this._cS.getoptionvalue_API(113)
            .subscribe(function (data) {
            if (data.status == 0) {
                _this.employment_classification = data.data;
            }
        });
        this._cS.getoptionvalue_API(114)
            .subscribe(function (data) {
            if (data.status == 0) {
                _this.employment_status = data.data;
            }
        });
        this._cS.getoptionvalue_API(116)
            .subscribe(function (data) {
            if (data.status == 0) {
                _this.where_qualified = data.data;
            }
        });
        this._cS.getoptionvalue_API(115)
            .subscribe(function (data) {
            if (data.status == 0) {
                _this.type_practioner = data.data;
            }
        });
    };
    MedicalStep2Page.prototype.setClaimData = function () {
        var _this = this;
        var claimNumber = localStorage.getItem('MedicalClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe(function (data) {
                if (data.status == 0) {
                    _this.editClaimData = data.data;
                    if (_this.editClaimData.employment_classification) {
                        var employment_classification = JSON.parse(_this.editClaimData.employment_classification);
                        for (var employment_classification_set in employment_classification) {
                        }
                    }
                    else {
                        employment_classification_set = null;
                    }
                    if (_this.editClaimData.employment_status) {
                        var employment_status = JSON.parse(_this.editClaimData.employment_status);
                        for (var employment_status_set in employment_status) {
                        }
                    }
                    else {
                        employment_status_set = null;
                    }
                    if (_this.editClaimData.type_practioner) {
                        var type_practioner = JSON.parse(_this.editClaimData.type_practioner);
                        for (var type_practioner_set in type_practioner) {
                        }
                    }
                    else {
                        type_practioner_set = null;
                    }
                    if (_this.editClaimData.where_qualified) {
                        var where_qualified = JSON.parse(_this.editClaimData.where_qualified);
                        for (var where_qualified_set in where_qualified) {
                        }
                    }
                    else {
                        where_qualified_set = null;
                    }
                    _this.medical_form_step2.setValue({
                        //business_name: this.editClaimData.business_name,
                        // trading_name: this.editClaimData.trading_name,
                        // abn_client: this.editClaimData.abn_client,
                        employment_classification: employment_classification_set,
                        employment_classification_other: _this.editClaimData.employment_classification_other,
                        employment_status: employment_status_set,
                        employment_status_other: _this.editClaimData.employment_status_other,
                        years_experience: _this.editClaimData.years_experience,
                        where_qualified: where_qualified_set,
                        where_qualified_other: _this.editClaimData.where_qualified_other,
                        type_practioner: type_practioner_set,
                        type_practioner_other: _this.editClaimData.type_practioner_other,
                    });
                }
            });
        }
    };
    MedicalStep2Page.prototype.back = function () {
        this.navCtrl.pop();
    };
    MedicalStep2Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] }
    ]; };
    MedicalStep2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medical-step2',
            template: __webpack_require__(/*! raw-loader!./medical-step2.page.html */ "./node_modules/raw-loader/index.js!./src/app/medical-malpractice/medical-step2/medical-step2.page.html"),
            styles: [__webpack_require__(/*! ./medical-step2.page.scss */ "./src/app/medical-malpractice/medical-step2/medical-step2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
    ], MedicalStep2Page);
    return MedicalStep2Page;
}());



/***/ })

}]);
//# sourceMappingURL=medical-malpractice-medical-step2-medical-step2-module-es5.js.map