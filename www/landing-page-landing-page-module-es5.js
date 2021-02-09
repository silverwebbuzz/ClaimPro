(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-page-landing-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page/landing-page.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page/landing-page.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"page-landing\">\r\n\r\n  <img src=\"../../assets/images/insurence-logo.png\" class=\"img-logo\">\r\n\r\n  <div class=\"div-bottom\">\r\n    <ion-button shape=\"round\" size=\"large\" expand=\"full\" class=\"btn-signin\" (click)=\"signin()\">SIGN IN</ion-button>\r\n    <ion-button shape=\"round\" size=\"large\" expand=\"full\" class=\"btn-new\" (click)=\"signup()\">MAKE A NEW CLAIM</ion-button>\r\n  </div>        \r\n\r\n  \r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/landing-page/landing-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/landing-page/landing-page.module.ts ***!
  \*****************************************************/
/*! exports provided: LandingPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPagePageModule", function() { return LandingPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _landing_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-page.page */ "./src/app/landing-page/landing-page.page.ts");







var routes = [
    {
        path: '',
        component: _landing_page_page__WEBPACK_IMPORTED_MODULE_6__["LandingPagePage"]
    }
];
var LandingPagePageModule = /** @class */ (function () {
    function LandingPagePageModule() {
    }
    LandingPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_landing_page_page__WEBPACK_IMPORTED_MODULE_6__["LandingPagePage"]]
        })
    ], LandingPagePageModule);
    return LandingPagePageModule;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/landing-page/landing-page.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-logo {\n  width: 75%;\n  display: block;\n  text-align: center;\n  margin: auto;\n  margin-top: 30%;\n}\n\n.div-bottom {\n  position: absolute;\n  bottom: 15%;\n  width: 100%;\n}\n\n.div-bottom .btn-signin {\n  margin: 20px 40px;\n  color: #fff;\n  font-weight: bold;\n  --color-activated: #fff;\n}\n\n.div-bottom .btn-new {\n  margin: 20px 40px;\n  color: #fff;\n  font-weight: bold;\n  --color-activated: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9jbGFpbXByb2FwcC9zcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0RKOztBREdJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ0RSOztBREdJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8tLWJhY2tncm91bmQ6ICNmMWYxZjE7XHJcblxyXG4uaW1nLWxvZ297XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbn1cclxuLmRpdi1ib3R0b217XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDE1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5idG4tc2lnbmlue1xyXG4gICAgICAgIG1hcmdpbjogMjBweCA0MHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1uZXd7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDQwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNmZmY7XHJcbiAgICB9XHJcbn1cclxuIiwiLmltZy1sb2dvIHtcbiAgd2lkdGg6IDc1JTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzMCU7XG59XG5cbi5kaXYtYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1JTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGl2LWJvdHRvbSAuYnRuLXNpZ25pbiB7XG4gIG1hcmdpbjogMjBweCA0MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xufVxuLmRpdi1ib3R0b20gLmJ0bi1uZXcge1xuICBtYXJnaW46IDIwcHggNDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogI2ZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.page.ts":
/*!***************************************************!*\
  !*** ./src/app/landing-page/landing-page.page.ts ***!
  \***************************************************/
/*! exports provided: LandingPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPagePage", function() { return LandingPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");





var LandingPagePage = /** @class */ (function () {
    function LandingPagePage(menu, statusBar, router) {
        this.menu = menu;
        this.statusBar = statusBar;
        this.router = router;
    }
    LandingPagePage.prototype.ionViewWillEnter = function () {
        this.menu.enable(false);
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    LandingPagePage.prototype.ngOnInit = function () {
    };
    LandingPagePage.prototype.signin = function () {
        this.router.navigate(['/signin']);
    };
    LandingPagePage.prototype.signup = function () {
        this.router.navigate(['/signup']);
    };
    LandingPagePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LandingPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! raw-loader!./landing-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page/landing-page.page.html"),
            styles: [__webpack_require__(/*! ./landing-page.page.scss */ "./src/app/landing-page/landing-page.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LandingPagePage);
    return LandingPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=landing-page-landing-page-module-es5.js.map