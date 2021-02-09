(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["professional-indemnity-professional-step7-professional-step7-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/professional-indemnity/professional-step7/professional-step7.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/professional-indemnity/professional-step7/professional-step7.page.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Upload documentation</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"page-docs\">\r\n\r\n  <form [formGroup]=\"professional_form_step7\" autocomplete=\"off\">\r\n\r\n    <h3 *ngIf=\"images.length == 0\" text-center>Please Select Image!</h3>\r\n\r\n    <ion-list class=\"doc-list\">\r\n      <ion-item lines=\"none\" class=\"doc-item\" *ngFor=\"let img of images; index as pos\" text-wrap>\r\n        <ion-thumbnail slot=\"start\">\r\n          <ion-img *ngIf=\"img.fileIcon\" src=\"../../../assets/images/files.png\"></ion-img>\r\n          <ion-img *ngIf=\"!img.fileIcon\" [src]=\"img.path\"></ion-img>\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          {{ img.name }}\r\n        </ion-label>\r\n        <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(img, pos)\">\r\n          <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <div class=\"upload-btn-wrapper\">\r\n      <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach Documents</ion-button>\r\n      <input type=\"file\" formControlName=\"upload_document\" (change)=\"fileUpload($event)\"\r\n        accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n    </div>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\" (click)=\"professionalStep7Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/professional-indemnity/professional-step7/professional-step7.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step7/professional-step7.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ProfessionalStep7PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalStep7PageModule", function() { return ProfessionalStep7PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professional_step7_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./professional-step7.page */ "./src/app/professional-indemnity/professional-step7/professional-step7.page.ts");







var routes = [
    {
        path: '',
        component: _professional_step7_page__WEBPACK_IMPORTED_MODULE_6__["ProfessionalStep7Page"]
    }
];
var ProfessionalStep7PageModule = /** @class */ (function () {
    function ProfessionalStep7PageModule() {
    }
    ProfessionalStep7PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_professional_step7_page__WEBPACK_IMPORTED_MODULE_6__["ProfessionalStep7Page"]]
        })
    ], ProfessionalStep7PageModule);
    return ProfessionalStep7PageModule;
}());



/***/ }),

/***/ "./src/app/professional-indemnity/professional-step7/professional-step7.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step7/professional-step7.page.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Zlc3Npb25hbC1pbmRlbW5pdHkvcHJvZmVzc2lvbmFsLXN0ZXA3L3Byb2Zlc3Npb25hbC1zdGVwNy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/professional-indemnity/professional-step7/professional-step7.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/professional-indemnity/professional-step7/professional-step7.page.ts ***!
  \**************************************************************************************/
/*! exports provided: ProfessionalStep7Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalStep7Page", function() { return ProfessionalStep7Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");







var ProfessionalStep7Page = /** @class */ (function () {
    function ProfessionalStep7Page(navCtrl, _cS, router, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this._cS = _cS;
        this.router = router;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.fileImage = '';
        this.uploadFile = null;
        this.images = [];
        this.data = [];
        this.attach_upload_document_set = [];
        this.ImageServerURL = this._cS.imageUrl();
        this.general_step5_fb();
        this.setClaimData();
    }
    ProfessionalStep7Page.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    ProfessionalStep7Page.prototype.general_step5_fb = function () {
        this.professional_form_step7 = this.formBuilder.group({
            upload_document: [null],
        });
    };
    ProfessionalStep7Page.prototype.professionalStep7Next = function () {
        var _this = this;
        for (var v in this.professional_form_step7.controls) {
            this.professional_form_step7.controls[v].markAsTouched();
        }
        if (this.professional_form_step7.valid) {
            var step7 = {
                "step": 'step7',
                "ClaimNumber": localStorage.getItem('ProfessionalClaimNumber'),
                "upload_document": this.data,
            };
            console.log("8888888", step7);
            this._cS.put_API(this._cS.URL_Professional_Claim_Post(), step7)
                .subscribe(function (step) {
                console.log("99999999999999", step);
                if (step.status == 0) {
                    _this.data = [];
                    _this.router.navigate(['/professional-step8']);
                    _this.setClaimData();
                }
                else {
                    // this._cS.Display_Toaster('error', data.message);
                }
            }, function (err) {
            });
        }
    };
    ProfessionalStep7Page.prototype.dynamicImages = function (array, path) {
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
    ProfessionalStep7Page.prototype.ngOnInit = function () {
    };
    ProfessionalStep7Page.prototype.deleteImage = function (img, position) {
        var _this = this;
        this.images.splice(position, 1);
        if (img.val) {
            var details = {
                ClaimNumber: localStorage.getItem('ProfessionalClaimNumber'),
                image_name: img.val,
                image_type: 'upload_document',
            };
            this._cS.post_API(this._cS.URL_image_delet(), details)
                .subscribe(function (data) {
                console.log('data', data);
                if (data.status == 0) {
                    var dynamicI = _this.dynamicImages(data.data, 'upload_document/');
                    _this.images = dynamicI;
                    _this._cS.presentToastWithOptions(data.message);
                }
                else {
                    _this._cS.presentToastWithOptions(data.message);
                }
            });
        }
    };
    ProfessionalStep7Page.prototype.fileUpload = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader_1 = new FileReader();
            var extension = event.target.files[0].name.split('.').pop().toLowerCase();
            var fileName = event.target.files[0].name;
            var fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
            var formData = new FormData();
            formData.append('file', event.target.files[0]);
            formData.append("image_type", "upload_document");
            formData.append("claimNumber", localStorage.getItem('ProfessionalClaimNumber'));
            this._cS.ImageUpload(formData).subscribe(function (val) {
                reader_1.onload = function (event) {
                    var json = {
                        fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
                        path: event.target.result,
                        name: val.data[0].file_name,
                        val: undefined
                    };
                    _this.images.push(json);
                };
                reader_1.readAsDataURL(event.target.files[0]);
                _this.data.push(val.data[0].file_name);
                if (val) {
                    _this._cS.presentToastWithOptions(val.message);
                }
                else {
                    _this._cS.presentToastWithOptions(val.message);
                }
            });
        }
    };
    ProfessionalStep7Page.prototype.delete = function () {
        console.log("Delete");
    };
    ProfessionalStep7Page.prototype.back = function () {
        this.navCtrl.pop();
    };
    ProfessionalStep7Page.prototype.setClaimData = function () {
        var _this = this;
        var claimNumber = localStorage.getItem('ProfessionalClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe(function (data) {
                if (data.status == 0) {
                    _this.editClaimData = data.data;
                    if (_this.editClaimData.upload_document) {
                        var dynamicI = (_this.dynamicImages(_this.editClaimData.upload_document, '/upload_document/'));
                        _this.images = dynamicI;
                    }
                }
            });
        }
    };
    ProfessionalStep7Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] }
    ]; };
    ProfessionalStep7Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-professional-step7',
            template: __webpack_require__(/*! raw-loader!./professional-step7.page.html */ "./node_modules/raw-loader/index.js!./src/app/professional-indemnity/professional-step7/professional-step7.page.html"),
            styles: [__webpack_require__(/*! ./professional-step7.page.scss */ "./src/app/professional-indemnity/professional-step7/professional-step7.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
    ], ProfessionalStep7Page);
    return ProfessionalStep7Page;
}());



/***/ })

}]);
//# sourceMappingURL=professional-indemnity-professional-step7-professional-step7-module-es5.js.map