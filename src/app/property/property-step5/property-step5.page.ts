import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';


@Component({
  selector: 'app-property-step5',
  templateUrl: './property-step5.page.html',
  styleUrls: ['./property-step5.page.scss'],
})
export class PropertyStep5Page implements OnInit {

  property_form_step5: FormGroup;
  Claim_number: any;
  editClaimData: any;
  attach_police_report_image = [];
  attach_police_report_image_set: any = [];
  ImageServerURL: string;

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {
    this.ImageServerURL = this._cS.imageUrl();
    this.property_step5_fb();
    this.formControlValueChanged();
    this.setClaimData();
  }

  property_step5_fb() {
    this.property_form_step5 = this.formBuilder.group({
      reported_to_police: [null, Validators.required],
      police_report_date: [null],
      which_station: [null],
      police_report_number: [null],
    });
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  formControlValueChanged() {
    this.property_form_step5.get('reported_to_police')
      .valueChanges.subscribe(
        (val: any) => {
          const police_report_date = this.property_form_step5.get('police_report_date');
          const which_station = this.property_form_step5.get('which_station');
          const police_report_number = this.property_form_step5.get('police_report_number');

          police_report_date.patchValue(null);
          police_report_date.clearValidators();
          police_report_date.updateValueAndValidity();

          which_station.patchValue(null);
          which_station.clearValidators();
          which_station.updateValueAndValidity();

          police_report_number.patchValue(null);
          police_report_number.clearValidators();
          police_report_number.updateValueAndValidity();

          if (val == "true") {
            police_report_date.setValidators([Validators.required]);
            which_station.setValidators([Validators.maxLength(140), Validators.required]);
            police_report_number.setValidators([Validators.required]);
          }
        });
  }


  propertyStep5Next() {
    for (let v in this.property_form_step5.controls) {
      this.property_form_step5.controls[v].markAsTouched();
    }
    if (this.property_form_step5.valid) {
      const step5 = {
        "step": 'step5',
        "ClaimNumber": localStorage.getItem('PropertyClaimNumber'),
        "reported_to_police": this.property_form_step5.value.reported_to_police,
        "police_report_date": this.property_form_step5.value.police_report_date,
        "which_station": this.property_form_step5.value.which_station,
        "police_report_number": this.property_form_step5.value.police_report_number,
        "attach_police_report": this.attach_police_report_image_set,
      };
      this._cS.put_API(this._cS.URL_Property_Claim_Post(), step5)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.attach_police_report_image_set = [];
            this.setClaimData();
            this.router.navigate(['/property-step6']);

          } else {
          }
        }, err => {
        });
    }
  }

  deleteImage(img, position) {
    this.attach_police_report_image.splice(position, 1);
    if (img.val) {
      var details = {
        ClaimNumber: localStorage.getItem('PropertyClaimNumber'),
        image_name: img.val,
        image_type: 'attach_police_report',
      };
      this._cS.post_API(this._cS.URL_image_delet(), details)
        .subscribe((data: any) => {
          console.log('data', data);
          if (data.status == 0) {
            var dynamicI = this.dynamicImages(data.data, 'police_report/');
            this.attach_police_report_image = dynamicI;
            this._cS.presentToastWithOptions(data.message);
          } else {
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
      var fileTypes = ['jpg', 'jpeg', 'png', 'gif']

      let formData = new FormData();
      formData.append('file', event.target.files[0]);
      formData.append("image_type", "attach_police_report");
      formData.append("claimNumber", localStorage.getItem('PropertyClaimNumber'));
      this._cS.ImageUpload(formData).subscribe(val => {
        reader.onload = (event: any) => {
          let json = {
            fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
            path: event.target.result,
            name: val.data[0].file_name,
            val: undefined
          }
          this.attach_police_report_image.push(json);
        }
        reader.readAsDataURL(event.target.files[0]);
        this.attach_police_report_image_set.push(val.data[0].file_name);
        if (val) {
          this._cS.presentToastWithOptions(val.message);
        }
        else {
          this._cS.presentToastWithOptions(val.message);
        }
      })
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

  setClaimData() {
    var claimNumber = localStorage.getItem('PropertyClaimNumber');
    if (claimNumber) {
      this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
        .subscribe((data: any) => {
          if (data.status == 0) {
            console.log("editdate", data);
            this.editClaimData = data.data;

            this.property_form_step5.setValue({
              reported_to_police: this.editClaimData.reported_to_police,
              police_report_date: this.editClaimData.police_report_date,
              which_station: this.editClaimData.which_station,
              police_report_number: this.editClaimData.police_report_number,
            })
            if (this.editClaimData.attach_police_report) {
              var dynamicI = (this.dynamicImages(this.editClaimData.attach_police_report, '/police_report/'));
              this.attach_police_report_image = dynamicI;
            }
          }
        });
    }
  }

  ngOnInit() {
  }

  back() {
    this.navCtrl.pop();
  }

}