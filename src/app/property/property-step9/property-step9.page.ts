import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CommonMockService } from 'src/app/common-mock.service';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ReviewPropertyPage } from '../review-property/review-property.page';

@Component({
  selector: 'app-property-step9',
  templateUrl: './property-step9.page.html',
  styleUrls: ['./property-step9.page.scss'],
})
export class PropertyStep9Page implements OnInit {

  Claim_number: any;

  constructor(private modalCtrl: ModalController,public _cS: CommonMockService,private router: Router, private statusBar: StatusBar,
    private navCtrl: NavController) { }

    ionViewWillEnter() {
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
    }

    submitClaim() {
      var body = {
        step: 'step9',
        ClaimNumber: localStorage.getItem('PropertyClaimNumber'),
      };
      this._cS.put_API(this._cS.URL_Property_Claim_Post(), body)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.Claim_number = localStorage.getItem('PropertyClaimNumber'),
            localStorage.removeItem('PropertyClaimNumber');
            this.router.navigate(['/property-step10'],{queryParams: {step: this.Claim_number}});
            } else {
          }
        }, err => {
        });
    };
  
    
  ngOnInit() {
  }

  back(){
    this.navCtrl.pop();
  }

  async reviewClaim(){
    const modal = await this.modalCtrl.create({
      component: ReviewPropertyPage
    });
    return await modal.present();
  }

}
