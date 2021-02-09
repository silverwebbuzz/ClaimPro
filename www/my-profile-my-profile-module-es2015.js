(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-profile-my-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/my-profile/my-profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-profile/my-profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"primary\" class=\"head\">My Profile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <!-- <img src=\"../../assets/images/insurence-logo.png\" class=\"lbl-logo\" /> -->\r\n\r\n  <form [formGroup]=\"profile_form\" autocomplete=\"off\">\r\n\r\n    <ion-item lines=\"none\" class=\"input-item\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">First Name</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"firstname\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"profile_form.controls.firstname.hasError('required') && profile_form.controls.firstname.touched\">\r\n      <p class=\"content\">Please Enter First Name!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Last Name</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"lastname\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"profile_form.controls.lastname.hasError('required') && profile_form.controls.lastname.touched\">\r\n      <p class=\"content\">Please Enter Last Name!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Phone Number</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"phone_number\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"profile_form.controls.phone_number.hasError('required') && profile_form.controls.phone_number.touched\">\r\n      <p class=\"content\">Please Enter Phone Number!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Mobile</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"mobile\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"profile_form.controls.mobile.hasError('required') && profile_form.controls.mobile.touched\">\r\n      <p class=\"content\">Please Enter Mobile!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Email Address</ion-label>\r\n      <ion-input type=\"email\" formControlName=\"email\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"profile_form.controls.email.hasError('required') && profile_form.controls.email.touched\">\r\n      <p class=\"content\">Please Enter Email Address!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"profile_form.controls.email.hasError('pattern') && profile_form.controls.email.touched\">\r\n      <p class=\"content\">Please Enter Valid Email Address!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"profile_form.controls.email.hasError('incorrect') && profile_form.controls.email.touched\">\r\n      <p class=\"content\">Email Address is already taken!</p>\r\n    </ion-item>\r\n\r\n    <ion-label class=\"lbl-contact add-margin add\">Physical address</ion-label>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Street</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"street\" color=\"primary\" class=\"input-box\" id=\"address_line_1\"\r\n        (ionFocus)=\"riskAddress()\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"profile_form.controls.street.hasError('required') && profile_form.controls.street.touched\">\r\n      <p class=\"content\">Please Enter Street!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Suburb/Town</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"city\" color=\"primary\" class=\"input-box\" id=\"city\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"profile_form.controls.city.hasError('required') && profile_form.controls.city.touched\">\r\n      <p class=\"content\">Please Enter Suburb/Town!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">State</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"state\" color=\"primary\" class=\"input-box\" id=\"state\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"profile_form.controls.state.hasError('required') && profile_form.controls.state.touched\">\r\n      <p class=\"content\">Please Enter State!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Postcode</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"postal_code\" color=\"primary\" class=\"input-box\" id=\"postcode\">\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"profile_form.controls.postal_code.hasError('required') && profile_form.controls.postal_code.touched\">\r\n      <p class=\"content\">Please Enter Postcode!</p>\r\n    </ion-item>\r\n    \r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Country</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"country\" color=\"primary\" class=\"input-box\" id=\"country\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"profile_form.controls.country.hasError('required') && profile_form.controls.country.touched\">\r\n      <p class=\"content\">Please Enter Country!</p>\r\n    </ion-item>\r\n\r\n    <ion-label class=\"lbl-contact add-margin add\">Postal address</ion-label>\r\n\r\n    <ion-item lines=\"none\" class=\"add-spc\">\r\n      <ion-checkbox mode=\"md\" slot=\"start\" class=\"add-check\" formControlName=\"same_address\"></ion-checkbox>\r\n      <ion-label class=\"add-lbl\">Same as physical address</ion-label>\r\n    </ion-item>\r\n\r\n    <div>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Street</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"tp_street\" color=\"primary\" class=\"input-box\" id=\"tp_StreetValue\"\r\n        (ionFocus)=\"riskAddress()\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"profile_form.controls.tp_street.hasError('required') && profile_form.controls.tp_street.touched\">\r\n      <p class=\"content\">Please Enter Street!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Suburb/Town</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"tp_city\" color=\"primary\" class=\"input-box\" id=\"tp_SuburbValue\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"profile_form.controls.tp_city.hasError('required') && profile_form.controls.tp_city.touched\">\r\n      <p class=\"content\">Please Enter Suburb/Town!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">State</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"tp_state\" color=\"primary\" class=\"input-box\" id=\"tp_StateValue\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"profile_form.controls.tp_state.hasError('required') && profile_form.controls.tp_state.touched\">\r\n      <p class=\"content\">Please Enter State!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Postcode</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"tp_postal_code\" color=\"primary\" class=\"input-box\" id=\"tp_PostCodeValue\">\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"profile_form.controls.tp_postal_code.hasError('required') && profile_form.controls.tp_postal_code.touched\">\r\n      <p class=\"content\">Please Enter Postcode!</p>\r\n    </ion-item>\r\n    \r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Country</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"tp_country\" color=\"primary\" class=\"input-box\" id=\"tp_CountryValue\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"profile_form.controls.tp_country.hasError('required') && profile_form.controls.tp_country.touched\">\r\n      <p class=\"content\">Please Enter Country!</p>\r\n    </ion-item>\r\n\r\n    </div>\r\n\r\n    <ion-radio-group formControlName=\"contact_option\">\r\n\r\n      <ion-label color=\"primary\" class=\"lbl-head-radio add add-margin\">How would you like to be contacted?</ion-label>\r\n\r\n      <ion-item lines=\"none\" class=\"items-radio\">\r\n        <ion-label class=\"lbl-radio\">Phone Call</ion-label>\r\n        <ion-radio slot=\"start\" class=\"btn-radio\" value=\"Phone Call\" mode=\"md\"></ion-radio>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"items-radio\">\r\n        <ion-label class=\"lbl-radio\">SMS</ion-label>\r\n        <ion-radio slot=\"start\" class=\"btn-radio\" value=\"SMS\" mode=\"md\"></ion-radio>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"items-radio\">\r\n        <ion-label class=\"lbl-radio\">Email</ion-label>\r\n        <ion-radio slot=\"start\" class=\"btn-radio\" value=\"Email\" mode=\"md\"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n\r\n    <div class=\"btns-bottom\">\r\n\r\n      <ion-label class=\"lbl-signup\" color=\"primary\" routerLink=\"/changepass\">Change Password</ion-label>\r\n\r\n      <ion-button expand=\"full\" size=\"large\" shape=\"round\" class=\"btn-signin\" (click)=\"submit()\">SUBMIT</ion-button>\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/my-profile/my-profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/my-profile/my-profile.module.ts ***!
  \*************************************************/
/*! exports provided: MyProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function() { return MyProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_profile_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-profile.page */ "./src/app/my-profile/my-profile.page.ts");










const routes = [
    {
        path: '',
        component: _my_profile_page__WEBPACK_IMPORTED_MODULE_9__["MyProfilePage"]
    }
];
let MyProfilePageModule = class MyProfilePageModule {
};
MyProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_my_profile_page__WEBPACK_IMPORTED_MODULE_9__["MyProfilePage"]],
        providers: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_7__["CommonMockService"],
        ],
    })
], MyProfilePageModule);



/***/ }),

/***/ "./src/app/my-profile/my-profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/my-profile/my-profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LXByb2ZpbGUvbXktcHJvZmlsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/my-profile/my-profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/my-profile/my-profile.page.ts ***!
  \***********************************************/
/*! exports provided: MyProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePage", function() { return MyProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let MyProfilePage = class MyProfilePage {
    constructor(navCtrl, router, _cS, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.user_Details = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.profile_fb();
        this.get_user_Details();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    profile_fb() {
        this.profile_form = this.formBuilder.group({
            firstname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone_number: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            mobile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            confirmpassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            street: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            postal_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            country: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            same_address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tp_street: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tp_city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tp_state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tp_postal_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tp_country: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            contact_option: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngOnInit() {
        let script = document.createElement("script");
        script.src = "https://api.addressfinder.io/assets/v3/widget.js";
        script.async = true;
        document.body.appendChild(script);
    }
    riskAddress() {
        let widget = new AddressFinder.Widget(document.getElementById("address_line_1"), "PVW639JF4ET8ALGDHNKB", "AU", {});
        let returnResult = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        widget.on("result:select", function (fullAddress, metaData) {
            var selected = new AddressFinder.NZSelectedAddress(fullAddress, metaData);
            let SpaceCount = selected.originalAddressLines[1].split(" ").length;
            let setnum = SpaceCount - 2;
            let mainadddate = selected.originalAddressLines[1].split(" ").splice(-SpaceCount);
            let adddate = selected.originalAddressLines[1].split(" ").splice(setnum);
            this.addstate = adddate[0];
            this.addpincode = adddate[1];
            const index = mainadddate.indexOf(this.addstate);
            if (index !== -1) {
                mainadddate.splice(index, 1);
            }
            const index2 = mainadddate.indexOf(this.addpincode);
            if (index2 !== -1) {
                mainadddate.splice(index2, 2);
            }
            let returnJSON = {
                mainadddate: mainadddate,
                metaData: metaData
            };
            returnResult.next(returnJSON);
        });
        returnResult.subscribe(val => {
            if (val) {
                let address_line_1 = val.metaData.address_line_1;
                let mainadddate = val.mainadddate.join(' ');
                let postcode = val.metaData.postcode;
                let state_territory = val.metaData.state_territory;
                let country1 = "Australia";
                var JSON = {
                    street: address_line_1,
                    city: mainadddate,
                    postal_code: postcode,
                    state: state_territory,
                    country: country1
                };
                this.profile_form.patchValue(JSON);
            }
        });
    }
    submit() {
        for (let v in this.profile_form.controls) {
            this.profile_form.controls[v].markAsTouched();
        }
        if (this.profile_form.valid) {
            /* Address Start */
            let StreetValue = null;
            let SuburbValue = null;
            let PostCodeValue = null;
            let StateValue = null;
            let CountryValue = null;
            if (document.getElementById("address_line_1")) {
                StreetValue = document.getElementById("address_line_1").value;
            }
            if (document.getElementById("city")) {
                SuburbValue = document.getElementById("city").value;
            }
            if (document.getElementById("postcode")) {
                PostCodeValue = document.getElementById("postcode").value;
            }
            if (document.getElementById("state")) {
                StateValue = document.getElementById("state").value;
            }
            if (document.getElementById("country")) {
                CountryValue = document.getElementById("country").value;
            }
            /* Address End */
            const body = {
                "firstname": this.profile_form.value.firstname,
                "lastname": this.profile_form.value.lastname,
                "phone_number": this.profile_form.value.phone_number,
                "mobile": this.profile_form.value.mobile,
                "email": this.profile_form.value.email,
                "password": this.profile_form.value.password,
                "confirmpassword": this.profile_form.value.confirmpassword,
                "street": StreetValue,
                "city": SuburbValue,
                "state": StateValue,
                "postal_code": PostCodeValue,
                "country": CountryValue,
                "same_address": this.profile_form.value.same_address,
                "tp_street": this.profile_form.value.tp_street,
                "tp_city": this.profile_form.value.tp_city,
                "tp_state": this.profile_form.value.tp_state,
                "tp_postal_code": this.profile_form.value.tp_postal_code,
                "tp_country": this.profile_form.value.tp_country,
                "sla": this.profile_form.value.contact_option
                // "name": this.profile_form.value.name,
                // "street": StreetValue,
                // "city": SuburbValue,
                // "zipcode": PostCodeValue,
                // "state": StateValue,
                // "country": CountryValue,
                // "telephone": this.profile_form.value.phone_number,
                // "email": this.profile_form.value.email_address,
                // "sla": this.profile_form.value.contact_option
            };
            var Tokenvalue = localStorage.getItem('keyToken');
            if (Tokenvalue) {
                this._cS.Display_Loader(true);
                this._cS.post_API(this._cS.URL_User_Details_post(), body)
                    .subscribe((data) => {
                    if (data.status == 0) {
                        this._cS.presentToastWithOptions(data.message);
                    }
                    else {
                        this._cS.presentToastWithOptions(data.message);
                    }
                }, err => {
                });
            }
        }
    }
    get_user_Details() {
        this._cS.Display_Loader(true);
        this._cS.get_API(this._cS.URL_User_Details_Get())
            .subscribe((data) => {
            if (data.status == 0) {
                this.profile_form.patchValue({
                    id: data.data.userid,
                    name: data.data.name,
                    street: data.data.street,
                    postal_code: data.data.zipcode,
                    city: data.data.city,
                    state: data.data.state,
                    country: data.data.country,
                    phone_number: data.data.telephone,
                    email_address: data.data.email,
                    contact_option: data.data.contact_option ? data.data.contact_option : 'Phone Call'
                });
                this.user_Details.next(data.data);
            }
            else {
                this._cS.logout();
                this.user_Details.next(null);
                // this._cS.Display_Toaster('error', data.message);
            }
            this._cS.Display_Loader(false);
        }, err => {
            this._cS.logout();
            this.user_Details.next(null);
            // this._cS.Display_Toaster('error', err.message);
            this._cS.Display_Loader(false);
        });
    }
    ;
    // get_user_Details() {
    //   this._cS.Display_Loader(true);
    //   this._cS.get_API(this._cS.URL_User_Details_Get())
    //     .subscribe((data: any) => {
    //       if (data.status == 0) {
    //         this.profile_form.patchValue({
    //           id: data.data.userid,
    //           name: data.data.name,
    //           street: data.data.street,
    //           postal_code: data.data.zipcode,
    //           city: data.data.city,
    //           state: data.data.state,
    //           phone_number: data.data.telephone,
    //           email_address: data.data.email,
    //           contact_option: data.data.contact_option ? data.data.contact_option : 'Phone Call'
    //         });
    //         this.user_Details.next(data.data);
    //       } else {
    //         this._cS.logout();
    //         this.user_Details.next(null);
    //         this._cS.Display_Toaster('error', data.message);
    //       }
    //       this._cS.Display_Loader(false);
    //     }, err => {
    //       this._cS.logout();
    //       this.user_Details.next(null);
    //       this._cS.Display_Toaster('error', err.message);
    //       this._cS.Display_Loader(false);
    //     });
    // };
    back() {
        this.navCtrl.pop();
    }
};
MyProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
];
MyProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-profile',
        template: __webpack_require__(/*! raw-loader!./my-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/my-profile/my-profile.page.html"),
        styles: [__webpack_require__(/*! ./my-profile.page.scss */ "./src/app/my-profile/my-profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
], MyProfilePage);



/***/ })

}]);
//# sourceMappingURL=my-profile-my-profile-module-es2015.js.map