(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle-vehicle-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicle/vehicle.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <!-- <ion-buttons>\r\n        <ion-button color=\"primary\" (click)=\"back()\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons> -->\r\n      <ion-title color=\"primary\" class=\"head\">Client / Policyholder</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content padding>\r\n  \r\n    <form [formGroup]=\"vehicle_form\" autocomplete=\"off\">\r\n      \r\n      <!-- <div class=\"div-que\">\r\n        \r\n        <ion-label class=\"lbl-head\">Do you know your policy number?</ion-label>\r\n  \r\n        <ion-radio-group formControlName=\"policy_holder\">\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">No</ion-label>\r\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n           class=\"div-Y\" *ngIf=\"this.vehicle_form.get('policy_holder').value == 'true'\"\r\n      </div> -->\r\n  \r\n      <div>\r\n  \r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Policy Number</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"policy_Number\" color=\"primary\" class=\"input-box\"></ion-input>\r\n          <!-- <ion-icon name=\"help-circle-outline\" color=\"primary\" class=\"icon\" (click)=\"detail()\"></ion-icon> -->\r\n        </ion-item>\r\n  \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"vehicle_form.controls.policy_Number.hasError('required') && vehicle_form.controls.policy_Number.touched\">\r\n          <p class=\"content\">Please Enter Policy Number!</p>\r\n        </ion-item>\r\n  \r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">First Name</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"tp_christian_policyholder\" color=\"primary\" class=\"input-box\"></ion-input>\r\n        </ion-item>\r\n  \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"vehicle_form.controls.tp_christian_policyholder.hasError('required') && vehicle_form.controls.tp_christian_policyholder.touched\">\r\n          <p class=\"content\">Please Enter First Name!</p>\r\n        </ion-item>\r\n  \r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Last Name</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"tp_name_policyholder\" color=\"primary\" class=\"input-box\"></ion-input>\r\n        </ion-item>\r\n  \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"vehicle_form.controls.tp_name_policyholder.hasError('required') && vehicle_form.controls.tp_name_policyholder.touched\">\r\n          <p class=\"content\">Please Enter Last Name!</p>\r\n        </ion-item>\r\n  \r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Telephone</ion-label>\r\n          <ion-input type=\"number\" formControlName=\"contact_telephone\" color=\"primary\" class=\"input-box\"></ion-input>\r\n        </ion-item>\r\n  \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"vehicle_form.controls.contact_telephone.hasError('required') && vehicle_form.controls.contact_telephone.touched\">\r\n          <p class=\"content\">Please Enter Telephone!</p>\r\n        </ion-item>\r\n  \r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Mobile</ion-label>\r\n          <ion-input type=\"number\" formControlName=\"contact_mobile\" color=\"primary\" class=\"input-box\"></ion-input>\r\n        </ion-item>\r\n  \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"vehicle_form.controls.contact_mobile.hasError('required') && vehicle_form.controls.contact_mobile.touched\">\r\n          <p class=\"content\">Please Enter Mobile!</p>\r\n        </ion-item>\r\n  \r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Email</ion-label>\r\n          <ion-input type=\"email\" formControlName=\"contact_email\" color=\"primary\" class=\"input-box\"></ion-input>\r\n        </ion-item>\r\n  \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"vehicle_form.controls.contact_email.hasError('required') && vehicle_form.controls.contact_email.touched\">\r\n          <p class=\"content\">Please Enter Email Address!</p>\r\n        </ion-item>\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"vehicle_form.controls.contact_email.hasError('pattern') && vehicle_form.controls.contact_email.touched\">\r\n          <p class=\"content\">Please Enter Valid Email Address!</p>\r\n        </ion-item>\r\n  \r\n      </div>\r\n  \r\n      <!-- <div class=\"div-N\" *ngIf=\"vehicle_form.get('policy_holder').value == 'false'\">\r\n  \r\n        <ion-label class=\"lbl-contact-blk add less\">Contact Us</ion-label>\r\n        \r\n        <ion-item lines=\"none\" class=\"item-info\">\r\n          <ion-label class=\"lbl-both\" color=\"secondary\">1300 305 834</ion-label>\r\n          <ion-icon slot=\"start\" name=\"call\" color=\"primary\" class=\"icons\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"item-info\">\r\n          <ion-label class=\"lbl-both\" color=\"secondary\">ih@ihgroup.com.au</ion-label>\r\n          <ion-icon slot=\"start\" name=\"mail\" color=\"primary\" class=\"icons\"></ion-icon>\r\n        </ion-item>\r\n  \r\n        <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n          <ion-label position=\"stacked\" color=\"primary\" class=\"lbl-dropdown\">Speak to a broker near you</ion-label>\r\n          <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" class=\"btn-select bg\" mode=\"md\">\r\n            <ion-select-option value=\"brown\">abc</ion-select-option>\r\n            <ion-select-option value=\"blonde\">def</ion-select-option>\r\n            <ion-select-option value=\"black\">ghi</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n  \r\n        <div class=\"info\">\r\n        <ion-label color=\"primary\" class=\"lbl-name\">Sydney Office</ion-label>\r\n        <ion-label color=\"primary\" class=\"lbl-add1\">Level 2, 77 Pacific Highway</ion-label>\r\n        <ion-label color=\"primary\" class=\"lbl-add2\">North Sydney New South Wales 2060</ion-label>\r\n        <ion-label color=\"primary\" class=\"lbl-phn\">Phone: 02 8913 9100</ion-label>\r\n        <ion-label color=\"primary\" class=\"lbl-fax\">Fax: 1800 636 221</ion-label>\r\n        <ion-label color=\"primary\" class=\"lbl-email\">Email: ih@ihgroup.com.au</ion-label>\r\n        </div>\r\n\r\n      </div> -->\r\n  \r\n    </form>\r\n  \r\n  </ion-content>\r\n  \r\n  <ion-footer class=\"btns-footer\">\r\n    <ion-row class=\"row-footer\">\r\n      <ion-col class=\"col-footer border-R\">\r\n        <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n          <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col class=\"col-footer border-L\">\r\n        <ion-button expand=\"full\" class=\"btn-next\" (click)=\"vehicleNext()\">\r\n          <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-footer>"

/***/ }),

/***/ "./src/app/vehicle/vehicle.module.ts":
/*!*******************************************!*\
  !*** ./src/app/vehicle/vehicle.module.ts ***!
  \*******************************************/
/*! exports provided: VehiclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclePageModule", function() { return VehiclePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_mock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vehicle_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vehicle.page */ "./src/app/vehicle/vehicle.page.ts");










const routes = [
    {
        path: '',
        component: _vehicle_page__WEBPACK_IMPORTED_MODULE_9__["VehiclePage"]
    }
];
let VehiclePageModule = class VehiclePageModule {
};
VehiclePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_vehicle_page__WEBPACK_IMPORTED_MODULE_9__["VehiclePage"]],
        providers: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"], _common_mock_service__WEBPACK_IMPORTED_MODULE_5__["CommonMockService"],
        ],
    })
], VehiclePageModule);



/***/ }),

/***/ "./src/app/vehicle/vehicle.page.scss":
/*!*******************************************!*\
  !*** ./src/app/vehicle/vehicle.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUvdmVoaWNsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/vehicle/vehicle.page.ts":
/*!*****************************************!*\
  !*** ./src/app/vehicle/vehicle.page.ts ***!
  \*****************************************/
/*! exports provided: VehiclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclePage", function() { return VehiclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common-mock.service */ "./src/app/common-mock.service.ts");







let VehiclePage = class VehiclePage {
    constructor(navCtrl, router, _cS, formBuilder, statusBar, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.actionSheetCtrl = actionSheetCtrl;
        this.vehicle_fb();
        this.setClaimData();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    vehicle_fb() {
        this.vehicle_form = this.formBuilder.group({
            //policy_holder: [null, Validators.required],
            policy_Number: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tp_christian_policyholder: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tp_name_policyholder: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            contact_telephone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            contact_mobile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            contact_email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])]
        });
    }
    vehicleNext() {
        for (let v in this.vehicle_form.controls) {
            this.vehicle_form.controls[v].markAsTouched();
        }
        if (this.vehicle_form.valid) {
            const step0 = {
                "ClaimNumber": localStorage.getItem('ClaimNumber'),
                //"policy_holder": this.vehicle_form.value.policy_holder,
                "policy_Number": this.vehicle_form.value.policy_Number,
                "first_name": this.vehicle_form.value.tp_christian_policyholder,
                "last_name": this.vehicle_form.value.tp_name_policyholder,
                "telephone": this.vehicle_form.value.contact_telephone,
                "mobile": this.vehicle_form.value.contact_mobile,
                "email": this.vehicle_form.value.contact_email,
            };
            if (this.vehicle_form.value.policy_holder == 'true') {
                this._cS.post_API(this._cS.URL_Vehicle_Claim_FirstStep_Post(), step0)
                    .subscribe((data) => {
                    if (data.status == 0) {
                        this.Claim_number = data.data;
                        localStorage.setItem('ClaimNumber', this.Claim_number);
                        this.router.navigate(['/vehicle-step1']);
                    }
                    else {
                    }
                }, err => {
                });
            }
            else {
            }
        }
    }
    ngOnInit() {
    }
    setClaimData() {
        var claimNumber = localStorage.getItem('ClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe((data) => {
                if (data.status == 0) {
                    this.editClaimData = data.data;
                    this.vehicle_form.setValue({
                        policy_holder: this.editClaimData.policy_holder,
                        policy_Number: this.editClaimData.policy_number,
                        tp_christian_policyholder: this.editClaimData.tp_christian_policyholder,
                        tp_name_policyholder: this.editClaimData.tp_name_policyholder,
                        contact_telephone: this.editClaimData.contact_telephone,
                        contact_mobile: this.editClaimData.contact_mobile,
                        contact_email: this.editClaimData.contact_email,
                    });
                }
            });
        }
    }
    back() {
        this.navCtrl.pop();
    }
    detail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                mode: 'md',
                header: 'Lorem ipsum dolor sit, sed consectetur adipiscing.Dolor sit amet, sed consectetur adipiscing.',
                buttons: [{
                        text: 'Cancel',
                        //icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                ]
            });
            yield actionSheet.present();
        });
    }
};
VehiclePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] }
];
VehiclePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicle',
        template: __webpack_require__(/*! raw-loader!./vehicle.page.html */ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle.page.html"),
        styles: [__webpack_require__(/*! ./vehicle.page.scss */ "./src/app/vehicle/vehicle.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]])
], VehiclePage);



/***/ })

}]);
//# sourceMappingURL=vehicle-vehicle-module-es2015.js.map