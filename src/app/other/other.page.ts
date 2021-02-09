import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonMockService } from '../common-mock.service';

@Component({
    selector: 'app-other',
    templateUrl: './other.page.html',
    styleUrls: ['./other.page.scss'],
})
export class OtherPage implements OnInit {

    other_form: FormGroup;
    Claim_number: any;
    editClaimData: any;
    checkedRadioButton: string = undefined;

    constructor(private navCtrl: NavController,
        public _cS: CommonMockService,
        private router: Router,
        private formBuilder: FormBuilder,
        private statusBar: StatusBar, private actionSheetCtrl: ActionSheetController) {
        this.other_fb();
        this.setClaimData();
    }

    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
      }

    other_fb() {
        this.other_form = this.formBuilder.group({
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

    otherNext() {
        for (let v in this.other_form.controls) {
            this.other_form.controls[v].markAsTouched();
        }
        if (this.other_form.valid) {
            const step0 = {
                "ClaimNumber": localStorage.getItem('OtherClaimNumber'),
                //"policy_holder": this.other_form.value.policy_holder,
                "policy_Number": this.other_form.value.policy_Number,
                "first_name": this.other_form.value.tp_christian_policyholder,
                "last_name": this.other_form.value.tp_name_policyholder,
                "telephone": this.other_form.value.contact_telephone,
                "mobile": this.other_form.value.contact_mobile,
                "email": this.other_form.value.contact_email,
            };

            // if (this.other_form.value.policy_holder == 'true') {
                this._cS.post_API(this._cS.URL_Other_Claim_FirstStep_Post(), step0)
                    .subscribe((data: any) => {
                        if (data.status == 0) {
                            this.Claim_number = data.data;
                            localStorage.setItem('OtherClaimNumber', this.Claim_number);
                            this.setClaimData();
                            this.router.navigate(['/step1']);
                        } else {
                        }
                    }, err => {

                    });
            // } else {

            // }
        }
    }

    ngOnInit() {
    }

    back() {
        this.navCtrl.pop();
    }

    setClaimData() {
        var claimNumber = localStorage.getItem('OtherClaimNumber');
        if (claimNumber) {
            this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
                .subscribe((data: any) => {
                    if (data.status == 0) {
                        this.editClaimData = data.data;

                        this.other_form.setValue({
                            //policy_holder: this.editClaimData.policy_holder,
                            policy_Number: this.editClaimData.policy_number,
                            tp_christian_policyholder: this.editClaimData.tp_christian_policyholder,
                            tp_name_policyholder: this.editClaimData.tp_name_policyholder,
                            contact_telephone: this.editClaimData.contact_telephone,
                            contact_mobile: this.editClaimData.contact_mobile,
                            contact_email: this.editClaimData.contact_email,
                        });
                        // this.checkedRadioButton = this.editClaimData.policy_holder;
                        /* Step 0 Set Value End */
                    }
                });
        }
    }

    async detail() {
        const actionSheet = await this.actionSheetCtrl.create({
            mode: 'md',
            header: 'Lorem ipsum dolor sit, sed consectetur adipiscing.Dolor sit amet, sed consectetur adipiscing.Lorem ipsum dolor sit, sed consectetur adipiscing.Dolor sit amet, sed consectetur adipiscing.',
            cssClass: 'customeSheet',
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
