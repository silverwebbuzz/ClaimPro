import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.page.html',
  styleUrls: ['./impact.page.scss'],
})
export class ImpactPage implements OnInit {

  impact_form: FormGroup;

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {

    this.impact_fb();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  impact_fb() {
    this.impact_form = this.formBuilder.group({
      impact_type: [null],
      impact_type_other: [null],
      impact_know_owner: [null],
      tp_christian_tree_owner: [null],
      tp_name_tree_owner: [null],
      tp_postal_street: [null],
      tp_postal_suburb: [null],
      tp_postal_postcode: [null],
      tp_postal_state: [null],
      tp_postal_email: [null],
      tp_tele_main: [null],
      vehicle_suffered_damage: [null],
      vehicle_damaged: [null],
      quote_repair: [null],
      costs_reimbursed: [null],
      bank_account_name: [null],
      name_bank: [null],
      name_bank_other: [null],
      bank_branch: [null],
      bank_bsb: [null],
      bank_account_number: [null],
      where_vehicle_street: [null],
      where_vehicle_suburb: [null],
      where_vehicle_post_code: [null],
    });
  }

  impactNext() {
    for (let v in this.impact_form.controls) {
      this.impact_form.controls[v].markAsTouched();
    }
    if (this.impact_form.valid) {
      const step4 = {
        "impact_type" : this.impact_form.value.impact_type,
        "impact_type_other" : this.impact_form.value.impact_type_other,
        "impact_know_owner" : this.impact_form.value.impact_know_owner,
        "tp_christian_tree_owner" : this.impact_form.value.tp_christian_tree_owner,
        "tp_name_tree_owner" : this.impact_form.value.tp_name_tree_owner,
        "tp_postal_street" : this.impact_form.value.tp_postal_street,
        "tp_postal_suburb" : this.impact_form.value.tp_postal_suburb,
        "tp_postal_postcode" : this.impact_form.value.tp_postal_postcode,
        "tp_postal_state" : this.impact_form.value.tp_postal_state,
        "tp_postal_email" : this.impact_form.value.tp_postal_email,
        "tp_tele_main" : this.impact_form.value.tp_tele_main,
        "vehicle_suffered_damage" : this.impact_form.value.vehicle_suffered_damage,
        "vehicle_damaged" : this.impact_form.value.vehicle_damaged,
        "quote_repair" : this.impact_form.value.quote_repair,
        "costs_reimbursed" : this.impact_form.value.costs_reimbursed,
        "bank_account_name" : this.impact_form.value.bank_account_name,
        "name_bank" : this.impact_form.value.name_bank,
        "name_bank_other" : this.impact_form.value.name_bank_other,
        "bank_branch" : this.impact_form.value.bank_branch,
        "bank_bsb" : this.impact_form.value.bank_bsb,
        "bank_account_number" : this.impact_form.value.bank_account_number,
        "where_vehicle_street" : this.impact_form.value.where_vehicle_street,
        "where_vehicle_suburb" : this.impact_form.value.where_vehicle_suburb,
        "where_vehicle_post_code" : this.impact_form.value.where_vehicle_post_code,
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