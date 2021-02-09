import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';

@Component({
  selector: 'app-property-step1',
  templateUrl: './property-step1.page.html',
  styleUrls: ['./property-step1.page.scss'],
})
export class PropertyStep1Page implements OnInit {

  property_form_step1: FormGroup;
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
    this.property_step1_fb();
    this.formControlValueChanged();
    this.setClaimData();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }


  property_step1_fb() {
    this.property_form_step1 = this.formBuilder.group({
      preferred_communication: [null, Validators.required],
      type_entitiy: [null, Validators.required],
      client_company: [null]
    });
  }

  formControlValueChanged() {
    this.property_form_step1.get('type_entitiy')
      .valueChanges.subscribe(
        (val: any) => {
          const client_company = this.property_form_step1.get('client_company');
          if (val == "1001") {
            client_company.patchValue(null);
            client_company.clearValidators();
            client_company.updateValueAndValidity();
          } else {
            client_company.setValidators([Validators.required]);
          }
        });
  }

  propertyStep1Next() {
    for (let v in this.property_form_step1.controls) {
      this.property_form_step1.controls[v].markAsTouched();
    }
    if (this.property_form_step1.valid) {
      const step1 = {
        "step": 'step1',
        "ClaimNumber": localStorage.getItem('PropertyClaimNumber'),
        "contacted": this.property_form_step1.value.preferred_communication,
        "client_type": this.property_form_step1.value.type_entitiy,
        "business_name": this.property_form_step1.value.client_company,
      };
      this._cS.put_API(this._cS.URL_Property_Claim_Post(), step1)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.setClaimData();
            this.router.navigate(['/property-step2']);
          } else {
          }
        }, err => {
        });
    }
  }

  setClaimData() {
    var claimNumber = localStorage.getItem('PropertyClaimNumber');
    if (claimNumber) {
      this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
        .subscribe((data: any) => {
          if (data.status == 0) {
            console.log("editdate", data);
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
           

            this.property_form_step1.setValue({
              preferred_communication: preferred_communication_set,
              type_entitiy: type_entitiy_set,
              client_company: this.editClaimData.client_company,
            })
          }
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

}
