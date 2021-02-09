(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["professional-indemnity-professional-step3-professional-step3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/professional-indemnity/professional-step3/professional-step3.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/professional-indemnity/professional-step3/professional-step3.page.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Incident details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"professional_form_step3\" autocomplete=\"off\">\r\n\r\n    <div class=\"div-que\">\r\n      <ion-label class=\"lbl-head\">Has a regulator informed you about an inquiry into your services?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"regulator_inform\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"div-Y\" *ngIf=\"this.professional_form_step3.get('regulator_inform').value == 'true'\">\r\n\r\n      <ion-item class=\"item-dropdown\" lines=\"none\">\r\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">Which organisation or regulator?</ion-label>\r\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"regulator\" class=\"btn-select bg\" mode=\"md\">\r\n            <ion-select-option *ngFor=\"let opt of regulator | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n          <!-- <ion-select-option value=\"AHPRA\">AHPRA</ion-select-option>\r\n          <ion-select-option value=\"HCCC\">HCCC</ion-select-option>\r\n          <ion-select-option value=\"OHO\">OHO</ion-select-option> -->\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step3.controls.regulator.hasError('required') && professional_form_step3.controls.regulator.touched\">\r\n        <p class=\"content\">Please Select Required Field!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Date you received the notification?</ion-label>\r\n        <ion-datetime placeholder=\"Select Date\" class=\"input-box box\" formControlName=\"date_received_notification\"\r\n          displayFormat=\"DD MMM YYYY\" min=\"2016-01-01\" max=\"2039-12-31\"></ion-datetime>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step3.controls.date_received_notification.hasError('required') && professional_form_step3.controls.date_received_notification.touched\">\r\n        <p class=\"content\">Please Select Date!</p>\r\n      </ion-item>\r\n\r\n      <div class=\"div-docs add-margin\">\r\n\r\n        <h3 *ngIf=\"attach_letter_image.length == 0\" text-center>Please Select Image!</h3>\r\n\r\n        <ion-list class=\"doc-list\">\r\n            <ion-item lines=\"none\" class=\"doc-item\" *ngFor=\"let img of attach_letter_image; index as pos\" text-wrap>\r\n                <ion-thumbnail slot=\"start\">\r\n                    <ion-img *ngIf=\"img.fileIcon\" src=\"../../../assets/images/files.png\"></ion-img>\r\n                    <ion-img *ngIf=\"!img.fileIcon\" [src]=\"img.path\"></ion-img>\r\n                </ion-thumbnail>\r\n                <ion-label>\r\n                    {{ img.name }}\r\n                </ion-label>\r\n                <ion-button slot=\"end\" fill=\"clear\" (click)=\"delete_attach_letter(img, pos)\">\r\n                    <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n                </ion-button>\r\n            </ion-item>\r\n        </ion-list>\r\n        <div class=\"upload-btn-wrapper\">\r\n          <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach Letter</ion-button>\r\n          <input type=\"file\" (change)=\"attach_letter($event)\"\r\n            accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n        </div>\r\n\r\n       \r\n      </div>\r\n\r\n      <div class=\"div-que add-margin\">\r\n        <ion-label class=\"lbl-head\">Has the regulator asked you to respond?</ion-label>\r\n        <ion-radio-group formControlName=\"regulator_respond\">\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">No</ion-label>\r\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </div>\r\n\r\n      <div class=\"div-Y\" *ngIf=\"this.professional_form_step3.get('regulator_respond').value == 'true'\">\r\n\r\n        <ion-item lines=\"none\" class=\"input-item\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Date you are required to respond</ion-label>\r\n          <ion-datetime placeholder=\"Select Date\" class=\"input-box box\" formControlName=\"date_respond\"\r\n            displayFormat=\"DD MMM YYYY\" min=\"2016-01-01\" max=\"2039-12-31\"></ion-datetime>\r\n        </ion-item>\r\n\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"professional_form_step3.controls.date_respond.hasError('required') && professional_form_step3.controls.date_respond.touched\">\r\n          <p class=\"content\">Please Select Date!</p>\r\n        </ion-item>\r\n\r\n        <div class=\"div-que add-margin\">\r\n          <ion-label class=\"lbl-head\">Have you already responded?</ion-label>\r\n\r\n          <ion-radio-group formControlName=\"already_respond\">\r\n            <ion-item lines=\"none\" class=\"items-radio\">\r\n              <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n              <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"items-radio\">\r\n              <ion-label class=\"lbl-radio\">No</ion-label>\r\n              <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </div>\r\n\r\n        <div class=\"div-Y\" *ngIf=\"this.professional_form_step3.get('already_respond').value == 'true'\">\r\n\r\n          <div class=\"div-docs add-margin\">\r\n\r\n            <h3 *ngIf=\"attach_have_you_letter_image.length == 0\" text-center>Please Select Image!</h3>\r\n    \r\n            <ion-list>\r\n                <ion-item *ngFor=\"let img of attach_have_you_letter_image; index as pos\" text-wrap>\r\n                    <ion-thumbnail slot=\"start\">\r\n                        <ion-img *ngIf=\"img.fileIcon1\" src=\"../../../assets/images/files.png\"></ion-img>\r\n                        <ion-img *ngIf=\"!img.fileIcon1\" [src]=\"img.path\"></ion-img>\r\n                    </ion-thumbnail>\r\n                    <ion-label>\r\n                        {{ img.name }}\r\n                    </ion-label>\r\n                    <ion-button slot=\"end\" fill=\"clear\" (click)=\"delete_attach_have_you_letter(img, pos)\">\r\n                        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-item>\r\n            </ion-list>\r\n            <div class=\"upload-btn-wrapper\">\r\n              <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach Letter</ion-button>\r\n              <input type=\"file\" (change)=\"attach_have_you_letter($event)\"\r\n                accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n            </div>     \r\n    \r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- <div class=\"div-N\" *ngIf=\"this.professional_form_step3.get('regulator_respond').value == 'false'\"> -->\r\n\r\n        <div class=\"div-que add\">\r\n          <ion-label class=\"lbl-head\">Do you require legal assistance for response?</ion-label>\r\n\r\n          <ion-radio-group formControlName=\"require_legal_assistance\">\r\n            <ion-item lines=\"none\" class=\"items-radio\">\r\n              <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n              <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"items-radio\">\r\n              <ion-label class=\"lbl-radio\">No</ion-label>\r\n              <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </div>\r\n\r\n      <!-- </div> -->\r\n\r\n    </div>\r\n\r\n    <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">What is the nature of the complaint?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"professional_negligence\" class=\"btn-select bg\" mode=\"md\">\r\n          <!-- <ion-select-option *ngFor=\"let opt of professional_negligence | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option> -->\r\n        <ion-select-option value=\"2208\">Professional Misconduct</ion-select-option>\r\n        <ion-select-option value=\"1626\">Negligent advice</ion-select-option>\r\n        <ion-select-option value=\"1627\">Directors liability</ion-select-option>\r\n        <ion-select-option value=\"1628\">Defamation/Slander</ion-select-option>\r\n        <ion-select-option value=\"1696\">Design Error</ion-select-option>\r\n        <ion-select-option value=\"1629\">Other</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"professional_form_step3.controls.professional_negligence.hasError('required') && professional_form_step3.controls.professional_negligence.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"professional_form_step3.get('professional_negligence').value == '1629'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"professional_negligence_other\" class=\"input-box\">\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step3.controls.professional_negligence_other.hasError('required') && professional_form_step3.controls.professional_negligence_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl lbl-over\">Briefly outline the allegations against you</ion-label>\r\n      <ion-textarea rows=\"3\" formControlName=\"reported_circumstances\" type=\"text\" color=\"primary\" class=\"input-box\">\r\n      </ion-textarea>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"professional_form_step3.controls.reported_circumstances.hasError('required') && professional_form_step3.controls.reported_circumstances.touched\">\r\n      <p class=\"content\">Please Enter Required Field!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"professional_form_step3.controls.reported_circumstances.hasError('maxlength') && professional_form_step3.controls.reported_circumstances.touched\">\r\n          <p class=\"content\">Allow Only 280 Characters!</p>\r\n        </ion-item>\r\n\r\n\r\n    <div class=\"div-que add-margin\">\r\n      <ion-label class=\"lbl-head\">Is the inquiry related to a relationship with a patient?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"relationship_patient\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"div-que add\">\r\n      <ion-label class=\"lbl-head\">Is the inquiry related to a dishonest or criminal act?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"related_criminal\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"div-que add\">\r\n      <ion-label class=\"lbl-head\">Is the inquiry related to alcohol or substance abuse?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"alcohol_substance\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"div-que add\">\r\n      <ion-label class=\"lbl-head\">Is the inquiry related to the care or treatment of a patient?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"care_treatment_patient\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"div-que add\">\r\n      <ion-label class=\"lbl-head\">Does this notification refer to a breach of professional duty or any law?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"breach_professional_duty\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"div-Y\" *ngIf=\"this.professional_form_step3.get('breach_professional_duty').value == 'true'\">\r\n    \r\n      <ion-item lines=\"none\" class=\"input-item\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Date you were notified of the complaint</ion-label>\r\n        <ion-datetime placeholder=\"Select Date\" class=\"input-box box\" formControlName=\"loss_date_discovery\"\r\n          displayFormat=\"DD MMM YYYY\" min=\"2016-01-01\" max=\"2039-12-31\"></ion-datetime>\r\n      </ion-item>\r\n    \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step3.controls.loss_date_discovery.hasError('required') && professional_form_step3.controls.loss_date_discovery.touched\">\r\n        <p class=\"content\">Please Select Date!</p>\r\n      </ion-item>\r\n\r\n      <div class=\"div-que add-margin\">\r\n          <ion-label class=\"lbl-head\">Is the complaint in writing?</ion-label>\r\n\r\n          <ion-radio-group formControlName=\"complaint_writing\">\r\n            <ion-item lines=\"none\" class=\"items-radio\">\r\n              <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n              <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"items-radio\">\r\n              <ion-label class=\"lbl-radio\">No</ion-label>\r\n              <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </div>\r\n\r\n        <div class=\"div-Y\" *ngIf=\"this.professional_form_step3.get('complaint_writing').value == 'true'\">\r\n\r\n          <div class=\"div-docs add-margin\">\r\n\r\n            <h3 *ngIf=\"complaint_documents_image.length == 0\" text-center>Please Select Image!</h3>\r\n    \r\n            <ion-list class=\"doc-list\">\r\n                <ion-item lines=\"none\" class=\"doc-item\" *ngFor=\"let img of complaint_documents_image; index as pos\" text-wrap>\r\n                    <ion-thumbnail slot=\"start\">\r\n                        <ion-img *ngIf=\"img.fileIcon2\" src=\"../../../assets/images/files.png\"></ion-img>\r\n                        <ion-img *ngIf=\"!img.fileIcon2\" [src]=\"img.path\"></ion-img>\r\n                    </ion-thumbnail>\r\n                    <ion-label>\r\n                        {{ img.name }}\r\n                    </ion-label>\r\n                    <ion-button slot=\"end\" fill=\"clear\" (click)=\"delete_complaint_documents(img, pos)\">\r\n                        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-item>\r\n            </ion-list>\r\n            <div class=\"upload-btn-wrapper\">\r\n              <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach all documents</ion-button>\r\n              <input type=\"file\" (change)=\"complaint_documents($event)\"\r\n                accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n            </div>\r\n          \r\n          </div>\r\n\r\n        </div>\r\n    \r\n    </div>\r\n\r\n    <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n        <ion-label position=\"stacked\" class=\"lbl-dropdown lbl-over\">How did you become aware of the complaint</ion-label>\r\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"how_aware_complaint\" class=\"btn-select bg\" mode=\"md\">\r\n          <ion-select-option value=\"telephone call from complainer\">Telephone call from complainer</ion-select-option>\r\n          <ion-select-option value=\"in person\">In person</ion-select-option>\r\n          <ion-select-option value=\"email from_complainer\">Email from complainer</ion-select-option>\r\n          <ion-select-option value=\"Other\">Other</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"professional_form_step3.controls.how_aware_complaint.hasError('required') && professional_form_step3.controls.how_aware_complaint.touched\">\r\n        <p class=\"content\">Please Select Required Field!</p>\r\n      </ion-item>\r\n    \r\n      <!-- Other -->\r\n      <div *ngIf=\"professional_form_step3.get('how_aware_complaint').value == 'Other'\">\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n          <ion-input type=\"text\" color=\"primary\" formControlName=\"how_aware_complaint_other\" class=\"input-box\"></ion-input>\r\n        </ion-item>\r\n    \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"professional_form_step3.controls.how_aware_complaint_other.hasError('required') && professional_form_step3.controls.how_aware_complaint_other.touched\">\r\n          <p class=\"content\">Please Enter Required Field!</p>\r\n        </ion-item>\r\n      </div>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\" (click)=\"professionalStep3Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/professional-indemnity/professional-step3/professional-step3.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step3/professional-step3.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ProfessionalStep3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalStep3PageModule", function() { return ProfessionalStep3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professional_step3_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./professional-step3.page */ "./src/app/professional-indemnity/professional-step3/professional-step3.page.ts");










var routes = [
    {
        path: '',
        component: _professional_step3_page__WEBPACK_IMPORTED_MODULE_9__["ProfessionalStep3Page"]
    }
];
var ProfessionalStep3PageModule = /** @class */ (function () {
    function ProfessionalStep3PageModule() {
    }
    ProfessionalStep3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_professional_step3_page__WEBPACK_IMPORTED_MODULE_9__["ProfessionalStep3Page"]],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__["CommonMockService"],
            ],
        })
    ], ProfessionalStep3PageModule);
    return ProfessionalStep3PageModule;
}());



/***/ }),

/***/ "./src/app/professional-indemnity/professional-step3/professional-step3.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step3/professional-step3.page.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Zlc3Npb25hbC1pbmRlbW5pdHkvcHJvZmVzc2lvbmFsLXN0ZXAzL3Byb2Zlc3Npb25hbC1zdGVwMy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/professional-indemnity/professional-step3/professional-step3.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step3/professional-step3.page.ts ***!
  \**************************************************************************************/
/*! exports provided: ProfessionalStep3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalStep3Page", function() { return ProfessionalStep3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");







var ProfessionalStep3Page = /** @class */ (function () {
    function ProfessionalStep3Page(navCtrl, router, formBuilder, _cS, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
        this._cS = _cS;
        this.statusBar = statusBar;
        this.attach_letter_image = [];
        this.attach_have_you_letter_image = [];
        this.complaint_documents_image = [];
        this.attach_letter_image_set = [];
        this.attach_have_you_letter_image_set = [];
        this.complaint_documents_image_set = [];
        this.ImageServerURL = this._cS.imageUrl();
        this.professional_step3_fb();
        this.formControlValueChanged();
        this.setClaimData();
    }
    ProfessionalStep3Page.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    ProfessionalStep3Page.prototype.professional_step3_fb = function () {
        this.professional_form_step3 = this.formBuilder.group({
            regulator_inform: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            regulator: [null],
            date_received_notification: [null],
            regulator_respond: [null],
            date_respond: [null],
            already_respond: [null],
            require_legal_assistance: [null],
            professional_negligence: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            professional_negligence_other: [null],
            reported_circumstances: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(280), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            relationship_patient: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            related_criminal: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            alcohol_substance: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            care_treatment_patient: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            breach_professional_duty: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            loss_date_discovery: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            complaint_writing: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            how_aware_complaint: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            how_aware_complaint_other: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    ProfessionalStep3Page.prototype.formControlValueChanged = function () {
        var _this = this;
        this.professional_form_step3.get('regulator_inform')
            .valueChanges.subscribe(function (val) {
            var regulator = _this.professional_form_step3.get('regulator');
            var date_received_notification = _this.professional_form_step3.get('date_received_notification');
            var regulator_respond = _this.professional_form_step3.get('regulator_respond');
            regulator.patchValue(null);
            regulator.clearValidators();
            regulator.updateValueAndValidity();
            date_received_notification.patchValue(null);
            date_received_notification.clearValidators();
            date_received_notification.updateValueAndValidity();
            regulator_respond.patchValue(null);
            regulator_respond.clearValidators();
            regulator_respond.updateValueAndValidity();
            if (val == "true") {
                regulator.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                date_received_notification.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                regulator_respond.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
        });
        this.professional_form_step3.get('regulator_respond')
            .valueChanges.subscribe(function (val) {
            var date_respond = _this.professional_form_step3.get('date_respond');
            var already_respond = _this.professional_form_step3.get('already_respond');
            var require_legal_assistance = _this.professional_form_step3.get('require_legal_assistance');
            date_respond.patchValue(null);
            date_respond.clearValidators();
            date_respond.updateValueAndValidity();
            already_respond.patchValue(null);
            already_respond.clearValidators();
            already_respond.updateValueAndValidity();
            if (val == "true") {
                date_respond.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                already_respond.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            if (val == "false") {
                require_legal_assistance.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                require_legal_assistance.patchValue(null);
                require_legal_assistance.clearValidators();
                require_legal_assistance.updateValueAndValidity();
            }
        });
        this.professional_form_step3.get('breach_professional_duty')
            .valueChanges.subscribe(function (val) {
            var loss_date_discovery = _this.professional_form_step3.get('loss_date_discovery');
            var complaint_writing = _this.professional_form_step3.get('complaint_writing');
            loss_date_discovery.patchValue(null);
            loss_date_discovery.clearValidators();
            loss_date_discovery.updateValueAndValidity();
            complaint_writing.patchValue(null);
            complaint_writing.clearValidators();
            complaint_writing.updateValueAndValidity();
            if (val == "true") {
                loss_date_discovery.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                complaint_writing.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
        });
        this.professional_form_step3.get('how_aware_complaint')
            .valueChanges.subscribe(function (val) {
            var how_aware_complaint_other = _this.professional_form_step3.get('how_aware_complaint_other');
            if (val == "Other") {
                how_aware_complaint_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                how_aware_complaint_other.patchValue(null);
                how_aware_complaint_other.clearValidators();
                how_aware_complaint_other.updateValueAndValidity();
            }
        });
        this.professional_form_step3.get('professional_negligence')
            .valueChanges.subscribe(function (val) {
            var professional_negligence_other = _this.professional_form_step3.get('professional_negligence_other');
            if (val == "1629") {
                professional_negligence_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                professional_negligence_other.patchValue(null);
                professional_negligence_other.clearValidators();
                professional_negligence_other.updateValueAndValidity();
            }
        });
    };
    ;
    ProfessionalStep3Page.prototype.professionalStep3Next = function () {
        var _this = this;
        for (var v in this.professional_form_step3.controls) {
            this.professional_form_step3.controls[v].markAsTouched();
        }
        if (this.professional_form_step3.valid) {
            var step3 = {
                "step": 'step3',
                "ClaimNumber": localStorage.getItem('ProfessionalClaimNumber'),
                "regulator_inform": this.professional_form_step3.value.regulator_inform,
                "regulator": this.professional_form_step3.value.regulator,
                "date_received_notification": this.professional_form_step3.value.date_received_notification,
                "attach_letter": this.attach_letter_image_set,
                "attach_have_you_letter": this.attach_have_you_letter_image_set,
                "complaint_documents": this.complaint_documents_image_set,
                "regulator_respond": this.professional_form_step3.value.regulator_respond,
                "date_respond": this.professional_form_step3.value.date_respond,
                "already_respond": this.professional_form_step3.value.already_respond,
                "require_legal_assistance": this.professional_form_step3.value.require_legal_assistance,
                "professional_negligence": this.professional_form_step3.value.professional_negligence,
                "professional_negligence_other": this.professional_form_step3.value.professional_negligence_other,
                "reported_circumstances": this.professional_form_step3.value.reported_circumstances,
                "relationship_patient": this.professional_form_step3.value.relationship_patient,
                "related_criminal": this.professional_form_step3.value.related_criminal,
                "alcohol_substance": this.professional_form_step3.value.alcohol_substance,
                "care_treatment_patient": this.professional_form_step3.value.care_treatment_patient,
                "breach_professional_duty": this.professional_form_step3.value.breach_professional_duty,
                "loss_date_discovery": this.professional_form_step3.value.loss_date_discovery,
                "complaint_writing": this.professional_form_step3.value.complaint_writing,
                "how_aware_complaint": this.professional_form_step3.value.how_aware_complaint,
                "how_aware_complaint_other": this.professional_form_step3.value.how_aware_complaint_other,
            };
            this._cS.put_API(this._cS.URL_Professional_Claim_Post(), step3)
                .subscribe(function (data) {
                if (data.status == 0) {
                    _this.attach_letter_image_set = [];
                    _this.attach_have_you_letter_image_set = [];
                    _this.complaint_documents_image_set = [];
                    _this.setClaimData();
                    _this.router.navigate(['/professional-step4']);
                }
                else {
                }
            }, function (err) {
            });
        }
    };
    ProfessionalStep3Page.prototype.ngOnInit = function () {
        var _this = this;
        /* Step - 3 What is the nature of the complaint? */
        this._cS.getoptionvalue_API(147)
            .subscribe(function (data) {
            if (data.status == 0) {
                _this.professional_negligence = data.data;
            }
        });
        /* Step - 3 Which organisation or regulator */
        this._cS.getoptionvalue_API(158)
            .subscribe(function (data) {
            if (data.status == 0) {
                _this.regulator = data.data;
            }
        });
    };
    ProfessionalStep3Page.prototype.delete_attach_letter = function (img, position) {
        var _this = this;
        this.attach_letter_image.splice(position, 1);
        if (img.val) {
            var details = {
                ClaimNumber: localStorage.getItem('ProfessionalClaimNumber'),
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
    ProfessionalStep3Page.prototype.dynamicImages = function (array, path) {
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
    ProfessionalStep3Page.prototype.attach_letter = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader_1 = new FileReader();
            var extension = event.target.files[0].name.split('.').pop().toLowerCase();
            var fileName = event.target.files[0].name;
            var fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
            var formData = new FormData();
            formData.append('file', event.target.files[0]);
            formData.append("image_type", "attach_letter");
            formData.append("claimNumber", localStorage.getItem('ProfessionalClaimNumber'));
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
    ProfessionalStep3Page.prototype.delete_attach_have_you_letter = function (img, position) {
        var _this = this;
        this.attach_have_you_letter_image.splice(position, 1);
        if (img.val) {
            var details = {
                ClaimNumber: localStorage.getItem('ProfessionalClaimNumber'),
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
    ProfessionalStep3Page.prototype.attach_have_you_letter = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader_2 = new FileReader();
            var extension = event.target.files[0].name.split('.').pop().toLowerCase();
            var fileName = event.target.files[0].name;
            var fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
            var formData = new FormData();
            formData.append('file', event.target.files[0]);
            formData.append("image_type", "attach_have_you_letter");
            formData.append("claimNumber", localStorage.getItem('ProfessionalClaimNumber'));
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
    ProfessionalStep3Page.prototype.delete_complaint_documents = function (img, position) {
        var _this = this;
        this.complaint_documents_image.splice(position, 1);
        if (img.val) {
            var details = {
                ClaimNumber: localStorage.getItem('ProfessionalClaimNumber'),
                image_name: img.val,
                image_type: 'attach_complaint_documents',
            };
            this._cS.post_API(this._cS.URL_image_delet(), details)
                .subscribe(function (data) {
                console.log('data', data);
                if (data.status == 0) {
                    var dynamicI = _this.dynamicImages(data.data, 'attach_complaint_documents/');
                    _this.complaint_documents_image = dynamicI;
                    _this._cS.presentToastWithOptions(data.message);
                }
                else {
                    _this._cS.presentToastWithOptions(data.message);
                }
            });
        }
    };
    ProfessionalStep3Page.prototype.complaint_documents = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader_3 = new FileReader();
            var extension = event.target.files[0].name.split('.').pop().toLowerCase();
            var fileName = event.target.files[0].name;
            var fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
            var formData = new FormData();
            formData.append('file', event.target.files[0]);
            formData.append("image_type", "attach_complaint_documents");
            formData.append("claimNumber", localStorage.getItem('ProfessionalClaimNumber'));
            this._cS.ImageUpload(formData).subscribe(function (val) {
                reader_3.onload = function (event) {
                    var json = {
                        fileIcon2: fileTypes.indexOf(extension) > -1 ? false : true,
                        path: event.target.result,
                        name: val.data[0].file_name,
                        val: undefined
                    };
                    _this.complaint_documents_image.push(json);
                };
                reader_3.readAsDataURL(event.target.files[0]);
                _this.complaint_documents_image_set.push(val.data[0].file_name);
                if (val) {
                    _this._cS.presentToastWithOptions(val.message);
                }
                else {
                    _this._cS.presentToastWithOptions(val.message);
                }
            });
        }
    };
    ProfessionalStep3Page.prototype.back = function () {
        this.navCtrl.pop();
    };
    ProfessionalStep3Page.prototype.setClaimData = function () {
        var _this = this;
        var claimNumber = localStorage.getItem('ProfessionalClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe(function (data) {
                if (data.status == 0) {
                    _this.editClaimData = data.data;
                    if (_this.editClaimData.professional_negligence) {
                        var professional_negligence = JSON.parse(_this.editClaimData.professional_negligence);
                        for (var professional_negligence_set in professional_negligence) {
                        }
                    }
                    else {
                        professional_negligence_set = null;
                    }
                    if (_this.editClaimData.regulator) {
                        var regulator = JSON.parse(_this.editClaimData.regulator);
                        for (var regulator_set in regulator) {
                        }
                    }
                    else {
                        regulator_set = null;
                    }
                    _this.professional_form_step3.setValue({
                        regulator_inform: _this.editClaimData.regulator_inform,
                        regulator: regulator_set,
                        date_received_notification: _this.editClaimData.date_received_notification,
                        regulator_respond: _this.editClaimData.regulator_respond,
                        date_respond: _this.editClaimData.date_respond,
                        already_respond: _this.editClaimData.already_respond,
                        require_legal_assistance: _this.editClaimData.require_legal_assistance,
                        professional_negligence: professional_negligence_set,
                        professional_negligence_other: _this.editClaimData.professional_negligence_other,
                        reported_circumstances: _this.editClaimData.reported_circumstances,
                        relationship_patient: _this.editClaimData.relationship_patient,
                        related_criminal: _this.editClaimData.related_criminal,
                        alcohol_substance: _this.editClaimData.alcohol_substance,
                        care_treatment_patient: _this.editClaimData.care_treatment_patient,
                        breach_professional_duty: _this.editClaimData.breach_professional_duty,
                        loss_date_discovery: _this.editClaimData.loss_date_discovery,
                        complaint_writing: _this.editClaimData.complaint_writing,
                        how_aware_complaint: _this.editClaimData.how_aware_complaint,
                        how_aware_complaint_other: _this.editClaimData.how_aware_complaint_other
                    });
                    if (_this.editClaimData.attach_letter) {
                        var dynamicI = (_this.dynamicImages(_this.editClaimData.attach_letter, '/attach_letter/'));
                        _this.attach_letter_image = dynamicI;
                    }
                    if (_this.editClaimData.attach_have_you_letter) {
                        var dynamicI = (_this.dynamicImages(_this.editClaimData.attach_have_you_letter, '/attach_have_you_letter/'));
                        _this.attach_have_you_letter_image = dynamicI;
                    }
                    if (_this.editClaimData.complaint_documents) {
                        var dynamicI = (_this.dynamicImages(_this.editClaimData.complaint_documents, '/attach_complaint_documents/'));
                        _this.complaint_documents_image = dynamicI;
                    }
                }
            });
        }
    };
    ProfessionalStep3Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
    ]; };
    ProfessionalStep3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-professional-step3',
            template: __webpack_require__(/*! raw-loader!./professional-step3.page.html */ "./node_modules/raw-loader/index.js!./src/app/professional-indemnity/professional-step3/professional-step3.page.html"),
            styles: [__webpack_require__(/*! ./professional-step3.page.scss */ "./src/app/professional-indemnity/professional-step3/professional-step3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
    ], ProfessionalStep3Page);
    return ProfessionalStep3Page;
}());



/***/ })

}]);
//# sourceMappingURL=professional-indemnity-professional-step3-professional-step3-module-es5.js.map