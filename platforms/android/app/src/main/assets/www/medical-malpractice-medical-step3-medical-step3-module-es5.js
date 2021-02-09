(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medical-malpractice-medical-step3-medical-step3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/medical-malpractice/medical-step3/medical-step3.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/medical-malpractice/medical-step3/medical-step3.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Incident details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"medical_form_step3\" autocomplete=\"off\">\r\n\r\n    <div class=\"div-que\">\r\n      <ion-label class=\"lbl-head\">Has a professional overseeing body written to you?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"regulator_inform\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"div-Y\" *ngIf=\"this.medical_form_step3.get('regulator_inform').value == 'true'\">\r\n\r\n      <ion-item class=\"item-dropdown\" lines=\"none\">\r\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">Which organisation?</ion-label>\r\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"regulator\" class=\"btn-select bg\" mode=\"md\">\r\n            <ion-select-option *ngFor=\"let opt of regulator | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n          <!-- <ion-select-option value=\"AHPRA\">AHPRA</ion-select-option>\r\n          <ion-select-option value=\"HCCC\">HCCC</ion-select-option>\r\n          <ion-select-option value=\"OHO\">OHO</ion-select-option>\r\n          <ion-select-option value=\"Coroner\">Coroner</ion-select-option> -->\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step3.controls.regulator.hasError('required') && medical_form_step3.controls.regulator.touched\">\r\n        <p class=\"content\">Please Select Required Field!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Date you received the letter</ion-label>\r\n        <ion-datetime placeholder=\"Select Date\" class=\"input-box box\" formControlName=\"date_received_notification\"\r\n          displayFormat=\"DD MMM YYYY\" min=\"2016-01-01\" max=\"2039-12-31\"></ion-datetime>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step3.controls.date_received_notification.hasError('required') && medical_form_step3.controls.date_received_notification.touched\">\r\n        <p class=\"content\">Please Select Date!</p>\r\n      </ion-item>\r\n\r\n      <ion-label class=\"lbl-contact-blk add-margin\">Attach Letter</ion-label>\r\n\r\n      <div class=\"div-docs add-margin\">\r\n\r\n        <h3 *ngIf=\"attach_letter_image.length == 0\" text-center>Please Select Image!</h3>\r\n\r\n        <ion-list class=\"doc-list\">\r\n            <ion-item lines=\"none\" class=\"doc-item\" *ngFor=\"let img of attach_letter_image; index as pos\" text-wrap>\r\n                <ion-thumbnail slot=\"start\">\r\n                    <ion-img *ngIf=\"img.fileIcon\" src=\"../../../assets/images/files.png\"></ion-img>\r\n                    <ion-img *ngIf=\"!img.fileIcon\" [src]=\"img.path\"></ion-img>\r\n                </ion-thumbnail>\r\n                <ion-label>\r\n                    {{ img.name }}\r\n                </ion-label>\r\n                <ion-button slot=\"end\" fill=\"clear\" (click)=\"delete_attach_letter(img, pos)\">\r\n                    <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n                </ion-button>\r\n            </ion-item>\r\n        </ion-list>\r\n        \r\n        <div class=\"upload-btn-wrapper\">\r\n          <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach Letter</ion-button>\r\n          <input type=\"file\" (change)=\"attach_letter($event)\"\r\n            accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n        </div>\r\n\r\n       \r\n      </div>\r\n\r\n      <div class=\"div-que add-margin\">\r\n\r\n        <ion-label class=\"lbl-head\">Has the selected organisation asked you to respond?</ion-label>\r\n\r\n        <ion-radio-group formControlName=\"regulator_respond\">\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">No</ion-label>\r\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </div>\r\n\r\n      <div class=\"div-Y\" *ngIf=\"this.medical_form_step3.get('regulator_respond').value == 'true'\">\r\n\r\n        <ion-item lines=\"none\" class=\"input-item\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Date you are required to respond</ion-label>\r\n          <ion-datetime placeholder=\"Select Date\" class=\"input-box box\" formControlName=\"date_respond\"\r\n            displayFormat=\"DD MMM YYYY\" min=\"2016-01-01\" max=\"2039-12-31\"></ion-datetime>\r\n        </ion-item>\r\n\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"medical_form_step3.controls.date_respond.hasError('required') && medical_form_step3.controls.date_respond.touched\">\r\n          <p class=\"content\">Please Select Date!</p>\r\n        </ion-item>\r\n\r\n        <div class=\"div-que add-margin\">\r\n\r\n          <ion-label class=\"lbl-head\">Have you already responded?</ion-label>\r\n\r\n          <ion-radio-group formControlName=\"already_respond\">\r\n            <ion-item lines=\"none\" class=\"items-radio\">\r\n              <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n              <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"items-radio\">\r\n              <ion-label class=\"lbl-radio\">No</ion-label>\r\n              <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </div>\r\n\r\n        <div class=\"div-Y\" *ngIf=\"this.medical_form_step3.get('already_respond').value == 'true'\">\r\n\r\n          <ion-label class=\"lbl-contact-blk add\">Attach Letter</ion-label>\r\n\r\n          <div class=\"div-docs add-margin\">\r\n\r\n            <h3 *ngIf=\"attach_have_you_letter_image.length == 0\" text-center>Please Select Image!</h3>\r\n    \r\n            <ion-list class=\"doc-list\">\r\n                <ion-item lines=\"none\" class=\"doc-item\" *ngFor=\"let img of attach_have_you_letter_image; index as pos\" text-wrap>\r\n                    <ion-thumbnail slot=\"start\">\r\n                        <ion-img *ngIf=\"img.fileIcon1\" src=\"../../../assets/images/files.png\"></ion-img>\r\n                        <ion-img *ngIf=\"!img.fileIcon1\" [src]=\"img.path\"></ion-img>\r\n                    </ion-thumbnail>\r\n                    <ion-label>\r\n                        {{ img.name }}\r\n                    </ion-label>\r\n                    <ion-button slot=\"end\" fill=\"clear\" (click)=\"delete_attach_have_you_letter(img, pos)\">\r\n                        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-item>\r\n            </ion-list>\r\n            <div class=\"upload-btn-wrapper\">\r\n              <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach Letter</ion-button>\r\n              <input type=\"file\" (change)=\"attach_have_you_letter($event)\"\r\n                accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n            </div>\r\n    \r\n         \r\n    \r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"div-que add-margin\">\r\n        <ion-label class=\"lbl-head\">Do you require legal assistance for response?</ion-label>\r\n\r\n        <ion-radio-group formControlName=\"require_legal_assistance\">\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">No</ion-label>\r\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\" (click)=\"medicalStep3Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/medical-malpractice/medical-step3/medical-step3.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/medical-malpractice/medical-step3/medical-step3.module.ts ***!
  \***************************************************************************/
/*! exports provided: MedicalStep3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalStep3PageModule", function() { return MedicalStep3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _medical_step3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medical-step3.page */ "./src/app/medical-malpractice/medical-step3/medical-step3.page.ts");







var routes = [
    {
        path: '',
        component: _medical_step3_page__WEBPACK_IMPORTED_MODULE_6__["MedicalStep3Page"]
    }
];
var MedicalStep3PageModule = /** @class */ (function () {
    function MedicalStep3PageModule() {
    }
    MedicalStep3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_medical_step3_page__WEBPACK_IMPORTED_MODULE_6__["MedicalStep3Page"]]
        })
    ], MedicalStep3PageModule);
    return MedicalStep3PageModule;
}());



/***/ }),

/***/ "./src/app/medical-malpractice/medical-step3/medical-step3.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/medical-malpractice/medical-step3/medical-step3.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGljYWwtbWFscHJhY3RpY2UvbWVkaWNhbC1zdGVwMy9tZWRpY2FsLXN0ZXAzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/medical-malpractice/medical-step3/medical-step3.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/medical-malpractice/medical-step3/medical-step3.page.ts ***!
  \*************************************************************************/
/*! exports provided: MedicalStep3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalStep3Page", function() { return MedicalStep3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");







var MedicalStep3Page = /** @class */ (function () {
    function MedicalStep3Page(navCtrl, router, _cS, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.attach_letter_image = [];
        this.attach_have_you_letter_image = [];
        this.attach_letter_image_set = [];
        this.attach_have_you_letter_image_set = [];
        this.ImageServerURL = this._cS.imageUrl();
        this.medical_step3_fb();
        this.formControlValueChanged();
        this.setClaimData();
    }
    MedicalStep3Page.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    MedicalStep3Page.prototype.medical_step3_fb = function () {
        this.medical_form_step3 = this.formBuilder.group({
            regulator_inform: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            regulator: [null],
            date_received_notification: [null],
            regulator_respond: [null],
            date_respond: [null],
            already_respond: [null],
            require_legal_assistance: [null],
        });
    };
    MedicalStep3Page.prototype.formControlValueChanged = function () {
        var _this = this;
        this.medical_form_step3.get('regulator_inform')
            .valueChanges.subscribe(function (val) {
            var regulator = _this.medical_form_step3.get('regulator');
            var date_received_notification = _this.medical_form_step3.get('date_received_notification');
            var regulator_respond = _this.medical_form_step3.get('regulator_respond');
            var require_legal_assistance = _this.medical_form_step3.get('require_legal_assistance');
            regulator.patchValue(null);
            regulator.clearValidators();
            regulator.updateValueAndValidity();
            date_received_notification.patchValue(null);
            date_received_notification.clearValidators();
            date_received_notification.updateValueAndValidity();
            regulator_respond.patchValue(null);
            regulator_respond.clearValidators();
            regulator_respond.updateValueAndValidity();
            require_legal_assistance.patchValue(null);
            require_legal_assistance.clearValidators();
            require_legal_assistance.updateValueAndValidity();
            if (val == "true") {
                regulator.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                date_received_notification.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                regulator_respond.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                require_legal_assistance.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
        });
        this.medical_form_step3.get('regulator_respond')
            .valueChanges.subscribe(function (val) {
            var date_respond = _this.medical_form_step3.get('date_respond');
            var already_respond = _this.medical_form_step3.get('already_respond');
            date_respond.patchValue(null);
            date_respond.clearValidators();
            date_respond.updateValueAndValidity();
            already_respond.patchValue(null);
            already_respond.clearValidators();
            already_respond.updateValueAndValidity();
            if (val == "true") {
                date_respond.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                already_respond.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
        });
    };
    MedicalStep3Page.prototype.medicalStep3Next = function () {
        var _this = this;
        for (var v in this.medical_form_step3.controls) {
            this.medical_form_step3.controls[v].markAsTouched();
        }
        if (this.medical_form_step3.valid) {
            var step3 = {
                "step": 'step3',
                "ClaimNumber": localStorage.getItem('MedicalClaimNumber'),
                "regulator_inform": this.medical_form_step3.value.regulator_inform,
                "regulator": this.medical_form_step3.value.regulator,
                "date_received_notification": this.medical_form_step3.value.date_received_notification,
                "regulator_respond": this.medical_form_step3.value.regulator_respond,
                "date_respond": this.medical_form_step3.value.date_respond,
                "already_respond": this.medical_form_step3.value.already_respond,
                "attach_letter": this.attach_letter_image_set,
                "attach_have_you_letter": this.attach_have_you_letter_image_set,
                "require_legal_assistance": this.medical_form_step3.value.require_legal_assistance,
            };
            this._cS.put_API(this._cS.URL_Medical_Claim_Post(), step3)
                .subscribe(function (data) {
                if (data.status == 0) {
                    _this.attach_letter_image_set = [];
                    _this.attach_have_you_letter_image_set = [];
                    _this.setClaimData();
                    _this.router.navigate(['/medical-step4']);
                }
                else {
                }
            }, function (err) {
            });
        }
    };
    MedicalStep3Page.prototype.ngOnInit = function () {
        var _this = this;
        /* Which organisation?  */
        this._cS.getoptionvalue_API(158)
            .subscribe(function (data) {
            if (data.status == 0) {
                _this.regulator = data.data;
            }
        });
    };
    MedicalStep3Page.prototype.delete_attach_letter = function (img, position) {
        var _this = this;
        this.attach_letter_image.splice(position, 1);
        if (img.val) {
            var details = {
                ClaimNumber: localStorage.getItem('MedicalClaimNumber'),
                image_name: img.val,
                image_type: 'attach_letter',
            };
            this._cS.post_API(this._cS.URL_image_delet(), details)
                .subscribe(function (data) {
                console.log('data', data);
                if (data.status == 0) {
                    var dynamicI = _this.dynamicImages(data.data, 'attach_letter/');
                    _this.attach_letter_image = dynamicI;
                    _this._cS.presentToastWithOptions(data.message);
                }
                else {
                    _this._cS.presentToastWithOptions(data.message);
                }
            });
        }
    };
    MedicalStep3Page.prototype.dynamicImages = function (array, path) {
        var _this = this;
        var imageArray = array.split(',');
        var fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
        var json = [];
        imageArray.forEach(function (val) {
            var fileArray = val.split('/');
            var extension = fileArray[1].split('.').pop().toLowerCase();
            var fileName = fileArray[1];
            console.log(fileArray[1].indexOf(extension) > -1);
            json.push({
                fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
                path: _this.ImageServerURL + path + val,
                name: fileName,
                val: val
            });
        });
        return json;
    };
    MedicalStep3Page.prototype.attach_letter = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader_1 = new FileReader();
            var extension = event.target.files[0].name.split('.').pop().toLowerCase();
            var fileName = event.target.files[0].name;
            var fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
            var formData = new FormData();
            formData.append('file', event.target.files[0]);
            formData.append("image_type", "attach_letter");
            formData.append("claimNumber", localStorage.getItem('MedicalClaimNumber'));
            this._cS.ImageUpload(formData).subscribe(function (val) {
                reader_1.onload = function (event) {
                    var json = {
                        fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
                        path: event.target.result,
                        name: val.data[0].file_name,
                        val: undefined
                    };
                    _this.attach_letter_image.push(json);
                };
                reader_1.readAsDataURL(event.target.files[0]);
                _this.attach_letter_image_set.push(val.data[0].file_name);
                if (val) {
                    _this._cS.presentToastWithOptions(val.message);
                }
                else {
                    _this._cS.presentToastWithOptions(val.message);
                }
            });
        }
    };
    MedicalStep3Page.prototype.delete_attach_have_you_letter = function (img, position) {
        var _this = this;
        this.attach_have_you_letter_image.splice(position, 1);
        if (img.val) {
            var details = {
                ClaimNumber: localStorage.getItem('MedicalClaimNumber'),
                image_name: img.val,
                image_type: 'attach_have_you_letter',
            };
            this._cS.post_API(this._cS.URL_image_delet(), details)
                .subscribe(function (data) {
                console.log('data', data);
                if (data.status == 0) {
                    var dynamicI = _this.dynamicImages(data.data, 'attach_have_you_letter/');
                    _this.attach_have_you_letter_image = dynamicI;
                    _this._cS.presentToastWithOptions(data.message);
                }
                else {
                    _this._cS.presentToastWithOptions(data.message);
                }
            });
        }
    };
    MedicalStep3Page.prototype.attach_have_you_letter = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader_2 = new FileReader();
            var extension = event.target.files[0].name.split('.').pop().toLowerCase();
            var fileName = event.target.files[0].name;
            var fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
            var formData = new FormData();
            formData.append('file', event.target.files[0]);
            formData.append("image_type", "attach_have_you_letter");
            formData.append("claimNumber", localStorage.getItem('MedicalClaimNumber'));
            this._cS.ImageUpload(formData).subscribe(function (val) {
                reader_2.onload = function (event) {
                    var json = {
                        fileIcon1: fileTypes.indexOf(extension) > -1 ? false : true,
                        path: event.target.result,
                        name: val.data[0].file_name,
                        val: undefined
                    };
                    _this.attach_have_you_letter_image.push(json);
                };
                reader_2.readAsDataURL(event.target.files[0]);
                _this.attach_have_you_letter_image_set.push(val.data[0].file_name);
                if (val) {
                    _this._cS.presentToastWithOptions(val.message);
                }
                else {
                    _this._cS.presentToastWithOptions(val.message);
                }
            });
        }
    };
    MedicalStep3Page.prototype.setClaimData = function () {
        var _this = this;
        var claimNumber = localStorage.getItem('MedicalClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe(function (data) {
                if (data.status == 0) {
                    _this.editClaimData = data.data;
                    if (_this.editClaimData.regulator) {
                        var regulator = JSON.parse(_this.editClaimData.regulator);
                        for (var regulator_set in regulator) {
                        }
                    }
                    else {
                        regulator_set = null;
                    }
                    _this.medical_form_step3.setValue({
                        regulator_inform: _this.editClaimData.regulator_inform,
                        regulator: regulator_set,
                        date_received_notification: _this.editClaimData.date_received_notification,
                        regulator_respond: _this.editClaimData.regulator_respond,
                        date_respond: _this.editClaimData.date_respond,
                        already_respond: _this.editClaimData.already_respond,
                        require_legal_assistance: _this.editClaimData.require_legal_assistance,
                    });
                    if (_this.editClaimData.attach_letter) {
                        var dynamicI = (_this.dynamicImages(_this.editClaimData.attach_letter, '/attach_letter/'));
                        _this.attach_letter_image = dynamicI;
                    }
                    if (_this.editClaimData.attach_have_you_letter) {
                        var dynamicI = (_this.dynamicImages(_this.editClaimData.attach_have_you_letter, '/attach_have_you_letter/'));
                        _this.attach_have_you_letter_image = dynamicI;
                    }
                }
            });
        }
    };
    MedicalStep3Page.prototype.back = function () {
        this.navCtrl.pop();
    };
    MedicalStep3Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] }
    ]; };
    MedicalStep3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medical-step3',
            template: __webpack_require__(/*! raw-loader!./medical-step3.page.html */ "./node_modules/raw-loader/index.js!./src/app/medical-malpractice/medical-step3/medical-step3.page.html"),
            styles: [__webpack_require__(/*! ./medical-step3.page.scss */ "./src/app/medical-malpractice/medical-step3/medical-step3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
    ], MedicalStep3Page);
    return MedicalStep3Page;
}());



/***/ })

}]);
//# sourceMappingURL=medical-malpractice-medical-step3-medical-step3-module-es5.js.map