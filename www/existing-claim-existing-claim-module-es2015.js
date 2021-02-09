(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["existing-claim-existing-claim-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/existing-claim/existing-claim.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/existing-claim/existing-claim.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"primary\" class=\"head\">Existing Claim</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"page-card\">\r\n\r\n  <div class=\"div-no\" *ngIf=\"allexistingClaim.length == 0\">\r\n    <ion-label class=\"label-no\">Record Not Available</ion-label>\r\n  </div>\r\n\r\n  <ion-card class=\"card-main\" *ngFor=\"let opt of allexistingClaim;\">\r\n\r\n    <ion-row class=\"row-card\">\r\n      <ion-col size=\"6\" class=\"col-head\">Type :</ion-col>\r\n      <ion-col size=\"6\" class=\"col-value\">{{ opt.policy_type }}</ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-card\">\r\n      <ion-col size=\"6\" class=\"col-head\">Reference Number :</ion-col>\r\n      <ion-col size=\"6\" class=\"col-value\">{{ opt.id }}</ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-card\">\r\n      <ion-col size=\"6\" class=\"col-head\">Policy Number :</ion-col>\r\n      <ion-col size=\"6\" class=\"col-value\">{{ opt.policy_number }}</ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-card\">\r\n      <ion-col size=\"6\" class=\"col-head\">Name :</ion-col>\r\n      <ion-col size=\"6\" class=\"col-value\">{{ (opt.tp_christian_policyholder +' '+ opt.tp_name_policyholder) }}</ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-card\">\r\n      <ion-col size=\"6\" class=\"col-head\">Date Submitted :</ion-col>\r\n      <ion-col size=\"6\" class=\"col-value\">{{ opt.created_date | date:'dd/MMM/yyyy' }}</ion-col>\r\n    </ion-row>\r\n    <ion-button fill=\"clear\" expand=\"full\" class=\"btn-bottom-edit\"\r\n      (click)=\"gotoExistingClaim(opt.id,opt.policy_type,opt.step_status)\">\r\n      Edit\r\n    </ion-button>\r\n\r\n  </ion-card>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/existing-claim/existing-claim.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/existing-claim/existing-claim.module.ts ***!
  \*********************************************************/
/*! exports provided: ExistingClaimPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingClaimPageModule", function() { return ExistingClaimPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _existing_claim_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./existing-claim.page */ "./src/app/existing-claim/existing-claim.page.ts");










const routes = [
    {
        path: '',
        component: _existing_claim_page__WEBPACK_IMPORTED_MODULE_9__["ExistingClaimPage"]
    }
];
let ExistingClaimPageModule = class ExistingClaimPageModule {
};
ExistingClaimPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_existing_claim_page__WEBPACK_IMPORTED_MODULE_9__["ExistingClaimPage"]],
        providers: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__["CommonMockService"],
        ],
    })
], ExistingClaimPageModule);



/***/ }),

/***/ "./src/app/existing-claim/existing-claim.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/existing-claim/existing-claim.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4aXN0aW5nLWNsYWltL2V4aXN0aW5nLWNsYWltLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/existing-claim/existing-claim.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/existing-claim/existing-claim.page.ts ***!
  \*******************************************************/
/*! exports provided: ExistingClaimPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingClaimPage", function() { return ExistingClaimPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _common_mock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");






let ExistingClaimPage = class ExistingClaimPage {
    constructor(navCtrl, _cS, router, statusBar) {
        this.navCtrl = navCtrl;
        this._cS = _cS;
        this.router = router;
        this.statusBar = statusBar;
        this.allexistingClaim = [];
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    ngOnInit() {
        this._cS.get_API_withToken(this._cS.URL_existing_claim_get())
            .subscribe((data) => {
            // this.spinner.hide();
            if (data.status == 0) {
                this.allexistingClaim = data.data;
            }
            // this.spinner.hide();
        }, err => {
            // this.spinner.hide();
        });
    }
    back() {
        this.navCtrl.pop();
    }
    gotoExistingClaim(claimId, policy_type, step_status) {
        if (policy_type == 'motor-vehicle') {
            localStorage.setItem('ClaimNumber', claimId);
        }
        if (policy_type == 'medical') {
            localStorage.setItem('MedicalClaimNumber', claimId);
        }
        if (policy_type == 'other') {
            localStorage.setItem('OtherClaimNumber', claimId);
        }
        if (policy_type == 'general') {
            localStorage.setItem('GeneralClaimNumber', claimId);
        }
        if (policy_type == 'professional') {
            localStorage.setItem('ProfessionalClaimNumber', claimId);
        }
        if (policy_type == 'property') {
            localStorage.setItem('PropertyClaimNumber', claimId);
        }
        console.log("step_status", step_status);
        // if (step_status == 2) {
        //   this.router.navigate(['/step2']);
        // }
        if (policy_type == "other") {
            switch (step_status) {
                case "0":
                    this.router.navigate(['/other']);
                    break;
                case "1":
                    this.router.navigate(['/step1']);
                    break;
                case "2":
                    this.router.navigate(['/step2']);
                    break;
                case "3":
                    this.router.navigate(['/step3']);
                    break;
            }
        }
        if (policy_type == "general") {
            switch (step_status) {
                case "0":
                    this.router.navigate(['/general-liability']);
                    break;
                case "1":
                    this.router.navigate(['/general-step1']);
                    break;
                case "2":
                    this.router.navigate(['/general-step2']);
                    break;
                case "3":
                    this.router.navigate(['/general-step3']);
                    break;
                case "4":
                    this.router.navigate(['/general-step4']);
                    break;
                case "5":
                    this.router.navigate(['/general-step5']);
                    break;
            }
        }
        if (policy_type == "professional") {
            switch (step_status) {
                case "0":
                    this.router.navigate(['/professional-indemnity']);
                    break;
                case "1":
                    this.router.navigate(['/professional-step1']);
                    break;
                case "2":
                    this.router.navigate(['/professional-step2']);
                    break;
                case "3":
                    this.router.navigate(['/professional-step3']);
                    break;
                case "4":
                    this.router.navigate(['/professional-step4']);
                    break;
                case "5":
                    this.router.navigate(['/professional-step5']);
                    break;
                case "6":
                    this.router.navigate(['/professional-step6']);
                    break;
                case "7":
                    this.router.navigate(['/professional-step7']);
                    break;
            }
        }
        if (policy_type == "medical") {
            switch (step_status) {
                case "0":
                    this.router.navigate(['/medical-malpractice']);
                    break;
                case "1":
                    this.router.navigate(['/medical-step1']);
                    break;
                case "2":
                    this.router.navigate(['/medical-step2']);
                    break;
                case "3":
                    this.router.navigate(['/medical-step3']);
                    break;
                case "4":
                    this.router.navigate(['/medical-step4']);
                    break;
                case "5":
                    this.router.navigate(['/medical-step5']);
                    break;
                case "6":
                    this.router.navigate(['/medical-step6']);
                    break;
                case "7":
                    this.router.navigate(['/medical-step7']);
                    break;
            }
        }
        if (policy_type == "motor-vehicle") {
            console.log("stepppppp", policy_type);
            switch (step_status) {
                case "0":
                    this.router.navigate(['/vehicle']);
                    break;
                case "1":
                    this.router.navigate(['/vehicle-step1']);
                    break;
                case "2":
                    this.router.navigate(['/vehicle-step2']);
                    break;
                case "3":
                    this.router.navigate(['/vehicle-step3']);
                    break;
                case "4":
                    this.router.navigate(['/vehicle-step3']);
                    break;
                case "5":
                    this.router.navigate(['/vehicle-step5']);
                    break;
                case "6":
                    this.router.navigate(['/vehicle-step6']);
                    break;
                case "7":
                    this.router.navigate(['/vehicle-step7']);
                    break;
            }
        }
        if (policy_type == "property") {
            switch (step_status) {
                case "0":
                    this.router.navigate(['/property']);
                    break;
                case "1":
                    this.router.navigate(['/property-step1']);
                    break;
                case "2":
                    this.router.navigate(['/property-step2']);
                    break;
                case "3":
                    this.router.navigate(['/property-step3']);
                    break;
                case "4":
                    this.router.navigate(['/property-step3']);
                    break;
                case "5":
                    this.router.navigate(['/property-step5']);
                    break;
                case "6":
                    this.router.navigate(['/property-step6']);
                    break;
                case "7":
                    this.router.navigate(['/property-step7']);
                    break;
                case "8":
                    this.router.navigate(['/property-step8']);
                    break;
            }
        }
    }
};
ExistingClaimPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _common_mock_service__WEBPACK_IMPORTED_MODULE_3__["CommonMockService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] }
];
ExistingClaimPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-existing-claim',
        template: __webpack_require__(/*! raw-loader!./existing-claim.page.html */ "./node_modules/raw-loader/index.js!./src/app/existing-claim/existing-claim.page.html"),
        styles: [__webpack_require__(/*! ./existing-claim.page.scss */ "./src/app/existing-claim/existing-claim.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _common_mock_service__WEBPACK_IMPORTED_MODULE_3__["CommonMockService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
], ExistingClaimPage);



/***/ })

}]);
//# sourceMappingURL=existing-claim-existing-claim-module-es2015.js.map