import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';


@Component({
  selector: 'app-professional-step1',
  templateUrl: './professional-step1.page.html',
  styleUrls: ['./professional-step1.page.scss'],
})
export class ProfessionalStep1Page implements OnInit {

  professional_form_step1: FormGroup;
  Claim_number: any;
  editClaimData: any;

  /* dropdown option Variable Start */
  client_type: any;
  preferred_communication: any;
  /* dropdown option Variable End */

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {

    this.professional_step1_fb();
    this.formControlValueChanged();
    this.setClaimData();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  professional_step1_fb() {
    this.professional_form_step1 = this.formBuilder.group({
      preferred_communication: [null, Validators.required],
      type_entitiy: [null, Validators.required],
      client_company: [null, Validators.required],

      trading_name: [null, Validators.required],
      abn_client: [null, Validators.required],
      itc_client: [null, Validators.required],

      //health_care_service: [null, Validators.required],
      description_business: [null, Validators.required],
      description_business_other: [null, Validators.required],
      licensed_service: [null, Validators.required],
      required_qualifications: [null, Validators.required],
      association_name_picklist: [null, Validators.required],
      association_name_picklist_other: [null, Validators.required],
    });
  }

  formControlValueChanged() {
    this.professional_form_step1.get('type_entitiy')
      .valueChanges.subscribe(
        (val: any) => {
          const client_company = this.professional_form_step1.get('client_company');
          if (val == "1001") {
            client_company.patchValue(null);
            client_company.clearValidators();
            client_company.updateValueAndValidity();
          } else {
            client_company.setValidators([Validators.required]);
          }
        });

    this.professional_form_step1.get('description_business')
      .valueChanges.subscribe(
        (val: any) => {
          const description_business_other = this.professional_form_step1.get('description_business_other');
          if (val == "Other") {
            description_business_other.setValidators([Validators.required]);
          } else {
            description_business_other.patchValue(null);
            description_business_other.clearValidators();
            description_business_other.updateValueAndValidity();
          }
        });
    this.professional_form_step1.get('association_name_picklist')
      .valueChanges.subscribe(
        (val: any) => {
          const association_name_picklist_other = this.professional_form_step1.get('association_name_picklist_other');
          if (val == "Other") {
            association_name_picklist_other.setValidators([Validators.required]);
          } else {
            association_name_picklist_other.patchValue(null);
            association_name_picklist_other.clearValidators();
            association_name_picklist_other.updateValueAndValidity();
          }
        });
  }

  professionalStep1Next() {
    for (let v in this.professional_form_step1.controls) {
      this.professional_form_step1.controls[v].markAsTouched();
    }
    if (this.professional_form_step1.valid) {
      const step1 = {
        "step": 'step1',
        "ClaimNumber": localStorage.getItem('ProfessionalClaimNumber'),
        "contacted": this.professional_form_step1.value.preferred_communication,
        "client_type": this.professional_form_step1.value.type_entitiy,
        "business_name": this.professional_form_step1.value.client_company,

        "trading_name" : this.professional_form_step1.value.trading_name,
        "abn_client" : this.professional_form_step1.value.abn_client,
        "itc_client" : this.professional_form_step1.value.itc_client,

        //"health_care_service": this.professional_form_step1.value.health_care_service,
        "description_business": this.professional_form_step1.value.description_business,
        "description_business_other": this.professional_form_step1.value.description_business_other,
        "licensed_service": this.professional_form_step1.value.licensed_service,
        "required_qualifications": this.professional_form_step1.value.required_qualifications,
        "association_name_picklist": this.professional_form_step1.value.association_name_picklist,
        "association_name_picklist_other": this.professional_form_step1.value.association_name_picklist_other,
      };
      this._cS.put_API(this._cS.URL_Professional_Claim_Post(), step1)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.setClaimData();
            this.router.navigate(['/professional-step2']);

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
    var claimNumber = localStorage.getItem('ProfessionalClaimNumber');
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

            this.professional_form_step1.setValue({
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
            })
          }
        });
    }
  }
}