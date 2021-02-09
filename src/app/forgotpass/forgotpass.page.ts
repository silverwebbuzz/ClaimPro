import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { CommonMockService } from '../common-mock.service';


@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {

  forgot_form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private _cS: CommonMockService,
    private navCtrl: NavController,
    private statusBar: StatusBar,
    private router:Router,
    private menu: MenuController) { 

      this.forgotpass_fb();      
    }

    ionViewWillEnter(){
      this.menu.enable(false);
      
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
    }
  
  ngOnInit() {
  }

  forgotpass_fb(){
    this.forgot_form = this.formBuilder.group({
      email: [null, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])]
    });
  }

  forgotPassword(){
    for (let v in this.forgot_form.controls) {
      this.forgot_form.controls[v].markAsTouched();
    }
    if (this.forgot_form.valid) {
      this._cS.presentLoading();
      var body = {
        "email": this.forgot_form.value.email
      };
      this._cS.post_API_withOutToken(this._cS.URL_forgot_email_post(), body)
      .subscribe((data: any) => {
        if(this._cS.isLoading){
          this._cS.dismissLoading();
        }
        if (data.status == 0) {
         this._cS._router.navigate(['signin']);
        this._cS.presentToastWithOptions(data.message);
        } else {
          this._cS.presentToastWithOptions(data.message);
        } 
      }, err => {
        if(this._cS.isLoading){
          this._cS.dismissLoading();
        }
      });
    }
  }

  back(){
    this.navCtrl.pop();
  }

}
