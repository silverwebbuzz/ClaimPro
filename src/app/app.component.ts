import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonMockService } from 'src/app/common-mock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private _cS: CommonMockService,
    private alertCtrl: AlertController
  ) {
    this.initializeApp();
  }

  async logout(){
    const alert = await this.alertCtrl.create({
      header: 'Confirm !',
      message: 'Are you sure you want to logout ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'btn-clr',
        }, {
          text: 'Logout',
          cssClass: 'btn-clr',
          handler: () => {
            this._cS.logout();
          }
        }
      ]
    });

    await alert.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
      
      this.splashScreen.hide();
      var Tokenvalue = localStorage.getItem('keyToken');

      if (!Tokenvalue) {
        this.router.navigate(['/home']);
      }
    });
  }

  gotoNewClaim() {
    /* Motor_Vehicle Claim */
    localStorage.removeItem('ClaimNumber');
    // /* Medical Claim */
    localStorage.removeItem('MedicalClaimNumber');
    // /* Other Claim */
    localStorage.removeItem('OtherClaimNumber');
    // /* General Claim */
    localStorage.removeItem('GeneralClaimNumber');
    // /* Professional Claim */
    localStorage.removeItem('ProfessionalClaimNumber');
    // /* Property Claim */
    localStorage.removeItem('PropertyClaimNumber');

    this.router.navigate(["/new-claim"]);

  }

  existingClaim(){
    this.router.navigate(['/existing-claim']);
  }

  myClaim(){
    this.router.navigate(['/my-claim']);
  }

  myProfile(){
    this.router.navigate(['/my-profile']);
  }
  
  contactUs(){
    this.router.navigate(['/contactus']);
  }

}
