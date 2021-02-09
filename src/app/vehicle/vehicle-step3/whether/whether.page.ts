import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';

@Component({
  selector: 'app-whether',
  templateUrl: './whether.page.html',
  styleUrls: ['./whether.page.scss'],
})
export class WhetherPage implements OnInit {

  weather_form: FormGroup;

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {

    this.weather_fb();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  weather_fb() {
    this.weather_form = this.formBuilder.group({
      weather_type: [null],
      weather_type_other: [null],
      cat_event: [null],
      vehicle_suffered_damage: [null],
      vehicle_damaged: [null],

      where_vehicle_street: [null],
      where_vehicle_suburb: [null],
      where_vehicle_post_code: [null],
      quote_repair: [null],
      costs_reimbursed: [null],

      bank_account_name: [null],
      name_bank: [null],
      name_bank_other: [null],
      bank_branch: [null],
      bank_bsb: [null],
      bank_account_number: [null],
    });
  }

  weatherNext() {
    for (let v in this.weather_form.controls) {
      this.weather_form.controls[v].markAsTouched();
    }
    if (this.weather_form.valid) {
      const step4 = {
        "weather_type" : this.weather_form.value.weather_type,
        "weather_type_other" : this.weather_form.value.weather_type_other,
        "cat_event" : this.weather_form.value.cat_event,
        "vehicle_suffered_damage" : this.weather_form.value.vehicle_suffered_damage,
        "vehicle_damaged" : this.weather_form.value.vehicle_damaged,
        "quote_repair" : this.weather_form.value.quote_repair,
        "costs_reimbursed" : this.weather_form.value.costs_reimbursed,
        "bank_account_name" : this.weather_form.value.bank_account_name,
        "name_bank" : this.weather_form.value.name_bank,
        "name_bank_other" : this.weather_form.value.name_bank_other,
        "bank_branch" : this.weather_form.value.bank_branch,
        "bank_bsb" : this.weather_form.value.bank_bsb,
        "bank_account_number" : this.weather_form.value.bank_account_number,
        "where_vehicle_street" : this.weather_form.value.where_vehicle_street,
        "where_vehicle_suburb" : this.weather_form.value.where_vehicle_suburb,
        "where_vehicle_post_code" : this.weather_form.value.where_vehicle_post_code,
      };
    }
  }

  ngOnInit() {
  }

  next() {
    this.router.navigate(['/vehicle-step5']);
  }

  back() {
    this.navCtrl.pop();
  }

}