(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle-vehicle-step3-whether-whether-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle-step3/whether/whether.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vehicle/vehicle-step3/whether/whether.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n        <ion-button color=\"primary\" (click)=\"back()\">\r\n          <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Weather</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"weather_form\" autocomplete=\"off\">\r\n\r\n    <ion-label class=\"lbl-contact\">Weather Details</ion-label>\r\n\r\n    <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">Weather type</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"weather_type\"\r\n        class=\"btn-select bg\" mode=\"md\">\r\n        <ion-select-option value=\"Lightning\">Lightning</ion-select-option>\r\n        <ion-select-option value=\"Hail\">Hail</ion-select-option>\r\n        <ion-select-option value=\"Rainwater falling from sky\">Rainwater falling from sky</ion-select-option>\r\n        <ion-select-option value=\"Snow\">Snow</ion-select-option>\r\n        <ion-select-option value=\"Wind\">Wind</ion-select-option>\r\n        <ion-select-option value=\"Rainwater on ground\">Rainwater on ground</ion-select-option>\r\n        <ion-select-option value=\"Other\">Other</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"weather_form.controls.weather_type.hasError('required') && weather_form.controls.weather_type.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"weather_form.get('weather_type').value == 'Other'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"weather_type_other\" class=\"input-box\">\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"weather_form.controls.weather_type_other.hasError('required') && weather_form.controls.weather_type_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <div class=\"div-que add-margin\">\r\n\r\n      <ion-label class=\"lbl-head\">Was the loss/damage caused by a natural disaster?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"cat_event\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n\r\n    </div>\r\n\r\n    <div class=\"div-que add-margin\">\r\n\r\n      <ion-label class=\"lbl-head\">Has your vehicle suffered damage?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"vehicle_suffered_damage\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n\r\n    </div>\r\n\r\n    <div class=\"div-Y\" *ngIf=\"this.weather_form.get('vehicle_suffered_damage').value == 'true'\">\r\n\r\n      <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">Damage to your vehicle</ion-label>\r\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"vehicle_damaged\"\r\n          class=\"btn-select bg\" mode=\"md\">\r\n          <ion-select-option value=\"Vehicle is drivable\">Vehicle is drivable</ion-select-option>\r\n          <ion-select-option value=\"Vehicle is not drivable\">Vehicle is not drivable</ion-select-option>\r\n          <ion-select-option value=\"Not known\">Not known</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"weather_form.controls.vehicle_damaged.hasError('required') && weather_form.controls.vehicle_damaged.touched\">\r\n        <p class=\"content\">Please Select Required Field!</p>\r\n      </ion-item>\r\n\r\n      <div *ngIf=\"weather_form.get('vehicle_damaged').value == 'Vehicle is drivable'\">\r\n\r\n        <ion-label class=\"lbl-contact-blk add-margin\">Image of damages</ion-label>\r\n\r\n        <div class=\"div-docs add-margin\">\r\n\r\n          <ion-row class=\"row-card\">\r\n            <ion-col size=\"6\" class=\"col-card\">\r\n              <ion-card class=\"card-upload\">\r\n                <ion-button fill=\"clear\" class=\"btn-close\" (click)=\"delete()\">\r\n                  <ion-icon name=\"close\"></ion-icon>\r\n                </ion-button>\r\n                <img src=\"../../../assets/images/insurence-logo.png\" class=\"img-upload\" />\r\n                <ion-label class=\"lbl-filename\">FileName</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <div class=\"upload-btn-wrapper\">\r\n            <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach Documents</ion-button>\r\n            <input type=\"file\" (change)=\"fileUpload($event)\"\r\n              accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n          </div>\r\n\r\n          <!-- <ion-item no-padding lines=\"none\" class=\"validator-error error\"\r\n            *ngIf=\"weather_form.controls.myfile.hasError('required') && weather_form.controls.myfile.touched\">\r\n            <p class=\"content text\">Please Select Your Documents!</p>\r\n          </ion-item> -->\r\n\r\n        </div>\r\n\r\n        <div class=\"div-que add-margin\">\r\n\r\n          <ion-label class=\"lbl-head\">Do you have a quote to repair the damage?</ion-label>\r\n\r\n          <ion-radio-group formControlName=\"quote_repair\">\r\n            <ion-item lines=\"none\" class=\"items-radio\">\r\n              <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n              <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"items-radio\">\r\n              <ion-label class=\"lbl-radio\">No</ion-label>\r\n              <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n\r\n        </div>\r\n\r\n        <div class=\"div-Y\" *ngIf=\"this.weather_form.get('quote_repair').value == 'true'\">\r\n\r\n          <ion-label class=\"lbl-contact-blk add\">Attach quote</ion-label>\r\n\r\n          <div class=\"div-docs add-margin\">\r\n\r\n            <ion-row class=\"row-card\">\r\n              <ion-col size=\"6\" class=\"col-card\">\r\n                <ion-card class=\"card-upload\">\r\n                  <ion-button fill=\"clear\" class=\"btn-close\" (click)=\"delete()\">\r\n                    <ion-icon name=\"close\"></ion-icon>\r\n                  </ion-button>\r\n                  <img src=\"../../../assets/images/insurence-logo.png\" class=\"img-upload\" />\r\n                  <ion-label class=\"lbl-filename\">FileName</ion-label>\r\n                </ion-card>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <div class=\"upload-btn-wrapper\">\r\n              <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach Documents</ion-button>\r\n              <input type=\"file\" (change)=\"fileUpload($event)\"\r\n                accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n            </div>\r\n\r\n            <!-- <ion-item no-padding lines=\"none\" class=\"validator-error error\"\r\n              *ngIf=\"weather_form.controls.myfile.hasError('required') && weather_form.controls.myfile.touched\">\r\n              <p class=\"content text\">Please Select Your Documents!</p>\r\n            </ion-item> -->\r\n\r\n          </div>\r\n\r\n          <div class=\"div-que add-margin\">\r\n\r\n            <ion-label class=\"lbl-head\">Are you claiming reimbursement of any costs?</ion-label>\r\n\r\n            <ion-radio-group formControlName=\"costs_reimbursed\">\r\n              <ion-item lines=\"none\" class=\"items-radio\">\r\n                <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n                <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n              </ion-item>\r\n              <ion-item lines=\"none\" class=\"items-radio\">\r\n                <ion-label class=\"lbl-radio\">No</ion-label>\r\n                <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n\r\n          </div>\r\n\r\n          <div class=\"div-Y\" *ngIf=\"this.weather_form.get('costs_reimbursed').value == 'true'\">\r\n\r\n            <ion-item lines=\"none\" class=\"input-item add\">\r\n              <ion-label position=\"stacked\" class=\"input-lbl\">Name of account</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"bank_account_name\" color=\"primary\" class=\"input-box\">\r\n              </ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n              *ngIf=\"weather_form.controls.bank_account_name.hasError('required') && weather_form.controls.bank_account_name.touched\">\r\n              <p class=\"content\">Please Enter Name!</p>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n              <ion-label position=\"stacked\" class=\"lbl-dropdown\">Bank</ion-label>\r\n              <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"name_bank\"\r\n                class=\"btn-select bg\" mode=\"md\">\r\n                <ion-select-option value=\"CBA\">CBA</ion-select-option>\r\n                <ion-select-option value=\"Bendigo\">Bendigo</ion-select-option>\r\n                <ion-select-option value=\"WESTPAC\">WESTPAC</ion-select-option>\r\n                <ion-select-option value=\"NAB\">NAB</ion-select-option>\r\n                <ion-select-option value=\"ANZ\">ANZ</ion-select-option>\r\n                <ion-select-option value=\"St George\">St George</ion-select-option>\r\n                <ion-select-option value=\"HSBC\">HSBC</ion-select-option>\r\n                <ion-select-option value=\"aa\">aa</ion-select-option>\r\n                <ion-select-option value=\"Other\">Other</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n\r\n            <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n              *ngIf=\"weather_form.controls.name_bank.hasError('required') && weather_form.controls.name_bank.touched\">\r\n              <p class=\"content\">Please Select Required Field!</p>\r\n            </ion-item>\r\n\r\n            <!-- Other -->\r\n            <div *ngIf=\"weather_form.get('name_bank').value == 'Other'\">\r\n              <ion-item lines=\"none\" class=\"input-item add\">\r\n                <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\r\n                <ion-input type=\"text\" color=\"primary\" formControlName=\"name_bank_other\" class=\"input-box\">\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n                *ngIf=\"weather_form.controls.name_bank_other.hasError('required') && weather_form.controls.name_bank_other.touched\">\r\n                <p class=\"content\">Please Enter Required Field!</p>\r\n              </ion-item>\r\n            </div>\r\n\r\n            <ion-item lines=\"none\" class=\"input-item add\">\r\n              <ion-label position=\"stacked\" class=\"input-lbl\">Branch</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"bank_branch\" color=\"primary\" class=\"input-box\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n              *ngIf=\"weather_form.controls.bank_branch.hasError('required') && weather_form.controls.bank_branch.touched\">\r\n              <p class=\"content\">Please Enter Branch!</p>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\" class=\"input-item add\">\r\n              <ion-label position=\"stacked\" class=\"input-lbl\">BSB</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"bank_bsb\" color=\"primary\" class=\"input-box\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n              *ngIf=\"weather_form.controls.bank_bsb.hasError('required') && weather_form.controls.bank_bsb.touched\">\r\n              <p class=\"content\">Please Enter BSB!</p>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\" class=\"input-item add\">\r\n              <ion-label position=\"stacked\" class=\"input-lbl\">Account number</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"bank_account_number\" color=\"primary\" class=\"input-box\">\r\n              </ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n              *ngIf=\"weather_form.controls.bank_account_number.hasError('required') && weather_form.controls.bank_account_number.touched\">\r\n              <p class=\"content\">Please Enter Account Number!</p>\r\n            </ion-item>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div *ngIf=\"weather_form.get('vehicle_damaged').value == 'Vehicle is not drivable'\">\r\n\r\n        <ion-label class=\"lbl-contact-blk add-margin\">Where is the vehicle?</ion-label>\r\n\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Street</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"where_vehicle_street\" color=\"primary\" class=\"input-box\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"weather_form.controls.where_vehicle_street.hasError('required') && weather_form.controls.where_vehicle_street.touched\">\r\n          <p class=\"content\">Please Enter Street!</p>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Suburb/Town</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"where_vehicle_suburb\" color=\"primary\" class=\"input-box\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"weather_form.controls.where_vehicle_suburb.hasError('required') && weather_form.controls.where_vehicle_suburb.touched\">\r\n          <p class=\"content\">Please Enter Town!</p>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">PostCode</ion-label>\r\n          <ion-input type=\"number\" formControlName=\"where_vehicle_post_code\" color=\"primary\" class=\"input-box\">\r\n          </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"weather_form.controls.where_vehicle_post_code.hasError('required') && weather_form.controls.where_vehicle_post_code.touched\">\r\n          <p class=\"content\">Please Enter Postcode!</p>\r\n        </ion-item>\r\n\r\n        <ion-label class=\"lbl-contact-blk add-margin\">Image of damages</ion-label>\r\n\r\n        <div class=\"div-docs add-margin\">\r\n\r\n          <ion-row class=\"row-card\">\r\n            <ion-col size=\"6\" class=\"col-card\">\r\n              <ion-card class=\"card-upload\">\r\n                <ion-button fill=\"clear\" class=\"btn-close\" (click)=\"delete()\">\r\n                  <ion-icon name=\"close\"></ion-icon>\r\n                </ion-button>\r\n                <img src=\"../../../assets/images/insurence-logo.png\" class=\"img-upload\" />\r\n                <ion-label class=\"lbl-filename\">FileName</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <div class=\"upload-btn-wrapper\">\r\n            <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach Documents</ion-button>\r\n            <input type=\"file\" (change)=\"fileUpload($event)\"\r\n              accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n          </div>\r\n\r\n          <!-- <ion-item no-padding lines=\"none\" class=\"validator-error error\"\r\n            *ngIf=\"weather_form.controls.myfile.hasError('required') && weather_form.controls.myfile.touched\">\r\n            <p class=\"content text\">Please Select Your Documents!</p>\r\n          </ion-item> -->\r\n\r\n        </div>\r\n\r\n        <div class=\"div-que add-margin\">\r\n\r\n          <ion-label class=\"lbl-head\">Do you have a quote to repair the damage?</ion-label>\r\n\r\n          <ion-radio-group formControlName=\"quote_repair\">\r\n            <ion-item lines=\"none\" class=\"items-radio\">\r\n              <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n              <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"items-radio\">\r\n              <ion-label class=\"lbl-radio\">No</ion-label>\r\n              <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n\r\n        </div>\r\n\r\n        <div class=\"div-Y\" *ngIf=\"this.weather_form.get('quote_repair').value == 'true'\">\r\n\r\n          <ion-label class=\"lbl-contact-blk add\">Attach quote</ion-label>\r\n\r\n          <div class=\"div-docs add-margin\">\r\n\r\n            <ion-row class=\"row-card\">\r\n              <ion-col size=\"6\" class=\"col-card\">\r\n                <ion-card class=\"card-upload\">\r\n                  <ion-button fill=\"clear\" class=\"btn-close\" (click)=\"delete()\">\r\n                    <ion-icon name=\"close\"></ion-icon>\r\n                  </ion-button>\r\n                  <img src=\"../../../assets/images/insurence-logo.png\" class=\"img-upload\" />\r\n                  <ion-label class=\"lbl-filename\">FileName</ion-label>\r\n                </ion-card>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <div class=\"upload-btn-wrapper\">\r\n              <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach Documents</ion-button>\r\n              <input type=\"file\" (change)=\"fileUpload($event)\"\r\n                accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n            </div>\r\n\r\n            <!-- <ion-item no-padding lines=\"none\" class=\"validator-error error\"\r\n              *ngIf=\"weather_form.controls.myfile.hasError('required') && weather_form.controls.myfile.touched\">\r\n              <p class=\"content text\">Please Select Your Documents!</p>\r\n            </ion-item> -->\r\n\r\n          </div>\r\n\r\n          <div class=\"div-que add-margin\">\r\n\r\n            <ion-label class=\"lbl-head\">Are you claiming reimbursement of any costs?</ion-label>\r\n\r\n            <ion-radio-group formControlName=\"costs_reimbursed\">\r\n              <ion-item lines=\"none\" class=\"items-radio\">\r\n                <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n                <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n              </ion-item>\r\n              <ion-item lines=\"none\" class=\"items-radio\">\r\n                <ion-label class=\"lbl-radio\">No</ion-label>\r\n                <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n\r\n          </div>\r\n\r\n          <div class=\"div-Y\" *ngIf=\"this.weather_form.get('costs_reimbursed').value == 'true'\">\r\n\r\n            <ion-item lines=\"none\" class=\"input-item add\">\r\n              <ion-label position=\"stacked\" class=\"input-lbl\">Name of account</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"bank_account_name\" color=\"primary\" class=\"input-box\">\r\n              </ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n              *ngIf=\"weather_form.controls.bank_account_name.hasError('required') && weather_form.controls.bank_account_name.touched\">\r\n              <p class=\"content\">Please Enter Name!</p>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\" class=\"item-dropdown add\">\r\n              <ion-label position=\"stacked\" class=\"lbl-dropdown\">Bank</ion-label>\r\n              <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"name_bank\"\r\n                class=\"btn-select bg\" mode=\"md\">\r\n                <ion-select-option value=\"CBA\">CBA</ion-select-option>\r\n                <ion-select-option value=\"Bendigo\">Bendigo</ion-select-option>\r\n                <ion-select-option value=\"WESTPAC\">WESTPAC</ion-select-option>\r\n                <ion-select-option value=\"NAB\">NAB</ion-select-option>\r\n                <ion-select-option value=\"ANZ\">ANZ</ion-select-option>\r\n                <ion-select-option value=\"St George\">St George</ion-select-option>\r\n                <ion-select-option value=\"HSBC\">HSBC</ion-select-option>\r\n                <ion-select-option value=\"aa\">aa</ion-select-option>\r\n                <ion-select-option value=\"Other\">Other</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n\r\n            <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n              *ngIf=\"weather_form.controls.name_bank.hasError('required') && weather_form.controls.name_bank.touched\">\r\n              <p class=\"content\">Please Select Required Field!</p>\r\n            </ion-item>\r\n\r\n            <!-- Other -->\r\n            <div *ngIf=\"weather_form.get('name_bank').value == 'Other'\">\r\n              <ion-item lines=\"none\" class=\"input-item add\">\r\n                <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Policy Holder Business Name</ion-label> -->\r\n                <ion-input type=\"text\" color=\"primary\" formControlName=\"name_bank_other\" class=\"input-box\">\r\n                </ion-input>\r\n              </ion-item>\r\n\r\n              <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n                *ngIf=\"weather_form.controls.name_bank_other.hasError('required') && weather_form.controls.name_bank_other.touched\">\r\n                <p class=\"content\">Please Enter Required Field!</p>\r\n              </ion-item>\r\n            </div>\r\n\r\n            <ion-item lines=\"none\" class=\"input-item add\">\r\n              <ion-label position=\"stacked\" class=\"input-lbl\">Branch</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"bank_branch\" color=\"primary\" class=\"input-box\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n              *ngIf=\"weather_form.controls.bank_branch.hasError('required') && weather_form.controls.bank_branch.touched\">\r\n              <p class=\"content\">Please Enter Branch!</p>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\" class=\"input-item add\">\r\n              <ion-label position=\"stacked\" class=\"input-lbl\">BSB</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"bank_bsb\" color=\"primary\" class=\"input-box\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n              *ngIf=\"weather_form.controls.bank_bsb.hasError('required') && weather_form.controls.bank_bsb.touched\">\r\n              <p class=\"content\">Please Enter BSB!</p>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\" class=\"input-item add\">\r\n              <ion-label position=\"stacked\" class=\"input-lbl\">Account number</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"bank_account_number\" color=\"primary\" class=\"input-box\">\r\n              </ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n              *ngIf=\"weather_form.controls.bank_account_number.hasError('required') && weather_form.controls.bank_account_number.touched\">\r\n              <p class=\"content\">Please Enter Account Number!</p>\r\n            </ion-item>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/vehicle/vehicle-step3/whether/whether.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step3/whether/whether.module.ts ***!
  \*****************************************************************/
/*! exports provided: WhetherPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhetherPageModule", function() { return WhetherPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _whether_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./whether.page */ "./src/app/vehicle/vehicle-step3/whether/whether.page.ts");







const routes = [
    {
        path: '',
        component: _whether_page__WEBPACK_IMPORTED_MODULE_6__["WhetherPage"]
    }
];
let WhetherPageModule = class WhetherPageModule {
};
WhetherPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_whether_page__WEBPACK_IMPORTED_MODULE_6__["WhetherPage"]]
    })
], WhetherPageModule);



/***/ }),

/***/ "./src/app/vehicle/vehicle-step3/whether/whether.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step3/whether/whether.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUvdmVoaWNsZS1zdGVwMy93aGV0aGVyL3doZXRoZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/vehicle/vehicle-step3/whether/whether.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/vehicle/vehicle-step3/whether/whether.page.ts ***!
  \***************************************************************/
/*! exports provided: WhetherPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhetherPage", function() { return WhetherPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");







let WhetherPage = class WhetherPage {
    constructor(navCtrl, router, _cS, route, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.route = route;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.weather_fb();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    weather_fb() {
        this.weather_form = this.formBuilder.group({
            weather_type: [null],
            weather_type_other: [null],
            cat_event: [null],
            vehicle_suffered_damage: [null],
            vehicle_damaged: [null],
            where_vehicle_street: [null],
            where_vehicle_suburb: [null],
            where_vehicle_post_code: [null],
            quote_repair: [null],
            costs_reimbursed: [null],
            bank_account_name: [null],
            name_bank: [null],
            name_bank_other: [null],
            bank_branch: [null],
            bank_bsb: [null],
            bank_account_number: [null],
        });
    }
    weatherNext() {
        for (let v in this.weather_form.controls) {
            this.weather_form.controls[v].markAsTouched();
        }
        if (this.weather_form.valid) {
            const step4 = {
                "weather_type": this.weather_form.value.weather_type,
                "weather_type_other": this.weather_form.value.weather_type_other,
                "cat_event": this.weather_form.value.cat_event,
                "vehicle_suffered_damage": this.weather_form.value.vehicle_suffered_damage,
                "vehicle_damaged": this.weather_form.value.vehicle_damaged,
                "quote_repair": this.weather_form.value.quote_repair,
                "costs_reimbursed": this.weather_form.value.costs_reimbursed,
                "bank_account_name": this.weather_form.value.bank_account_name,
                "name_bank": this.weather_form.value.name_bank,
                "name_bank_other": this.weather_form.value.name_bank_other,
                "bank_branch": this.weather_form.value.bank_branch,
                "bank_bsb": this.weather_form.value.bank_bsb,
                "bank_account_number": this.weather_form.value.bank_account_number,
                "where_vehicle_street": this.weather_form.value.where_vehicle_street,
                "where_vehicle_suburb": this.weather_form.value.where_vehicle_suburb,
                "where_vehicle_post_code": this.weather_form.value.where_vehicle_post_code,
            };
        }
    }
    ngOnInit() {
    }
    next() {
        this.router.navigate(['/vehicle-step5']);
    }
    back() {
        this.navCtrl.pop();
    }
};
WhetherPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] }
];
WhetherPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-whether',
        template: __webpack_require__(/*! raw-loader!./whether.page.html */ "./node_modules/raw-loader/index.js!./src/app/vehicle/vehicle-step3/whether/whether.page.html"),
        styles: [__webpack_require__(/*! ./whether.page.scss */ "./src/app/vehicle/vehicle-step3/whether/whether.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"]])
], WhetherPage);



/***/ })

}]);
//# sourceMappingURL=vehicle-vehicle-step3-whether-whether-module-es2015.js.map