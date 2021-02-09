(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-liability-general-step7-general-step7-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/general-liability/general-step7/general-step7.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/general-liability/general-step7/general-step7.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Claim Completed</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"page-done\">\r\n\r\n  <!-- <ion-label class=\"lbl-head\">Claim completed!</ion-label> -->\r\n  <ion-label color=\"primary\" class=\"lbl-desc\">Thank you for your notification. A member of our claims team will call you to obtain further particulars. In the meantime, if the matter is an emergency you can call our 24/7 Emergency Service on 1300 305 834.</ion-label>\r\n  <ion-label color=\"primary\" class=\"lbl-ref\">Your reference number is : {{Claim_number}}</ion-label>\r\n  <ion-label color=\"primary\" class=\"lbl-que\">Did you find this claim process helpful?</ion-label>\r\n  <ion-row>\r\n    <ion-col size=\"4\">\r\n      <ion-icon color=\"primary\" name=\"happy\" mode=\"md\" class=\"icon\"><a class=\"col-md-4\" (click)=\"submitFeedBack(Claim_number, 'A')\"></a></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"4\">\r\n        <ion-icon color=\"primary\" name=\"happy\" mode=\"md\" class=\"icon\"> <a class=\"col-md-4\" (click)=\"submitFeedBack(Claim_number, 'B')\"></a></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"4\">\r\n        <ion-icon color=\"primary\" name=\"happy\" mode=\"md\" class=\"icon\"> <a class=\"col-md-4\" (click)=\"submitFeedBack(Claim_number, 'C')\"></a></ion-icon>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer\">\r\n      <ion-button expand=\"full\" size=\"large\" class=\"btn-next\"  routerLink=\"/home\">Go Home</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/general-liability/general-step7/general-step7.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/general-liability/general-step7/general-step7.module.ts ***!
  \*************************************************************************/
/*! exports provided: GeneralStep7PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralStep7PageModule", function() { return GeneralStep7PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _general_step7_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./general-step7.page */ "./src/app/general-liability/general-step7/general-step7.page.ts");







var routes = [
    {
        path: '',
        component: _general_step7_page__WEBPACK_IMPORTED_MODULE_6__["GeneralStep7Page"]
    }
];
var GeneralStep7PageModule = /** @class */ (function () {
    function GeneralStep7PageModule() {
    }
    GeneralStep7PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_general_step7_page__WEBPACK_IMPORTED_MODULE_6__["GeneralStep7Page"]]
        })
    ], GeneralStep7PageModule);
    return GeneralStep7PageModule;
}());



/***/ }),

/***/ "./src/app/general-liability/general-step7/general-step7.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/general-liability/general-step7/general-step7.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWwtbGlhYmlsaXR5L2dlbmVyYWwtc3RlcDcvZ2VuZXJhbC1zdGVwNy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/general-liability/general-step7/general-step7.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/general-liability/general-step7/general-step7.page.ts ***!
  \***********************************************************************/
/*! exports provided: GeneralStep7Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralStep7Page", function() { return GeneralStep7Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");





var GeneralStep7Page = /** @class */ (function () {
    function GeneralStep7Page(_cS, route, router, statusBar) {
        var _this = this;
        this._cS = _cS;
        this.route = route;
        this.router = router;
        this.statusBar = statusBar;
        this.route.queryParams.subscribe(function (params) {
            if (params && params.step) {
                _this.Claim_number = params.step;
            }
        });
    }
    GeneralStep7Page.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    GeneralStep7Page.prototype.ngOnInit = function () {
    };
    GeneralStep7Page.prototype.submitFeedBack = function (claim_id, Feedback) {
        var _this = this;
        var body = {
            claimid: +claim_id,
            claimfeedback: Feedback
        };
        this._cS.Display_Loader(true);
        this._cS.post_API(this._cS.URL_Claim_Feedback(), body)
            .subscribe(function (data) {
            if (data.status == 0) {
                // this.router.navigate(['/home']);
                // this._cS.Display_Toaster('success', 'Thank you for your valuable feedback !!');
            }
            else {
                // this._cS.Display_Toaster('error', data.message);
            }
            _this._cS.Display_Loader(false);
        }, function (err) {
            _this._cS.Display_Loader(false);
        });
    };
    ;
    GeneralStep7Page.ctorParameters = function () { return [
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_2__["CommonMockService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] }
    ]; };
    GeneralStep7Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-general-step7',
            template: __webpack_require__(/*! raw-loader!./general-step7.page.html */ "./node_modules/raw-loader/index.js!./src/app/general-liability/general-step7/general-step7.page.html"),
            styles: [__webpack_require__(/*! ./general-step7.page.scss */ "./src/app/general-liability/general-step7/general-step7.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_2__["CommonMockService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])
    ], GeneralStep7Page);
    return GeneralStep7Page;
}());



/***/ })

}]);
//# sourceMappingURL=general-liability-general-step7-general-step7-module-es5.js.map