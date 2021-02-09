(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle-vehicle-step2-vehicle-step2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle-step2/vehicle-step2.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicle/vehicle-step2/vehicle-step2.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Client / Policyholder</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"vehicle_form_step2\" autocomplete=\"off\">\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Make of vehicle</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"make\" class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"Demo1\">Demo1</ion-select-option>\r\n        <ion-select-option value=\"Demo2\">Demo2</ion-select-option>\r\n        <ion-select-option value=\"Demo3\">Demo3</ion-select-option>\r\n        <ion-select-option value=\"Demo4\">Demo4</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"vehicle_form_step2.controls.make.hasError('required') && vehicle_form_step2.controls.make.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Model</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"model\" class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"model1\">model1</ion-select-option>\r\n        <ion-select-option value=\"model2\">model2</ion-select-option>\r\n        <ion-select-option value=\"model3\">model3</ion-select-option>\r\n        <ion-select-option value=\"model4\">model4</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"vehicle_form_step2.controls.model.hasError('required') && vehicle_form_step2.controls.model.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Year</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"year\" class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"year1\">year1</ion-select-option>\r\n        <ion-select-option value=\"year2\">year2</ion-select-option>\r\n        <ion-select-option value=\"year3\">year3</ion-select-option>\r\n        <ion-select-option value=\"year4\">year4</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"vehicle_form_step2.controls.year.hasError('required') && vehicle_form_step2.controls.year.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Body type</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"type_of_body\" class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"type_of_body1\">type_of_body1</ion-select-option>\r\n        <ion-select-option value=\"type_of_body2\">type_of_body2</ion-select-option>\r\n        <ion-select-option value=\"type_of_body3\">type_of_body3</ion-select-option>\r\n        <ion-select-option value=\"type_of_body4\">type_of_body4</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"vehicle_form_step2.controls.type_of_body.hasError('required') && vehicle_form_step2.controls.type_of_body.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Registration Number</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"reg_number\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"vehicle_form_step2.controls.reg_number.hasError('required') && vehicle_form_step2.controls.reg_number.touched\">\r\n      <p class=\"content\">Please Enter Registration Number!</p>\r\n    </ion-item>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\"(click)=\"vehicleStep2Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/vehicle/vehicle-step2/vehicle-step2.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step2/vehicle-step2.module.ts ***!
  \***************************************************************/
/*! exports provided: VehicleStep2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleStep2PageModule", function() { return VehicleStep2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vehicle_step2_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vehicle-step2.page */ "./src/app/vehicle/vehicle-step2/vehicle-step2.page.ts");










const routes = [
    {
        path: '',
        component: _vehicle_step2_page__WEBPACK_IMPORTED_MODULE_9__["VehicleStep2Page"]
    }
];
let VehicleStep2PageModule = class VehicleStep2PageModule {
};
VehicleStep2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_vehicle_step2_page__WEBPACK_IMPORTED_MODULE_9__["VehicleStep2Page"]],
        providers: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__["CommonMockService"],
        ],
    })
], VehicleStep2PageModule);



/***/ }),

/***/ "./src/app/vehicle/vehicle-step2/vehicle-step2.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step2/vehicle-step2.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUvdmVoaWNsZS1zdGVwMi92ZWhpY2xlLXN0ZXAyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/vehicle/vehicle-step2/vehicle-step2.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step2/vehicle-step2.page.ts ***!
  \*************************************************************/
/*! exports provided: VehicleStep2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleStep2Page", function() { return VehicleStep2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");







let VehicleStep2Page = class VehicleStep2Page {
    constructor(navCtrl, router, _cS, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.vehicle_step2_fb();
        this.setClaimData();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    vehicle_step2_fb() {
        this.vehicle_form_step2 = this.formBuilder.group({
            make: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            model: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            year: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            type_of_body: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reg_number: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    vehicleStep2Next() {
        for (let v in this.vehicle_form_step2.controls) {
            this.vehicle_form_step2.controls[v].markAsTouched();
        }
        if (this.vehicle_form_step2.valid) {
            const step2 = {
                "step": 'step2',
                "ClaimNumber": localStorage.getItem('ClaimNumber'),
                "make": this.vehicle_form_step2.value.make,
                "model": this.vehicle_form_step2.value.model,
                "year": this.vehicle_form_step2.value.year,
                "type_of_body": this.vehicle_form_step2.value.type_of_body,
                "reg_number": this.vehicle_form_step2.value.reg_number,
            };
            this._cS.put_API(this._cS.URL_Vehicle_Claim_Post(), step2)
                .subscribe((data) => {
                if (data.status == 0) {
                    this.setClaimData();
                    this.router.navigate(['/vehicle-step3']);
                }
                else {
                }
            }, err => {
            });
        }
    }
    setClaimData() {
        var claimNumber = localStorage.getItem('ClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe((data) => {
                if (data.status == 0) {
                    console.log("editdate", data);
                    this.editClaimData = data.data;
                    this.vehicle_form_step2.setValue({
                        make: this.editClaimData.make_of_vehicle,
                        year: this.editClaimData.vehicle_year,
                        model: this.editClaimData.body_model,
                        type_of_body: this.editClaimData.type_of_body,
                        reg_number: this.editClaimData.reg_number,
                    });
                }
            });
        }
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.pop();
    }
};
VehicleStep2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
];
VehicleStep2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicle-step2',
        template: __webpack_require__(/*! raw-loader!./vehicle-step2.page.html */ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle-step2/vehicle-step2.page.html"),
        styles: [__webpack_require__(/*! ./vehicle-step2.page.scss */ "./src/app/vehicle/vehicle-step2/vehicle-step2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
], VehicleStep2Page);



/***/ })

}]);
//# sourceMappingURL=vehicle-vehicle-step2-vehicle-step2-module-es2015.js.map