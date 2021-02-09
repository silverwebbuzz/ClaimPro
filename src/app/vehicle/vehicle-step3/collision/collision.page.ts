import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';

@Component({
  selector: 'app-collision',
  templateUrl: './collision.page.html',
  styleUrls: ['./collision.page.scss'],
})
export class CollisionPage implements OnInit {

  collision_form: FormGroup;

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {

    this.collision_fb();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  collision_fb() {
    this.collision_form = this.formBuilder.group({
      video_proof: [null],
      what_collision_involve: [null],
      /* Another vehicle */
      tp_christian_other_driver: [null],
      tp_name_other_driver: [null],

      other_driver_street: [null],
      other_driver_town: [null],
      other_driver_postal_code: [null],
      other_driver_state: [null],
      other_driver_email: [null],

      other_vehicle_make: [null],
      other_vehicle_reg: [null],
      other_vehicle_year: [null],
      other_vehicle_model: [null],
      other_vehicle_body: [null],
      other_vehicle_body_other: [null],
      other_vehicle_damage: [null],
      collision_what_happened: [null],
      collision_what_happened_other: [null],
      who_was_fault: [null],
      /* An object/structure */
      structure_type: [null],
      structure_type_other: [null],
      structure_damage: [null],
      structure_know_owner: [null],
      tp_christian_object_owner: [null],
      tp_name_object_owner: [null],

      object_street: [null],
      object_town: [null],
      object_postal_code: [null],
      object_state: [null],
      object_email: [null],
      /* An animal */
      animal_type: [null],
      animal_type_other: [null],
      know_animal_owner: [null],
      tp_christian_animal_owner: [null],
      tp_name_animal_owner: [null],
      owner_street: [null],
      owner_town: [null],
      owner_postal_code: [null],
      owner_state: [null],
      owner_email: [null],
      owner_telephone: [null],

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

  collisionNext() {
    for (let v in this.collision_form.controls) {
      this.collision_form.controls[v].markAsTouched();
    }
    if (this.collision_form.valid) {
      const step4 = {
        "video_proof" : this.collision_form.value.video_proof,
        "what_collision_involve" : this.collision_form.value.what_collision_involve,
        /* Another vehicle */
        "tp_christian_other_driver" : this.collision_form.value.tp_christian_other_driver,
        "tp_name_other_driver" : this.collision_form.value.tp_name_other_driver,

        "other_driver_street" : this.collision_form.value.other_driver_street,
        "other_driver_town" : this.collision_form.value.other_driver_town,
        "other_driver_postal_code" : this.collision_form.value.other_driver_postal_code,
        "other_driver_state" : this.collision_form.value.other_driver_state,
        "other_driver_email" : this.collision_form.value.other_driver_email,

        "other_vehicle_make" : this.collision_form.value.other_vehicle_make,
        "other_vehicle_reg" : this.collision_form.value.other_vehicle_reg,
        "other_vehicle_year" : this.collision_form.value.other_vehicle_year,
        "other_vehicle_model" : this.collision_form.value.other_vehicle_model,
        "other_vehicle_body" : this.collision_form.value.other_vehicle_body,
        "other_vehicle_body_other" : this.collision_form.value.other_vehicle_body_other,
        "other_vehicle_damage" : this.collision_form.value.other_vehicle_damage,
        "collision_what_happened" : this.collision_form.value.collision_what_happened,
        "collision_what_happened_other" : this.collision_form.value.collision_what_happened_other,
        "who_was_fault" : this.collision_form.value.who_was_fault,
        /* An object/structure */
        "structure_type" : this.collision_form.value.structure_type,
        "structure_type_other" : this.collision_form.value.structure_type_other,
        "structure_damage" : this.collision_form.value.structure_damage,
        "structure_know_owner" : this.collision_form.value.structure_know_owner,
        "tp_christian_object_owner" : this.collision_form.value.tp_christian_object_owner,
        "tp_name_object_owner" : this.collision_form.value.tp_name_object_owner,

        "object_street" : this.collision_form.value.object_street,
        "object_town" : this.collision_form.value.object_town,
        "object_postal_code" : this.collision_form.value.object_postal_code,
        "object_state" : this.collision_form.value.object_state,
        "object_email" : this.collision_form.value.object_email,
        /* An animal */
        "animal_type" : this.collision_form.value.animal_type,
        "animal_type_other" : this.collision_form.value.animal_type_other,
        "know_animal_owner" : this.collision_form.value.know_animal_owner,
        "tp_christian_animal_owner" : this.collision_form.value.tp_christian_animal_owner,
        "tp_name_animal_owner" : this.collision_form.value.tp_name_animal_owner,
        "owner_street" : this.collision_form.value.owner_street,
        "owner_town" : this.collision_form.value.owner_town,
        "owner_postal_code" : this.collision_form.value.owner_postal_code,
        "owner_state" : this.collision_form.value.owner_state,
        "owner_email" : this.collision_form.value.owner_email,
        "owner_telephone" : this.collision_form.value.owner_telephone,

        "vehicle_suffered_damage" : this.collision_form.value.vehicle_suffered_damage,
        "vehicle_damaged" : this.collision_form.value.vehicle_damaged,
        "quote_repair" : this.collision_form.value.quote_repair,
        "costs_reimbursed" : this.collision_form.value.costs_reimbursed,
        "bank_account_name" : this.collision_form.value.bank_account_name,
        "name_bank" : this.collision_form.value.name_bank,
        "name_bank_other" : this.collision_form.value.name_bank_other,
        "bank_branch" : this.collision_form.value.bank_branch,
        "bank_bsb" : this.collision_form.value.bank_bsb,
        "bank_account_number" : this.collision_form.value.bank_account_number,
        "where_vehicle_street" : this.collision_form.value.where_vehicle_street,
        "where_vehicle_suburb" : this.collision_form.value.where_vehicle_suburb,
        "where_vehicle_post_code" : this.collision_form.value.where_vehicle_post_code,
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