(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-liability-general-step1-general-step1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/general-liability/general-step1/general-step1.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/general-liability/general-step1/general-step1.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Client / Policyholder</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"general_form_step1\" autocomplete=\"off\">\r\n    <ion-item lines=\"none\" class=\"item-dropdown\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">How would you like to be contacted?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"preferred_communication\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option *ngFor=\"let opt of preferred_communication | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n        <!-- <ion-select-option value=\"Telephone\">Telephone</ion-select-option>\r\n        <ion-select-option value=\"Email\">Email</ion-select-option>\r\n        <ion-select-option value=\"SMS\">SMS</ion-select-option>\r\n        <ion-select-option value=\"Letter\">Letter</ion-select-option> -->\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step1.controls.preferred_communication.hasError('required') && general_form_step1.controls.preferred_communication.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown drop-over\">Are you making a personal claim or business claim?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"type_entitiy\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ng-container *ngFor=\"let opt of client_type | keyvalue\">\r\n        <ion-select-option *ngIf=\"opt.key == '1001' || opt.key == '1002'\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n        <!-- <ion-select-option value=\"Personal\">Personal</ion-select-option>\r\n        <ion-select-option value=\"Commercial\">Commercial</ion-select-option>\r\n        <ion-select-option value=\"Government\">Government</ion-select-option>\r\n        <ion-select-option value=\"Association\">Association</ion-select-option> -->\r\n        </ng-container>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step1.controls.type_entitiy.hasError('required') && general_form_step1.controls.type_entitiy.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <div *ngIf=\"general_form_step1.get('type_entitiy').value == '1002' ||  general_form_step1.get('type_entitiy').value == '1004' || general_form_step1.get('type_entitiy').value == '1003'\">\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Business name</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"client_company\" color=\"primary\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step1.controls.client_company.hasError('required') && general_form_step1.controls.client_company.touched\">\r\n      <p class=\"content\">Please Enter Required Field!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Trading name</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"trading_name\" color=\"primary\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step1.controls.trading_name.hasError('required') && general_form_step1.controls.trading_name.touched\">\r\n      <p class=\"content\">Please Enter Required Field!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">ABN</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"abn_client\" color=\"primary\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step1.controls.abn_client.hasError('required') && general_form_step1.controls.abn_client.touched\">\r\n      <p class=\"content\">Please Enter Required Field!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">ITC%</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"itc_client\" color=\"primary\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step1.controls.itc_client.hasError('required') && general_form_step1.controls.itc_client.touched\">\r\n      <p class=\"content\">Please Enter Required Field!</p>\r\n    </ion-item>\r\n\r\n    </div>\r\n\r\n    <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">What is your professional occupation?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"description_business\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"Builder\">Builder</ion-select-option>\r\n        <ion-select-option value=\"Cleaning\">Cleaning</ion-select-option>\r\n        <ion-select-option value=\"Electrician\">Electrician</ion-select-option>\r\n        <ion-select-option value=\"Landscaping\">Landscaping</ion-select-option>\r\n        <ion-select-option value=\"Mechanic\">Mechanic</ion-select-option>\r\n        <ion-select-option value=\"Mowing\">Mowing</ion-select-option>\r\n        <ion-select-option value=\"Painting\">Painting</ion-select-option>\r\n        <ion-select-option value=\"Property Owner\">Property Owner</ion-select-option>\r\n        <ion-select-option value=\"Other\">Other</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step1.controls.description_business.hasError('required') && general_form_step1.controls.description_business.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"general_form_step1.get('description_business').value == 'Other'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"description_business_other\" class=\"input-box\">\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"general_form_step1.controls.description_business_other.hasError('required') && general_form_step1.controls.description_business_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <!-- <div class=\"div-que add-margin\">\r\n      <ion-label class=\"lbl-head\">Are you licensed to conduct Health Care Services?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"health_care_service\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div> -->\r\n\r\n    <div class=\"div-que add-margin\">\r\n      <ion-label class=\"lbl-head\">Are you required to be licensed to practice?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"licensed_service\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"div-que add\">\r\n      <ion-label class=\"lbl-head\">Do you hold the required qualifications?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"required_qualifications\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <ion-item class=\"item-dropdown\" lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Select your professional association</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\"\r\n        formControlName=\"association_name_picklist\" class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"MAA\">MAA</ion-select-option>\r\n        <ion-select-option value=\"ACPA\">ACPA</ion-select-option>\r\n        <ion-select-option value=\"APODdA\">APODdA</ion-select-option>\r\n        <ion-select-option value=\"MFAA\">MFAA</ion-select-option>\r\n        <ion-select-option value=\"Aussie Home Loans\">Aussie Home Loans</ion-select-option>\r\n        <ion-select-option value=\"Connective\">Connective</ion-select-option>\r\n        <ion-select-option value=\"Mortgage Choice\">Mortgage Choice</ion-select-option>\r\n        <ion-select-option value=\"Outsource Financial\">Outsource Financial</ion-select-option>\r\n        <ion-select-option value=\"National Mortgage Brokers\">National Mortgage Brokers</ion-select-option>\r\n        <ion-select-option value=\"BSA\">BSA</ion-select-option>\r\n        <ion-select-option value=\"APA\">APA</ion-select-option>\r\n        <ion-select-option value=\"Australian Podiatrists Council\">Australian Podiatrists Council</ion-select-option>\r\n        <ion-select-option value=\"PACFA\">PACFA</ion-select-option>\r\n        <ion-select-option value=\"Pay Wise\">Pay Wise</ion-select-option>\r\n        <ion-select-option value=\"APNA\">APNA</ion-select-option>\r\n        <ion-select-option value=\"Kings Transport\">Kings Transport</ion-select-option>\r\n        <ion-select-option value=\"MMS\">MMS</ion-select-option>\r\n        <ion-select-option value=\"SSAA\">SSAA</ion-select-option>\r\n        <ion-select-option value=\"Other\">Other</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step1.controls.association_name_picklist.hasError('required') && general_form_step1.controls.association_name_picklist.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"general_form_step1.get('association_name_picklist').value == 'Other'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n        <ion-input type=\"text\" color=\"primary\" class=\"input-box\" formControlName=\"association_name_picklist_other\">\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"general_form_step1.controls.association_name_picklist_other.hasError('required') && general_form_step1.controls.association_name_picklist_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <!-- <div class=\"div-que add-margin\">\r\n      <ion-label class=\"lbl-head\">Do you trade under a business name?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"business_name\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"div-Y\" *ngIf=\"this.general_form_step1.get('business_name').value == 'true'\">\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Trading name</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"trading_name\" color=\"primary\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"general_form_step1.controls.trading_name.hasError('required') && general_form_step1.controls.trading_name.touched\">\r\n        <p class=\"content\">Please Enter Trading name!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">ABN</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"abn_client\" color=\"primary\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"general_form_step1.controls.abn_client.hasError('required') && general_form_step1.controls.abn_client.touched\">\r\n        <p class=\"content\">Please Enter ABN!</p>\r\n      </ion-item>\r\n\r\n    </div> -->\r\n\r\n    <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">On what basis are you employed?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"employee_basis\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"Business Owner\">Business Owner</ion-select-option>\r\n        <ion-select-option value=\"Practioner\">Practioner</ion-select-option>\r\n        <ion-select-option value=\"Other\">Other</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step1.controls.employee_basis.hasError('required') && general_form_step1.controls.employee_basis.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"general_form_step1.get('employee_basis').value == 'Other'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"employee_basis_other\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"general_form_step1.controls.employee_basis_other.hasError('required') && general_form_step1.controls.employee_basis_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <!-- <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">What is your employment status?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"employment_status2\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"Full time\">Full time</ion-select-option>\r\n        <ion-select-option value=\"Part time\">Part time</ion-select-option>\r\n        <ion-select-option value=\"Locum\">Locum</ion-select-option>\r\n        <ion-select-option value=\"Other\">Other</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step1.controls.employment_status2.hasError('required') && general_form_step1.controls.employment_status2.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item> -->\r\n\r\n    <!-- Other -->\r\n    <!-- <div *ngIf=\"general_form_step1.get('employment_status2').value == 'Other'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\"> -->\r\n        <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\r\n        <!-- <ion-input type=\"text\" color=\"primary\" formControlName=\"employment_status2_other\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"general_form_step1.controls.employment_status2_other.hasError('required') && general_form_step1.controls.employment_status2_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div> -->\r\n\r\n    <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">What is your length experience?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"length_experience\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"less than 1 year\">Less than 1 year</ion-select-option>\r\n        <ion-select-option value=\"1 - 5 ears\">1 - 5 years</ion-select-option>\r\n        <ion-select-option value=\"more than 5 years\">More than 5 years</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"general_form_step1.controls.length_experience.hasError('required') && general_form_step1.controls.length_experience.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" size=\"large\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" size=\"large\" class=\"btn-next\" (click)=\"GeneralStep1Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/general-liability/general-step1/general-step1.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/general-liability/general-step1/general-step1.module.ts ***!
  \*************************************************************************/
/*! exports provided: GeneralStep1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralStep1PageModule", function() { return GeneralStep1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _general_step1_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./general-step1.page */ "./src/app/general-liability/general-step1/general-step1.page.ts");










const routes = [
    {
        path: '',
        component: _general_step1_page__WEBPACK_IMPORTED_MODULE_9__["GeneralStep1Page"]
    }
];
let GeneralStep1PageModule = class GeneralStep1PageModule {
};
GeneralStep1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_general_step1_page__WEBPACK_IMPORTED_MODULE_9__["GeneralStep1Page"]],
        providers: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__["CommonMockService"],
        ],
    })
], GeneralStep1PageModule);



/***/ }),

/***/ "./src/app/general-liability/general-step1/general-step1.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/general-liability/general-step1/general-step1.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWwtbGlhYmlsaXR5L2dlbmVyYWwtc3RlcDEvZ2VuZXJhbC1zdGVwMS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/general-liability/general-step1/general-step1.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/general-liability/general-step1/general-step1.page.ts ***!
  \***********************************************************************/
/*! exports provided: GeneralStep1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralStep1Page", function() { return GeneralStep1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");







let GeneralStep1Page = class GeneralStep1Page {
    constructor(navCtrl, router, _cS, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.general_step1_fb();
        this.setClaimData();
        this.formControlValueChanged();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    general_step1_fb() {
        this.general_form_step1 = this.formBuilder.group({
            preferred_communication: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type_entitiy: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            client_company: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            trading_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            abn_client: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            itc_client: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // health_care_service: [null, Validators.required],
            description_business: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description_business_other: [null],
            licensed_service: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            required_qualifications: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            association_name_picklist: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            association_name_picklist_other: [null],
            // business_name: [null, Validators.required],
            // abn_client: [null],
            // trading_name: [null],
            employee_basis: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            employee_basis_other: [null],
            // employment_status2: [null, Validators.required],
            // employment_status2_other: [null],
            length_experience: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    formControlValueChanged() {
        this.general_form_step1.get('type_entitiy')
            .valueChanges.subscribe((val) => {
            const client_company = this.general_form_step1.get('client_company');
            if (val == "1001") {
                client_company.patchValue(null);
                client_company.clearValidators();
                client_company.updateValueAndValidity();
            }
            else {
                client_company.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
        });
        // this.general_form_step1.get('business_name')
        //   .valueChanges.subscribe(
        //     (val: any) => {
        //       const abn_client = this.general_form_step1.get('abn_client');
        //       const trading_name = this.general_form_step1.get('trading_name');
        //       abn_client.patchValue(null);
        //       abn_client.clearValidators();
        //       abn_client.updateValueAndValidity();
        //       trading_name.patchValue(null);
        //       trading_name.clearValidators();
        //       trading_name.updateValueAndValidity();
        //       if (val == "true") {
        //         abn_client.setValidators([Validators.required]);
        //         trading_name.setValidators([Validators.required]);
        //       }
        //     });
        this.general_form_step1.get('employee_basis')
            .valueChanges.subscribe((val) => {
            const employee_basis_other = this.general_form_step1.get('employee_basis_other');
            if (val == "Other") {
                employee_basis_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                employee_basis_other.patchValue(null);
                employee_basis_other.clearValidators();
                employee_basis_other.updateValueAndValidity();
            }
        });
        // this.general_form_step1.get('employment_status2')
        //   .valueChanges.subscribe(
        //     (val: any) => {
        //       const employment_status2_other = this.general_form_step1.get('employment_status2_other');
        //       if (val == "Other") {
        //         employment_status2_other.setValidators([Validators.required]);
        //       } else {
        //         employment_status2_other.patchValue(null);
        //         employment_status2_other.clearValidators();
        //         employment_status2_other.updateValueAndValidity();
        //       }
        //     });
        this.general_form_step1.get('association_name_picklist')
            .valueChanges.subscribe((val) => {
            const association_name_picklist_other = this.general_form_step1.get('association_name_picklist_other');
            if (val == "Other") {
                association_name_picklist_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                association_name_picklist_other.patchValue(null);
                association_name_picklist_other.clearValidators();
                association_name_picklist_other.updateValueAndValidity();
            }
        });
        this.general_form_step1.get('description_business')
            .valueChanges.subscribe((val) => {
            const description_business_other = this.general_form_step1.get('description_business_other');
            if (val == "Other") {
                description_business_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                description_business_other.patchValue(null);
                description_business_other.clearValidators();
                description_business_other.updateValueAndValidity();
            }
        });
    }
    GeneralStep1Next() {
        for (let v in this.general_form_step1.controls) {
            this.general_form_step1.controls[v].markAsTouched();
        }
        if (this.general_form_step1.valid) {
            const step1 = {
                "step": 'step1',
                "ClaimNumber": localStorage.getItem('GeneralClaimNumber'),
                "contacted": this.general_form_step1.value.preferred_communication,
                "client_type": this.general_form_step1.value.type_entitiy,
                "client_company": this.general_form_step1.value.client_company,
                "trading_name": this.general_form_step1.value.trading_name,
                "abn_client": this.general_form_step1.value.abn_client,
                "itc_client": this.general_form_step1.value.itc_client,
                // "business_name": this.general_form_step1.value.business_name,
                // "health_care_service": this.general_form_step1.value.health_care_service,
                "description_business": this.general_form_step1.value.description_business,
                "description_business_other": this.general_form_step1.value.description_business_other,
                "licensed_service": this.general_form_step1.value.licensed_service,
                "required_qualifications": this.general_form_step1.value.required_qualifications,
                "association_name_picklist": this.general_form_step1.value.association_name_picklist,
                "association_name_picklist_other": this.general_form_step1.value.association_name_picklist_other,
                // "trading_name": this.general_form_step1.value.trading_name,
                // "abn_client": this.general_form_step1.value.abn_client,
                'employee_basis': this.general_form_step1.value.employee_basis,
                "employee_basis_other": this.general_form_step1.value.employee_basis_other,
                // "employment_status2": this.general_form_step1.value.employment_status2,
                // "employment_status2_other": this.general_form_step1.value.employment_status2_other,
                "length_experience": this.general_form_step1.value.length_experience
            };
            this._cS.put_API(this._cS.URL_General_Claim_Post(), step1)
                .subscribe((data) => {
                if (data.status == 0) {
                    this.setClaimData();
                    this.router.navigate(['/general-step2']);
                }
                else {
                }
            }, err => {
            });
        }
    }
    ngOnInit() {
        // DropDown Option List Value 
        /* Step - 1 How would you like to be contacted */
        this._cS.getoptionvalue_API(5)
            .subscribe((data) => {
            if (data.status == 0) {
                this.preferred_communication = data.data;
            }
        });
        /* Step - 1 Client type */
        this._cS.getoptionvalue_API(1)
            .subscribe((data) => {
            if (data.status == 0) {
                this.client_type = data.data;
            }
        });
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
                    if (this.editClaimData.preferred_communication) {
                        var preferred_communication = JSON.parse(this.editClaimData.preferred_communication);
                        for (var preferred_communication_set in preferred_communication) {
                        }
                    }
                    else {
                        preferred_communication_set = null;
                    }
                    if (this.editClaimData.type_entitiy) {
                        var type_entitiyArry = JSON.parse(this.editClaimData.type_entitiy);
                        for (var type_entitiy_set in type_entitiyArry) {
                        }
                    }
                    else {
                        type_entitiy_set = null;
                    }
                    this.general_form_step1.setValue({
                        preferred_communication: preferred_communication_set,
                        type_entitiy: type_entitiy_set,
                        client_company: this.editClaimData.client_company,
                        health_care_service: this.editClaimData.health_care_service,
                        description_business: this.editClaimData.description_business,
                        description_business_other: this.editClaimData.description_business_other,
                        licensed_service: this.editClaimData.licensed_service,
                        required_qualifications: this.editClaimData.required_qualifications,
                        association_name_picklist: this.editClaimData.association_name_picklist,
                        association_name_picklist_other: this.editClaimData.association_name_picklist_other,
                        business_name: this.editClaimData.business_name,
                        abn_client: this.editClaimData.abn_client,
                        trading_name: this.editClaimData.trading_name,
                        employee_basis: this.editClaimData.employee_basis,
                        employee_basis_other: this.editClaimData.employee_basis_other,
                        employment_status2: this.editClaimData.employment_status2,
                        employment_status2_other: this.editClaimData.employment_status2_other,
                        length_experience: this.editClaimData.length_experience,
                    });
                }
            });
        }
    }
};
GeneralStep1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] }
];
GeneralStep1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-general-step1',
        template: __webpack_require__(/*! raw-loader!./general-step1.page.html */ "./node_modules/raw-loader/index.js!./src/app/general-liability/general-step1/general-step1.page.html"),
        styles: [__webpack_require__(/*! ./general-step1.page.scss */ "./src/app/general-liability/general-step1/general-step1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
], GeneralStep1Page);



/***/ })

}]);
//# sourceMappingURL=general-liability-general-step1-general-step1-module-es2015.js.map