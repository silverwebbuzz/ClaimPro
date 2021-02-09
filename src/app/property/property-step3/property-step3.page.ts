import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-property-step3',
  templateUrl: './property-step3.page.html',
  styleUrls: ['./property-step3.page.scss'],
})
export class PropertyStep3Page implements OnInit {

  property_form_step3: FormGroup;
  title = "Damage Type";

  constructor(private navCtrl: NavController,
    private router:Router,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) { 

      this.property_step3_fb();
    }

    ionViewWillEnter() {
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
    }

    property_step3_fb() {
      this.property_form_step3 = this.formBuilder.group({
        // Accidental Damage
        property_nature_loss: [null, Validators.required],
        class_claim_accidental: [null, Validators.required],
        class_claim_accidental_other: [null, Validators.required],
        // Crime/Malicious damage
        crime_type: [null, Validators.required],
        suspect_malicious: [null, Validators.required],
        suspect_malicious_other: [null, Validators.required],
        suspect_detail: [null, Validators.required],
        suspect_name: [null, Validators.required],
        suspect_street: [null, Validators.required],
        suspect_suburb: [null, Validators.required],
        suspect_post_code: [null, Validators.required],
        address_left_date: [null, Validators.required],
        enter_illegally: [null, Validators.required],
        entrances_secured: [null, Validators.required],
        entrances_secured_other: [null, Validators.required],
        windows_secured: [null, Validators.required],
        windows_secured_other: [null, Validators.required],
        // Earthquake
        earthquake_center: [null, Validators.required],
        earthquake_measurement: [null, Validators.required],
        // Fire/Explosion
        anyone_present: [null, Validators.required],
        name_present_person: [null, Validators.compose([Validators.maxLength(140), Validators.required])],
        class_claim_fire: [null, Validators.required],
        class_claim_fire_other: [null, Validators.required],
        fire_accidental_fire_subpick: [null, Validators.required],
        fire_accidental_fire_subpick_other: [null, Validators.required],
        fire_bush_fire_subpick: [null, Validators.required],
        fire_bush_fire_subpick_other: [null, Validators.required],
        fire_elefault_building_subpick: [null, Validators.required],
        fire_elefault_building_subpick_other: [null, Validators.required],
        fire_elefault_appliance_subpick: [null, Validators.required],
        fire_induced_fire_subpick: [null, Validators.required],
        fire_induced_fire_subpick_other: [null, Validators.required],
        fire_explosion_subpick: [null, Validators.required],
        fire_explosion_subpick_other: [null, Validators.required],
        // Impact by collision
        what_was_impacted: [null, Validators.required],
        what_was_impacted_other: [null, Validators.required],
        // Impact by tree
        impact_tree_occur: [null, Validators.required],
        impact_tree_occur_other: [null, Validators.required],
        tree_planted_your_property: [null, Validators.required],
        where_tree_planted: [null, Validators.required],
        where_tree_planted_other: [null, Validators.required],
        tp_christian_tree_owner: [null, Validators.required],
        tp_name_tree_owner: [null, Validators.required],
        tp_postal_street: [null, Validators.required],
        tp_postal_suburb: [null, Validators.required],
        tp_postal_postcode: [null, Validators.required],
        tp_postal_email: [null, Validators.compose([
          Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
          Validators.required
        ])],
        tp_tele_main: [null, Validators.required],
        //Escape of liquid
        what_type_liquid: [null, Validators.required],
        what_type_liquid_other: [null, Validators.required],
        class_claim_escape: [null, Validators.required],
        class_claim_escape_other: [null, Validators.required],
        escape_location: [null, Validators.required],
        where_liquid_escape: [null, Validators.required],
        where_liquid_escape_other: [null, Validators.required],
        escape_owner_name: [null, Validators.required],
        escape_owner_street: [null, Validators.required],
        escape_owner_suburb: [null, Validators.required],
        escape_owner_postcode: [null, Validators.required],
        // Weather related
        class_claim_waether: [null, Validators.required],
        // Other
        property_nature_loss_other: [null, Validators.required],
        other_what_damaged: [null, Validators.required],
        other_what_damaged_other: [null, Validators.required],
        reported_loss: [null, Validators.required],
        reported_loss_other: [null, Validators.required]
      });
    }

    propertyStep3Next(){
      for (let v in this.property_form_step3.controls) {
        this.property_form_step3.controls[v].markAsTouched();
      }
      if (this.property_form_step3.valid) {
        const body = {
          // Accidental Damage
          "property_nature_loss" : this.property_form_step3.value.property_nature_loss,
          "class_claim_accidental" : this.property_form_step3.value.class_claim_accidental,
          "class_claim_accidental_other" : this.property_form_step3.value.class_claim_accidental_other,
          // Crime/Malicious damage
          "crime_type" : this.property_form_step3.value.crime_type,
          "suspect_malicious" : this.property_form_step3.value.suspect_malicious,
          "suspect_malicious_other" : this.property_form_step3.value.suspect_malicious_other,
          "suspect_detail" : this.property_form_step3.value.suspect_detail,
          "suspect_name" : this.property_form_step3.value.suspect_name,
          "suspect_street" : this.property_form_step3.value.suspect_street,
          "suspect_suburb" : this.property_form_step3.value.suspect_suburb,
          "suspect_post_code" : this.property_form_step3.value.suspect_post_code,
          "address_left_date" : this.property_form_step3.value.address_left_date,
          "enter_illegally" : this.property_form_step3.value.enter_illegally,
          "entrances_secured" : this.property_form_step3.value.entrances_secured,
          "entrances_secured_other" : this.property_form_step3.value.entrances_secured_other,
          "windows_secured" : this.property_form_step3.value.windows_secured,
          "windows_secured_other" : this.property_form_step3.value.windows_secured_other,
          // Earthquake
          "earthquake_center" : this.property_form_step3.value.earthquake_center,
          "earthquake_measurement" : this.property_form_step3.value.earthquake_measurement,
          // Fire/Explosion
          "anyone_present" : this.property_form_step3.value.anyone_present,
          "name_present_person" : this.property_form_step3.value.name_present_person,
          "class_claim_fire" : this.property_form_step3.value.class_claim_fire,
          "class_claim_fire_other" : this.property_form_step3.value.class_claim_fire_other,
          "fire_accidental_fire_subpick" : this.property_form_step3.value.fire_accidental_fire_subpick,
          "fire_accidental_fire_subpick_other" : this.property_form_step3.value.fire_accidental_fire_subpick_other,
          "fire_bush_fire_subpick" : this.property_form_step3.value.fire_bush_fire_subpick,
          "fire_bush_fire_subpick_other" : this.property_form_step3.value.fire_bush_fire_subpick_other,
          "fire_elefault_building_subpick" : this.property_form_step3.value.fire_elefault_building_subpick,
          "fire_elefault_building_subpick_other" : this.property_form_step3.value.fire_elefault_building_subpick_other,
          "fire_elefault_appliance_subpick" : this.property_form_step3.value.fire_elefault_appliance_subpick,
          "fire_induced_fire_subpick" : this.property_form_step3.value.fire_induced_fire_subpick,
          "fire_induced_fire_subpick_other" : this.property_form_step3.value.fire_induced_fire_subpick_other,
          "fire_explosion_subpick" : this.property_form_step3.value.fire_explosion_subpick,
          "fire_explosion_subpick_other" : this.property_form_step3.value.fire_explosion_subpick_other,
          // Impact by collision
          "what_was_impacted" : this.property_form_step3.value.what_was_impacted,
          "what_was_impacted_other" : this.property_form_step3.value.what_was_impacted_other,
          // Impact by tree
          "impact_tree_occur" : this.property_form_step3.value.impact_tree_occur,
          "impact_tree_occur_other" : this.property_form_step3.value.impact_tree_occur_other,
          "tree_planted_your_property" : this.property_form_step3.value.tree_planted_your_property,
          "where_tree_planted" : this.property_form_step3.value.where_tree_planted,
          "where_tree_planted_other" : this.property_form_step3.value.where_tree_planted_other,
          "tp_christian_tree_owner" : this.property_form_step3.value.tp_christian_tree_owner,
          "tp_name_tree_owner" : this.property_form_step3.value.tp_name_tree_owner,
          "tp_postal_street" : this.property_form_step3.value.tp_postal_street,
          "tp_postal_suburb" : this.property_form_step3.value.tp_postal_suburb,
          "tp_postal_postcode" : this.property_form_step3.value.tp_postal_postcode,
          "tp_postal_email" : this.property_form_step3.value.tp_postal_email,
          "tp_tele_main" : this.property_form_step3.value.tp_tele_main,
          //Escape of liquid
          "what_type_liquid" : this.property_form_step3.value.what_type_liquid,
          "what_type_liquid_other" : this.property_form_step3.value.what_type_liquid_other,
          "class_claim_escape" : this.property_form_step3.value.class_claim_escape,
          "class_claim_escape_other" : this.property_form_step3.value.class_claim_escape_other,
          "escape_location" : this.property_form_step3.value.escape_location,
          "where_liquid_escape" : this.property_form_step3.value.where_liquid_escape,
          "where_liquid_escape_other" : this.property_form_step3.value.where_liquid_escape_other,
          "escape_owner_name" : this.property_form_step3.value.escape_owner_name,
          "escape_owner_street" : this.property_form_step3.value.escape_owner_street,
          "escape_owner_suburb" : this.property_form_step3.value.escape_owner_suburb,
          "escape_owner_postcode" : this.property_form_step3.value.escape_owner_postcode,
          // Weather related
          "class_claim_waether" : this.property_form_step3.value.class_claim_waether,
          // Other
          "property_nature_loss_other" : this.property_form_step3.value.property_nature_loss_other,
          "other_what_damaged" : this.property_form_step3.value.other_what_damaged,
          "other_what_damaged_other" : this.property_form_step3.value.other_what_damaged_other,
          "reported_loss" : this.property_form_step3.value.reported_loss,
          "reported_loss_other" : this.property_form_step3.value.reported_loss_other
        };
      }
    }

    ngOnInit() {
    }

    changeDamageType(event){
      this.title = event.detail.value;
    }
    
    next(){
      localStorage.setItem('property_damage_type',this.property_form_step3.value.property_nature_loss);
      this.router.navigate(['/property-step4']);
    }

    back(){
      this.navCtrl.pop();
    }

}