import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';

@Component({
  selector: 'app-professional-step3',
  templateUrl: './professional-step3.page.html',
  styleUrls: ['./professional-step3.page.scss'],
})
export class ProfessionalStep3Page implements OnInit {

  professional_form_step3: FormGroup;
  Claim_number: any;
  editClaimData: any;
  attach_letter_image = [];
  attach_have_you_letter_image = [];
  complaint_documents_image = [];
  attach_letter_image_set: any = [];
  attach_have_you_letter_image_set: any = [];
  complaint_documents_image_set: any = [];
  ImageServerURL: string;

  /* dropdown option Variable Start */
  regulator: any;
  professional_negligence: any;


  constructor(private navCtrl: NavController,
    private router: Router,
    private formBuilder: FormBuilder,
    public _cS: CommonMockService,
    private statusBar: StatusBar) {
    this.ImageServerURL = this._cS.imageUrl();
    this.professional_step3_fb();
    this.formControlValueChanged();
    this.setClaimData();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  professional_step3_fb() {
    this.professional_form_step3 = this.formBuilder.group({
      regulator_inform: [null, Validators.required],
      regulator: [null],
      date_received_notification: [null],
      regulator_respond: [null],
      date_respond: [null],
      already_respond: [null],
      require_legal_assistance: [null],
      professional_negligence: [null, Validators.required],
      professional_negligence_other: [null],
      reported_circumstances: [null, Validators.compose([Validators.maxLength(280), Validators.required])],
      relationship_patient: [null, Validators.required],
      related_criminal: [null, Validators.required],
      alcohol_substance: [null, Validators.required],
      care_treatment_patient: [null, Validators.required],
      breach_professional_duty: [null, Validators.required],
      loss_date_discovery: [null, Validators.required],
      complaint_writing: [null, Validators.required],
      how_aware_complaint: [null, Validators.required],
      how_aware_complaint_other: [null, Validators.required],
    });
  }

  formControlValueChanged() {
    this.professional_form_step3.get('regulator_inform')
      .valueChanges.subscribe(
        (val: any) => {
          const regulator = this.professional_form_step3.get('regulator');
          const date_received_notification = this.professional_form_step3.get('date_received_notification');
          const regulator_respond = this.professional_form_step3.get('regulator_respond');

          regulator.patchValue(null);
          regulator.clearValidators();
          regulator.updateValueAndValidity();

          date_received_notification.patchValue(null);
          date_received_notification.clearValidators();
          date_received_notification.updateValueAndValidity();

          regulator_respond.patchValue(null);
          regulator_respond.clearValidators();
          regulator_respond.updateValueAndValidity();

          if (val == "true") {
            regulator.setValidators([Validators.required]);
            date_received_notification.setValidators([Validators.required]);
            regulator_respond.setValidators([Validators.required]);
          }
        });

    this.professional_form_step3.get('regulator_respond')
      .valueChanges.subscribe(
        (val: any) => {
          const date_respond = this.professional_form_step3.get('date_respond');
          const already_respond = this.professional_form_step3.get('already_respond');
          const require_legal_assistance = this.professional_form_step3.get('require_legal_assistance');

          date_respond.patchValue(null);
          date_respond.clearValidators();
          date_respond.updateValueAndValidity();

          already_respond.patchValue(null);
          already_respond.clearValidators();
          already_respond.updateValueAndValidity();

          if (val == "true") {
            date_respond.setValidators([Validators.required]);
            already_respond.setValidators([Validators.required]);
          }

          if (val == "false") {
            require_legal_assistance.setValidators([Validators.required]);
          } else {
            require_legal_assistance.patchValue(null);
            require_legal_assistance.clearValidators();
            require_legal_assistance.updateValueAndValidity();
          }
        });

    this.professional_form_step3.get('breach_professional_duty')
      .valueChanges.subscribe(
        (val: any) => {
          const loss_date_discovery = this.professional_form_step3.get('loss_date_discovery');
          const complaint_writing = this.professional_form_step3.get('complaint_writing');

          loss_date_discovery.patchValue(null);
          loss_date_discovery.clearValidators();
          loss_date_discovery.updateValueAndValidity();

          complaint_writing.patchValue(null);
          complaint_writing.clearValidators();
          complaint_writing.updateValueAndValidity();
          if (val == "true") {
            loss_date_discovery.setValidators([Validators.required]);
            complaint_writing.setValidators([Validators.required]);
          }
        });

    this.professional_form_step3.get('how_aware_complaint')
      .valueChanges.subscribe(
        (val: any) => {
          const how_aware_complaint_other = this.professional_form_step3.get('how_aware_complaint_other');
          if (val == "Other") {
            how_aware_complaint_other.setValidators([Validators.required]);
          } else {
            how_aware_complaint_other.patchValue(null);
            how_aware_complaint_other.clearValidators();
            how_aware_complaint_other.updateValueAndValidity();
          }
        });

    this.professional_form_step3.get('professional_negligence')
      .valueChanges.subscribe(
        (val: any) => {
          const professional_negligence_other = this.professional_form_step3.get('professional_negligence_other');
          if (val == "1629") {
            professional_negligence_other.setValidators([Validators.required]);
          } else {
            professional_negligence_other.patchValue(null);
            professional_negligence_other.clearValidators();
            professional_negligence_other.updateValueAndValidity();
          }
        });
  };


  professionalStep3Next() {
    for (let v in this.professional_form_step3.controls) {
      this.professional_form_step3.controls[v].markAsTouched();
    }
    if (this.professional_form_step3.valid) {
      const step3 = {
        "step": 'step3',
        "ClaimNumber": localStorage.getItem('ProfessionalClaimNumber'),
        "regulator_inform": this.professional_form_step3.value.regulator_inform,
        "regulator": this.professional_form_step3.value.regulator,
        "date_received_notification": this.professional_form_step3.value.date_received_notification,
        "attach_letter": this.attach_letter_image_set,
        "attach_have_you_letter": this.attach_have_you_letter_image_set,
        "complaint_documents": this.complaint_documents_image_set,
        "regulator_respond": this.professional_form_step3.value.regulator_respond,
        "date_respond": this.professional_form_step3.value.date_respond,
        "already_respond": this.professional_form_step3.value.already_respond,
        "require_legal_assistance": this.professional_form_step3.value.require_legal_assistance,
        "professional_negligence": this.professional_form_step3.value.professional_negligence,
        "professional_negligence_other": this.professional_form_step3.value.professional_negligence_other,
        "reported_circumstances": this.professional_form_step3.value.reported_circumstances,
        "relationship_patient": this.professional_form_step3.value.relationship_patient,
        "related_criminal": this.professional_form_step3.value.related_criminal,
        "alcohol_substance": this.professional_form_step3.value.alcohol_substance,
        "care_treatment_patient": this.professional_form_step3.value.care_treatment_patient,
        "breach_professional_duty": this.professional_form_step3.value.breach_professional_duty,
        "loss_date_discovery": this.professional_form_step3.value.loss_date_discovery,
        "complaint_writing": this.professional_form_step3.value.complaint_writing,
        "how_aware_complaint": this.professional_form_step3.value.how_aware_complaint,
        "how_aware_complaint_other": this.professional_form_step3.value.how_aware_complaint_other,
      };
      this._cS.put_API(this._cS.URL_Professional_Claim_Post(), step3)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.attach_letter_image_set = [];
            this.attach_have_you_letter_image_set = [];
            this.complaint_documents_image_set = [];
            this.setClaimData();
            this.router.navigate(['/professional-step4']);
          } else {
          }
        }, err => {
        });
    }
  }

  ngOnInit() {

    /* Step - 3 What is the nature of the complaint? */
    this._cS.getoptionvalue_API(147)
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.professional_negligence = data.data;
        }
      });

    /* Step - 3 Which organisation or regulator */
    this._cS.getoptionvalue_API(158)
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.regulator = data.data;
        }
      });
  }

  delete_attach_letter(img, position) {
    this.attach_letter_image.splice(position, 1);
    if (img.val) {
      var details = {
        ClaimNumber: localStorage.getItem('ProfessionalClaimNumber'),
        image_name: img.val,
        image_type: 'attach_letter',
      };
      this._cS.post_API(this._cS.URL_image_delet(), details)
        .subscribe((data: any) => {
          console.log('data', data);
          if (data.status == 0) {
            var dynamicI = this.dynamicImages(data.data, 'attach_letter/');
            this.attach_letter_image = dynamicI;
            this._cS.presentToastWithOptions(data.message);
          } else {
            this._cS.presentToastWithOptions(data.message);
          }
        });
    }

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


  attach_letter(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      var extension = event.target.files[0].name.split('.').pop().toLowerCase();
      var fileName = event.target.files[0].name;
      var fileTypes = ['jpg', 'jpeg', 'png', 'gif']

      let formData = new FormData();
      formData.append('file', event.target.files[0]);
      formData.append("image_type", "attach_letter");
      formData.append("claimNumber", localStorage.getItem('ProfessionalClaimNumber'));
      this._cS.ImageUpload(formData).subscribe(val => {
        reader.onload = (event: any) => {
          let json = {
            fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
            path: event.target.result,
            name: val.data[0].file_name,
            val: undefined
          }
          this.attach_letter_image.push(json);
        }
        reader.readAsDataURL(event.target.files[0]);
        this.attach_letter_image_set.push(val.data[0].file_name);
        if (val) {
          this._cS.presentToastWithOptions(val.message);
        }
        else {
          this._cS.presentToastWithOptions(val.message);
        }

      })
    }
  }


  delete_attach_have_you_letter(img, position) {
    this.attach_have_you_letter_image.splice(position, 1);
    if (img.val) {
      var details = {
        ClaimNumber: localStorage.getItem('ProfessionalClaimNumber'),
        image_name: img.val,
        image_type: 'attach_have_you_letter',
      };
      this._cS.post_API(this._cS.URL_image_delet(), details)
        .subscribe((data: any) => {
          console.log('data', data);
          if (data.status == 0) {
            var dynamicI = this.dynamicImages(data.data, 'attach_have_you_letter/');
            this.attach_have_you_letter_image = dynamicI;
            this._cS.presentToastWithOptions(data.message);
          } else {
            this._cS.presentToastWithOptions(data.message);
          }
        });
    }

  }

  attach_have_you_letter(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      var extension = event.target.files[0].name.split('.').pop().toLowerCase();
      var fileName = event.target.files[0].name;
      var fileTypes = ['jpg', 'jpeg', 'png', 'gif']

      let formData = new FormData();
      formData.append('file', event.target.files[0]);
      formData.append("image_type", "attach_have_you_letter");
      formData.append("claimNumber", localStorage.getItem('ProfessionalClaimNumber'));
      this._cS.ImageUpload(formData).subscribe(val => {
        reader.onload = (event: any) => {
          let json = {
            fileIcon1: fileTypes.indexOf(extension) > -1 ? false : true,
            path: event.target.result,
            name: val.data[0].file_name,
            val: undefined
          }
          this.attach_have_you_letter_image.push(json);
        }
        reader.readAsDataURL(event.target.files[0]);
        this.attach_have_you_letter_image_set.push(val.data[0].file_name);
        if (val) {
          this._cS.presentToastWithOptions(val.message);
        }
        else {
          this._cS.presentToastWithOptions(val.message);
        }

      })
    }
  }

  delete_complaint_documents(img, position) {
    this.complaint_documents_image.splice(position, 1);
    if (img.val) {
      var details = {
        ClaimNumber: localStorage.getItem('ProfessionalClaimNumber'),
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
      formData.append("claimNumber", localStorage.getItem('ProfessionalClaimNumber'));
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

  back() {
    this.navCtrl.pop();
  }

  setClaimData() {
    var claimNumber = localStorage.getItem('ProfessionalClaimNumber');
    if (claimNumber) {
      this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
        .subscribe((data: any) => {

          if (data.status == 0) {
            this.editClaimData = data.data;

            if (this.editClaimData.professional_negligence) {
              var professional_negligence = JSON.parse(this.editClaimData.professional_negligence);
              for (var professional_negligence_set in professional_negligence) {
              }
            }
            else {
              professional_negligence_set = null;
            }
  
            if (this.editClaimData.regulator) {
              var regulator = JSON.parse(this.editClaimData.regulator);
              for (var regulator_set in regulator) {
              }
            }
            else {
              regulator_set = null;
            }

            this.professional_form_step3.setValue({
              regulator_inform: this.editClaimData.regulator_inform,
              regulator: regulator_set,
              date_received_notification: this.editClaimData.date_received_notification,
              regulator_respond: this.editClaimData.regulator_respond,
              date_respond: this.editClaimData.date_respond,
              already_respond: this.editClaimData.already_respond,
              require_legal_assistance: this.editClaimData.require_legal_assistance,

              professional_negligence: professional_negligence_set,
              professional_negligence_other: this.editClaimData.professional_negligence_other,
              reported_circumstances: this.editClaimData.reported_circumstances,
              relationship_patient: this.editClaimData.relationship_patient,
              related_criminal: this.editClaimData.related_criminal,
              alcohol_substance: this.editClaimData.alcohol_substance,
              care_treatment_patient: this.editClaimData.care_treatment_patient,
              breach_professional_duty: this.editClaimData.breach_professional_duty,
              loss_date_discovery: this.editClaimData.loss_date_discovery,
              complaint_writing: this.editClaimData.complaint_writing,
              how_aware_complaint: this.editClaimData.how_aware_complaint,
              how_aware_complaint_other: this.editClaimData.how_aware_complaint_other
            })
            if (this.editClaimData.attach_letter) {
              var dynamicI = (this.dynamicImages(this.editClaimData.attach_letter, '/attach_letter/'));
              this.attach_letter_image = dynamicI;
            }
            if (this.editClaimData.attach_have_you_letter) {
              var dynamicI = (this.dynamicImages(this.editClaimData.attach_have_you_letter, '/attach_have_you_letter/'));
              this.attach_have_you_letter_image = dynamicI;
            }
            if (this.editClaimData.complaint_documents) {
              var dynamicI = (this.dynamicImages(this.editClaimData.complaint_documents, '/attach_complaint_documents/'));
              this.complaint_documents_image = dynamicI;
            }
          }
        });
    }
  }
}
