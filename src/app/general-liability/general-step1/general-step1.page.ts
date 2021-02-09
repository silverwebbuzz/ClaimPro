import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonMockService } from 'src/app/common-mock.service';

@Component({
  selector: 'app-general-step1',
  templateUrl: './general-step1.page.html',
  styleUrls: ['./general-step1.page.scss'],
})
export class GeneralStep1Page implements OnInit {

  general_form_step1: FormGroup;
  Claim_number: any;
  editClaimData: any;
  /* dropdown option Variable Start */
  client_type: any;
  preferred_communication: any;

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {

    this.general_step1_fb();
    this.setClaimData();
    this.formControlValueChanged();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  general_step1_fb() {
    this.general_form_step1 = this.formBuilder.group({
      preferred_communication: [null, Validators.required],
      type_entitiy: [null, Validators.required],

      client_company: [null, Validators.required],
      trading_name: [null, Validators.required],
      abn_client: [null, Validators.required],
      itc_client: [null, Validators.required],

      // health_care_service: [null, Validators.required],
      description_business: [null, Validators.required],
      description_business_other: [null],
      licensed_service: [null, Validators.required],
      required_qualifications: [null, Validators.required],
      association_name_picklist: [null, Validators.required],
      association_name_picklist_other: [null],
      // business_name: [null, Validators.required],
      // abn_client: [null],
      // trading_name: [null],
      employee_basis: [null, Validators.required],
      employee_basis_other: [null],
      // employment_status2: [null, Validators.required],
      // employment_status2_other: [null],
      length_experience: [null, Validators.required],

     
    });
  }
  formControlValueChanged() {
    this.general_form_step1.get('type_entitiy')
      .valueChanges.subscribe(
        (val: any) => {
          const client_company = this.general_form_step1.get('client_company');
          if (val == "1001") {
            client_company.patchValue(null);
            client_company.clearValidators();
            client_company.updateValueAndValidity();
          } else {
            client_company.setValidators([Validators.required]);
          }
        });

    // this.general_form_step1.get('business_name')
    //   .valueChanges.subscribe(
    //     (val: any) => {
    //       const abn_client = this.general_form_step1.get('abn_client');
    //       const trading_name = this.general_form_step1.get('trading_name');

    //       abn_client.patchValue(null);
    //       abn_client.clearValidators();
    //       abn_client.updateValueAndValidity();

    //       trading_name.patchValue(null);
    //       trading_name.clearValidators();
    //       trading_name.updateValueAndValidity();
    //       if (val == "true") {
    //         abn_client.setValidators([Validators.required]);
    //         trading_name.setValidators([Validators.required]);
    //       }
    //     });
    this.general_form_step1.get('employee_basis')
      .valueChanges.subscribe(
        (val: any) => {
          const employee_basis_other = this.general_form_step1.get('employee_basis_other');
          if (val == "Other") {
            employee_basis_other.setValidators([Validators.required]);
          } else {
            employee_basis_other.patchValue(null);
            employee_basis_other.clearValidators();
            employee_basis_other.updateValueAndValidity();
          }
        });
    // this.general_form_step1.get('employment_status2')
    //   .valueChanges.subscribe(
    //     (val: any) => {
    //       const employment_status2_other = this.general_form_step1.get('employment_status2_other');
    //       if (val == "Other") {
    //         employment_status2_other.setValidators([Validators.required]);
    //       } else {
    //         employment_status2_other.patchValue(null);
    //         employment_status2_other.clearValidators();
    //         employment_status2_other.updateValueAndValidity();
    //       }
    //     });
    this.general_form_step1.get('association_name_picklist')
      .valueChanges.subscribe(
        (val: any) => {
          const association_name_picklist_other = this.general_form_step1.get('association_name_picklist_other');
          if (val == "Other") {
            association_name_picklist_other.setValidators([Validators.required]);
          } else {
            association_name_picklist_other.patchValue(null);
            association_name_picklist_other.clearValidators();
            association_name_picklist_other.updateValueAndValidity();
          }
        });
    this.general_form_step1.get('description_business')
      .valueChanges.subscribe(
        (val: any) => {
          const description_business_other = this.general_form_step1.get('description_business_other');
          if (val == "Other") {
            description_business_other.setValidators([Validators.required]);
          } else {
            description_business_other.patchValue(null);
            description_business_other.clearValidators();
            description_business_other.updateValueAndValidity();
          }
        });
  }


  GeneralStep1Next() {
    for (let v in this.general_form_step1.controls) {
      this.general_form_step1.controls[v].markAsTouched();
    }
    if (this.general_form_step1.valid) {
      const step1 = {
        "step": 'step1',
        "ClaimNumber": localStorage.getItem('GeneralClaimNumber'),
        "contacted": this.general_form_step1.value.preferred_communication,
        "client_type": this.general_form_step1.value.type_entitiy,

        "client_company": this.general_form_step1.value.client_company,
        "trading_name" : this.general_form_step1.value.trading_name,
        "abn_client" : this.general_form_step1.value.abn_client,
        "itc_client" : this.general_form_step1.value.itc_client,

        // "business_name": this.general_form_step1.value.business_name,
        // "health_care_service": this.general_form_step1.value.health_care_service,
        "description_business": this.general_form_step1.value.description_business,
        "description_business_other": this.general_form_step1.value.description_business_other,
        "licensed_service": this.general_form_step1.value.licensed_service,
        "required_qualifications": this.general_form_step1.value.required_qualifications,
        "association_name_picklist": this.general_form_step1.value.association_name_picklist,
        "association_name_picklist_other": this.general_form_step1.value.association_name_picklist_other,
        // "trading_name": this.general_form_step1.value.trading_name,
        // "abn_client": this.general_form_step1.value.abn_client,
        'employee_basis': this.general_form_step1.value.employee_basis,
        "employee_basis_other": this.general_form_step1.value.employee_basis_other,
        // "employment_status2": this.general_form_step1.value.employment_status2,
        // "employment_status2_other": this.general_form_step1.value.employment_status2_other,
        "length_experience": this.general_form_step1.value.length_experience
      };
      this._cS.put_API(this._cS.URL_General_Claim_Post(), step1)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.setClaimData();
            this.router.navigate(['/general-step2']);
          } else {
          }
        }, err => {
        });
    }
  }

  ngOnInit() {
    // DropDown Option List Value 
    /* Step - 1 How would you like to be contacted */
    this._cS.getoptionvalue_API(5)
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.preferred_communication = data.data;
        }
      });

    /* Step - 1 Client type */
    this._cS.getoptionvalue_API(1)
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.client_type = data.data;
        }
      });
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
            if (this.editClaimData.preferred_communication) {
              var preferred_communication = JSON.parse(this.editClaimData.preferred_communication);
              for (var preferred_communication_set in preferred_communication) {
              }
            }
            else {
              preferred_communication_set = null;
            }
  
            if (this.editClaimData.type_entitiy) {
              var type_entitiyArry = JSON.parse(this.editClaimData.type_entitiy);
              for (var type_entitiy_set in type_entitiyArry) {
              }
            }
            else {
              type_entitiy_set = null;
            }
            this.general_form_step1.setValue({
              preferred_communication: preferred_communication_set,
              type_entitiy: type_entitiy_set,
              client_company: this.editClaimData.client_company,
              health_care_service: this.editClaimData.health_care_service,
              description_business: this.editClaimData.description_business,
              description_business_other: this.editClaimData.description_business_other,
              licensed_service: this.editClaimData.licensed_service,
              required_qualifications: this.editClaimData.required_qualifications,
              association_name_picklist: this.editClaimData.association_name_picklist,
              association_name_picklist_other: this.editClaimData.association_name_picklist_other,
              business_name: this.editClaimData.business_name,
              abn_client: this.editClaimData.abn_client,
              trading_name: this.editClaimData.trading_name,
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
