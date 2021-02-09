import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-damage',
  templateUrl: './other-damage.page.html',
  styleUrls: ['./other-damage.page.scss'],
})
export class OtherDamagePage implements OnInit {

  other_damage_form: FormGroup;

  constructor(private navCtrl: NavController,
    private router:Router,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) { 

      this.other_damage_fb();
    }

    ionViewWillEnter() {
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
    }

    other_damage_fb() {
      this.other_damage_form = this.formBuilder.group({
        severity_damage: [null, Validators.required],
      });
    }

    otherDamageNext(){
      for (let v in this.other_damage_form.controls) {
        this.other_damage_form.controls[v].markAsTouched();
      }
      if (this.other_damage_form.valid) {
        const body = {
          "severity_damage" : this.other_damage_form.value.severity_damage,
        };
      }
    }

    ngOnInit() {
    }
    
    back(){
      this.navCtrl.pop();
    }

}