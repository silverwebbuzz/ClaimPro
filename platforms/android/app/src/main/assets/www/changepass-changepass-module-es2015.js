(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["changepass-changepass-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/changepass/changepass.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/changepass/changepass.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"primary\" class=\"head\">Change Password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <form [formGroup]=\"change_pass_form\" autocomplete=\"off\">\r\n\r\n    <ion-item lines=\"none\" class=\"input-item\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Old Password</ion-label>\r\n      <ion-input type=\"password\" color=\"primary\" formControlName=\"old_password\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"change_pass_form.controls.old_password.hasError('required') && change_pass_form.controls.old_password.touched\">\r\n      <p class=\"content\">Please Enter Old Password!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">New Password</ion-label>\r\n      <ion-input type=\"password\" color=\"primary\" formControlName=\"password\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"change_pass_form.controls.password.hasError('required') && change_pass_form.controls.password.touched\">\r\n      <p class=\"content\">Please Enter New Password!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Confirm Password</ion-label>\r\n      <ion-input type=\"password\" color=\"primary\" formControlName=\"confirmpassword\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"change_pass_form.controls.confirmpassword.hasError('required') && change_pass_form.controls.confirmpassword.touched\">\r\n      <p class=\"content\">Please Enter New Password!</p>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error add\"\r\n      *ngIf=\"change_pass_form.hasError('MatchPassword','confirmpassword')\">\r\n      <p class=\"content\">Confirm password does not match with new password.</p>\r\n    </ion-item>\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button expand=\"full\" size=\"large\" class=\"btn-bottom\" (click)=\"submit()\">SUBMIT</ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/changepass/changepass.module.ts":
/*!*************************************************!*\
  !*** ./src/app/changepass/changepass.module.ts ***!
  \*************************************************/
/*! exports provided: ChangepassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepassPageModule", function() { return ChangepassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _changepass_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./changepass.page */ "./src/app/changepass/changepass.page.ts");










const routes = [
    {
        path: '',
        component: _changepass_page__WEBPACK_IMPORTED_MODULE_9__["ChangepassPage"]
    }
];
let ChangepassPageModule = class ChangepassPageModule {
};
ChangepassPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_changepass_page__WEBPACK_IMPORTED_MODULE_9__["ChangepassPage"]],
        providers: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__["CommonMockService"],
        ],
    })
], ChangepassPageModule);



/***/ }),

/***/ "./src/app/changepass/changepass.page.scss":
/*!*************************************************!*\
  !*** ./src/app/changepass/changepass.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZXBhc3MvY2hhbmdlcGFzcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/changepass/changepass.page.ts":
/*!***********************************************!*\
  !*** ./src/app/changepass/changepass.page.ts ***!
  \***********************************************/
/*! exports provided: ChangepassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepassPage", function() { return ChangepassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common-mock.service */ "./src/app/common-mock.service.ts");







let ChangepassPage = class ChangepassPage {
    constructor(navCtrl, router, _cS, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.change_pass_fb();
    }
    change_pass_fb() {
        this.change_pass_form = this.formBuilder.group({
            old_password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            confirmpassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        }, {
            validator: _common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"].MatchPassword // your custom validation method  
        });
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    ngOnInit() {
    }
    submit() {
        for (let v in this.change_pass_form.controls) {
            this.change_pass_form.controls[v].markAsTouched();
        }
        if (this.change_pass_form.valid) {
            this._cS.presentLoading();
            const body = {
                "old_password": this.change_pass_form.value.old_password,
                "password": this.change_pass_form.value.password,
            };
            this._cS.post_API(this._cS.URL_change_password_post(), body)
                .subscribe((data) => {
                if (this._cS.isLoading) {
                    this._cS.dismissLoading();
                }
                if (data.status == 0) {
                    this._cS.presentToastWithOptions(data.message);
                    this._cS._router.navigate(['signin']);
                }
                else {
                    this._cS.presentToastWithOptions(data.message);
                }
            }, err => {
                if (this._cS.isLoading) {
                    this._cS.dismissLoading();
                }
            });
        }
    }
    back() {
        this.navCtrl.pop();
    }
};
ChangepassPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
];
ChangepassPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-changepass',
        template: __webpack_require__(/*! raw-loader!./changepass.page.html */ "./node_modules/raw-loader/index.js!./src/app/changepass/changepass.page.html"),
        styles: [__webpack_require__(/*! ./changepass.page.scss */ "./src/app/changepass/changepass.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
], ChangepassPage);



/***/ })

}]);
//# sourceMappingURL=changepass-changepass-module-es2015.js.map