(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["property-property-step3-fire-explosion-fire-explosion-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/property/property-step3/fire-explosion/fire-explosion.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/property/property-step3/fire-explosion/fire-explosion.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons>\n        <ion-button color=\"primary\" (click)=\"back()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons> -->\n    <ion-title color=\"primary\" class=\"head\">Fire/Explosion</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]=\"fire_explosion_form\" autocomplete=\"off\">\n\n    <ion-label class=\"lbl-contact\">Fire/Explosion Details</ion-label>\n\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Where did the fire or explosion start?</ion-label>\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"fire_explosion_start\"\n        class=\"btn-select bg\" mode=\"md\">\n        <ion-select-option value=\"Inside the building\">Inside the building</ion-select-option>\n        <ion-select-option value=\"Outside the building\">Outside the building</ion-select-option>\n        <ion-select-option value=\"Other\">Other</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"fire_explosion_form.controls.fire_explosion_start.hasError('required') && fire_explosion_form.controls.fire_explosion_start.touched\">\n      <p class=\"content\">Please Select Required Field!</p>\n    </ion-item>\n\n    <div *ngIf=\"fire_explosion_form.get('fire_explosion_start').value == 'Inside the building'\">\n\n      <ion-item lines=\"none\" class=\"item-dropdown add\">\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">Where inside the building?</ion-label>\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"where_inside_building\"\n          class=\"btn-select bg\" mode=\"md\">\n          <ion-select-option value=\"Room\">Room</ion-select-option>\n          <ion-select-option value=\"Storeroom\">Storeroom</ion-select-option>\n          <ion-select-option value=\"Other\">Other</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"fire_explosion_form.controls.where_inside_building.hasError('required') && fire_explosion_form.controls.where_inside_building.touched\">\n        <p class=\"content\">Please Select Required Field!</p>\n      </ion-item>\n\n      <!-- Other -->\n      <div *ngIf=\"fire_explosion_form.get('where_inside_building').value == 'Other'\">\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\n          <ion-input type=\"text\" color=\"primary\" formControlName=\"where_inside_building_other\" class=\"input-box\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"fire_explosion_form.controls.where_inside_building_other.hasError('required') && fire_explosion_form.controls.where_inside_building_other.touched\">\n          <p class=\"content\">Please Enter Required Field!</p>\n        </ion-item>\n      </div>\n\n    </div>\n\n    <div *ngIf=\"fire_explosion_form.get('fire_explosion_start').value == 'Outside the building'\">\n\n      <ion-item lines=\"none\" class=\"item-dropdown add\">\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">Where outside the building?</ion-label>\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"where_outside_building\"\n          class=\"btn-select bg\" mode=\"md\">\n          <ion-select-option value=\"Shed\">Shed</ion-select-option>\n          <ion-select-option value=\"Garage\">Garage</ion-select-option>\n          <ion-select-option value=\"Storeroom\">Storeroom</ion-select-option>\n          <ion-select-option value=\"Other\">Other</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"fire_explosion_form.controls.where_outside_building.hasError('required') && fire_explosion_form.controls.where_outside_building.touched\">\n        <p class=\"content\">Please Select Required Field!</p>\n      </ion-item>\n\n      <!-- Other -->\n      <div *ngIf=\"fire_explosion_form.get('where_outside_building').value == 'Other'\">\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\n          <ion-input type=\"text\" color=\"primary\" formControlName=\"where_outside_building_other\" class=\"input-box\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"fire_explosion_form.controls.where_outside_building_other.hasError('required') && fire_explosion_form.controls.where_outside_building_other.touched\">\n          <p class=\"content\">Please Enter Required Field!</p>\n        </ion-item>\n      </div>\n\n    </div>\n\n    <!-- Other -->\n    <div *ngIf=\"fire_explosion_form.get('fire_explosion_start').value == 'Other'\">\n      <ion-item lines=\"none\" class=\"input-item add\">\n        <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"fire_explosion_start_other\" class=\"input-box\">\n        </ion-input>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"fire_explosion_form.controls.fire_explosion_start_other.hasError('required') && fire_explosion_form.controls.fire_explosion_start_other.touched\">\n        <p class=\"content\">Please Enter Required Field!</p>\n      </ion-item>\n    </div>\n\n    <div class=\"div-que add-margin\">\n\n      <ion-label class=\"lbl-head\">Did the Fire Brigade attend?</ion-label>\n\n      <ion-radio-group formControlName=\"fire_brigade_attend\">\n        <ion-item lines=\"none\" class=\"items-radio\">\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"items-radio\">\n          <ion-label class=\"lbl-radio\">No</ion-label>\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n    </div>\n\n    <div class=\"div-que add-margin\">\n\n      <ion-label class=\"lbl-head\">Did the smoke detectors function?</ion-label>\n\n      <ion-radio-group formControlName=\"smoke_detectors_function\">\n        <ion-item lines=\"none\" class=\"items-radio\">\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"items-radio\">\n          <ion-label class=\"lbl-radio\">No</ion-label>\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n    </div>\n\n    <div class=\"div-N\" *ngIf=\"this.fire_explosion_form.get('smoke_detectors_function').value == 'false'\">\n\n      <ion-item lines=\"none\" class=\"input-item add\">\n        <ion-label position=\"stacked\" class=\"input-lbl\">Why not?</ion-label>\n        <ion-textarea rows=\"3\" formControlName=\"why_not\" type=\"text\" color=\"primary\" class=\"input-box\">\n        </ion-textarea>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"fire_explosion_form.controls.why_not.hasError('required') && fire_explosion_form.controls.why_not.touched\">\n        <p class=\"content\">Please Enter Required Field!</p>\n      </ion-item>\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"fire_explosion_form.controls.why_not.hasError('maxlength') && fire_explosion_form.controls.why_not.touched\">\n        <p class=\"content\">Allow Only 140 Characters!</p>\n      </ion-item>\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n<ion-footer class=\"btns-footer\">\n  <ion-row class=\"row-footer\">\n    <ion-col class=\"col-footer border-R\">\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col class=\"col-footer border-L\">\n      <ion-button expand=\"full\" class=\"btn-next\">\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>"

/***/ }),

/***/ "./src/app/property/property-step3/fire-explosion/fire-explosion.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/property/property-step3/fire-explosion/fire-explosion.module.ts ***!
  \*********************************************************************************/
/*! exports provided: FireExplosionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireExplosionPageModule", function() { return FireExplosionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fire_explosion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fire-explosion.page */ "./src/app/property/property-step3/fire-explosion/fire-explosion.page.ts");







const routes = [
    {
        path: '',
        component: _fire_explosion_page__WEBPACK_IMPORTED_MODULE_6__["FireExplosionPage"]
    }
];
let FireExplosionPageModule = class FireExplosionPageModule {
};
FireExplosionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_fire_explosion_page__WEBPACK_IMPORTED_MODULE_6__["FireExplosionPage"]]
    })
], FireExplosionPageModule);



/***/ }),

/***/ "./src/app/property/property-step3/fire-explosion/fire-explosion.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/property/property-step3/fire-explosion/fire-explosion.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L3Byb3BlcnR5LXN0ZXAzL2ZpcmUtZXhwbG9zaW9uL2ZpcmUtZXhwbG9zaW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/property/property-step3/fire-explosion/fire-explosion.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/property/property-step3/fire-explosion/fire-explosion.page.ts ***!
  \*******************************************************************************/
/*! exports provided: FireExplosionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireExplosionPage", function() { return FireExplosionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let FireExplosionPage = class FireExplosionPage {
    constructor(navCtrl, router, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.fire_explosion_fb();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    fire_explosion_fb() {
        this.fire_explosion_form = this.formBuilder.group({
            fire_explosion_start: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            where_inside_building: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            where_inside_building_other: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            where_outside_building: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            where_outside_building_other: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fire_explosion_start_other: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fire_brigade_attend: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            smoke_detectors_function: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            why_not: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(140), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
        });
    }
    fireExplosionNext() {
        for (let v in this.fire_explosion_form.controls) {
            this.fire_explosion_form.controls[v].markAsTouched();
        }
        if (this.fire_explosion_form.valid) {
            const body = {
                "fire_explosion_start": this.fire_explosion_form.value.fire_explosion_start,
                "where_inside_building": this.fire_explosion_form.value.where_inside_building,
                "where_inside_building_other": this.fire_explosion_form.value.where_inside_building_other,
                "where_outside_building": this.fire_explosion_form.value.where_outside_building,
                "where_outside_building_other": this.fire_explosion_form.value.where_outside_building_other,
                "fire_explosion_start_other": this.fire_explosion_form.value.fire_explosion_start_other,
                "fire_brigade_attend": this.fire_explosion_form.value.fire_brigade_attend,
                "smoke_detectors_function": this.fire_explosion_form.value.smoke_detectors_function,
                "why_not": this.fire_explosion_form.value.why_not,
            };
        }
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.pop();
    }
};
FireExplosionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
];
FireExplosionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fire-explosion',
        template: __webpack_require__(/*! raw-loader!./fire-explosion.page.html */ "./node_modules/raw-loader/index.js!./src/app/property/property-step3/fire-explosion/fire-explosion.page.html"),
        styles: [__webpack_require__(/*! ./fire-explosion.page.scss */ "./src/app/property/property-step3/fire-explosion/fire-explosion.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
], FireExplosionPage);



/***/ })

}]);
//# sourceMappingURL=property-property-step3-fire-explosion-fire-explosion-module-es2015.js.map