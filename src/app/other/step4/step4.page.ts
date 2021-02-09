import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ReviewOtherPage } from '../review-other/review-other.page';
import { CommonMockService } from 'src/app/common-mock.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-step4',
  templateUrl: './step4.page.html',
  styleUrls: ['./step4.page.scss'],
})
export class Step4Page implements OnInit {

  Claim_number: any;

  constructor(private modalCtrl: ModalController,
    public _cS: CommonMockService,
    private router: Router,
    private statusBar: StatusBar,
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
      step: 'step4',
      ClaimNumber: localStorage.getItem('OtherClaimNumber'),
    };
    this._cS.put_API(this._cS.URL_Other_Claim_Post(), body)
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.Claim_number = localStorage.getItem('OtherClaimNumber'),
          localStorage.removeItem('OtherClaimNumber');
          this.router.navigate(['/step5'],{queryParams: {step: this.Claim_number}});
          } else {
        }
      }, err => {
      });
  };

  // reviewClaim(url, claimtype) {
  //   let customurl = url + '?type=' + claimtype;
  //   this.router.navigate([]).then(result => { window.open(customurl, '_blank'); });
  // }

  async reviewClaim(){
    const modal = await this.modalCtrl.create({
      component: ReviewOtherPage
    });
    return await modal.present();
  }
}
