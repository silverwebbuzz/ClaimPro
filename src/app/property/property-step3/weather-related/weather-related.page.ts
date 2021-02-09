import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-related',
  templateUrl: './weather-related.page.html',
  styleUrls: ['./weather-related.page.scss'],
})
export class WeatherRelatedPage implements OnInit {

  weather_related_form: FormGroup;

  constructor(private navCtrl: NavController,
    private router:Router,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) { 

      this.weather_related_fb();
    }

    ionViewWillEnter() {
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
    }

    weather_related_fb() {
      this.weather_related_form = this.formBuilder.group({
        class_claim_sub: [null, Validators.required],
        class_claim_sub_other: [null, Validators.required],
      });
    }

    weatherRelatedNext(){
      for (let v in this.weather_related_form.controls) {
        this.weather_related_form.controls[v].markAsTouched();
      }
      if (this.weather_related_form.valid) {
        const body = {
          "class_claim_sub" : this.weather_related_form.value.class_claim_sub,
          "class_claim_sub_other" : this.weather_related_form.value.class_claim_sub_other,
        };
      }
    }

    ngOnInit() {
    }
    
    back(){
      this.navCtrl.pop();
    }

}