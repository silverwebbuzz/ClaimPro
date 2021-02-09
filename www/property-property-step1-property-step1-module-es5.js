(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["property-property-step1-property-step1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/property/property-step1/property-step1.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/property/property-step1/property-step1.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <!-- <ion-buttons>\r\n        <ion-button color=\"primary\" (click)=\"back()\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons> -->\r\n      <ion-title color=\"primary\" class=\"head\">Client / Policyholder</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content padding>\r\n  \r\n    <form [formGroup]=\"property_form_step1\" autocomplete=\"off\">\r\n  \r\n      <ion-item lines=\"none\" class=\"item-dropdown\">\r\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">How would you like to be contacted?</ion-label>\r\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"preferred_communication\" class=\"btn-select bg\" mode=\"md\">\r\n            <ion-select-option *ngFor=\"let opt of preferred_communication | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n          <!-- <ion-select-option value=\"Telephone\">Telephone</ion-select-option>\r\n          <ion-select-option value=\"Email\">Email</ion-select-option>\r\n          <ion-select-option value=\"SMS\">SMS</ion-select-option>\r\n          <ion-select-option value=\"Letter\">Letter</ion-select-option> -->\r\n        </ion-select>\r\n      </ion-item>\r\n  \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"property_form_step1.controls.preferred_communication.hasError('required') && property_form_step1.controls.preferred_communication.touched\">\r\n        <p class=\"content\">Please Select Required Field!</p>\r\n      </ion-item>\r\n  \r\n      <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">Client type</ion-label>\r\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"type_entitiy\" class=\"btn-select bg\" mode=\"md\">\r\n            <ion-select-option *ngFor=\"let opt of client_type | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n          <!-- <ion-select-option value=\"Personal\">Personal</ion-select-option>\r\n          <ion-select-option value=\"Commercial\">Commercial</ion-select-option>\r\n          <ion-select-option value=\"Government\">Government</ion-select-option>\r\n          <ion-select-option value=\"Association\">Association</ion-select-option> -->\r\n        </ion-select>\r\n      </ion-item>\r\n  \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"property_form_step1.controls.type_entitiy.hasError('required') && property_form_step1.controls.type_entitiy.touched\">\r\n        <p class=\"content\">Please Select Required Field!</p>\r\n      </ion-item>\r\n\r\n        <div *ngIf=\"property_form_step1.get('type_entitiy').value &&  property_form_step1.get('type_entitiy').value != '1001'\">\r\n        <ion-item lines=\"none\" class=\"input-item\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"client_company\" color=\"primary\" class=\"input-box\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"property_form_step1.controls.client_company.hasError('required') && property_form_step1.controls.client_company.touched\">\r\n        <p class=\"content\">Please Fill Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n  \r\n    </form>\r\n  \r\n  </ion-content>\r\n  \r\n  <ion-footer class=\"btns-footer\">\r\n    <ion-row class=\"row-footer\">\r\n      <ion-col class=\"col-footer border-R\">\r\n        <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n          <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col class=\"col-footer border-L\">\r\n        <ion-button expand=\"full\" class=\"btn-next\" (click)=\"propertyStep1Next()\">\r\n          <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-footer>"

/***/ }),

/***/ "./src/app/property/property-step1/property-step1.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/property/property-step1/property-step1.module.ts ***!
  \******************************************************************/
/*! exports provided: PropertyStep1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyStep1PageModule", function() { return PropertyStep1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _property_step1_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./property-step1.page */ "./src/app/property/property-step1/property-step1.page.ts");










var routes = [
    {
        path: '',
        component: _property_step1_page__WEBPACK_IMPORTED_MODULE_9__["PropertyStep1Page"]
    }
];
var PropertyStep1PageModule = /** @class */ (function () {
    function PropertyStep1PageModule() {
    }
    PropertyStep1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_property_step1_page__WEBPACK_IMPORTED_MODULE_9__["PropertyStep1Page"]],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__["CommonMockService"],
            ],
        })
    ], PropertyStep1PageModule);
    return PropertyStep1PageModule;
}());



/***/ }),

/***/ "./src/app/property/property-step1/property-step1.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/property/property-step1/property-step1.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L3Byb3BlcnR5LXN0ZXAxL3Byb3BlcnR5LXN0ZXAxLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/property/property-step1/property-step1.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/property/property-step1/property-step1.page.ts ***!
  \****************************************************************/
/*! exports provided: PropertyStep1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyStep1Page", function() { return PropertyStep1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");







var PropertyStep1Page = /** @class */ (function () {
    /* dropdown option Variable End */
    function PropertyStep1Page(navCtrl, router, _cS, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.property_step1_fb();
        this.formControlValueChanged();
        this.setClaimData();
    }
    PropertyStep1Page.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    PropertyStep1Page.prototype.property_step1_fb = function () {
        this.property_form_step1 = this.formBuilder.group({
            preferred_communication: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            type_entitiy: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            client_company: [null]
        });
    };
    PropertyStep1Page.prototype.formControlValueChanged = function () {
        var _this = this;
        this.property_form_step1.get('type_entitiy')
            .valueChanges.subscribe(function (val) {
            var client_company = _this.property_form_step1.get('client_company');
            if (val == "1001") {
                client_company.patchValue(null);
                client_company.clearValidators();
                client_company.updateValueAndValidity();
            }
            else {
                client_company.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
        });
    };
    PropertyStep1Page.prototype.propertyStep1Next = function () {
        var _this = this;
        for (var v in this.property_form_step1.controls) {
            this.property_form_step1.controls[v].markAsTouched();
        }
        if (this.property_form_step1.valid) {
            var step1 = {
                "step": 'step1',
                "ClaimNumber": localStorage.getItem('PropertyClaimNumber'),
                "contacted": this.property_form_step1.value.preferred_communication,
                "client_type": this.property_form_step1.value.type_entitiy,
                "business_name": this.property_form_step1.value.client_company,
            };
            this._cS.put_API(this._cS.URL_Property_Claim_Post(), step1)
                .subscribe(function (data) {
                if (data.status == 0) {
                    _this.setClaimData();
                    _this.router.navigate(['/property-step2']);
                }
                else {
                }
            }, function (err) {
            });
        }
    };
    PropertyStep1Page.prototype.setClaimData = function () {
        var _this = this;
        var claimNumber = localStorage.getItem('PropertyClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe(function (data) {
                if (data.status == 0) {
                    console.log("editdate", data);
                    _this.editClaimData = data.data;
                    if (_this.editClaimData.preferred_communication) {
                        var preferred_communication = JSON.parse(_this.editClaimData.preferred_communication);
                        for (var preferred_communication_set in preferred_communication) {
                        }
                    }
                    else {
                        preferred_communication_set = null;
                    }
                    if (_this.editClaimData.type_entitiy) {
                        var type_entitiyArry = JSON.parse(_this.editClaimData.type_entitiy);
                        for (var type_entitiy_set in type_entitiyArry) {
                        }
                    }
                    else {
                        type_entitiy_set = null;
                    }
                    _this.property_form_step1.setValue({
                        preferred_communication: preferred_communication_set,
                        type_entitiy: type_entitiy_set,
                        client_company: _this.editClaimData.client_company,
                    });
                }
            });
        }
    };
    PropertyStep1Page.prototype.ngOnInit = function () {
        var _this = this;
        // DropDown Option List Value 
        /* Step - 1 How would you like to be contacted */
        this._cS.getoptionvalue_API(5)
            .subscribe(function (data) {
            if (data.status == 0) {
                _this.preferred_communication = data.data;
            }
        });
        /* Step - 1 Client type */
        this._cS.getoptionvalue_API(1)
            .subscribe(function (data) {
            if (data.status == 0) {
                _this.client_type = data.data;
            }
        });
    };
    PropertyStep1Page.prototype.back = function () {
        this.navCtrl.pop();
    };
    PropertyStep1Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
    ]; };
    PropertyStep1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property-step1',
            template: __webpack_require__(/*! raw-loader!./property-step1.page.html */ "./node_modules/raw-loader/index.js!./src/app/property/property-step1/property-step1.page.html"),
            styles: [__webpack_require__(/*! ./property-step1.page.scss */ "./src/app/property/property-step1/property-step1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
    ], PropertyStep1Page);
    return PropertyStep1Page;
}());



/***/ })

}]);
//# sourceMappingURL=property-property-step1-property-step1-module-es5.js.map