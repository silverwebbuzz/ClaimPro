(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["property-property-step3-impact-by-collision-impact-by-collision-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/property/property-step3/impact-by-collision/impact-by-collision.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/property/property-step3/impact-by-collision/impact-by-collision.page.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons>\n        <ion-button color=\"primary\" (click)=\"back()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons> -->\n    <ion-title color=\"primary\" class=\"head\">Impact by collision</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]=\"impact_by_coliision_form\" autocomplete=\"off\">\n\n    <ion-label class=\"lbl-contact\">Impact by collision Details</ion-label>\n\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">What impacted the property?</ion-label>\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"what_impacted_property\"\n        class=\"btn-select bg\" mode=\"md\">\n        <ion-select-option value=\"Registered Motor Vehicle\">Registered Motor Vehicle</ion-select-option>\n        <ion-select-option value=\"Registered Motor Cycle\">Registered Motor Cycle</ion-select-option>\n        <ion-select-option value=\"Unregistered Motor Vehicle/Cycle\">Unregistered Motor Vehicle/Cycle\n        </ion-select-option>\n        <ion-select-option value=\"Boat\">Boat</ion-select-option>\n        <ion-select-option value=\"Aircraft\">Aircraft</ion-select-option>\n        <ion-select-option value=\"Animal\">Animal</ion-select-option>\n        <ion-select-option value=\"Bicycle\">Bicycle</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"impact_by_coliision_form.controls.what_impacted_property.hasError('required') && impact_by_coliision_form.controls.what_impacted_property.touched\">\n      <p class=\"content\">Please Select Required Field!</p>\n    </ion-item>\n\n    <div\n      *ngIf=\"impact_by_coliision_form.get('what_impacted_property').value && !(impact_by_coliision_form.get('what_impacted_property').value === 'Animal' || impact_by_coliision_form.get('what_impacted_property').value === 'Bicycle')\">\n\n      <div class=\"div-que add-margin\">\n\n        <ion-label class=\"lbl-head\">Were you the driver?</ion-label>\n\n        <ion-radio-group formControlName=\"were_you_the_driver\">\n          <ion-item lines=\"none\" class=\"items-radio\">\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\n          </ion-item>\n          <ion-item lines=\"none\" class=\"items-radio\">\n            <ion-label class=\"lbl-radio\">No</ion-label>\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n\n      </div>\n\n      <div class=\"div-N\" *ngIf=\"this.impact_by_coliision_form.get('were_you_the_driver').value == 'false'\">\n\n        <ion-label class=\"lbl-contact add-margin\">Driver details</ion-label>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">First Name</ion-label>\n          <ion-input type=\"text\" formControlName=\"tp_christian_other_driver\" color=\"primary\" class=\"input-box\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_christian_other_driver.hasError('required') && impact_by_coliision_form.controls.tp_christian_other_driver.touched\">\n          <p class=\"content\">Please Enter First Name!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">Last Name</ion-label>\n          <ion-input type=\"text\" formControlName=\"tp_name_other_driver\" color=\"primary\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_name_other_driver.hasError('required') && impact_by_coliision_form.controls.tp_name_other_driver.touched\">\n          <p class=\"content\">Please Enter Last Name!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">Street</ion-label>\n          <ion-input type=\"text\" formControlName=\"tp_postal_street\" color=\"primary\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_postal_street.hasError('required') && impact_by_coliision_form.controls.tp_postal_street.touched\">\n          <p class=\"content\">Please Enter Street!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">Suburb/Town</ion-label>\n          <ion-input type=\"text\" formControlName=\"tp_postal_suburb\" color=\"primary\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_postal_suburb.hasError('required') && impact_by_coliision_form.controls.tp_postal_suburb.touched\">\n          <p class=\"content\">Please Enter Town!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">PostCode</ion-label>\n          <ion-input type=\"number\" formControlName=\"tp_postal_postcode\" color=\"primary\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_postal_postcode.hasError('required') && impact_by_coliision_form.controls.tp_postal_postcode.touched\">\n          <p class=\"content\">Please Enter Postcode!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">Email</ion-label>\n          <ion-input type=\"email\" formControlName=\"tp_postal_email\" color=\"primary\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_postal_email.hasError('required') && impact_by_coliision_form.controls.tp_postal_email.touched\">\n          <p class=\"content\">Email Address is required!</p>\n        </ion-item>\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_postal_email.hasError('pattern') && impact_by_coliision_form.controls.tp_postal_email.touched\">\n          <p class=\"content\">Please Enter a Valid Email Address!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">Telephone</ion-label>\n          <ion-input type=\"number\" formControlName=\"tp_tele_main\" color=\"primary\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_tele_main.hasError('required') && impact_by_coliision_form.controls.tp_tele_main.touched\">\n          <p class=\"content\">Please Enter Telephone!</p>\n        </ion-item>\n\n      </div>\n\n    </div>\n\n    <!-- Animal -->\n    <div *ngIf=\"impact_by_coliision_form.get('what_impacted_property').value == 'Animal'\">\n\n      <ion-item lines=\"none\" class=\"item-dropdown add\">\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">Type of animal</ion-label>\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"type_animal\"\n          class=\"btn-select bg\" mode=\"md\">\n          <ion-select-option value=\"Wild Animal\">Wild Animal</ion-select-option>\n          <ion-select-option value=\"Farm Animal\">Farm Animal</ion-select-option>\n          <ion-select-option value=\"Other\">Other</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"impact_by_coliision_form.controls.type_animal.hasError('required') && impact_by_coliision_form.controls.type_animal.touched\">\n        <p class=\"content\">Please Select Required Field!</p>\n      </ion-item>\n\n      <!-- Other -->\n      <div *ngIf=\"impact_by_coliision_form.get('type_animal').value == 'Other'\">\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\n          <ion-input type=\"text\" color=\"primary\" formControlName=\"type_animal_other\" class=\"input-box\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.type_animal_other.hasError('required') && impact_by_coliision_form.controls.type_animal_other.touched\">\n          <p class=\"content\">Please Enter Required Field!</p>\n        </ion-item>\n      </div>\n\n      <div class=\"div-que add-margin\">\n\n        <ion-label class=\"lbl-head\">Are you the owner of the animal? </ion-label>\n\n        <ion-radio-group formControlName=\"animal_owner\">\n          <ion-item lines=\"none\" class=\"items-radio\">\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\n          </ion-item>\n          <ion-item lines=\"none\" class=\"items-radio\">\n            <ion-label class=\"lbl-radio\">No</ion-label>\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n\n      </div>\n\n      <div class=\"div-N\" *ngIf=\"this.impact_by_coliision_form.get('animal_owner').value == 'false'\">\n\n        <ion-label class=\"lbl-contact add-margin\">Animal ownwer details</ion-label>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">First Name</ion-label>\n          <ion-input type=\"text\" formControlName=\"tp_christian_animal_owner\" color=\"primary\" class=\"input-box\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_christian_animal_owner.hasError('required') && impact_by_coliision_form.controls.tp_christian_animal_owner.touched\">\n          <p class=\"content\">Please Enter First Name!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">Last Name</ion-label>\n          <ion-input type=\"text\" formControlName=\"tp_name_animal_owner\" color=\"primary\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_name_animal_owner.hasError('required') && impact_by_coliision_form.controls.tp_name_animal_owner.touched\">\n          <p class=\"content\">Please Enter Last Name!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">Street</ion-label>\n          <ion-input type=\"text\" formControlName=\"tp_postal_street\" color=\"primary\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_postal_street.hasError('required') && impact_by_coliision_form.controls.tp_postal_street.touched\">\n          <p class=\"content\">Please Enter Street!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">Suburb/Town</ion-label>\n          <ion-input type=\"text\" formControlName=\"tp_postal_suburb\" color=\"primary\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_postal_suburb.hasError('required') && impact_by_coliision_form.controls.tp_postal_suburb.touched\">\n          <p class=\"content\">Please Enter Town!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">PostCode</ion-label>\n          <ion-input type=\"number\" formControlName=\"tp_postal_postcode\" color=\"primary\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_postal_postcode.hasError('required') && impact_by_coliision_form.controls.tp_postal_postcode.touched\">\n          <p class=\"content\">Please Enter Postcode!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">Email</ion-label>\n          <ion-input type=\"email\" formControlName=\"tp_postal_email\" color=\"primary\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_postal_email.hasError('required') && impact_by_coliision_form.controls.tp_postal_email.touched\">\n          <p class=\"content\">Email Address is required!</p>\n        </ion-item>\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_postal_email.hasError('pattern') && impact_by_coliision_form.controls.tp_postal_email.touched\">\n          <p class=\"content\">Please Enter a Valid Email Address!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">Telephone</ion-label>\n          <ion-input type=\"number\" formControlName=\"tp_tele_main\" color=\"primary\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_tele_main.hasError('required') && impact_by_coliision_form.controls.tp_tele_main.touched\">\n          <p class=\"content\">Please Enter Telephone!</p>\n        </ion-item>\n\n      </div>\n\n    </div>\n\n    <!-- bicycle -->\n\n    <div *ngIf=\"impact_by_coliision_form.get('what_impacted_property').value == 'Bicycle'\">\n\n      <div class=\"div-que add-margin\">\n\n        <ion-label class=\"lbl-head\">Are you the owner of the bike?</ion-label>\n\n        <ion-radio-group formControlName=\"bike_owner\">\n          <ion-item lines=\"none\" class=\"items-radio\">\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\n          </ion-item>\n          <ion-item lines=\"none\" class=\"items-radio\">\n            <ion-label class=\"lbl-radio\">No</ion-label>\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n\n      </div>\n\n      <div class=\"div-N\" *ngIf=\"this.impact_by_coliision_form.get('bike_owner').value == 'false'\">\n\n        <ion-label class=\"lbl-contact add-margin\">Bicycle ownwer details</ion-label>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">First Name</ion-label>\n          <ion-input type=\"text\" formControlName=\"tp_christian_bike_owner\" color=\"primary\" class=\"input-box\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_christian_bike_owner.hasError('required') && impact_by_coliision_form.controls.tp_christian_bike_owner.touched\">\n          <p class=\"content\">Please Enter First Name!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">Last Name</ion-label>\n          <ion-input type=\"text\" formControlName=\"tp_name_bike_owner\" color=\"primary\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_name_bike_owner.hasError('required') && impact_by_coliision_form.controls.tp_name_bike_owner.touched\">\n          <p class=\"content\">Please Enter Last Name!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">Street</ion-label>\n          <ion-input type=\"text\" formControlName=\"tp_postal_street\" color=\"primary\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_postal_street.hasError('required') && impact_by_coliision_form.controls.tp_postal_street.touched\">\n          <p class=\"content\">Please Enter Street!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">Suburb/Town</ion-label>\n          <ion-input type=\"text\" formControlName=\"tp_postal_suburb\" color=\"primary\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_postal_suburb.hasError('required') && impact_by_coliision_form.controls.tp_postal_suburb.touched\">\n          <p class=\"content\">Please Enter Town!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">PostCode</ion-label>\n          <ion-input type=\"number\" formControlName=\"tp_postal_postcode\" color=\"primary\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_postal_postcode.hasError('required') && impact_by_coliision_form.controls.tp_postal_postcode.touched\">\n          <p class=\"content\">Please Enter Postcode!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">Email</ion-label>\n          <ion-input type=\"email\" formControlName=\"tp_postal_email\" color=\"primary\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_postal_email.hasError('required') && impact_by_coliision_form.controls.tp_postal_email.touched\">\n          <p class=\"content\">Email Address is required!</p>\n        </ion-item>\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_postal_email.hasError('pattern') && impact_by_coliision_form.controls.tp_postal_email.touched\">\n          <p class=\"content\">Please Enter a Valid Email Address!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">Telephone</ion-label>\n          <ion-input type=\"number\" formControlName=\"tp_tele_main\" color=\"primary\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_coliision_form.controls.tp_tele_main.hasError('required') && impact_by_coliision_form.controls.tp_tele_main.touched\">\n          <p class=\"content\">Please Enter Telephone!</p>\n        </ion-item>\n\n      </div>\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n<ion-footer class=\"btns-footer\">\n  <ion-row class=\"row-footer\">\n    <ion-col class=\"col-footer border-R\">\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col class=\"col-footer border-L\">\n      <ion-button expand=\"full\" class=\"btn-next\" (click)=\"next()\">\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>"

/***/ }),

/***/ "./src/app/property/property-step3/impact-by-collision/impact-by-collision.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/property/property-step3/impact-by-collision/impact-by-collision.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ImpactByCollisionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpactByCollisionPageModule", function() { return ImpactByCollisionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _impact_by_collision_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./impact-by-collision.page */ "./src/app/property/property-step3/impact-by-collision/impact-by-collision.page.ts");







const routes = [
    {
        path: '',
        component: _impact_by_collision_page__WEBPACK_IMPORTED_MODULE_6__["ImpactByCollisionPage"]
    }
];
let ImpactByCollisionPageModule = class ImpactByCollisionPageModule {
};
ImpactByCollisionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_impact_by_collision_page__WEBPACK_IMPORTED_MODULE_6__["ImpactByCollisionPage"]]
    })
], ImpactByCollisionPageModule);



/***/ }),

/***/ "./src/app/property/property-step3/impact-by-collision/impact-by-collision.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/property/property-step3/impact-by-collision/impact-by-collision.page.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L3Byb3BlcnR5LXN0ZXAzL2ltcGFjdC1ieS1jb2xsaXNpb24vaW1wYWN0LWJ5LWNvbGxpc2lvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/property/property-step3/impact-by-collision/impact-by-collision.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/property/property-step3/impact-by-collision/impact-by-collision.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: ImpactByCollisionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpactByCollisionPage", function() { return ImpactByCollisionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ImpactByCollisionPage = class ImpactByCollisionPage {
    constructor(navCtrl, router, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.impact_by_coliision_fb();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    impact_by_coliision_fb() {
        this.impact_by_coliision_form = this.formBuilder.group({
            what_impacted_property: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            were_you_the_driver: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tp_christian_other_driver: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tp_name_other_driver: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            type_animal: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            type_animal_other: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            animal_owner: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tp_christian_animal_owner: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tp_name_animal_owner: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            bike_owner: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tp_christian_bike_owner: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tp_name_bike_owner: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tp_postal_street: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tp_postal_suburb: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tp_postal_postcode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tp_postal_email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ])],
            tp_tele_main: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ImpactByColiisionNext() {
        for (let v in this.impact_by_coliision_form.controls) {
            this.impact_by_coliision_form.controls[v].markAsTouched();
        }
        if (this.impact_by_coliision_form.valid) {
            const body = {
                "what_impacted_property": this.impact_by_coliision_form.value.what_impacted_property,
                "were_you_the_driver": this.impact_by_coliision_form.value.were_you_the_driver,
                "tp_christian_other_driver": this.impact_by_coliision_form.value.tp_christian_other_driver,
                "tp_name_other_driver": this.impact_by_coliision_form.value.tp_name_other_driver,
                "type_animal": this.impact_by_coliision_form.value.type_animal,
                "type_animal_other": this.impact_by_coliision_form.value.type_animal_other,
                "animal_owner": this.impact_by_coliision_form.value.animal_owner,
                "tp_christian_animal_owner": this.impact_by_coliision_form.value.tp_christian_animal_owner,
                "tp_name_animal_owner": this.impact_by_coliision_form.value.tp_name_animal_owner,
                "bike_owner": this.impact_by_coliision_form.value.bike_owner,
                "tp_christian_bike_owner": this.impact_by_coliision_form.value.tp_christian_bike_owner,
                "tp_name_bike_owner": this.impact_by_coliision_form.value.tp_name_bike_owner,
                "tp_postal_street": this.impact_by_coliision_form.value.tp_postal_street,
                "tp_postal_suburb": this.impact_by_coliision_form.value.tp_postal_suburb,
                "tp_postal_postcode": this.impact_by_coliision_form.value.tp_postal_postcode,
                "tp_postal_email": this.impact_by_coliision_form.value.tp_postal_email,
                "tp_tele_main": this.impact_by_coliision_form.value.tp_tele_main,
            };
        }
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.pop();
    }
};
ImpactByCollisionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
];
ImpactByCollisionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-impact-by-collision',
        template: __webpack_require__(/*! raw-loader!./impact-by-collision.page.html */ "./node_modules/raw-loader/index.js!./src/app/property/property-step3/impact-by-collision/impact-by-collision.page.html"),
        styles: [__webpack_require__(/*! ./impact-by-collision.page.scss */ "./src/app/property/property-step3/impact-by-collision/impact-by-collision.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
], ImpactByCollisionPage);



/***/ })

}]);
//# sourceMappingURL=property-property-step3-impact-by-collision-impact-by-collision-module-es2015.js.map