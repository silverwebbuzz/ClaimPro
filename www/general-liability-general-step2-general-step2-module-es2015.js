(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-liability-general-step2-general-step2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/general-liability/general-step2/general-step2.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/general-liability/general-step2/general-step2.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Incident details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"general_form_step2\" autocomplete=\"off\">\r\n\r\n    <ion-item lines=\"none\" class=\"input-item\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl lbl-over\">Briefly outline the allegations against you</ion-label>\r\n      <ion-textarea rows=\"3\" formControlName=\"reported_circumstances\" type=\"text\" color=\"primary\" class=\"input-box\"></ion-textarea>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step2.controls.reported_circumstances.hasError('required') && general_form_step2.controls.reported_circumstances.touched\">\r\n      <p class=\"content\">Please Enter Required Field!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"general_form_step2.controls.reported_circumstances.hasError('maxlength') && general_form_step2.controls.reported_circumstances.touched\">\r\n          <p class=\"content\">Allow Only 280 Characters!</p>\r\n        </ion-item>\r\n\r\n    <!-- <div class=\"div-que add-margin\">\r\n      <ion-label class=\"lbl-head\">Is it alleged you were at fault? </ion-label>\r\n    \r\n      <ion-radio-group formControlName=\"alleged_you_fault\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n\r\n    </div> -->\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Date you were notified of the complaint</ion-label>\r\n      <ion-datetime placeholder=\"Select Date\" class=\"input-box box\" formControlName=\"loss_date_discovery\" displayFormat=\"DD MMM YYYY\" min=\"2016-01-01\" max=\"2039-12-31\"></ion-datetime>\r\n    </ion-item>\r\n    \r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step2.controls.loss_date_discovery.hasError('required') && general_form_step2.controls.loss_date_discovery.touched\">\r\n      <p class=\"content\">Please Select Date!</p>\r\n    </ion-item>\r\n\r\n    <div class=\"div-que add-margin\">\r\n        <ion-label class=\"lbl-head\">Is the complaint in writing? </ion-label>\r\n  \r\n        <ion-radio-group formControlName=\"complaint_writing\">\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">No</ion-label>\r\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </div>\r\n      \r\n      <div class=\"div-Y\" *ngIf=\"this.general_form_step2.get('complaint_writing').value == 'true'\">\r\n        \r\n        <div class=\"div-docs add-margin\">\r\n\r\n          <h3 *ngIf=\"images.length == 0\" text-center>Please Select Image!</h3>\r\n  \r\n          <ion-list class=\"doc-list\">\r\n              <ion-item lines=\"none\" class=\"doc-item\" *ngFor=\"let img of images; index as pos\" text-wrap>\r\n                  <ion-thumbnail slot=\"start\">\r\n                      <ion-img *ngIf=\"img.fileIcon\" src=\"../../../assets/images/files.png\"></ion-img>\r\n                      <ion-img *ngIf=\"!img.fileIcon\" [src]=\"img.path\"></ion-img>\r\n                  </ion-thumbnail>\r\n                  <ion-label>\r\n                      {{ img.name }}\r\n                  </ion-label>\r\n                  <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(img, pos)\">\r\n                      <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n                  </ion-button>\r\n              </ion-item>\r\n          </ion-list>\r\n          <div class=\"upload-btn-wrapper\">\r\n            <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach Letter</ion-button>\r\n            <input type=\"file\" (change)=\"fileUpload($event)\"\r\n              accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n          </div>\r\n  \r\n         \r\n        </div>\r\n\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">When did this occur?</ion-label>\r\n          <ion-datetime placeholder=\"Select Date\" class=\"input-box box\" formControlName=\"date_loss\"\r\n            displayFormat=\"DD MMM YYYY\" min=\"2016-01-01\" max=\"2039-12-31\"></ion-datetime>\r\n        </ion-item>\r\n      \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"general_form_step2.controls.date_loss.hasError('required') && general_form_step2.controls.date_loss.touched\">\r\n          <p class=\"content\">Please Select Date!</p>\r\n        </ion-item>\r\n      \r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">What time did this occur?</ion-label>\r\n          <ion-datetime placeholder=\"Select Time\" class=\"input-box box\" formControlName=\"time_loss\" displayFormat=\"hh:mm A\">\r\n          </ion-datetime>\r\n        </ion-item>\r\n      \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"general_form_step2.controls.time_loss.hasError('required') && general_form_step2.controls.time_loss.touched\">\r\n          <p class=\"content\">Please Select Time!</p>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n          <ion-label position=\"stacked\" class=\"lbl-dropdown\">Where did this occur?</ion-label>\r\n          <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"where_loss_damage\" class=\"btn-select bg\" mode=\"md\" (ionChange)=\"occurchange($event.target.value)\">\r\n              <ion-select-option *ngFor=\"let opt of where_loss_damage | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n            <!-- <ion-select-option value=\"Risk Address\">Risk Address</ion-select-option>\r\n            <ion-select-option value=\"Another Location\">Another Location</ion-select-option>\r\n            <ion-select-option value=\"In Transit\">In Transit</ion-select-option>\r\n            <ion-select-option value=\"Other\">Other</ion-select-option> -->\r\n          </ion-select>\r\n        </ion-item>\r\n        \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"general_form_step2.controls.where_loss_damage.hasError('required') && general_form_step2.controls.where_loss_damage.touched\">\r\n          <p class=\"content\">Please Select Required Field!</p>\r\n        </ion-item>\r\n        \r\n        <!-- Another Location, Risk Address -->\r\n        <div *ngIf=\"general_form_step2.get('where_loss_damage').value == '1343' || general_form_step2.get('where_loss_damage').value == '1344'\">\r\n          \r\n          <ion-label class=\"lbl-contact add-margin\">Address details</ion-label>\r\n        \r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">Street</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"risk_street\" color=\"primary\" class=\"input-box\" id=\"address_line_1\"></ion-input>\r\n          </ion-item>\r\n        \r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"general_form_step2.controls.risk_street.hasError('required') && general_form_step2.controls.risk_street.touched\">\r\n            <p class=\"content\">Please Enter Street!</p>\r\n          </ion-item>\r\n        \r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">Suburb/Town</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"risk_suburb\" color=\"primary\" class=\"input-box\" id=\"city\"></ion-input>\r\n          </ion-item>\r\n        \r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"general_form_step2.controls.risk_suburb.hasError('required') && general_form_step2.controls.risk_suburb.touched\">\r\n            <p class=\"content\">Please Enter Town!</p>\r\n          </ion-item>\r\n        \r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">State</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"risk_state\" color=\"primary\" class=\"input-box\" id=\"state\"></ion-input>\r\n          </ion-item>\r\n        \r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"general_form_step2.controls.risk_state.hasError('required') && general_form_step2.controls.risk_state.touched\">\r\n            <p class=\"content\">Please Enter State!</p>\r\n          </ion-item>\r\n        \r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">PostCode</ion-label>\r\n            <ion-input type=\"number\" formControlName=\"risk_postcode\" color=\"primary\" class=\"input-box\" id=\"postcode\"></ion-input>\r\n          </ion-item>\r\n        \r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"general_form_step2.controls.risk_postcode.hasError('required') && general_form_step2.controls.risk_postcode.touched\">\r\n            <p class=\"content\">Please Enter Postcode!</p>\r\n          </ion-item>\r\n        \r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">Country</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"risk_country\" color=\"primary\" class=\"input-box\" id=\"country\"></ion-input>\r\n          </ion-item>\r\n        \r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"general_form_step2.controls.risk_country.hasError('required') && general_form_step2.controls.risk_country.touched\">\r\n            <p class=\"content\">Please Enter Country!</p>\r\n          </ion-item>\r\n        \r\n        </div>\r\n        \r\n        <!-- Other -->\r\n        <div *ngIf=\"general_form_step2.get('where_loss_damage').value == '1346'\">\r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n            <ion-input type=\"text\" color=\"primary\" formControlName=\"where_loss_damage_other\" class=\"input-box\"></ion-input>\r\n          </ion-item>\r\n        \r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"general_form_step2.controls.where_loss_damage_other.hasError('required') && general_form_step2.controls.where_loss_damage_other.touched\">\r\n            <p class=\"content\">Please Enter Required Field!</p>\r\n          </ion-item>\r\n        </div>\r\n      \r\n      </div>\r\n\r\n      <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n          <ion-label position=\"stacked\" class=\"lbl-dropdown lbl-over\">How did you become aware of the complaint</ion-label>\r\n          <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"how_aware_complaint\" class=\"btn-select bg\" mode=\"md\">\r\n            <ion-select-option value=\"telephone call from complainer\">Telephone call from complainer</ion-select-option>\r\n            <ion-select-option value=\"in person\">In person</ion-select-option>\r\n            <ion-select-option value=\"email from complainer\">Email from complainer</ion-select-option>\r\n            <ion-select-option value=\"Other\">Other</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"general_form_step2.controls.how_aware_complaint.hasError('required') && general_form_step2.controls.how_aware_complaint.touched\">\r\n          <p class=\"content\">Please Select Required Field!</p>\r\n        </ion-item>\r\n      \r\n        <!-- Other -->\r\n        <div *ngIf=\"general_form_step2.get('how_aware_complaint').value == 'Other'\">\r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n            <ion-input type=\"text\" color=\"primary\" formControlName=\"how_aware_complaint_other\" class=\"input-box\"></ion-input>\r\n          </ion-item>\r\n      \r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"general_form_step2.controls.how_aware_complaint_other.hasError('required') && general_form_step2.controls.how_aware_complaint_other.touched\">\r\n            <p class=\"content\">Please Enter Required Field!</p>\r\n          </ion-item>\r\n        </div>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" size=\"large\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" size=\"large\" class=\"btn-next\" (click)=\"GeneralStep2Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n      <!-- (click)=\"genralNext()\" -->\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/general-liability/general-step2/general-step2.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/general-liability/general-step2/general-step2.module.ts ***!
  \*************************************************************************/
/*! exports provided: GeneralStep2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralStep2PageModule", function() { return GeneralStep2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _general_step2_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./general-step2.page */ "./src/app/general-liability/general-step2/general-step2.page.ts");










const routes = [
    {
        path: '',
        component: _general_step2_page__WEBPACK_IMPORTED_MODULE_9__["GeneralStep2Page"]
    }
];
let GeneralStep2PageModule = class GeneralStep2PageModule {
};
GeneralStep2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_general_step2_page__WEBPACK_IMPORTED_MODULE_9__["GeneralStep2Page"]],
        providers: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__["CommonMockService"],
        ],
    })
], GeneralStep2PageModule);



/***/ }),

/***/ "./src/app/general-liability/general-step2/general-step2.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/general-liability/general-step2/general-step2.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWwtbGlhYmlsaXR5L2dlbmVyYWwtc3RlcDIvZ2VuZXJhbC1zdGVwMi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/general-liability/general-step2/general-step2.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/general-liability/general-step2/general-step2.page.ts ***!
  \***********************************************************************/
/*! exports provided: GeneralStep2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralStep2Page", function() { return GeneralStep2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let GeneralStep2Page = class GeneralStep2Page {
    /* dropdown option Variable End */
    constructor(navCtrl, router, _cS, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.fileImage = '';
        this.uploadFile = null;
        this.images = [];
        this.data = [];
        this.ImageServerURL = this._cS.imageUrl();
        this.general_step2_fb();
        this.setClaimData();
        this.formControlValueChanged();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    general_step2_fb() {
        this.general_form_step2 = this.formBuilder.group({
            reported_circumstances: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(280), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            //alleged_you_fault: [null, Validators.required],
            loss_date_discovery: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            complaint_writing: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            how_aware_complaint: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            how_aware_complaint_other: [null],
            date_loss: [null],
            time_loss: [null],
            where_loss_damage: [null],
            risk_street: [null],
            risk_suburb: [null],
            risk_state: [null],
            risk_postcode: [null],
            risk_country: [null],
            where_loss_damage_other: [null],
        });
    }
    formControlValueChanged() {
        this.general_form_step2.get('complaint_writing')
            .valueChanges.subscribe((val) => {
            const date_loss = this.general_form_step2.get('date_loss');
            const time_loss = this.general_form_step2.get('time_loss');
            const where_loss_damage = this.general_form_step2.get('where_loss_damage');
            date_loss.patchValue(null);
            date_loss.clearValidators();
            date_loss.updateValueAndValidity();
            time_loss.patchValue(null);
            time_loss.clearValidators();
            time_loss.updateValueAndValidity();
            where_loss_damage.patchValue(null);
            where_loss_damage.clearValidators();
            where_loss_damage.updateValueAndValidity();
            if (val) {
                date_loss.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                time_loss.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                where_loss_damage.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
        });
        this.general_form_step2.get('how_aware_complaint')
            .valueChanges.subscribe((val) => {
            const how_aware_complaint_other = this.general_form_step2.get('how_aware_complaint_other');
            if (val == "Other") {
                how_aware_complaint_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                how_aware_complaint_other.patchValue(null);
                how_aware_complaint_other.clearValidators();
                how_aware_complaint_other.updateValueAndValidity();
            }
        });
        this.general_form_step2.get('where_loss_damage')
            .valueChanges.subscribe((val) => {
            const risk_street = this.general_form_step2.get('risk_street');
            const risk_suburb = this.general_form_step2.get('risk_suburb');
            const risk_state = this.general_form_step2.get('risk_state');
            const risk_postcode = this.general_form_step2.get('risk_postcode');
            const risk_country = this.general_form_step2.get('risk_country');
            const where_loss_damage_other = this.general_form_step2.get('where_loss_damage_other');
            if (val == "1343" || val == "1344") {
                risk_street.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                risk_suburb.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                risk_state.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                risk_postcode.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                risk_country.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
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
                where_loss_damage_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                where_loss_damage_other.patchValue(null);
                where_loss_damage_other.clearValidators();
                where_loss_damage_other.updateValueAndValidity();
            }
        });
    }
    GeneralStep2Next() {
        for (let v in this.general_form_step2.controls) {
            this.general_form_step2.controls[v].markAsTouched();
        }
        if (this.general_form_step2.valid) {
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
            const step2 = {
                "step": 'step2',
                "ClaimNumber": localStorage.getItem('GeneralClaimNumber'),
                "reported_circumstances": this.general_form_step2.value.reported_circumstances,
                //"alleged_you_fault": this.general_form_step2.value.alleged_you_fault,
                "loss_date_discovery": this.general_form_step2.value.loss_date_discovery,
                "complaint_writing": this.general_form_step2.value.complaint_writing,
                "how_aware_complaint": this.general_form_step2.value.how_aware_complaint,
                "how_aware_complaint_other": this.general_form_step2.value.how_aware_complaint_other,
                "date_loss": this.general_form_step2.value.date_loss,
                "time_loss": this.general_form_step2.value.time_loss,
                "risk_street": riskStreetValue,
                "risk_suburb": riskSuburbValue,
                "risk_state": riskStateValue,
                "risk_postcode": riskPostCodeValue,
                "risk_country": riskcountryValue,
                "where_loss_damage": this.general_form_step2.value.where_loss_damage,
                "where_loss_damage_other": this.general_form_step2.value.where_loss_damage_other,
                "complaint_documents": this.data,
            };
            this._cS.put_API(this._cS.URL_General_Claim_Post(), step2)
                .subscribe((data) => {
                if (data.status == 0) {
                    this.data = [];
                    this.setClaimData();
                    this.router.navigate(['/general-step3']);
                }
                else {
                }
            }, err => {
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
                this.general_form_step2.patchValue(JSON);
            }
        });
    }
    deleteImage(img, position) {
        this.images.splice(position, 1);
        if (img.val) {
            var details = {
                ClaimNumber: localStorage.getItem('GeneralClaimNumber'),
                image_name: img.val,
                image_type: 'attach_complaint_documents',
            };
            this._cS.post_API(this._cS.URL_image_delet(), details)
                .subscribe((data) => {
                console.log('data', data);
                if (data.status == 0) {
                    var dynamicI = this.dynamicImages(data.data, 'attach_complaint_documents/');
                    this.images = dynamicI;
                    this._cS.presentToastWithOptions(data.message);
                }
                else {
                    this._cS.presentToastWithOptions(data.message);
                }
            });
        }
    }
    fileUpload(event) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            var extension = event.target.files[0].name.split('.').pop().toLowerCase();
            var fileName = event.target.files[0].name;
            var fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
            let formData = new FormData();
            formData.append('file', event.target.files[0]);
            formData.append("image_type", "attach_complaint_documents");
            formData.append("claimNumber", localStorage.getItem('GeneralClaimNumber'));
            this._cS.ImageUpload(formData).subscribe(val => {
                reader.onload = (event) => {
                    let json = {
                        fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
                        path: event.target.result,
                        name: val.data[0].file_name,
                        val: undefined
                    };
                    this.images.push(json);
                };
                reader.readAsDataURL(event.target.files[0]);
                this.data.push(val.data[0].file_name);
                if (val) {
                    this._cS.presentToastWithOptions(val.message);
                }
                else {
                    this._cS.presentToastWithOptions(val.message);
                }
            });
        }
    }
    dynamicImages(array, path) {
        let imageArray = array.split(',');
        var fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
        var json = [];
        imageArray.forEach((val) => {
            var fileArray = val.split('/');
            var extension = fileArray[1].split('.').pop().toLowerCase();
            var fileName = fileArray[1];
            console.log(fileArray[1].indexOf(extension) > -1);
            json.push({
                fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
                path: this.ImageServerURL + path + val,
                name: fileName,
                val: val
            });
        });
        return json;
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
                    if (this.editClaimData.where_loss_damage) {
                        var where_loss_damage = JSON.parse(this.editClaimData.where_loss_damage);
                        for (var where_loss_damage_set in where_loss_damage) {
                        }
                    }
                    else {
                        where_loss_damage_set = null;
                    }
                    this.general_form_step2.setValue({
                        reported_circumstances: this.editClaimData.reported_circumstances,
                        //alleged_you_fault: this.editClaimData.alleged_you_fault,
                        loss_date_discovery: this.editClaimData.loss_date_discovery,
                        complaint_writing: this.editClaimData.complaint_writing,
                        date_loss: this.editClaimData.date_loss,
                        time_loss: this.editClaimData.time_loss,
                        where_loss_damage: where_loss_damage_set,
                        where_loss_damage_other: this.editClaimData.where_loss_damage_other,
                        risk_street: this.editClaimData.risk_street,
                        risk_suburb: this.editClaimData.risk_suburb,
                        risk_state: this.editClaimData.risk_state,
                        risk_postcode: this.editClaimData.risk_postcode,
                        risk_country: this.editClaimData.risk_country,
                        how_aware_complaint: this.editClaimData.how_aware_complaint,
                        how_aware_complaint_other: this.editClaimData.how_aware_complaint_other,
                    });
                    if (this.editClaimData.complaint_documents) {
                        var dynamicI = (this.dynamicImages(this.editClaimData.complaint_documents, '/attach_complaint_documents/'));
                        this.images = dynamicI;
                    }
                }
            });
        }
    }
};
GeneralStep2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
];
GeneralStep2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-general-step2',
        template: __webpack_require__(/*! raw-loader!./general-step2.page.html */ "./node_modules/raw-loader/index.js!./src/app/general-liability/general-step2/general-step2.page.html"),
        styles: [__webpack_require__(/*! ./general-step2.page.scss */ "./src/app/general-liability/general-step2/general-step2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
], GeneralStep2Page);



/***/ })

}]);
//# sourceMappingURL=general-liability-general-step2-general-step2-module-es2015.js.map