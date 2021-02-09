import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-earthquake',
  templateUrl: './earthquake.page.html',
  styleUrls: ['./earthquake.page.scss'],
})
export class EarthquakePage implements OnInit {

  earthquake_form: FormGroup;

  constructor(private navCtrl: NavController,
    private router:Router,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) { 

      this.earthquake_fb();
    }

    ionViewWillEnter() {
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
    }

    earthquake_fb() {
      this.earthquake_form = this.formBuilder.group({
        earthquake_ground_damage: [null, Validators.required],
        earthquake_damage: [null, Validators.required],
        earthquake_damage_other: [null, Validators.required],
      });
    }

    earthquakeNext(){
      for (let v in this.earthquake_form.controls) {
        this.earthquake_form.controls[v].markAsTouched();
      }
      if (this.earthquake_form.valid) {
        const body = {
          "earthquake_ground_damage" : this.earthquake_form.value.earthquake_ground_damage,
          "earthquake_damage" : this.earthquake_form.value.earthquake_damage,
          "earthquake_damage_other" : this.earthquake_form.value.earthquake_damage_other,
        };
      }
    }

    ngOnInit() {
    }
    
    back(){
      this.navCtrl.pop();
    }

}