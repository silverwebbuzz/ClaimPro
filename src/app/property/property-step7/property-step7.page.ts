import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';


@Component({
  selector: 'app-property-step7',
  templateUrl: './property-step7.page.html',
  styleUrls: ['./property-step7.page.scss'],
})
export class PropertyStep7Page implements OnInit {

  property_form_step7: FormGroup;
  Claim_number: any;
  editClaimData: any;

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {

    this.property_step7_fb();
    this.setClaimData();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  property_step7_fb() {
    this.property_form_step7 = this.formBuilder.group({
      reported_circumstances: [null, Validators.compose([Validators.maxLength(400), Validators.required])]
    });
  }

  propertyStep7Next() {
    for (let v in this.property_form_step7.controls) {
      this.property_form_step7.controls[v].markAsTouched();
    }
    if (this.property_form_step7.valid) {
      const step7 = {
        "step": 'step7',
        "ClaimNumber": localStorage.getItem('PropertyClaimNumber'),
        "reported_circumstances": this.property_form_step7.value.reported_circumstances
      };
      this._cS.put_API(this._cS.URL_Property_Claim_Post(), step7)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.setClaimData();
            this.router.navigate(['/property-step8']);
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

          this.property_form_step7.setValue({
            reported_circumstances: this.editClaimData.reported_circumstances,
          })
          }
      });
    }
  }

  ngOnInit() {
  }

  back() {
    this.navCtrl.pop();
  }

}