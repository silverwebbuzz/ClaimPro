(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["other-step2-step2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/other/step2/step2.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/other/step2/step2.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Incident details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"other_form_step2\" autocomplete=\"off\">\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Where did this occur?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"where_loss_damage\"\r\n        class=\"btn-select bg\" mode=\"md\" (ionChange)=\"occurchange($event.target.value)\">\r\n        <ion-select-option *ngFor=\"let opt of where_loss_damage | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n        <!-- <ion-select-option value=\"Risk Address\">Risk Address</ion-select-option>\r\n        <ion-select-option value=\"Another Location\">Another Location</ion-select-option>\r\n        <ion-select-option value=\"In Transit\">In Transit</ion-select-option>\r\n        <ion-select-option value=\"Other\">Other</ion-select-option> -->\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"other_form_step2.controls.where_loss_damage.hasError('required') && other_form_step2.controls.where_loss_damage.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Another Location, Risk Address -->\r\n    <div\r\n      *ngIf=\"other_form_step2.get('where_loss_damage').value == '1343' || other_form_step2.get('where_loss_damage').value == '1344'\">\r\n      <ion-label class=\"lbl-contact add-margin\">Address details</ion-label>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Street</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"risk_street\" color=\"primary\" class=\"input-box\" id=\"address_line_1\">\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"other_form_step2.controls.risk_street.hasError('required') && other_form_step2.controls.risk_street.touched\">\r\n        <p class=\"content\">Please Enter Street!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Suburb/Town</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"risk_suburb\" color=\"primary\" class=\"input-box\" id=\"city\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"other_form_step2.controls.risk_suburb.hasError('required') && other_form_step2.controls.risk_suburb.touched\">\r\n        <p class=\"content\">Please Enter Town!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">State</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"risk_state\" color=\"primary\" class=\"input-box\" id=\"state\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"other_form_step2.controls.risk_state.hasError('required') && other_form_step2.controls.risk_state.touched\">\r\n        <p class=\"content\">Please Enter State!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">PostCode</ion-label>\r\n        <ion-input type=\"number\" formControlName=\"risk_postcode\" color=\"primary\" class=\"input-box\" id=\"postcode\">\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"other_form_step2.controls.risk_postcode.hasError('required') && other_form_step2.controls.risk_postcode.touched\">\r\n        <p class=\"content\">Please Enter Postcode!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Country</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"risk_country\" color=\"primary\" class=\"input-box\" id=\"country\">\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"other_form_step2.controls.risk_country.hasError('required') && other_form_step2.controls.risk_country.touched\">\r\n        <p class=\"content\">Please Enter Country!</p>\r\n      </ion-item>\r\n\r\n    </div>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"other_form_step2.get('where_loss_damage').value == '1346'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Please Specify</ion-label>\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"where_loss_damage_other\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"other_form_step2.controls.where_loss_damage_other.hasError('required') && other_form_step2.controls.where_loss_damage_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">How did this occur?</ion-label>\r\n      <ion-textarea rows=\"3\" formControlName=\"reported_circumstances\" type=\"text\" color=\"primary\" class=\"input-box\">\r\n      </ion-textarea>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"other_form_step2.controls.reported_circumstances.hasError('required') && other_form_step2.controls.reported_circumstances.touched\">\r\n      <p class=\"content\">Please Enter Required Field!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"other_form_step2.controls.reported_circumstances.hasError('maxlength') && other_form_step2.controls.reported_circumstances.touched\">\r\n      <p class=\"content\">Allow Only 400 Characters!</p>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">When did the loss/damage occur?</ion-label>\r\n      <ion-datetime placeholder=\"Select Date\" class=\"input-box box\" formControlName=\"date_loss\"\r\n        displayFormat=\"DD MMM YYYY\" min=\"2016-01-01\"></ion-datetime>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"other_form_step2.controls.date_loss.hasError('required') && other_form_step2.controls.date_loss.touched\">\r\n      <p class=\"content\">Please Select Date!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">What time did this occur?</ion-label>\r\n      <ion-datetime placeholder=\"Select Time\" class=\"input-box box\" formControlName=\"time_loss\" displayFormat=\"hh:mm A\">\r\n      </ion-datetime>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"other_form_step2.controls.time_loss.hasError('required') && other_form_step2.controls.time_loss.touched\">\r\n      <p class=\"content\">Please Select Time!</p>\r\n    </ion-item>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" size=\"large\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" size=\"large\" class=\"btn-next\" (click)=\"otherStep2Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/other/step2/step2.module.ts":
/*!*********************************************!*\
  !*** ./src/app/other/step2/step2.module.ts ***!
  \*********************************************/
/*! exports provided: Step2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2PageModule", function() { return Step2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _step2_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./step2.page */ "./src/app/other/step2/step2.page.ts");










var routes = [
    {
        path: '',
        component: _step2_page__WEBPACK_IMPORTED_MODULE_9__["Step2Page"]
    }
];
var Step2PageModule = /** @class */ (function () {
    function Step2PageModule() {
    }
    Step2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_step2_page__WEBPACK_IMPORTED_MODULE_9__["Step2Page"]],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__["CommonMockService"],
            ],
        })
    ], Step2PageModule);
    return Step2PageModule;
}());



/***/ }),

/***/ "./src/app/other/step2/step2.page.scss":
/*!*********************************************!*\
  !*** ./src/app/other/step2/step2.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL290aGVyL3N0ZXAyL3N0ZXAyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/other/step2/step2.page.ts":
/*!*******************************************!*\
  !*** ./src/app/other/step2/step2.page.ts ***!
  \*******************************************/
/*! exports provided: Step2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2Page", function() { return Step2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var Step2Page = /** @class */ (function () {
    /* dropdown option Variable End */
    function Step2Page(navCtrl, router, _cS, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.index = 0;
        this.other_step2_fb();
        this.formControlValueChanged();
        this.setClaimData();
    }
    Step2Page.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    Step2Page.prototype.other_step2_fb = function () {
        this.other_form_step2 = this.formBuilder.group({
            where_loss_damage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            risk_street: [null],
            risk_suburb: [null],
            risk_state: [null],
            risk_postcode: [null],
            risk_country: [null],
            where_loss_damage_other: [null],
            reported_circumstances: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(400), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            date_loss: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            time_loss: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Step2Page.prototype.formControlValueChanged = function () {
        var _this = this;
        this.other_form_step2.get('where_loss_damage')
            .valueChanges.subscribe(function (val) {
            var risk_street = _this.other_form_step2.get('risk_street');
            var risk_suburb = _this.other_form_step2.get('risk_suburb');
            var risk_state = _this.other_form_step2.get('risk_state');
            var risk_postcode = _this.other_form_step2.get('risk_postcode');
            var risk_country = _this.other_form_step2.get('risk_country');
            var where_loss_damage_other = _this.other_form_step2.get('where_loss_damage_other');
            if (val == "1343" || val == "1344") {
                risk_street.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                risk_suburb.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                risk_state.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                risk_postcode.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                risk_country.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                risk_street.patchValue(null);
                risk_street.clearValidators();
                risk_street.updateValueAndValidity();
                risk_suburb.patchValue(null);
                risk_suburb.clearValidators();
                risk_suburb.updateValueAndValidity();
                risk_state.patchValue(null);
                risk_state.clearValidators();
                risk_state.updateValueAndValidity();
                risk_postcode.patchValue(null);
                risk_postcode.clearValidators();
                risk_postcode.updateValueAndValidity();
                risk_country.patchValue(null);
                risk_country.clearValidators();
                risk_country.updateValueAndValidity();
            }
            if (val == "1346") {
                where_loss_damage_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                where_loss_damage_other.patchValue(null);
                where_loss_damage_other.clearValidators();
                where_loss_damage_other.updateValueAndValidity();
            }
        });
    };
    Step2Page.prototype.otherStep2Next = function () {
        var _this = this;
        for (var v in this.other_form_step2.controls) {
            this.other_form_step2.controls[v].markAsTouched();
        }
        if (this.other_form_step2.valid) {
            /* riskAddres Start */
            var riskStreetValue = null;
            var riskSuburbValue = null;
            var riskPostCodeValue = null;
            var riskStateValue = null;
            var riskcountryValue = null;
            if (document.getElementById("address_line_1")) {
                riskStreetValue = document.getElementById("address_line_1").value;
            }
            if (document.getElementById("city")) {
                riskSuburbValue = document.getElementById("city").value;
            }
            if (document.getElementById("postcode")) {
                riskPostCodeValue = document.getElementById("postcode").value;
            }
            if (document.getElementById("state")) {
                riskStateValue = document.getElementById("state").value;
            }
            if (document.getElementById("country")) {
                riskcountryValue = document.getElementById("country").value;
            }
            /* riskAddres End */
            var step2 = {
                "step": 'step2',
                "ClaimNumber": localStorage.getItem('OtherClaimNumber'),
                "where_loss_damage": this.other_form_step2.value.where_loss_damage,
                "risk_street": riskStreetValue,
                "risk_suburb": riskSuburbValue,
                "risk_state": riskStateValue,
                "risk_postcode": riskPostCodeValue,
                "risk_country": riskcountryValue,
                "where_loss_damage_other": this.other_form_step2.value.where_loss_damage_other,
                "reported_circumstances": this.other_form_step2.value.reported_circumstances,
                "date_loss": this.other_form_step2.value.date_loss,
                "time_loss": this.other_form_step2.value.time_loss
            };
            console.log("00000", step2);
            this._cS.put_API(this._cS.URL_Other_Claim_Post(), step2)
                .subscribe(function (data) {
                if (data.status == 0) {
                    console.log("99999999", data);
                    _this.setClaimData();
                    _this.router.navigate(['/step3']);
                }
                else {
                }
            }, function (err) {
            });
        }
    };
    Step2Page.prototype.ngOnInit = function () {
        var _this = this;
        var script = document.createElement("script");
        script.src = "https://api.addressfinder.io/assets/v3/widget.js";
        script.async = true;
        document.body.appendChild(script);
        // DropDown Option List Value 
        /* Where did the loss/damage occur? */
        this._cS.getoptionvalue_API(48)
            .subscribe(function (data) {
            if (data.status == 0) {
                _this.where_loss_damage = data.data;
            }
        });
    };
    Step2Page.prototype.occurchange = function ($event) {
        var _this = this;
        if ($event == "1343" || $event == "1344") {
            setTimeout(function () {
                _this.riskAddress();
            }, 1000);
        }
    };
    Step2Page.prototype.back = function () {
        this.navCtrl.pop();
    };
    Step2Page.prototype.setClaimData = function () {
        var _this = this;
        var claimNumber = localStorage.getItem('OtherClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe(function (data) {
                if (data.status == 0) {
                    _this.editClaimData = data.data;
                    if (_this.editClaimData.where_loss_damage) {
                        var where_loss_damage = JSON.parse(_this.editClaimData.where_loss_damage);
                        for (var where_loss_damage_set in where_loss_damage) {
                        }
                    }
                    else {
                        where_loss_damage_set = null;
                    }
                    _this.other_form_step2.setValue({
                        where_loss_damage: where_loss_damage_set,
                        where_loss_damage_other: _this.editClaimData.where_loss_damage_other,
                        risk_street: _this.editClaimData.risk_street,
                        risk_suburb: _this.editClaimData.risk_suburb,
                        risk_state: _this.editClaimData.risk_state,
                        risk_postcode: _this.editClaimData.risk_postcode,
                        risk_country: _this.editClaimData.risk_country,
                        reported_circumstances: _this.editClaimData.reported_circumstances,
                        date_loss: _this.editClaimData.date_loss,
                        time_loss: _this.editClaimData.time_loss,
                    });
                }
            });
        }
    };
    Step2Page.prototype.riskAddress = function () {
        var _this = this;
        var widget = new AddressFinder.Widget(document.getElementById("address_line_1"), "PVW639JF4ET8ALGDHNKB", "AU", {});
        var returnResult = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        widget.on("result:select", function (fullAddress, metaData) {
            var selected = new AddressFinder.NZSelectedAddress(fullAddress, metaData);
            var SpaceCount = selected.originalAddressLines[1].split(" ").length;
            var setnum = SpaceCount - 2;
            var mainadddate = selected.originalAddressLines[1].split(" ").splice(-SpaceCount);
            var adddate = selected.originalAddressLines[1].split(" ").splice(setnum);
            this.addstate = adddate[0];
            this.addpincode = adddate[1];
            var index = mainadddate.indexOf(this.addstate);
            if (index !== -1) {
                mainadddate.splice(index, 1);
            }
            var index2 = mainadddate.indexOf(this.addpincode);
            if (index2 !== -1) {
                mainadddate.splice(index2, 2);
            }
            var returnJSON = {
                mainadddate: mainadddate,
                metaData: metaData
            };
            returnResult.next(returnJSON);
        });
        returnResult.subscribe(function (val) {
            if (val) {
                var address_line_1 = val.metaData.address_line_1;
                var mainadddate = val.mainadddate.join(' ');
                var postcode = val.metaData.postcode;
                var state_territory = val.metaData.state_territory;
                var country1 = "Australia";
                var JSON = {
                    risk_street: address_line_1,
                    risk_suburb: mainadddate,
                    risk_postcode: postcode,
                    risk_state: state_territory,
                    risk_country: country1
                };
                _this.other_form_step2.patchValue(JSON);
            }
        });
    };
    Step2Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] }
    ]; };
    Step2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-step2',
            template: __webpack_require__(/*! raw-loader!./step2.page.html */ "./node_modules/raw-loader/index.js!./src/app/other/step2/step2.page.html"),
            styles: [__webpack_require__(/*! ./step2.page.scss */ "./src/app/other/step2/step2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
    ], Step2Page);
    return Step2Page;
}());



/***/ })

}]);
//# sourceMappingURL=other-step2-step2-module-es5.js.map