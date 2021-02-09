import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CommonMockService } from 'src/app/common-mock.service';
import { Router } from '@angular/router';
import { ReviewVehiclePage } from '../review-vehicle/review-vehicle.page';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-vehicle-step8',
  templateUrl: './vehicle-step8.page.html',
  styleUrls: ['./vehicle-step8.page.scss'],
})
export class VehicleStep8Page implements OnInit {

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
      ClaimNumber: localStorage.getItem('ClaimNumber'),
    };
    this._cS.put_API(this._cS.URL_Vehicle_Claim_Post(), body)
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.Claim_number = localStorage.getItem('ClaimNumber'),
          localStorage.removeItem('ClaimNumber');
          this.router.navigate(['/vehicle-step9'],{queryParams: {step: this.Claim_number}});
          } else {
        }
      }, err => {
      });
  };

  async reviewClaim(){
    const modal = await this.modalCtrl.create({
      component: ReviewVehiclePage
    });
    return await modal.present();
  }

}
