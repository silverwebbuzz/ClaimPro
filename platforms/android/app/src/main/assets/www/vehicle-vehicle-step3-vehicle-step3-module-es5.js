(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle-vehicle-step3-vehicle-step3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle-step3/vehicle-step3.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicle/vehicle-step3/vehicle-step3.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Incident details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"vehicle_form_step3\" autocomplete=\"off\">\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Where did the loss/damage occur?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"where_loss_damage\" class=\"btn-select bg\" mode=\"md\" (ionChange)=\"occurchange($event.target.value)\">\r\n          <ion-select-option *ngFor=\"let opt of where_loss_damage | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n        <!-- <ion-select-option value=\"Risk Address\">Risk Address</ion-select-option>\r\n        <ion-select-option value=\"Another Location\">Another Location</ion-select-option>\r\n        <ion-select-option value=\"In Transit\">In Transit</ion-select-option>\r\n        <ion-select-option value=\"Other\">Other</ion-select-option> -->\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"vehicle_form_step3.controls.where_loss_damage.hasError('required') && vehicle_form_step3.controls.where_loss_damage.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Another Location, Risk Address -->\r\n    <div\r\n      *ngIf=\"vehicle_form_step3.get('where_loss_damage').value == '1343' || vehicle_form_step3.get('where_loss_damage').value == '1344'\">\r\n      <ion-label class=\"lbl-contact add-margin\">Address details</ion-label>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Street</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"risk_street\" color=\"primary\" class=\"input-box\" id=\"address_line_1\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"vehicle_form_step3.controls.risk_street.hasError('required') && vehicle_form_step3.controls.risk_street.touched\">\r\n        <p class=\"content\">Please Enter Street!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Suburb/Town</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"risk_suburb\" color=\"primary\" class=\"input-box\" id=\"city\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"vehicle_form_step3.controls.risk_suburb.hasError('required') && vehicle_form_step3.controls.risk_suburb.touched\">\r\n        <p class=\"content\">Please Enter Town!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">State</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"risk_state\" color=\"primary\" class=\"input-box\" id=\"state\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"vehicle_form_step3.controls.risk_state.hasError('required') && vehicle_form_step3.controls.risk_state.touched\">\r\n        <p class=\"content\">Please Enter State!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">PostCode</ion-label>\r\n        <ion-input type=\"number\" formControlName=\"risk_postcode\" color=\"primary\" class=\"input-box\" id=\"postcode\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"vehicle_form_step3.controls.risk_postcode.hasError('required') && vehicle_form_step3.controls.risk_postcode.touched\">\r\n        <p class=\"content\">Please Enter Postcode!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Country</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"risk_country\" color=\"primary\" class=\"input-box\" id=\"country\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"vehicle_form_step3.controls.risk_country.hasError('required') && vehicle_form_step3.controls.risk_country.touched\">\r\n        <p class=\"content\">Please Enter Country!</p>\r\n      </ion-item>\r\n\r\n    </div>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"vehicle_form_step3.get('where_loss_damage').value == '1346'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"where_loss_damage_other\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"vehicle_form_step3.controls.where_loss_damage_other.hasError('required') && vehicle_form_step3.controls.where_loss_damage_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">When did this occur?</ion-label>\r\n      <ion-datetime placeholder=\"Select Date\" class=\"input-box box\" formControlName=\"date_loss\"\r\n        displayFormat=\"DD MMM YYYY\" min=\"2016-01-01\" max=\"2039-12-31\"></ion-datetime>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"vehicle_form_step3.controls.date_loss.hasError('required') && vehicle_form_step3.controls.date_loss.touched\">\r\n      <p class=\"content\">Please Select Date!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">What time did this occur?</ion-label>\r\n        <ion-datetime placeholder=\"Select Time\" class=\"input-box box\" formControlName=\"time_loss\" displayFormat=\"hh:mm A\">\r\n        </ion-datetime>\r\n      </ion-item>\r\n    \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"vehicle_form_step3.controls.time_loss.hasError('required') && vehicle_form_step3.controls.time_loss.touched\">\r\n        <p class=\"content\">Please Select Time!</p>\r\n      </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Damage arose from</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"vehicle_damage_arose\" class=\"btn-select bg\" mode=\"md\" >\r\n        <ion-select-option value=\"Windscreen/Glass\">Windscreen/Glass</ion-select-option>\r\n        <ion-select-option value=\"Fire\">Fire</ion-select-option>\r\n        <ion-select-option value=\"Weather\">Weather</ion-select-option>\r\n        <ion-select-option value=\"Theft\">Theft</ion-select-option>\r\n        <ion-select-option value=\"Impact\">Impact</ion-select-option>\r\n        <ion-select-option value=\"Collision\">Collision</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"vehicle_form_step3.controls.vehicle_damage_arose.hasError('required') && vehicle_form_step3.controls.vehicle_damage_arose.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\" (click)=\"vehicleStep3Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/vehicle/vehicle-step3/vehicle-step3.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step3/vehicle-step3.module.ts ***!
  \***************************************************************/
/*! exports provided: VehicleStep3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleStep3PageModule", function() { return VehicleStep3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vehicle_step3_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vehicle-step3.page */ "./src/app/vehicle/vehicle-step3/vehicle-step3.page.ts");










var routes = [
    {
        path: '',
        component: _vehicle_step3_page__WEBPACK_IMPORTED_MODULE_9__["VehicleStep3Page"]
    }
];
var VehicleStep3PageModule = /** @class */ (function () {
    function VehicleStep3PageModule() {
    }
    VehicleStep3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vehicle_step3_page__WEBPACK_IMPORTED_MODULE_9__["VehicleStep3Page"]],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__["CommonMockService"],
            ],
        })
    ], VehicleStep3PageModule);
    return VehicleStep3PageModule;
}());



/***/ }),

/***/ "./src/app/vehicle/vehicle-step3/vehicle-step3.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step3/vehicle-step3.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUvdmVoaWNsZS1zdGVwMy92ZWhpY2xlLXN0ZXAzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/vehicle/vehicle-step3/vehicle-step3.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step3/vehicle-step3.page.ts ***!
  \*************************************************************/
/*! exports provided: VehicleStep3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleStep3Page", function() { return VehicleStep3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var VehicleStep3Page = /** @class */ (function () {
    /* dropdown option Variable End */
    function VehicleStep3Page(navCtrl, router, _cS, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.vehicle_step3_fb();
        this.setClaimData();
        this.formControlValueChanged();
    }
    VehicleStep3Page.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    VehicleStep3Page.prototype.vehicle_step3_fb = function () {
        this.vehicle_form_step3 = this.formBuilder.group({
            where_loss_damage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            where_loss_damage_other: [null],
            risk_street: [null],
            risk_suburb: [null],
            risk_state: [null],
            risk_postcode: [null],
            risk_country: [null],
            date_loss: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            time_loss: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            vehicle_damage_arose: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    VehicleStep3Page.prototype.formControlValueChanged = function () {
        var _this = this;
        this.vehicle_form_step3.get('where_loss_damage')
            .valueChanges.subscribe(function (val) {
            var risk_street = _this.vehicle_form_step3.get('risk_street');
            var risk_suburb = _this.vehicle_form_step3.get('risk_suburb');
            var risk_state = _this.vehicle_form_step3.get('risk_state');
            var risk_postcode = _this.vehicle_form_step3.get('risk_postcode');
            var risk_country = _this.vehicle_form_step3.get('risk_country');
            var where_loss_damage_other = _this.vehicle_form_step3.get('where_loss_damage_other');
            if (val == "1343" || val == "1344") {
                risk_street.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                risk_suburb.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                risk_state.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                risk_postcode.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                risk_country.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
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
                where_loss_damage_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                where_loss_damage_other.patchValue(null);
                where_loss_damage_other.clearValidators();
                where_loss_damage_other.updateValueAndValidity();
            }
        });
    };
    VehicleStep3Page.prototype.vehicleStep3Next = function () {
        var _this = this;
        for (var v in this.vehicle_form_step3.controls) {
            this.vehicle_form_step3.controls[v].markAsTouched();
        }
        if (this.vehicle_form_step3.valid) {
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
            var step3 = {
                "step": 'step3',
                "ClaimNumber": localStorage.getItem('ClaimNumber'),
                "where_loss_damage": this.vehicle_form_step3.value.where_loss_damage,
                "risk_street": riskStreetValue,
                "risk_suburb": riskSuburbValue,
                "risk_state": riskStateValue,
                "risk_postcode": riskPostCodeValue,
                "risk_country": riskcountryValue,
                "where_loss_damage_other": this.vehicle_form_step3.value.where_loss_damage_other,
                "date_loss": this.vehicle_form_step3.value.date_loss,
                "time_loss": this.vehicle_form_step3.value.time_loss,
                "vehicle_damage_arose": this.vehicle_form_step3.value.vehicle_damage_arose
            };
            this._cS.put_API(this._cS.URL_Vehicle_Claim_Post(), step3)
                .subscribe(function (data) {
                if (data.status == 0) {
                    _this.setClaimData();
                    //localStorage.setItem('damage_type', this.vehicle_form_step3.value.vehicle_damage_arose);
                    if (_this.vehicle_form_step3.value.vehicle_damage_arose == "Windscreen/Glass") {
                        _this.router.navigate(['/windscreen-glass']);
                    }
                    if (_this.vehicle_form_step3.value.vehicle_damage_arose == "Fire") {
                        _this.router.navigate(['/fire']);
                    }
                    if (_this.vehicle_form_step3.value.vehicle_damage_arose == "Weather") {
                        _this.router.navigate(['/whether']);
                    }
                    if (_this.vehicle_form_step3.value.vehicle_damage_arose == "Theft") {
                        _this.router.navigate(['/theft']);
                    }
                    if (_this.vehicle_form_step3.value.vehicle_damage_arose == "Impact") {
                        _this.router.navigate(['/impact']);
                    }
                    if (_this.vehicle_form_step3.value.vehicle_damage_arose == "Collision") {
                        _this.router.navigate(['/collision']);
                    }
                }
                else {
                }
            }, function (err) {
            });
        }
    };
    VehicleStep3Page.prototype.ngOnInit = function () {
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
    VehicleStep3Page.prototype.occurchange = function ($event) {
        var _this = this;
        if ($event == "1343" || $event == "1344") {
            setTimeout(function () {
                _this.riskAddress();
            }, 1000);
        }
    };
    VehicleStep3Page.prototype.riskAddress = function () {
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
                _this.vehicle_form_step3.patchValue(JSON);
            }
        });
    };
    VehicleStep3Page.prototype.next = function () {
        // localStorage.setItem('damage_type',this.vehicle_form_step3.value.vehicle_damage_arose);
        // this.router.navigate(['/vehicle-step4']);
    };
    VehicleStep3Page.prototype.setClaimData = function () {
        var _this = this;
        var claimNumber = localStorage.getItem('ClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe(function (data) {
                if (data.status == 0) {
                    console.log("editdate", data);
                    _this.editClaimData = data.data;
                    if (_this.editClaimData.where_loss_damage) {
                        var where_loss_damage = JSON.parse(_this.editClaimData.where_loss_damage);
                        for (var where_loss_damage_set in where_loss_damage) {
                        }
                    }
                    else {
                        where_loss_damage_set = null;
                    }
                    _this.vehicle_form_step3.setValue({
                        where_loss_damage: where_loss_damage_set,
                        where_loss_damage_other: _this.editClaimData.where_loss_damage_other,
                        risk_street: _this.editClaimData.risk_street,
                        risk_suburb: _this.editClaimData.risk_suburb,
                        risk_state: _this.editClaimData.risk_state,
                        risk_postcode: _this.editClaimData.risk_postcode,
                        risk_country: _this.editClaimData.risk_country,
                        date_loss: _this.editClaimData.date_loss,
                        time_loss: _this.editClaimData.time_loss,
                        vehicle_damage_arose: _this.editClaimData.vehicle_damage_arose,
                    });
                }
            });
        }
    };
    VehicleStep3Page.prototype.back = function () {
        this.navCtrl.pop();
    };
    VehicleStep3Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
    ]; };
    VehicleStep3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle-step3',
            template: __webpack_require__(/*! raw-loader!./vehicle-step3.page.html */ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle-step3/vehicle-step3.page.html"),
            styles: [__webpack_require__(/*! ./vehicle-step3.page.scss */ "./src/app/vehicle/vehicle-step3/vehicle-step3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
    ], VehicleStep3Page);
    return VehicleStep3Page;
}());



/***/ })

}]);
//# sourceMappingURL=vehicle-vehicle-step3-vehicle-step3-module-es5.js.map