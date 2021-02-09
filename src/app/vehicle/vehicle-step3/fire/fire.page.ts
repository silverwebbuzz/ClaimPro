import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';


@Component({
  selector: 'app-fire',
  templateUrl: './fire.page.html',
  styleUrls: ['./fire.page.scss'],
})
export class FirePage implements OnInit {

  fire_form: FormGroup;
  editClaimData: any;
  image_of_damage_image = [];
  image_of_damage_image_set: any = [];
  quote_image = [];
  quote_image_set: any = [];
  ImageServerURL: string;

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {
      this.ImageServerURL = this._cS.imageUrl();
    this.fire_fb();
    this.formControlValueChanged();
    this.setClaimData();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  fire_fb() {
    this.fire_form = this.formBuilder.group({
      fire_type: [null, Validators.required],
        fire_type_other: [null],
        vehicle_damaged: [null, Validators.required],
        quote_repair: [null],
        costs_reimbursed:  [null],
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
  }

  formControlValueChanged() {
    this.fire_form.get('vehicle_damaged')
      .valueChanges.subscribe(
        (val: any) => {
          const where_vehicle_street = this.fire_form.get('where_vehicle_street');
          const where_vehicle_suburb = this.fire_form.get('where_vehicle_suburb');
          const where_vehicle_post_code = this.fire_form.get('where_vehicle_post_code');
          const quote_repair = this.fire_form.get('quote_repair');
          const costs_reimbursed = this.fire_form.get('costs_reimbursed');
          const bank_account_name = this.fire_form.get('bank_account_name');
          const name_bank = this.fire_form.get('name_bank');
          const bank_branch = this.fire_form.get('bank_branch');
          const bank_bsb = this.fire_form.get('bank_bsb');
          const bank_account_number = this.fire_form.get('bank_account_number');

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

          this.fire_form.get('quote_repair')
            .valueChanges.subscribe(
              (val: any) => {
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
                  costs_reimbursed.setValidators([Validators.required]);
                }
              });

          if (val == "Vehicle is not drivable") {
            where_vehicle_street.setValidators([Validators.required]);
            where_vehicle_suburb.setValidators([Validators.required]);
            where_vehicle_post_code.setValidators([Validators.required]);

          }
          if (val != "Not known") {
            quote_repair.setValidators([Validators.required]);
            costs_reimbursed.setValidators([Validators.required]);
          }
          this.fire_form.get('costs_reimbursed')
            .valueChanges.subscribe(
              (val: any) => {
                if (val == "true") {
                  bank_account_name.setValidators([Validators.required]);
                  name_bank.setValidators([Validators.required]);
                  bank_branch.setValidators([Validators.required]);
                  bank_bsb.setValidators([Validators.required]);
                  bank_account_number.setValidators([Validators.required]);
                }
              });
        });

    this.fire_form.get('fire_type')
      .valueChanges.subscribe(
        (val: any) => {
          const fire_type_other = this.fire_form.get('fire_type_other');
          if (val == "Other") {
            fire_type_other.setValidators([Validators.required]);
          } else {
            fire_type_other.patchValue(null);
            fire_type_other.clearValidators();
            fire_type_other.updateValueAndValidity();
          }

        });

        this.fire_form.get('name_bank')
      .valueChanges.subscribe(
        (val: any) => {
          const name_bank_other = this.fire_form.get('name_bank_other');
          if (val == "1039") {
            name_bank_other.setValidators([Validators.required]);
          } else {
            name_bank_other.patchValue(null);
            name_bank_other.clearValidators();
            name_bank_other.updateValueAndValidity();
          }
        });

  }

  fireNext() {
    console.log("*********")
    for (let v in this.fire_form.controls) {
      this.fire_form.controls[v].markAsTouched();
    }
    if (this.fire_form.valid) {
      const step4 = {
        "step": 'step4',
        "ClaimNumber": localStorage.getItem('ClaimNumber'),
        "fire_type" : this.fire_form.value.fire_type,
        "fire_type_other" : this.fire_form.value.fire_type_other,
        "vehicle_damaged" : this.fire_form.value.vehicle_damaged,
        "quote_repair" : this.fire_form.value.quote_repair,
        "costs_reimbursed" : this.fire_form.value.costs_reimbursed,
        "bank_account_name" : this.fire_form.value.bank_account_name,
        "name_bank" : this.fire_form.value.name_bank,
        "name_bank_other" : this.fire_form.value.name_bank_other,
        "bank_branch" : this.fire_form.value.bank_branch,
        "bank_bsb" : this.fire_form.value.bank_bsb,
        "bank_account_number" : this.fire_form.value.bank_account_number,
        "where_vehicle_street" : this.fire_form.value.where_vehicle_street,
        "image_of_damage": this.image_of_damage_image_set,
        "quote_image": this.quote_image_set,
      };
      this._cS.put_API(this._cS.URL_Vehicle_Claim_Post(), step4)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.image_of_damage_image_set = [];
            this.quote_image_set = [];
            this.setClaimData();
            this.router.navigate(['/vehicle-step5']);

          } else {
          }
        }, err => {
        });
    }
  }

  delete_image_of_damage(img, position) {
    this.image_of_damage_image.splice(position, 1);
    if (img.val) {
      var details = {
        ClaimNumber: localStorage.getItem('ClaimNumber'),
        image_name: img.val,
        image_type: 'image_of_damage',
      };
      this._cS.post_API(this._cS.URL_image_delet(), details)
        .subscribe((data: any) => {
          console.log('data', data);
          if (data.status == 0) {
            var dynamicI = this.dynamicImages(data.data, 'image_of_damage/');
            this.image_of_damage_image = dynamicI;
            //this._cS.Display_Toaster('success', 'Image successfully deleted.');
          } else {
            //this._cS.Display_Toaster('error', data.message);
          }
        });
    }

  }

  image_of_damage(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      var extension = event.target.files[0].name.split('.').pop().toLowerCase();
      var fileName = event.target.files[0].name;
      var fileTypes = ['jpg', 'jpeg', 'png', 'gif']

      let formData = new FormData();
      formData.append('file', event.target.files[0]);
      formData.append("image_type", "image_of_damage");
      formData.append("claimNumber", localStorage.getItem('ClaimNumber'));
      this._cS.ImageUpload(formData).subscribe(val => {
        reader.onload = (event: any) => {
          let json = {
            fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
            path: event.target.result,
            name: val.data[0].file_name,
            val: undefined
          }
          this.image_of_damage_image.push(json);
        }
        reader.readAsDataURL(event.target.files[0]);
        this.image_of_damage_image_set.push(val.data[0].file_name);

      })
    }
  }

  delete_quote_image(img, position) {
    this.quote_image.splice(position, 1);
    if (img.val) {
      var details = {
        ClaimNumber: localStorage.getItem('ClaimNumber'),
        image_name: img.val,
        image_type: 'quote_image',
      };
      this._cS.post_API(this._cS.URL_image_delet(), details)
        .subscribe((data: any) => {
          console.log('data', data);
          if (data.status == 0) {
            var dynamicI = this.dynamicImages(data.data, 'quote_image/');
            this.quote_image = dynamicI;
            //this._cS.Display_Toaster('success', 'Image successfully deleted.');
          } else {
            //this._cS.Display_Toaster('error', data.message);
          }
        });
    }

  }

  image_quote(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      var extension = event.target.files[0].name.split('.').pop().toLowerCase();
      var fileName = event.target.files[0].name;
      var fileTypes = ['jpg', 'jpeg', 'png', 'gif']

      let formData = new FormData();
      formData.append('file', event.target.files[0]);
      formData.append("image_type", "quote_image");
      formData.append("claimNumber", localStorage.getItem('ClaimNumber'));
      this._cS.ImageUpload(formData).subscribe(val => {
        reader.onload = (event: any) => {
          let json = {
            fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
            path: event.target.result,
            name: val.data[0].file_name,
            val: undefined
          }
          this.quote_image.push(json);
        }
        reader.readAsDataURL(event.target.files[0]);
        this.quote_image_set.push(val.data[0].file_name);

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

            this.fire_form.setValue({
              fire_type: this.editClaimData.fire_type,
              fire_type_other: this.editClaimData.fire_type_other,
              vehicle_damaged: this.editClaimData.vehicle_damaged,
              where_vehicle_street: this.editClaimData.where_vehicle_street,
              where_vehicle_suburb: this.editClaimData.where_vehicle_suburb,
              where_vehicle_post_code: this.editClaimData.where_vehicle_post_code,
              quote_repair: this.editClaimData.quote_repair,
              costs_reimbursed: this.editClaimData.costs_reimbursed,
              bank_account_name: this.editClaimData.bank_account_name,
              name_bank: this.editClaimData.name_bank,
              name_bank_other: this.editClaimData.name_bank_other,
              bank_branch: this.editClaimData.bank_branch,
              bank_bsb: this.editClaimData.bank_bsb,
              bank_account_number: this.editClaimData.bank_account_number,

            })
            if (this.editClaimData.image_of_damage) {
              var dynamicI = (this.dynamicImages(this.editClaimData.image_of_damage, '/image_of_damage/'));
              this.image_of_damage_image = dynamicI;
            }
            if (this.editClaimData.quote_image) {
              var dynamicI = (this.dynamicImages(this.editClaimData.quote_image, '/quote_image/'));
              this.quote_image = dynamicI;
            }
          }
        });
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
    
}