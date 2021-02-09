(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medical-malpractice-medical-step8-medical-step8-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/medical-malpractice/medical-step8/medical-step8.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/medical-malpractice/medical-step8/medical-step8.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons>\r\n        <ion-button color=\"primary\" (click)=\"back()\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title color=\"primary\" class=\"head\">Review claim & submit</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content padding>\r\n  \r\n    <ion-label class=\"lbl-head\">You're almost done, would you like to review your claim?</ion-label>\r\n  \r\n    <ion-label class=\"lbl-note\" color=\"primary\">Please note that claims cannot be changed once submitted.</ion-label>\r\n  \r\n    <!-- <ion-button expand=\"full\" class=\"btn-review\"></ion-button> -->\r\n  \r\n  </ion-content>\r\n  \r\n  <ion-footer class=\"btns-footer\">\r\n    <ion-row class=\"row-footer\">\r\n      <ion-col class=\"col-footer border-R\">\r\n        <ion-button expand=\"full\" class=\"btn-back\" (click)=\"reviewClaim('review-medical','medical')\">Review My Claim</ion-button>\r\n      </ion-col>\r\n      <ion-col class=\"col-footer border-L\">\r\n        <ion-button expand=\"full\" class=\"btn-next\" (click)=\"submitClaim()\">Submit My Claim</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-footer>"

/***/ }),

/***/ "./src/app/medical-malpractice/medical-step8/medical-step8.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/medical-malpractice/medical-step8/medical-step8.module.ts ***!
  \***************************************************************************/
/*! exports provided: MedicalStep8PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalStep8PageModule", function() { return MedicalStep8PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _medical_step8_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./medical-step8.page */ "./src/app/medical-malpractice/medical-step8/medical-step8.page.ts");









var routes = [
    {
        path: '',
        component: _medical_step8_page__WEBPACK_IMPORTED_MODULE_8__["MedicalStep8Page"]
    }
];
var MedicalStep8PageModule = /** @class */ (function () {
    function MedicalStep8PageModule() {
    }
    MedicalStep8PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_medical_step8_page__WEBPACK_IMPORTED_MODULE_8__["MedicalStep8Page"]],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__["CommonMockService"],
            ],
        })
    ], MedicalStep8PageModule);
    return MedicalStep8PageModule;
}());



/***/ }),

/***/ "./src/app/medical-malpractice/medical-step8/medical-step8.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/medical-malpractice/medical-step8/medical-step8.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGljYWwtbWFscHJhY3RpY2UvbWVkaWNhbC1zdGVwOC9tZWRpY2FsLXN0ZXA4LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/medical-malpractice/medical-step8/medical-step8.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/medical-malpractice/medical-step8/medical-step8.page.ts ***!
  \*************************************************************************/
/*! exports provided: MedicalStep8Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalStep8Page", function() { return MedicalStep8Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _review_medical_review_medical_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../review-medical/review-medical.page */ "./src/app/medical-malpractice/review-medical/review-medical.page.ts");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");







var MedicalStep8Page = /** @class */ (function () {
    function MedicalStep8Page(modalCtrl, _cS, router, statusBar, navCtrl) {
        this.modalCtrl = modalCtrl;
        this._cS = _cS;
        this.router = router;
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
    }
    MedicalStep8Page.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    MedicalStep8Page.prototype.ngOnInit = function () {
    };
    MedicalStep8Page.prototype.back = function () {
        this.navCtrl.pop();
    };
    MedicalStep8Page.prototype.submitClaim = function () {
        var _this = this;
        var body = {
            step: 'step8',
            ClaimNumber: localStorage.getItem('MedicalClaimNumber'),
        };
        this._cS.put_API(this._cS.URL_Medical_Claim_Post(), body)
            .subscribe(function (data) {
            if (data.status == 0) {
                _this.Claim_number = localStorage.getItem('MedicalClaimNumber'),
                    localStorage.removeItem('MedicalClaimNumber');
                _this.router.navigate(['/medical-step9'], { queryParams: { step: _this.Claim_number } });
            }
            else {
            }
        }, function (err) {
        });
    };
    ;
    MedicalStep8Page.prototype.reviewClaim = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _review_medical_review_medical_page__WEBPACK_IMPORTED_MODULE_3__["ReviewMedicalPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MedicalStep8Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_4__["CommonMockService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    MedicalStep8Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medical-step8',
            template: __webpack_require__(/*! raw-loader!./medical-step8.page.html */ "./node_modules/raw-loader/index.js!./src/app/medical-malpractice/medical-step8/medical-step8.page.html"),
            styles: [__webpack_require__(/*! ./medical-step8.page.scss */ "./src/app/medical-malpractice/medical-step8/medical-step8.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_4__["CommonMockService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], MedicalStep8Page);
    return MedicalStep8Page;
}());



/***/ })

}]);
//# sourceMappingURL=medical-malpractice-medical-step8-medical-step8-module-es5.js.map