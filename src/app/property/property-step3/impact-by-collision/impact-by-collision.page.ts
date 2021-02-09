import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-impact-by-collision',
  templateUrl: './impact-by-collision.page.html',
  styleUrls: ['./impact-by-collision.page.scss'],
})
export class ImpactByCollisionPage implements OnInit {

  impact_by_coliision_form: FormGroup;

  constructor(private navCtrl: NavController,
    private router:Router,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) { 

      this.impact_by_coliision_fb();
    }

    ionViewWillEnter() {
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
    }

    impact_by_coliision_fb() {
      this.impact_by_coliision_form = this.formBuilder.group({
        what_impacted_property: [null, Validators.required],
        were_you_the_driver: [null, Validators.required],
        tp_christian_other_driver: [null, Validators.required],
        tp_name_other_driver: [null, Validators.required],
        type_animal: [null, Validators.required],
        type_animal_other: [null, Validators.required],
        animal_owner: [null, Validators.required],
        tp_christian_animal_owner: [null, Validators.required],
        tp_name_animal_owner: [null, Validators.required],
        bike_owner: [null, Validators.required],
        tp_christian_bike_owner: [null, Validators.required],
        tp_name_bike_owner: [null, Validators.required],
        tp_postal_street: [null, Validators.required],
        tp_postal_suburb: [null, Validators.required],
        tp_postal_postcode: [null, Validators.required],
        tp_postal_email: [null, Validators.compose([
          Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
          Validators.required
        ])],
        tp_tele_main: [null, Validators.required],
      });
    }

    ImpactByColiisionNext(){
      for (let v in this.impact_by_coliision_form.controls) {
        this.impact_by_coliision_form.controls[v].markAsTouched();
      }
      if (this.impact_by_coliision_form.valid) {
        const body = {
          "what_impacted_property" : this.impact_by_coliision_form.value.what_impacted_property,
          "were_you_the_driver" : this.impact_by_coliision_form.value.were_you_the_driver,
          "tp_christian_other_driver" : this.impact_by_coliision_form.value.tp_christian_other_driver,
          "tp_name_other_driver" : this.impact_by_coliision_form.value.tp_name_other_driver,
          "type_animal" : this.impact_by_coliision_form.value.type_animal,
          "type_animal_other" : this.impact_by_coliision_form.value.type_animal_other,
          "animal_owner" : this.impact_by_coliision_form.value.animal_owner,
          "tp_christian_animal_owner" : this.impact_by_coliision_form.value.tp_christian_animal_owner,
          "tp_name_animal_owner" : this.impact_by_coliision_form.value.tp_name_animal_owner,
          "bike_owner" : this.impact_by_coliision_form.value.bike_owner,
          "tp_christian_bike_owner" : this.impact_by_coliision_form.value.tp_christian_bike_owner,
          "tp_name_bike_owner" : this.impact_by_coliision_form.value.tp_name_bike_owner,
          "tp_postal_street" : this.impact_by_coliision_form.value.tp_postal_street,
          "tp_postal_suburb" : this.impact_by_coliision_form.value.tp_postal_suburb,
          "tp_postal_postcode" : this.impact_by_coliision_form.value.tp_postal_postcode,
          "tp_postal_email" : this.impact_by_coliision_form.value.tp_postal_email,
          "tp_tele_main" : this.impact_by_coliision_form.value.tp_tele_main,
        };
      }
    }

    ngOnInit() {
    }
    
    back(){
      this.navCtrl.pop();
    }

}