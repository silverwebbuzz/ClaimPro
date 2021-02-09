(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["property-property-step3-impact-by-tree-impact-by-tree-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/property/property-step3/impact-by-tree/impact-by-tree.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/property/property-step3/impact-by-tree/impact-by-tree.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons>\n        <ion-button color=\"primary\" (click)=\"back()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons> -->\n    <ion-title color=\"primary\" class=\"head\">Impact by tree</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]=\"impact_by_tree_form\" autocomplete=\"off\">\n\n    <ion-label class=\"lbl-contact\">Impact by tree Details</ion-label>\n\n    <div class=\"div-que add-margin\">\n\n      <ion-label class=\"lbl-head\">Was anyone cutting or lopping the tree when the impact occurred?</ion-label>\n\n      <ion-radio-group formControlName=\"cutting_lopping\">\n        <ion-item lines=\"none\" class=\"items-radio\">\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"items-radio\">\n          <ion-label class=\"lbl-radio\">No</ion-label>\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n    </div>\n\n    <div class=\"div-Y\" *ngIf=\"this.impact_by_tree_form.get('cutting_lopping').value == 'true'\">\n\n      <ion-item lines=\"none\" class=\"input-item add\">\n        <ion-label position=\"stacked\" class=\"input-lbl\">Name of tree cutter</ion-label>\n        <ion-input type=\"text\" formControlName=\"name_party\" color=\"primary\" class=\"input-box\">\n        </ion-input>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"impact_by_tree_form.controls.name_party.hasError('required') && impact_by_tree_form.controls.name_party.touched\">\n        <p class=\"content\">Please Enter Name!</p>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"item-dropdown add\">\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">Type of tree cutter</ion-label>\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"was_tree_cutter\"\n          class=\"btn-select bg\" mode=\"md\">\n          <ion-select-option value=\"Professional Tree Lopper\">Professional Tree Lopper</ion-select-option>\n          <ion-select-option value=\"Not known\">Not known</ion-select-option>\n          <ion-select-option value=\"Other\">Other</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"impact_by_tree_form.controls.was_tree_cutter.hasError('required') && impact_by_tree_form.controls.was_tree_cutter.touched\">\n        <p class=\"content\">Please Select Required Field!</p>\n      </ion-item>\n\n      <!-- Other -->\n      <div *ngIf=\"impact_by_tree_form.get('was_tree_cutter').value == 'Other'\">\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\n          <ion-input type=\"text\" color=\"primary\" formControlName=\"was_tree_cutter_other\" class=\"input-box\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_tree_form.controls.was_tree_cutter_other.hasError('required') && impact_by_tree_form.controls.was_tree_cutter_other.touched\">\n          <p class=\"content\">Please Enter Required Field!</p>\n        </ion-item>\n      </div>\n\n    </div>\n\n    <div class=\"div-que add-margin\">\n\n      <ion-label class=\"lbl-head\">Prior to the impact was the tree or branch in a safe condition?</ion-label>\n\n      <ion-radio-group formControlName=\"tree_branch_condition\">\n        <ion-item lines=\"none\" class=\"items-radio\">\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"items-radio\">\n          <ion-label class=\"lbl-radio\">No</ion-label>\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n    </div>\n\n    <div class=\"div-N\" *ngIf=\"this.impact_by_tree_form.get('tree_branch_condition').value == 'false'\">\n\n      <ion-item lines=\"none\" class=\"item-dropdown add\">\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">How did you know?</ion-label>\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"how_you_know\"\n          class=\"btn-select bg\" mode=\"md\">\n          <ion-select-option value=\"The tree appeared diseased\">The tree appeared diseased</ion-select-option>\n          <ion-select-option value=\"The tree appeared dangerous\">The tree appeared dangerous</ion-select-option>\n          <ion-select-option value=\"Other\">Other</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\n        *ngIf=\"impact_by_tree_form.controls.how_you_know.hasError('required') && impact_by_tree_form.controls.how_you_know.touched\">\n        <p class=\"content\">Please Select Required Field!</p>\n      </ion-item>\n\n      <!-- Other -->\n      <div *ngIf=\"impact_by_tree_form.get('how_you_know').value == 'Other'\">\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\n          <ion-input type=\"text\" color=\"primary\" formControlName=\"how_you_know_other\" class=\"input-box\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_tree_form.controls.how_you_know_other.hasError('required') && impact_by_tree_form.controls.how_you_know_other.touched\">\n          <p class=\"content\">Please Enter Required Field!</p>\n        </ion-item>\n      </div>\n\n      <div class=\"div-que add-margin\">\n\n        <ion-label class=\"lbl-head\">Was the owner aware the tree was a danger to your property?</ion-label>\n\n        <ion-radio-group formControlName=\"is_owner_aware\">\n          <ion-item lines=\"none\" class=\"items-radio\">\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\n          </ion-item>\n          <ion-item lines=\"none\" class=\"items-radio\">\n            <ion-label class=\"lbl-radio\">No</ion-label>\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n\n      </div>\n\n      <div class=\"div-Y\" *ngIf=\"this.impact_by_tree_form.get('is_owner_aware').value == 'true'\">\n\n        <ion-item lines=\"none\" class=\"item-dropdown add\">\n          <ion-label position=\"stacked\" class=\"lbl-dropdown\">How were they made aware?</ion-label>\n          <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"how_made_aware\"\n            class=\"btn-select bg\" mode=\"md\">\n            <ion-select-option value=\"We had complained in writing\">We had complained in writing</ion-select-option>\n            <ion-select-option value=\"We complained verbally\">We complained verbally</ion-select-option>\n            <ion-select-option value=\"It was obviously dangerous\">It was obviously dangerous</ion-select-option>\n            <ion-select-option value=\"Other\">Other</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"impact_by_tree_form.controls.how_made_aware.hasError('required') && impact_by_tree_form.controls.how_made_aware.touched\">\n          <p class=\"content\">Please Select Required Field!</p>\n        </ion-item>\n\n        <!-- Other -->\n        <div *ngIf=\"impact_by_tree_form.get('how_made_aware').value == 'Other'\">\n          <ion-item lines=\"none\" class=\"input-item add\">\n            <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\n            <ion-input type=\"text\" color=\"primary\" formControlName=\"how_made_aware_other\" class=\"input-box\">\n            </ion-input>\n          </ion-item>\n\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\n            *ngIf=\"impact_by_tree_form.controls.how_made_aware_other.hasError('required') && impact_by_tree_form.controls.how_made_aware_other.touched\">\n            <p class=\"content\">Please Enter Required Field!</p>\n          </ion-item>\n        </div>\n\n      </div>\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n<ion-footer class=\"btns-footer\">\n  <ion-row class=\"row-footer\">\n    <ion-col class=\"col-footer border-R\">\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col class=\"col-footer border-L\">\n      <ion-button expand=\"full\" class=\"btn-next\">\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>"

/***/ }),

/***/ "./src/app/property/property-step3/impact-by-tree/impact-by-tree.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/property/property-step3/impact-by-tree/impact-by-tree.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ImpactByTreePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpactByTreePageModule", function() { return ImpactByTreePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _impact_by_tree_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./impact-by-tree.page */ "./src/app/property/property-step3/impact-by-tree/impact-by-tree.page.ts");







const routes = [
    {
        path: '',
        component: _impact_by_tree_page__WEBPACK_IMPORTED_MODULE_6__["ImpactByTreePage"]
    }
];
let ImpactByTreePageModule = class ImpactByTreePageModule {
};
ImpactByTreePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_impact_by_tree_page__WEBPACK_IMPORTED_MODULE_6__["ImpactByTreePage"]]
    })
], ImpactByTreePageModule);



/***/ }),

/***/ "./src/app/property/property-step3/impact-by-tree/impact-by-tree.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/property/property-step3/impact-by-tree/impact-by-tree.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L3Byb3BlcnR5LXN0ZXAzL2ltcGFjdC1ieS10cmVlL2ltcGFjdC1ieS10cmVlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/property/property-step3/impact-by-tree/impact-by-tree.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/property/property-step3/impact-by-tree/impact-by-tree.page.ts ***!
  \*******************************************************************************/
/*! exports provided: ImpactByTreePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpactByTreePage", function() { return ImpactByTreePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ImpactByTreePage = class ImpactByTreePage {
    constructor(navCtrl, router, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.impact_by_tree_fb();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    impact_by_tree_fb() {
        this.impact_by_tree_form = this.formBuilder.group({
            cutting_lopping: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name_party: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            was_tree_cutter: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            was_tree_cutter_other: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tree_branch_condition: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            how_you_know: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            how_you_know_other: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            is_owner_aware: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            how_made_aware: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            how_made_aware_other: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ImpactByTreeNext() {
        for (let v in this.impact_by_tree_form.controls) {
            this.impact_by_tree_form.controls[v].markAsTouched();
        }
        if (this.impact_by_tree_form.valid) {
            const body = {
                "cutting_lopping": this.impact_by_tree_form.value.cutting_lopping,
                "name_party": this.impact_by_tree_form.value.name_party,
                "was_tree_cutter": this.impact_by_tree_form.value.was_tree_cutter,
                "was_tree_cutter_other": this.impact_by_tree_form.value.was_tree_cutter_other,
                "tree_branch_condition": this.impact_by_tree_form.value.tree_branch_condition,
                "how_you_know": this.impact_by_tree_form.value.how_you_know,
                "how_you_know_other": this.impact_by_tree_form.value.how_you_know_other,
                "is_owner_aware": this.impact_by_tree_form.value.is_owner_aware,
                "how_made_aware": this.impact_by_tree_form.value.how_made_aware,
                "how_made_aware_other": this.impact_by_tree_form.value.how_made_aware_other,
            };
        }
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.pop();
    }
};
ImpactByTreePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
];
ImpactByTreePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-impact-by-tree',
        template: __webpack_require__(/*! raw-loader!./impact-by-tree.page.html */ "./node_modules/raw-loader/index.js!./src/app/property/property-step3/impact-by-tree/impact-by-tree.page.html"),
        styles: [__webpack_require__(/*! ./impact-by-tree.page.scss */ "./src/app/property/property-step3/impact-by-tree/impact-by-tree.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
], ImpactByTreePage);



/***/ })

}]);
//# sourceMappingURL=property-property-step3-impact-by-tree-impact-by-tree-module-es2015.js.map