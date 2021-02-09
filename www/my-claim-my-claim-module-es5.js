(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-claim-my-claim-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/my-claim/my-claim.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-claim/my-claim.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"primary\" class=\"head\">My Claim</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"page-card\">\r\n\r\n  <div class=\"div-no\" *ngIf=\"MyClaim.length == 0\">\r\n    <ion-label class=\"label-no\">Record Not Available</ion-label>\r\n  </div>\r\n\r\n  <ion-card class=\"card-main\" *ngFor=\"let opt of MyClaim;\">\r\n\r\n    <ion-row class=\"row-card\">\r\n      <ion-col size=\"6\" class=\"col-head\">Type :</ion-col>\r\n      <ion-col size=\"6\" class=\"col-value\">{{ opt.policy_type }}</ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-card\">\r\n      <ion-col size=\"6\" class=\"col-head\">Reference Number :</ion-col>\r\n      <ion-col size=\"6\" class=\"col-value\">{{ opt.id }}</ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-card\">\r\n      <ion-col size=\"6\" class=\"col-head\">Policy Number :</ion-col>\r\n      <ion-col size=\"6\" class=\"col-value\">{{ opt.policy_number }}</ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-card\">\r\n      <ion-col size=\"6\" class=\"col-head\">Name :</ion-col>\r\n      <ion-col size=\"6\" class=\"col-value\">{{ (opt.tp_christian_policyholder +' '+ opt.tp_name_policyholder) }}</ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-card\">\r\n      <ion-col size=\"6\" class=\"col-head\">Date Submitted :</ion-col>\r\n      <ion-col size=\"6\" class=\"col-value\">{{ opt.created_date | date:'dd/MMM/yyyy' }}</ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-card\">\r\n      <ion-col size=\"6\" class=\"col-head\">Status :</ion-col>\r\n      <ion-col size=\"6\" class=\"col-value clr\" *ngIf=\"opt.step_status == 'completed'\">Completed</ion-col>\r\n      <ion-col size=\"6\" class=\"col-value clr-red\" *ngIf=\"opt.step_status != 'completed'\">Pending</ion-col>\r\n    </ion-row>\r\n\r\n  </ion-card>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/my-claim/my-claim.module.ts":
/*!*********************************************!*\
  !*** ./src/app/my-claim/my-claim.module.ts ***!
  \*********************************************/
/*! exports provided: MyClaimPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyClaimPageModule", function() { return MyClaimPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_claim_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-claim.page */ "./src/app/my-claim/my-claim.page.ts");










var routes = [
    {
        path: '',
        component: _my_claim_page__WEBPACK_IMPORTED_MODULE_9__["MyClaimPage"]
    }
];
var MyClaimPageModule = /** @class */ (function () {
    function MyClaimPageModule() {
    }
    MyClaimPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_claim_page__WEBPACK_IMPORTED_MODULE_9__["MyClaimPage"]],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__["CommonMockService"],
            ],
        })
    ], MyClaimPageModule);
    return MyClaimPageModule;
}());



/***/ }),

/***/ "./src/app/my-claim/my-claim.page.scss":
/*!*********************************************!*\
  !*** ./src/app/my-claim/my-claim.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clr {\n  color: green !important;\n  font-weight: bold;\n}\n\n.clr-red {\n  color: red !important;\n  font-weight: bold;\n}\n\n.page-myClaim {\n  --background: #f1f1f1;\n}\n\n.page-myClaim .card-main {\n  background: #fff;\n  margin: 5px;\n  box-shadow: 0px 0px 0px 0px;\n  border-radius: 0px;\n}\n\n.page-myClaim .card-main .row-card .col-head {\n  color: var(--ion-color-secondary);\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.page-myClaim .card-main .row-card .col-value {\n  color: var(--ion-color-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9jbGFpbXByb2FwcC9zcmMvYXBwL215LWNsYWltL215LWNsYWltLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXktY2xhaW0vbXktY2xhaW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0kscUJBQUE7QUNHSjs7QURESTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNHUjs7QURBWTtFQUNJLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRWhCOztBREFZO0VBQ0ksOEJBQUE7QUNFaEIiLCJmaWxlIjoic3JjL2FwcC9teS1jbGFpbS9teS1jbGFpbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xye1xyXG4gICAgY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY2xyLXJlZHtcclxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5wYWdlLW15Q2xhaW17XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XHJcblxyXG4gICAgLmNhcmQtbWFpbntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcblxyXG4gICAgICAgIC5yb3ctY2FyZHtcclxuICAgICAgICAgICAgLmNvbC1oZWFke1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbC12YWx1ZXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIuY2xyIHtcbiAgY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2xyLXJlZCB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wYWdlLW15Q2xhaW0ge1xuICAtLWJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG4ucGFnZS1teUNsYWltIC5jYXJkLW1haW4ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG4ucGFnZS1teUNsYWltIC5jYXJkLW1haW4gLnJvdy1jYXJkIC5jb2wtaGVhZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wYWdlLW15Q2xhaW0gLmNhcmQtbWFpbiAucm93LWNhcmQgLmNvbC12YWx1ZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/my-claim/my-claim.page.ts":
/*!*******************************************!*\
  !*** ./src/app/my-claim/my-claim.page.ts ***!
  \*******************************************/
/*! exports provided: MyClaimPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyClaimPage", function() { return MyClaimPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");





var MyClaimPage = /** @class */ (function () {
    function MyClaimPage(navCtrl, _cS, statusBar) {
        this.navCtrl = navCtrl;
        this._cS = _cS;
        this.statusBar = statusBar;
        this.MyClaim = [];
    }
    MyClaimPage.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    MyClaimPage.prototype.getAllClaims = function () {
        var _this = this;
        this._cS.get_API_withToken(this._cS.URL_My_claim_get())
            .subscribe(function (data) {
            if (data.status == 0) {
                _this.MyClaim = data.data;
            }
        }, function (err) {
        });
    };
    ;
    MyClaimPage.prototype.ngOnInit = function () {
        this.getAllClaims();
    };
    MyClaimPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    MyClaimPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_3__["CommonMockService"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] }
    ]; };
    MyClaimPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-claim',
            template: __webpack_require__(/*! raw-loader!./my-claim.page.html */ "./node_modules/raw-loader/index.js!./src/app/my-claim/my-claim.page.html"),
            styles: [__webpack_require__(/*! ./my-claim.page.scss */ "./src/app/my-claim/my-claim.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_3__["CommonMockService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])
    ], MyClaimPage);
    return MyClaimPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-claim-my-claim-module-es5.js.map