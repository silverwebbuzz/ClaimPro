import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ReviewMedicalPage } from '../review-medical/review-medical.page';
import { CommonMockService } from 'src/app/common-mock.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-medical-step8',
  templateUrl: './medical-step8.page.html',
  styleUrls: ['./medical-step8.page.scss'],
})
export class MedicalStep8Page implements OnInit {

  Claim_number: any;

  constructor(private modalCtrl: ModalController,public _cS: CommonMockService,private router: Router, private statusBar: StatusBar,
    private navCtrl: NavController) { }

    ionViewWillEnter() {
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
    }
    
  ngOnInit() {
  }

  back(){
    this.navCtrl.pop();
  }

  submitClaim() {
    var body = {
      step: 'step8',
      ClaimNumber: localStorage.getItem('MedicalClaimNumber'),
    };
    this._cS.put_API(this._cS.URL_Medical_Claim_Post(), body)
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.Claim_number = localStorage.getItem('MedicalClaimNumber'),
          localStorage.removeItem('MedicalClaimNumber');
          this.router.navigate(['/medical-step9'],{queryParams: {step: this.Claim_number}});

          } else {
        }
      }, err => {
      });
  };

  async reviewClaim(){
      const modal = await this.modalCtrl.create({
        component: ReviewMedicalPage
      });
      return await modal.present();
    }
}