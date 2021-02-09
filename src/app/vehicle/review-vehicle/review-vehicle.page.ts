import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalController } from '@ionic/angular';
import { CommonMockService } from 'src/app/common-mock.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-vehicle',
  templateUrl: './review-vehicle.page.html',
  styleUrls: ['./review-vehicle.page.scss'],
})
export class ReviewVehiclePage implements OnInit {

  reviewClaimData: any;
  claimNumber: any;
  data: any = [];
  notAvailable: any;
  formValues: any = [];

  constructor(private modalCtrl: ModalController,
     public _cS: CommonMockService,
     private route: ActivatedRoute,
     private statusBar: StatusBar) { 
    
      this.data = "vehicle";
     
      if (this.data == "vehicle") {
        this.claimNumber = localStorage.getItem('ClaimNumber');
      }
     
      if (this.claimNumber) {
        this.notAvailable = 1;
        // this.spinner.show();
        this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), this.claimNumber)
          .subscribe((data: any) => {
            if (data.status == 0) {

              this.reviewClaimData = data.data;
              
              if (this.reviewClaimData.policy_type == "vehicle") {
                this.vehicle();
              }
              // this.spinner.hide();
              this.formValues = this.formValues.filter(val => {
                if (val.answers != null && val.answers != '') {
                  return val;
                }
              });
            }
          });
      } else {
        this.notAvailable = 0;
      }
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  vehicle() {
    // #vehicle step 0
    this.formValues.push({
      question: 'Do you know your policy number?',
      answers: this.reviewClaimData.policy_holder,
      type: 'radio'
    });
    this.formValues.push({
      question: 'Policy Number',
      answers: this.reviewClaimData.policy_number,
      type: 'text'
    });
    this.formValues.push({
      question: 'First Name',
      answers: this.reviewClaimData.tp_christian_policyholder,
      type: 'text'
    });
    this.formValues.push({
      question: 'Last Name',
      answers: this.reviewClaimData.tp_name_policyholder,
      type: 'text'
    });
    this.formValues.push({
      question: 'Telephone',
      answers: this.reviewClaimData.contact_telephone,
      type: 'text'
    });
    this.formValues.push({
      question: 'Mobile',
      answers: this.reviewClaimData.contact_mobile,
      type: 'text'
    });
    this.formValues.push({
      question: 'Email',
      answers: this.reviewClaimData.contact_email,
      type: 'text'
    });

    // #vehicle step 1
    this.formValues.push({
      question: 'How would you like to be contacted?',
      answers: this._cS.get_JSON_value(this.reviewClaimData.preferred_communication),
      type: 'dropdown'
    });
    this.formValues.push({
      question: 'Client type',
      answers: this._cS.get_JSON_value(this.reviewClaimData.type_entitiy),
      type: 'dropdown'
    });
    this.formValues.push({
      question: 'Policy Holder Business Name',
      answers: this.reviewClaimData.client_company,
      type: 'text'
    });

    // #vehicle step 2
    this.formValues.push({
      question: 'Make of vehicle',
      answers: this.reviewClaimData.make_of_vehicle,
      type: 'dropdown'
    });
    this.formValues.push({
      question: 'Model',
      answers: this.reviewClaimData.body_model,
      type: 'dropdown'
    });
    this.formValues.push({
      question: 'Year',
      answers: this.reviewClaimData.vehicle_year,
      type: 'dropdown'
    });
    this.formValues.push({
      question: 'Body type',
      answers: this._cS.get_JSON_value(this.reviewClaimData.type_of_body),
      type: 'dropdown'
    });

    this.formValues.push({
      question: 'Registration Number',
      answers: this.reviewClaimData.reg_number,
      type: 'text'
    });

    // #vehicle step 3      
    if (!this._cS.checkOtherOption(this.reviewClaimData.where_loss_damage)) {  
      this.formValues.push({
        question: 'Where did the loss/damage occur?',
        answers: this._cS.get_JSON_value(this.reviewClaimData.where_loss_damage),
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'Where did the loss/damage occur?',
        answers: this._cS.get_JSON_value(this.reviewClaimData.where_loss_damage),
        answers1: this.reviewClaimData.where_loss_damage_other,
        type: 'dropdown'
      });

    }
    this.formValues.push({
      question: 'Street',
      answers: this.reviewClaimData.risk_street,
      type: 'text'
    });
    this.formValues.push({
      question: 'Suburb/Town',
      answers: this.reviewClaimData.risk_suburb,
      type: 'text'
    });
    this.formValues.push({
      question: 'State',
      answers: this.reviewClaimData.risk_state,
      type: 'text'
    });
    this.formValues.push({
      question: 'Postcode',
      answers: this.reviewClaimData.risk_postcode,
      type: 'text'
    });
    this.formValues.push({
      question: 'Country',
      answers: this.reviewClaimData.risk_country,
      type: 'text'
    });
    this.formValues.push({
      question: 'When did this occur?',
      answers: this.reviewClaimData.date_loss,
      type: 'date'
    });
    this.formValues.push({
      question: 'What time did this occur?',
      answers: this.reviewClaimData.time_loss,
      type: 'time'
    });
    this.formValues.push({
      question: 'Where did the loss/damage occur?',
      answers: this.reviewClaimData.vehicle_damage_arose,
      type: 'dropdown'
    });

    // #vehicle step 4
    //Windscreen or glass Option Start
    if (this.reviewClaimData.vehicle_damage_arose == "Windscreen/Glass") {
      if (this.reviewClaimData.vehicle_how_did_occur != "Other") {
        this.formValues.push({
          question: 'How did this occur?',
          answers: this.reviewClaimData.vehicle_how_did_occur,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'How did this occur?',
          answers: this.reviewClaimData.vehicle_how_did_occur,
          answers1: this.reviewClaimData.vehicle_how_did_occur_other,
          type: 'dropdown'
        });

      }

      this.formValues.push({
        question: 'Has the glass been repaired?',
        answers: this.reviewClaimData.has_glass_repaired,
        type: 'radio'
      });
      this.formValues.push({
        question: 'Name of contractor',
        answers: this.reviewClaimData.contractor_name,
        type: 'text'
      });
      this.formValues.push({
        question: 'Street',
        answers: this.reviewClaimData.contractor_street,
        type: 'text'
      });
      this.formValues.push({
        question: 'Suburb/Town',
        answers: this.reviewClaimData.contractor_suburb,
        type: 'text'
      });
      this.formValues.push({
        question: 'Postcode',
        answers: this.reviewClaimData.contractor_post_code,
        type: 'text'
      });
      this.formValues.push({
        question: 'Cost',
        answers: this.reviewClaimData.repair_cost,
        type: 'text'
      });
      this.formValues.push({
        question: 'Have you paid this cost?',
        answers: this.reviewClaimData.cost_paid,
        type: 'radio'
      });
    }
    if (this.reviewClaimData.vehicle_damage_arose == "Theft") {
      // Theft Option Start
      this.formValues.push({
        question: 'Was the vehicle locked?',
        answers: this.reviewClaimData.vehicle_was_locked,
        type: 'radio'
      });
      this.formValues.push({
        question: 'Was the vehicle stolen?',
        answers: this.reviewClaimData.vehicle_was_stolen,
        type: 'radio'
      });
      this.formValues.push({
        question: 'Has the vehicle been recovered?',
        answers: this.reviewClaimData.vehicle_recovered,
        type: 'radio'
      });
    }
    if (this.reviewClaimData.vehicle_damage_arose == "Weather") {
      //Weather Option Start
      if (this.reviewClaimData.weather_type != "Other") {
        this.formValues.push({
          question: 'Weather type',
          answers: this.reviewClaimData.weather_type,
          type: 'dropdown'
        });
      } else {

        this.formValues.push({
          question: 'Weather type',
          answers: this.reviewClaimData.weather_type,
          answers1: this.reviewClaimData.weather_type_other,
          type: 'dropdown'
        });

      }
      this.formValues.push({
        question: 'Was the loss/damage caused by a natural disaster?',
        answers: this.reviewClaimData.cat_event,
        type: 'radio'
      });
    }
    if (this.reviewClaimData.vehicle_damage_arose == "Impact") {
      //Impact Option Start
      if (this.reviewClaimData.impact_type != "Other") {
        this.formValues.push({
          question: 'Impact type',
          answers: this.reviewClaimData.impact_type,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'Impact type',
          answers: this.reviewClaimData.impact_type,
          answers1: this.reviewClaimData.impact_type_other,
          type: 'dropdown'
        });
      }
      this.formValues.push({
        question: 'Is the owner of the tree/foreign object a third party?',
        answers: this.reviewClaimData.impact_know_owner,
        type: 'radio'
      });
      this.formValues.push({
        question: 'First name',
        answers: this.reviewClaimData.tp_christian_tree_owner,
        type: 'text'
      });
      this.formValues.push({
        question: 'Last name',
        answers: this.reviewClaimData.tp_name_tree_owner,
        type: 'text'
      });
      this.formValues.push({
        question: 'Street',
        answers: this.reviewClaimData.tp_postal_street,
        type: 'text'
      });
      this.formValues.push({
        question: 'Suburb/Town',
        answers: this.reviewClaimData.tp_postal_suburb,
        type: 'text'
      });
      this.formValues.push({
        question: 'Postcode',
        answers: this.reviewClaimData.tp_postal_postcode,
        type: 'text'
      });
      this.formValues.push({
        question: 'State',
        answers: this.reviewClaimData.tp_postal_state,
        type: 'text'
      });
      this.formValues.push({
        question: 'Email',
        answers: this.reviewClaimData.tp_postal_email,
        type: 'text'
      });
      this.formValues.push({
        question: 'Phone number',
        answers: this.reviewClaimData.tp_tele_main,
        type: 'text'
      });
    }
    if (this.reviewClaimData.vehicle_damage_arose == "Fire") {
      //Fire Option Start
      if (this.reviewClaimData.fire_type != "Other") {
        this.formValues.push({
          question: 'Fire type',
          answers: this.reviewClaimData.fire_type,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'Fire type',
          answers: this.reviewClaimData.fire_type,
          answers1: this.reviewClaimData.fire_type_other,
          type: 'dropdown'
        });
      }
    }
    if (this.reviewClaimData.vehicle_damage_arose == "Collision") {
      //Collision Option Start
      this.formValues.push({
        question: 'Do you have a video of accident?',
        answers: this.reviewClaimData.video_proof,
        type: 'radio'
      });
      this.formValues.push({
        question: 'What did the collision involve?',
        answers: this.reviewClaimData.what_collision_involve,
        type: 'dropdown'
      });
      if (this.reviewClaimData.animal_type != "Other") {
        this.formValues.push({
          question: 'Type of animal',
          answers: this.reviewClaimData.animal_type,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'Type of animal',
          answers: this.reviewClaimData.animal_type,
          answers1: this.reviewClaimData.animal_type_other,
          type: 'dropdown'
        });
      }
      this.formValues.push({
        question: 'Is the owner of the animal a third party?',
        answers: this.reviewClaimData.know_animal_owner,
        type: 'radio'
      });
      this.formValues.push({
        question: 'First name',
        answers: this.reviewClaimData.tp_christian_animal_owner,
        type: 'text'
      });
      this.formValues.push({
        question: 'Last name',
        answers: this.reviewClaimData.tp_name_animal_owner,
        type: 'text'
      });
      this.formValues.push({
        question: 'Street',
        answers: this.reviewClaimData.owner_street,
        type: 'text'
      });
      this.formValues.push({
        question: 'Suburb/Town',
        answers: this.reviewClaimData.owner_town,
        type: 'text'
      });
      this.formValues.push({
        question: 'Post Code',
        answers: this.reviewClaimData.owner_postal_code,
        type: 'text'
      });
      this.formValues.push({
        question: 'State',
        answers: this.reviewClaimData.owner_state,
        type: 'text'
      });
      this.formValues.push({
        question: 'Email',
        answers: this.reviewClaimData.owner_email,
        type: 'text'
      });
      this.formValues.push({
        question: 'Telephone',
        answers: this.reviewClaimData.owner_telephone,
        type: 'text'
      });
      if (this.reviewClaimData.structure_type != "Other") {
        this.formValues.push({
          question: 'Type of object/structure',
          answers: this.reviewClaimData.structure_type,
          type: 'dorpdown'
        });
      } else {
        this.formValues.push({
          question: 'Type of object/structure',
          answers: this.reviewClaimData.structure_type,
          answers1: this.reviewClaimData.structure_type_other,
          type: 'dorpdown'
        });
      }
      this.formValues.push({
        question: 'Damage to object/structure',
        answers: this.reviewClaimData.structure_damage,
        type: 'dropdown'
      });
      this.formValues.push({
        question: 'Is the owner of the object/structure a third party?',
        answers: this.reviewClaimData.structure_know_owner,
        type: 'radio'
      });
      this.formValues.push({
        question: 'First name',
        answers: this.reviewClaimData.tp_christian_object_owner,
        type: 'text'
      });
      this.formValues.push({
        question: 'Last name',
        answers: this.reviewClaimData.tp_name_object_owner,
        type: 'text'
      });
      this.formValues.push({
        question: 'Street',
        answers: this.reviewClaimData.object_street,
        type: 'text'
      });
      this.formValues.push({
        question: 'Suburb/Town',
        answers: this.reviewClaimData.object_town,
        type: 'text'
      });
      this.formValues.push({
        question: 'Post Code',
        answers: this.reviewClaimData.object_postal_code,
        type: 'text'
      });
      this.formValues.push({
        question: 'State',
        answers: this.reviewClaimData.object_state,
        type: 'text'
      });
      this.formValues.push({
        question: 'Email',
        answers: this.reviewClaimData.object_email,
        type: 'text'
      });
      this.formValues.push({
        question: 'First name',
        answers: this.reviewClaimData.tp_christian_other_driver,
        type: 'text'
      });
      this.formValues.push({
        question: 'Last name',
        answers: this.reviewClaimData.tp_name_other_driver,
        type: 'text'
      });
      this.formValues.push({
        question: 'Street',
        answers: this.reviewClaimData.other_driver_street,
        type: 'text'
      });
      this.formValues.push({
        question: 'Suburb/Town',
        answers: this.reviewClaimData.other_driver_town,
        type: 'text'
      });
      this.formValues.push({
        question: 'Post Code',
        answers: this.reviewClaimData.other_driver_postal_code,
        type: 'text'
      });
      this.formValues.push({
        question: 'State',
        answers: this.reviewClaimData.other_driver_state,
        type: 'text'
      });
      this.formValues.push({
        question: 'Email',
        answers: this.reviewClaimData.other_driver_email,
        type: 'text'
      });
      this.formValues.push({
        question: 'Make of other vehicle',
        answers: this.reviewClaimData.other_vehicle_make,
        type: 'dropdown'
      });
      this.formValues.push({
        question: 'Registration number of other vehicle',
        answers: this.reviewClaimData.other_vehicle_reg,
        type: 'text'
      });
      this.formValues.push({
        question: 'Year of other vehicle',
        answers: this.reviewClaimData.other_vehicle_year,
        type: 'text'
      });
      this.formValues.push({
        question: 'Model of other vehicle',
        answers: this.reviewClaimData.other_vehicle_model,
        type: 'text'
      });
      if (this.reviewClaimData.other_vehicle_body != "Other") {
        this.formValues.push({
          question: 'Body type of other vehicle',
          answers: this.reviewClaimData.other_vehicle_body,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'Body type of other vehicle',
          answers: this.reviewClaimData.other_vehicle_body,
          answers1: this.reviewClaimData.other_vehicle_body_other,
          type: 'dropdown'
        });
      }
      this.formValues.push({
        question: 'Damage to other vehicle',
        answers: this.reviewClaimData.other_vehicle_damage,
        type: 'dropdown'
      });
      if (this.reviewClaimData.collision_what_happened != "Other") {
        this.formValues.push({
          question: 'What happened?',
          answers: this.reviewClaimData.collision_what_happened,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'What happened?',
          answers: this.reviewClaimData.collision_what_happened,
          answers1: this.reviewClaimData.collision_what_happened_other,
          type: 'dropdown'
        });
      }
      this.formValues.push({
        question: 'Who was at fault?',
        answers: this.reviewClaimData.who_was_fault,
        type: 'dropdown'
      });
    }
    //Collision Option End
    
    this.formValues.push({
      question: 'Has your vehicle suffered damage?',
      answers: this.reviewClaimData.vehicle_suffered_damage,
      type: 'radio'
    });
    this.formValues.push({
      question: 'Damage to your vehicle',
      answers: this.reviewClaimData.vehicle_damaged,
      type: 'dropdown'
    });
    this.formValues.push({
      question: 'Street',
      answers: this.reviewClaimData.where_vehicle_street,
      type: 'text'
    });
    this.formValues.push({
      question: 'Suburb/Town',
      answers: this.reviewClaimData.where_vehicle_suburb,
      type: 'text'
    });
    this.formValues.push({
      question: 'Postcode',
      answers: this.reviewClaimData.where_vehicle_post_code,
      type: 'text'
    });
    this.formValues.push({
      question: 'Do you have a quote to repair the damage?',
      answers: this.reviewClaimData.quote_repair,
      type: 'radio'
    });

    this.formValues.push({
      question: 'Are you claiming reimbursement of any costs?',
      answers: this.reviewClaimData.costs_reimbursed,
      type: 'radio'
    });
    this.formValues.push({
      question: 'Name of account',
      answers: this.reviewClaimData.bank_account_name,
      type: 'text'
    });
    if (!this._cS.checkOtherOption(this.reviewClaimData.name_bank)) { 
      this.formValues.push({
        question: 'Bank',
        answers: this._cS.get_JSON_value(this.reviewClaimData.name_bank),
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'Bank',
        answers: this._cS.get_JSON_value(this.reviewClaimData.name_bank),
        answers1: this.reviewClaimData.name_bank_other,
        type: 'dropdown'
      });
    }
    this.formValues.push({
      question: 'Branch',
      answers: this.reviewClaimData.bank_branch,
      type: 'text'
    });
    this.formValues.push({
      question: 'BSB',
      answers: this.reviewClaimData.bank_bsb,
      type: 'text'
    });
    this.formValues.push({
      question: 'Account no',
      answers: this.reviewClaimData.bank_account_number,
      type: 'text'
    });
    // #vehicle step 5
    // Windscreen or glass Option Start
    this.formValues.push({
      question: 'Was someone driving the vehicle?',
      answers: this.reviewClaimData.someone_driving_vehicle,
      type: 'radio'
    });
    this.formValues.push({
      question: 'Name of Driver',
      answers: this.reviewClaimData.driver_name,
      type: 'text'
    });
    this.formValues.push({
      question: 'Street',
      answers: this.reviewClaimData.driver_address_street,
      type: 'text'
    });
    this.formValues.push({
      question: 'Suburb/Town',
      answers: this.reviewClaimData.driver_address_town,
      type: 'text'
    });
    this.formValues.push({
      question: 'Postal code',
      answers: this.reviewClaimData.driver_postal_code,
      type: 'text'
    });
    this.formValues.push({
      question: 'Date of Birth',
      answers: this.reviewClaimData.driver_dob,
      type: 'bdate'
    });
    this.formValues.push({
      question: 'License Number',
      answers: this.reviewClaimData.driver_license_number,
      type: 'text'
    });
    this.formValues.push({
      question: 'Did the driver consume alcohol or drugs 24 hours prior to the incident?',
      answers: this.reviewClaimData.driver_consumed_alcohol,
      type: 'radio'
    });
    this.formValues.push({
      question: 'What was consumed?',
      answers: this.reviewClaimData.driver_what_consumed,
      type: 'text'
    });
    this.formValues.push({
      question: 'Blood test result',
      answers: this.reviewClaimData.driver_blood_test_result,
      type: 'dropdown'
    });
    this.formValues.push({
      question: 'Alcohol test result',
      answers: this.reviewClaimData.driver_alcohol_test_result,
      type: 'dropdown'
    });
    this.formValues.push({
      question: 'Briefly tell Us what happened',
      answers: this.reviewClaimData.reported_circumstances,
      type: 'text'
    });

    // #vehicle step 6
    this.formValues.push({
      question: 'Was the matter reported to the police?',
      answers: this.reviewClaimData.reported_to_police,
      type: 'radio'
    });
    this.formValues.push({
      question: 'Date notified',
      answers: this.reviewClaimData.police_report_date,
      type: 'date'
    });
    this.formValues.push({
      question: 'Which station?',
      answers: this.reviewClaimData.which_station,
      type: 'text'
    });
    this.formValues.push({
      question: 'Police report number',
      answers: this.reviewClaimData.police_report_number,
      type: 'text'
    });
    this.formValues.push({
      question: 'Has the police laid charges?',
      answers: this.reviewClaimData.police_laid_charges,
      type: 'radio'
    });
    this.formValues.push({
      question: 'Who has been charged?',
      answers: this.reviewClaimData.police_who_charged,
      type: 'text'
    });
  }

  
  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
