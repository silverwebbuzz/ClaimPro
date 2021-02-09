import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';

@Component({
  selector: 'app-vehicle-step6',
  templateUrl: './vehicle-step6.page.html',
  styleUrls: ['./vehicle-step6.page.scss'],
})
export class VehicleStep6Page implements OnInit {

  vehicle_form_step6: FormGroup;
  Claim_number: any;
  images = [];
  data: any = [];
  editClaimData: any;
  attach_upload_document_set: any = [];
  ImageServerURL: string;

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {
    this.ImageServerURL = this._cS.imageUrl();
    this.vehicle_step6_fb();
    this.setClaimData();
    this.formControlValueChanged();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  vehicle_step6_fb() {
    this.vehicle_form_step6 = this.formBuilder.group({
      reported_to_police: [null, Validators.required],
      police_report_date: [null],
      which_station: [null],
      police_report_number: [null],
      police_laid_charges: [null],
      police_who_charged: [null],
    });
  }

  formControlValueChanged() {
    this.vehicle_form_step6.get('reported_to_police')
      .valueChanges.subscribe(
        (val: any) => {
          const police_report_date = this.vehicle_form_step6.get('police_report_date');
          const which_station = this.vehicle_form_step6.get('which_station');
          const police_report_number = this.vehicle_form_step6.get('police_report_number');
          const police_laid_charges = this.vehicle_form_step6.get('police_laid_charges');

          police_report_date.patchValue(null);
          police_report_date.clearValidators();
          police_report_date.updateValueAndValidity();

          which_station.patchValue(null);
          which_station.clearValidators();
          which_station.updateValueAndValidity();

          police_report_number.patchValue(null);
          police_report_number.clearValidators();
          police_report_number.updateValueAndValidity();

          police_laid_charges.patchValue(null);
          police_laid_charges.clearValidators();
          police_laid_charges.updateValueAndValidity();

          if (val == "true") {
            police_report_date.setValidators([Validators.required]);
            which_station.setValidators([Validators.required]);
            police_report_number.setValidators([Validators.required]);
            police_laid_charges.setValidators([Validators.required]);

          } else {

          }
        });

    this.vehicle_form_step6.get('police_laid_charges')
      .valueChanges.subscribe(
        (val: any) => {
          const police_who_charged = this.vehicle_form_step6.get('police_who_charged');

          police_who_charged.patchValue(null);
          police_who_charged.clearValidators();
          police_who_charged.updateValueAndValidity();
          if (val == "true") {
            police_who_charged.setValidators([Validators.required]);
          }
        });
  }

  vehicleStep6Next() {
    for (let v in this.vehicle_form_step6.controls) {
      this.vehicle_form_step6.controls[v].markAsTouched();
    }
    if (this.vehicle_form_step6.valid) {
      const step6 = {
        "step": 'step6',
        "ClaimNumber": localStorage.getItem('ClaimNumber'),
        "reported_to_police": this.vehicle_form_step6.value.reported_to_police,
        "police_report_date": this.vehicle_form_step6.value.police_report_date,
        "which_station": this.vehicle_form_step6.value.which_station,
        "police_report_number": this.vehicle_form_step6.value.police_report_number,
        "police_laid_charges": this.vehicle_form_step6.value.police_laid_charges,
        "police_who_charged": this.vehicle_form_step6.value.police_who_charged,
        "attach_police_report": this.data,
      };
      this._cS.put_API(this._cS.URL_Vehicle_Claim_Post(), step6)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.data = [];
            this.setClaimData();
            this.router.navigate(['/vehicle-step7']);
          } else {
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
        ClaimNumber: localStorage.getItem('ClaimNumber'),
        image_name: img.val,
        image_type: 'attach_police_report',
      };
      this._cS.post_API(this._cS.URL_image_delet(), details)
        .subscribe((data: any) => {
          console.log('data', data);
          if (data.status == 0) {
            var dynamicI = this.dynamicImages(data.data, 'police_report/');
            this.images = dynamicI;
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
      formData.append("claimNumber", localStorage.getItem('ClaimNumber'));
      this._cS.ImageUpload(formData).subscribe(val => {
        reader.onload = (event: any) => {
          let json = {
            fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
            path: event.target.result,
            name: val.data[0].file_name,
            val: undefined
          }
          this.images.push(json);
        }
        reader.readAsDataURL(event.target.files[0]);
        this.data.push(val.data[0].file_name);
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
    var claimNumber = localStorage.getItem('ClaimNumber');
    if (claimNumber) {
      this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
        .subscribe((data: any) => {
          if (data.status == 0) {
            console.log("editdate", data);
            this.editClaimData = data.data;

            this.vehicle_form_step6.setValue({
              reported_to_police: this.editClaimData.reported_to_police,
              police_report_date: this.editClaimData.police_report_date,
              which_station: this.editClaimData.which_station,
              police_report_number: this.editClaimData.police_report_number,
              police_laid_charges: this.editClaimData.police_laid_charges,
              police_who_charged: this.editClaimData.police_who_charged,
            })
            if (this.editClaimData.attach_police_report) {
              var dynamicI = (this.dynamicImages(this.editClaimData.attach_police_report, '/police_report/'));
              this.images = dynamicI;
            }
          }
        });
    }
  }

  back() {
    this.navCtrl.pop();
  }

}