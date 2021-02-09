(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["other-step3-step3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/other/step3/step3.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/other/step3/step3.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <!-- <ion-buttons>\r\n            <ion-button color=\"primary\" (click)=\"back()\">\r\n                <ion-icon name=\"arrow-back\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons> -->\r\n        <ion-title color=\"primary\" class=\"head\">Upload documentation</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"page-docs\">\r\n\r\n        <ion-label color=\"primary\" class=\"doc-desc\">\r\n                Please upload all relevant images and pdf documents in support of your claim.\r\n        </ion-label>\r\n\r\n    <form [formGroup]=\"other_form_step3\" autocomplete=\"off\">\r\n        <h3 *ngIf=\"images.length == 0\" text-center>Please Select Image!</h3>\r\n        <ion-list class=\"doc-list\">\r\n            <ion-item lines=\"none\" class=\"doc-item\" *ngFor=\"let img of images; index as pos\" text-wrap>\r\n                <ion-thumbnail slot=\"start\">\r\n                    <ion-img *ngIf=\"img.fileIcon\" src=\"../../../assets/images/files.png\"></ion-img>\r\n                    <ion-img *ngIf=\"!img.fileIcon\" [src]=\"img.path\"></ion-img>\r\n                </ion-thumbnail>\r\n                <ion-label>\r\n                    {{ img.name }}\r\n                </ion-label>\r\n                <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(img, pos)\">\r\n                    <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n                </ion-button>\r\n            </ion-item>\r\n        </ion-list>\r\n       \r\n        <div class=\"upload-btn-wrapper\">\r\n            <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach Documents</ion-button>\r\n            <input type=\"file\" formControlName=\"upload_document\" (change)=\"fileUpload($event)\"\r\n                accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n        </div>\r\n    </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n    <ion-row class=\"row-footer\">\r\n        <ion-col class=\"col-footer border-R\">\r\n            <ion-button expand=\"full\" size=\"large\" class=\"btn-back\" (click)=\"back()\">\r\n                <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n        <ion-col class=\"col-footer border-L\">\r\n            <ion-button expand=\"full\" size=\"large\" class=\"btn-next\" (click)=\"otherStep3Next()\">\r\n                <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/other/step3/step3.module.ts":
/*!*********************************************!*\
  !*** ./src/app/other/step3/step3.module.ts ***!
  \*********************************************/
/*! exports provided: Step3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3PageModule", function() { return Step3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _step3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./step3.page */ "./src/app/other/step3/step3.page.ts");







const routes = [
    {
        path: '',
        component: _step3_page__WEBPACK_IMPORTED_MODULE_6__["Step3Page"]
    }
];
let Step3PageModule = class Step3PageModule {
};
Step3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_step3_page__WEBPACK_IMPORTED_MODULE_6__["Step3Page"]]
    })
], Step3PageModule);



/***/ }),

/***/ "./src/app/other/step3/step3.page.scss":
/*!*********************************************!*\
  !*** ./src/app/other/step3/step3.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL290aGVyL3N0ZXAzL3N0ZXAzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/other/step3/step3.page.ts":
/*!*******************************************!*\
  !*** ./src/app/other/step3/step3.page.ts ***!
  \*******************************************/
/*! exports provided: Step3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3Page", function() { return Step3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");







let Step3Page = class Step3Page {
    constructor(navCtrl, router, _cS, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.fileImage = '';
        this.uploadFile = null;
        this.images = [];
        this.data = [];
        this.attach_upload_document_set = [];
        this.ImageServerURL = this._cS.imageUrl();
        this.other_step3_fb();
        this.setClaimData();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    other_step3_fb() {
        this.other_form_step3 = this.formBuilder.group({
            upload_document: [null],
        });
    }
    otherStep3Next() {
        for (let v in this.other_form_step3.controls) {
            this.other_form_step3.controls[v].markAsTouched();
        }
        if (this.other_form_step3.valid) {
            const step3 = {
                "step": 'step3',
                "ClaimNumber": localStorage.getItem('OtherClaimNumber'),
                "upload_document": this.data,
            };
            this._cS.put_API(this._cS.URL_Other_Claim_Post(), step3)
                .subscribe((step) => {
                if (step.status == 0) {
                    this.data = [];
                    this.setClaimData();
                    this.router.navigate(['/step4']);
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
                ClaimNumber: localStorage.getItem('OtherClaimNumber'),
                image_name: img.val,
                image_type: 'upload_document',
            };
            this._cS.post_API(this._cS.URL_image_delet(), details)
                .subscribe((data) => {
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
            formData.append("claimNumber", localStorage.getItem('OtherClaimNumber'));
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
    back() {
        this.navCtrl.pop();
    }
    setClaimData() {
        var claimNumber = localStorage.getItem('OtherClaimNumber');
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
};
Step3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] }
];
Step3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-step3',
        template: __webpack_require__(/*! raw-loader!./step3.page.html */ "./node_modules/raw-loader/index.js!./src/app/other/step3/step3.page.html"),
        styles: [__webpack_require__(/*! ./step3.page.scss */ "./src/app/other/step3/step3.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
], Step3Page);



/***/ })

}]);
//# sourceMappingURL=other-step3-step3-module-es2015.js.map