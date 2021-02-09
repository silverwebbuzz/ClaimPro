import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonMockService } from '../common-mock.service';


@Component({
  selector: 'app-property',
  templateUrl: './property.page.html',
  styleUrls: ['./property.page.scss'],
})
export class PropertyPage implements OnInit {

  property_form: FormGroup;
  Claim_number: any;
  editClaimData: any;

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar,
    private actionSheetCtrl: ActionSheetController) {

    this.property_fb();
    this.setClaimData();
  }

  property_fb() {
    this.property_form = this.formBuilder.group({
      policy_holder: [null, Validators.required],
      policy_Number: [null, Validators.required],
      tp_christian_policyholder: [null, Validators.required],
      tp_name_policyholder: [null, Validators.required],
      contact_telephone: [null, Validators.required],
      contact_mobile: [null, Validators.required],
      contact_email: [null, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required])],

        ionViewWillEnter() {
          this.statusBar.show();
          this.statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#ffffff');
        }
    });
  }

  propertyNext() {
    for (let v in this.property_form.controls) {
      this.property_form.controls[v].markAsTouched();
    }
    if (this.property_form.valid) {
      const step0 = {
        "ClaimNumber": localStorage.getItem('PropertyClaimNumber'),
        "policy_holder": this.property_form.value.policy_holder,
        "policy_Number": this.property_form.value.policy_Number,
        "first_name": this.property_form.value.tp_christian_policyholder,
        "last_name": this.property_form.value.tp_name_policyholder,
        "telephone": this.property_form.value.contact_telephone,
        "mobile": this.property_form.value.contact_mobile,
        "email": this.property_form.value.contact_email,
      };
      if (this.property_form.value.policy_holder == 'true') {
        this._cS.post_API(this._cS.URL_Property_Claim_FirstStep_Post(), step0)
          .subscribe((data: any) => {
            if (data.status == 0) {
              this.Claim_number = data.data;
              localStorage.setItem('PropertyClaimNumber', this.Claim_number);
              this.router.navigate(['/property-step1']);
            } else {
            }
          }, err => {
          });
      } else {

      }
    }
  }

  setClaimData() {
    var claimNumber = localStorage.getItem('PropertyClaimNumber');
    if (claimNumber) {
      this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.editClaimData = data.data;

            this.property_form.setValue({
              policy_holder: this.editClaimData.policy_holder,
              policy_Number: this.editClaimData.policy_number,
              tp_christian_policyholder: this.editClaimData.tp_christian_policyholder,
              tp_name_policyholder: this.editClaimData.tp_name_policyholder,
              contact_telephone: this.editClaimData.contact_telephone,
              contact_mobile: this.editClaimData.contact_mobile,
              contact_email: this.editClaimData.contact_email,
            });
          }
        });
    }
  }

  ngOnInit() {
  }

  back() {
    this.navCtrl.pop();
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