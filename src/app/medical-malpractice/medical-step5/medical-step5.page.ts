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
  selector: 'app-medical-step5',
  templateUrl: './medical-step5.page.html',
  styleUrls: ['./medical-step5.page.scss'],
})
export class MedicalStep5Page implements OnInit {

  medical_form_step5: FormGroup;
  Claim_number: any;
  editClaimData: any;
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
    this.medical_step5_fb();
    this.formControlValueChanged();
    this.setClaimData();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  medical_step5_fb() {
    this.medical_form_step5 = this.formBuilder.group({
      where_loss_damage: [null, Validators.required],
      where_loss_damage_other: [null],
      risk_street: [null],
      risk_suburb: [null],
      risk_state: [null],
      risk_postcode: [null],
      risk_country: [null],
      personal_injury: [null, Validators.required],
      how_injury_occur: [null],
      nature_injury: [null],
      date_loss: [null],
      reported_loss: [null, Validators.required],
      reported_loss_other: [null],
      type_damage: [null, Validators.required],
      type_damage_other: [null],
      how_damage_occur: [null, Validators.compose([Validators.maxLength(140), Validators.required])],
      reported_gross_estimate: [null, Validators.required],
    });
  }

  formControlValueChanged() {
    this.medical_form_step5.get('where_loss_damage')
      .valueChanges.subscribe(
        (val: any) => {
          const risk_street = this.medical_form_step5.get('risk_street');
          const risk_suburb = this.medical_form_step5.get('risk_suburb');
          const risk_state = this.medical_form_step5.get('risk_state');
          const risk_postcode = this.medical_form_step5.get('risk_postcode');
          const risk_country = this.medical_form_step5.get('risk_country');
          const where_loss_damage_other = this.medical_form_step5.get('where_loss_damage_other');

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

    this.medical_form_step5.get('personal_injury')
      .valueChanges.subscribe(
        (val: any) => {
          const how_injury_occur = this.medical_form_step5.get('how_injury_occur');
          const nature_injury = this.medical_form_step5.get('nature_injury');
          const date_loss = this.medical_form_step5.get('date_loss');

          how_injury_occur.patchValue(null);
          how_injury_occur.clearValidators();
          how_injury_occur.updateValueAndValidity();

          nature_injury.patchValue(null);
          nature_injury.clearValidators();
          nature_injury.updateValueAndValidity();

          date_loss.patchValue(null);
          date_loss.clearValidators();
          date_loss.updateValueAndValidity();
          if (val == "true") {
            how_injury_occur.setValidators([Validators.required, Validators.maxLength(140)]);
            nature_injury.setValidators([Validators.required, Validators.maxLength(140)]);
            date_loss.setValidators([Validators.required]);
          }
        });

    this.medical_form_step5.get('type_damage')
      .valueChanges.subscribe(
        (val: any) => {
          const type_damage_other = this.medical_form_step5.get('type_damage_other');
          if (val == 'Other') {
            type_damage_other.setValidators([Validators.required]);
          } else {
            type_damage_other.patchValue(null);
            type_damage_other.clearValidators();
            type_damage_other.updateValueAndValidity();
          }
        });
    this.medical_form_step5.get('reported_loss')
      .valueChanges.subscribe(
        (val: any) => {
          const reported_loss_other = this.medical_form_step5.get('reported_loss_other');
          if (val == "Other") {
            reported_loss_other.setValidators([Validators.required]);
          } else {
            reported_loss_other.patchValue(null);
            reported_loss_other.clearValidators();
            reported_loss_other.updateValueAndValidity();
          }
        });
  }

  medicalStep5Next() {
    for (let v in this.medical_form_step5.controls) {
      this.medical_form_step5.controls[v].markAsTouched();
    }
    if (this.medical_form_step5.valid) {
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
      const step5 = {
        "step": 'step5',
        "ClaimNumber": localStorage.getItem('MedicalClaimNumber'),
        "where_loss_damage": this.medical_form_step5.value.where_loss_damage,
        "risk_street": riskStreetValue,
        "risk_suburb": riskSuburbValue,
        "risk_state": riskStateValue,
        "risk_postcode": riskPostCodeValue,
        "risk_country": riskcountryValue,
        "where_loss_damage_other": this.medical_form_step5.value.where_loss_damage_other,
        "personal_injury": this.medical_form_step5.value.personal_injury,
        "how_injury_occur": this.medical_form_step5.value.how_injury_occur,
        "nature_injury": this.medical_form_step5.value.nature_injury,
        "date_loss": this.medical_form_step5.value.date_loss,
        "reported_loss": this.medical_form_step5.value.reported_loss,
        "reported_loss_other": this.medical_form_step5.value.reported_loss_other,
        "type_damage": this.medical_form_step5.value.type_damage,
        "type_damage_other": this.medical_form_step5.value.type_damage_other,
        "how_damage_occur": this.medical_form_step5.value.how_damage_occur,
        "reported_gross_estimate": this.medical_form_step5.value.reported_gross_estimate,
      };
      this._cS.put_API(this._cS.URL_Medical_Claim_Post(), step5)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.setClaimData();
            this.router.navigate(['/medical-step6']);
          } else {
          }
        }, err => {
        });
    }
  }

  setClaimData() {
    var claimNumber = localStorage.getItem('MedicalClaimNumber');
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
 
            this.medical_form_step5.setValue({
              where_loss_damage: where_loss_damage_set,
              where_loss_damage_other: this.editClaimData.where_loss_damage_other,
              risk_street: this.editClaimData.risk_street,
              risk_suburb: this.editClaimData.risk_suburb,
              risk_state: this.editClaimData.risk_state,
              risk_postcode: this.editClaimData.risk_postcode,
              risk_country: this.editClaimData.risk_country,
              personal_injury: this.editClaimData.personal_injury,
              how_injury_occur: this.editClaimData.how_injury_occur,
              nature_injury: this.editClaimData.nature_injury,
              date_loss: this.editClaimData.date_loss,
              reported_loss: this.editClaimData.reported_loss,
              reported_loss_other: this.editClaimData.reported_loss_other,
              type_damage: this.editClaimData.type_damage,
              type_damage_other: this.editClaimData.type_damage_other,
              how_damage_occur: this.editClaimData.how_damage_occur,
              reported_gross_estimate: this.editClaimData.reported_gross_estimate,
            })
          }
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
        this.medical_form_step5.patchValue(JSON);
      }
    })
  }

  back() {
    this.navCtrl.pop();
  }
}