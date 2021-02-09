(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["property-property-step8-property-step8-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/property/property-step8/property-step8.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/property/property-step8/property-step8.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <!-- <ion-buttons>\r\n        <ion-button color=\"primary\" (click)=\"back()\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons> -->\r\n      <ion-title color=\"primary\" class=\"head\">Upload documentation</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content class=\"page-docs\">\r\n  \r\n    <form [formGroup]=\"property_form_step8\" autocomplete=\"off\">\r\n  \r\n      <h3 *ngIf=\"images.length == 0\" text-center>Please Select Image!</h3>\r\n        <ion-list>\r\n            <ion-item *ngFor=\"let img of images; index as pos\" text-wrap>\r\n                <ion-thumbnail slot=\"start\">\r\n                    <ion-img *ngIf=\"img.fileIcon\" src=\"../../../assets/images/files.png\"></ion-img>\r\n                    <ion-img *ngIf=\"!img.fileIcon\" [src]=\"img.path\"></ion-img>\r\n                </ion-thumbnail>\r\n                <ion-label>\r\n                    {{ img.name }}\r\n                </ion-label>\r\n                <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(img, pos)\">\r\n                    <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n                </ion-button>\r\n            </ion-item>\r\n        </ion-list>\r\n       \r\n        <div class=\"upload-btn-wrapper\">\r\n            <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach Documents</ion-button>\r\n            <input type=\"file\" formControlName=\"upload_document\" (change)=\"fileUpload($event)\"\r\n                accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n        </div>\r\n  \r\n    </form>\r\n  \r\n  </ion-content>\r\n  \r\n  <ion-footer class=\"btns-footer\">\r\n    <ion-row class=\"row-footer\">\r\n      <ion-col class=\"col-footer border-R\">\r\n        <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n          <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col class=\"col-footer border-L\">\r\n        <ion-button expand=\"full\" class=\"btn-next\" (click)=\"propertyStep8Next()\">\r\n          <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-footer>"

/***/ }),

/***/ "./src/app/property/property-step8/property-step8.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/property/property-step8/property-step8.module.ts ***!
  \******************************************************************/
/*! exports provided: PropertyStep8PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyStep8PageModule", function() { return PropertyStep8PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _property_step8_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./property-step8.page */ "./src/app/property/property-step8/property-step8.page.ts");










const routes = [
    {
        path: '',
        component: _property_step8_page__WEBPACK_IMPORTED_MODULE_9__["PropertyStep8Page"]
    }
];
let PropertyStep8PageModule = class PropertyStep8PageModule {
};
PropertyStep8PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_property_step8_page__WEBPACK_IMPORTED_MODULE_9__["PropertyStep8Page"]],
        providers: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__["CommonMockService"],
        ],
    })
], PropertyStep8PageModule);



/***/ }),

/***/ "./src/app/property/property-step8/property-step8.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/property/property-step8/property-step8.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L3Byb3BlcnR5LXN0ZXA4L3Byb3BlcnR5LXN0ZXA4LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/property/property-step8/property-step8.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/property/property-step8/property-step8.page.ts ***!
  \****************************************************************/
/*! exports provided: PropertyStep8Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyStep8Page", function() { return PropertyStep8Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");







let PropertyStep8Page = class PropertyStep8Page {
    constructor(navCtrl, router, _cS, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.fileImage = '';
        this.images = [];
        this.data = [];
        this.attach_upload_document_set = [];
        this.ImageServerURL = this._cS.imageUrl();
        this.property_step8_fb();
        this.setClaimData();
    }
    property_step8_fb() {
        this.property_form_step8 = this.formBuilder.group({
            upload_document: [null],
            ionViewWillEnter() {
                this.statusBar.show();
                this.statusBar.styleDefault();
                this.statusBar.backgroundColorByHexString('#ffffff');
            }
        });
    }
    propertyStep8Next() {
        for (let v in this.property_form_step8.controls) {
            this.property_form_step8.controls[v].markAsTouched();
        }
        if (this.property_form_step8.valid) {
            const step8 = {
                "step": 'step8',
                "ClaimNumber": localStorage.getItem('PropertyClaimNumber'),
                "upload_document": this.data,
            };
            this._cS.put_API(this._cS.URL_Property_Claim_Post(), step8)
                .subscribe((step) => {
                if (step.status == 0) {
                    this.data = [];
                    this.setClaimData();
                    this.router.navigate(['/property-step9']);
                }
                else {
                }
            }, err => {
            });
        }
    }
    deleteImage(img, position) {
        this.images.splice(position, 1);
        if (img.val) {
            var details = {
                ClaimNumber: localStorage.getItem('PropertyClaimNumber'),
                image_name: img.val,
                image_type: 'upload_document',
            };
            this._cS.post_API(this._cS.URL_image_delet(), details)
                .subscribe((data) => {
                console.log('data', data);
                if (data.status == 0) {
                    var dynamicI = this.dynamicImages(data.data, 'upload_document/');
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
            formData.append("image_type", "upload_document");
            formData.append("claimNumber", localStorage.getItem('PropertyClaimNumber'));
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
        var claimNumber = localStorage.getItem('PropertyClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe((data) => {
                if (data.status == 0) {
                    this.editClaimData = data.data;
                    if (this.editClaimData.upload_document) {
                        var dynamicI = (this.dynamicImages(this.editClaimData.upload_document, '/upload_document/'));
                        this.images = dynamicI;
                    }
                }
            });
        }
    }
    ngOnInit() {
    }
    delete() {
        console.log("Delete");
    }
    back() {
        this.navCtrl.pop();
    }
};
PropertyStep8Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
];
PropertyStep8Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property-step8',
        template: __webpack_require__(/*! raw-loader!./property-step8.page.html */ "./node_modules/raw-loader/index.js!./src/app/property/property-step8/property-step8.page.html"),
        styles: [__webpack_require__(/*! ./property-step8.page.scss */ "./src/app/property/property-step8/property-step8.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
], PropertyStep8Page);



/***/ })

}]);
//# sourceMappingURL=property-property-step8-property-step8-module-es2015.js.map