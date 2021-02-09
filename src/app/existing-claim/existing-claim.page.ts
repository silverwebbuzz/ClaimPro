import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonMockService } from '../common-mock.service';
import { Router } from '@angular/router';

import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-existing-claim',
  templateUrl: './existing-claim.page.html',
  styleUrls: ['./existing-claim.page.scss'],
})
export class ExistingClaimPage implements OnInit {

  userDetails: any;
  allexistingClaim: any = [];

  constructor(private navCtrl: NavController,
    private _cS: CommonMockService, private router: Router,private statusBar: StatusBar) { }


  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }
  
  ngOnInit() {

    this._cS.get_API_withToken(this._cS.URL_existing_claim_get())
      .subscribe((data: any) => {
        // this.spinner.hide();
        if (data.status == 0) {
          this.allexistingClaim = data.data;
        }
        // this.spinner.hide();
      }, err => {
        // this.spinner.hide();
      });
  }

  back() {
    this.navCtrl.pop();
  }

  gotoExistingClaim(claimId, policy_type, step_status) {
    if (policy_type == 'motor-vehicle') { localStorage.setItem('ClaimNumber', claimId); }
    if (policy_type == 'medical') { localStorage.setItem('MedicalClaimNumber', claimId); }
    if (policy_type == 'other') { localStorage.setItem('OtherClaimNumber', claimId); }
    if (policy_type == 'general') { localStorage.setItem('GeneralClaimNumber', claimId); }
    if (policy_type == 'professional') { localStorage.setItem('ProfessionalClaimNumber', claimId); }
    if (policy_type == 'property') { localStorage.setItem('PropertyClaimNumber', claimId); }
    console.log("step_status", step_status)

    // if (step_status == 2) {
    //   this.router.navigate(['/step2']);
    // }
    if (policy_type == "other") {
      switch (step_status) {
        case "0":
          this.router.navigate(['/other']);
          break;
        case "1":
          this.router.navigate(['/step1']);
          break;
        case "2":
          this.router.navigate(['/step2']);
          break;
        case "3":
          this.router.navigate(['/step3']);
          break;
      }

    }

    if (policy_type == "general") {
      switch (step_status) {
        case "0":
          this.router.navigate(['/general-liability']);
          break;
        case "1":
          this.router.navigate(['/general-step1']);
          break;
        case "2":
          this.router.navigate(['/general-step2']);
          break;
        case "3":
          this.router.navigate(['/general-step3']);
          break;
        case "4":
          this.router.navigate(['/general-step4']);
          break;
        case "5":
          this.router.navigate(['/general-step5']);
          break;
      }

    }

    if (policy_type == "professional") {
      switch (step_status) {
        case "0":
          this.router.navigate(['/professional-indemnity']);
          break;
        case "1":
          this.router.navigate(['/professional-step1']);
          break;
        case "2":
          this.router.navigate(['/professional-step2']);
          break;
        case "3":
          this.router.navigate(['/professional-step3']);
          break;
        case "4":
          this.router.navigate(['/professional-step4']);
          break;
        case "5":
          this.router.navigate(['/professional-step5']);
          break;
        case "6":
          this.router.navigate(['/professional-step6']);
          break;
        case "7":
          this.router.navigate(['/professional-step7']);
          break;
      }

    }

    if (policy_type == "medical") {
      switch (step_status) {
        case "0":
          this.router.navigate(['/medical-malpractice']);
          break;
        case "1":
          this.router.navigate(['/medical-step1']);
          break;
        case "2":
          this.router.navigate(['/medical-step2']);
          break;
        case "3":
          this.router.navigate(['/medical-step3']);
          break;
        case "4":
          this.router.navigate(['/medical-step4']);
          break;
        case "5":
          this.router.navigate(['/medical-step5']);
          break;
        case "6":
          this.router.navigate(['/medical-step6']);
          break;
        case "7":
          this.router.navigate(['/medical-step7']);
          break;
      }

    }

    if (policy_type == "motor-vehicle") {
      console.log("stepppppp",policy_type)
      switch (step_status) {
        case "0":
          this.router.navigate(['/vehicle']);
          break;
        case "1":
          this.router.navigate(['/vehicle-step1']);
          break;
        case "2":
          this.router.navigate(['/vehicle-step2']);
          break;
        case "3":
          this.router.navigate(['/vehicle-step3']);
          break;
        case "4":
          this.router.navigate(['/vehicle-step3']);
          break;
        case "5":
          this.router.navigate(['/vehicle-step5']);
          break;
        case "6":
            this.router.navigate(['/vehicle-step6']);
          break;
        case "7":
          this.router.navigate(['/vehicle-step7']);
          break;
      }

    }

    if (policy_type == "property") {
      switch (step_status) {
        case "0":
          this.router.navigate(['/property']);
          break;
        case "1":
          this.router.navigate(['/property-step1']);
          break;
        case "2":
          this.router.navigate(['/property-step2']);
          break;
        case "3":
          this.router.navigate(['/property-step3']);
          break;
        case "4":
          this.router.navigate(['/property-step3']);
          break;
        case "5":
          this.router.navigate(['/property-step5']);
          break;
        case "6":
          this.router.navigate(['/property-step6']);
          break;
        case "7":
          this.router.navigate(['/property-step7']);
          break;
        case "8":
          this.router.navigate(['/property-step8']);
          break;
      }

    }
  }

}
