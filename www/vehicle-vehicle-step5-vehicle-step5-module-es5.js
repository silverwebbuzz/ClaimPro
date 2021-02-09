(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle-vehicle-step5-vehicle-step5-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle-step5/vehicle-step5.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicle/vehicle-step5/vehicle-step5.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons>\n      <ion-button color=\"primary\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n    <ion-title color=\"primary\" class=\"head\">Briefly tell us what happened</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]=\"vehicle_form_step5\" autocomplete=\"off\">\n\n    <div *ngIf=\"damage_type !== 'Theft'\">\n\n    <div class=\"div-que\">\n      <ion-label class=\"lbl-head\">Was someone driving the vehicle?</ion-label>\n\n      <ion-radio-group formControlName=\"someOne_driving\">\n        <ion-item lines=\"none\" class=\"items-radio\">\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"items-radio\">\n          <ion-label class=\"lbl-radio\">No</ion-label>\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </div>\n\n    <div class=\"div-Y\" *ngIf=\"this.vehicle_form_step5.get('someOne_driving').value == 'true'\">\n\n      <ion-item lines=\"none\" class=\"input-item add\">\n        <ion-label position=\"stacked\" class=\"input-lbl\">Name of Driver</ion-label>\n        <ion-input type=\"text\" formControlName=\"name_of_driver\" color=\"primary\" class=\"input-box\"></ion-input>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"vehicle_form_step5.controls.name_of_driver.hasError('required') && vehicle_form_step5.controls.name_of_driver.touched\">\n        <p class=\"content\">Please Enter Name!</p>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"input-item add\">\n        <ion-label position=\"stacked\" class=\"input-lbl\">Street</ion-label>\n        <ion-input type=\"text\" formControlName=\"street\" color=\"primary\" class=\"input-box\"></ion-input>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"vehicle_form_step5.controls.street.hasError('required') && vehicle_form_step5.controls.street.touched\">\n        <p class=\"content\">Please Enter Street!</p>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"input-item add\">\n        <ion-label position=\"stacked\" class=\"input-lbl\">Suburb/Town</ion-label>\n        <ion-input type=\"text\" formControlName=\"town\" color=\"primary\" class=\"input-box\"></ion-input>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"vehicle_form_step5.controls.town.hasError('required') && vehicle_form_step5.controls.town.touched\">\n        <p class=\"content\">Please Enter Town!</p>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"input-item add\">\n        <ion-label position=\"stacked\" class=\"input-lbl\">PostCode</ion-label>\n        <ion-input type=\"number\" formControlName=\"postal_code\" color=\"primary\" class=\"input-box\"></ion-input>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"vehicle_form_step5.controls.postal_code.hasError('required') && vehicle_form_step5.controls.postal_code.touched\">\n        <p class=\"content\">Please Enter Postcode!</p>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"input-item add\">\n        <ion-label position=\"stacked\" class=\"input-lbl\">Date of Birth</ion-label>\n        <ion-datetime placeholder=\"Select Date\" class=\"input-box box\" formControlName=\"date_of_birth\"\n          displayFormat=\"DD MMM YYYY\" min=\"2016-01-01\" max=\"2039-12-31\"></ion-datetime>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"vehicle_form_step5.controls.date_of_birth.hasError('required') && vehicle_form_step5.controls.date_of_birth.touched\">\n        <p class=\"content\">Please Select Date!</p>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"input-item add\">\n        <ion-label position=\"stacked\" class=\"input-lbl\">License Number</ion-label>\n        <ion-textarea rows=\"3\" formControlName=\"license_no\" type=\"text\" color=\"primary\" class=\"input-box\">\n        </ion-textarea>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"vehicle_form_step5.controls.license_no.hasError('required') && vehicle_form_step5.controls.license_no.touched\">\n        <p class=\"content\">Please Enter Required Field!</p>\n      </ion-item>\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"vehicle_form_step5.controls.license_no.hasError('maxlength') && vehicle_form_step5.controls.license_no.touched\">\n        <p class=\"content\">Allow Only 25 Characters!</p>\n      </ion-item>\n\n      <div class=\"div-que add-margin\">\n        <ion-label class=\"lbl-head\">Did the driver consume alcohol or drugs 24 hours prior to the incident?</ion-label>\n\n        <ion-radio-group formControlName=\"drugs_24\">\n          <ion-item lines=\"none\" class=\"items-radio\">\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\n          </ion-item>\n          <ion-item lines=\"none\" class=\"items-radio\">\n            <ion-label class=\"lbl-radio\">No</ion-label>\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </div>\n\n      <div class=\"div-Y\" *ngIf=\"this.vehicle_form_step5.get('drugs_24').value == 'true'\">\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-label position=\"stacked\" class=\"input-lbl\">What was consumed?</ion-label>\n          <ion-input type=\"text\" formControlName=\"what_consume\" color=\"primary\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"vehicle_form_step5.controls.what_consume.hasError('required') && vehicle_form_step5.controls.what_consume.touched\">\n          <p class=\"content\">Please Enter Required Field!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"item-dropdown add\">\n          <ion-label position=\"stacked\" class=\"lbl-dropdown\">Blood test result</ion-label>\n          <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"blood_test_result\"\n            class=\"btn-select bg\" mode=\"md\">\n            <ion-select-option value=\"Positive\">Positive</ion-select-option>\n            <ion-select-option value=\"Negative\">Negative</ion-select-option>\n            <ion-select-option value=\"To be advised\">To be advised</ion-select-option>\n            <ion-select-option value=\"I don’t know\">I don’t know</ion-select-option>\n            <ion-select-option value=\"Not applicable\">Not applicable</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"vehicle_form_step5.controls.blood_test_result.hasError('required') && vehicle_form_step5.controls.blood_test_result.touched\">\n          <p class=\"content\">Please Select Required Field!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"item-dropdown add\">\n          <ion-label position=\"stacked\" class=\"lbl-dropdown\">Alcohol test result</ion-label>\n          <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"alcohol_test_result\"\n            class=\"btn-select bg\" mode=\"md\">\n            <ion-select-option value=\"Positive\">Positive</ion-select-option>\n            <ion-select-option value=\"Negative\">Negative</ion-select-option>\n            <ion-select-option value=\"To be advised\">To be advised</ion-select-option>\n            <ion-select-option value=\"I don’t know\">I don’t know</ion-select-option>\n            <ion-select-option value=\"Not applicable\">Not applicable</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"vehicle_form_step5.controls.alcohol_test_result.hasError('required') && vehicle_form_step5.controls.alcohol_test_result.touched\">\n          <p class=\"content\">Please Select Required Field!</p>\n        </ion-item>\n\n      </div>\n\n    </div>\n\n    </div>\n\n    <ion-label class=\"lbl-contact add-margin\">Briefly</ion-label>\n\n    <ion-item lines=\"none\" class=\"input-item add\">\n      <ion-label position=\"stacked\" class=\"input-lbl\">Briefly tell Us what happened</ion-label>\n      <ion-textarea rows=\"3\" formControlName=\"briefly_tell_Us\" type=\"text\" color=\"primary\" class=\"input-box\">\n      </ion-textarea>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"vehicle_form_step5.controls.briefly_tell_Us.hasError('required') && vehicle_form_step5.controls.briefly_tell_Us.touched\">\n      <p class=\"content\">Please Enter Required Field!</p>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"vehicle_form_step5.controls.briefly_tell_Us.hasError('maxlength') && vehicle_form_step5.controls.briefly_tell_Us.touched\">\n      <p class=\"content\">Allow Only 400 Characters!</p>\n    </ion-item>\n\n  </form>\n\n</ion-content>\n\n<ion-footer class=\"btns-footer\">\n  <ion-row class=\"row-footer\">\n    <ion-col class=\"col-footer border-R\">\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col class=\"col-footer border-L\">\n      <ion-button expand=\"full\" class=\"btn-next\" routerLink=\"/vehicle-step6\">\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon></ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>"

/***/ }),

/***/ "./src/app/vehicle/vehicle-step5/vehicle-step5.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step5/vehicle-step5.module.ts ***!
  \***************************************************************/
/*! exports provided: VehicleStep5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleStep5PageModule", function() { return VehicleStep5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vehicle_step5_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vehicle-step5.page */ "./src/app/vehicle/vehicle-step5/vehicle-step5.page.ts");










var routes = [
    {
        path: '',
        component: _vehicle_step5_page__WEBPACK_IMPORTED_MODULE_9__["VehicleStep5Page"]
    }
];
var VehicleStep5PageModule = /** @class */ (function () {
    function VehicleStep5PageModule() {
    }
    VehicleStep5PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vehicle_step5_page__WEBPACK_IMPORTED_MODULE_9__["VehicleStep5Page"]],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__["CommonMockService"],
            ],
        })
    ], VehicleStep5PageModule);
    return VehicleStep5PageModule;
}());



/***/ }),

/***/ "./src/app/vehicle/vehicle-step5/vehicle-step5.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step5/vehicle-step5.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUvdmVoaWNsZS1zdGVwNS92ZWhpY2xlLXN0ZXA1LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/vehicle/vehicle-step5/vehicle-step5.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step5/vehicle-step5.page.ts ***!
  \*************************************************************/
/*! exports provided: VehicleStep5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleStep5Page", function() { return VehicleStep5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");






var VehicleStep5Page = /** @class */ (function () {
    function VehicleStep5Page(navCtrl, router, route, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.damage_type = '';
        this.damage_type = localStorage.getItem('damage_type');
        this.vehicle_step5_fb();
    }
    VehicleStep5Page.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    VehicleStep5Page.prototype.vehicle_step5_fb = function () {
        this.vehicle_form_step5 = this.formBuilder.group({
            someOne_driving: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name_of_driver: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            street: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            town: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            postal_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date_of_birth: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            license_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            drugs_24: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            what_consume: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            blood_test_result: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            alcohol_test_result: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            briefly_tell_Us: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(400), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    };
    VehicleStep5Page.prototype.vehicleStep5Next = function () {
        for (var v in this.vehicle_form_step5.controls) {
            this.vehicle_form_step5.controls[v].markAsTouched();
        }
        if (this.vehicle_form_step5.valid) {
            var body = {
                "someOne_driving": this.vehicle_form_step5.value.someOne_driving,
                "name_of_driver": this.vehicle_form_step5.value.name_of_driver,
                "street": this.vehicle_form_step5.value.street,
                "town": this.vehicle_form_step5.value.town,
                "postal_code": this.vehicle_form_step5.value.postal_code,
                "date_of_birth": this.vehicle_form_step5.value.date_of_birth,
                "license_no": this.vehicle_form_step5.value.license_no,
                "drugs_24": this.vehicle_form_step5.value.drugs_24,
                "what_consume": this.vehicle_form_step5.value.what_consume,
                "blood_test_result": this.vehicle_form_step5.value.blood_test_result,
                "alcohol_test_result": this.vehicle_form_step5.value.alcohol_test_result,
                "briefly_tell_Us": this.vehicle_form_step5.value.briefly_tell_Us
            };
        }
    };
    VehicleStep5Page.prototype.ngOnInit = function () {
    };
    VehicleStep5Page.prototype.back = function () {
        this.navCtrl.pop();
    };
    VehicleStep5Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] }
    ]; };
    VehicleStep5Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle-step5',
            template: __webpack_require__(/*! raw-loader!./vehicle-step5.page.html */ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle-step5/vehicle-step5.page.html"),
            styles: [__webpack_require__(/*! ./vehicle-step5.page.scss */ "./src/app/vehicle/vehicle-step5/vehicle-step5.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
    ], VehicleStep5Page);
    return VehicleStep5Page;
}());



/***/ })

}]);
//# sourceMappingURL=vehicle-vehicle-step5-vehicle-step5-module-es5.js.map