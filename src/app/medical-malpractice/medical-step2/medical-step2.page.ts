import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonMockService } from 'src/app/common-mock.service';

@Component({
  selector: 'app-medical-step2',
  templateUrl: './medical-step2.page.html',
  styleUrls: ['./medical-step2.page.scss'],
})
export class MedicalStep2Page implements OnInit {

  medical_form_step2: FormGroup;
  Claim_number: any;
  editClaimData: any;

  /* dropdown option Variable Start */
  employment_classification: any;
  employment_status: any;
  where_qualified: any;
  type_practioner: any;

  constructor(private navCtrl: NavController,
    public _cS: CommonMockService,
    private router: Router,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {
    this.medical_step2_fb();
    this.setClaimData();
    //this.formControlValueChanged();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  medical_step2_fb() {
    this.medical_form_step2 = this.formBuilder.group({
      // business_name: [null, Validators.required],
      // trading_name: [null],
      // abn_client: [null],
      employment_classification: [null, Validators.required],
      employment_classification_other: [null],
      employment_status: [null, Validators.required],
      employment_status_other: [null],
      years_experience: [null, Validators.required],
      where_qualified: [null, Validators.required],
      where_qualified_other: [null],
      type_practioner: [null, Validators.required],
      type_practioner_other: [null],
    });
  }

  formControlValueChanged() {

    this.medical_form_step2.get('business_name')
      .valueChanges.subscribe(
        (val: any) => {
          const trading_name = this.medical_form_step2.get('trading_name');
          const abn_client = this.medical_form_step2.get('abn_client');

          trading_name.patchValue(null);
          trading_name.clearValidators();
          trading_name.updateValueAndValidity();

          abn_client.patchValue(null);
          abn_client.clearValidators();
          abn_client.updateValueAndValidity();

          if (val == "true") {
            trading_name.setValidators([Validators.required]);
            abn_client.setValidators([Validators.required, Validators.maxLength(11)]);
          }
        });
    this.medical_form_step2.get('employment_classification')
      .valueChanges.subscribe(
        (val: any) => {
          const employment_classification_other = this.medical_form_step2.get('employment_classification_other');
          if (val == "1880") {
            employment_classification_other.setValidators([Validators.required]);
          } else {
            employment_classification_other.patchValue(null);
            employment_classification_other.clearValidators();
            employment_classification_other.updateValueAndValidity();
          }
        });
    this.medical_form_step2.get('employment_status')
      .valueChanges.subscribe(
        (val: any) => {
          const employment_status_other = this.medical_form_step2.get('employment_status_other');
          if (val == '1885') {
            employment_status_other.setValidators([Validators.required]);
          } else {
            employment_status_other.patchValue(null);
            employment_status_other.clearValidators();
            employment_status_other.updateValueAndValidity();
          }
        });
    this.medical_form_step2.get('where_qualified')
      .valueChanges.subscribe(
        (val: any) => {
          const where_qualified_other = this.medical_form_step2.get('where_qualified_other');
          if (val == "1895") {
            where_qualified_other.setValidators([Validators.required]);
          } else {
            where_qualified_other.patchValue(null);
            where_qualified_other.clearValidators();
            where_qualified_other.updateValueAndValidity();
          }
        });
    this.medical_form_step2.get('type_practioner')
      .valueChanges.subscribe(
        (val: any) => {
          const type_practioner_other = this.medical_form_step2.get('type_practioner_other');
          if (val == "1890") {
            type_practioner_other.setValidators([Validators.required]);
          } else {
            type_practioner_other.patchValue(null);
            type_practioner_other.clearValidators();
            type_practioner_other.updateValueAndValidity();
          }
        });
  }

  medicalStep2Next() {
    for (let v in this.medical_form_step2.controls) {
      this.medical_form_step2.controls[v].markAsTouched();
    }
    if (this.medical_form_step2.valid) {
      const step2 = {
        "step": 'step2',
        "ClaimNumber": localStorage.getItem('MedicalClaimNumber'),
        // "business_name": this.medical_form_step2.value.business_name,
        // "trading_name": this.medical_form_step2.value.trading_name,
        // "abn_client": this.medical_form_step2.value.abn_client,
        'employment_classification': this.medical_form_step2.value.employment_classification,
        "employment_classification_other": this.medical_form_step2.value.employment_classification_other,
        "employment_status": this.medical_form_step2.value.employment_status,
        "employment_status_other": this.medical_form_step2.value.employment_status_other,
        "years_experience": this.medical_form_step2.value.years_experience,
        'where_qualified': this.medical_form_step2.value.where_qualified,
        "where_qualified_other": this.medical_form_step2.value.where_qualified_other,
        "type_practioner": this.medical_form_step2.value.type_practioner,
        "type_practioner_other": this.medical_form_step2.value.type_practioner_other,
      };
      this._cS.put_API(this._cS.URL_Medical_Claim_Post(), step2)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.setClaimData();
            this.router.navigate(['/medical-step3']);
          } else {
          }
        }, err => {
        });
    }
  }

  ngOnInit() {
    // dropdown value
    /* Step - 2 employment_classification */
    this._cS.getoptionvalue_API(113)
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.employment_classification = data.data;
        }
      });
    this._cS.getoptionvalue_API(114)
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.employment_status = data.data;
        }
      });
    this._cS.getoptionvalue_API(116)
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.where_qualified = data.data;
        }
      });
    this._cS.getoptionvalue_API(115)
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.type_practioner = data.data;
        }
      });

  }

  setClaimData() {
    var claimNumber = localStorage.getItem('MedicalClaimNumber');
    if (claimNumber) {
      this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.editClaimData = data.data;
            if (this.editClaimData.employment_classification) {
              var employment_classification = JSON.parse(this.editClaimData.employment_classification);
              for (var employment_classification_set in employment_classification) {
              }
            }
            else {
              employment_classification_set = null;
            }
  
            if (this.editClaimData.employment_status) {
              var employment_status = JSON.parse(this.editClaimData.employment_status);
              for (var employment_status_set in employment_status) {
              }
            }
            else {
              employment_status_set = null;
            }
  
            if (this.editClaimData.type_practioner) {
              var type_practioner = JSON.parse(this.editClaimData.type_practioner);
              for (var type_practioner_set in type_practioner) {
              }
            }
            else {
              type_practioner_set = null;
            }
  
  
            if (this.editClaimData.where_qualified) {
              var where_qualified = JSON.parse(this.editClaimData.where_qualified);
              for (var where_qualified_set in where_qualified) {
              }
            }
            else {
              where_qualified_set = null;
            }
            this.medical_form_step2.setValue({
              //business_name: this.editClaimData.business_name,
              // trading_name: this.editClaimData.trading_name,
              // abn_client: this.editClaimData.abn_client,
              employment_classification: employment_classification_set,
              employment_classification_other: this.editClaimData.employment_classification_other,
              employment_status: employment_status_set,
              employment_status_other: this.editClaimData.employment_status_other,
              years_experience: this.editClaimData.years_experience,
              where_qualified: where_qualified_set,
              where_qualified_other: this.editClaimData.where_qualified_other,
              type_practioner: type_practioner_set,
              type_practioner_other: this.editClaimData.type_practioner_other,
            })
          }
        });
    }
  }

  back() {
    this.navCtrl.pop();
  }

}
