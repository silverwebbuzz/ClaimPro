(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle-vehicle-step3-fire-fire-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle-step3/fire/fire.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicle/vehicle-step3/fire/fire.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n        <ion-button color=\"primary\" (click)=\"back()\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Fire</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"fire_form\" autocomplete=\"off\">\r\n\r\n    <ion-label class=\"lbl-contact\">Fire Details</ion-label>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Fire type</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"fire_type\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"Bush fire\">Bush fire</ion-select-option>\r\n        <ion-select-option value=\"Arson\">Arson</ion-select-option>\r\n        <ion-select-option value=\"Accidental\">Accidental</ion-select-option>\r\n        <ion-select-option value=\"Mechanical\">Mechanical</ion-select-option>\r\n        <ion-select-option value=\"Other\">Other</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"fire_form.controls.fire_type.hasError('required') && fire_form.controls.fire_type.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"fire_form.get('fire_type').value == 'Other'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"fire_type_other\" class=\"input-box\">\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"fire_form.controls.fire_type_other.hasError('required') && fire_form.controls.fire_type_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Damage to your vehicle</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"vehicle_damaged\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"Vehicle is drivable\">Vehicle is drivable</ion-select-option>\r\n        <ion-select-option value=\"Vehicle is not drivable\">Vehicle is not drivable</ion-select-option>\r\n        <ion-select-option value=\"Not known\">Not known</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"fire_form.controls.vehicle_damaged.hasError('required') && fire_form.controls.vehicle_damaged.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <div *ngIf=\"fire_form.get('vehicle_damaged').value == 'Vehicle is drivable'\">\r\n\r\n        <div class=\"div-docs add-margin\">\r\n\r\n            <h3 *ngIf=\"image_of_damage_image.length == 0\" text-center>Please Select Image!</h3>\r\n    \r\n            <ion-list class=\"doc-list\">\r\n                <ion-item lines=\"none\" class=\"doc-item\" *ngFor=\"let img of image_of_damage_image; index as pos\" text-wrap>\r\n                    <ion-thumbnail slot=\"start\">\r\n                        <ion-img *ngIf=\"img.fileIcon\" src=\"../../../assets/images/files.png\"></ion-img>\r\n                        <ion-img *ngIf=\"!img.fileIcon\" [src]=\"img.path\"></ion-img>\r\n                    </ion-thumbnail>\r\n                    <ion-label>\r\n                        {{ img.name }}\r\n                    </ion-label>\r\n                    <ion-button slot=\"end\" fill=\"clear\" (click)=\"delete_image_of_damage(img, pos)\">\r\n                        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-item>\r\n            </ion-list>\r\n            <div class=\"upload-btn-wrapper\">\r\n              <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach receipt</ion-button>\r\n              <input type=\"file\" (change)=\"image_of_damage($event)\"\r\n                accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n            </div>\r\n    \r\n           \r\n          </div>\r\n\r\n      <div class=\"div-que add-margin\">\r\n\r\n        <ion-label class=\"lbl-head\">Do you have a quote to repair the damage?</ion-label>\r\n\r\n        <ion-radio-group formControlName=\"quote_repair\">\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">No</ion-label>\r\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n\r\n      </div>\r\n\r\n      <div class=\"div-Y\" *ngIf=\"this.fire_form.get('quote_repair').value == 'true'\">\r\n\r\n          <div class=\"div-docs add-margin\">\r\n\r\n              <h3 *ngIf=\"quote_image.length == 0\" text-center>Please Select Image!</h3>\r\n      \r\n              <ion-list class=\"doc-list\">\r\n                  <ion-item lines=\"none\" class=\"doc-item\" *ngFor=\"let img of quote_image; index as pos\" text-wrap>\r\n                      <ion-thumbnail slot=\"start\">\r\n                          <ion-img *ngIf=\"img.fileIcon\" src=\"../../../assets/images/files.png\"></ion-img>\r\n                          <ion-img *ngIf=\"!img.fileIcon\" [src]=\"img.path\"></ion-img>\r\n                      </ion-thumbnail>\r\n                      <ion-label>\r\n                          {{ img.name }}\r\n                      </ion-label>\r\n                      <ion-button slot=\"end\" fill=\"clear\" (click)=\"delete_quote_image(img, pos)\">\r\n                          <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n                      </ion-button>\r\n                  </ion-item>\r\n              </ion-list>\r\n              <div class=\"upload-btn-wrapper\">\r\n                <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach receipt</ion-button>\r\n                <input type=\"file\" (change)=\"image_quote($event)\"\r\n                  accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n              </div>\r\n      \r\n             \r\n            </div>\r\n\r\n        <div class=\"div-que add-margin\">\r\n\r\n          <ion-label class=\"lbl-head\">Are you claiming reimbursement of any costs?</ion-label>\r\n\r\n          <ion-radio-group formControlName=\"costs_reimbursed\">\r\n            <ion-item lines=\"none\" class=\"items-radio\">\r\n              <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n              <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"items-radio\">\r\n              <ion-label class=\"lbl-radio\">No</ion-label>\r\n              <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n\r\n        </div>\r\n\r\n        <div class=\"div-Y\" *ngIf=\"this.fire_form.get('costs_reimbursed').value == 'true'\">\r\n\r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">Name of account</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"bank_account_name\" color=\"primary\" class=\"input-box\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"fire_form.controls.bank_account_name.hasError('required') && fire_form.controls.bank_account_name.touched\">\r\n            <p class=\"content\">Please Enter Name!</p>\r\n          </ion-item>\r\n\r\n          <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n            <ion-label position=\"stacked\" class=\"lbl-dropdown\">Bank</ion-label>\r\n            <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"name_bank\"\r\n              class=\"btn-select bg\" mode=\"md\">\r\n              <!-- <ion-select-option *ngFor=\"let opt of name_bank\" [value]=\"opt.optionid\">{{opt.displyvalue}}</ion-select-option> -->\r\n              <!-- <ion-select-option value=\"CBA\">CBA</ion-select-option>\r\n              <ion-select-option value=\"Bendigo\">Bendigo</ion-select-option>\r\n              <ion-select-option value=\"WESTPAC\">WESTPAC</ion-select-option>\r\n              <ion-select-option value=\"NAB\">NAB</ion-select-option>\r\n              <ion-select-option value=\"ANZ\">ANZ</ion-select-option>\r\n              <ion-select-option value=\"St George\">St George</ion-select-option>\r\n              <ion-select-option value=\"HSBC\">HSBC</ion-select-option>\r\n              <ion-select-option value=\"aa\">aa</ion-select-option>\r\n              <ion-select-option value=\"Other\">Other</ion-select-option> -->\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"fire_form.controls.name_bank.hasError('required') && fire_form.controls.name_bank.touched\">\r\n            <p class=\"content\">Please Select Required Field!</p>\r\n          </ion-item>\r\n\r\n          <!-- Other -->\r\n          <div *ngIf=\"fire_form.get('name_bank').value == 'Other'\">\r\n            <ion-item lines=\"none\" class=\"input-item add\">\r\n              <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\r\n              <ion-input type=\"text\" color=\"primary\" formControlName=\"name_bank_other\" class=\"input-box\">\r\n              </ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n              *ngIf=\"fire_form.controls.name_bank_other.hasError('required') && fire_form.controls.name_bank_other.touched\">\r\n              <p class=\"content\">Please Enter Required Field!</p>\r\n            </ion-item>\r\n          </div>\r\n\r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">Branch</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"bank_branch\" color=\"primary\" class=\"input-box\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"fire_form.controls.bank_branch.hasError('required') && fire_form.controls.bank_branch.touched\">\r\n            <p class=\"content\">Please Enter Branch!</p>\r\n          </ion-item>\r\n\r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">BSB</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"bank_bsb\" color=\"primary\" class=\"input-box\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"fire_form.controls.bank_bsb.hasError('required') && fire_form.controls.bank_bsb.touched\">\r\n            <p class=\"content\">Please Enter BSB!</p>\r\n          </ion-item>\r\n\r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">Account number</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"bank_account_number\" color=\"primary\" class=\"input-box\">\r\n            </ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"fire_form.controls.bank_account_number.hasError('required') && fire_form.controls.bank_account_number.touched\">\r\n            <p class=\"content\">Please Enter Account Number!</p>\r\n          </ion-item>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"fire_form.get('vehicle_damaged').value == 'Vehicle is not drivable'\">\r\n\r\n      <ion-label class=\"lbl-contact-blk add-margin\">Where is the vehicle?</ion-label>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Street</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"where_vehicle_street\" color=\"primary\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"fire_form.controls.where_vehicle_street.hasError('required') && fire_form.controls.where_vehicle_street.touched\">\r\n        <p class=\"content\">Please Enter Street!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Suburb/Town</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"where_vehicle_suburb\" color=\"primary\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"fire_form.controls.where_vehicle_suburb.hasError('required') && fire_form.controls.where_vehicle_suburb.touched\">\r\n        <p class=\"content\">Please Enter Town!</p>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">PostCode</ion-label>\r\n        <ion-input type=\"number\" formControlName=\"where_vehicle_post_code\" color=\"primary\" class=\"input-box\">\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"fire_form.controls.where_vehicle_post_code.hasError('required') && fire_form.controls.where_vehicle_post_code.touched\">\r\n        <p class=\"content\">Please Enter Postcode!</p>\r\n      </ion-item>\r\n\r\n      <ion-label class=\"lbl-contact-blk add-margin\">Image of damages</ion-label>\r\n\r\n      <div class=\"div-docs add-margin\">\r\n\r\n        <ion-row class=\"row-card\">\r\n          <ion-col size=\"6\" class=\"col-card\">\r\n            <ion-card class=\"card-upload\">\r\n              <ion-button fill=\"clear\" class=\"btn-close\" (click)=\"delete()\">\r\n                <ion-icon name=\"close\"></ion-icon>\r\n              </ion-button>\r\n              <img src=\"../../../assets/images/insurence-logo.png\" class=\"img-upload\" />\r\n              <ion-label class=\"lbl-filename\">FileName</ion-label>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <div class=\"upload-btn-wrapper\">\r\n          <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach Documents</ion-button>\r\n          <input type=\"file\" (change)=\"fileUpload($event)\"\r\n            accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n        </div>\r\n\r\n        <!-- <ion-item no-padding lines=\"none\" class=\"validator-error error\"\r\n          *ngIf=\"fire_form.controls.myfile.hasError('required') && fire_form.controls.myfile.touched\">\r\n          <p class=\"content text\">Please Select Your Documents!</p>\r\n        </ion-item> -->\r\n\r\n      </div>\r\n\r\n      <div class=\"div-que add-margin\">\r\n\r\n        <ion-label class=\"lbl-head\">Do you have a quote to repair the damage?</ion-label>\r\n\r\n        <ion-radio-group formControlName=\"quote_repair\">\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">No</ion-label>\r\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n\r\n      </div>\r\n\r\n      <div class=\"div-Y\" *ngIf=\"this.fire_form.get('quote_repair').value == 'true'\">\r\n\r\n        <ion-label class=\"lbl-contact-blk add\">Attach quote</ion-label>\r\n\r\n        <div class=\"div-docs add-margin\">\r\n\r\n          <ion-row class=\"row-card\">\r\n            <ion-col size=\"6\" class=\"col-card\">\r\n              <ion-card class=\"card-upload\">\r\n                <ion-button fill=\"clear\" class=\"btn-close\" (click)=\"delete()\">\r\n                  <ion-icon name=\"close\"></ion-icon>\r\n                </ion-button>\r\n                <img src=\"../../../assets/images/insurence-logo.png\" class=\"img-upload\" />\r\n                <ion-label class=\"lbl-filename\">FileName</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <div class=\"upload-btn-wrapper\">\r\n            <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach Documents</ion-button>\r\n            <input type=\"file\" (change)=\"fileUpload($event)\"\r\n              accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n          </div>\r\n\r\n          <!-- <ion-item no-padding lines=\"none\" class=\"validator-error error\"\r\n            *ngIf=\"fire_form.controls.myfile.hasError('required') && fire_form.controls.myfile.touched\">\r\n            <p class=\"content text\">Please Select Your Documents!</p>\r\n          </ion-item> -->\r\n\r\n        </div>\r\n\r\n        <div class=\"div-que add-margin\">\r\n\r\n          <ion-label class=\"lbl-head\">Are you claiming reimbursement of any costs?</ion-label>\r\n\r\n          <ion-radio-group formControlName=\"costs_reimbursed\">\r\n            <ion-item lines=\"none\" class=\"items-radio\">\r\n              <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n              <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"items-radio\">\r\n              <ion-label class=\"lbl-radio\">No</ion-label>\r\n              <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n\r\n        </div>\r\n\r\n        <div class=\"div-Y\" *ngIf=\"this.fire_form.get('costs_reimbursed').value == 'true'\">\r\n\r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">Name of account</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"bank_account_name\" color=\"primary\" class=\"input-box\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"fire_form.controls.bank_account_name.hasError('required') && fire_form.controls.bank_account_name.touched\">\r\n            <p class=\"content\">Please Enter Name!</p>\r\n          </ion-item>\r\n\r\n          <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n            <ion-label position=\"stacked\" class=\"lbl-dropdown\">Bank</ion-label>\r\n            <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"name_bank\"\r\n              class=\"btn-select bg\" mode=\"md\">\r\n              <!-- <ion-select-option *ngFor=\"let opt of name_bank\" [value]=\"opt.optionid\">{{opt.displyvalue}}</ion-select-option> -->\r\n              <!-- <ion-select-option value=\"CBA\">CBA</ion-select-option>\r\n              <ion-select-option value=\"Bendigo\">Bendigo</ion-select-option>\r\n              <ion-select-option value=\"WESTPAC\">WESTPAC</ion-select-option>\r\n              <ion-select-option value=\"NAB\">NAB</ion-select-option>\r\n              <ion-select-option value=\"ANZ\">ANZ</ion-select-option>\r\n              <ion-select-option value=\"St George\">St George</ion-select-option>\r\n              <ion-select-option value=\"HSBC\">HSBC</ion-select-option>\r\n              <ion-select-option value=\"aa\">aa</ion-select-option>\r\n              <ion-select-option value=\"Other\">Other</ion-select-option> -->\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"fire_form.controls.name_bank.hasError('required') && fire_form.controls.name_bank.touched\">\r\n            <p class=\"content\">Please Select Required Field!</p>\r\n          </ion-item>\r\n\r\n          <!-- Other -->\r\n          <div *ngIf=\"fire_form.get('name_bank').value == '1039'\">\r\n            <ion-item lines=\"none\" class=\"input-item add\">\r\n              <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\r\n              <ion-input type=\"text\" color=\"primary\" formControlName=\"name_bank_other\" class=\"input-box\">\r\n              </ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n              *ngIf=\"fire_form.controls.name_bank_other.hasError('required') && fire_form.controls.name_bank_other.touched\">\r\n              <p class=\"content\">Please Enter Required Field!</p>\r\n            </ion-item>\r\n          </div>\r\n\r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">Branch</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"bank_branch\" color=\"primary\" class=\"input-box\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"fire_form.controls.bank_branch.hasError('required') && fire_form.controls.bank_branch.touched\">\r\n            <p class=\"content\">Please Enter Branch!</p>\r\n          </ion-item>\r\n\r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">BSB</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"bank_bsb\" color=\"primary\" class=\"input-box\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"fire_form.controls.bank_bsb.hasError('required') && fire_form.controls.bank_bsb.touched\">\r\n            <p class=\"content\">Please Enter BSB!</p>\r\n          </ion-item>\r\n\r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">Account number</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"bank_account_number\" color=\"primary\" class=\"input-box\">\r\n            </ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"fire_form.controls.bank_account_number.hasError('required') && fire_form.controls.bank_account_number.touched\">\r\n            <p class=\"content\">Please Enter Account Number!</p>\r\n          </ion-item>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\" (click) = \"fireNext()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/vehicle/vehicle-step3/fire/fire.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/vehicle/vehicle-step3/fire/fire.module.ts ***!
  \***********************************************************/
/*! exports provided: FirePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirePageModule", function() { return FirePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _fire_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fire.page */ "./src/app/vehicle/vehicle-step3/fire/fire.page.ts");










var routes = [
    {
        path: '',
        component: _fire_page__WEBPACK_IMPORTED_MODULE_9__["FirePage"]
    }
];
var FirePageModule = /** @class */ (function () {
    function FirePageModule() {
    }
    FirePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fire_page__WEBPACK_IMPORTED_MODULE_9__["FirePage"]],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"], src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_5__["CommonMockService"],
            ],
        })
    ], FirePageModule);
    return FirePageModule;
}());



/***/ }),

/***/ "./src/app/vehicle/vehicle-step3/fire/fire.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/vehicle/vehicle-step3/fire/fire.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUvdmVoaWNsZS1zdGVwMy9maXJlL2ZpcmUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/vehicle/vehicle-step3/fire/fire.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/vehicle/vehicle-step3/fire/fire.page.ts ***!
  \*********************************************************/
/*! exports provided: FirePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirePage", function() { return FirePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");







var FirePage = /** @class */ (function () {
    function FirePage(navCtrl, router, _cS, route, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.route = route;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.image_of_damage_image = [];
        this.image_of_damage_image_set = [];
        this.quote_image = [];
        this.quote_image_set = [];
        this.ImageServerURL = this._cS.imageUrl();
        this.fire_fb();
        this.formControlValueChanged();
        this.setClaimData();
    }
    FirePage.prototype.ionViewWillEnter = function () {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    FirePage.prototype.fire_fb = function () {
        this.fire_form = this.formBuilder.group({
            fire_type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fire_type_other: [null],
            vehicle_damaged: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            quote_repair: [null],
            costs_reimbursed: [null],
            bank_account_name: [null],
            name_bank: [null],
            name_bank_other: [null],
            bank_branch: [null],
            bank_bsb: [null],
            bank_account_number: [null],
            where_vehicle_street: [null],
            where_vehicle_suburb: [null],
            where_vehicle_post_code: [null],
        });
    };
    FirePage.prototype.formControlValueChanged = function () {
        var _this = this;
        this.fire_form.get('vehicle_damaged')
            .valueChanges.subscribe(function (val) {
            var where_vehicle_street = _this.fire_form.get('where_vehicle_street');
            var where_vehicle_suburb = _this.fire_form.get('where_vehicle_suburb');
            var where_vehicle_post_code = _this.fire_form.get('where_vehicle_post_code');
            var quote_repair = _this.fire_form.get('quote_repair');
            var costs_reimbursed = _this.fire_form.get('costs_reimbursed');
            var bank_account_name = _this.fire_form.get('bank_account_name');
            var name_bank = _this.fire_form.get('name_bank');
            var bank_branch = _this.fire_form.get('bank_branch');
            var bank_bsb = _this.fire_form.get('bank_bsb');
            var bank_account_number = _this.fire_form.get('bank_account_number');
            where_vehicle_street.patchValue(null);
            where_vehicle_street.clearValidators();
            where_vehicle_street.updateValueAndValidity();
            where_vehicle_suburb.patchValue(null);
            where_vehicle_suburb.clearValidators();
            where_vehicle_suburb.updateValueAndValidity();
            where_vehicle_post_code.patchValue(null);
            where_vehicle_post_code.clearValidators();
            where_vehicle_post_code.updateValueAndValidity();
            quote_repair.patchValue(null);
            quote_repair.clearValidators();
            quote_repair.updateValueAndValidity();
            _this.fire_form.get('quote_repair')
                .valueChanges.subscribe(function (val) {
                bank_account_name.patchValue(null);
                bank_account_name.clearValidators();
                bank_account_name.updateValueAndValidity();
                name_bank.patchValue(null);
                name_bank.clearValidators();
                name_bank.updateValueAndValidity();
                bank_branch.patchValue(null);
                bank_branch.clearValidators();
                bank_branch.updateValueAndValidity();
                bank_bsb.patchValue(null);
                bank_bsb.clearValidators();
                bank_bsb.updateValueAndValidity();
                bank_account_number.patchValue(null);
                bank_account_number.clearValidators();
                bank_account_number.updateValueAndValidity();
                costs_reimbursed.patchValue(null);
                costs_reimbursed.clearValidators();
                costs_reimbursed.updateValueAndValidity();
                if (val == "true") {
                    costs_reimbursed.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                }
            });
            if (val == "Vehicle is not drivable") {
                where_vehicle_street.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                where_vehicle_suburb.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                where_vehicle_post_code.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            if (val != "Not known") {
                quote_repair.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                costs_reimbursed.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            _this.fire_form.get('costs_reimbursed')
                .valueChanges.subscribe(function (val) {
                if (val == "true") {
                    bank_account_name.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                    name_bank.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                    bank_branch.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                    bank_bsb.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                    bank_account_number.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                }
            });
        });
        this.fire_form.get('fire_type')
            .valueChanges.subscribe(function (val) {
            var fire_type_other = _this.fire_form.get('fire_type_other');
            if (val == "Other") {
                fire_type_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                fire_type_other.patchValue(null);
                fire_type_other.clearValidators();
                fire_type_other.updateValueAndValidity();
            }
        });
        this.fire_form.get('name_bank')
            .valueChanges.subscribe(function (val) {
            var name_bank_other = _this.fire_form.get('name_bank_other');
            if (val == "1039") {
                name_bank_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            }
            else {
                name_bank_other.patchValue(null);
                name_bank_other.clearValidators();
                name_bank_other.updateValueAndValidity();
            }
        });
    };
    FirePage.prototype.fireNext = function () {
        var _this = this;
        console.log("*********");
        for (var v in this.fire_form.controls) {
            this.fire_form.controls[v].markAsTouched();
        }
        if (this.fire_form.valid) {
            var step4 = {
                "step": 'step4',
                "ClaimNumber": localStorage.getItem('ClaimNumber'),
                "fire_type": this.fire_form.value.fire_type,
                "fire_type_other": this.fire_form.value.fire_type_other,
                "vehicle_damaged": this.fire_form.value.vehicle_damaged,
                "quote_repair": this.fire_form.value.quote_repair,
                "costs_reimbursed": this.fire_form.value.costs_reimbursed,
                "bank_account_name": this.fire_form.value.bank_account_name,
                "name_bank": this.fire_form.value.name_bank,
                "name_bank_other": this.fire_form.value.name_bank_other,
                "bank_branch": this.fire_form.value.bank_branch,
                "bank_bsb": this.fire_form.value.bank_bsb,
                "bank_account_number": this.fire_form.value.bank_account_number,
                "where_vehicle_street": this.fire_form.value.where_vehicle_street,
                "image_of_damage": this.image_of_damage_image_set,
                "quote_image": this.quote_image_set,
            };
            this._cS.put_API(this._cS.URL_Vehicle_Claim_Post(), step4)
                .subscribe(function (data) {
                if (data.status == 0) {
                    _this.image_of_damage_image_set = [];
                    _this.quote_image_set = [];
                    _this.setClaimData();
                    _this.router.navigate(['/vehicle-step5']);
                }
                else {
                }
            }, function (err) {
            });
        }
    };
    FirePage.prototype.delete_image_of_damage = function (img, position) {
        var _this = this;
        this.image_of_damage_image.splice(position, 1);
        if (img.val) {
            var details = {
                ClaimNumber: localStorage.getItem('ClaimNumber'),
                image_name: img.val,
                image_type: 'image_of_damage',
            };
            this._cS.post_API(this._cS.URL_image_delet(), details)
                .subscribe(function (data) {
                console.log('data', data);
                if (data.status == 0) {
                    var dynamicI = _this.dynamicImages(data.data, 'image_of_damage/');
                    _this.image_of_damage_image = dynamicI;
                    //this._cS.Display_Toaster('success', 'Image successfully deleted.');
                }
                else {
                    //this._cS.Display_Toaster('error', data.message);
                }
            });
        }
    };
    FirePage.prototype.image_of_damage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader_1 = new FileReader();
            var extension = event.target.files[0].name.split('.').pop().toLowerCase();
            var fileName = event.target.files[0].name;
            var fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
            var formData = new FormData();
            formData.append('file', event.target.files[0]);
            formData.append("image_type", "image_of_damage");
            formData.append("claimNumber", localStorage.getItem('ClaimNumber'));
            this._cS.ImageUpload(formData).subscribe(function (val) {
                reader_1.onload = function (event) {
                    var json = {
                        fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
                        path: event.target.result,
                        name: val.data[0].file_name,
                        val: undefined
                    };
                    _this.image_of_damage_image.push(json);
                };
                reader_1.readAsDataURL(event.target.files[0]);
                _this.image_of_damage_image_set.push(val.data[0].file_name);
            });
        }
    };
    FirePage.prototype.delete_quote_image = function (img, position) {
        var _this = this;
        this.quote_image.splice(position, 1);
        if (img.val) {
            var details = {
                ClaimNumber: localStorage.getItem('ClaimNumber'),
                image_name: img.val,
                image_type: 'quote_image',
            };
            this._cS.post_API(this._cS.URL_image_delet(), details)
                .subscribe(function (data) {
                console.log('data', data);
                if (data.status == 0) {
                    var dynamicI = _this.dynamicImages(data.data, 'quote_image/');
                    _this.quote_image = dynamicI;
                    //this._cS.Display_Toaster('success', 'Image successfully deleted.');
                }
                else {
                    //this._cS.Display_Toaster('error', data.message);
                }
            });
        }
    };
    FirePage.prototype.image_quote = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader_2 = new FileReader();
            var extension = event.target.files[0].name.split('.').pop().toLowerCase();
            var fileName = event.target.files[0].name;
            var fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
            var formData = new FormData();
            formData.append('file', event.target.files[0]);
            formData.append("image_type", "quote_image");
            formData.append("claimNumber", localStorage.getItem('ClaimNumber'));
            this._cS.ImageUpload(formData).subscribe(function (val) {
                reader_2.onload = function (event) {
                    var json = {
                        fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
                        path: event.target.result,
                        name: val.data[0].file_name,
                        val: undefined
                    };
                    _this.quote_image.push(json);
                };
                reader_2.readAsDataURL(event.target.files[0]);
                _this.quote_image_set.push(val.data[0].file_name);
            });
        }
    };
    FirePage.prototype.dynamicImages = function (array, path) {
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
    FirePage.prototype.setClaimData = function () {
        var _this = this;
        var claimNumber = localStorage.getItem('ClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe(function (data) {
                if (data.status == 0) {
                    console.log("editdate", data);
                    _this.editClaimData = data.data;
                    _this.fire_form.setValue({
                        fire_type: _this.editClaimData.fire_type,
                        fire_type_other: _this.editClaimData.fire_type_other,
                        vehicle_damaged: _this.editClaimData.vehicle_damaged,
                        where_vehicle_street: _this.editClaimData.where_vehicle_street,
                        where_vehicle_suburb: _this.editClaimData.where_vehicle_suburb,
                        where_vehicle_post_code: _this.editClaimData.where_vehicle_post_code,
                        quote_repair: _this.editClaimData.quote_repair,
                        costs_reimbursed: _this.editClaimData.costs_reimbursed,
                        bank_account_name: _this.editClaimData.bank_account_name,
                        name_bank: _this.editClaimData.name_bank,
                        name_bank_other: _this.editClaimData.name_bank_other,
                        bank_branch: _this.editClaimData.bank_branch,
                        bank_bsb: _this.editClaimData.bank_bsb,
                        bank_account_number: _this.editClaimData.bank_account_number,
                    });
                    if (_this.editClaimData.image_of_damage) {
                        var dynamicI = (_this.dynamicImages(_this.editClaimData.image_of_damage, '/image_of_damage/'));
                        _this.image_of_damage_image = dynamicI;
                    }
                    if (_this.editClaimData.quote_image) {
                        var dynamicI = (_this.dynamicImages(_this.editClaimData.quote_image, '/quote_image/'));
                        _this.quote_image = dynamicI;
                    }
                }
            });
        }
    };
    FirePage.prototype.ngOnInit = function () {
    };
    FirePage.prototype.next = function () {
        this.router.navigate(['/vehicle-step5']);
    };
    FirePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    FirePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
    ]; };
    FirePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fire',
            template: __webpack_require__(/*! raw-loader!./fire.page.html */ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle-step3/fire/fire.page.html"),
            styles: [__webpack_require__(/*! ./fire.page.scss */ "./src/app/vehicle/vehicle-step3/fire/fire.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
    ], FirePage);
    return FirePage;
}());



/***/ })

}]);
//# sourceMappingURL=vehicle-vehicle-step3-fire-fire-module-es5.js.map