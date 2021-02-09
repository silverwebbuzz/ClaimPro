import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fire-explosion',
  templateUrl: './fire-explosion.page.html',
  styleUrls: ['./fire-explosion.page.scss'],
})
export class FireExplosionPage implements OnInit {

  fire_explosion_form: FormGroup;

  constructor(private navCtrl: NavController,
    private router:Router,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) { 

      this.fire_explosion_fb();
    }

    ionViewWillEnter() {
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
    }

    fire_explosion_fb() {
      this.fire_explosion_form = this.formBuilder.group({
        fire_explosion_start: [null, Validators.required],
        where_inside_building: [null, Validators.required],
        where_inside_building_other: [null, Validators.required],
        where_outside_building: [null, Validators.required],
        where_outside_building_other: [null, Validators.required],
        fire_explosion_start_other: [null, Validators.required],
        fire_brigade_attend: [null, Validators.required],
        smoke_detectors_function: [null, Validators.required],
        why_not: [null, Validators.compose([Validators.maxLength(140), Validators.required])],
      });
    }

    fireExplosionNext(){
      for (let v in this.fire_explosion_form.controls) {
        this.fire_explosion_form.controls[v].markAsTouched();
      }
      if (this.fire_explosion_form.valid) {
        const body = {
          "fire_explosion_start" : this.fire_explosion_form.value.fire_explosion_start,
          "where_inside_building" : this.fire_explosion_form.value.where_inside_building,
          "where_inside_building_other" : this.fire_explosion_form.value.where_inside_building_other,
          "where_outside_building" : this.fire_explosion_form.value.where_outside_building,
          "where_outside_building_other" : this.fire_explosion_form.value.where_outside_building_other,
          "fire_explosion_start_other" : this.fire_explosion_form.value.fire_explosion_start_other,
          "fire_brigade_attend" : this.fire_explosion_form.value.fire_brigade_attend,
          "smoke_detectors_function" : this.fire_explosion_form.value.smoke_detectors_function,
          "why_not" : this.fire_explosion_form.value.why_not,
        };
      }
    }

    ngOnInit() {
    }
    
    back(){
      this.navCtrl.pop();
    }

}