import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonMockService } from 'src/app/common-mock.service';
import {ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.page.html',
  styleUrls: ['./step1.page.scss'],
})
export class Step1Page implements OnInit {

  other_form_step1: FormGroup;
  Claim_number: any;
  editClaimData: any;

  /* dropdown option Variable Start */
  client_type: any;
  preferred_communication: any;
  /* dropdown option Variable End */

  constructor(private navCtrl: NavController,
    private router:Router,
    public _cS: CommonMockService,
    private formBuilder: FormBuilder,
    private actionSheetCtrl: ActionSheetController,
    private statusBar: StatusBar) { 
    this.other_step1_fb();
      this.formControlValueChanged();
      this.setClaimData();
    }

    ionViewWillEnter() {
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
    }
    
    other_step1_fb() {
      this.other_form_step1 = this.formBuilder.group({
        preferred_communication: [null, Validators.required],
        type_entitiy: [null, Validators.required],
        client_company: [null, Validators.required],

        trading_name: [null, Validators.required],
        abn_client: [null, Validators.required],
        itc_client: [null, Validators.required],

        reported_loss: [null, Validators.compose([Validators.maxLength(400), Validators.required])]
    });  
  }

  formControlValueChanged() {
    this.other_form_step1.get('type_entitiy')
      .valueChanges.subscribe(
        (val: any) => {
          const client_company = this.other_form_step1.get('client_company');
          if (val == "1001") {
            client_company.patchValue(null);
            client_company.clearValidators();
            client_company.updateValueAndValidity();
          } else {
            client_company.setValidators([Validators.required]);
          }
        });           
      }

  otherStep1Next(){
    for (let v in this.other_form_step1.controls) {
      this.other_form_step1.controls[v].markAsTouched();
    }
    if (this.other_form_step1.valid) {
      const step1 = {
          "step": 'step1',
          "ClaimNumber": localStorage.getItem('OtherClaimNumber'),
          "contacted" : this.other_form_step1.value.preferred_communication,
          "client_type" : this.other_form_step1.value.type_entitiy,

          "trading_name" : this.other_form_step1.value.trading_name,
          "abn_client" : this.other_form_step1.value.abn_client,
          "itc_client" : this.other_form_step1.value.itc_client,

          "business_name" : this.other_form_step1.value.client_company,
          "reported_loss" : this.other_form_step1.value.reported_loss,
      };
      this._cS.put_API(this._cS.URL_Other_Claim_Post(), step1)
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.setClaimData();
          this.router.navigate(['/step2']);

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
  back(){
    this.navCtrl.pop();
  }
  setClaimData() {
    var claimNumber = localStorage.getItem('OtherClaimNumber');
    if (claimNumber) {
    this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
      .subscribe((data: any) => {
        if (data.status == 0) {
          console.log("editdate",data);
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
         
          this.other_form_step1.setValue({
            preferred_communication: preferred_communication_set,
            type_entitiy: type_entitiy_set,
            client_company: this.editClaimData.client_company,
            reported_loss: this.editClaimData.reported_loss
          })
         }
      });
    }
  }

  async detail() {
    const actionSheet = await this.actionSheetCtrl.create({
        mode: 'md',
        header: 'Lorem ipsum dolor sit, sed consectetur adipiscing.Dolor sit amet, sed consectetur adipiscing.',
        buttons: [{
            text: 'Cancel',
            //icon: 'close',
            role: 'cancel',
            handler: () => {
                console.log('Cancel clicked');
            }
        },
        ]
    });
    await actionSheet.present();
}

}
