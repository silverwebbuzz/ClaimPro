(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpass-forgotpass-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/forgotpass/forgotpass.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgotpass/forgotpass.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"primary\" class=\"head\">Forgot Password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <img src=\"../../assets/images/insurence-logo.png\" class=\"lbl-logo\" />\r\n\r\n  <ion-label class=\"heading\">\r\n    Enter your register email address. We'll send you an email to reset your password.\r\n  </ion-label>\r\n\r\n  <form [formGroup]=\"forgot_form\" autocomplete=\"off\">\r\n    \r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Email address</ion-label>\r\n      <ion-input type=\"email\" formControlName=\"email\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"forgot_form.controls.email.hasError('required') && forgot_form.controls.email.touched\">\r\n      <p class=\"content\">Email Address is required!</p>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"forgot_form.controls.email.hasError('pattern') && forgot_form.controls.email.touched\">\r\n      <p class=\"content\">Please Enter a Valid Email Address!</p>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"forgot_form.controls.email.hasError('incorrect') && forgot_form.controls.email.touched\">\r\n      <p class=\"content\">Email does not exists!! Please enter registered email.</p>\r\n    </ion-item>\r\n\r\n    <ion-button expand=\"full\" shape=\"round\" size=\"large\" class=\"btn-forgot\" (click)=\"forgotPassword()\">SUBMIT</ion-button>\r\n    \r\n  </form>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/forgotpass/forgotpass.module.ts":
/*!*************************************************!*\
  !*** ./src/app/forgotpass/forgotpass.module.ts ***!
  \*************************************************/
/*! exports provided: ForgotpassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPageModule", function() { return ForgotpassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgotpass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpass.page */ "./src/app/forgotpass/forgotpass.page.ts");







var routes = [
    {
        path: '',
        component: _forgotpass_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassPage"]
    }
];
var ForgotpassPageModule = /** @class */ (function () {
    function ForgotpassPageModule() {
    }
    ForgotpassPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgotpass_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassPage"]]
        })
    ], ForgotpassPageModule);
    return ForgotpassPageModule;
}());



/***/ }),

/***/ "./src/app/forgotpass/forgotpass.page.scss":
/*!*************************************************!*\
  !*** ./src/app/forgotpass/forgotpass.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 25px 0px;\n  display: block;\n}\n\n.btn-forgot {\n  width: 75%;\n  margin: auto;\n  margin-top: 50px;\n  color: #fff;\n  font-weight: bold;\n  --color-activated: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9jbGFpbXByb2FwcC9zcmMvYXBwL2ZvcmdvdHBhc3MvZm9yZ290cGFzcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZvcmdvdHBhc3MvZm9yZ290cGFzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290cGFzcy9mb3Jnb3RwYXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5ne1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDI1cHggMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5idG4tZm9yZ290e1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmY7XHJcbn0iLCIuaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMjVweCAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYnRuLWZvcmdvdCB7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/forgotpass/forgotpass.page.ts":
/*!***********************************************!*\
  !*** ./src/app/forgotpass/forgotpass.page.ts ***!
  \***********************************************/
/*! exports provided: ForgotpassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPage", function() { return ForgotpassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common-mock.service */ "./src/app/common-mock.service.ts");







var ForgotpassPage = /** @class */ (function () {
    function ForgotpassPage(formBuilder, _cS, navCtrl, statusBar, router, menu) {
        this.formBuilder = formBuilder;
        this._cS = _cS;
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.router = router;
        this.menu = menu;
        this.forgotpass_fb();
    }
    ForgotpassPage.prototype.ionViewWillEnter = function () {
        this.menu.enable(false);
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    ForgotpassPage.prototype.ngOnInit = function () {
    };
    ForgotpassPage.prototype.forgotpass_fb = function () {
        this.forgot_form = this.formBuilder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ])]
        });
    };
    ForgotpassPage.prototype.forgotPassword = function () {
        var _this = this;
        for (var v in this.forgot_form.controls) {
            this.forgot_form.controls[v].markAsTouched();
        }
        if (this.forgot_form.valid) {
            this._cS.presentLoading();
            var body = {
                "email": this.forgot_form.value.email
            };
            this._cS.post_API_withOutToken(this._cS.URL_forgot_email_post(), body)
                .subscribe(function (data) {
                if (_this._cS.isLoading) {
                    _this._cS.dismissLoading();
                }
                if (data.status == 0) {
                    _this._cS._router.navigate(['signin']);
                    _this._cS.presentToastWithOptions(data.message);
                }
                else {
                    _this._cS.presentToastWithOptions(data.message);
                }
            }, function (err) {
                if (_this._cS.isLoading) {
                    _this._cS.dismissLoading();
                }
            });
        }
    };
    ForgotpassPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ForgotpassPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    ForgotpassPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotpass',
            template: __webpack_require__(/*! raw-loader!./forgotpass.page.html */ "./node_modules/raw-loader/index.js!./src/app/forgotpass/forgotpass.page.html"),
            styles: [__webpack_require__(/*! ./forgotpass.page.scss */ "./src/app/forgotpass/forgotpass.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], ForgotpassPage);
    return ForgotpassPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgotpass-forgotpass-module-es5.js.map