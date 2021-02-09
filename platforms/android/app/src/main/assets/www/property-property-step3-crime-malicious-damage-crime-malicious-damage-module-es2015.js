(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["property-property-step3-crime-malicious-damage-crime-malicious-damage-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/property/property-step3/crime-malicious-damage/crime-malicious-damage.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/property/property-step3/crime-malicious-damage/crime-malicious-damage.page.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons>\n        <ion-button color=\"primary\" (click)=\"back()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons> -->\n    <ion-title color=\"primary\" class=\"head\">Crime/Malicious damage</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]=\"crime_malicious_form\" autocomplete=\"off\">\n\n    <ion-label class=\"lbl-contact\">Crime/Malicious damage Details</ion-label>\n\n    <div class=\"div-que add-margin\">\n\n      <ion-label class=\"lbl-head\">Does the building have an alarm?</ion-label>\n\n      <ion-radio-group formControlName=\"property_have_alarm\">\n        <ion-item lines=\"none\" class=\"items-radio\">\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"items-radio\">\n          <ion-label class=\"lbl-radio\">No</ion-label>\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n    </div>\n\n    <div class=\"div-Y\" *ngIf=\"this.crime_malicious_form.get('property_have_alarm').value == 'true'\">\n\n      <div class=\"div-que add-margin\">\n\n        <ion-label class=\"lbl-head\">Was it monitored by a security company?</ion-label>\n\n        <ion-radio-group formControlName=\"monitored_security_company\">\n          <ion-item lines=\"none\" class=\"items-radio\">\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\n          </ion-item>\n          <ion-item lines=\"none\" class=\"items-radio\">\n            <ion-label class=\"lbl-radio\">No</ion-label>\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n\n      </div>\n\n      <div class=\"div-que add-margin\">\n\n        <ion-label class=\"lbl-head\">Was the alarm armed at the time of the loss?</ion-label>\n\n        <ion-radio-group formControlName=\"alarm_armed_at_time_of_loss\">\n          <ion-item lines=\"none\" class=\"items-radio\">\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\n          </ion-item>\n          <ion-item lines=\"none\" class=\"items-radio\">\n            <ion-label class=\"lbl-radio\">No</ion-label>\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n\n      </div>\n\n    </div>\n\n    <div class=\"div-que add-margin\">\n\n      <ion-label class=\"lbl-head\">Does the building have video surveillance?</ion-label>\n\n      <ion-radio-group formControlName=\"building_video_surveillance\">\n        <ion-item lines=\"none\" class=\"items-radio\">\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"items-radio\">\n          <ion-label class=\"lbl-radio\">No</ion-label>\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n    </div>\n\n    <div class=\"div-Y\" *ngIf=\"this.crime_malicious_form.get('building_video_surveillance').value == 'true'\">\n\n      <div class=\"div-que add-margin\">\n\n        <ion-label class=\"lbl-head\">Is there video of the crime?</ion-label>\n\n        <ion-radio-group formControlName=\"video_proof\">\n          <ion-item lines=\"none\" class=\"items-radio\">\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\n          </ion-item>\n          <ion-item lines=\"none\" class=\"items-radio\">\n            <ion-label class=\"lbl-radio\">No</ion-label>\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n\n      </div>\n    </div>\n\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">How did they enter the building?</ion-label>\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"property_how_enter\"\n        class=\"btn-select bg\" mode=\"md\">\n        <ion-select-option value=\"Through the locked door\">Through the locked door</ion-select-option>\n        <ion-select-option value=\"Through the window\">Through the window</ion-select-option>\n        <ion-select-option value=\"Other\">Other</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"crime_malicious_form.controls.property_how_enter.hasError('required') && crime_malicious_form.controls.property_how_enter.touched\">\n      <p class=\"content\">Please Select Required Field!</p>\n    </ion-item>\n\n    <!-- Other -->\n    <div *ngIf=\"crime_malicious_form.get('property_how_enter').value == 'Other'\">\n      <ion-item lines=\"none\" class=\"input-item add\">\n        <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"property_how_enter_other\" class=\"input-box\">\n        </ion-input>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"crime_malicious_form.controls.property_how_enter_other.hasError('required') && crime_malicious_form.controls.property_how_enter_other.touched\">\n        <p class=\"content\">Please Enter Required Field!</p>\n      </ion-item>\n    </div>\n\n    <ion-label class=\"lbl-contact-blk add-margin\">Attach Supporting Documents</ion-label>\n\n    <div class=\"div-docs add-margin\">\n\n      <ion-row class=\"row-card\">\n        <ion-col size=\"6\" class=\"col-card\">\n          <ion-card class=\"card-upload\">\n            <ion-button fill=\"clear\" class=\"btn-close\" (click)=\"delete()\">\n              <ion-icon name=\"close\"></ion-icon>\n            </ion-button>\n            <img src=\"../../../assets/images/insurence-logo.png\" class=\"img-upload\" />\n            <ion-label class=\"lbl-filename\">FileName</ion-label>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <div class=\"upload-btn-wrapper\">\n        <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach Documents</ion-button>\n        <input type=\"file\" formControlName=\"myfile\" (change)=\"fileUpload($event)\"\n          accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\n      </div>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error error\"\n        *ngIf=\"crime_malicious_form.controls.myfile.hasError('required') && crime_malicious_form.controls.myfile.touched\">\n        <p class=\"content text\">Please Select Your Documents!</p>\n      </ion-item>\n\n    </div>\n\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Where did they enter the building?</ion-label>\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"property_where_enter\"\n        class=\"btn-select bg\" mode=\"md\">\n        <ion-select-option value=\"Through the front\">Through the front</ion-select-option>\n        <ion-select-option value=\"Through the back\">Through the back</ion-select-option>\n        <ion-select-option value=\"Other\">Other</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"crime_malicious_form.controls.property_where_enter.hasError('required') && crime_malicious_form.controls.property_where_enter.touched\">\n      <p class=\"content\">Please Select Required Field!</p>\n    </ion-item>\n\n    <!-- Other -->\n    <div *ngIf=\"crime_malicious_form.get('property_where_enter').value == 'Other'\">\n      <ion-item lines=\"none\" class=\"input-item add\">\n        <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"property_where_enter_other\" class=\"input-box\">\n        </ion-input>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"crime_malicious_form.controls.property_where_enter_other.hasError('required') && crime_malicious_form.controls.property_where_enter_other.touched\">\n        <p class=\"content\">Please Enter Required Field!</p>\n      </ion-item>\n    </div>\n\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Why were they able to enter the building?</ion-label>\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\"\n        formControlName=\"property_why_able_to_enter\" class=\"btn-select bg\" mode=\"md\">\n        <ion-select-option value=\"Door was not locked\">Door was not locked</ion-select-option>\n        <ion-select-option value=\"Window was not locked\">Window was not locked</ion-select-option>\n        <ion-select-option value=\"Other\">Other</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"crime_malicious_form.controls.property_why_able_to_enter.hasError('required') && crime_malicious_form.controls.property_why_able_to_enter.touched\">\n      <p class=\"content\">Please Select Required Field!</p>\n    </ion-item>\n\n    <!-- Other -->\n    <div *ngIf=\"crime_malicious_form.get('property_why_able_to_enter').value == 'Other'\">\n      <ion-item lines=\"none\" class=\"input-item add\">\n        <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"property_why_able_to_enter_other\" class=\"input-box\">\n        </ion-input>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"crime_malicious_form.controls.property_why_able_to_enter_other.hasError('required') && crime_malicious_form.controls.property_why_able_to_enter_other.touched\">\n        <p class=\"content\">Please Enter Required Field!</p>\n      </ion-item>\n    </div>\n\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">How did the offender/s leave the building?</ion-label>\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"property_offender_leave\"\n        class=\"btn-select bg\" mode=\"md\">\n        <ion-select-option value=\"Point of entry \">Point of entry </ion-select-option>\n        <ion-select-option value=\"Forced open another door\">Forced open another door</ion-select-option>\n        <ion-select-option value=\"Smashed a window\">Smashed a window</ion-select-option>\n        <ion-select-option value=\"Other\">Other</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"crime_malicious_form.controls.property_offender_leave.hasError('required') && crime_malicious_form.controls.property_offender_leave.touched\">\n      <p class=\"content\">Please Select Required Field!</p>\n    </ion-item>\n\n    <!-- Other -->\n    <div *ngIf=\"crime_malicious_form.get('property_offender_leave').value == 'Other'\">\n      <ion-item lines=\"none\" class=\"input-item add\">\n        <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"property_offender_leave_other\" class=\"input-box\">\n        </ion-input>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"crime_malicious_form.controls.property_offender_leave_other.hasError('required') && crime_malicious_form.controls.property_offender_leave_other.touched\">\n        <p class=\"content\">Please Enter Required Field!</p>\n      </ion-item>\n    </div>\n\n    <div class=\"div-que add-margin\">\n\n      <ion-label class=\"lbl-head\">Were goods stolen from anywhere other than inside the main building? </ion-label>\n\n      <ion-radio-group formControlName=\"good_stolen_outside\">\n        <ion-item lines=\"none\" class=\"items-radio\">\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"items-radio\">\n          <ion-label class=\"lbl-radio\">No</ion-label>\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n    </div>\n\n    <div class=\"div-Y\" *ngIf=\"this.crime_malicious_form.get('good_stolen_outside').value == 'true'\">\n\n      <ion-item lines=\"none\" class=\"item-dropdown add\">\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">Where from?</ion-label>\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"goods_stolen_from\"\n          class=\"btn-select bg\" mode=\"md\">\n          <ion-select-option value=\"Yard\">Yard</ion-select-option>\n          <ion-select-option value=\"Garden\">Garden</ion-select-option>\n          <ion-select-option value=\"Shed\">Shed</ion-select-option>\n          <ion-select-option value=\"Garage\">Garage</ion-select-option>\n          <ion-select-option value=\"Carpark\">Carpark</ion-select-option>\n          <ion-select-option value=\"Other\">Other</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"crime_malicious_form.controls.goods_stolen_from.hasError('required') && crime_malicious_form.controls.goods_stolen_from.touched\">\n        <p class=\"content\">Please Select Required Field!</p>\n      </ion-item>\n\n      <!-- Other -->\n      <div *ngIf=\"crime_malicious_form.get('goods_stolen_from').value == 'Other'\">\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\n          <ion-input type=\"text\" color=\"primary\" formControlName=\"goods_stolen_from_other\" class=\"input-box\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"crime_malicious_form.controls.goods_stolen_from_other.hasError('required') && crime_malicious_form.controls.goods_stolen_from_other.touched\">\n          <p class=\"content\">Please Enter Required Field!</p>\n        </ion-item>\n      </div>\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n<ion-footer class=\"btns-footer\">\n  <ion-row class=\"row-footer\">\n    <ion-col class=\"col-footer border-R\">\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col class=\"col-footer border-L\">\n      <ion-button expand=\"full\" class=\"btn-next\">\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>"

/***/ }),

/***/ "./src/app/property/property-step3/crime-malicious-damage/crime-malicious-damage.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/property/property-step3/crime-malicious-damage/crime-malicious-damage.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: CrimeMaliciousDamagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrimeMaliciousDamagePageModule", function() { return CrimeMaliciousDamagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _crime_malicious_damage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crime-malicious-damage.page */ "./src/app/property/property-step3/crime-malicious-damage/crime-malicious-damage.page.ts");







const routes = [
    {
        path: '',
        component: _crime_malicious_damage_page__WEBPACK_IMPORTED_MODULE_6__["CrimeMaliciousDamagePage"]
    }
];
let CrimeMaliciousDamagePageModule = class CrimeMaliciousDamagePageModule {
};
CrimeMaliciousDamagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_crime_malicious_damage_page__WEBPACK_IMPORTED_MODULE_6__["CrimeMaliciousDamagePage"]]
    })
], CrimeMaliciousDamagePageModule);



/***/ }),

/***/ "./src/app/property/property-step3/crime-malicious-damage/crime-malicious-damage.page.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/property/property-step3/crime-malicious-damage/crime-malicious-damage.page.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L3Byb3BlcnR5LXN0ZXAzL2NyaW1lLW1hbGljaW91cy1kYW1hZ2UvY3JpbWUtbWFsaWNpb3VzLWRhbWFnZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/property/property-step3/crime-malicious-damage/crime-malicious-damage.page.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/property/property-step3/crime-malicious-damage/crime-malicious-damage.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: CrimeMaliciousDamagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrimeMaliciousDamagePage", function() { return CrimeMaliciousDamagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let CrimeMaliciousDamagePage = class CrimeMaliciousDamagePage {
    constructor(navCtrl, router, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.crime_malicious_fb();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    crime_malicious_fb() {
        this.crime_malicious_form = this.formBuilder.group({
            property_have_alarm: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            monitored_security_company: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            alarm_armed_at_time_of_loss: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            building_video_surveillance: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            video_proof: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            property_how_enter: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            property_how_enter_other: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            myfile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            property_where_enter: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            property_where_enter_other: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            property_why_able_to_enter: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            property_why_able_to_enter_other: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            property_offender_leave: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            property_offender_leave_other: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            good_stolen_outside: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            goods_stolen_from: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            goods_stolen_from_other: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    crimeMaliciousNext() {
        for (let v in this.crime_malicious_form.controls) {
            this.crime_malicious_form.controls[v].markAsTouched();
        }
        if (this.crime_malicious_form.valid) {
            const body = {
                "property_have_alarm": this.crime_malicious_form.value.property_have_alarm,
                "monitored_security_company": this.crime_malicious_form.value.monitored_security_company,
                "alarm_armed_at_time_of_loss": this.crime_malicious_form.value.alarm_armed_at_time_of_loss,
                "building_video_surveillance": this.crime_malicious_form.value.building_video_surveillance,
                "video_proof": this.crime_malicious_form.value.video_proof,
                "property_how_enter": this.crime_malicious_form.value.property_how_enter,
                "property_how_enter_other": this.crime_malicious_form.value.property_how_enter_other,
                "myfile": this.crime_malicious_form.value.myfile,
                "property_where_enter": this.crime_malicious_form.value.property_where_enter,
                "property_where_enter_other": this.crime_malicious_form.value.property_where_enter_other,
                "property_why_able_to_enter": this.crime_malicious_form.value.property_why_able_to_enter,
                "property_why_able_to_enter_other": this.crime_malicious_form.value.property_why_able_to_enter_other,
                "property_offender_leave": this.crime_malicious_form.value.property_offender_leave,
                "property_offender_leave_other": this.crime_malicious_form.value.property_offender_leave_other,
                "good_stolen_outside": this.crime_malicious_form.value.good_stolen_outside,
                "goods_stolen_from": this.crime_malicious_form.value.goods_stolen_from,
                "goods_stolen_from_other": this.crime_malicious_form.value.goods_stolen_from_other,
            };
        }
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.pop();
    }
};
CrimeMaliciousDamagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
];
CrimeMaliciousDamagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crime-malicious-damage',
        template: __webpack_require__(/*! raw-loader!./crime-malicious-damage.page.html */ "./node_modules/raw-loader/index.js!./src/app/property/property-step3/crime-malicious-damage/crime-malicious-damage.page.html"),
        styles: [__webpack_require__(/*! ./crime-malicious-damage.page.scss */ "./src/app/property/property-step3/crime-malicious-damage/crime-malicious-damage.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
], CrimeMaliciousDamagePage);



/***/ })

}]);
//# sourceMappingURL=property-property-step3-crime-malicious-damage-crime-malicious-damage-module-es2015.js.map