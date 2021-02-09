(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["professional-indemnity-professional-step9-professional-step9-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/professional-indemnity/professional-step9/professional-step9.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/professional-indemnity/professional-step9/professional-step9.page.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons>\n      <ion-button color=\"primary\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n    <ion-title color=\"primary\" class=\"head\">Claim Completed</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"page-done\">\n\n  <!-- <ion-label class=\"lbl-head\">Claim completed!</ion-label> -->\n  <ion-label color=\"primary\" class=\"lbl-desc\">Thank you for your notification. A member of our claims team will call you to obtain further particulars. In the meantime, if the matter is an emergency you can call our 24/7 Emergency Service on 1300 305 834.</ion-label>\n  <ion-label color=\"primary\" class=\"lbl-ref\">Your reference number is : {{Claim_number}}</ion-label>\n  <ion-label color=\"primary\" class=\"lbl-que\">Did you find this claim process helpful?</ion-label>\n  <ion-row>\n    <ion-col size=\"4\">\n      <ion-icon color=\"primary\" name=\"happy\" mode=\"md\" class=\"icon\"><a class=\"col-md-4\" (click)=\"submitFeedBack(Claim_number, 'A')\"></a></ion-icon>\n    </ion-col>\n    <ion-col size=\"4\">\n        <ion-icon color=\"primary\" name=\"happy\" mode=\"md\" class=\"icon\"> <a class=\"col-md-4\" (click)=\"submitFeedBack(Claim_number, 'B')\"></a></ion-icon>\n    </ion-col>\n    <ion-col size=\"4\">\n        <ion-icon color=\"primary\" name=\"happy\" mode=\"md\" class=\"icon\"> <a class=\"col-md-4\" (click)=\"submitFeedBack(Claim_number, 'C')\"></a></ion-icon>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n<ion-footer class=\"btns-footer\">\n  <ion-row class=\"row-footer\">\n    <ion-col class=\"col-footer\">\n      <ion-button expand=\"full\" class=\"btn-next\"  routerLink=\"/home\">Go Home</ion-button>\n      <!-- (click)=\"otherStep3Next()\"    routerLink=\"/step4\" -->\n    </ion-col>\n  </ion-row>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/professional-indemnity/professional-step9/professional-step9.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step9/professional-step9.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ProfessionalStep9PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalStep9PageModule", function() { return ProfessionalStep9PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professional_step9_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./professional-step9.page */ "./src/app/professional-indemnity/professional-step9/professional-step9.page.ts");







const routes = [
    {
        path: '',
        component: _professional_step9_page__WEBPACK_IMPORTED_MODULE_6__["ProfessionalStep9Page"]
    }
];
let ProfessionalStep9PageModule = class ProfessionalStep9PageModule {
};
ProfessionalStep9PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_professional_step9_page__WEBPACK_IMPORTED_MODULE_6__["ProfessionalStep9Page"]]
    })
], ProfessionalStep9PageModule);



/***/ }),

/***/ "./src/app/professional-indemnity/professional-step9/professional-step9.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step9/professional-step9.page.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Zlc3Npb25hbC1pbmRlbW5pdHkvcHJvZmVzc2lvbmFsLXN0ZXA5L3Byb2Zlc3Npb25hbC1zdGVwOS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/professional-indemnity/professional-step9/professional-step9.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step9/professional-step9.page.ts ***!
  \**************************************************************************************/
/*! exports provided: ProfessionalStep9Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalStep9Page", function() { return ProfessionalStep9Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProfessionalStep9Page = class ProfessionalStep9Page {
    constructor(_cS, route, router) {
        this._cS = _cS;
        this.route = route;
        this.router = router;
        this.route.queryParams.subscribe(params => {
            if (params && params.step) {
                this.Claim_number = params.step;
            }
        });
    }
    submitFeedBack(claim_id, Feedback) {
        var body = {
            claimid: +claim_id,
            claimfeedback: Feedback
        };
        this._cS.Display_Loader(true);
        this._cS.post_API(this._cS.URL_Claim_Feedback(), body)
            .subscribe((data) => {
            if (data.status == 0) {
                // this.router.navigate(['/home']);
                // this._cS.Display_Toaster('success', 'Thank you for your valuable feedback !!');
            }
            else {
                // this._cS.Display_Toaster('error', data.message);
            }
            this._cS.Display_Loader(false);
        }, err => {
            this._cS.Display_Loader(false);
        });
    }
    ;
    ngOnInit() {
    }
};
ProfessionalStep9Page.ctorParameters = () => [
    { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_2__["CommonMockService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProfessionalStep9Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-professional-step9',
        template: __webpack_require__(/*! raw-loader!./professional-step9.page.html */ "./node_modules/raw-loader/index.js!./src/app/professional-indemnity/professional-step9/professional-step9.page.html"),
        styles: [__webpack_require__(/*! ./professional-step9.page.scss */ "./src/app/professional-indemnity/professional-step9/professional-step9.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_2__["CommonMockService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ProfessionalStep9Page);



/***/ })

}]);
//# sourceMappingURL=professional-indemnity-professional-step9-professional-step9-module-es2015.js.map