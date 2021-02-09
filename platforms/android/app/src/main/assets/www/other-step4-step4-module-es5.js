(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["other-step4-step4-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/other/step4/step4.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/other/step4/step4.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"primary\" class=\"head\">Review claim & submit</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <ion-label class=\"lbl-head\">You're almost done, would you like to review your claim?</ion-label>\r\n\r\n  <ion-label class=\"lbl-note\" color=\"primary\">Please note that claims cannot be changed once submitted.</ion-label>\r\n\r\n  <!-- <ion-button expand=\"full\" class=\"btn-review\" (click)=\"\">Review My Claim</ion-button> -->\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" size=\"large\" class=\"btn-back\" (click)=\"reviewClaim('review-other','other')\">Review My Claim</ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" size=\"large\" class=\"btn-next\" (click)=\"submitClaim()\">Submit My Claim</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/other/step4/step4.module.ts":
/*!*********************************************!*\
  !*** ./src/app/other/step4/step4.module.ts ***!
  \*********************************************/
/*! exports provided: Step4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step4PageModule", function() { return Step4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _step4_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./step4.page */ "./src/app/other/step4/step4.page.ts");









var routes = [
    {
        path: '',
        component: _step4_page__WEBPACK_IMPORTED_MODULE_8__["Step4Page"]
    }
];
var Step4PageModule = /** @class */ (function () {
    function Step4PageModule() {
    }
    Step4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_step4_page__WEBPACK_IMPORTED_MODULE_8__["Step4Page"]],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__["CommonMockService"],
            ],
        })
    ], Step4PageModule);
    return Step4PageModule;
}());



/***/ }),

/***/ "./src/app/other/step4/step4.page.scss":
/*!*********************************************!*\
  !*** ./src/app/other/step4/step4.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL290aGVyL3N0ZXA0L3N0ZXA0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/other/step4/step4.page.ts":
/*!*******************************************!*\
  !*** ./src/app/other/step4/step4.page.ts ***!
  \*******************************************/
/*! exports provided: Step4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step4Page", function() { return Step4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _review_other_review_other_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../review-other/review-other.page */ "./src/app/other/review-other/review-other.page.ts");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");







var Step4Page = /** @class */ (function () {
    function Step4Page(modalCtrl, _cS, router, statusBar, navCtrl) {
        this.modalCtrl = modalCtrl;
        this._cS = _cS;
        this.router = router;
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
    }
    Step4Page.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    Step4Page.prototype.ngOnInit = function () {
    };
    Step4Page.prototype.back = function () {
        this.navCtrl.pop();
    };
    Step4Page.prototype.submitClaim = function () {
        var _this = this;
        var body = {
            step: 'step4',
            ClaimNumber: localStorage.getItem('OtherClaimNumber'),
        };
        this._cS.put_API(this._cS.URL_Other_Claim_Post(), body)
            .subscribe(function (data) {
            if (data.status == 0) {
                _this.Claim_number = localStorage.getItem('OtherClaimNumber'),
                    localStorage.removeItem('OtherClaimNumber');
                _this.router.navigate(['/step5'], { queryParams: { step: _this.Claim_number } });
            }
            else {
            }
        }, function (err) {
        });
    };
    ;
    // reviewClaim(url, claimtype) {
    //   let customurl = url + '?type=' + claimtype;
    //   this.router.navigate([]).then(result => { window.open(customurl, '_blank'); });
    // }
    Step4Page.prototype.reviewClaim = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _review_other_review_other_page__WEBPACK_IMPORTED_MODULE_3__["ReviewOtherPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Step4Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_4__["CommonMockService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    Step4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-step4',
            template: __webpack_require__(/*! raw-loader!./step4.page.html */ "./node_modules/raw-loader/index.js!./src/app/other/step4/step4.page.html"),
            styles: [__webpack_require__(/*! ./step4.page.scss */ "./src/app/other/step4/step4.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_4__["CommonMockService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], Step4Page);
    return Step4Page;
}());



/***/ })

}]);
//# sourceMappingURL=other-step4-step4-module-es5.js.map