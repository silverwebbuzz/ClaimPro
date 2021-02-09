(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle-vehicle-step3-windscreen-glass-windscreen-glass-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle-step3/windscreen-glass/windscreen-glass.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicle/vehicle-step3/windscreen-glass/windscreen-glass.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n        <ion-button color=\"primary\" (click)=\"back()\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons> -->\r\n    <!-- {{damage_type}} -->\r\n    <ion-title color=\"primary\" class=\"head\">Windscreen/Glass</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"windscreen_glass_form\" autocomplete=\"off\">\r\n\r\n    <ion-label class=\"lbl-contact\">Windscreen/Glass Details</ion-label>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">How did this occur?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"vehicle_how_did_occur\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"Stone\">Stone</ion-select-option>\r\n        <ion-select-option value=\"Malicious Damage\">Malicious Damage</ion-select-option>\r\n        <ion-select-option value=\"Attempted Theft\">Attempted Theft</ion-select-option>\r\n        <ion-select-option value=\"Ball\">Ball</ion-select-option>\r\n        <ion-select-option value=\"Other\">Other</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"windscreen_glass_form.controls.vehicle_how_did_occur.hasError('required') && windscreen_glass_form.controls.vehicle_how_did_occur.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"windscreen_glass_form.get('vehicle_how_did_occur').value == 'Other'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"vehicle_how_did_occur_other\" class=\"input-box\">\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"windscreen_glass_form.controls.vehicle_how_did_occur_other.hasError('required') && windscreen_glass_form.controls.vehicle_how_did_occur_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <div class=\"div-que add-margin\">\r\n\r\n      <ion-label class=\"lbl-head\">Has the glass been repaired?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"has_glass_repaired\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n\r\n    </div>\r\n\r\n    <div class=\"div-Y\" *ngIf=\"this.windscreen_glass_form.get('has_glass_repaired').value == 'true'\">\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Name of contractor</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"contractor_name\" color=\"primary\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"windscreen_glass_form.controls.contractor_name.hasError('required') && windscreen_glass_form.controls.contractor_name.touched\">\r\n        <p class=\"content\">Please Enter Name!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Street</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"contractor_street\" color=\"primary\" class=\"input-box\" id=\"contractor_street\" (ionFocus)=\"contractorAddress()\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"windscreen_glass_form.controls.contractor_street.hasError('required') && windscreen_glass_form.controls.contractor_street.touched\">\r\n        <p class=\"content\">Please Enter Street!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Suburb/Town</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"contractor_suburb\" color=\"primary\" class=\"input-box\"  id=\"contractor_suburb\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"windscreen_glass_form.controls.contractor_suburb.hasError('required') && windscreen_glass_form.controls.contractor_suburb.touched\">\r\n        <p class=\"content\">Please Enter Town!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">PostCode</ion-label>\r\n        <ion-input type=\"number\" formControlName=\"contractor_post_code\" color=\"primary\" class=\"input-box\"  id=\"contractor_post_code\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"windscreen_glass_form.controls.contractor_post_code.hasError('required') && windscreen_glass_form.controls.contractor_post_code.touched\">\r\n        <p class=\"content\">Please Enter Postcode!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Cost</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"repair_cost\" color=\"primary\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"windscreen_glass_form.controls.repair_cost.hasError('required') && windscreen_glass_form.controls.repair_cost.touched\">\r\n        <p class=\"content\">Please Enter Cost!</p>\r\n      </ion-item>\r\n\r\n      <div class=\"div-que add-margin\">\r\n\r\n        <ion-label class=\"lbl-head\">Have you paid this cost?</ion-label>\r\n\r\n        <ion-radio-group formControlName=\"cost_paid\">\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">No</ion-label>\r\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n\r\n      </div>\r\n\r\n      <div class=\"div-Y\" *ngIf=\"this.windscreen_glass_form.get('cost_paid').value == 'true'\">\r\n\r\n          <div class=\"div-docs add-margin\">\r\n\r\n              <h3 *ngIf=\"attach_receipt_image.length == 0\" text-center>Please Select Image!</h3>\r\n      \r\n              <ion-list class=\"doc-list\">\r\n                  <ion-item lines=\"none\" class=\"doc-item\" *ngFor=\"let img of attach_receipt_image; index as pos\" text-wrap>\r\n                      <ion-thumbnail slot=\"start\">\r\n                          <ion-img *ngIf=\"img.fileIcon\" src=\"../../../assets/images/files.png\"></ion-img>\r\n                          <ion-img *ngIf=\"!img.fileIcon\" [src]=\"img.path\"></ion-img>\r\n                      </ion-thumbnail>\r\n                      <ion-label>\r\n                          {{ img.name }}\r\n                      </ion-label>\r\n                      <ion-button slot=\"end\" fill=\"clear\" (click)=\"delete_attach_receipt(img, pos)\">\r\n                          <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n                      </ion-button>\r\n                  </ion-item>\r\n              </ion-list>\r\n              <div class=\"upload-btn-wrapper\">\r\n                <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach receipt</ion-button>\r\n                <input type=\"file\" (change)=\"attach_receipt($event)\"\r\n                  accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n              </div>\r\n      \r\n             \r\n            </div>\r\n\r\n\r\n      </div>\r\n\r\n      <div class=\"div-N\" *ngIf=\"this.windscreen_glass_form.get('cost_paid').value == 'false'\">\r\n\r\n        <div class=\"div-docs add-margin\">\r\n\r\n          <h3 *ngIf=\"attach_invoice_image.length == 0\" text-center>Please Select Image!</h3>\r\n  \r\n          <ion-list class=\"doc-list\">\r\n              <ion-item lines=\"none\" class=\"doc-item\" *ngFor=\"let img of attach_invoice_image; index as pos\" text-wrap>\r\n                  <ion-thumbnail slot=\"start\">\r\n                      <ion-img *ngIf=\"img.fileIcon\" src=\"../../../assets/images/files.png\"></ion-img>\r\n                      <ion-img *ngIf=\"!img.fileIcon\" [src]=\"img.path\"></ion-img>\r\n                  </ion-thumbnail>\r\n                  <ion-label>\r\n                      {{ img.name }}\r\n                  </ion-label>\r\n                  <ion-button slot=\"end\" fill=\"clear\" (click)=\"delete_attach_invoice(img, pos)\">\r\n                      <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n                  </ion-button>\r\n              </ion-item>\r\n          </ion-list>\r\n          <div class=\"upload-btn-wrapper\">\r\n            <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach invoice</ion-button>\r\n            <input type=\"file\" (change)=\"attach_invoice($event)\"\r\n              accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n          </div>\r\n  \r\n         \r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\" (click) = \"windscreenGlassNext()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/vehicle/vehicle-step3/windscreen-glass/windscreen-glass.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step3/windscreen-glass/windscreen-glass.module.ts ***!
  \***********************************************************************************/
/*! exports provided: WindscreenGlassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindscreenGlassPageModule", function() { return WindscreenGlassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _windscreen_glass_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./windscreen-glass.page */ "./src/app/vehicle/vehicle-step3/windscreen-glass/windscreen-glass.page.ts");










var routes = [
    {
        path: '',
        component: _windscreen_glass_page__WEBPACK_IMPORTED_MODULE_9__["WindscreenGlassPage"]
    }
];
var WindscreenGlassPageModule = /** @class */ (function () {
    function WindscreenGlassPageModule() {
    }
    WindscreenGlassPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_windscreen_glass_page__WEBPACK_IMPORTED_MODULE_9__["WindscreenGlassPage"]],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__["CommonMockService"],
            ],
        })
    ], WindscreenGlassPageModule);
    return WindscreenGlassPageModule;
}());



/***/ }),

/***/ "./src/app/vehicle/vehicle-step3/windscreen-glass/windscreen-glass.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step3/windscreen-glass/windscreen-glass.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUvdmVoaWNsZS1zdGVwMy93aW5kc2NyZWVuLWdsYXNzL3dpbmRzY3JlZW4tZ2xhc3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/vehicle/vehicle-step3/windscreen-glass/windscreen-glass.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step3/windscreen-glass/windscreen-glass.page.ts ***!
  \*********************************************************************************/
/*! exports provided: WindscreenGlassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindscreenGlassPage", function() { return WindscreenGlassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var WindscreenGlassPage = /** @class */ (function () {
    function WindscreenGlassPage(navCtrl, router, _cS, route, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.route = route;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.attach_receipt_image = [];
        this.attach_receipt_image_set = [];
        this.attach_invoice_image = [];
        this.attach_invoice_image_set = [];
        this.ImageServerURL = this._cS.imageUrl();
        this.windscreen_glass_fb();
        this.formControlValueChanged();
        this.setClaimData();
    }
    WindscreenGlassPage.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    WindscreenGlassPage.prototype.windscreen_glass_fb = function () {
        this.windscreen_glass_form = this.formBuilder.group({
            vehicle_how_did_occur: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            vehicle_how_did_occur_other: [null],
            has_glass_repaired: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            contractor_name: [null],
            contractor_street: [null],
            contractor_suburb: [null],
            contractor_post_code: [null],
            repair_cost: [null],
            cost_paid: [null],
        });
    };
    WindscreenGlassPage.prototype.formControlValueChanged = function () {
        var _this = this;
        this.windscreen_glass_form.get('has_glass_repaired')
            .valueChanges.subscribe(function (val) {
            var contractor_name = _this.windscreen_glass_form.get('contractor_name');
            var contractor_street = _this.windscreen_glass_form.get('contractor_street');
            var contractor_suburb = _this.windscreen_glass_form.get('contractor_suburb');
            var contractor_post_code = _this.windscreen_glass_form.get('contractor_post_code');
            var repair_cost = _this.windscreen_glass_form.get('repair_cost');
            var cost_paid = _this.windscreen_glass_form.get('cost_paid');
            if (val == "true") {
                contractor_name.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                contractor_street.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                contractor_suburb.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                contractor_post_code.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                repair_cost.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                cost_paid.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                contractor_name.patchValue(null);
                contractor_name.clearValidators();
                contractor_name.updateValueAndValidity();
                contractor_street.patchValue(null);
                contractor_street.clearValidators();
                contractor_street.updateValueAndValidity();
                contractor_suburb.patchValue(null);
                contractor_suburb.clearValidators();
                contractor_suburb.updateValueAndValidity();
                contractor_post_code.patchValue(null);
                contractor_post_code.clearValidators();
                contractor_post_code.updateValueAndValidity();
                repair_cost.patchValue(null);
                repair_cost.clearValidators();
                repair_cost.updateValueAndValidity();
                cost_paid.patchValue(null);
                cost_paid.clearValidators();
                cost_paid.updateValueAndValidity();
            }
        });
    };
    WindscreenGlassPage.prototype.windscreenGlassNext = function () {
        var _this = this;
        for (var v in this.windscreen_glass_form.controls) {
            this.windscreen_glass_form.controls[v].markAsTouched();
        }
        if (this.windscreen_glass_form.valid) {
            /* contractorAddres Start */
            var ContractorStreetValue = null;
            var ContractorSuburbValue = null;
            var ContractorPostCodeValue = null;
            if (document.getElementById("contractor_street")) {
                ContractorStreetValue = document.getElementById("contractor_street").value;
            }
            if (document.getElementById("contractor_suburb")) {
                ContractorSuburbValue = document.getElementById("contractor_suburb").value;
            }
            if (document.getElementById("contractor_post_code")) {
                ContractorPostCodeValue = document.getElementById("contractor_post_code").value;
            }
            /* contractorAddres End */
            var step4 = {
                "step": 'step4',
                "ClaimNumber": localStorage.getItem('ClaimNumber'),
                "vehicle_how_did_occur": this.windscreen_glass_form.value.vehicle_how_did_occur,
                "vehicle_how_did_occur_other": this.windscreen_glass_form.value.vehicle_how_did_occur_other,
                "has_glass_repaired": this.windscreen_glass_form.value.has_glass_repaired,
                "contractor_name": this.windscreen_glass_form.value.contractor_name,
                "contractor_street": ContractorStreetValue,
                "contractor_suburb": ContractorSuburbValue,
                "contractor_post_code": ContractorPostCodeValue,
                "repair_cost": this.windscreen_glass_form.value.repair_cost,
                "cost_paid": this.windscreen_glass_form.value.cost_paid,
                "attach_receipt": this.attach_receipt_image_set,
                "attach_invoice": this.attach_invoice_image_set,
            };
            this._cS.put_API(this._cS.URL_Vehicle_Claim_Post(), step4)
                .subscribe(function (data) {
                if (data.status == 0) {
                    _this.attach_receipt_image_set = [];
                    _this.attach_invoice_image_set = [];
                    _this.setClaimData();
                    _this.router.navigate(['/vehicle-step5']);
                }
                else {
                }
            }, function (err) {
            });
        }
    };
    WindscreenGlassPage.prototype.contractorAddress = function () {
        var _this = this;
        var widget = new AddressFinder.Widget(document.getElementById("contractor_street"), "PVW639JF4ET8ALGDHNKB", "AU", {});
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
                var JSON = {
                    contractor_street: address_line_1,
                    contractor_suburb: mainadddate,
                    contractor_post_code: postcode,
                };
                _this.windscreen_glass_form.patchValue(JSON);
            }
        });
    };
    WindscreenGlassPage.prototype.setClaimData = function () {
        var _this = this;
        var claimNumber = localStorage.getItem('ClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe(function (data) {
                if (data.status == 0) {
                    console.log("editdate", data);
                    _this.editClaimData = data.data;
                    _this.windscreen_glass_form.setValue({
                        vehicle_how_did_occur: _this.editClaimData.vehicle_how_did_occur,
                        vehicle_how_did_occur_other: _this.editClaimData.vehicle_how_did_occur_other,
                        has_glass_repaired: _this.editClaimData.has_glass_repaired,
                        contractor_name: _this.editClaimData.contractor_name,
                        contractor_street: _this.editClaimData.contractor_street,
                        contractor_suburb: _this.editClaimData.contractor_suburb,
                        contractor_post_code: _this.editClaimData.contractor_post_code,
                        repair_cost: _this.editClaimData.repair_cost,
                        cost_paid: _this.editClaimData.cost_paid,
                    });
                    if (_this.editClaimData.attach_receipt) {
                        var dynamicI = (_this.dynamicImages(_this.editClaimData.attach_receipt, '/attach_receipt/'));
                        _this.attach_receipt_image = dynamicI;
                    }
                    if (_this.editClaimData.attach_invoice) {
                        var dynamicI = (_this.dynamicImages(_this.editClaimData.attach_invoice, '/attach_invoice/'));
                        _this.attach_invoice_image = dynamicI;
                    }
                }
            });
        }
    };
    WindscreenGlassPage.prototype.ngOnInit = function () {
        var script = document.createElement("script");
        script.src = "https://api.addressfinder.io/assets/v3/widget.js";
        script.async = true;
        document.body.appendChild(script);
    };
    WindscreenGlassPage.prototype.delete_attach_receipt = function (img, position) {
        var _this = this;
        this.attach_receipt_image.splice(position, 1);
        if (img.val) {
            var details = {
                ClaimNumber: localStorage.getItem('ClaimNumber'),
                image_name: img.val,
                image_type: 'attach_receipt',
            };
            this._cS.post_API(this._cS.URL_image_delet(), details)
                .subscribe(function (data) {
                console.log('data', data);
                if (data.status == 0) {
                    var dynamicI = _this.dynamicImages(data.data, 'attach_receipt/');
                    _this.attach_receipt_image = dynamicI;
                    //this._cS.Display_Toaster('success', 'Image successfully deleted.');
                }
                else {
                    //this._cS.Display_Toaster('error', data.message);
                }
            });
        }
    };
    WindscreenGlassPage.prototype.attach_receipt = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader_1 = new FileReader();
            var extension = event.target.files[0].name.split('.').pop().toLowerCase();
            var fileName = event.target.files[0].name;
            var fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
            var formData = new FormData();
            formData.append('file', event.target.files[0]);
            formData.append("image_type", "attach_receipt");
            formData.append("claimNumber", localStorage.getItem('ClaimNumber'));
            this._cS.ImageUpload(formData).subscribe(function (val) {
                reader_1.onload = function (event) {
                    var json = {
                        fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
                        path: event.target.result,
                        name: val.data[0].file_name,
                        val: undefined
                    };
                    _this.attach_receipt_image.push(json);
                };
                reader_1.readAsDataURL(event.target.files[0]);
                _this.attach_receipt_image_set.push(val.data[0].file_name);
            });
        }
    };
    WindscreenGlassPage.prototype.delete_attach_invoice = function (img, position) {
        var _this = this;
        this.attach_invoice_image.splice(position, 1);
        if (img.val) {
            var details = {
                ClaimNumber: localStorage.getItem('ClaimNumber'),
                image_name: img.val,
                image_type: 'attach_invoice',
            };
            this._cS.post_API(this._cS.URL_image_delet(), details)
                .subscribe(function (data) {
                console.log('data', data);
                if (data.status == 0) {
                    var dynamicI = _this.dynamicImages(data.data, 'attach_invoice/');
                    _this.attach_invoice_image = dynamicI;
                    //this._cS.Display_Toaster('success', 'Image successfully deleted.');
                }
                else {
                    //this._cS.Display_Toaster('error', data.message);
                }
            });
        }
    };
    WindscreenGlassPage.prototype.attach_invoice = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader_2 = new FileReader();
            var extension = event.target.files[0].name.split('.').pop().toLowerCase();
            var fileName = event.target.files[0].name;
            var fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
            var formData = new FormData();
            formData.append('file', event.target.files[0]);
            formData.append("image_type", "attach_invoice");
            formData.append("claimNumber", localStorage.getItem('ClaimNumber'));
            this._cS.ImageUpload(formData).subscribe(function (val) {
                reader_2.onload = function (event) {
                    var json = {
                        fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
                        path: event.target.result,
                        name: val.data[0].file_name,
                        val: undefined
                    };
                    _this.attach_invoice_image.push(json);
                };
                reader_2.readAsDataURL(event.target.files[0]);
                _this.attach_invoice_image_set.push(val.data[0].file_name);
            });
        }
    };
    WindscreenGlassPage.prototype.dynamicImages = function (array, path) {
        var _this = this;
        var imageArray = array.split(',');
        var fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
        var json = [];
        imageArray.forEach(function (val) {
            var fileArray = val.split('/');
            var extension = fileArray[1].split('.').pop().toLowerCase();
            var fileName = fileArray[1];
            console.log(fileArray[1].indexOf(extension) > -1);
            json.push({
                fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
                path: _this.ImageServerURL + path + val,
                name: fileName,
                val: val
            });
        });
        return json;
    };
    // next() {
    //   this.router.navigate(['/vehicle-step5']);
    // }
    WindscreenGlassPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    WindscreenGlassPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
    ]; };
    WindscreenGlassPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-windscreen-glass',
            template: __webpack_require__(/*! raw-loader!./windscreen-glass.page.html */ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle-step3/windscreen-glass/windscreen-glass.page.html"),
            styles: [__webpack_require__(/*! ./windscreen-glass.page.scss */ "./src/app/vehicle/vehicle-step3/windscreen-glass/windscreen-glass.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
    ], WindscreenGlassPage);
    return WindscreenGlassPage;
}());



/***/ })

}]);
//# sourceMappingURL=vehicle-vehicle-step3-windscreen-glass-windscreen-glass-module-es5.js.map