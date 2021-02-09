import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crime-malicious-damage',
  templateUrl: './crime-malicious-damage.page.html',
  styleUrls: ['./crime-malicious-damage.page.scss'],
})
export class CrimeMaliciousDamagePage implements OnInit {

  crime_malicious_form: FormGroup;

  constructor(private navCtrl: NavController,
    private router:Router,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) { 

      this.crime_malicious_fb();
    }

    ionViewWillEnter() {
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
    }

    crime_malicious_fb() {
      this.crime_malicious_form = this.formBuilder.group({
        property_have_alarm: [null, Validators.required],
        monitored_security_company: [null, Validators.required],
        alarm_armed_at_time_of_loss: [null, Validators.required],
        building_video_surveillance: [null, Validators.required],
        video_proof: [null, Validators.required],
        property_how_enter: [null, Validators.required],
        property_how_enter_other: [null, Validators.required],
        myfile: [null, Validators.required],
        property_where_enter: [null, Validators.required],
        property_where_enter_other: [null, Validators.required],
        property_why_able_to_enter: [null, Validators.required],
        property_why_able_to_enter_other: [null, Validators.required],
        property_offender_leave: [null, Validators.required],
        property_offender_leave_other: [null, Validators.required],
        good_stolen_outside: [null, Validators.required],
        goods_stolen_from: [null, Validators.required],
        goods_stolen_from_other: [null, Validators.required],
      });
    }

    crimeMaliciousNext(){
      for (let v in this.crime_malicious_form.controls) {
        this.crime_malicious_form.controls[v].markAsTouched();
      }
      if (this.crime_malicious_form.valid) {
        const body = {
          "property_have_alarm" : this.crime_malicious_form.value.property_have_alarm,
          "monitored_security_company" : this.crime_malicious_form.value.monitored_security_company,
          "alarm_armed_at_time_of_loss" : this.crime_malicious_form.value.alarm_armed_at_time_of_loss,
          "building_video_surveillance" : this.crime_malicious_form.value.building_video_surveillance,
          "video_proof" : this.crime_malicious_form.value.video_proof,
          "property_how_enter" : this.crime_malicious_form.value.property_how_enter,
          "property_how_enter_other" : this.crime_malicious_form.value.property_how_enter_other,
          "myfile" : this.crime_malicious_form.value.myfile,
          "property_where_enter" : this.crime_malicious_form.value.property_where_enter,
          "property_where_enter_other" : this.crime_malicious_form.value.property_where_enter_other,
          "property_why_able_to_enter" : this.crime_malicious_form.value.property_why_able_to_enter,
          "property_why_able_to_enter_other" : this.crime_malicious_form.value.property_why_able_to_enter_other,
          "property_offender_leave" : this.crime_malicious_form.value.property_offender_leave,
          "property_offender_leave_other" : this.crime_malicious_form.value.property_offender_leave_other,
          "good_stolen_outside" : this.crime_malicious_form.value.good_stolen_outside,
          "goods_stolen_from" : this.crime_malicious_form.value.goods_stolen_from,
          "goods_stolen_from_other" : this.crime_malicious_form.value.goods_stolen_from_other,
        };
      }
    }

    ngOnInit() {
    }
    
    back(){
      this.navCtrl.pop();
    }

}