import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ReviewGeneralPage } from '../review-general/review-general.page';
import { CommonMockService } from 'src/app/common-mock.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-general-step6',
  templateUrl: './general-step6.page.html',
  styleUrls: ['./general-step6.page.scss'],
})
export class GeneralStep6Page implements OnInit {

  Claim_number: any;

  constructor(private modalCtrl: ModalController,public _cS: CommonMockService,private router: Router,private statusBar: StatusBar,
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
      step: 'step6',
      ClaimNumber: localStorage.getItem('GeneralClaimNumber'),
    };
    this._cS.put_API(this._cS.URL_General_Claim_Post(), body)
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.Claim_number = localStorage.getItem('GeneralClaimNumber'),
          localStorage.removeItem('GeneralClaimNumber');
          this.router.navigate(['/general-step7'],{queryParams: {step: this.Claim_number}});
          } else {
        }
      }, err => {
      });
  };

  async reviewClaim(){
    const modal = await this.modalCtrl.create({
      component: ReviewGeneralPage
    });
    return await modal.present();
  }
}