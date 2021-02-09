import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';
import { BehaviorSubject } from 'rxjs';
declare var AddressFinder: any;
declare var $: any;


@Component({
  selector: 'app-vehicle-step3',
  templateUrl: './vehicle-step3.page.html',
  styleUrls: ['./vehicle-step3.page.scss'],
})
export class VehicleStep3Page implements OnInit {

  vehicle_form_step3: FormGroup;
  Claim_number: any;
  editClaimData: any;

  /* dropdown option Variable Start */
  where_loss_damage: any;
  /* dropdown option Variable End */

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {

    this.vehicle_step3_fb();
    this.setClaimData();
    this.formControlValueChanged();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  vehicle_step3_fb() {
    this.vehicle_form_step3 = this.formBuilder.group({
      where_loss_damage: [null, Validators.required],
      where_loss_damage_other: [null],
      risk_street: [null],
      risk_suburb: [null],
      risk_state: [null],
      risk_postcode: [null],
      risk_country: [null],
      date_loss: [null, Validators.required],
      time_loss: [null, Validators.required],
      vehicle_damage_arose: [null, Validators.required],
    });
  }

  formControlValueChanged() {
    this.vehicle_form_step3.get('where_loss_damage')
      .valueChanges.subscribe(
        (val: any) => {
          const risk_street = this.vehicle_form_step3.get('risk_street');
          const risk_suburb = this.vehicle_form_step3.get('risk_suburb');
          const risk_state = this.vehicle_form_step3.get('risk_state');
          const risk_postcode = this.vehicle_form_step3.get('risk_postcode');
          const risk_country = this.vehicle_form_step3.get('risk_country');
          const where_loss_damage_other = this.vehicle_form_step3.get('where_loss_damage_other');

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

  vehicleStep3Next() {
    for (let v in this.vehicle_form_step3.controls) {
      this.vehicle_form_step3.controls[v].markAsTouched();
    }
    if (this.vehicle_form_step3.valid) {
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
      const step3 = {
        "step": 'step3',
        "ClaimNumber": localStorage.getItem('ClaimNumber'),
        "where_loss_damage": this.vehicle_form_step3.value.where_loss_damage,
        "risk_street": riskStreetValue,
        "risk_suburb": riskSuburbValue,
        "risk_state": riskStateValue,
        "risk_postcode": riskPostCodeValue,
        "risk_country": riskcountryValue,
        "where_loss_damage_other": this.vehicle_form_step3.value.where_loss_damage_other,
        "date_loss": this.vehicle_form_step3.value.date_loss,
        "time_loss": this.vehicle_form_step3.value.time_loss,
        "vehicle_damage_arose": this.vehicle_form_step3.value.vehicle_damage_arose
      };
      this._cS.put_API(this._cS.URL_Vehicle_Claim_Post(), step3)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.setClaimData();
            //localStorage.setItem('damage_type', this.vehicle_form_step3.value.vehicle_damage_arose);
            if(this.vehicle_form_step3.value.vehicle_damage_arose == "Windscreen/Glass"){
              this.router.navigate(['/windscreen-glass']);
            }
            if(this.vehicle_form_step3.value.vehicle_damage_arose == "Fire"){
              this.router.navigate(['/fire']);
            }
            if(this.vehicle_form_step3.value.vehicle_damage_arose == "Weather"){
              this.router.navigate(['/whether']);
            }
            if(this.vehicle_form_step3.value.vehicle_damage_arose == "Theft"){
              this.router.navigate(['/theft']);
            }
            if(this.vehicle_form_step3.value.vehicle_damage_arose == "Impact"){
              this.router.navigate(['/impact']);
            }
            if(this.vehicle_form_step3.value.vehicle_damage_arose == "Collision"){
              this.router.navigate(['/collision']);
            }
            
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
        this.vehicle_form_step3.patchValue(JSON);

      }
    })
  }

  next() {
    // localStorage.setItem('damage_type',this.vehicle_form_step3.value.vehicle_damage_arose);
    // this.router.navigate(['/vehicle-step4']);
  }

  setClaimData() {
    var claimNumber = localStorage.getItem('ClaimNumber');
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

            this.vehicle_form_step3.setValue({
              where_loss_damage: where_loss_damage_set,
              where_loss_damage_other: this.editClaimData.where_loss_damage_other,
              risk_street: this.editClaimData.risk_street,
              risk_suburb: this.editClaimData.risk_suburb,
              risk_state: this.editClaimData.risk_state,
              risk_postcode: this.editClaimData.risk_postcode,
              risk_country: this.editClaimData.risk_country,
              date_loss: this.editClaimData.date_loss,
              time_loss: this.editClaimData.time_loss,
              vehicle_damage_arose: this.editClaimData.vehicle_damage_arose,
            })
          }
        });
    }
  }


  back() {
    this.navCtrl.pop();
  }

}