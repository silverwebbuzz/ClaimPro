(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["property-property-step5-property-step5-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/property/property-step5/property-step5.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/property/property-step5/property-step5.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Reported to police</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <form [formGroup]=\"property_form_step5\" autocomplete=\"off\">\r\n\r\n    <div class=\"div-que\">\r\n      <ion-label class=\"lbl-head\">Was the matter reported to the police?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"reported_to_police\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"div-Y\" *ngIf=\"this.property_form_step5.get('reported_to_police').value == 'true'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Date notified</ion-label>\r\n        <ion-datetime placeholder=\"Select Date\" class=\"input-box box\" formControlName=\"police_report_date\"\r\n          displayFormat=\"DD MMM YYYY\" min=\"2016-01-01\" max=\"2039-12-31\"></ion-datetime>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"property_form_step5.controls.police_report_date.hasError('required') && property_form_step5.controls.police_report_date.touched\">\r\n        <p class=\"content\">Please Select Date!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Which station</ion-label>\r\n        <ion-textarea rows=\"3\" formControlName=\"which_station\" type=\"text\" color=\"primary\" class=\"input-box\">\r\n        </ion-textarea>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"property_form_step5.controls.which_station.hasError('required') && property_form_step5.controls.which_station.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"property_form_step5.controls.which_station.hasError('maxlength') && property_form_step5.controls.which_station.touched\">\r\n        <p class=\"content\">Allow Only 140 Characters!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Police report number</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"police_report_number\" color=\"primary\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"property_form_step5.controls.police_report_number.hasError('required') && property_form_step5.controls.police_report_number.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n\r\n      <ion-label class=\"lbl-contact-blk add-margin\">Attach police report</ion-label>\r\n      <div class=\"div-docs\">\r\n\r\n        <h3 *ngIf=\"attach_police_report_image.length == 0\" text-center>Please Select Image!</h3>\r\n\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let img of attach_police_report_image; index as pos\" text-wrap>\r\n            <ion-thumbnail slot=\"start\">\r\n              <ion-img *ngIf=\"img.fileIcon\" src=\"../../../assets/images/files.png\"></ion-img>\r\n              <ion-img *ngIf=\"!img.fileIcon\" [src]=\"img.path\"></ion-img>\r\n            </ion-thumbnail>\r\n            <ion-label>\r\n              {{ img.name }}\r\n            </ion-label>\r\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(img, pos)\">\r\n              <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n            </ion-button>\r\n          </ion-item>\r\n        </ion-list>\r\n\r\n        <div class=\"upload-btn-wrapper\">\r\n          <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach Documents</ion-button>\r\n          <input type=\"file\" (change)=\"fileUpload($event)\"\r\n            accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\" (click)=\"propertyStep5Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/property/property-step5/property-step5.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/property/property-step5/property-step5.module.ts ***!
  \******************************************************************/
/*! exports provided: PropertyStep5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyStep5PageModule", function() { return PropertyStep5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _property_step5_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./property-step5.page */ "./src/app/property/property-step5/property-step5.page.ts");










var routes = [
    {
        path: '',
        component: _property_step5_page__WEBPACK_IMPORTED_MODULE_9__["PropertyStep5Page"]
    }
];
var PropertyStep5PageModule = /** @class */ (function () {
    function PropertyStep5PageModule() {
    }
    PropertyStep5PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_property_step5_page__WEBPACK_IMPORTED_MODULE_9__["PropertyStep5Page"]],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__["CommonMockService"],
            ],
        })
    ], PropertyStep5PageModule);
    return PropertyStep5PageModule;
}());



/***/ }),

/***/ "./src/app/property/property-step5/property-step5.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/property/property-step5/property-step5.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L3Byb3BlcnR5LXN0ZXA1L3Byb3BlcnR5LXN0ZXA1LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/property/property-step5/property-step5.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/property/property-step5/property-step5.page.ts ***!
  \****************************************************************/
/*! exports provided: PropertyStep5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyStep5Page", function() { return PropertyStep5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");







var PropertyStep5Page = /** @class */ (function () {
    function PropertyStep5Page(navCtrl, router, _cS, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.attach_police_report_image = [];
        this.attach_police_report_image_set = [];
        this.ImageServerURL = this._cS.imageUrl();
        this.property_step5_fb();
        this.formControlValueChanged();
        this.setClaimData();
    }
    PropertyStep5Page.prototype.property_step5_fb = function () {
        this.property_form_step5 = this.formBuilder.group({
            reported_to_police: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            police_report_date: [null],
            which_station: [null],
            police_report_number: [null],
        });
    };
    PropertyStep5Page.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    PropertyStep5Page.prototype.formControlValueChanged = function () {
        var _this = this;
        this.property_form_step5.get('reported_to_police')
            .valueChanges.subscribe(function (val) {
            var police_report_date = _this.property_form_step5.get('police_report_date');
            var which_station = _this.property_form_step5.get('which_station');
            var police_report_number = _this.property_form_step5.get('police_report_number');
            police_report_date.patchValue(null);
            police_report_date.clearValidators();
            police_report_date.updateValueAndValidity();
            which_station.patchValue(null);
            which_station.clearValidators();
            which_station.updateValueAndValidity();
            police_report_number.patchValue(null);
            police_report_number.clearValidators();
            police_report_number.updateValueAndValidity();
            if (val == "true") {
                police_report_date.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                which_station.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(140), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                police_report_number.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
        });
    };
    PropertyStep5Page.prototype.propertyStep5Next = function () {
        var _this = this;
        for (var v in this.property_form_step5.controls) {
            this.property_form_step5.controls[v].markAsTouched();
        }
        if (this.property_form_step5.valid) {
            var step5 = {
                "step": 'step5',
                "ClaimNumber": localStorage.getItem('PropertyClaimNumber'),
                "reported_to_police": this.property_form_step5.value.reported_to_police,
                "police_report_date": this.property_form_step5.value.police_report_date,
                "which_station": this.property_form_step5.value.which_station,
                "police_report_number": this.property_form_step5.value.police_report_number,
                "attach_police_report": this.attach_police_report_image_set,
            };
            this._cS.put_API(this._cS.URL_Property_Claim_Post(), step5)
                .subscribe(function (data) {
                if (data.status == 0) {
                    _this.attach_police_report_image_set = [];
                    _this.setClaimData();
                    _this.router.navigate(['/property-step6']);
                }
                else {
                }
            }, function (err) {
            });
        }
    };
    PropertyStep5Page.prototype.deleteImage = function (img, position) {
        var _this = this;
        this.attach_police_report_image.splice(position, 1);
        if (img.val) {
            var details = {
                ClaimNumber: localStorage.getItem('PropertyClaimNumber'),
                image_name: img.val,
                image_type: 'attach_police_report',
            };
            this._cS.post_API(this._cS.URL_image_delet(), details)
                .subscribe(function (data) {
                console.log('data', data);
                if (data.status == 0) {
                    var dynamicI = _this.dynamicImages(data.data, 'police_report/');
                    _this.attach_police_report_image = dynamicI;
                    _this._cS.presentToastWithOptions(data.message);
                }
                else {
                    _this._cS.presentToastWithOptions(data.message);
                }
            });
        }
    };
    PropertyStep5Page.prototype.fileUpload = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader_1 = new FileReader();
            var extension = event.target.files[0].name.split('.').pop().toLowerCase();
            var fileName = event.target.files[0].name;
            var fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
            var formData = new FormData();
            formData.append('file', event.target.files[0]);
            formData.append("image_type", "attach_police_report");
            formData.append("claimNumber", localStorage.getItem('PropertyClaimNumber'));
            this._cS.ImageUpload(formData).subscribe(function (val) {
                reader_1.onload = function (event) {
                    var json = {
                        fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
                        path: event.target.result,
                        name: val.data[0].file_name,
                        val: undefined
                    };
                    _this.attach_police_report_image.push(json);
                };
                reader_1.readAsDataURL(event.target.files[0]);
                _this.attach_police_report_image_set.push(val.data[0].file_name);
                if (val) {
                    _this._cS.presentToastWithOptions(val.message);
                }
                else {
                    _this._cS.presentToastWithOptions(val.message);
                }
            });
        }
    };
    PropertyStep5Page.prototype.dynamicImages = function (array, path) {
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
    PropertyStep5Page.prototype.setClaimData = function () {
        var _this = this;
        var claimNumber = localStorage.getItem('PropertyClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe(function (data) {
                if (data.status == 0) {
                    console.log("editdate", data);
                    _this.editClaimData = data.data;
                    _this.property_form_step5.setValue({
                        reported_to_police: _this.editClaimData.reported_to_police,
                        police_report_date: _this.editClaimData.police_report_date,
                        which_station: _this.editClaimData.which_station,
                        police_report_number: _this.editClaimData.police_report_number,
                    });
                    if (_this.editClaimData.attach_police_report) {
                        var dynamicI = (_this.dynamicImages(_this.editClaimData.attach_police_report, '/police_report/'));
                        _this.attach_police_report_image = dynamicI;
                    }
                }
            });
        }
    };
    PropertyStep5Page.prototype.ngOnInit = function () {
    };
    PropertyStep5Page.prototype.back = function () {
        this.navCtrl.pop();
    };
    PropertyStep5Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
    ]; };
    PropertyStep5Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property-step5',
            template: __webpack_require__(/*! raw-loader!./property-step5.page.html */ "./node_modules/raw-loader/index.js!./src/app/property/property-step5/property-step5.page.html"),
            styles: [__webpack_require__(/*! ./property-step5.page.scss */ "./src/app/property/property-step5/property-step5.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
    ], PropertyStep5Page);
    return PropertyStep5Page;
}());



/***/ })

}]);
//# sourceMappingURL=property-property-step5-property-step5-module-es5.js.map