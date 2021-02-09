(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["property-property-step2-property-step2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/property/property-step2/property-step2.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/property/property-step2/property-step2.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Incident details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"property_form_step2\" autocomplete=\"off\">\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">What does the loss or damage refer to?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"property\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"Building/s\">Building/s</ion-select-option>\r\n        <ion-select-option value=\"Contents\">Contents</ion-select-option>\r\n        <ion-select-option value=\"Specified Items\">Specified Items</ion-select-option>\r\n        <ion-select-option value=\"Jewellery\">Jewellery</ion-select-option>\r\n        <ion-select-option value=\"Collection\">Collection</ion-select-option>\r\n        <ion-select-option value=\"Stock\">Stock</ion-select-option>\r\n        <ion-select-option value=\"Fixtures & Fittings\">Fixtures & Fittings</ion-select-option>\r\n        <ion-select-option value=\"Raw Materials\">Raw Materials</ion-select-option>\r\n        <ion-select-option value=\"Plant & Equipment\">Plant & Equipment</ion-select-option>\r\n        <ion-select-option value=\"Customer Goods\">Customer Goods</ion-select-option>\r\n        <ion-select-option value=\"Employee Goods\">Employee Goods</ion-select-option>\r\n        <ion-select-option value=\"Tools\">Tools</ion-select-option>\r\n        <ion-select-option value=\"Loss of Rent\">Loss of Rent</ion-select-option>\r\n        <ion-select-option value=\"Profits\">Profits</ion-select-option>\r\n        <ion-select-option value=\"Income\">Income</ion-select-option>\r\n        <ion-select-option value=\"Extra Increased Cost of Working\">Extra Increased Cost of Working</ion-select-option>\r\n        <ion-select-option value=\"Claims Preparartion\">Claims Preparartion</ion-select-option>\r\n        <ion-select-option value=\"Other\">Other</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"property_form_step2.controls.property.hasError('required') && property_form_step2.controls.property.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"property_form_step2.get('property').value == 'Other'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"property_other\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"property_form_step2.controls.property_other.hasError('required') && property_form_step2.controls.property_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Where did this occur?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"where_loss_damage\"\r\n        class=\"btn-select bg\" mode=\"md\" (ionChange)=\"occurchange($event.target.value)\">\r\n        <ion-select-option *ngFor=\"let opt of where_loss_damage | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n        <!-- <ion-select-option value=\"Risk Address\">Risk Address</ion-select-option>\r\n        <ion-select-option value=\"Another Location\">Another Location</ion-select-option>\r\n        <ion-select-option value=\"In Transit\">In Transit</ion-select-option>\r\n        <ion-select-option value=\"Other\">Other</ion-select-option> -->\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"property_form_step2.controls.where_loss_damage.hasError('required') && property_form_step2.controls.where_loss_damage.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Another Location, Risk Address -->\r\n    <div\r\n      *ngIf=\"property_form_step2.get('where_loss_damage').value == '1343' || property_form_step2.get('where_loss_damage').value == '1344'\">\r\n      <ion-label class=\"lbl-contact add-margin\">Address details</ion-label>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Street</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"risk_street\" color=\"primary\" class=\"input-box\" id=\"address_line_1\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"property_form_step2.controls.risk_street.hasError('required') && property_form_step2.controls.risk_street.touched\">\r\n        <p class=\"content\">Please Enter Street!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Suburb/Town</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"risk_suburb\" color=\"primary\" class=\"input-box\" id=\"city\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"property_form_step2.controls.risk_suburb.hasError('required') && property_form_step2.controls.risk_suburb.touched\">\r\n        <p class=\"content\">Please Enter Town!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">State</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"risk_state\" color=\"primary\" class=\"input-box\" id=\"state\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"property_form_step2.controls.risk_state.hasError('required') && property_form_step2.controls.risk_state.touched\">\r\n        <p class=\"content\">Please Enter State!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">PostCode</ion-label>\r\n        <ion-input type=\"number\" formControlName=\"risk_postcode\" color=\"primary\" class=\"input-box\" id=\"postcode\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"property_form_step2.controls.risk_postcode.hasError('required') && property_form_step2.controls.risk_postcode.touched\">\r\n        <p class=\"content\">Please Enter Postcode!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Country</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"risk_country\" color=\"primary\" class=\"input-box\" id=\"country\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"property_form_step2.controls.risk_country.hasError('required') && property_form_step2.controls.risk_country.touched\">\r\n        <p class=\"content\">Please Enter Country!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">Risk address type</ion-label>\r\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"risk_address_type\"\r\n          class=\"btn-select bg\" mode=\"md\">\r\n          <ion-select-option value=\"House\">House</ion-select-option>\r\n          <ion-select-option value=\"Apartment\">Apartment</ion-select-option>\r\n          <ion-select-option value=\"Flat\">Flat</ion-select-option>\r\n          <ion-select-option value=\"Town-House\">Town-House</ion-select-option>\r\n          <ion-select-option value=\"Office\">Office</ion-select-option>\r\n          <ion-select-option value=\"Retail\">Retail</ion-select-option>\r\n          <ion-select-option value=\"Factory\">Factory</ion-select-option>\r\n          <ion-select-option value=\"Warehouse\">Warehouse</ion-select-option>\r\n          <ion-select-option value=\"Other\">Other</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"property_form_step2.controls.risk_address_type.hasError('required') && property_form_step2.controls.risk_address_type.touched\">\r\n        <p class=\"content\">Please Select Required Field!</p>\r\n      </ion-item>\r\n\r\n      <!-- Other -->\r\n      <div *ngIf=\"property_form_step2.get('risk_address_type').value == '1346'\">\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\r\n          <ion-input type=\"text\" color=\"primary\" formControlName=\"risk_address_type_other\" class=\"input-box\">\r\n          </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"property_form_step2.controls.risk_address_type_other.hasError('required') && property_form_step2.controls.risk_address_type_other.touched\">\r\n          <p class=\"content\">Please Enter Required Field!</p>\r\n        </ion-item>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"property_form_step2.get('where_loss_damage').value == 'Other'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"where_loss_damage_other\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"property_form_step2.controls.where_loss_damage_other.hasError('required') && property_form_step2.controls.where_loss_damage_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">When did the loss/damage occur?</ion-label>\r\n      <ion-datetime placeholder=\"Select Date\" class=\"input-box box\" formControlName=\"date_loss\"\r\n        displayFormat=\"DD MMM YYYY\" min=\"2016-01-01\" max=\"2039-12-31\"></ion-datetime>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"property_form_step2.controls.date_loss.hasError('required') && property_form_step2.controls.date_loss.touched\">\r\n      <p class=\"content\">Please Select Date!</p>\r\n    </ion-item>\r\n\r\n    <div class=\"div-que add-margin\">\r\n\r\n      <ion-label class=\"lbl-head\">Was the loss/damage caused by a natural disaster?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"cat_event\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n\r\n    </div>\r\n\r\n    <div class=\"div-Y\" *ngIf=\"this.property_form_step2.get('cat_event').value == 'true'\">\r\n\r\n      <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">Disaster type</ion-label>\r\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"disaster_type\"\r\n          class=\"btn-select bg\" mode=\"md\">\r\n          <ion-select-option value=\"Earthquake\">Earthquake</ion-select-option>\r\n          <ion-select-option value=\"Thunderstorm\">Thunderstorm</ion-select-option>\r\n          <ion-select-option value=\"Cyclone\">Cyclone</ion-select-option>\r\n          <ion-select-option value=\"Flood\">Flood</ion-select-option>\r\n          <ion-select-option value=\"Blizzard\">Blizzard</ion-select-option>\r\n          <ion-select-option value=\"Tsunami\">Tsunami</ion-select-option>\r\n          <ion-select-option value=\"Volcano\">Volcano</ion-select-option>\r\n          <ion-select-option value=\"Other\">Other</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"property_form_step2.controls.disaster_type.hasError('required') && property_form_step2.controls.disaster_type.touched\">\r\n        <p class=\"content\">Please Select Required Field!</p>\r\n      </ion-item>\r\n\r\n      <!-- Other -->\r\n      <div *ngIf=\"property_form_step2.get('disaster_type').value == 'Other'\">\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\r\n          <ion-input type=\"text\" color=\"primary\" formControlName=\"disaster_type_other\" class=\"input-box\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"property_form_step2.controls.disaster_type_other.hasError('required') && property_form_step2.controls.disaster_type_other.touched\">\r\n          <p class=\"content\">Please Enter Required Field!</p>\r\n        </ion-item>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Who discovered the loss/damage?</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"reporter_name\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"property_form_step2.controls.reporter_name.hasError('required') && property_form_step2.controls.reporter_name.touched\">\r\n      <p class=\"content\">Please Enter Required Field!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">What is their relationship to the policyholder?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"who_discovered\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option *ngFor=\"let opt of who_discovered | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n        <!-- <ion-select-option value=\"Policyholder\">Policyholder</ion-select-option>\r\n        <ion-select-option value=\"Employee\">Employee</ion-select-option>\r\n        <ion-select-option value=\"Policyholders family member\">Policyholders family member</ion-select-option>\r\n        <ion-select-option value=\"Neighbour\">Neighbour</ion-select-option>\r\n        <ion-select-option value=\"Police\">Police</ion-select-option>\r\n        <ion-select-option value=\"Fire Brigade\">Fire Brigade</ion-select-option>\r\n        <ion-select-option value=\"Third Party\">Third Party</ion-select-option>\r\n        <ion-select-option value=\"Agent acting for Policyholder\">Agent acting for Policyholder</ion-select-option>\r\n        <ion-select-option value=\"Tenant\">Tenant</ion-select-option>\r\n        <ion-select-option value=\"Policyholders Manager\">Policyholders Manager</ion-select-option>\r\n        <ion-select-option value=\"Claimant\">Claimant</ion-select-option>\r\n        <ion-select-option value=\"Other\">Other</ion-select-option> -->\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"property_form_step2.controls.who_discovered.hasError('required') && property_form_step2.controls.who_discovered.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"property_form_step2.get('who_discovered').value == '1356'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"who_discovered_other\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"property_form_step2.controls.who_discovered_other.hasError('required') && property_form_step2.controls.who_discovered_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\" (click)=\"propertyStep2Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/property/property-step2/property-step2.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/property/property-step2/property-step2.module.ts ***!
  \******************************************************************/
/*! exports provided: PropertyStep2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyStep2PageModule", function() { return PropertyStep2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _property_step2_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./property-step2.page */ "./src/app/property/property-step2/property-step2.page.ts");










var routes = [
    {
        path: '',
        component: _property_step2_page__WEBPACK_IMPORTED_MODULE_9__["PropertyStep2Page"]
    }
];
var PropertyStep2PageModule = /** @class */ (function () {
    function PropertyStep2PageModule() {
    }
    PropertyStep2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_property_step2_page__WEBPACK_IMPORTED_MODULE_9__["PropertyStep2Page"]],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__["CommonMockService"],
            ],
        })
    ], PropertyStep2PageModule);
    return PropertyStep2PageModule;
}());



/***/ }),

/***/ "./src/app/property/property-step2/property-step2.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/property/property-step2/property-step2.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L3Byb3BlcnR5LXN0ZXAyL3Byb3BlcnR5LXN0ZXAyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/property/property-step2/property-step2.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/property/property-step2/property-step2.page.ts ***!
  \****************************************************************/
/*! exports provided: PropertyStep2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyStep2Page", function() { return PropertyStep2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var PropertyStep2Page = /** @class */ (function () {
    /* dropdown option Variable End */
    function PropertyStep2Page(navCtrl, router, formBuilder, _cS, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
        this._cS = _cS;
        this.statusBar = statusBar;
        this.property_step2_fb();
        this.formControlValueChanged();
        this.setClaimData();
    }
    PropertyStep2Page.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    PropertyStep2Page.prototype.property_step2_fb = function () {
        this.property_form_step2 = this.formBuilder.group({
            property: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            property_other: [null],
            where_loss_damage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            where_loss_damage_other: [null],
            risk_street: [null],
            risk_suburb: [null],
            risk_state: [null],
            risk_postcode: [null],
            risk_country: [null],
            risk_address_type: [null],
            risk_address_type_other: [null],
            date_loss: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cat_event: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            disaster_type: [null],
            disaster_type_other: [null],
            reporter_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            who_discovered: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            who_discovered_other: [null],
        });
    };
    PropertyStep2Page.prototype.formControlValueChanged = function () {
        var _this = this;
        this.property_form_step2.get('property')
            .valueChanges.subscribe(function (val) {
            var property_other = _this.property_form_step2.get('property_other');
            if (val == "Other") {
                property_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                property_other.patchValue(null);
                property_other.clearValidators();
                property_other.updateValueAndValidity();
            }
        });
        this.property_form_step2.get('where_loss_damage')
            .valueChanges.subscribe(function (val) {
            var risk_street = _this.property_form_step2.get('risk_street');
            var risk_suburb = _this.property_form_step2.get('risk_suburb');
            var risk_state = _this.property_form_step2.get('risk_state');
            var risk_postcode = _this.property_form_step2.get('risk_postcode');
            var risk_country = _this.property_form_step2.get('risk_country');
            var where_loss_damage_other = _this.property_form_step2.get('where_loss_damage_other');
            var risk_address_type = _this.property_form_step2.get('risk_address_type');
            if (val == "1343" || val == "1344") {
                risk_address_type.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
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
                risk_address_type.patchValue(null);
                risk_address_type.clearValidators();
                risk_address_type.updateValueAndValidity();
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
        this.property_form_step2.get('risk_address_type')
            .valueChanges.subscribe(function (val) {
            var risk_address_type_other = _this.property_form_step2.get('risk_address_type_other');
            if (val == "Other") {
                risk_address_type_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                risk_address_type_other.patchValue(null);
                risk_address_type_other.clearValidators();
                risk_address_type_other.updateValueAndValidity();
            }
        });
        this.property_form_step2.get('cat_event')
            .valueChanges.subscribe(function (val) {
            var disaster_type = _this.property_form_step2.get('disaster_type');
            disaster_type.patchValue(null);
            disaster_type.clearValidators();
            disaster_type.updateValueAndValidity();
            if (val == "true") {
                disaster_type.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
        });
        this.property_form_step2.get('who_discovered')
            .valueChanges.subscribe(function (val) {
            var who_discovered_other = _this.property_form_step2.get('who_discovered_other');
            if (val == "1356") {
                who_discovered_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                who_discovered_other.patchValue(null);
                who_discovered_other.clearValidators();
                who_discovered_other.updateValueAndValidity();
            }
        });
        this.property_form_step2.get('disaster_type')
            .valueChanges.subscribe(function (val) {
            var disaster_type_other = _this.property_form_step2.get('disaster_type_other');
            if (val == "Other") {
                disaster_type_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                disaster_type_other.patchValue(null);
                disaster_type_other.clearValidators();
                disaster_type_other.updateValueAndValidity();
            }
        });
    };
    PropertyStep2Page.prototype.propertyStep2Next = function () {
        var _this = this;
        for (var v in this.property_form_step2.controls) {
            this.property_form_step2.controls[v].markAsTouched();
        }
        if (this.property_form_step2.valid) {
            /* riskAddres Start */
            var riskStreetValue = null;
            var riskSuburbValue = null;
            var riskPostCodeValue = null;
            var riskStateValue = null;
            var riskcountryValue = null;
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
            var step2 = {
                "step": 'step2',
                "ClaimNumber": localStorage.getItem('PropertyClaimNumber'),
                "property": this.property_form_step2.value.property,
                "property_other": this.property_form_step2.value.property_other,
                "where_loss_damage": this.property_form_step2.value.where_loss_damage,
                "risk_street": riskStreetValue,
                "risk_suburb": riskSuburbValue,
                "risk_state": riskStateValue,
                "risk_postcode": riskPostCodeValue,
                "risk_country": riskcountryValue,
                "risk_address_type": this.property_form_step2.value.risk_address_type,
                "risk_address_type_other": this.property_form_step2.value.risk_address_type_other,
                "where_loss_damage_other": this.property_form_step2.value.where_loss_damage_other,
                "date_loss": this.property_form_step2.value.date_loss,
                "cat_event": this.property_form_step2.value.cat_event,
                "disaster_type": this.property_form_step2.value.disaster_type,
                "disaster_type_other": this.property_form_step2.value.disaster_type_other,
                "reporter_name": this.property_form_step2.value.reporter_name,
                "who_discovered": this.property_form_step2.value.who_discovered,
                "who_discovered_other": this.property_form_step2.value.who_discovered_other
            };
            this._cS.put_API(this._cS.URL_Property_Claim_Post(), step2)
                .subscribe(function (data) {
                if (data.status == 0) {
                    _this.setClaimData();
                    _this.router.navigate(['/property-step3']);
                }
                else {
                }
            }, function (err) {
            });
        }
    };
    PropertyStep2Page.prototype.ngOnInit = function () {
        var _this = this;
        var script = document.createElement("script");
        script.src = "https://api.addressfinder.io/assets/v3/widget.js";
        script.async = true;
        document.body.appendChild(script);
        //dropdown  value set
        this._cS.getoptionvalue_API(48)
            .subscribe(function (data) {
            if (data.status == 0) {
                _this.where_loss_damage = data.data;
            }
        });
        /* Where did the loss/damage occur? */
        this._cS.getoptionvalue_API(49)
            .subscribe(function (data) {
            if (data.status == 0) {
                _this.who_discovered = data.data;
            }
        });
    };
    PropertyStep2Page.prototype.occurchange = function ($event) {
        var _this = this;
        if ($event == "1343" || $event == "1344") {
            setTimeout(function () {
                _this.riskAddress();
            }, 1000);
        }
    };
    PropertyStep2Page.prototype.riskAddress = function () {
        var _this = this;
        var widget = new AddressFinder.Widget(document.getElementById("address_line_1"), "PVW639JF4ET8ALGDHNKB", "AU", {});
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
                var state_territory = val.metaData.state_territory;
                var country1 = "Australia";
                var JSON = {
                    risk_street: address_line_1,
                    risk_suburb: mainadddate,
                    risk_postcode: postcode,
                    risk_state: state_territory,
                    risk_country: country1
                };
                _this.property_form_step2.patchValue(JSON);
            }
        });
    };
    PropertyStep2Page.prototype.setClaimData = function () {
        var _this = this;
        var claimNumber = localStorage.getItem('PropertyClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe(function (data) {
                if (data.status == 0) {
                    console.log("editdate", data);
                    _this.editClaimData = data.data;
                    if (_this.editClaimData.where_loss_damage) {
                        var where_loss_damage = JSON.parse(_this.editClaimData.where_loss_damage);
                        for (var where_loss_damage_set in where_loss_damage) {
                        }
                    }
                    else {
                        where_loss_damage_set = null;
                    }
                    if (_this.editClaimData.who_discovered) {
                        var who_discovered = JSON.parse(_this.editClaimData.who_discovered);
                        for (var who_discovered_set in who_discovered) {
                        }
                    }
                    else {
                        who_discovered_set = null;
                    }
                    _this.property_form_step2.setValue({
                        property: _this.editClaimData.property,
                        property_other: _this.editClaimData.property_other,
                        where_loss_damage: where_loss_damage_set,
                        where_loss_damage_other: _this.editClaimData.where_loss_damage_other,
                        risk_street: _this.editClaimData.risk_street,
                        risk_suburb: _this.editClaimData.risk_suburb,
                        risk_state: _this.editClaimData.risk_state,
                        risk_postcode: _this.editClaimData.risk_postcode,
                        risk_country: _this.editClaimData.risk_country,
                        risk_address_type: _this.editClaimData.risk_address_type,
                        risk_address_type_other: _this.editClaimData.risk_address_type_other,
                        date_loss: _this.editClaimData.date_loss,
                        cat_event: _this.editClaimData.cat_event,
                        disaster_type: _this.editClaimData.disaster_type,
                        disaster_type_other: _this.editClaimData.disaster_type_other,
                        reporter_name: _this.editClaimData.reporter_name,
                        who_discovered: who_discovered_set,
                        who_discovered_other: _this.editClaimData.who_discovered_other,
                    });
                }
            });
        }
    };
    PropertyStep2Page.prototype.back = function () {
        this.navCtrl.pop();
    };
    PropertyStep2Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
    ]; };
    PropertyStep2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property-step2',
            template: __webpack_require__(/*! raw-loader!./property-step2.page.html */ "./node_modules/raw-loader/index.js!./src/app/property/property-step2/property-step2.page.html"),
            styles: [__webpack_require__(/*! ./property-step2.page.scss */ "./src/app/property/property-step2/property-step2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
    ], PropertyStep2Page);
    return PropertyStep2Page;
}());



/***/ })

}]);
//# sourceMappingURL=property-property-step2-property-step2-module-es5.js.map