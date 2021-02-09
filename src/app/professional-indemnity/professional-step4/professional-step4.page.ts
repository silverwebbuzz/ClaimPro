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
  selector: 'app-professional-step4',
  templateUrl: './professional-step4.page.html',
  styleUrls: ['./professional-step4.page.scss'],
})
export class ProfessionalStep4Page implements OnInit {

  professional_form_step4: FormGroup;
  Claim_number: any;
  editClaimData: any;
   /* dropdown option Variable Start */
   where_loss_damage: any;

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {

    this.professional_step4_fb();
    this.formControlValueChanged();
    this.setClaimData();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  professional_step4_fb() {
    this.professional_form_step4 = this.formBuilder.group({
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
      business_contract: [null, Validators.compose([Validators.maxLength(140), Validators.required])],
      contract_value: [null, Validators.required],
      where_loss_damage: [null, Validators.required],
      where_loss_damage_other: [null],
      risk_street: [null],
      risk_suburb: [null],
      risk_state: [null],
      risk_postcode: [null],
      risk_country: [null],
    });
  }

  formControlValueChanged() {
    this.professional_form_step4.get('where_loss_damage')
      .valueChanges.subscribe(
        (val: any) => {
          const risk_street = this.professional_form_step4.get('risk_street');
          const risk_suburb = this.professional_form_step4.get('risk_suburb');
          const risk_state = this.professional_form_step4.get('risk_state');
          const risk_postcode = this.professional_form_step4.get('risk_postcode');
          const risk_country = this.professional_form_step4.get('risk_country');

          const where_loss_damage_other = this.professional_form_step4.get('where_loss_damage_other');

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

  professionalStep4Next() {
    for (let v in this.professional_form_step4.controls) {
      this.professional_form_step4.controls[v].markAsTouched();
    }
    if (this.professional_form_step4.valid) {
      /* Tp_postal Addres Start */
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
      /* Tp_postal Addres End */

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

      const step4 = {
        "step": 'step4',
        "ClaimNumber": localStorage.getItem('ProfessionalClaimNumber'),
        "tp_christian_claimant": this.professional_form_step4.value.tp_christian_claimant,
        "tp_name_claimant": this.professional_form_step4.value.tp_name_claimant,
        "tp_postal_street": tp_postalStreetValue,
        "tp_postal_suburb": tp_postalSuburbValue,
        "tp_postal_postcode": tp_postalPostCodeValue,
        "tp_postal_state": tp_postalStateValue,
        "tp_postal_email": this.professional_form_step4.value.tp_postal_email,
        "tp_tele_main": this.professional_form_step4.value.tp_tele_main,
        "business_contract": this.professional_form_step4.value.business_contract,
        "contract_value": this.professional_form_step4.value.contract_value,
        "where_loss_damage": this.professional_form_step4.value.where_loss_damage,
        "risk_street": riskStreetValue,
        "risk_suburb": riskSuburbValue,
        "risk_state": riskStateValue,
        "risk_postcode": riskPostCodeValue,
        "risk_country": riskcountryValue,
        "where_loss_damage_other": this.professional_form_step4.value.where_loss_damage_other
      };
      this._cS.put_API(this._cS.URL_Professional_Claim_Post(), step4)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.setClaimData();
            this.router.navigate(['/professional-step5']);
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

            if (this.editClaimData.where_loss_damage) {
              var where_loss_damage = JSON.parse(this.editClaimData.where_loss_damage);
              for (var where_loss_damage_set in where_loss_damage) {
              }
            }
            else {
              where_loss_damage_set = null;
            }

            this.professional_form_step4.setValue({
              tp_christian_claimant: this.editClaimData.tp_christian_claimant,
              tp_name_claimant: this.editClaimData.tp_name_claimant,
              tp_postal_street: this.editClaimData.tp_postal_street,
              tp_postal_suburb: this.editClaimData.tp_postal_suburb,
              tp_postal_postcode: this.editClaimData.tp_postal_postcode,
              tp_postal_state: this.editClaimData.tp_postal_state,
              tp_postal_email: this.editClaimData.tp_postal_email,
              tp_tele_main: this.editClaimData.tp_tele_main,
              business_contract: this.editClaimData.business_contract,
              contract_value: this.editClaimData.contract_value,
              where_loss_damage: where_loss_damage_set,
              where_loss_damage_other: this.editClaimData.where_loss_damage_other,
              risk_street: this.editClaimData.risk_street,
              risk_suburb: this.editClaimData.risk_suburb,
              risk_state: this.editClaimData.risk_state,
              risk_postcode: this.editClaimData.risk_postcode,
              risk_country: this.editClaimData.risk_country,
            })
          }
        });
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
        this.professional_form_step4.patchValue(JSON);

      }
    })
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
        this.professional_form_step4.patchValue(JSON);
      }
    })
  }

}
