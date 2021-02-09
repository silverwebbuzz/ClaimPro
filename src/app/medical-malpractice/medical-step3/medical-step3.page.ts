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
  selector: 'app-medical-step3',
  templateUrl: './medical-step3.page.html',
  styleUrls: ['./medical-step3.page.scss'],
})
export class MedicalStep3Page implements OnInit {

  medical_form_step3: FormGroup;
  Claim_number: any;
  editClaimData: any;
  attach_letter_image = [];
  attach_have_you_letter_image = [];
  attach_letter_image_set: any = [];
  attach_have_you_letter_image_set: any = [];
  ImageServerURL: string;

   /* dropdown option Variable Start */
   regulator: any;

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {
    this.ImageServerURL = this._cS.imageUrl();
    this.medical_step3_fb();
    this.formControlValueChanged();
    this.setClaimData();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  medical_step3_fb() {
    this.medical_form_step3 = this.formBuilder.group({
      regulator_inform: [null, Validators.required],
      regulator: [null],
      date_received_notification: [null],
      regulator_respond: [null],
      date_respond: [null],
      already_respond: [null],
      require_legal_assistance: [null],
    });
  }

  formControlValueChanged() {
    this.medical_form_step3.get('regulator_inform')
      .valueChanges.subscribe(
        (val: any) => {
          const regulator = this.medical_form_step3.get('regulator');
          const date_received_notification = this.medical_form_step3.get('date_received_notification');
          const regulator_respond = this.medical_form_step3.get('regulator_respond');
          const require_legal_assistance = this.medical_form_step3.get('require_legal_assistance');

          regulator.patchValue(null);
          regulator.clearValidators();
          regulator.updateValueAndValidity();

          date_received_notification.patchValue(null);
          date_received_notification.clearValidators();
          date_received_notification.updateValueAndValidity();

          regulator_respond.patchValue(null);
          regulator_respond.clearValidators();
          regulator_respond.updateValueAndValidity();

          require_legal_assistance.patchValue(null);
          require_legal_assistance.clearValidators();
          require_legal_assistance.updateValueAndValidity();
          if (val == "true") {
            regulator.setValidators([Validators.required]);
            date_received_notification.setValidators([Validators.required]);
            regulator_respond.setValidators([Validators.required]);
            require_legal_assistance.setValidators([Validators.required]);
          }
        });

    this.medical_form_step3.get('regulator_respond')
      .valueChanges.subscribe(
        (val: any) => {
          const date_respond = this.medical_form_step3.get('date_respond');
          const already_respond = this.medical_form_step3.get('already_respond');

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
        });
  }

  medicalStep3Next() {
    for (let v in this.medical_form_step3.controls) {
      this.medical_form_step3.controls[v].markAsTouched();
    }
    if (this.medical_form_step3.valid) {
      const step3 = {
        "step": 'step3',
        "ClaimNumber": localStorage.getItem('MedicalClaimNumber'),
        "regulator_inform": this.medical_form_step3.value.regulator_inform,
        "regulator": this.medical_form_step3.value.regulator,
        "date_received_notification": this.medical_form_step3.value.date_received_notification,
        "regulator_respond": this.medical_form_step3.value.regulator_respond,
        "date_respond": this.medical_form_step3.value.date_respond,
        "already_respond": this.medical_form_step3.value.already_respond,
        "attach_letter": this.attach_letter_image_set,
        "attach_have_you_letter": this.attach_have_you_letter_image_set,
        "require_legal_assistance": this.medical_form_step3.value.require_legal_assistance,
      };
      this._cS.put_API(this._cS.URL_Medical_Claim_Post(), step3)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.attach_letter_image_set = [];
            this.attach_have_you_letter_image_set = [];
            this.setClaimData();
            this.router.navigate(['/medical-step4']);

          } else {
          }
        }, err => {
        });
    }
  }

  ngOnInit() {
    /* Which organisation?  */
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
        ClaimNumber: localStorage.getItem('MedicalClaimNumber'),
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
      formData.append("claimNumber", localStorage.getItem('MedicalClaimNumber'));
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
        ClaimNumber: localStorage.getItem('MedicalClaimNumber'),
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
      formData.append("claimNumber", localStorage.getItem('MedicalClaimNumber'));
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

  setClaimData() {
    var claimNumber = localStorage.getItem('MedicalClaimNumber');
    if (claimNumber) {
      this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
        .subscribe((data: any) => {

          if (data.status == 0) {
            this.editClaimData = data.data;

            if (this.editClaimData.regulator) {
              var regulator = JSON.parse(this.editClaimData.regulator);
              for (var regulator_set in regulator) {
              }
            }
            else {
              regulator_set = null;
            }

            this.medical_form_step3.setValue({
              regulator_inform: this.editClaimData.regulator_inform,
              regulator: regulator_set,
              date_received_notification: this.editClaimData.date_received_notification,
              regulator_respond: this.editClaimData.regulator_respond,
              date_respond: this.editClaimData.date_respond,
              already_respond: this.editClaimData.already_respond,
              require_legal_assistance: this.editClaimData.require_legal_assistance,
            })
            if (this.editClaimData.attach_letter) {
              var dynamicI = (this.dynamicImages(this.editClaimData.attach_letter, '/attach_letter/'));
              this.attach_letter_image = dynamicI;
            }
            if (this.editClaimData.attach_have_you_letter) {
              var dynamicI = (this.dynamicImages(this.editClaimData.attach_have_you_letter, '/attach_have_you_letter/'));
              this.attach_have_you_letter_image = dynamicI;
            }
          }
        });
    }
  }

  back() {
    this.navCtrl.pop();
  }

}
