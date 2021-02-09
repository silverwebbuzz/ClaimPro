import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonMockService } from '../common-mock.service';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.page.html',
  styleUrls: ['./changepass.page.scss'],
})
export class ChangepassPage implements OnInit {

  change_pass_form: FormGroup;

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {
    this.change_pass_fb();
  }

  change_pass_fb() {
    this.change_pass_form = this.formBuilder.group({
      old_password: [null, Validators.required],
      password: [null, Validators.required],
      confirmpassword: [null, Validators.required],
    },
      {
        validator: CommonMockService.MatchPassword // your custom validation method  
      });
  }
  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  ngOnInit() {
  }

  submit() {
    for (let v in this.change_pass_form.controls) {
      this.change_pass_form.controls[v].markAsTouched();
    }
    if (this.change_pass_form.valid) {
      this._cS.presentLoading();
      const body = {
        "old_password": this.change_pass_form.value.old_password,
        "password": this.change_pass_form.value.password,
      };
      this._cS.post_API(this._cS.URL_change_password_post(), body)
        .subscribe((data: any) => {
          if (this._cS.isLoading) {
            this._cS.dismissLoading();
          }
          if (data.status == 0) {
            this._cS.presentToastWithOptions(data.message);
            this._cS._router.navigate(['signin']);

          } else {
            this._cS.presentToastWithOptions(data.message);
          }
        }, err => {
          if (this._cS.isLoading) {
            this._cS.dismissLoading();
          }
        });
    }
  }

  back() {
    this.navCtrl.pop();
  }

}