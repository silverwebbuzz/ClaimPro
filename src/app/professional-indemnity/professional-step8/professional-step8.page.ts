import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ReviewProfessionalPage } from '../review-professional/review-professional.page';
import { CommonMockService } from 'src/app/common-mock.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-professional-step8',
  templateUrl: './professional-step8.page.html',
  styleUrls: ['./professional-step8.page.scss'],
})
export class ProfessionalStep8Page implements OnInit {

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
      step: 'step8',
      ClaimNumber: localStorage.getItem('ProfessionalClaimNumber'),
    };
    this._cS.put_API(this._cS.URL_Professional_Claim_Post(), body)
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.Claim_number = localStorage.getItem('ProfessionalClaimNumber'),
          localStorage.removeItem('ProfessionalClaimNumber');
          this.router.navigate(['/professional-step9'],{queryParams: {step: this.Claim_number}});

          } else {
        }
      }, err => {
      });
  };


  async reviewClaim(){
      const modal = await this.modalCtrl.create({
        component: ReviewProfessionalPage
      });
      return await modal.present();
    }
}