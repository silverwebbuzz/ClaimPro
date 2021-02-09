import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonMockService } from 'src/app/common-mock.service';

@Component({
  selector: 'app-professional-step6',
  templateUrl: './professional-step6.page.html',
  styleUrls: ['./professional-step6.page.scss'],
})
export class ProfessionalStep6Page implements OnInit {

  professional_form_step6: FormGroup;
  Claim_number: any;
  editClaimData: any;

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {

    this.professional_step6_fb();
    this.formControlValueChanged();
    this.setClaimData();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  formControlValueChanged() {
    this.professional_form_step6.get('previous_claims')
      .valueChanges.subscribe(
        (val: any) => {
          const previous_claim_date = this.professional_form_step6.get('previous_claim_date');
          const previous_type_claim = this.professional_form_step6.get('previous_type_claim');
          const previous_insurer = this.professional_form_step6.get('previous_insurer');

          previous_claim_date.patchValue(null);
          previous_claim_date.clearValidators();
          previous_claim_date.updateValueAndValidity();

          previous_type_claim.patchValue(null);
          previous_type_claim.clearValidators();
          previous_type_claim.updateValueAndValidity();

          previous_insurer.patchValue(null);
          previous_insurer.clearValidators();
          previous_insurer.updateValueAndValidity();

          if (val == "true") {
            previous_claim_date.setValidators([Validators.required]);
            previous_type_claim.setValidators([Validators.required]);
            previous_insurer.setValidators([Validators.required]);
          }
        });

    this.professional_form_step6.get('previous_type_claim')
      .valueChanges.subscribe(
        (val: any) => {
          const previous_type_claim_other = this.professional_form_step6.get('previous_type_claim_other');
          if (val == "Other") {
            previous_type_claim_other.setValidators([Validators.required]);
          } else {
            previous_type_claim_other.patchValue(null);
            previous_type_claim_other.clearValidators();
            previous_type_claim_other.updateValueAndValidity();
          }
        });
  }

  professional_step6_fb() {
    this.professional_form_step6 = this.formBuilder.group({
      previous_claims: [null, Validators.required],
      previous_claim_date: [null],
      previous_type_claim: [null],
      previous_type_claim_other: [null],
      previous_insurer: [null]
    });
  }

  professionalStep6Next() {
    for (let v in this.professional_form_step6.controls) {
      this.professional_form_step6.controls[v].markAsTouched();
    }
    if (this.professional_form_step6.valid) {
      const step6 = {
        "step": 'step6',
        "ClaimNumber": localStorage.getItem('ProfessionalClaimNumber'),
        "previous_claims": this.professional_form_step6.value.previous_claims,
        "previous_claim_date": this.professional_form_step6.value.previous_claim_date,
        "previous_type_claim": this.professional_form_step6.value.previous_type_claim,
        "previous_type_claim_other": this.professional_form_step6.value.previous_type_claim_other,
        "previous_insurer": this.professional_form_step6.value.previous_insurer
      };
      this._cS.put_API(this._cS.URL_Professional_Claim_Post(), step6)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.setClaimData();
            this.router.navigate(['/professional-step7']);
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
    var claimNumber = localStorage.getItem('ProfessionalClaimNumber');
    if (claimNumber) {
      this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.editClaimData = data.data;

            this.professional_form_step6.setValue({
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