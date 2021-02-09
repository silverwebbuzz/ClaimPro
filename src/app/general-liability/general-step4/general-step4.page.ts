import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';


@Component({
  selector: 'app-general-step4',
  templateUrl: './general-step4.page.html',
  styleUrls: ['./general-step4.page.scss'],
})
export class GeneralStep4Page implements OnInit {

  general_form_step4: FormGroup;
  Claim_number: any;
  editClaimData: any;

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {

    this.general_step4_fb();
    this.setClaimData();
    this.formControlValueChanged();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  general_step4_fb() {
    this.general_form_step4 = this.formBuilder.group({
      previous_claims: [null, Validators.required],
      previous_claim_date: [null],
      previous_type_claim: [null],
      previous_type_claim_other: [null],
      previous_insurer: [null],
    });
  }
  formControlValueChanged() {

    this.general_form_step4.get('previous_claims')
      .valueChanges.subscribe(
        (val: any) => {
          const previous_claim_date = this.general_form_step4.get('previous_claim_date');
          const previous_type_claim = this.general_form_step4.get('previous_type_claim');
          const previous_insurer = this.general_form_step4.get('previous_insurer');

          previous_claim_date.patchValue(null);
          previous_claim_date.clearValidators();
          previous_claim_date.updateValueAndValidity()

          previous_type_claim.patchValue(null);
          previous_type_claim.clearValidators();
          previous_type_claim.updateValueAndValidity()

          previous_insurer.patchValue(null);
          previous_insurer.clearValidators();
          previous_insurer.updateValueAndValidity()

          if (val == "true") {
            previous_claim_date.setValidators([Validators.required]);
            previous_type_claim.setValidators([Validators.required]);
            previous_insurer.setValidators([Validators.required]);

          }
        });

    this.general_form_step4.get('previous_type_claim')
      .valueChanges.subscribe(
        (val: any) => {
          const previous_type_claim_other = this.general_form_step4.get('previous_type_claim_other');
          if (val == "Other") {
            previous_type_claim_other.setValidators([Validators.required]);
          } else {
            previous_type_claim_other.patchValue(null);
            previous_type_claim_other.clearValidators();
            previous_type_claim_other.updateValueAndValidity();
          }
        });
  }

  generalStep4Next() {
    for (let v in this.general_form_step4.controls) {
      this.general_form_step4.controls[v].markAsTouched();
    }
    if (this.general_form_step4.valid) {
      const step4 = {
        "step": 'step4',
        "ClaimNumber": localStorage.getItem('GeneralClaimNumber'),
        "previous_claims": this.general_form_step4.value.previous_claims,
        "previous_claim_date": this.general_form_step4.value.previous_claim_date,
        "previous_type_claim": this.general_form_step4.value.previous_type_claim,
        "previous_type_claim_other": this.general_form_step4.value.previous_type_claim_other,
        "previous_insurer": this.general_form_step4.value.previous_insurer
      };
      this._cS.put_API(this._cS.URL_General_Claim_Post(), step4)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.setClaimData();
            this.router.navigate(['/general-step5']);

          } else {
          }
        }, err => {
        });
    }
  }

  ngOnInit() {
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
            this.general_form_step4.setValue({
              previous_claims: this.editClaimData.previous_claims,
              previous_claim_date: this.editClaimData.previous_claim_date,
              previous_type_claim: this.editClaimData.previous_type_claim,
              previous_type_claim_other: this.editClaimData.previous_type_claim_other,
              previous_insurer: this.editClaimData.previous_insurer,
            })
          }
        });
    }
  }
}
