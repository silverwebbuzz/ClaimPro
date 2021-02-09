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
  selector: 'app-property-step2',
  templateUrl: './property-step2.page.html',
  styleUrls: ['./property-step2.page.scss'],
})
export class PropertyStep2Page implements OnInit {

  property_form_step2: FormGroup;
  Claim_number: any;
  editClaimData: any;

  /* dropdown option Variable Start */
  
  where_loss_damage: any;
  who_discovered: any;
 /* dropdown option Variable End */

  constructor(private navCtrl: NavController,
    private router: Router,
    private formBuilder: FormBuilder,
    public _cS: CommonMockService,
    private statusBar: StatusBar) {
    this.property_step2_fb();
    this.formControlValueChanged();
    this.setClaimData();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }


  property_step2_fb() {
    this.property_form_step2 = this.formBuilder.group({
      property: [null, Validators.required],
      property_other: [null],
      where_loss_damage: [null, Validators.required],
      where_loss_damage_other: [null],
      risk_street: [null],
      risk_suburb: [null],
      risk_state: [null],
      risk_postcode: [null],
      risk_country: [null],
      risk_address_type: [null],
      risk_address_type_other: [null],
      date_loss: [null, Validators.required],
      cat_event: [null, Validators.required],
      disaster_type: [null],
      disaster_type_other: [null],
      reporter_name: [null, Validators.required],
      who_discovered: [null, Validators.required],
      who_discovered_other: [null],
    });
  }

  formControlValueChanged() {
    this.property_form_step2.get('property')
      .valueChanges.subscribe(
        (val: any) => {
          const property_other = this.property_form_step2.get('property_other');
          if (val == "Other") {
            property_other.setValidators([Validators.required]);
          } else {
            property_other.patchValue(null);
            property_other.clearValidators();
            property_other.updateValueAndValidity();
          }
        });
    this.property_form_step2.get('where_loss_damage')
      .valueChanges.subscribe(
        (val: any) => {
          const risk_street = this.property_form_step2.get('risk_street');
          const risk_suburb = this.property_form_step2.get('risk_suburb');
          const risk_state = this.property_form_step2.get('risk_state');
          const risk_postcode = this.property_form_step2.get('risk_postcode');
          const risk_country = this.property_form_step2.get('risk_country');

          const where_loss_damage_other = this.property_form_step2.get('where_loss_damage_other');
          const risk_address_type = this.property_form_step2.get('risk_address_type');

          if (val == "1343" || val == "1344") {
            risk_address_type.setValidators([Validators.required]);
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

            risk_address_type.patchValue(null);
            risk_address_type.clearValidators();
            risk_address_type.updateValueAndValidity();
          }
          if (val == "1346") {
            where_loss_damage_other.setValidators([Validators.required]);
          } else {
            where_loss_damage_other.patchValue(null);
            where_loss_damage_other.clearValidators();
            where_loss_damage_other.updateValueAndValidity();
          }
        });
    this.property_form_step2.get('risk_address_type')
      .valueChanges.subscribe(
        (val: any) => {
          const risk_address_type_other = this.property_form_step2.get('risk_address_type_other');
          if (val == "Other") {
            risk_address_type_other.setValidators([Validators.required]);
          } else {
            risk_address_type_other.patchValue(null);
            risk_address_type_other.clearValidators();
            risk_address_type_other.updateValueAndValidity();
          }
        });
    this.property_form_step2.get('cat_event')
      .valueChanges.subscribe(
        (val: any) => {
          const disaster_type = this.property_form_step2.get('disaster_type');

          disaster_type.patchValue(null);
          disaster_type.clearValidators();
          disaster_type.updateValueAndValidity();
          if (val == "true") {
            disaster_type.setValidators([Validators.required]);
          }
        });

    this.property_form_step2.get('who_discovered')
      .valueChanges.subscribe(
        (val: any) => {
          const who_discovered_other = this.property_form_step2.get('who_discovered_other');
          if (val == "1356") {
            who_discovered_other.setValidators([Validators.required]);
          } else {
            who_discovered_other.patchValue(null);
            who_discovered_other.clearValidators();
            who_discovered_other.updateValueAndValidity();
          }
        });
    this.property_form_step2.get('disaster_type')
      .valueChanges.subscribe(
        (val: any) => {
          const disaster_type_other = this.property_form_step2.get('disaster_type_other');
          if (val == "Other") {
            disaster_type_other.setValidators([Validators.required]);
          } else {
            disaster_type_other.patchValue(null);
            disaster_type_other.clearValidators();
            disaster_type_other.updateValueAndValidity();
          }
        });
  }

  propertyStep2Next() {
    for (let v in this.property_form_step2.controls) {
      this.property_form_step2.controls[v].markAsTouched();
    }
    if (this.property_form_step2.valid) {
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
        "ClaimNumber": localStorage.getItem('PropertyClaimNumber'),
        "property": this.property_form_step2.value.property,
        "property_other": this.property_form_step2.value.property_other,
        "where_loss_damage": this.property_form_step2.value.where_loss_damage,
        "risk_street": riskStreetValue,
        "risk_suburb": riskSuburbValue,
        "risk_state": riskStateValue,
        "risk_postcode": riskPostCodeValue,
        "risk_country": riskcountryValue,
        "risk_address_type": this.property_form_step2.value.risk_address_type,
        "risk_address_type_other": this.property_form_step2.value.risk_address_type_other,
        "where_loss_damage_other": this.property_form_step2.value.where_loss_damage_other,
        "date_loss": this.property_form_step2.value.date_loss,
        "cat_event": this.property_form_step2.value.cat_event,
        "disaster_type": this.property_form_step2.value.disaster_type,
        "disaster_type_other": this.property_form_step2.value.disaster_type_other,
        "reporter_name": this.property_form_step2.value.reporter_name,
        "who_discovered": this.property_form_step2.value.who_discovered,
        "who_discovered_other": this.property_form_step2.value.who_discovered_other
      };
      this._cS.put_API(this._cS.URL_Property_Claim_Post(), step2)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.setClaimData();
            this.router.navigate(['/property-step3']);

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

    //dropdown  value set
    this._cS.getoptionvalue_API(48)
    .subscribe((data: any) => {
      if (data.status == 0) {
        this.where_loss_damage = data.data;
      }
    });

  /* Where did the loss/damage occur? */
  this._cS.getoptionvalue_API(49)
    .subscribe((data: any) => {
      if (data.status == 0) {
        this.who_discovered = data.data;
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
        this.property_form_step2.patchValue(JSON);

      }
    })
  }

  setClaimData() {
    var claimNumber = localStorage.getItem('PropertyClaimNumber');
    if (claimNumber) {
      this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
        .subscribe((data: any) => {
          if (data.status == 0) {
            console.log("editdate", data);
            this.editClaimData = data.data;
            if (this.editClaimData.where_loss_damage) {
              var where_loss_damage = JSON.parse(this.editClaimData.where_loss_damage);
              for (var where_loss_damage_set in where_loss_damage) {
              }
            }
            else {
              where_loss_damage_set = null;
            }
  
            if (this.editClaimData.who_discovered) {
              var who_discovered = JSON.parse(this.editClaimData.who_discovered);
              for (var who_discovered_set in who_discovered) {
              }
            }
            else {
              who_discovered_set = null;
            }

            this.property_form_step2.setValue({
              property: this.editClaimData.property,
              property_other: this.editClaimData.property_other,
              where_loss_damage: where_loss_damage_set,
              where_loss_damage_other: this.editClaimData.where_loss_damage_other,
              risk_street: this.editClaimData.risk_street,
              risk_suburb: this.editClaimData.risk_suburb,
              risk_state: this.editClaimData.risk_state,
              risk_postcode: this.editClaimData.risk_postcode,
              risk_country: this.editClaimData.risk_country,
              risk_address_type: this.editClaimData.risk_address_type,
              risk_address_type_other: this.editClaimData.risk_address_type_other,
              date_loss: this.editClaimData.date_loss,
              cat_event: this.editClaimData.cat_event,
              disaster_type: this.editClaimData.disaster_type,
              disaster_type_other: this.editClaimData.disaster_type_other,
              reporter_name: this.editClaimData.reporter_name,
              who_discovered: who_discovered_set,
              who_discovered_other: this.editClaimData.who_discovered_other,
            })
          }
        });
    }
  }

  back() {
    this.navCtrl.pop();
  }
}