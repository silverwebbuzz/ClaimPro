import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { CommonMockService } from '../common-mock.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  login_form: FormGroup;
  passwordShown: boolean = false;
  passwordType : string = 'password';

  constructor(private navCtrl: NavController,
    private statusBar: StatusBar,
    private _cS: CommonMockService,
    private router:Router,
    private menu: MenuController,
    private formBuilder: FormBuilder) {
     this.login_fb();
     }

  ionViewWillEnter(){
    this.menu.enable(false);

    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  ngOnInit() {
    var Tokenvalue = localStorage.getItem('keyToken');
    if (Tokenvalue && Tokenvalue != 'new') {
      this._cS._router.navigate(['home']);
    }
  }
  login_fb(){
    this.login_form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  doLogin(){
    for (let v in this.login_form.controls) {
      this.login_form.controls[v].markAsTouched();
    }
    if (this.login_form.valid) {
      this._cS.presentLoading();
      let body = {
        "email": this.login_form.value.email,
        "password": this.login_form.value.password
      };
       console.log("body",body);
      this._cS.post_API_withOutToken(this._cS.URL_Login_Post(), body)
      .subscribe((data: any) => {
          this._cS.dismissLoading();
      
        if (data.status == 0) {
         localStorage.setItem('keyToken', data.data);
         this._cS.presentToastWithOptions(data.message);
         this._cS._router.navigate(['home']);
         //this._cS.presentToastWithOptions(data.message);
        } else {
          
           this._cS.presentToastWithOptions(data.message);
        }
      }, err => {
          this._cS.dismissLoading();
      });
    }
  }

  togglePassword(){
    if(this.passwordShown){
      this.passwordShown = false;
      this.passwordType = 'password';
    }else{
      this.passwordShown = true;
      this.passwordType = 'text';
    }
  }

  back(){
    this.navCtrl.pop();
  }

}
