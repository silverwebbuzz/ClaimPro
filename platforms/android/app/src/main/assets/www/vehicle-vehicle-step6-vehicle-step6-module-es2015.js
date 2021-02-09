(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle-vehicle-step6-vehicle-step6-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle-step6/vehicle-step6.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicle/vehicle-step6/vehicle-step6.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Reported to police</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"vehicle_form_step6\" autocomplete=\"off\">\r\n\r\n    <div class=\"div-que\">\r\n      <ion-label class=\"lbl-head\">Was the matter reported to the police?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"reported_to_police\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"div-Y\" *ngIf=\"this.vehicle_form_step6.get('reported_to_police').value == 'true'\">\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Date notified</ion-label>\r\n        <ion-datetime placeholder=\"Select Date\" class=\"input-box box\" formControlName=\"police_report_date\"\r\n          displayFormat=\"DD MMM YYYY\" min=\"2016-01-01\" max=\"2039-12-31\"></ion-datetime>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"vehicle_form_step6.controls.police_report_date.hasError('required') && vehicle_form_step6.controls.police_report_date.touched\">\r\n        <p class=\"content\">Please Select Date!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Which station?</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"which_station\" color=\"primary\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"vehicle_form_step6.controls.which_station.hasError('required') && vehicle_form_step6.controls.which_station.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Police report number</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"police_report_number\" color=\"primary\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"vehicle_form_step6.controls.police_report_number.hasError('required') && vehicle_form_step6.controls.police_report_number.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n\r\n      <div class=\"div-docs\">\r\n        \r\n        <h3 *ngIf=\"images.length == 0\" text-center>Please Select Image!</h3>\r\n\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let img of images; index as pos\" text-wrap>\r\n              <ion-thumbnail slot=\"start\">\r\n                  <ion-img *ngIf=\"img.fileIcon\" src=\"../../../assets/images/files.png\"></ion-img>\r\n                  <ion-img *ngIf=\"!img.fileIcon\" [src]=\"img.path\"></ion-img>\r\n              </ion-thumbnail>\r\n              <ion-label>\r\n                  {{ img.name }}\r\n              </ion-label>\r\n              <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(img, pos)\">\r\n                  <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n              </ion-button>\r\n          </ion-item>\r\n      </ion-list>\r\n     \r\n      <div class=\"upload-btn-wrapper\">\r\n          <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach Documents</ion-button>\r\n          <input type=\"file\"  (change)=\"fileUpload($event)\"\r\n              accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n      </div>\r\n\r\n      \r\n      </div>\r\n\r\n      <div class=\"div-que add-margin\">\r\n        <ion-label class=\"lbl-head\">Has the police laid charges?</ion-label>\r\n\r\n        <ion-radio-group formControlName=\"police_laid_charges\">\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">No</ion-label>\r\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </div>\r\n\r\n      <div class=\"div-Y\" *ngIf=\"this.vehicle_form_step6.get('police_laid_charges').value == 'true'\">\r\n\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Who has been charged?</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"police_who_charged\" color=\"primary\" class=\"input-box\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"vehicle_form_step6.controls.police_who_charged.hasError('required') && vehicle_form_step6.controls.police_who_charged.touched\">\r\n          <p class=\"content\">Please Enter Required Field!</p>\r\n        </ion-item>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\" (click)=\"vehicleStep6Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/vehicle/vehicle-step6/vehicle-step6.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step6/vehicle-step6.module.ts ***!
  \***************************************************************/
/*! exports provided: VehicleStep6PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleStep6PageModule", function() { return VehicleStep6PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vehicle_step6_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vehicle-step6.page */ "./src/app/vehicle/vehicle-step6/vehicle-step6.page.ts");










const routes = [
    {
        path: '',
        component: _vehicle_step6_page__WEBPACK_IMPORTED_MODULE_9__["VehicleStep6Page"]
    }
];
let VehicleStep6PageModule = class VehicleStep6PageModule {
};
VehicleStep6PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_vehicle_step6_page__WEBPACK_IMPORTED_MODULE_9__["VehicleStep6Page"]],
        providers: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__["CommonMockService"],
        ],
    })
], VehicleStep6PageModule);



/***/ }),

/***/ "./src/app/vehicle/vehicle-step6/vehicle-step6.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step6/vehicle-step6.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUvdmVoaWNsZS1zdGVwNi92ZWhpY2xlLXN0ZXA2LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/vehicle/vehicle-step6/vehicle-step6.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step6/vehicle-step6.page.ts ***!
  \*************************************************************/
/*! exports provided: VehicleStep6Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleStep6Page", function() { return VehicleStep6Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");







let VehicleStep6Page = class VehicleStep6Page {
    constructor(navCtrl, router, _cS, route, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.route = route;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.images = [];
        this.data = [];
        this.attach_upload_document_set = [];
        this.ImageServerURL = this._cS.imageUrl();
        this.vehicle_step6_fb();
        this.setClaimData();
        this.formControlValueChanged();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    vehicle_step6_fb() {
        this.vehicle_form_step6 = this.formBuilder.group({
            reported_to_police: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            police_report_date: [null],
            which_station: [null],
            police_report_number: [null],
            police_laid_charges: [null],
            police_who_charged: [null],
        });
    }
    formControlValueChanged() {
        this.vehicle_form_step6.get('reported_to_police')
            .valueChanges.subscribe((val) => {
            const police_report_date = this.vehicle_form_step6.get('police_report_date');
            const which_station = this.vehicle_form_step6.get('which_station');
            const police_report_number = this.vehicle_form_step6.get('police_report_number');
            const police_laid_charges = this.vehicle_form_step6.get('police_laid_charges');
            police_report_date.patchValue(null);
            police_report_date.clearValidators();
            police_report_date.updateValueAndValidity();
            which_station.patchValue(null);
            which_station.clearValidators();
            which_station.updateValueAndValidity();
            police_report_number.patchValue(null);
            police_report_number.clearValidators();
            police_report_number.updateValueAndValidity();
            police_laid_charges.patchValue(null);
            police_laid_charges.clearValidators();
            police_laid_charges.updateValueAndValidity();
            if (val == "true") {
                police_report_date.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                which_station.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                police_report_number.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                police_laid_charges.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
            }
        });
        this.vehicle_form_step6.get('police_laid_charges')
            .valueChanges.subscribe((val) => {
            const police_who_charged = this.vehicle_form_step6.get('police_who_charged');
            police_who_charged.patchValue(null);
            police_who_charged.clearValidators();
            police_who_charged.updateValueAndValidity();
            if (val == "true") {
                police_who_charged.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
        });
    }
    vehicleStep6Next() {
        for (let v in this.vehicle_form_step6.controls) {
            this.vehicle_form_step6.controls[v].markAsTouched();
        }
        if (this.vehicle_form_step6.valid) {
            const step6 = {
                "step": 'step6',
                "ClaimNumber": localStorage.getItem('ClaimNumber'),
                "reported_to_police": this.vehicle_form_step6.value.reported_to_police,
                "police_report_date": this.vehicle_form_step6.value.police_report_date,
                "which_station": this.vehicle_form_step6.value.which_station,
                "police_report_number": this.vehicle_form_step6.value.police_report_number,
                "police_laid_charges": this.vehicle_form_step6.value.police_laid_charges,
                "police_who_charged": this.vehicle_form_step6.value.police_who_charged,
                "attach_police_report": this.data,
            };
            this._cS.put_API(this._cS.URL_Vehicle_Claim_Post(), step6)
                .subscribe((data) => {
                if (data.status == 0) {
                    this.data = [];
                    this.setClaimData();
                    this.router.navigate(['/vehicle-step7']);
                }
                else {
                }
            }, err => {
            });
        }
    }
    ngOnInit() {
    }
    deleteImage(img, position) {
        this.images.splice(position, 1);
        if (img.val) {
            var details = {
                ClaimNumber: localStorage.getItem('ClaimNumber'),
                image_name: img.val,
                image_type: 'attach_police_report',
            };
            this._cS.post_API(this._cS.URL_image_delet(), details)
                .subscribe((data) => {
                console.log('data', data);
                if (data.status == 0) {
                    var dynamicI = this.dynamicImages(data.data, 'police_report/');
                    this.images = dynamicI;
                    this._cS.presentToastWithOptions(data.message);
                }
                else {
                    this._cS.presentToastWithOptions(data.message);
                }
            });
        }
    }
    fileUpload(event) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            var extension = event.target.files[0].name.split('.').pop().toLowerCase();
            var fileName = event.target.files[0].name;
            var fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
            let formData = new FormData();
            formData.append('file', event.target.files[0]);
            formData.append("image_type", "attach_police_report");
            formData.append("claimNumber", localStorage.getItem('ClaimNumber'));
            this._cS.ImageUpload(formData).subscribe(val => {
                reader.onload = (event) => {
                    let json = {
                        fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
                        path: event.target.result,
                        name: val.data[0].file_name,
                        val: undefined
                    };
                    this.images.push(json);
                };
                reader.readAsDataURL(event.target.files[0]);
                this.data.push(val.data[0].file_name);
                if (val) {
                    this._cS.presentToastWithOptions(val.message);
                }
                else {
                    this._cS.presentToastWithOptions(val.message);
                }
            });
        }
    }
    dynamicImages(array, path) {
        let imageArray = array.split(',');
        var fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
        var json = [];
        imageArray.forEach((val) => {
            var fileArray = val.split('/');
            var extension = fileArray[1].split('.').pop().toLowerCase();
            var fileName = fileArray[1];
            console.log(fileArray[1].indexOf(extension) > -1);
            json.push({
                fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
                path: this.ImageServerURL + path + val,
                name: fileName,
                val: val
            });
        });
        return json;
    }
    setClaimData() {
        var claimNumber = localStorage.getItem('ClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe((data) => {
                if (data.status == 0) {
                    console.log("editdate", data);
                    this.editClaimData = data.data;
                    this.vehicle_form_step6.setValue({
                        reported_to_police: this.editClaimData.reported_to_police,
                        police_report_date: this.editClaimData.police_report_date,
                        which_station: this.editClaimData.which_station,
                        police_report_number: this.editClaimData.police_report_number,
                        police_laid_charges: this.editClaimData.police_laid_charges,
                        police_who_charged: this.editClaimData.police_who_charged,
                    });
                    if (this.editClaimData.attach_police_report) {
                        var dynamicI = (this.dynamicImages(this.editClaimData.attach_police_report, '/police_report/'));
                        this.images = dynamicI;
                    }
                }
            });
        }
    }
    back() {
        this.navCtrl.pop();
    }
};
VehicleStep6Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
];
VehicleStep6Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicle-step6',
        template: __webpack_require__(/*! raw-loader!./vehicle-step6.page.html */ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle-step6/vehicle-step6.page.html"),
        styles: [__webpack_require__(/*! ./vehicle-step6.page.scss */ "./src/app/vehicle/vehicle-step6/vehicle-step6.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
], VehicleStep6Page);



/***/ })

}]);
//# sourceMappingURL=vehicle-vehicle-step6-vehicle-step6-module-es2015.js.map