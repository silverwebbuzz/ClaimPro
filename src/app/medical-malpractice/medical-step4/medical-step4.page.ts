import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonMockService } from 'src/app/common-mock.service';
import { BehaviorSubject } from 'rxjs';
declare var AddressFinder: any;
declare var $: any;

@Component({
  selector: 'app-medical-step4',
  templateUrl: './medical-step4.page.html',
  styleUrls: ['./medical-step4.page.scss'],
})
export class MedicalStep4Page implements OnInit {

  medical_form_step4: FormGroup;
  Claim_number: any;
  editClaimData: any;
  complaint_documents_image = [];
  complaint_documents_image_set: any = [];
  ImageServerURL: string;

  /* dropdown option Variable Start */
  where_incident: any;
  type_patient: any;
  medical_malpractice: any;

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {
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
      patient_complaint: [null, Validators.required],
      loss_date_discovery: [null, Validators.required],
      complaint_writing: [null, Validators.required],
      tp_christian_patient: [null, Validators.required],
      tp_name_patient: [null, Validators.required],
      patient_street: [null, Validators.required],
      patient_suburb_town: [null, Validators.required],
      patient_post_code: [null, Validators.required],
      patient_state: [null, Validators.required],
      patient_email: [null, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])],
      patient_telephone: [null, Validators.required],
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
      medical_malpractice: [null, Validators.required],
      medical_malpractice_other: [null],
      reported_circumstances: [null, Validators.compose([Validators.maxLength(280), Validators.required])],
      relationship_patient: [null, Validators.required],
      related_criminal: [null, Validators.required],
      alcohol_substance: [null, Validators.required],
      care_treatment_patient: [null, Validators.required],


    });
  }
  formControlValueChanged() {
    this.medical_form_step4.get('patient_complaint')
      .valueChanges.subscribe(
        (val: any) => {
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
            age_patient.setValidators([Validators.required]);
            where_incident.setValidators([Validators.required]);
            treatment_period.setValidators([Validators.required]);
            patient_condition.setValidators([Validators.required, Validators.maxLength(140)]);
            what_treatment.setValidators([Validators.required]);
            type_patient.setValidators([Validators.required]);
            sex_patient.setValidators([Validators.required]);
          }
        });

    this.medical_form_step4.get('where_incident')
      .valueChanges.subscribe(
        (val: any) => {
          const where_incident_other = this.medical_form_step4.get('where_incident_other');
          if (val == "1900") {
            where_incident_other.setValidators([Validators.required]);
          } else {
            where_incident_other.patchValue(null);
            where_incident_other.clearValidators();
            where_incident_other.updateValueAndValidity();
          }
        });
    
    this.medical_form_step4.get('type_patient')
      .valueChanges.subscribe(
        (val: any) => {
          const type_patient_other = this.medical_form_step4.get('type_patient_other');
          if (val == "1935") {
            type_patient_other.setValidators([Validators.required]);
          } else {
            type_patient_other.patchValue(null);
            type_patient_other.clearValidators();
            type_patient_other.updateValueAndValidity();
          }
        });
    this.medical_form_step4.get('sex_patient')
      .valueChanges.subscribe(
        (val: any) => {
          const sex_patient_other = this.medical_form_step4.get('sex_patient_other');
          if (val == 'Other') {
            sex_patient_other.setValidators([Validators.required]);
          } else {
            sex_patient_other.patchValue(null);
            sex_patient_other.clearValidators();
            sex_patient_other.updateValueAndValidity();
          }
        });
    this.medical_form_step4.get('medical_malpractice')
      .valueChanges.subscribe(
        (val: any) => {
          const medical_malpractice_other = this.medical_form_step4.get('medical_malpractice_other');
          if (val == "1636") {
            medical_malpractice_other.setValidators([Validators.required]);
          } else {
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
      if ((<HTMLInputElement>document.getElementById("patient_street"))) {
        patientStreetValue = (<HTMLInputElement>document.getElementById("patient_street")).value;
      }
      if ((<HTMLInputElement>document.getElementById("patient_suburb_town"))) {
        patientSuburbValue = (<HTMLInputElement>document.getElementById("patient_suburb_town")).value;
      }
      if ((<HTMLInputElement>document.getElementById("patient_post_code"))) {
        patientPostCodeValue = (<HTMLInputElement>document.getElementById("patient_post_code")).value;
      }
      if ((<HTMLInputElement>document.getElementById("patient_state"))) {
        patientStateValue = (<HTMLInputElement>document.getElementById("patient_state")).value;
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
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.complaint_documents_image_set = [];
            this.setClaimData();
            this.router.navigate(['/medical-step5']);
          } else {
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
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.where_incident = data.data;
        }
      });

    /* Type of patient */
    this._cS.getoptionvalue_API(124)
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.type_patient = data.data;
        }
      });
    /* What is the nature of the complaint */
    this._cS.getoptionvalue_API(140)
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.medical_malpractice = data.data;
        }
      });
  }

  patientAddress() {
    let widget = new AddressFinder.Widget(
      document.getElementById("patient_street"),
      "PVW639JF4ET8ALGDHNKB",
      "AU",
      {}
    );

    let returnResult = new BehaviorSubject(null);
    widget.on("result:select", function (fullAddress, metaData) {
      var selected = new AddressFinder.NZSelectedAddress(fullAddress, metaData);
      let SpaceCount = selected.originalAddressLines[1].split(" ").length;
      let setnum = SpaceCount - 2;
      let mainadddate = selected.originalAddressLines[1].split(" ").splice(-SpaceCount);
      let adddate = selected.originalAddressLines[1].split(" ").splice(setnum);
      this.addstate = adddate[0];
      this.addpincode = adddate[1];
      const index: number = mainadddate.indexOf(this.addstate);
      if (index !== -1) {
        mainadddate.splice(index, 1);
      }
      const index2: number = mainadddate.indexOf(this.addpincode);
      if (index2 !== -1) {
        mainadddate.splice(index2, 2);
      }
      let returnJSON = {
        mainadddate: mainadddate,
        metaData: metaData
      }
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
        }
        this.medical_form_step4.patchValue(JSON);
      }
    })
  }

  dynamicImages(array, path) {
    let imageArray = array.split(',');
    var fileTypes = ['jpg', 'jpeg', 'png', 'gif']
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
      })
    })
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
        .subscribe((data: any) => {
          console.log('data', data);
          if (data.status == 0) {
            var dynamicI = this.dynamicImages(data.data, 'attach_complaint_documents/');
            this.complaint_documents_image = dynamicI;
            this._cS.presentToastWithOptions(data.message);
          } else {
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
      var fileTypes = ['jpg', 'jpeg', 'png', 'gif']

      let formData = new FormData();
      formData.append('file', event.target.files[0]);
      formData.append("image_type", "attach_complaint_documents");
      formData.append("claimNumber", localStorage.getItem('MedicalClaimNumber'));
      this._cS.ImageUpload(formData).subscribe(val => {
        reader.onload = (event: any) => {
          let json = {
            fileIcon2: fileTypes.indexOf(extension) > -1 ? false : true,
            path: event.target.result,
            name: val.data[0].file_name,
            val: undefined
          }
          this.complaint_documents_image.push(json);
        }
        reader.readAsDataURL(event.target.files[0]);
        this.complaint_documents_image_set.push(val.data[0].file_name);
        if (val) {
          this._cS.presentToastWithOptions(val.message);
        }
        else {
          this._cS.presentToastWithOptions(val.message);
        }
      })
    }
  }

  setClaimData() {
    var claimNumber = localStorage.getItem('MedicalClaimNumber');
    if (claimNumber) {
      this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
        .subscribe((data: any) => {

          if (data.status == 0) {
            this.editClaimData = data.data;

            if(this.editClaimData.medical_malpractice){
              var medical_malpractice = JSON.parse(this.editClaimData.medical_malpractice);
              for (var medical_malpractice_set in medical_malpractice) {
              }
            }
            else{
              medical_malpractice_set = null;
            }
    
            if(this.editClaimData.type_patient){
              var type_patient = JSON.parse(this.editClaimData.type_patient);
              for (var type_patient_set in type_patient) {
              }
            }
            else{
              type_patient_set = null;
            }
              if(this.editClaimData.where_incident){
              var where_incident = JSON.parse(this.editClaimData.where_incident);
              for (var where_incident_set in where_incident) {
              }
            }
            else{
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
            })
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

}
