import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonMockService } from '../common-mock.service';


@Component({
  selector: 'app-medical-malpractice',
  templateUrl: './medical-malpractice.page.html',
  styleUrls: ['./medical-malpractice.page.scss'],
})
export class MedicalMalpracticePage implements OnInit {

  medical_form: FormGroup;
  Claim_number: any;
  editClaimData: any;

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar,
    private actionSheetCtrl: ActionSheetController) {

    this.medical_fb();
    this.setClaimData();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  medical_fb() {
    this.medical_form = this.formBuilder.group({
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

  medicalNext() {
    for (let v in this.medical_form.controls) {
      this.medical_form.controls[v].markAsTouched();
    }
    if (this.medical_form.valid) {
      const step0 = {
        "ClaimNumber": localStorage.getItem('MedicalClaimNumber'),
        //"policy_holder": this.medical_form.value.policy_holder,
        "policy_Number": this.medical_form.value.policy_Number,
        "first_name": this.medical_form.value.tp_christian_policyholder,
        "last_name": this.medical_form.value.tp_name_policyholder,
        "telephone": this.medical_form.value.contact_telephone,
        "mobile": this.medical_form.value.contact_mobile,
        "email": this.medical_form.value.contact_email,
      };
      this._cS.post_API(this._cS.URL_Medical_Claim_FirstStep_Post(), step0)
        .subscribe((data: any) => {
          // this.spinner.hide();
          if (data.status == 0) {
            this.Claim_number = data.data;
            localStorage.setItem('MedicalClaimNumber', this.Claim_number);
            // this.setClaimData();
            this.router.navigate(['/medical-step1']);
          } else {
            // this._cS.Display_Toaster('error', data.message);
          }
          // this.spinner.hide();
        }, err => {
          // this.spinner.hide();
        });
    }
  }

  ngOnInit() {
  }

  back() {
    this.navCtrl.pop();
  }

  setClaimData() {
    var claimNumber = localStorage.getItem('MedicalClaimNumber');
    if (claimNumber) {
      this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.editClaimData = data.data;

            this.medical_form.setValue({
              //policy_holder: this.editClaimData.policy_holder,
              policy_Number: this.editClaimData.policy_number,
              tp_christian_policyholder: this.editClaimData.tp_christian_policyholder,
              tp_name_policyholder: this.editClaimData.tp_name_policyholder,
              contact_telephone: this.editClaimData.contact_telephone,
              contact_mobile: this.editClaimData.contact_mobile,
              contact_email: this.editClaimData.contact_email,
            });
            // this.checkedRadioButton = this.editClaimData.policy_holder;
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