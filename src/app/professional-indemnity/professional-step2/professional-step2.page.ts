import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';


@Component({
  selector: 'app-professional-step2',
  templateUrl: './professional-step2.page.html',
  styleUrls: ['./professional-step2.page.scss'],
})
export class ProfessionalStep2Page implements OnInit {

  professional_form_step2: FormGroup;
  Claim_number: any;
  editClaimData: any;

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {

    this.professional_step2_fb();
    //this.formControlValueChanged();
    this.setClaimData();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }
  
  professional_step2_fb() {
    this.professional_form_step2 = this.formBuilder.group({
      // business_name: [null, Validators.required],
      // abn_client: [null],
      // trading_name: [null],
      employee_basis: [null, Validators.required],
      employee_basis_other: [null],
      employment_status2: [null, Validators.required],
      employment_status2_other: [null],
      length_experience: [null, Validators.required]
    });
  }

  formControlValueChanged() {
    this.professional_form_step2.get('business_name')
      .valueChanges.subscribe(
        (val: any) => {
          const abn_client = this.professional_form_step2.get('abn_client');
          const trading_name = this.professional_form_step2.get('trading_name');

          abn_client.patchValue(null);
          abn_client.clearValidators();
          abn_client.updateValueAndValidity();

          trading_name.patchValue(null);
          trading_name.clearValidators();
          trading_name.updateValueAndValidity();
          if (val == "true") {
            abn_client.setValidators([Validators.required, Validators.maxLength(11)]);
            trading_name.setValidators([Validators.required]);
          }
        });
    this.professional_form_step2.get('employee_basis')
      .valueChanges.subscribe(
        (val: any) => {
          const employee_basis_other = this.professional_form_step2.get('employee_basis_other');
          if (val == "Other") {
            employee_basis_other.setValidators([Validators.required]);
          } else {
            employee_basis_other.patchValue(null);
            employee_basis_other.clearValidators();
            employee_basis_other.updateValueAndValidity();
          }
        });

    this.professional_form_step2.get('employment_status2')
      .valueChanges.subscribe(
        (val: any) => {
          const employment_status2_other = this.professional_form_step2.get('employment_status2_other');
          if (val == "Other") {
            employment_status2_other.setValidators([Validators.required]);
          } else {
            employment_status2_other.patchValue(null);
            employment_status2_other.clearValidators();
            employment_status2_other.updateValueAndValidity();
          }
        });
  }

  professionalStep2Next() {
    for (let v in this.professional_form_step2.controls) {
      this.professional_form_step2.controls[v].markAsTouched();
    }
    if (this.professional_form_step2.valid) {
      const step2 = {
        "step": 'step2',
        "ClaimNumber": localStorage.getItem('ProfessionalClaimNumber'),
        // "business_name": this.professional_form_step2.value.business_name,
        // "trading_name": this.professional_form_step2.value.trading_name,
        // "abn_client": this.professional_form_step2.value.abn_client,
        'employee_basis': this.professional_form_step2.value.employee_basis,
        "employee_basis_other": this.professional_form_step2.value.employee_basis_other,
        "employment_status2": this.professional_form_step2.value.employment_status2,
        "employment_status2_other": this.professional_form_step2.value.employment_status2_other,
        "length_experience": this.professional_form_step2.value.length_experience
      };
      this._cS.put_API(this._cS.URL_Professional_Claim_Post(), step2)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.setClaimData();
            this.router.navigate(['/professional-step3']);
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

            this.professional_form_step2.setValue({
              //business_name: this.editClaimData.business_name,
              //abn_client: this.editClaimData.abn_client,
              //trading_name: this.editClaimData.trading_name,
              employee_basis: this.editClaimData.employee_basis,
              employee_basis_other: this.editClaimData.employee_basis_other,
              employment_status2: this.editClaimData.employment_status2,
              employment_status2_other: this.editClaimData.employment_status2_other,
              length_experience: this.editClaimData.length_experience,
            })
          }
        });
    }
  }
}
