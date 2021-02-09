import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonMockService } from '../common-mock.service';


@Component({
  selector: 'app-professional-indemnity',
  templateUrl: './professional-indemnity.page.html',
  styleUrls: ['./professional-indemnity.page.scss'],
})
export class ProfessionalIndemnityPage implements OnInit {

  professional_form: FormGroup;
  Claim_number: any;
  editClaimData: any;

  constructor(private navCtrl: NavController,
    private router: Router,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar,
    public _cS: CommonMockService,
    private actionSheetCtrl: ActionSheetController) {

    this.professional_fb();
    this.setClaimData();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  professional_fb() {
    this.professional_form = this.formBuilder.group({
      //policy_holder: [null, Validators.required],
      policy_Number: [null, Validators.required],
      tp_christian_policyholder: [null, Validators.required],
      tp_name_policyholder: [null, Validators.required],
      contact_telephone: [null, Validators.required],
      contact_mobile: [null, Validators.required],
      contact_email: [null, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])]
    });
  }

  professionalNext() {
    for (let v in this.professional_form.controls) {
      this.professional_form.controls[v].markAsTouched();
    }
    if (this.professional_form.valid) {
      const step0 = {
        "ClaimNumber": localStorage.getItem('ProfessionalClaimNumber'),
        //"policy_holder": this.professional_form.value.policy_holder,
        "policy_Number": this.professional_form.value.policy_Number,
        "first_name": this.professional_form.value.tp_christian_policyholder,
        "last_name": this.professional_form.value.tp_name_policyholder,
        "telephone": this.professional_form.value.contact_telephone,
        "mobile": this.professional_form.value.contact_mobile,
        "email": this.professional_form.value.contact_email,
      };

      this._cS.post_API(this._cS.URL_Professional_Claim_FirstStep_Post(), step0)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.Claim_number = data.data;
            localStorage.setItem('ProfessionalClaimNumber', this.Claim_number);
            this.setClaimData();
            this.router.navigate(['/professional-step1']);
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
  radioButtonValue(val) { if (val == 1) { return true; } else { return false; } }


  setClaimData() {
    var claimNumber = localStorage.getItem('ProfessionalClaimNumber');
    if (claimNumber) {
      this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.editClaimData = data.data;

            this.professional_form.setValue({
              //policy_holder: this.editClaimData.policy_holder,
              policy_Number: this.editClaimData.policy_number,
              tp_christian_policyholder: this.editClaimData.tp_christian_policyholder,
              tp_name_policyholder: this.editClaimData.tp_name_policyholder,
              contact_telephone: this.editClaimData.contact_telephone,
              contact_mobile: this.editClaimData.contact_mobile,
              contact_email: this.editClaimData.contact_email,
            })
            }
        });
    }
  }
}