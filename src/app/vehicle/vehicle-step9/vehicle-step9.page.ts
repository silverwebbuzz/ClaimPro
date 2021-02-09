import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonMockService } from 'src/app/common-mock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-vehicle-step9',
  templateUrl: './vehicle-step9.page.html',
  styleUrls: ['./vehicle-step9.page.scss'],
})
export class VehicleStep9Page implements OnInit {

  Claim_number: any;

  constructor(private navCtrl: NavController,public _cS: CommonMockService,private route: ActivatedRoute,private router: Router,private statusBar: StatusBar
    ) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.step) {
        this.Claim_number = params.step;
        
      }
     
    })
    
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

 submitFeedBack(claim_id, Feedback) {
    var body = {
      claimid: +claim_id,
      claimfeedback: Feedback
    };
    this._cS.Display_Loader(true);
    this._cS.post_API(this._cS.URL_Claim_Feedback(), body)
      .subscribe((data: any) => {
        if (data.status == 0) {
          // this.router.navigate(['/home']);
         // this._cS.Display_Toaster('success', 'Thank you for your valuable feedback !!');
        } else {
          // this._cS.Display_Toaster('error', data.message);
        }
        this._cS.Display_Loader(false);
      }, err => {
        this._cS.Display_Loader(false);
      });
  };
  ngOnInit() {
  }

}
