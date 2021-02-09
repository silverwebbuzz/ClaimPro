(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["property-property-step7-property-step7-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/property/property-step7/property-step7.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/property/property-step7/property-step7.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Briefly tell us</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"property_form_step7\" autocomplete=\"off\">\r\n\r\n    <!-- <ion-label class=\"lbl-contact\">Briefly tell us what happened</ion-label> -->\r\n\r\n    <ion-item lines=\"none\" class=\"input-item\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Briefly tell us what happened</ion-label>\r\n      <ion-textarea rows=\"3\" formControlName=\"reported_circumstances\" type=\"text\" color=\"primary\" class=\"input-box\">\r\n      </ion-textarea>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"property_form_step7.controls.reported_circumstances.hasError('required') && property_form_step7.controls.reported_circumstances.touched\">\r\n      <p class=\"content\">Please Enter Required Field!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"property_form_step7.controls.reported_circumstances.hasError('maxlength') && property_form_step7.controls.reported_circumstances.touched\">\r\n      <p class=\"content\">Allow Only 400 Characters!</p>\r\n    </ion-item>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\" (click)=\"propertyStep7Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/property/property-step7/property-step7.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/property/property-step7/property-step7.module.ts ***!
  \******************************************************************/
/*! exports provided: PropertyStep7PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyStep7PageModule", function() { return PropertyStep7PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _property_step7_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./property-step7.page */ "./src/app/property/property-step7/property-step7.page.ts");










const routes = [
    {
        path: '',
        component: _property_step7_page__WEBPACK_IMPORTED_MODULE_9__["PropertyStep7Page"]
    }
];
let PropertyStep7PageModule = class PropertyStep7PageModule {
};
PropertyStep7PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_property_step7_page__WEBPACK_IMPORTED_MODULE_9__["PropertyStep7Page"]],
        providers: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__["CommonMockService"],
        ],
    })
], PropertyStep7PageModule);



/***/ }),

/***/ "./src/app/property/property-step7/property-step7.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/property/property-step7/property-step7.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L3Byb3BlcnR5LXN0ZXA3L3Byb3BlcnR5LXN0ZXA3LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/property/property-step7/property-step7.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/property/property-step7/property-step7.page.ts ***!
  \****************************************************************/
/*! exports provided: PropertyStep7Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyStep7Page", function() { return PropertyStep7Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");







let PropertyStep7Page = class PropertyStep7Page {
    constructor(navCtrl, router, _cS, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.property_step7_fb();
        this.setClaimData();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    property_step7_fb() {
        this.property_form_step7 = this.formBuilder.group({
            reported_circumstances: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(400), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    }
    propertyStep7Next() {
        for (let v in this.property_form_step7.controls) {
            this.property_form_step7.controls[v].markAsTouched();
        }
        if (this.property_form_step7.valid) {
            const step7 = {
                "step": 'step7',
                "ClaimNumber": localStorage.getItem('PropertyClaimNumber'),
                "reported_circumstances": this.property_form_step7.value.reported_circumstances
            };
            this._cS.put_API(this._cS.URL_Property_Claim_Post(), step7)
                .subscribe((data) => {
                if (data.status == 0) {
                    this.setClaimData();
                    this.router.navigate(['/property-step8']);
                }
                else {
                }
            }, err => {
            });
        }
    }
    setClaimData() {
        var claimNumber = localStorage.getItem('PropertyClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe((data) => {
                if (data.status == 0) {
                    console.log("editdate", data);
                    this.editClaimData = data.data;
                    this.property_form_step7.setValue({
                        reported_circumstances: this.editClaimData.reported_circumstances,
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
PropertyStep7Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
];
PropertyStep7Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property-step7',
        template: __webpack_require__(/*! raw-loader!./property-step7.page.html */ "./node_modules/raw-loader/index.js!./src/app/property/property-step7/property-step7.page.html"),
        styles: [__webpack_require__(/*! ./property-step7.page.scss */ "./src/app/property/property-step7/property-step7.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
], PropertyStep7Page);



/***/ })

}]);
//# sourceMappingURL=property-property-step7-property-step7-module-es2015.js.map