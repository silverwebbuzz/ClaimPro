(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle-vehicle-step1-vehicle-step1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle-step1/vehicle-step1.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicle/vehicle-step1/vehicle-step1.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Client / Policyholder</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"vehicle_form_step1\" autocomplete=\"off\">\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">How would you like to be contacted?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"preferred_communication\" class=\"btn-select bg\" mode=\"md\">\r\n          <ion-select-option *ngFor=\"let opt of preferred_communication | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n        <!-- <ion-select-option value=\"Telephone\">Telephone</ion-select-option>\r\n        <ion-select-option value=\"Email\">Email</ion-select-option>\r\n        <ion-select-option value=\"SMS\">SMS</ion-select-option>\r\n        <ion-select-option value=\"Letter\">Letter</ion-select-option> -->\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"vehicle_form_step1.controls.preferred_communication.hasError('required') && vehicle_form_step1.controls.preferred_communication.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Are you making a personal claim or business claim?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"type_entitiy\" class=\"btn-select bg\" mode=\"md\">\r\n          <ng-container *ngFor=\"let opt of client_type | keyvalue\">\r\n          <ion-select-option *ngIf=\"opt.key == '1001' || opt.key == '1002'\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n        <!-- <ion-select-option value=\"Personal\">Personal</ion-select-option>\r\n        <ion-select-option value=\"Commercial\">Commercial</ion-select-option>\r\n        <ion-select-option value=\"Government\">Government</ion-select-option>\r\n        <ion-select-option value=\"Association\">Association</ion-select-option> -->\r\n        </ng-container>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"vehicle_form_step1.controls.type_entitiy.hasError('required') && vehicle_form_step1.controls.type_entitiy.touched\">\r\n        <p class=\"content\">Please Select Required Field!</p>\r\n      </ion-item>\r\n\r\n        <div *ngIf=\"vehicle_form_step1.get('type_entitiy').value == '1002' ||  vehicle_form_step1.get('type_entitiy').value == '1004' ||  vehicle_form_step1.get('type_entitiy').value == '1003'\">\r\n\r\n            <ion-item lines=\"none\" class=\"input-item add\">\r\n                <ion-label position=\"stacked\" class=\"input-lbl\">Business name</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"client_company\" color=\"primary\" class=\"input-box\"></ion-input>\r\n              </ion-item>\r\n      \r\n              <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n              *ngIf=\"vehicle_form_step1.controls.client_company.hasError('required') && vehicle_form_step1.controls.client_company.touched\">\r\n              <p class=\"content\">Please Enter Required Field!</p>\r\n            </ion-item>\r\n      \r\n            <ion-item lines=\"none\" class=\"input-item add\">\r\n                <ion-label position=\"stacked\" class=\"input-lbl\">Trading name</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"trading_name\" color=\"primary\" class=\"input-box\"></ion-input>\r\n              </ion-item>\r\n      \r\n              <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n              *ngIf=\"vehicle_form_step1.controls.trading_name.hasError('required') && vehicle_form_step1.controls.trading_name.touched\">\r\n              <p class=\"content\">Please Enter Required Field!</p>\r\n            </ion-item>\r\n      \r\n            <ion-item lines=\"none\" class=\"input-item add\">\r\n                <ion-label position=\"stacked\" class=\"input-lbl\">ABN</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"abn_client\" color=\"primary\" class=\"input-box\"></ion-input>\r\n              </ion-item>\r\n      \r\n              <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n              *ngIf=\"vehicle_form_step1.controls.abn_client.hasError('required') && vehicle_form_step1.controls.abn_client.touched\">\r\n              <p class=\"content\">Please Enter Required Field!</p>\r\n            </ion-item>\r\n      \r\n            <ion-item lines=\"none\" class=\"input-item add\">\r\n                <ion-label position=\"stacked\" class=\"input-lbl\">ITC%</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"itc_client\" color=\"primary\" class=\"input-box\"></ion-input>\r\n              </ion-item>\r\n      \r\n              <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n              *ngIf=\"vehicle_form_step1.controls.itc_client.hasError('required') && vehicle_form_step1.controls.itc_client.touched\">\r\n              <p class=\"content\">Please Enter Required Field!</p>\r\n            </ion-item>\r\n\r\n    </div>\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\" (click)=\"vehicleStep1Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/vehicle/vehicle-step1/vehicle-step1.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step1/vehicle-step1.module.ts ***!
  \***************************************************************/
/*! exports provided: VehicleStep1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleStep1PageModule", function() { return VehicleStep1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vehicle_step1_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vehicle-step1.page */ "./src/app/vehicle/vehicle-step1/vehicle-step1.page.ts");










const routes = [
    {
        path: '',
        component: _vehicle_step1_page__WEBPACK_IMPORTED_MODULE_9__["VehicleStep1Page"]
    }
];
let VehicleStep1PageModule = class VehicleStep1PageModule {
};
VehicleStep1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_vehicle_step1_page__WEBPACK_IMPORTED_MODULE_9__["VehicleStep1Page"]], providers: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__["CommonMockService"],
        ],
    })
], VehicleStep1PageModule);



/***/ }),

/***/ "./src/app/vehicle/vehicle-step1/vehicle-step1.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step1/vehicle-step1.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUvdmVoaWNsZS1zdGVwMS92ZWhpY2xlLXN0ZXAxLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/vehicle/vehicle-step1/vehicle-step1.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step1/vehicle-step1.page.ts ***!
  \*************************************************************/
/*! exports provided: VehicleStep1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleStep1Page", function() { return VehicleStep1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");







let VehicleStep1Page = class VehicleStep1Page {
    /* dropdown option Variable End */
    constructor(navCtrl, router, _cS, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.vehicle_step1_fb();
        this.formControlValueChanged();
        this.setClaimData();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    vehicle_step1_fb() {
        this.vehicle_form_step1 = this.formBuilder.group({
            preferred_communication: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            type_entitiy: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            client_company: [null],
            trading_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            abn_client: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            itc_client: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    formControlValueChanged() {
        this.vehicle_form_step1.get('type_entitiy')
            .valueChanges.subscribe((val) => {
            const client_company = this.vehicle_form_step1.get('client_company');
            if (val == "1001") {
                client_company.patchValue(null);
                client_company.clearValidators();
                client_company.updateValueAndValidity();
            }
            else {
                client_company.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
        });
    }
    vehicleStep1Next() {
        for (let v in this.vehicle_form_step1.controls) {
            this.vehicle_form_step1.controls[v].markAsTouched();
        }
        if (this.vehicle_form_step1.valid) {
            const step1 = {
                "step": 'step1',
                "ClaimNumber": localStorage.getItem('ClaimNumber'),
                "contacted": this.vehicle_form_step1.value.preferred_communication,
                "client_type": this.vehicle_form_step1.value.type_entitiy,
                "business_name": this.vehicle_form_step1.value.client_company,
                "trading_name": this.vehicle_form_step1.value.trading_name,
                "abn_client": this.vehicle_form_step1.value.abn_client,
                "itc_client": this.vehicle_form_step1.value.itc_client,
            };
            this._cS.put_API(this._cS.URL_Vehicle_Claim_Post(), step1)
                .subscribe((data) => {
                if (data.status == 0) {
                    this.setClaimData();
                    this.router.navigate(['/vehicle-step2']);
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
                    this.vehicle_form_step1.setValue({
                        preferred_communication: preferred_communication_set,
                        type_entitiy: type_entitiy_set,
                        client_company: this.editClaimData.client_company,
                    });
                }
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
};
VehicleStep1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
];
VehicleStep1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicle-step1',
        template: __webpack_require__(/*! raw-loader!./vehicle-step1.page.html */ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle-step1/vehicle-step1.page.html"),
        styles: [__webpack_require__(/*! ./vehicle-step1.page.scss */ "./src/app/vehicle/vehicle-step1/vehicle-step1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
], VehicleStep1Page);



/***/ })

}]);
//# sourceMappingURL=vehicle-vehicle-step1-vehicle-step1-module-es2015.js.map