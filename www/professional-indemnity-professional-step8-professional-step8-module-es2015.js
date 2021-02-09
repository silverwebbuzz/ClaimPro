(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["professional-indemnity-professional-step8-professional-step8-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/professional-indemnity/professional-step8/professional-step8.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/professional-indemnity/professional-step8/professional-step8.page.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons>\r\n        <ion-button color=\"primary\" (click)=\"back()\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title color=\"primary\" class=\"head\">Review claim & submit</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content padding>\r\n  \r\n    <ion-label class=\"lbl-head\">You're almost done, would you like to review your claim?</ion-label>\r\n  \r\n    <ion-label class=\"lbl-note\" color=\"primary\">Please note that claims cannot be changed once submitted.</ion-label>\r\n  \r\n    <!-- <ion-button expand=\"full\" class=\"btn-review\" (click)=\"\">Review My Claim</ion-button> -->\r\n  \r\n  </ion-content>\r\n  \r\n  <ion-footer class=\"btns-footer\">\r\n    <ion-row class=\"row-footer\">\r\n      <ion-col class=\"col-footer border-R\">\r\n        <ion-button expand=\"full\" class=\"btn-back\" (click)=\"reviewClaim('review-professional','professional')\">Review My Claim</ion-button>\r\n      </ion-col>\r\n      <ion-col class=\"col-footer border-L\">\r\n        <ion-button expand=\"full\" class=\"btn-next\" (click)=\"submitClaim()\">Submit My Claim</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-footer>\r\n  "

/***/ }),

/***/ "./src/app/professional-indemnity/professional-step8/professional-step8.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step8/professional-step8.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ProfessionalStep8PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalStep8PageModule", function() { return ProfessionalStep8PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _professional_step8_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./professional-step8.page */ "./src/app/professional-indemnity/professional-step8/professional-step8.page.ts");









const routes = [
    {
        path: '',
        component: _professional_step8_page__WEBPACK_IMPORTED_MODULE_8__["ProfessionalStep8Page"]
    }
];
let ProfessionalStep8PageModule = class ProfessionalStep8PageModule {
};
ProfessionalStep8PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_professional_step8_page__WEBPACK_IMPORTED_MODULE_8__["ProfessionalStep8Page"]],
        providers: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__["CommonMockService"],
        ],
    })
], ProfessionalStep8PageModule);



/***/ }),

/***/ "./src/app/professional-indemnity/professional-step8/professional-step8.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step8/professional-step8.page.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Zlc3Npb25hbC1pbmRlbW5pdHkvcHJvZmVzc2lvbmFsLXN0ZXA4L3Byb2Zlc3Npb25hbC1zdGVwOC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/professional-indemnity/professional-step8/professional-step8.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step8/professional-step8.page.ts ***!
  \**************************************************************************************/
/*! exports provided: ProfessionalStep8Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalStep8Page", function() { return ProfessionalStep8Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _review_professional_review_professional_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../review-professional/review-professional.page */ "./src/app/professional-indemnity/review-professional/review-professional.page.ts");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");







let ProfessionalStep8Page = class ProfessionalStep8Page {
    constructor(modalCtrl, _cS, router, statusBar, navCtrl) {
        this.modalCtrl = modalCtrl;
        this._cS = _cS;
        this.router = router;
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.pop();
    }
    submitClaim() {
        var body = {
            step: 'step8',
            ClaimNumber: localStorage.getItem('ProfessionalClaimNumber'),
        };
        this._cS.put_API(this._cS.URL_Professional_Claim_Post(), body)
            .subscribe((data) => {
            if (data.status == 0) {
                this.Claim_number = localStorage.getItem('ProfessionalClaimNumber'),
                    localStorage.removeItem('ProfessionalClaimNumber');
                this.router.navigate(['/professional-step9'], { queryParams: { step: this.Claim_number } });
            }
            else {
            }
        }, err => {
        });
    }
    ;
    reviewClaim() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _review_professional_review_professional_page__WEBPACK_IMPORTED_MODULE_3__["ReviewProfessionalPage"]
            });
            return yield modal.present();
        });
    }
};
ProfessionalStep8Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_4__["CommonMockService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
ProfessionalStep8Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-professional-step8',
        template: __webpack_require__(/*! raw-loader!./professional-step8.page.html */ "./node_modules/raw-loader/index.js!./src/app/professional-indemnity/professional-step8/professional-step8.page.html"),
        styles: [__webpack_require__(/*! ./professional-step8.page.scss */ "./src/app/professional-indemnity/professional-step8/professional-step8.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_4__["CommonMockService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], ProfessionalStep8Page);



/***/ })

}]);
//# sourceMappingURL=professional-indemnity-professional-step8-professional-step8-module-es2015.js.map