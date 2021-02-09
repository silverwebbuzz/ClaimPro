import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';


@Component({
  selector: 'app-vehicle-step2',
  templateUrl: './vehicle-step2.page.html',
  styleUrls: ['./vehicle-step2.page.scss'],
})
export class VehicleStep2Page implements OnInit {

  vehicle_form_step2: FormGroup;
  Claim_number: any;
  editClaimData: any;

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {
    this.vehicle_step2_fb();
    this.setClaimData();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }


  vehicle_step2_fb() {
    this.vehicle_form_step2 = this.formBuilder.group({
      make: [null, Validators.required],
      model: [null, Validators.required],
      year: [null, Validators.required],
      type_of_body: [null, Validators.required],
      reg_number: [null, Validators.required]
    });
  }

  vehicleStep2Next() {
    for (let v in this.vehicle_form_step2.controls) {
      this.vehicle_form_step2.controls[v].markAsTouched();
    }
    if (this.vehicle_form_step2.valid) {
      const step2 = {
        "step": 'step2',
        "ClaimNumber": localStorage.getItem('ClaimNumber'),
        "make": this.vehicle_form_step2.value.make,
        "model": this.vehicle_form_step2.value.model,
        "year": this.vehicle_form_step2.value.year,
        "type_of_body": this.vehicle_form_step2.value.type_of_body,
        "reg_number": this.vehicle_form_step2.value.reg_number,
      };
      this._cS.put_API(this._cS.URL_Vehicle_Claim_Post(), step2)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.setClaimData();
            this.router.navigate(['/vehicle-step3']);

          } else {
          }
        }, err => {
        });
    }
  }

  setClaimData() {
    var claimNumber = localStorage.getItem('ClaimNumber');
    if (claimNumber) {
      this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
        .subscribe((data: any) => {
          if (data.status == 0) {
            console.log("editdate", data);
            this.editClaimData = data.data;

            this.vehicle_form_step2.setValue({
              make: this.editClaimData.make_of_vehicle,
              year: this.editClaimData.vehicle_year,
              model: this.editClaimData.body_model,
              type_of_body: this.editClaimData.type_of_body,
              reg_number: this.editClaimData.reg_number,
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
