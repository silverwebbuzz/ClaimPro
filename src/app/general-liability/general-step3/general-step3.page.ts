import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonMockService } from 'src/app/common-mock.service';
import { BehaviorSubject } from 'rxjs';
declare var AddressFinder: any;
declare var $: any;

@Component({
  selector: 'app-general-step3',
  templateUrl: './general-step3.page.html',
  styleUrls: ['./general-step3.page.scss'],
})
export class GeneralStep3Page implements OnInit {

  general_form_step3: FormGroup;
  Claim_number: any;
  editClaimData: any;

  constructor(private navCtrl: NavController,
    public _cS: CommonMockService,
    private router: Router,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {

    this.general_step3_fb();
    this.setClaimData();
    this.formControlValueChanged();

    
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  general_step3_fb() {
    this.general_form_step3 = this.formBuilder.group({
      tp_christian_claimant: [null, Validators.required],
      tp_name_claimant: [null, Validators.required],
      tp_postal_street: [null, Validators.required],
      tp_postal_suburb: [null, Validators.required],
      tp_postal_postcode: [null, Validators.required],
      tp_postal_state: [null, Validators.required],
      tp_postal_email: [null, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])],
      tp_tele_main: [null, Validators.required],
      tp_legal_represented: [null, Validators.required],
      tp_name_firm: [null],
      related_injury: [null, Validators.required],
      nature_injury: [null],
      personal_injury: [null, Validators.required],
      reported_loss: [null, Validators.required],
      reported_loss_other: [null, Validators.required],
      type_damage: [null, Validators.required],
      type_damage_other: [null, Validators.required],
      how_damage_occur: [null, Validators.compose([Validators.maxLength(140), Validators.required])],
      reported_gross_estimate: [null, Validators.required],
      business_contract: [null, Validators.compose([Validators.maxLength(280), Validators.required])],
      //contract_value: [null, Validators.required]
    });
  }

  formControlValueChanged() {
    /* Step 3 Start */
    this.general_form_step3.get('tp_legal_represented')
      .valueChanges.subscribe(
        (val: any) => {
          const tp_name_firm = this.general_form_step3.get('tp_name_firm');

          tp_name_firm.patchValue(null);
          tp_name_firm.clearValidators();
          tp_name_firm.updateValueAndValidity()
          if (val == "true") {
            tp_name_firm.setValidators([Validators.required]);
          }
        });
    this.general_form_step3.get('related_injury')
      .valueChanges.subscribe(
        (val: any) => {
          const nature_injury = this.general_form_step3.get('nature_injury');
          const personal_injury = this.general_form_step3.get('personal_injury');

          nature_injury.patchValue(null);
          nature_injury.clearValidators();
          nature_injury.updateValueAndValidity()

          personal_injury.patchValue(null);
          personal_injury.clearValidators();
          personal_injury.updateValueAndValidity()

          if (val == "true") {
            nature_injury.setValidators([Validators.compose([Validators.maxLength(140), Validators.required])]);
            personal_injury.setValidators([Validators.required]);
          }
        });
    this.general_form_step3.get('type_damage')
      .valueChanges.subscribe(
        (val: any) => {
          const type_damage_other = this.general_form_step3.get('type_damage_other');
          if (val == "Other") {
            type_damage_other.setValidators([Validators.required]);
          } else {
            type_damage_other.patchValue(null);
            type_damage_other.clearValidators();
            type_damage_other.updateValueAndValidity();
          }
        });
    this.general_form_step3.get('reported_loss')
      .valueChanges.subscribe(
        (val: any) => {
          const reported_loss_other = this.general_form_step3.get('reported_loss_other');
          if (val == "Other") {
            reported_loss_other.setValidators([Validators.required]);
          } else {
            reported_loss_other.patchValue(null);
            reported_loss_other.clearValidators();
            reported_loss_other.updateValueAndValidity();
          }
        });
  }

  GeneralStep3Next() {
    for (let v in this.general_form_step3.controls) {
      this.general_form_step3.controls[v].markAsTouched();
    }
    if (this.general_form_step3.valid) {
      /* Patient Addres Start */
      let tp_postalStreetValue = null;
      let tp_postalSuburbValue = null;
      let tp_postalPostCodeValue = null;
      let tp_postalStateValue = null;
      if ((<HTMLInputElement>document.getElementById("tp_postal_street"))) {
        tp_postalStreetValue = (<HTMLInputElement>document.getElementById("tp_postal_street")).value;
      }
      if ((<HTMLInputElement>document.getElementById("tp_postal_suburb"))) {
        tp_postalSuburbValue = (<HTMLInputElement>document.getElementById("tp_postal_suburb")).value;
      }
      if ((<HTMLInputElement>document.getElementById("tp_postal_postcode"))) {
        tp_postalPostCodeValue = (<HTMLInputElement>document.getElementById("tp_postal_postcode")).value;
      }
      if ((<HTMLInputElement>document.getElementById("tp_postal_state"))) {
        tp_postalStateValue = (<HTMLInputElement>document.getElementById("tp_postal_state")).value;
      }
      const step3 = {
        "step": 'step3',
        ClaimNumber: localStorage.getItem('GeneralClaimNumber'),
        "tp_christian_claimant": this.general_form_step3.value.tp_christian_claimant,
        "tp_name_claimant": this.general_form_step3.value.tp_name_claimant,
        "tp_postal_street": tp_postalStreetValue,
        "tp_postal_suburb": tp_postalSuburbValue,
        "tp_postal_postcode": tp_postalPostCodeValue,
        "tp_postal_state": tp_postalStateValue,
        "tp_postal_email": this.general_form_step3.value.tp_postal_email,
        "tp_tele_main": this.general_form_step3.value.tp_tele_main,
        "tp_legal_represented": this.general_form_step3.value.tp_legal_represented,
        "tp_name_firm": this.general_form_step3.value.tp_name_firm,
        "related_injury": this.general_form_step3.value.related_injury,
        "nature_injury": this.general_form_step3.value.nature_injury,
        "personal_injury": this.general_form_step3.value.personal_injury,
        "reported_loss": this.general_form_step3.value.reported_loss,
        "reported_loss_other": this.general_form_step3.value.reported_loss_other,
        "type_damage": this.general_form_step3.value.type_damage,
        "type_damage_other": this.general_form_step3.value.type_damage_other,
        "how_damage_occur": this.general_form_step3.value.how_damage_occur,
        "reported_gross_estimate": this.general_form_step3.value.reported_gross_estimate,
        "business_contract": this.general_form_step3.value.business_contract,
        //"contract_value": this.general_form_step3.value.contract_value
      };
      this._cS.put_API(this._cS.URL_General_Claim_Post(), step3)
        .subscribe((data: any) => {
          // this.spinner.hide();
          if (data.status == 0) {
            this.setClaimData();
            this.router.navigate(['/general-step4']);

          } else {
            // this._cS.Display_Toaster('error', data.message);
          }
          // this.spinner.hide();
        }, err => {
          // this.spinner.hide();
        });
    }
  }

  ngOnInit() {
    let script = document.createElement("script");
    script.src = "https://api.addressfinder.io/assets/v3/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }


  tp_postalAddress() {
    let widget = new AddressFinder.Widget(
      document.getElementById("tp_postal_street"),
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
        var JSON = {
          tp_postal_street: address_line_1,
          tp_postal_suburb: mainadddate,
          tp_postal_postcode: postcode,
          tp_postal_state: state_territory,
        }
        this.general_form_step3.patchValue(JSON);
      }
    })
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

            this.general_form_step3.setValue({
              tp_christian_claimant: this.editClaimData.tp_christian_claimant,
              tp_name_claimant: this.editClaimData.tp_name_claimant,
              tp_postal_street: this.editClaimData.tp_postal_street,
              tp_postal_suburb: this.editClaimData.tp_postal_suburb,
              tp_postal_postcode: this.editClaimData.tp_postal_postcode,
              tp_postal_state: this.editClaimData.tp_postal_state,
              tp_postal_email: this.editClaimData.tp_postal_email,
              tp_tele_main: this.editClaimData.tp_tele_main,
              tp_legal_represented: this.editClaimData.tp_legal_represented,
              tp_name_firm: this.editClaimData.tp_name_firm,
              related_injury: this.editClaimData.related_injury,
              nature_injury: this.editClaimData.nature_injury,
              personal_injury: this.editClaimData.personal_injury,
              reported_loss: this.editClaimData.reported_loss,
              reported_loss_other: this.editClaimData.reported_loss_other,
              type_damage: this.editClaimData.type_damage,
              type_damage_other: this.editClaimData.type_damage_other,
              how_damage_occur: this.editClaimData.how_damage_occur,
              reported_gross_estimate: this.editClaimData.reported_gross_estimate,
              business_contract: this.editClaimData.business_contract,
              contract_value: this.editClaimData.contract_value,
            })
          }
        });
    }
  }

}
