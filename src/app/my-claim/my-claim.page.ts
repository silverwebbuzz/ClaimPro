import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonMockService } from 'src/app/common-mock.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-my-claim',
  templateUrl: './my-claim.page.html',
  styleUrls: ['./my-claim.page.scss'],
})
export class MyClaimPage implements OnInit {

  MyClaim = [];

  constructor(private navCtrl: NavController,private _cS: CommonMockService,private statusBar: StatusBar) { }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  getAllClaims() {
    this._cS.get_API_withToken(this._cS.URL_My_claim_get())
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.MyClaim = data.data;
        }
      }, err => {
      });
  };


  ngOnInit() {
    this.getAllClaims();    
  }

  back(){
    this.navCtrl.pop();
  }


}
