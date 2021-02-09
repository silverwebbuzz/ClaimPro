import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonMockService } from 'src/app/common-mock.service';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-new-claim',
  templateUrl: './new-claim.page.html',
  styleUrls: ['./new-claim.page.scss'],
})
export class NewClaimPage implements OnInit {

  constructor(private navCtrl: NavController,
     private _cS: CommonMockService,
      private router: Router,
      private statusBar: StatusBar) { }

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

  formOther(){
    this.router.navigate(['/other']);
  }
  formGeneral(){
    this.router.navigate(['/general-liability']);
  }
  formProfestional(){
    this.router.navigate(['/professional-indemnity']);
  }
  formMedical(){
    this.router.navigate(['/medical-malpractice']);
  }
  formVehicle(){
    this.router.navigate(['/vehicle']);
  }
  formProperty(){
    this.router.navigate(['/property']);
  }
 

}
