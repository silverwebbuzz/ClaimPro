import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';

@Component({
  selector: 'app-professional-step5',
  templateUrl: './professional-step5.page.html',
  styleUrls: ['./professional-step5.page.scss'],
})
export class ProfessionalStep5Page implements OnInit {

  professional_form_step5: FormGroup;
  Claim_number: any;
  editClaimData: any;


  constructor(private navCtrl: NavController,
    private router: Router,
    private formBuilder: FormBuilder,
    public _cS: CommonMockService,
    private statusBar: StatusBar) {
    this.professional_step5_fb();
    //this.formControlValueChanged();
    this.setClaimData();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  professional_step5_fb() {
    this.professional_form_step5 = this.formBuilder.group({
      personal_injury: [null, Validators.required],
      how_injury_occur: [null],
      nature_injury: [null],
      date_loss: [null],
      time_loss: [null],
      reported_loss: [null, Validators.required],
      reported_loss_other: [null],
      type_damage: [null, Validators.required],
      type_damage_other: [null],
      how_damage_occur: [null, Validators.compose([Validators.maxLength(140), Validators.required])],
      reported_gross_estimate: [null, Validators.required],
    });
  }

  formControlValueChanged() {

    this.professional_form_step5.get('personal_injury')
      .valueChanges.subscribe(
        (val: any) => {
          const how_injury_occur = this.professional_form_step5.get('how_injury_occur');
          const nature_injury = this.professional_form_step5.get('nature_injury');
          const date_loss = this.professional_form_step5.get('date_loss');

          how_injury_occur.patchValue(null);
          how_injury_occur.clearValidators();
          how_injury_occur.updateValueAndValidity();

          nature_injury.patchValue(null);
          nature_injury.clearValidators();
          nature_injury.updateValueAndValidity();

          date_loss.patchValue(null);
          date_loss.clearValidators();
          date_loss.updateValueAndValidity();
          if (val == "true") {
            how_injury_occur.setValidators([Validators.compose([Validators.maxLength(140), Validators.required])]);
            nature_injury.setValidators([Validators.compose([Validators.maxLength(140), Validators.required])]);
            date_loss.setValidators([Validators.required]);
          }
        });

    this.professional_form_step5.get('type_damage')
      .valueChanges.subscribe(
        (val: any) => {
          const type_damage_other = this.professional_form_step5.get('type_damage_other');
          if (val == "Other") {
            type_damage_other.setValidators([Validators.required]);
          } else {
            type_damage_other.patchValue(null);
            type_damage_other.clearValidators();
            type_damage_other.updateValueAndValidity();
          }
        });
    this.professional_form_step5.get('reported_loss')
      .valueChanges.subscribe(
        (val: any) => {
          const reported_loss_other = this.professional_form_step5.get('reported_loss_other');
          if (val == "Other") {
            reported_loss_other.setValidators([Validators.required]);
          } else {
            reported_loss_other.patchValue(null);
            reported_loss_other.clearValidators();
            reported_loss_other.updateValueAndValidity();
          }
        });
  }

  professionalStep5Next() {
    for (let v in this.professional_form_step5.controls) {
      this.professional_form_step5.controls[v].markAsTouched();
    }
    if (this.professional_form_step5.valid) {
      const step5 = {
        "step": 'step5',
        "ClaimNumber": localStorage.getItem('ProfessionalClaimNumber'),
        "personal_injury": this.professional_form_step5.value.personal_injury,
        "how_injury_occur": this.professional_form_step5.value.how_injury_occur,
        "nature_injury": this.professional_form_step5.value.nature_injury,
        "date_loss": this.professional_form_step5.value.date_loss,
        "time_loss": this.professional_form_step5.value.time_loss,
        "reported_loss": this.professional_form_step5.value.reported_loss,
        "reported_loss_other": this.professional_form_step5.value.reported_loss_other,
        "type_damage": this.professional_form_step5.value.type_damage,
        "type_damage_other": this.professional_form_step5.value.type_damage_other,
        "how_damage_occur": this.professional_form_step5.value.how_damage_occur,
        "reported_gross_estimate": this.professional_form_step5.value.reported_gross_estimate,
      };
      this._cS.put_API(this._cS.URL_Professional_Claim_Post(), step5)
        .subscribe((data: any) => {
          // this.spinner.hide();
          if (data.status == 0) {
            this.setClaimData();
            this.router.navigate(['/professional-step6']);
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

            this.professional_form_step5.setValue({
              personal_injury: this.editClaimData.personal_injury,
              how_injury_occur: this.editClaimData.how_injury_occur,
              nature_injury: this.editClaimData.nature_injury,
              date_loss: this.editClaimData.date_loss,
              time_loss: this.editClaimData.time_loss,
              reported_loss: this.editClaimData.reported_loss,
              reported_loss_other: this.editClaimData.reported_loss_other,
              type_damage: this.editClaimData.type_damage,
              type_damage_other: this.editClaimData.type_damage_other,
              how_damage_occur: this.editClaimData.how_damage_occur,
              reported_gross_estimate: this.editClaimData.reported_gross_estimate,
            })
          }
        });
    }
  }

}