(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["property-property-step6-property-step6-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/property/property-step6/property-step6.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/property/property-step6/property-step6.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Emergency works</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"property_form_step6\" autocomplete=\"off\">\r\n\r\n    <div class=\"div-que\">\r\n      <ion-label class=\"lbl-head\">Emergency works needed?</ion-label>\r\n      <ion-radio-group formControlName=\"emergency_works_needed\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"div-Y\" *ngIf=\"this.property_form_step6.get('emergency_works_needed').value == 'true'\">\r\n      <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">Type of works still required</ion-label>\r\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"works_required\"\r\n          class=\"btn-select bg\" mode=\"md\">\r\n          <ion-select-option value=\"Reinstallation\">Reinstallation</ion-select-option>\r\n          <ion-select-option value=\"Repair\">Repair</ion-select-option>\r\n          <ion-select-option value=\"Rewiring\">Rewiring</ion-select-option>\r\n          <ion-select-option value=\"Other\">Other</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"property_form_step6.controls.works_required.hasError('required') && property_form_step6.controls.works_required.touched\">\r\n        <p class=\"content\">Please Select Required Field!</p>\r\n      </ion-item>\r\n\r\n      <!-- Other -->\r\n      <div *ngIf=\"property_form_step6.get('works_required').value == 'Other'\">\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-input type=\"text\" color=\"primary\" formControlName=\"works_required_other\" class=\"input-box\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"property_form_step6.controls.works_required_other.hasError('required') && property_form_step6.controls.works_required_other.touched\">\r\n          <p class=\"content\">Please Enter Required Field!</p>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div class=\"div-que add-margin\">\r\n        <ion-label class=\"lbl-head\">Are the premises fit for use?</ion-label>\r\n        <ion-radio-group formControlName=\"fit_for_use\">\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">No</ion-label>\r\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </div>\r\n\r\n      <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">Works already arranged or performed</ion-label>\r\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"works_arranged\"\r\n          class=\"btn-select bg\" mode=\"md\">\r\n          <ion-select-option value=\"Reinstallation\">Reinstallation</ion-select-option>\r\n          <ion-select-option value=\"Repair\">Repair</ion-select-option>\r\n          <ion-select-option value=\"Rewiring\">Rewiring</ion-select-option>\r\n          <ion-select-option value=\"Other\">Other</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"property_form_step6.controls.works_arranged.hasError('required') && property_form_step6.controls.works_arranged.touched\">\r\n        <p class=\"content\">Please Select Required Field!</p>\r\n      </ion-item>\r\n\r\n      <!-- Other -->\r\n      <div *ngIf=\"property_form_step6.get('works_arranged').value == 'Other'\">\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-input type=\"text\" color=\"primary\" formControlName=\"works_arranged_other\" class=\"input-box\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"property_form_step6.controls.works_arranged_other.hasError('required') && property_form_step6.controls.works_arranged_other.touched\">\r\n          <p class=\"content\">Please Enter Required Field!</p>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div *ngIf=\"property_form_step6.get('works_arranged').value\">\r\n        <ion-label class=\"lbl-contact add-margin\">Constractor details</ion-label>\r\n\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Name Contractor</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"contractor_name\" color=\"primary\" class=\"input-box\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"property_form_step6.controls.contractor_name.hasError('required') && property_form_step6.controls.contractor_name.touched\">\r\n          <p class=\"content\">Please Enter Name!</p>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Street</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"contractor_street\" color=\"primary\" class=\"input-box\"\r\n            id=\"contractor_street\" (ionFocus)=\"contractorAddress()\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"property_form_step6.controls.contractor_street.hasError('required') && property_form_step6.controls.contractor_street.touched\">\r\n          <p class=\"content\">Please Enter Street!</p>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Suburb/Town</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"contractor_suburb\" color=\"primary\" class=\"input-box\"\r\n            id=\"contractor_suburb\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"property_form_step6.controls.contractor_suburb.hasError('required') && property_form_step6.controls.contractor_suburb.touched\">\r\n          <p class=\"content\">Please Enter Town!</p>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">PostCode</ion-label>\r\n          <ion-input type=\"number\" formControlName=\"contractor_post_code\" color=\"primary\" class=\"input-box\"\r\n            id=\"contractor_post_code\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"property_form_step6.controls.contractor_post_code.hasError('required') && property_form_step6.controls.contractor_post_code.touched\">\r\n          <p class=\"content\">Please Enter Postcode!</p>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div class=\"div-que add-margin\">\r\n        <ion-label class=\"lbl-head\">Has any cost been paid yet?</ion-label>\r\n        <ion-radio-group formControlName=\"cost_paid\">\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">No</ion-label>\r\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </div>\r\n\r\n      <div class=\"div-Y\" *ngIf=\"this.property_form_step6.get('cost_paid').value == 'true'\">\r\n        <ion-label class=\"lbl-contact-blk add-margin\">Attach Receipt/Invoice</ion-label>\r\n        <div class=\"div-docs\">\r\n          <h3 *ngIf=\"attach_receipt_image.length == 0\" text-center>Please Select Image!</h3>\r\n          <ion-list>\r\n            <ion-item *ngFor=\"let img of attach_receipt_image; index as pos\" text-wrap>\r\n              <ion-thumbnail slot=\"start\">\r\n                <ion-img *ngIf=\"img.fileIcon\" src=\"../../../assets/images/files.png\"></ion-img>\r\n                <ion-img *ngIf=\"!img.fileIcon\" [src]=\"img.path\"></ion-img>\r\n              </ion-thumbnail>\r\n              <ion-label>\r\n                {{ img.name }}\r\n              </ion-label>\r\n              <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(img, pos)\">\r\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n              </ion-button>\r\n            </ion-item>\r\n          </ion-list>\r\n\r\n          <div class=\"upload-btn-wrapper\">\r\n            <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach Documents</ion-button>\r\n            <input type=\"file\" (change)=\"fileUpload($event)\"\r\n              accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"div-que add-margin\">\r\n          <ion-label class=\"lbl-head\">Are you claiming reimbursement of any costs?</ion-label>\r\n\r\n          <ion-radio-group formControlName=\"costs_reimbursed\">\r\n            <ion-item lines=\"none\" class=\"items-radio\">\r\n              <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n              <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"items-radio\">\r\n              <ion-label class=\"lbl-radio\">No</ion-label>\r\n              <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </div>\r\n\r\n        <div class=\"div-Y\" *ngIf=\"this.property_form_step6.get('costs_reimbursed').value == 'true'\">\r\n\r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">Name of account</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"bank_account_name\" color=\"primary\" class=\"input-box\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"property_form_step6.controls.bank_account_name.hasError('required') && property_form_step6.controls.bank_account_name.touched\">\r\n            <p class=\"content\">Please Enter Name!</p>\r\n          </ion-item>\r\n\r\n          <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n            <ion-label position=\"stacked\" class=\"lbl-dropdown\">Bank</ion-label>\r\n            <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"name_bank\"\r\n              class=\"btn-select bg\" mode=\"md\">\r\n              <ion-select-option *ngFor=\"let opt of name_bank | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n              <!-- <ion-select-option value=\"CBA\">CBA</ion-select-option>\r\n              <ion-select-option value=\"Bendigo\">Bendigo</ion-select-option>\r\n              <ion-select-option value=\"WESTPAC\">WESTPAC</ion-select-option>\r\n              <ion-select-option value=\"NAB\">NAB</ion-select-option>\r\n              <ion-select-option value=\"ANZ\">ANZ</ion-select-option>\r\n              <ion-select-option value=\"St George\">St George</ion-select-option>\r\n              <ion-select-option value=\"HSBC\">HSBC</ion-select-option>\r\n              <ion-select-option value=\"aa\">aa</ion-select-option>\r\n              <ion-select-option value=\"Other\">Other</ion-select-option>-->\r\n            </ion-select> \r\n          </ion-item>\r\n\r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"property_form_step6.controls.name_bank.hasError('required') && property_form_step6.controls.name_bank.touched\">\r\n            <p class=\"content\">Please Select Required Field!</p>\r\n          </ion-item>\r\n\r\n          <!-- Other -->\r\n          <div *ngIf=\"property_form_step6.get('name_bank').value == '1039'\">\r\n            <ion-item lines=\"none\" class=\"input-item add\">\r\n              <ion-input type=\"text\" color=\"primary\" formControlName=\"name_bank_other\" class=\"input-box\">\r\n              </ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n              *ngIf=\"property_form_step6.controls.name_bank_other.hasError('required') && property_form_step6.controls.name_bank_other.touched\">\r\n              <p class=\"content\">Please Enter Required Field!</p>\r\n            </ion-item>\r\n          </div>\r\n\r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">Branch</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"bank_branch\" color=\"primary\" class=\"input-box\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"property_form_step6.controls.bank_branch.hasError('required') && property_form_step6.controls.bank_branch.touched\">\r\n            <p class=\"content\">Please Enter Branch!</p>\r\n          </ion-item>\r\n\r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">BSB</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"bank_bsb\" color=\"primary\" class=\"input-box\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"property_form_step6.controls.bank_bsb.hasError('required') && property_form_step6.controls.bank_bsb.touched\">\r\n            <p class=\"content\">Please Enter BSB!</p>\r\n          </ion-item>\r\n\r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">Account number</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"bank_account_number\" color=\"primary\" class=\"input-box\">\r\n            </ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"property_form_step6.controls.bank_account_number.hasError('required') && property_form_step6.controls.bank_account_number.touched\">\r\n            <p class=\"content\">Please Enter Account Number!</p>\r\n          </ion-item>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\" (click)=\"propertyStep6Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/property/property-step6/property-step6.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/property/property-step6/property-step6.module.ts ***!
  \******************************************************************/
/*! exports provided: PropertyStep6PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyStep6PageModule", function() { return PropertyStep6PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _property_step6_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./property-step6.page */ "./src/app/property/property-step6/property-step6.page.ts");










var routes = [
    {
        path: '',
        component: _property_step6_page__WEBPACK_IMPORTED_MODULE_9__["PropertyStep6Page"]
    }
];
var PropertyStep6PageModule = /** @class */ (function () {
    function PropertyStep6PageModule() {
    }
    PropertyStep6PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_property_step6_page__WEBPACK_IMPORTED_MODULE_9__["PropertyStep6Page"]],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__["CommonMockService"],
            ],
        })
    ], PropertyStep6PageModule);
    return PropertyStep6PageModule;
}());



/***/ }),

/***/ "./src/app/property/property-step6/property-step6.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/property/property-step6/property-step6.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L3Byb3BlcnR5LXN0ZXA2L3Byb3BlcnR5LXN0ZXA2LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/property/property-step6/property-step6.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/property/property-step6/property-step6.page.ts ***!
  \****************************************************************/
/*! exports provided: PropertyStep6Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyStep6Page", function() { return PropertyStep6Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var PropertyStep6Page = /** @class */ (function () {
    /* dropdown option Variable End */
    function PropertyStep6Page(navCtrl, router, _cS, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.attach_receipt_image = [];
        this.attach_receipt_image_set = [];
        this.ImageServerURL = this._cS.imageUrl();
        this.property_step6_fb();
        this.formControlValueChanged();
        this.setClaimData();
    }
    PropertyStep6Page.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    PropertyStep6Page.prototype.property_step6_fb = function () {
        this.property_form_step6 = this.formBuilder.group({
            emergency_works_needed: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            works_required: [null],
            works_required_other: [null],
            fit_for_use: [null],
            works_arranged: [null],
            works_arranged_other: [null],
            contractor_name: [null],
            contractor_street: [null],
            contractor_suburb: [null],
            contractor_post_code: [null],
            cost_paid: [null],
            costs_reimbursed: [null],
            bank_account_name: [null],
            name_bank: [null],
            name_bank_other: [null],
            bank_branch: [null],
            bank_bsb: [null],
            bank_account_number: [null],
        });
    };
    PropertyStep6Page.prototype.formControlValueChanged = function () {
        var _this = this;
        this.property_form_step6.get('emergency_works_needed')
            .valueChanges.subscribe(function (val) {
            var works_required = _this.property_form_step6.get('works_required');
            var fit_for_use = _this.property_form_step6.get('fit_for_use');
            var works_arranged = _this.property_form_step6.get('works_arranged');
            var cost_paid = _this.property_form_step6.get('cost_paid');
            works_required.patchValue(null);
            works_required.clearValidators();
            works_required.updateValueAndValidity();
            fit_for_use.patchValue(null);
            fit_for_use.clearValidators();
            fit_for_use.updateValueAndValidity();
            works_arranged.patchValue(null);
            works_arranged.clearValidators();
            works_arranged.updateValueAndValidity();
            cost_paid.patchValue(null);
            cost_paid.clearValidators();
            cost_paid.updateValueAndValidity();
            if (val == "true") {
                works_required.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                fit_for_use.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                works_arranged.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                cost_paid.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
        });
        this.property_form_step6.get('works_required')
            .valueChanges.subscribe(function (val) {
            var works_required_other = _this.property_form_step6.get('works_required_other');
            if (val == "Other") {
                works_required_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                works_required_other.patchValue(null);
                works_required_other.clearValidators();
                works_required_other.updateValueAndValidity();
            }
        });
        this.property_form_step6.get('works_arranged')
            .valueChanges.subscribe(function (val) {
            var works_arranged_other = _this.property_form_step6.get('works_arranged_other');
            if (val == "Other") {
                works_arranged_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                works_arranged_other.patchValue(null);
                works_arranged_other.clearValidators();
                works_arranged_other.updateValueAndValidity();
            }
        });
        this.property_form_step6.get('works_arranged')
            .valueChanges.subscribe(function (val) {
            var contractor_name = _this.property_form_step6.get('contractor_name');
            var contractor_street = _this.property_form_step6.get('contractor_street');
            var contractor_suburb = _this.property_form_step6.get('contractor_suburb');
            var contractor_post_code = _this.property_form_step6.get('contractor_post_code');
            contractor_name.patchValue(null);
            contractor_name.clearValidators();
            contractor_name.updateValueAndValidity();
            contractor_street.patchValue(null);
            contractor_street.clearValidators();
            contractor_street.updateValueAndValidity();
            contractor_suburb.patchValue(null);
            contractor_suburb.clearValidators();
            contractor_suburb.updateValueAndValidity();
            contractor_post_code.patchValue(null);
            contractor_post_code.clearValidators();
            contractor_post_code.updateValueAndValidity();
            if (val == "Reinstallation" || val == "Repair" || val == "Rewiring" || val == "Other") {
                contractor_name.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                contractor_street.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                contractor_suburb.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                contractor_post_code.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
        });
        this.property_form_step6.get('cost_paid')
            .valueChanges.subscribe(function (val) {
            var costs_reimbursed = _this.property_form_step6.get('costs_reimbursed');
            costs_reimbursed.patchValue(null);
            costs_reimbursed.clearValidators();
            costs_reimbursed.updateValueAndValidity();
            if (val == "true") {
                costs_reimbursed.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
        });
        this.property_form_step6.get('costs_reimbursed')
            .valueChanges.subscribe(function (val) {
            var bank_account_name = _this.property_form_step6.get('bank_account_name');
            var name_bank = _this.property_form_step6.get('name_bank');
            var bank_branch = _this.property_form_step6.get('bank_branch');
            var bank_bsb = _this.property_form_step6.get('bank_bsb');
            var bank_account_number = _this.property_form_step6.get('bank_account_number');
            bank_account_name.patchValue(null);
            bank_account_name.clearValidators();
            bank_account_name.updateValueAndValidity();
            name_bank.patchValue(null);
            name_bank.clearValidators();
            name_bank.updateValueAndValidity();
            bank_branch.patchValue(null);
            bank_branch.clearValidators();
            bank_branch.updateValueAndValidity();
            bank_bsb.patchValue(null);
            bank_bsb.clearValidators();
            bank_bsb.updateValueAndValidity();
            bank_account_number.patchValue(null);
            bank_account_number.clearValidators();
            bank_account_number.updateValueAndValidity();
            if (val == "true") {
                bank_account_name.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                name_bank.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                bank_branch.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                bank_bsb.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                bank_account_number.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
        });
        this.property_form_step6.get('name_bank')
            .valueChanges.subscribe(function (val) {
            var name_bank_other = _this.property_form_step6.get('name_bank_other');
            if (val == '1039') {
                name_bank_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                name_bank_other.patchValue(null);
                name_bank_other.clearValidators();
                name_bank_other.updateValueAndValidity();
            }
        });
    };
    PropertyStep6Page.prototype.propertyStep6Next = function () {
        var _this = this;
        for (var v in this.property_form_step6.controls) {
            this.property_form_step6.controls[v].markAsTouched();
        }
        if (this.property_form_step6.valid) {
            /* constractorAddress Start */
            var constractorStreetValue = null;
            var constractorSuburbValue = null;
            var constactorPostCodeValue = null;
            if (document.getElementById("contractor_street")) {
                constractorStreetValue = document.getElementById("contractor_street").value;
            }
            if (document.getElementById("contractor_street")) {
                constractorSuburbValue = document.getElementById("contractor_street").value;
            }
            if (document.getElementById("contractor_post_code")) {
                constactorPostCodeValue = document.getElementById("contractor_post_code").value;
            }
            /* constractorAddres End */
            var step6 = {
                "step": 'step6',
                "ClaimNumber": localStorage.getItem('PropertyClaimNumber'),
                "emergency_works_needed": this.property_form_step6.value.emergency_works_needed,
                "works_required": this.property_form_step6.value.works_required,
                "works_required_other": this.property_form_step6.value.works_required_other,
                "fit_for_use": this.property_form_step6.value.fit_for_use,
                "works_arranged": this.property_form_step6.value.works_arranged,
                "works_arranged_other": this.property_form_step6.value.works_arranged_other,
                "contractor_name": this.property_form_step6.value.contractor_name,
                "contractor_street": constractorStreetValue,
                "contractor_suburb": constractorSuburbValue,
                "contractor_post_code": constactorPostCodeValue,
                "cost_paid": this.property_form_step6.value.cost_paid,
                "costs_reimbursed": this.property_form_step6.value.costs_reimbursed,
                "bank_account_name": this.property_form_step6.value.bank_account_name,
                "name_bank": this.property_form_step6.value.name_bank,
                "name_bank_other": this.property_form_step6.value.name_bank_other,
                "bank_branch": this.property_form_step6.value.bank_branch,
                "bank_bsb": this.property_form_step6.value.bank_bsb,
                "bank_account_number": this.property_form_step6.value.bank_account_number,
                "attach_receipt": this.attach_receipt_image_set,
            };
            this._cS.put_API(this._cS.URL_Property_Claim_Post(), step6)
                .subscribe(function (data) {
                if (data.status == 0) {
                    _this.attach_receipt_image_set = [];
                    _this.setClaimData();
                    _this.router.navigate(['/property-step7']);
                }
                else {
                }
            }, function (err) {
            });
        }
    };
    PropertyStep6Page.prototype.deleteImage = function (img, position) {
        var _this = this;
        this.attach_receipt_image.splice(position, 1);
        if (img.val) {
            var details = {
                ClaimNumber: localStorage.getItem('PropertyClaimNumber'),
                image_name: img.val,
                image_type: 'attach_receipt',
            };
            this._cS.post_API(this._cS.URL_image_delet(), details)
                .subscribe(function (data) {
                console.log('data', data);
                if (data.status == 0) {
                    var dynamicI = _this.dynamicImages(data.data, 'attach_receipt/');
                    _this.attach_receipt_image = dynamicI;
                    _this._cS.presentToastWithOptions(data.message);
                }
                else {
                    _this._cS.presentToastWithOptions(data.message);
                }
            });
        }
    };
    PropertyStep6Page.prototype.fileUpload = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader_1 = new FileReader();
            var extension = event.target.files[0].name.split('.').pop().toLowerCase();
            var fileName = event.target.files[0].name;
            var fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
            var formData = new FormData();
            formData.append('file', event.target.files[0]);
            formData.append("image_type", "attach_receipt");
            formData.append("claimNumber", localStorage.getItem('PropertyClaimNumber'));
            this._cS.ImageUpload(formData).subscribe(function (val) {
                reader_1.onload = function (event) {
                    var json = {
                        fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
                        path: event.target.result,
                        name: val.data[0].file_name,
                        val: undefined
                    };
                    _this.attach_receipt_image.push(json);
                };
                reader_1.readAsDataURL(event.target.files[0]);
                _this.attach_receipt_image_set.push(val.data[0].file_name);
                if (val) {
                    _this._cS.presentToastWithOptions(val.message);
                }
                else {
                    _this._cS.presentToastWithOptions(val.message);
                }
            });
        }
    };
    PropertyStep6Page.prototype.dynamicImages = function (array, path) {
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
    PropertyStep6Page.prototype.contractorAddress = function () {
        var _this = this;
        var widget = new AddressFinder.Widget(document.getElementById("contractor_street"), "PVW639JF4ET8ALGDHNKB", "AU", {});
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
                _this.property_form_step6.patchValue({ contractor_street: address_line_1, contractor_suburb: mainadddate, contractor_post_code: postcode }, { onlySelf: true });
            }
        });
    };
    PropertyStep6Page.prototype.setClaimData = function () {
        var _this = this;
        var claimNumber = localStorage.getItem('PropertyClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe(function (data) {
                if (data.status == 0) {
                    console.log("editdate", data);
                    _this.editClaimData = data.data;
                    if (_this.editClaimData.name_bank) {
                        var name_bank = JSON.parse(_this.editClaimData.name_bank);
                        for (var name_bank_set in name_bank) {
                        }
                    }
                    else {
                        name_bank_set = null;
                    }
                    _this.property_form_step6.setValue({
                        emergency_works_needed: _this.editClaimData.emergency_works_needed,
                        works_required: _this.editClaimData.works_required,
                        works_required_other: _this.editClaimData.works_required_other,
                        fit_for_use: _this.editClaimData.fit_for_use,
                        works_arranged: _this.editClaimData.works_arranged,
                        works_arranged_other: _this.editClaimData.works_arranged_other,
                        contractor_name: _this.editClaimData.contractor_name,
                        contractor_street: _this.editClaimData.contractor_street,
                        contractor_suburb: _this.editClaimData.contractor_suburb,
                        contractor_post_code: _this.editClaimData.contractor_post_code,
                        cost_paid: _this.editClaimData.cost_paid,
                        costs_reimbursed: _this.editClaimData.costs_reimbursed,
                        bank_account_name: _this.editClaimData.bank_account_name,
                        name_bank: name_bank_set,
                        name_bank_other: _this.editClaimData.name_bank_other,
                        bank_branch: _this.editClaimData.bank_branch,
                        bank_bsb: _this.editClaimData.bank_bsb,
                        bank_account_number: _this.editClaimData.bank_account_number,
                    });
                    if (_this.editClaimData.attach_receipt) {
                        var dynamicI = (_this.dynamicImages(_this.editClaimData.attach_receipt, '/attach_receipt/'));
                        _this.attach_receipt_image = dynamicI;
                    }
                }
            });
        }
    };
    PropertyStep6Page.prototype.ngOnInit = function () {
        var _this = this;
        var script = document.createElement("script");
        script.src = "https://api.addressfinder.io/assets/v3/widget.js";
        script.async = true;
        document.body.appendChild(script);
        //dropdown value set
        /*  name bank */
        this._cS.getoptionvalue_API(6)
            .subscribe(function (data) {
            if (data.status == 0) {
                _this.name_bank = data.data;
            }
        });
    };
    PropertyStep6Page.prototype.back = function () {
        this.navCtrl.pop();
    };
    PropertyStep6Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
    ]; };
    PropertyStep6Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property-step6',
            template: __webpack_require__(/*! raw-loader!./property-step6.page.html */ "./node_modules/raw-loader/index.js!./src/app/property/property-step6/property-step6.page.html"),
            styles: [__webpack_require__(/*! ./property-step6.page.scss */ "./src/app/property/property-step6/property-step6.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
    ], PropertyStep6Page);
    return PropertyStep6Page;
}());



/***/ })

}]);
//# sourceMappingURL=property-property-step6-property-step6-module-es5.js.map