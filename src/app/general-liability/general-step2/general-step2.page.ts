import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';
import { BehaviorSubject } from 'rxjs';
declare var AddressFinder: any;
declare var $: any;


@Component({
  selector: 'app-general-step2',
  templateUrl: './general-step2.page.html',
  styleUrls: ['./general-step2.page.scss'],
})
export class GeneralStep2Page implements OnInit {

  general_form_step2: FormGroup;
  fileImage = '';
  private uploadFile = null;
  Claim_number: any;
  editClaimData: any;
  images = [];
  data: any = [];
  ImageServerURL: string;
   /* dropdown option Variable Start */
   where_loss_damage: any;
   /* dropdown option Variable End */

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {
    this.ImageServerURL = this._cS.imageUrl();
    this.general_step2_fb();
    this.setClaimData();
    this.formControlValueChanged();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }
  
  general_step2_fb() {
    this.general_form_step2 = this.formBuilder.group({
      reported_circumstances: [null, Validators.compose([Validators.maxLength(280), Validators.required])],
      //alleged_you_fault: [null, Validators.required],
      loss_date_discovery: [null, Validators.required],
      complaint_writing: [null, Validators.required],
      how_aware_complaint: [null, Validators.required],
      how_aware_complaint_other: [null],
      date_loss: [null],
      time_loss: [null],
      where_loss_damage: [null],
      risk_street: [null],
      risk_suburb: [null],
      risk_state: [null],
      risk_postcode: [null],
      risk_country: [null],
      where_loss_damage_other: [null],
      // complaint_documents: [null]
    });
  }

  formControlValueChanged() {
    this.general_form_step2.get('complaint_writing')
      .valueChanges.subscribe(
        (val: any) => {
          const date_loss = this.general_form_step2.get('date_loss');
          const time_loss = this.general_form_step2.get('time_loss');
          const where_loss_damage = this.general_form_step2.get('where_loss_damage');

          date_loss.patchValue(null);
          date_loss.clearValidators();
          date_loss.updateValueAndValidity();
          time_loss.patchValue(null);
          time_loss.clearValidators();
          time_loss.updateValueAndValidity();
          where_loss_damage.patchValue(null);
          where_loss_damage.clearValidators();
          where_loss_damage.updateValueAndValidity();
          if (val) {
            date_loss.setValidators([Validators.required]);
            time_loss.setValidators([Validators.required])
            where_loss_damage.setValidators([Validators.required]);
          }
        });
    this.general_form_step2.get('how_aware_complaint')
      .valueChanges.subscribe(
        (val: any) => {
          const how_aware_complaint_other = this.general_form_step2.get('how_aware_complaint_other');
          if (val == "Other") {
            how_aware_complaint_other.setValidators([Validators.required]);
          } else {
            how_aware_complaint_other.patchValue(null);
            how_aware_complaint_other.clearValidators();
            how_aware_complaint_other.updateValueAndValidity();
          }
        });

    this.general_form_step2.get('where_loss_damage')
      .valueChanges.subscribe(
        (val: any) => {
          const risk_street = this.general_form_step2.get('risk_street');
          const risk_suburb = this.general_form_step2.get('risk_suburb');
          const risk_state = this.general_form_step2.get('risk_state');
          const risk_postcode = this.general_form_step2.get('risk_postcode');
          const risk_country = this.general_form_step2.get('risk_country');
          const where_loss_damage_other = this.general_form_step2.get('where_loss_damage_other');

          if (val == "1343" || val == "1344") {
            risk_street.setValidators([Validators.required]);
            risk_suburb.setValidators([Validators.required]);
            risk_state.setValidators([Validators.required]);
            risk_postcode.setValidators([Validators.required]);
            risk_country.setValidators([Validators.required]);
          } else {
            risk_street.patchValue(null);
            risk_street.clearValidators();
            risk_street.updateValueAndValidity();

            risk_suburb.patchValue(null);
            risk_suburb.clearValidators();
            risk_suburb.updateValueAndValidity();

            risk_state.patchValue(null);
            risk_state.clearValidators();
            risk_state.updateValueAndValidity();

            risk_postcode.patchValue(null);
            risk_postcode.clearValidators();
            risk_postcode.updateValueAndValidity();

            risk_country.patchValue(null);
            risk_country.clearValidators();
            risk_country.updateValueAndValidity();
          }
          if (val == "1346") {
            where_loss_damage_other.setValidators([Validators.required]);
          } else {
            where_loss_damage_other.patchValue(null);
            where_loss_damage_other.clearValidators();
            where_loss_damage_other.updateValueAndValidity();
          }
        });
  }

  GeneralStep2Next() {
    for (let v in this.general_form_step2.controls) {
      this.general_form_step2.controls[v].markAsTouched();
    }
    if (this.general_form_step2.valid) {
      /* riskAddres Start */
      let riskStreetValue = null;
      let riskSuburbValue = null;
      let riskPostCodeValue = null;
      let riskStateValue = null;
      let riskcountryValue = null;
      if ((<HTMLInputElement>document.getElementById("address_line_1"))) {
        riskStreetValue = (<HTMLInputElement>document.getElementById("address_line_1")).value;
      }
      if ((<HTMLInputElement>document.getElementById("city"))) {
        riskSuburbValue = (<HTMLInputElement>document.getElementById("city")).value;
      }
      if ((<HTMLInputElement>document.getElementById("postcode"))) {
        riskPostCodeValue = (<HTMLInputElement>document.getElementById("postcode")).value;
      }
      if ((<HTMLInputElement>document.getElementById("state"))) {
        riskStateValue = (<HTMLInputElement>document.getElementById("state")).value;
      }
      if ((<HTMLInputElement>document.getElementById("country"))) {
        riskcountryValue = (<HTMLInputElement>document.getElementById("country")).value;
      }
      /* riskAddres End */
      const step2 = {
        "step": 'step2',
        "ClaimNumber": localStorage.getItem('GeneralClaimNumber'),
        "reported_circumstances": this.general_form_step2.value.reported_circumstances,
        //"alleged_you_fault": this.general_form_step2.value.alleged_you_fault,
        "loss_date_discovery": this.general_form_step2.value.loss_date_discovery,
        "complaint_writing": this.general_form_step2.value.complaint_writing,
        "how_aware_complaint": this.general_form_step2.value.how_aware_complaint,
        "how_aware_complaint_other": this.general_form_step2.value.how_aware_complaint_other,
        "date_loss": this.general_form_step2.value.date_loss,
        "time_loss": this.general_form_step2.value.time_loss,
        "risk_street": riskStreetValue,
        "risk_suburb": riskSuburbValue,
        "risk_state": riskStateValue,
        "risk_postcode": riskPostCodeValue,
        "risk_country": riskcountryValue,
        "where_loss_damage": this.general_form_step2.value.where_loss_damage,
        "where_loss_damage_other": this.general_form_step2.value.where_loss_damage_other,
        "complaint_documents": this.data,
      };
      this._cS.put_API(this._cS.URL_General_Claim_Post(), step2)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.data = [];
            this.setClaimData();
            this.router.navigate(['/general-step3']);
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

    // DropDown Option List Value 
     /* Where did the loss/damage occur? */
     this._cS.getoptionvalue_API(48)
     .subscribe((data: any) => {
       if (data.status == 0) {
         this.where_loss_damage = data.data;
       }
     });
  }

  occurchange($event) {
    if ($event == "1343" || $event == "1344") {
    setTimeout(() => {
      this.riskAddress();
    }, 1000);
  }
  }

  riskAddress() {
    let widget = new AddressFinder.Widget(
      document.getElementById("address_line_1"),
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
          risk_street: address_line_1,
          risk_suburb: mainadddate,
          risk_postcode: postcode,
          risk_state: state_territory,
          risk_country: country1
        }
        this.general_form_step2.patchValue(JSON);
      }
    })
  }

  deleteImage(img, position) {
    this.images.splice(position, 1);
    if (img.val) {
      var details = {
        ClaimNumber: localStorage.getItem('GeneralClaimNumber'),
        image_name: img.val,
        image_type: 'attach_complaint_documents',
      };
      this._cS.post_API(this._cS.URL_image_delet(), details)
        .subscribe((data: any) => {
          console.log('data', data);
          if (data.status == 0) {
            var dynamicI = this.dynamicImages(data.data, 'attach_complaint_documents/');
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
      formData.append("image_type", "attach_complaint_documents");
      formData.append("claimNumber", localStorage.getItem('GeneralClaimNumber'));
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

  back() {
    this.navCtrl.pop();
  }

  setClaimData() {
    var claimNumber = localStorage.getItem('GeneralClaimNumber');
    if (claimNumber) {
      this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
        .subscribe((data: any) => {
          if (data.status == 0) {

            this.editClaimData = data.data;
            if (this.editClaimData.where_loss_damage) {
              var where_loss_damage = JSON.parse(this.editClaimData.where_loss_damage);
              for (var where_loss_damage_set in where_loss_damage) {
              }
            }
            else {
              where_loss_damage_set = null;
            }
            this.general_form_step2.setValue({
              reported_circumstances: this.editClaimData.reported_circumstances,
              //alleged_you_fault: this.editClaimData.alleged_you_fault,
              loss_date_discovery: this.editClaimData.loss_date_discovery,
              complaint_writing: this.editClaimData.complaint_writing,
              date_loss: this.editClaimData.date_loss,
              time_loss: this.editClaimData.time_loss,
              where_loss_damage: where_loss_damage_set,
              where_loss_damage_other: this.editClaimData.where_loss_damage_other,
              risk_street: this.editClaimData.risk_street,
              risk_suburb: this.editClaimData.risk_suburb,
              risk_state: this.editClaimData.risk_state,
              risk_postcode: this.editClaimData.risk_postcode,
              risk_country: this.editClaimData.risk_country,
              how_aware_complaint: this.editClaimData.how_aware_complaint,
              how_aware_complaint_other: this.editClaimData.how_aware_complaint_other,
            })
            if (this.editClaimData.complaint_documents) {
              var dynamicI = (this.dynamicImages(this.editClaimData.complaint_documents, '/attach_complaint_documents/'));
              this.images = dynamicI;
            }
          }
        });
    }
  }
}
