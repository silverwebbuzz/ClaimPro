(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medical-malpractice-medical-step4-medical-step4-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/medical-malpractice/medical-step4/medical-step4.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/medical-malpractice/medical-step4/medical-step4.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons>\r\n      <ion-button color=\"primary\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title color=\"primary\" class=\"head\">Incident details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n  <form [formGroup]=\"medical_form_step4\" autocomplete=\"off\">\r\n  \r\n    <div class=\"div-que\">\r\n      <ion-label class=\"lbl-head\">Has a patient made a complaint of injury/damage?</ion-label>\r\n  \r\n      <ion-radio-group formControlName=\"patient_complaint\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"div-Y\" *ngIf=\"this.medical_form_step4.get('patient_complaint').value == 'true'\">\r\n    \r\n      <ion-item lines=\"none\" class=\"input-item\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Date you were notified of the complaint</ion-label>\r\n        <ion-datetime placeholder=\"Select Date\" class=\"input-box box\" formControlName=\"loss_date_discovery\"\r\n          displayFormat=\"DD MMM YYYY\" min=\"2016-01-01\" max=\"2039-12-31\"></ion-datetime>\r\n      </ion-item>\r\n    \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step4.controls.loss_date_discovery.hasError('required') && medical_form_step4.controls.loss_date_discovery.touched\">\r\n        <p class=\"content\">Please Select Date!</p>\r\n      </ion-item>\r\n    \r\n      <div class=\"div-que add-margin\">\r\n        <ion-label class=\"lbl-head\">Is the complaint in writing?</ion-label>\r\n    \r\n        <ion-radio-group formControlName=\"complaint_writing\">\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n            <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n          <ion-item lines=\"none\" class=\"items-radio\">\r\n            <ion-label class=\"lbl-radio\">No</ion-label>\r\n            <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </div>\r\n    \r\n      <div class=\"div-Y\" *ngIf=\"this.medical_form_step4.get('complaint_writing').value == 'true'\">\r\n    \r\n        <ion-label class=\"lbl-contact-blk add less-margin\">Attach all documents</ion-label>\r\n    \r\n        <div class=\"div-docs\">\r\n    \r\n          <h3 *ngIf=\"complaint_documents_image.length == 0\" text-center>Please Select Image!</h3>\r\n    \r\n          <ion-list class=\"doc-list\">\r\n            <ion-item lines=\"none\" class=\"doc-item\" *ngFor=\"let img of complaint_documents_image; index as pos\" text-wrap>\r\n              <ion-thumbnail slot=\"start\">\r\n                <ion-img *ngIf=\"img.fileIcon2\" src=\"../../../assets/images/files.png\"></ion-img>\r\n                <ion-img *ngIf=\"!img.fileIcon2\" [src]=\"img.path\"></ion-img>\r\n              </ion-thumbnail>\r\n              <ion-label>\r\n                {{ img.name }}\r\n              </ion-label>\r\n              <ion-button slot=\"end\" fill=\"clear\" (click)=\"delete_complaint_documents(img, pos)\">\r\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n              </ion-button>\r\n            </ion-item>\r\n          </ion-list>\r\n          <div class=\"upload-btn-wrapper\">\r\n            <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach all documents</ion-button>\r\n            <input type=\"file\" (change)=\"complaint_documents($event)\"\r\n              accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" />\r\n          </div>\r\n    \r\n    \r\n        </div>\r\n    \r\n        <ion-label class=\"lbl-contact add-margin\">Complainant details</ion-label>\r\n    \r\n      </div>\r\n    \r\n    </div>\r\n\r\n    <ion-label class=\"lbl-contact add-margin\"  *ngIf=\"this.medical_form_step4.get('complaint_writing').value != 'true'\">Patient details</ion-label>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">First Name</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"tp_christian_patient\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"medical_form_step4.controls.tp_christian_patient.hasError('required') && medical_form_step4.controls.tp_christian_patient.touched\">\r\n      <p class=\"content\">Please Enter First Name!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Last Name</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"tp_name_patient\" color=\"primary\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"medical_form_step4.controls.tp_name_patient.hasError('required') && medical_form_step4.controls.tp_name_patient.touched\">\r\n      <p class=\"content\">Please Enter Last Name!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Street</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"patient_street\" color=\"primary\" class=\"input-box\" id=\"patient_street\" (ionFocus)=\"patientAddress()\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"medical_form_step4.controls.patient_street.hasError('required') && medical_form_step4.controls.patient_street.touched\">\r\n      <p class=\"content\">Please Enter Street!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Suburb/Town</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"patient_suburb_town\" color=\"primary\" class=\"input-box\"  id=\"patient_suburb_town\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"medical_form_step4.controls.patient_suburb_town.hasError('required') && medical_form_step4.controls.patient_suburb_town.touched\">\r\n      <p class=\"content\">Please Enter Town!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">PostCode</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"patient_post_code\" color=\"primary\" class=\"input-box\" id=\"patient_post_code\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"medical_form_step4.controls.patient_post_code.hasError('required') && medical_form_step4.controls.patient_post_code.touched\">\r\n      <p class=\"content\">Please Enter Postcode!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">State</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"patient_state\" color=\"primary\" class=\"input-box\" id=\"patient_state\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"medical_form_step4.controls.patient_state.hasError('required') && medical_form_step4.controls.patient_state.touched\">\r\n      <p class=\"content\">Please Enter State!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Email</ion-label>\r\n      <ion-input type=\"email\" formControlName=\"patient_email\" color=\"primary\" class=\"input-box\" id=\"patient_email\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"medical_form_step4.controls.patient_email.hasError('required') && medical_form_step4.controls.patient_email.touched\">\r\n      <p class=\"content\">Email Address is required!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"medical_form_step4.controls.patient_email.hasError('pattern') && medical_form_step4.controls.patient_email.touched\">\r\n      <p class=\"content\">Please Enter a Valid Email Address!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl\">Telephone</ion-label>\r\n      <ion-input type=\"number\" formControlName=\"patient_telephone\" color=\"primary\" class=\"input-box\" id=\"patient_telephone\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"medical_form_step4.controls.patient_telephone.hasError('required') && medical_form_step4.controls.patient_telephone.touched\">\r\n      <p class=\"content\">Please Enter Telephone!</p>\r\n    </ion-item>\r\n\r\n    <div class=\"div-Y\" *ngIf=\"this.medical_form_step4.get('patient_complaint').value == 'true'\">\r\n    \r\n      <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">Age of patient</ion-label>\r\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"age_patient\" class=\"btn-select bg\" mode=\"md\">\r\n          <ion-select-option value=\"Under 18\">Under 18</ion-select-option>\r\n          <ion-select-option value=\"18-25\">18-25</ion-select-option>\r\n          <ion-select-option value=\"26-40\">26-40</ion-select-option>\r\n          <ion-select-option value=\"41-50\">41-50</ion-select-option>\r\n          <ion-select-option value=\"51-60\">51-60</ion-select-option>\r\n          <ion-select-option value=\"Over 60\">Over 60</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step4.controls.age_patient.hasError('required') && medical_form_step4.controls.age_patient.touched\">\r\n        <p class=\"content\">Please Select Required Field!</p>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">Where did you treat the patient?</ion-label>\r\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"where_incident\" class=\"btn-select bg\" mode=\"md\">\r\n            <ion-select-option *ngFor=\"let opt of where_incident | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n          <!-- <ion-select-option value=\"Private Practice\">Private Practice</ion-select-option>\r\n          <ion-select-option value=\"Patients Home\">Patients Home</ion-select-option>\r\n          <ion-select-option value=\"Hospital\">Hospital</ion-select-option>\r\n          <ion-select-option value=\"Rehabilitation Care Facility\">Rehabilitation Care Facility</ion-select-option>\r\n          <ion-select-option value=\"Sporting Club/Ground\">Sporting Club/Ground</ion-select-option>\r\n          <ion-select-option value=\"Gymnasium\">Gymnasium</ion-select-option>\r\n          <ion-select-option value=\"Other\">Other</ion-select-option> -->\r\n        </ion-select>\r\n      </ion-item>\r\n      \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step4.controls.where_incident.hasError('required') && medical_form_step4.controls.where_incident.touched\">\r\n        <p class=\"content\">Please Select Required Field!</p>\r\n      </ion-item>\r\n      \r\n      <!-- Other -->\r\n      <div *ngIf=\"medical_form_step4.get('where_incident').value == '1900'\">\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n          <ion-input type=\"text\" color=\"primary\" formControlName=\"where_incident_other\" class=\"input-box\">\r\n          </ion-input>\r\n        </ion-item>\r\n      \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"medical_form_step4.controls.where_incident_other.hasError('required') && medical_form_step4.controls.where_incident_other.touched\">\r\n          <p class=\"content\">Please Enter Required Field!</p>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">How long have you treated the patient?</ion-label>\r\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"treatment_period\" class=\"btn-select bg\" mode=\"md\">\r\n          <ion-select-option value=\"Less that 5 years\">Less that 5 years</ion-select-option>\r\n          <ion-select-option value=\"Over 5 years\">Over 5 years</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step4.controls.treatment_period.hasError('required') && medical_form_step4.controls.treatment_period.touched\">\r\n        <p class=\"content\">Please Select Required Field!</p>\r\n      </ion-item>\r\n      \r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl lbl-over\">What type of condition did the patient present with?</ion-label>\r\n        <ion-textarea rows=\"3\" formControlName=\"patient_condition\" type=\"text\" color=\"primary\" class=\"input-box\">\r\n        </ion-textarea>\r\n      </ion-item>\r\n      \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step4.controls.patient_condition.hasError('required') && medical_form_step4.controls.patient_condition.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"medical_form_step4.controls.patient_condition.hasError('maxlength') && medical_form_step4.controls.patient_condition.touched\">\r\n          <p class=\"content\">Allow Only 140 Characters!</p>\r\n        </ion-item>\r\n\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">What was your treatment?</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"what_treatment\" color=\"primary\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n      \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step4.controls.what_treatment.hasError('required') && medical_form_step4.controls.what_treatment.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n      \r\n      <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">Type of patient</ion-label>\r\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"type_patient\" class=\"btn-select bg\" mode=\"md\">\r\n            <ion-select-option *ngFor=\"let opt of type_patient | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option>\r\n          <!-- <ion-select-option value=\"Workcover\">Workcover</ion-select-option>\r\n          <ion-select-option value=\"Motor Accident\">Motor Accident</ion-select-option>\r\n          <ion-select-option value=\"Seeking prevantive treatment\">Seeking prevantive treatment</ion-select-option>\r\n          <ion-select-option value=\"Reovering from surgery\">Reovering from surgery</ion-select-option>\r\n          <ion-select-option value=\"Recovering from sports injury\">Recovering from sports injury</ion-select-option>\r\n          <ion-select-option value=\"Rehabilitation patient\">Rehabilitation patient</ion-select-option>\r\n          <ion-select-option value=\"Private\">Private</ion-select-option>\r\n          <ion-select-option value=\"Other\">Other</ion-select-option> -->\r\n        </ion-select>\r\n      </ion-item>\r\n      \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step4.controls.type_patient.hasError('required') && medical_form_step4.controls.type_patient.touched\">\r\n        <p class=\"content\">Please Select Required Field!</p>\r\n      </ion-item>\r\n      \r\n      <!-- Other -->\r\n      <div *ngIf=\"medical_form_step4.get('type_patient').value == '1935'\">\r\n        <ion-item lines=\"none\" class=\"input-item add\">\r\n          <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n          <ion-input type=\"text\" color=\"primary\" formControlName=\"type_patient_other\" class=\"input-box\">\r\n          </ion-input>\r\n        </ion-item>\r\n      \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"medical_form_step4.controls.type_patient_other.hasError('required') && medical_form_step4.controls.type_patient_other.touched\">\r\n          <p class=\"content\">Please Enter Required Field!</p>\r\n        </ion-item>\r\n      </div>\r\n      \r\n      <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n        <ion-label position=\"stacked\" class=\"lbl-dropdown\">Sex of patient</ion-label>\r\n        <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"sex_patient\" class=\"btn-select bg\" mode=\"md\">\r\n          <ion-select-option value=\"Male\">Male</ion-select-option>\r\n          <ion-select-option value=\"Female\">Female</ion-select-option>\r\n          <ion-select-option value=\"Transgender\">Transgender</ion-select-option>\r\n          <ion-select-option value=\"Did Not Say\">Did Not Say</ion-select-option>\r\n          <ion-select-option value=\"Other\">Other</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step4.controls.sex_patient.hasError('required') && medical_form_step4.controls.sex_patient.touched\">\r\n        <p class=\"content\">Please Select Required Field!</p>\r\n      </ion-item>\r\n  \r\n          <!-- Other -->\r\n      <div *ngIf=\"medical_form_step4.get('sex_patient').value == 'Other'\">\r\n          <ion-item lines=\"none\" class=\"input-item add\">\r\n            <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n            <ion-input type=\"text\" color=\"primary\" formControlName=\"sex_patient_other\" class=\"input-box\">\r\n            </ion-input>\r\n          </ion-item>\r\n    \r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"medical_form_step4.controls.sex_patient_other.hasError('required') && medical_form_step4.controls.sex_patient_other.touched\">\r\n            <p class=\"content\">Please Enter Required Field!</p>\r\n          </ion-item>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <ion-item class=\"item-dropdown add\" lines=\"none\">\r\n      <ion-label position=\"stacked\" class=\"lbl-dropdown\">What is the nature of the complaint?</ion-label>\r\n      <ion-select interface=\"action-sheet\" placeholder=\"Please Select Option\" formControlName=\"medical_malpractice\" class=\"btn-select bg\" mode=\"md\">\r\n        <!-- <ion-select-option *ngFor=\"let opt of medical_malpractice | keyvalue\" [value]=\"opt.key\">{{opt.value}}</ion-select-option> -->\r\n        <ion-select-option value=\"2271\">Inquiry - Patient Records</ion-select-option>\r\n        <ion-select-option value=\"1632\">Inquiry - Professional misconduct\r\n        </ion-select-option>\r\n        <ion-select-option value=\"1634\">Inquiry - Misleading Marketing</ion-select-option>\r\n        <ion-select-option value=\"1633\">Inquiry - Boundary transgression</ion-select-option>\r\n        <ion-select-option value=\"1635\">Inquiry - Breach of Privacy</ion-select-option>\r\n        <ion-select-option value=\"2215\">Inquiry - Clinic Records / Accounts\r\n        </ion-select-option>\r\n        <ion-select-option value=\"2059\">Occupiers neglience causing injury or damage</ion-select-option>\r\n        <ion-select-option value=\"1631\">Negligent treatment causing injury/damage</ion-select-option>\r\n        <ion-select-option value=\"1697\">Negligent equipment causing injury or damage</ion-select-option>\r\n        <ion-select-option value=\"2053\">Negligent advice causing damage to property</ion-select-option>\r\n        <ion-select-option value=\"2277\">Coroners Inquiry</ion-select-option>\r\n        <ion-select-option value=\"2057\">Cyber</ion-select-option>\r\n        <ion-select-option value=\"2055\">Defamation</ion-select-option>\r\n        <ion-select-option value=\"1636\">Other</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"medical_form_step4.controls.medical_malpractice.hasError('required') && medical_form_step4.controls.medical_malpractice.touched\">\r\n      <p class=\"content\">Please Select Required Field!</p>\r\n    </ion-item>\r\n\r\n    <!-- Other -->\r\n    <div *ngIf=\"medical_form_step4.get('medical_malpractice').value == '1636'\">\r\n      <ion-item lines=\"none\" class=\"input-item add\">\r\n        <ion-label position=\"stacked\" class=\"input-lbl\">Please specify</ion-label>\r\n        <ion-input type=\"text\" color=\"primary\" formControlName=\"medical_malpractice_other\" class=\"input-box\">\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"medical_form_step4.controls.medical_malpractice_other.hasError('required') && medical_form_step4.controls.medical_malpractice_other.touched\">\r\n        <p class=\"content\">Please Enter Required Field!</p>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <ion-item lines=\"none\" class=\"input-item add\">\r\n      <ion-label position=\"stacked\" class=\"input-lbl lbl-over\">Briefly outline the allegations against you</ion-label>\r\n      <ion-textarea rows=\"3\" formControlName=\"reported_circumstances\" type=\"text\" color=\"primary\" class=\"input-box\">\r\n      </ion-textarea>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"medical_form_step4.controls.reported_circumstances.hasError('required') && medical_form_step4.controls.reported_circumstances.touched\">\r\n      <p class=\"content\">Please Enter Required Field!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"medical_form_step4.controls.reported_circumstances.hasError('maxlength') && medical_form_step4.controls.reported_circumstances.touched\">\r\n          <p class=\"content\">Allow Only 280 Characters!</p>\r\n        </ion-item>\r\n\r\n    <div class=\"div-que add-margin\">\r\n      <ion-label class=\"lbl-head\">Is the inquiry related to a relationship with a patient?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"relationship_patient\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"div-que add\">\r\n      <ion-label class=\"lbl-head\">Is the inquiry related to a dishonest or criminal act?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"related_criminal\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"div-que add\">\r\n      <ion-label class=\"lbl-head\">Is the inquiry related to alcohol or substance abuse?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"alcohol_substance\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n    <div class=\"div-que add\">\r\n      <ion-label class=\"lbl-head\">Is the inquiry related to the care or treatment of a patient?</ion-label>\r\n\r\n      <ion-radio-group formControlName=\"care_treatment_patient\">\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">Yes</ion-label>\r\n          <ion-radio slot=\"start\" value=\"true\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" class=\"items-radio\">\r\n          <ion-label class=\"lbl-radio\">No</ion-label>\r\n          <ion-radio slot=\"start\" value=\"false\" mode=\"md\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"btns-footer\">\r\n  <ion-row class=\"row-footer\">\r\n    <ion-col class=\"col-footer border-R\">\r\n      <ion-button expand=\"full\" class=\"btn-back\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-round-back\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"col-footer border-L\">\r\n      <ion-button expand=\"full\" class=\"btn-next\" (click)=\"medicalStep4Next()\">\r\n        <ion-icon name=\"arrow-round-forward\" mode=\"md\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/medical-malpractice/medical-step4/medical-step4.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/medical-malpractice/medical-step4/medical-step4.module.ts ***!
  \***************************************************************************/
/*! exports provided: MedicalStep4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalStep4PageModule", function() { return MedicalStep4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _medical_step4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medical-step4.page */ "./src/app/medical-malpractice/medical-step4/medical-step4.page.ts");







const routes = [
    {
        path: '',
        component: _medical_step4_page__WEBPACK_IMPORTED_MODULE_6__["MedicalStep4Page"]
    }
];
let MedicalStep4PageModule = class MedicalStep4PageModule {
};
MedicalStep4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_medical_step4_page__WEBPACK_IMPORTED_MODULE_6__["MedicalStep4Page"]]
    })
], MedicalStep4PageModule);



/***/ }),

/***/ "./src/app/medical-malpractice/medical-step4/medical-step4.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/medical-malpractice/medical-step4/medical-step4.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGljYWwtbWFscHJhY3RpY2UvbWVkaWNhbC1zdGVwNC9tZWRpY2FsLXN0ZXA0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/medical-malpractice/medical-step4/medical-step4.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/medical-malpractice/medical-step4/medical-step4.page.ts ***!
  \*************************************************************************/
/*! exports provided: MedicalStep4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalStep4Page", function() { return MedicalStep4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-mock.service */ "./src/app/common-mock.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let MedicalStep4Page = class MedicalStep4Page {
    constructor(navCtrl, router, _cS, formBuilder, statusBar) {
        this.navCtrl = navCtrl;
        this.router = router;
        this._cS = _cS;
        this.formBuilder = formBuilder;
        this.statusBar = statusBar;
        this.complaint_documents_image = [];
        this.complaint_documents_image_set = [];
        this.ImageServerURL = this._cS.imageUrl();
        this.medical_step4_fb();
        this.formControlValueChanged();
        this.setClaimData();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    medical_step4_fb() {
        this.medical_form_step4 = this.formBuilder.group({
            patient_complaint: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            loss_date_discovery: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            complaint_writing: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tp_christian_patient: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tp_name_patient: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            patient_street: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            patient_suburb_town: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            patient_post_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            patient_state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            patient_email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            patient_telephone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            age_patient: [null],
            where_incident: [null],
            where_incident_other: [null],
            treatment_period: [null],
            patient_condition: [null],
            what_treatment: [null],
            type_patient: [null],
            type_patient_other: [null],
            sex_patient: [null],
            sex_patient_other: [null],
            medical_malpractice: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            medical_malpractice_other: [null],
            reported_circumstances: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(280), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            relationship_patient: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            related_criminal: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            alcohol_substance: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            care_treatment_patient: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    formControlValueChanged() {
        this.medical_form_step4.get('patient_complaint')
            .valueChanges.subscribe((val) => {
            const age_patient = this.medical_form_step4.get('age_patient');
            const where_incident = this.medical_form_step4.get('where_incident');
            const treatment_period = this.medical_form_step4.get('treatment_period');
            const patient_condition = this.medical_form_step4.get('patient_condition');
            const what_treatment = this.medical_form_step4.get('what_treatment');
            const type_patient = this.medical_form_step4.get('type_patient');
            const sex_patient = this.medical_form_step4.get('sex_patient');
            age_patient.patchValue(null);
            age_patient.clearValidators();
            age_patient.updateValueAndValidity();
            where_incident.patchValue(null);
            where_incident.clearValidators();
            where_incident.updateValueAndValidity();
            treatment_period.patchValue(null);
            treatment_period.clearValidators();
            treatment_period.updateValueAndValidity();
            patient_condition.patchValue(null);
            patient_condition.clearValidators();
            patient_condition.updateValueAndValidity();
            what_treatment.patchValue(null);
            what_treatment.clearValidators();
            what_treatment.updateValueAndValidity();
            type_patient.patchValue(null);
            type_patient.clearValidators();
            type_patient.updateValueAndValidity();
            sex_patient.patchValue(null);
            sex_patient.clearValidators();
            sex_patient.updateValueAndValidity();
            if (val == "true") {
                age_patient.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                where_incident.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                treatment_period.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                patient_condition.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(140)]);
                what_treatment.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                type_patient.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                sex_patient.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
        });
        this.medical_form_step4.get('where_incident')
            .valueChanges.subscribe((val) => {
            const where_incident_other = this.medical_form_step4.get('where_incident_other');
            if (val == "1900") {
                where_incident_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                where_incident_other.patchValue(null);
                where_incident_other.clearValidators();
                where_incident_other.updateValueAndValidity();
            }
        });
        this.medical_form_step4.get('type_patient')
            .valueChanges.subscribe((val) => {
            const type_patient_other = this.medical_form_step4.get('type_patient_other');
            if (val == "1935") {
                type_patient_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                type_patient_other.patchValue(null);
                type_patient_other.clearValidators();
                type_patient_other.updateValueAndValidity();
            }
        });
        this.medical_form_step4.get('sex_patient')
            .valueChanges.subscribe((val) => {
            const sex_patient_other = this.medical_form_step4.get('sex_patient_other');
            if (val == 'Other') {
                sex_patient_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                sex_patient_other.patchValue(null);
                sex_patient_other.clearValidators();
                sex_patient_other.updateValueAndValidity();
            }
        });
        this.medical_form_step4.get('medical_malpractice')
            .valueChanges.subscribe((val) => {
            const medical_malpractice_other = this.medical_form_step4.get('medical_malpractice_other');
            if (val == "1636") {
                medical_malpractice_other.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            else {
                medical_malpractice_other.patchValue(null);
                medical_malpractice_other.clearValidators();
                medical_malpractice_other.updateValueAndValidity();
            }
        });
    }
    medicalStep4Next() {
        for (let v in this.medical_form_step4.controls) {
            this.medical_form_step4.controls[v].markAsTouched();
        }
        if (this.medical_form_step4.valid) {
            /* Patient Addres Start */
            let patientStreetValue = null;
            let patientSuburbValue = null;
            let patientPostCodeValue = null;
            let patientStateValue = null;
            let patientcountryValue = null;
            if (document.getElementById("patient_street")) {
                patientStreetValue = document.getElementById("patient_street").value;
            }
            if (document.getElementById("patient_suburb_town")) {
                patientSuburbValue = document.getElementById("patient_suburb_town").value;
            }
            if (document.getElementById("patient_post_code")) {
                patientPostCodeValue = document.getElementById("patient_post_code").value;
            }
            if (document.getElementById("patient_state")) {
                patientStateValue = document.getElementById("patient_state").value;
            }
            /* Patient Addres End */
            const step4 = {
                "step": 'step4',
                "ClaimNumber": localStorage.getItem('MedicalClaimNumber'),
                "patient_complaint": this.medical_form_step4.value.patient_complaint,
                "loss_date_discovery": this.medical_form_step4.value.loss_date_discovery,
                "complaint_writing": this.medical_form_step4.value.complaint_writing,
                "complaint_documents": this.complaint_documents_image_set,
                "tp_christian_patient": this.medical_form_step4.value.tp_christian_patient,
                "tp_name_patient": this.medical_form_step4.value.tp_name_patient,
                "patient_street": patientStreetValue,
                "patient_suburb_town": patientSuburbValue,
                "patient_post_code": patientPostCodeValue,
                "patient_state": patientStateValue,
                "patient_email": this.medical_form_step4.value.patient_email,
                "patient_telephone": this.medical_form_step4.value.patient_telephone,
                "age_patient": this.medical_form_step4.value.age_patient,
                "where_incident": this.medical_form_step4.value.where_incident,
                "where_incident_other": this.medical_form_step4.value.where_incident_other,
                "treatment_period": this.medical_form_step4.value.treatment_period,
                "patient_condition": this.medical_form_step4.value.patient_condition,
                "what_treatment": this.medical_form_step4.value.what_treatment,
                "type_patient": this.medical_form_step4.value.type_patient,
                "type_patient_other": this.medical_form_step4.value.type_patient_other,
                "sex_patient": this.medical_form_step4.value.sex_patient,
                "sex_patient_other": this.medical_form_step4.value.sex_patient_other,
                "medical_malpractice": this.medical_form_step4.value.medical_malpractice,
                "medical_malpractice_other": this.medical_form_step4.value.medical_malpractice_other,
                "reported_circumstances": this.medical_form_step4.value.reported_circumstances,
                "relationship_patient": this.medical_form_step4.value.relationship_patient,
                "related_criminal": this.medical_form_step4.value.related_criminal,
                "alcohol_substance": this.medical_form_step4.value.alcohol_substance,
                "care_treatment_patient": this.medical_form_step4.value.care_treatment_patient,
            };
            this._cS.put_API(this._cS.URL_Medical_Claim_Post(), step4)
                .subscribe((data) => {
                if (data.status == 0) {
                    this.complaint_documents_image_set = [];
                    this.setClaimData();
                    this.router.navigate(['/medical-step5']);
                }
                else {
                }
            }, err => {
            });
        }
    }
    ngOnInit() {
        let script = document.createElement("script");
        script.src = "https://api.addressfinder.io/assets/v3/widget.js";
        script.async = true;
        document.body.appendChild(script);
        //dropdown value set
        /* Where did you treat the patient? */
        this._cS.getoptionvalue_API(117)
            .subscribe((data) => {
            if (data.status == 0) {
                this.where_incident = data.data;
            }
        });
        /* Type of patient */
        this._cS.getoptionvalue_API(124)
            .subscribe((data) => {
            if (data.status == 0) {
                this.type_patient = data.data;
            }
        });
        /* What is the nature of the complaint */
        this._cS.getoptionvalue_API(140)
            .subscribe((data) => {
            if (data.status == 0) {
                this.medical_malpractice = data.data;
            }
        });
    }
    patientAddress() {
        let widget = new AddressFinder.Widget(document.getElementById("patient_street"), "PVW639JF4ET8ALGDHNKB", "AU", {});
        let returnResult = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        widget.on("result:select", function (fullAddress, metaData) {
            var selected = new AddressFinder.NZSelectedAddress(fullAddress, metaData);
            let SpaceCount = selected.originalAddressLines[1].split(" ").length;
            let setnum = SpaceCount - 2;
            let mainadddate = selected.originalAddressLines[1].split(" ").splice(-SpaceCount);
            let adddate = selected.originalAddressLines[1].split(" ").splice(setnum);
            this.addstate = adddate[0];
            this.addpincode = adddate[1];
            const index = mainadddate.indexOf(this.addstate);
            if (index !== -1) {
                mainadddate.splice(index, 1);
            }
            const index2 = mainadddate.indexOf(this.addpincode);
            if (index2 !== -1) {
                mainadddate.splice(index2, 2);
            }
            let returnJSON = {
                mainadddate: mainadddate,
                metaData: metaData
            };
            returnResult.next(returnJSON);
        });
        returnResult.subscribe(val => {
            if (val) {
                let address_line_1 = val.metaData.address_line_1;
                let mainadddate = val.mainadddate.join(' ');
                let postcode = val.metaData.postcode;
                let state_territory = val.metaData.state_territory;
                let country1 = "Australia";
                var JSON = {
                    patient_street: address_line_1,
                    patient_suburb_town: mainadddate,
                    patient_post_code: postcode,
                    patient_state: state_territory,
                };
                this.medical_form_step4.patchValue(JSON);
            }
        });
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
    delete_complaint_documents(img, position) {
        this.complaint_documents_image.splice(position, 1);
        if (img.val) {
            var details = {
                ClaimNumber: localStorage.getItem('MedicalClaimNumber'),
                image_name: img.val,
                image_type: 'attach_complaint_documents',
            };
            this._cS.post_API(this._cS.URL_image_delet(), details)
                .subscribe((data) => {
                console.log('data', data);
                if (data.status == 0) {
                    var dynamicI = this.dynamicImages(data.data, 'attach_complaint_documents/');
                    this.complaint_documents_image = dynamicI;
                    this._cS.presentToastWithOptions(data.message);
                }
                else {
                    this._cS.presentToastWithOptions(data.message);
                }
            });
        }
    }
    complaint_documents(event) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            var extension = event.target.files[0].name.split('.').pop().toLowerCase();
            var fileName = event.target.files[0].name;
            var fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
            let formData = new FormData();
            formData.append('file', event.target.files[0]);
            formData.append("image_type", "attach_complaint_documents");
            formData.append("claimNumber", localStorage.getItem('MedicalClaimNumber'));
            this._cS.ImageUpload(formData).subscribe(val => {
                reader.onload = (event) => {
                    let json = {
                        fileIcon2: fileTypes.indexOf(extension) > -1 ? false : true,
                        path: event.target.result,
                        name: val.data[0].file_name,
                        val: undefined
                    };
                    this.complaint_documents_image.push(json);
                };
                reader.readAsDataURL(event.target.files[0]);
                this.complaint_documents_image_set.push(val.data[0].file_name);
                if (val) {
                    this._cS.presentToastWithOptions(val.message);
                }
                else {
                    this._cS.presentToastWithOptions(val.message);
                }
            });
        }
    }
    setClaimData() {
        var claimNumber = localStorage.getItem('MedicalClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe((data) => {
                if (data.status == 0) {
                    this.editClaimData = data.data;
                    if (this.editClaimData.medical_malpractice) {
                        var medical_malpractice = JSON.parse(this.editClaimData.medical_malpractice);
                        for (var medical_malpractice_set in medical_malpractice) {
                        }
                    }
                    else {
                        medical_malpractice_set = null;
                    }
                    if (this.editClaimData.type_patient) {
                        var type_patient = JSON.parse(this.editClaimData.type_patient);
                        for (var type_patient_set in type_patient) {
                        }
                    }
                    else {
                        type_patient_set = null;
                    }
                    if (this.editClaimData.where_incident) {
                        var where_incident = JSON.parse(this.editClaimData.where_incident);
                        for (var where_incident_set in where_incident) {
                        }
                    }
                    else {
                        where_incident_set = null;
                    }
                    this.medical_form_step4.setValue({
                        patient_complaint: this.editClaimData.patient_complaint,
                        loss_date_discovery: this.editClaimData.loss_date_discovery,
                        complaint_writing: this.editClaimData.complaint_writing,
                        tp_christian_patient: this.editClaimData.tp_christian_patient,
                        tp_name_patient: this.editClaimData.tp_name_patient,
                        patient_street: this.editClaimData.tp_postal_street,
                        patient_suburb_town: this.editClaimData.tp_postal_suburb,
                        patient_post_code: this.editClaimData.tp_postal_postcode,
                        patient_state: this.editClaimData.tp_postal_state,
                        patient_email: this.editClaimData.tp_postal_email,
                        patient_telephone: this.editClaimData.tp_tele_main,
                        age_patient: this.editClaimData.age_patient,
                        where_incident: where_incident_set,
                        where_incident_other: this.editClaimData.where_incident_other,
                        treatment_period: this.editClaimData.treatment_period,
                        patient_condition: this.editClaimData.patient_condition,
                        what_treatment: this.editClaimData.what_treatment,
                        type_patient: type_patient_set,
                        type_patient_other: this.editClaimData.type_patient_other,
                        sex_patient: this.editClaimData.sex_patient,
                        sex_patient_other: this.editClaimData.sex_patient_other,
                        medical_malpractice: medical_malpractice_set,
                        medical_malpractice_other: this.editClaimData.medical_malpractice_other,
                        reported_circumstances: this.editClaimData.reported_circumstances,
                        relationship_patient: this.editClaimData.relationship_patient,
                        related_criminal: this.editClaimData.related_criminal,
                        alcohol_substance: this.editClaimData.alcohol_substance,
                        care_treatment_patient: this.editClaimData.care_treatment_patient,
                    });
                    if (this.editClaimData.complaint_documents) {
                        var dynamicI = (this.dynamicImages(this.editClaimData.complaint_documents, '/attach_complaint_documents/'));
                        this.complaint_documents_image = dynamicI;
                    }
                }
            });
        }
    }
    back() {
        this.navCtrl.pop();
    }
};
MedicalStep4Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] }
];
MedicalStep4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-medical-step4',
        template: __webpack_require__(/*! raw-loader!./medical-step4.page.html */ "./node_modules/raw-loader/index.js!./src/app/medical-malpractice/medical-step4/medical-step4.page.html"),
        styles: [__webpack_require__(/*! ./medical-step4.page.scss */ "./src/app/medical-malpractice/medical-step4/medical-step4.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_common_mock_service__WEBPACK_IMPORTED_MODULE_6__["CommonMockService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
], MedicalStep4Page);



/***/ })

}]);
//# sourceMappingURL=medical-malpractice-medical-step4-medical-step4-module-es2015.js.map