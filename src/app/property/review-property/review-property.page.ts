import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommonMockService } from 'src/app/common-mock.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-review-property',
  templateUrl: './review-property.page.html',
  styleUrls: ['./review-property.page.scss'],
})
export class ReviewPropertyPage implements OnInit {

  reviewClaimData: any;
  claimNumber: any;
  data: any = [];
  notAvailable: any;
  formValues: any = [];

  constructor(private modalCtrl: ModalController,
     public _cS: CommonMockService,
     private route: ActivatedRoute,
     private statusBar: StatusBar) { 
    
      this.data = "property";
     
      if (this.data == "property") {
        this.claimNumber = localStorage.getItem('PropertyClaimNumber');
      }
     
      if (this.claimNumber) {
        this.notAvailable = 1;
        // this.spinner.show();
        this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), this.claimNumber)
          .subscribe((data: any) => {
            if (data.status == 0) {

              this.reviewClaimData = data.data;
              
              if (this.reviewClaimData.policy_type == "property") {
                this.property();
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

  property() {
    // #property step 0
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

    // #property step 1
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

    // #property step 2
    if (this.reviewClaimData.property != "Other") {
      this.formValues.push({
        question: 'What does the loss or damage refer to?',
        answers: this.reviewClaimData.property,
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'What does the loss or damage refer to?',
        answers: this.reviewClaimData.property,
        answers1: this.reviewClaimData.property_other,
        type: 'dropdown'
      });
    }
    if (!this._cS.checkOtherOption(this.reviewClaimData.where_loss_damage)) {  
      this.formValues.push({
        question: 'Where did this occur?',
        answers: this._cS.get_JSON_value(this.reviewClaimData.where_loss_damage),
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'Where did this occur?',
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
      question: 'Postcode',
      answers: this.reviewClaimData.risk_postcode,
      type: 'text'
    });
    this.formValues.push({
      question: 'State',
      answers: this.reviewClaimData.risk_state,
      type: 'text'
    });
    this.formValues.push({
      question: 'Country',
      answers: this.reviewClaimData.risk_country,
      type: 'text'
    });
    if (this.reviewClaimData.risk_address_type != "Other") {
      this.formValues.push({
        question: 'Risk address type',
        answers: this.reviewClaimData.risk_address_type,
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'Risk address type',
        answers: this.reviewClaimData.risk_address_type,
        answers1: this.reviewClaimData.risk_address_type_other,
        type: 'dropdown'
      });
    }
    this.formValues.push({
      question: 'When did the loss/damage occur?',
      answers: this.reviewClaimData.date_loss,
      type: 'date'
    });
    this.formValues.push({
      question: 'Was the loss/damage caused by a natural disaster?',
      answers: this.reviewClaimData.cat_event,
      type: 'radio'
    });
    if (this.reviewClaimData.disaster_type != "Other") {
      this.formValues.push({
        question: 'Disaster type',
        answers: this.reviewClaimData.disaster_type,
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'Disaster type',
        answers: this.reviewClaimData.disaster_type,
        answers1: this.reviewClaimData.disaster_type_other,
        type: 'dropdown'
      });
    }
    this.formValues.push({
      question: 'Who discovered the loss/damage?',
      answers: this.reviewClaimData.reporter_name,
      type: 'text'
    });

    if (!this._cS.checkOtherOption(this.reviewClaimData.who_discovered)) {
      this.formValues.push({
        question: 'What is their relationship to the policyholder?',
        answers: this._cS.get_JSON_value(this.reviewClaimData.who_discovered),
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'What is their relationship to the policyholder?',
        answers: this._cS.get_JSON_value(this.reviewClaimData.who_discovered),
        answers1: this.reviewClaimData.who_discovered_other,
        type: 'dropdown'
      });
    }
    //#propety step 3
    if (this.reviewClaimData.property_nature_loss != "Other") {
      this.formValues.push({
        question: 'What is the nature of the loss or damage?',
        answers: this.reviewClaimData.property_nature_loss,
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'What is the nature of the loss or damage?',
        answers: this.reviewClaimData.property_nature_loss,
        answers1: this.reviewClaimData.property_nature_loss_other,
        type: 'dropdown'
      });
    }
    if (this.reviewClaimData.property_nature_loss == "Other") {
      // other start
      if (this.reviewClaimData.other_what_damaged != "Other") {
        this.formValues.push({
          question: 'Type of property damaged',
          answers: this.reviewClaimData.other_what_damaged,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'Type of property damaged',
          answers: this.reviewClaimData.other_what_damaged,
          answers1: this.reviewClaimData.other_what_damaged_other,
          type: 'dropdown'
        });
      }
      if (this.reviewClaimData.reported_loss != "Other") {
        this.formValues.push({
          question: 'What was damaged?',
          answers: this.reviewClaimData.reported_loss,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'What was damaged?',
          answers: this.reviewClaimData.reported_loss,
          answers1: this.reviewClaimData.reported_loss_other,
          type: 'dropdown'
        });
      }
    }

    //Escape of liquid Start
    if (this.reviewClaimData.property_nature_loss == "Escape of liquid") {
      if (this.reviewClaimData.what_type_liquid != "Other") {
        this.formValues.push({
          question: 'What type of liquid escaped?',
          answers: this.reviewClaimData.what_type_liquid,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'What type of liquid escaped?',
          answers: this.reviewClaimData.what_type_liquid,
          answers1: this.reviewClaimData.what_type_liquid_other,
          type: 'dropdown'
        });
      }
      if (!this._cS.checkOtherOption(this.reviewClaimData.class_claim_escape)) {
        this.formValues.push({
          question: 'Where did the liquid escape from?',
          answers: this._cS.get_JSON_value(this.reviewClaimData.class_claim_escape),
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'Where did the liquid escape from?',
          answers: this._cS.get_JSON_value(this.reviewClaimData.class_claim_escape),
          answers1: this.reviewClaimData.class_claim_escape_other,
          type: 'dropdown'
        });
      }
      this.formValues.push({
        question: 'Was the location of the liquid escape on your property?',
        answers: this.reviewClaimData.escape_location,
        type: 'radio'
      });
      if (this.reviewClaimData.where_liquid_escape != "Other") {
        this.formValues.push({
          question: 'Where did it escape from?',
          answers: this.reviewClaimData.where_liquid_escape,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'Where did it escape from?',
          answers: this.reviewClaimData.where_liquid_escape,
          answers1: this.reviewClaimData.where_liquid_escape_other,
          type: 'dropdown'
        });
      }
      this.formValues.push({
        question: 'Name of Property Owner',
        answers: this.reviewClaimData.escape_owner_name,
        type: 'text'
      });
      this.formValues.push({
        question: 'Street',
        answers: this.reviewClaimData.escape_owner_street,
        type: 'text'
      });
      this.formValues.push({
        question: 'Suburb/Town',
        answers: this.reviewClaimData.escape_owner_suburb,
        type: 'text'
      });
      this.formValues.push({
        question: 'Post Code',
        answers: this.reviewClaimData.escape_owner_postcode,
        type: 'text'
      });
    }

    // Weather related
    if (this.reviewClaimData.property_nature_loss == "Weather related") {
      this.formValues.push({
        question: 'What was the cause of damage?',
        answers: this._cS.get_JSON_value(this.reviewClaimData.class_claim_waether),
        type: 'dropdown'
      });
    }

    //Earthquake
    if (this.reviewClaimData.property_nature_loss == "Earthquake") {
      this.formValues.push({
        question: 'How far away was the centre of earthquake from your property?',
        answers: this.reviewClaimData.earthquake_center,
        type: 'dropdown'
      });
      this.formValues.push({
        question: 'Richter scale measurement if known',
        answers: this.reviewClaimData.earthquake_measurement,
        type: 'text'
      });
    }
    //Accidental Damage
    if (this.reviewClaimData.property_nature_loss == "Accidental Damage") {
      if (this.reviewClaimData.class_claim_accidental != "Other") {
        this.formValues.push({
          question: 'What was the basic cause of damage?',
          answers: this.reviewClaimData.class_claim_accidental,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'What was the basic cause of damage?',
          answers: this.reviewClaimData.class_claim_accidental,
          answers1: this.reviewClaimData.class_claim_accidental_other,
          type: 'dropdown'
        });
      }
    }
    // Crime/Malicious damage
    if (this.reviewClaimData.property_nature_loss == "Crime/Malicious damage") {
      this.formValues.push({
        question: 'Type of crime',
        answers: this.reviewClaimData.crime_type,
        type: 'dropdown'
      });
      if (this.reviewClaimData.suspect_malicious != "Other") {
        this.formValues.push({
          question: 'Who do you suspect is responsible for the malicious act?',
          answers: this.reviewClaimData.suspect_malicious,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'Who do you suspect is responsible for the malicious act?',
          answers: this.reviewClaimData.suspect_malicious,
          answers1: this.reviewClaimData.suspect_malicious_other,
          type: 'dropdown'
        });
      }
      this.formValues.push({
        question: 'Do you know the name and contact details of suspect/s?',
        answers: this.reviewClaimData.suspect_detail,
        type: 'radio'
      });
      this.formValues.push({
        question: 'Name of suspect',
        answers: this.reviewClaimData.suspect_name,
        type: 'text'
      });
      this.formValues.push({
        question: 'Street',
        answers: this.reviewClaimData.suspect_street,
        type: 'text'
      });
      this.formValues.push({
        question: 'Suburb/Town',
        answers: this.reviewClaimData.suspect_suburb,
        type: 'text'
      });
      this.formValues.push({
        question: 'Postcode',
        answers: this.reviewClaimData.suspect_post_code,
        type: 'text'
      });
      this.formValues.push({
        question: 'When was the insured address left unattended?',
        answers: this.reviewClaimData.address_left_date,
        type: 'text'
      });
      this.formValues.push({
        question: 'Did someone Illegally enter the main building?',
        answers: this.reviewClaimData.enter_illegally,
        type: 'radio'
      });
      if (this.reviewClaimData.entrances_secured != "Other") {
        this.formValues.push({
          question: 'How were the entrances secured?',
          answers: this.reviewClaimData.entrances_secured,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'How were the entrances secured?',
          answers: this.reviewClaimData.entrances_secured,
          answers1: this.reviewClaimData.entrances_secured_other,
          type: 'dropdown'
        });
      }
      if (this.reviewClaimData.windows_secured != "Other") {
        this.formValues.push({
          question: 'How were the windows secured?',
          answers: this.reviewClaimData.windows_secured,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'How were the windows secured?',
          answers: this.reviewClaimData.windows_secured,
          answers1: this.reviewClaimData.windows_secured_other,
          type: 'dropdown'
        });
      }
    }

    //Fire/explosion
    if (this.reviewClaimData.property_nature_loss == "Fire/Explosion") {
      this.formValues.push({
        question: 'Was anyone present when the loss or damage occurred?',
        answers: this.reviewClaimData.anyone_present,
        type: 'radio'
      });
      this.formValues.push({
        question: 'Name of person present',
        answers: this.reviewClaimData.name_present_person,
        type: 'text'
      });

      if (!this._cS.checkOtherOption(this.reviewClaimData.class_claim_fire)) {  
        this.formValues.push({
          question: 'How did the fire or explosion occur?',
          answers: this._cS.get_JSON_value(this.reviewClaimData.class_claim_fire),
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'How did the fire or explosion occur?',
          answers: this._cS.get_JSON_value(this.reviewClaimData.class_claim_fire),
          answers1: this.reviewClaimData.class_claim_fire_other,
          type: 'dropdown'
        });
      }

      if (this.reviewClaimData.class_claim_fire == "Accidental Fire") {

          if (this.reviewClaimData.fire_accidental_fire_subpick != "Other") {
            this.formValues.push({
              question: 'Type of fire/explosion',
              answers: this.reviewClaimData.fire_accidental_fire_subpick,
              type: 'dropdown'
            });
          } else {
            this.formValues.push({
              question: 'Type of fire/explosion',
              answers: this.reviewClaimData.fire_accidental_fire_subpick,
              answers1: this.reviewClaimData.fire_accidental_fire_subpick_other,
              type: 'dropdown'
            });
          }

      }else if(this.reviewClaimData.class_claim_fire == "Bush Fire")
      {

        if (this.reviewClaimData.fire_bush_fire_subpick != "Other") {
          this.formValues.push({
            question: 'Type of fire/explosion',
            answers: this.reviewClaimData.fire_bush_fire_subpick,
            type: 'dropdown'
          });
        } else {
          this.formValues.push({
            question: 'Type of fire/explosion',
            answers: this.reviewClaimData.fire_bush_fire_subpick,
            answers1: this.reviewClaimData.fire_bush_fire_subpick_other,
            type: 'dropdown'
          });
        }

      }else if(this.reviewClaimData.class_claim_fire == "Electrical Fault in Building")
      {
        if (this.reviewClaimData.fire_elefault_building_subpick != "Other") {
          this.formValues.push({
            question: 'Type of fire/explosion',
            answers: this.reviewClaimData.fire_elefault_building_subpick,
            type: 'dropdown'
          });
        } else {
          this.formValues.push({
            question: 'Type of fire/explosion',
            answers: this.reviewClaimData.fire_elefault_building_subpick,
            answers1: this.reviewClaimData.fire_elefault_building_subpick_other,
            type: 'dropdown'
          });
        }
      }else if(this.reviewClaimData.class_claim_fire == "Electrical Fault in Appliance")
      {

        this.formValues.push({
          question: 'Type of fire/explosion',
          answers: this.reviewClaimData.fire_elefault_appliance_subpick,
          type: 'dropdown'
        });

      }else if(this.reviewClaimData.class_claim_fire == "Induced Fire")
      {
          if (this.reviewClaimData.fire_induced_fire_subpick != "Other") {
            this.formValues.push({
              question: 'Type of fire/explosion',
              answers: this.reviewClaimData.fire_induced_fire_subpick,
              type: 'dropdown'
            });
          } else {
            this.formValues.push({
              question: 'Type of fire/explosion',
              answers: this.reviewClaimData.fire_induced_fire_subpick,
              answers1: this.reviewClaimData.fire_induced_fire_subpick_other,
              type: 'dropdown'
            });
          }
      }else if(this.reviewClaimData.class_claim_fire == "Explosion")
      {
          if (this.reviewClaimData.fire_explosion_subpick != "Other") {
            this.formValues.push({
              question: 'Type of fire/explosion',
              answers: this.reviewClaimData.fire_explosion_subpick,
              type: 'dropdown'
            });
          } else {
            this.formValues.push({
              question: 'Type of fire/explosion',
              answers: this.reviewClaimData.fire_explosion_subpick,
              answers1: this.reviewClaimData.fire_explosion_subpick_other,
              type: 'dropdown'
            });
          }
      }


    }

    //impact_by_tree  
    if (this.reviewClaimData.property_nature_loss == "Impact by tree") {
      if (this.reviewClaimData.impact_tree_occur != "Other") {
        this.formValues.push({
          question: 'Did tree impact occur due to',
          answers: this.reviewClaimData.impact_tree_occur,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'Did tree impact occur due to',
          answers: this.reviewClaimData.impact_tree_occur,
          answers1: this.reviewClaimData.impact_tree_occur_other,
          type: 'dropdown'
        });
      }
      this.formValues.push({
        question: 'Was the tree planted on your property?',
        answers: this.reviewClaimData.tree_planted_your_property,
        type: 'radio'
      });
      if (this.reviewClaimData.where_tree_planted != "Other") {
        this.formValues.push({
          question: 'Where was the tree planted?',
          answers: this.reviewClaimData.where_tree_planted,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'Where was the tree planted?',
          answers: this.reviewClaimData.where_tree_planted,
          answers1: this.reviewClaimData.where_tree_planted_other,
          type: 'dropdown'
        });
      }
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
        question: 'Telephone',
        answers: this.reviewClaimData.tp_tele_main,
        type: 'text'
      });
    }

    //impact_by_collision
    if (this.reviewClaimData.property_nature_loss == "Impact by collision") {
      if (this.reviewClaimData.what_was_impacted != "Other") {
        this.formValues.push({
          question: 'What was impacted?',
          answers: this.reviewClaimData.what_was_impacted,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'What was impacted?',
          answers: this.reviewClaimData.what_was_impacted,
          answers1: this.reviewClaimData.what_was_impacted_other,
          type: 'dropdown'
        });
      }
    }

    // #property step 4
    if (this.reviewClaimData.property_nature_loss == "Other") {
      this.formValues.push({
        question: 'Severity of damage',
        answers: this.reviewClaimData.severity_damage,
        type: 'dropdown'
      });
    }

    //Escape of liquid
    if (this.reviewClaimData.property_nature_loss == "Escape of liquid") {
      if (this.reviewClaimData.how_liquid_escape != "Other") {
        this.formValues.push({
          question: 'How did the liquid escape?',
          answers: this.reviewClaimData.how_liquid_escape,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'How did the liquid escape?',
          answers: this.reviewClaimData.how_liquid_escape,
          answers1: this.reviewClaimData.how_liquid_escape_other,
          type: 'dropdown'
        });
      }
      if (this.reviewClaimData.why_liquid_escape != "Other") {
        this.formValues.push({
          question: 'Why did the liquid escape?',
          answers: this.reviewClaimData.why_liquid_escape,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'Why did the liquid escape?',
          answers: this.reviewClaimData.why_liquid_escape,
          answers1: this.reviewClaimData.why_liquid_escape_other,
          type: 'dropdown'
        });
      }
      this.formValues.push({
        question: 'Is the liquid still escaping?',
        answers: this.reviewClaimData.is_liquid_escaping,
        type: 'radio'
      });
    }

    //Weather related  
    if (this.reviewClaimData.property_nature_loss == "Weather related") {
      if (this.reviewClaimData.type_damage != "Other") {
        this.formValues.push({
          question: 'Type of damage',
          answers: this.reviewClaimData.type_damage,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'Type of damage',
          answers: this.reviewClaimData.type_damage,
          answers1: this.reviewClaimData.type_damage_other,
          type: 'dropdown'
        });
      }
    }

    //Earthquake
    if (this.reviewClaimData.property_nature_loss == "Earthquake") {
      this.formValues.push({
        question: 'Does the ground on your property appear to have been damaged?',
        answers: this.reviewClaimData.earthquake_ground_damage,
        type: 'radio'
      });
      if (this.reviewClaimData.earthquake_damage != "Other") {
        this.formValues.push({
          question: 'What appears to have been damaged?',
          answers: this.reviewClaimData.earthquake_damage,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'What appears to have been damaged?',
          answers: this.reviewClaimData.earthquake_damage,
          answers1: this.reviewClaimData.earthquake_damage_other,
          type: 'dropdown'
        });
      }
    }
    //Accidental Damage
    if (this.reviewClaimData.property_nature_loss == "Accidental Damage") {
      if (this.reviewClaimData.resultant_damage != "Other") {
        this.formValues.push({
          question: 'Type of resultant damage',
          answers: this.reviewClaimData.resultant_damage,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'Type of resultant damage',
          answers: this.reviewClaimData.resultant_damage,
          answers1: this.reviewClaimData.resultant_damage_other,
          type: 'dropdown'
        });
      }
    }
    //Crime/malicious_damage
    if (this.reviewClaimData.property_nature_loss == "Crime/Malicious damage") {
      this.formValues.push({
        question: 'Does the building have an alarm?',
        answers: this.reviewClaimData.property_have_alarm,
        type: 'radio'
      });
      this.formValues.push({
        question: 'Was it monitored by a security company?',
        answers: this.reviewClaimData.monitored_security_company,
        type: 'radio'
      });
      this.formValues.push({
        question: 'Was the alarm armed at the time of the loss?',
        answers: this.reviewClaimData.alarm_armed_at_time_of_loss,
        type: 'radio'
      });
      this.formValues.push({
        question: 'Does the building have video surveillance?',
        answers: this.reviewClaimData.building_video_surveillance,
        type: 'radio'
      });
      this.formValues.push({
        question: 'Is there video of the crime?',
        answers: this.reviewClaimData.video_proof,
        type: 'radio'
      });
      if (this.reviewClaimData.property_how_enter != "Other") {
        this.formValues.push({
          question: 'How did they enter the building?',
          answers: this.reviewClaimData.property_how_enter,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'How did they enter the building?',
          answers: this.reviewClaimData.property_how_enter,
          answers1: this.reviewClaimData.property_how_enter_other,
          type: 'dropdown'
        });
      }
      if (this.reviewClaimData.property_where_enter != "Other") {
        this.formValues.push({
          question: 'Where did they enter the building?',
          answers: this.reviewClaimData.property_where_enter,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'Where did they enter the building?',
          answers: this.reviewClaimData.property_where_enter,
          answers1: this.reviewClaimData.property_where_enter_other,
          type: 'dropdown'
        });
      }
      if (this.reviewClaimData.property_why_able_to_enter != "Other") {
        this.formValues.push({
          question: 'Why were they able to enter the building?',
          answers: this.reviewClaimData.property_why_able_to_enter,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'Why were they able to enter the building?',
          answers: this.reviewClaimData.property_why_able_to_enter,
          answers1: this.reviewClaimData.property_why_able_to_enter_other,
          type: 'dropdown'
        });
      }
      if (this.reviewClaimData.property_offender_leave != "Other") {
        this.formValues.push({
          question: 'How did the offender/s leave the building?',
          answers: this.reviewClaimData.property_offender_leave,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'How did the offender/s leave the building?',
          answers: this.reviewClaimData.property_offender_leave,
          answers1: this.reviewClaimData.property_offender_leave_other,
          type: 'dropdown'
        });
      }
      this.formValues.push({
        question: 'Were goods stolen from anywhere other than inside the main building?',
        answers: this.reviewClaimData.good_stolen_outside,
        type: 'radio'
      });
      if (this.reviewClaimData.goods_stolen_from != "Other") {
        this.formValues.push({
          question: 'Where from?',
          answers: this.reviewClaimData.goods_stolen_from,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'Where from?',
          answers: this.reviewClaimData.goods_stolen_from,
          answers1: this.reviewClaimData.goods_stolen_from_other,
          type: 'dropdown'
        });
      }
    }
    //Fire/explosion
    if (this.reviewClaimData.property_nature_loss == "Fire/Explosion") {
      if (this.reviewClaimData.fire_explosion_start != "Other") {
        this.formValues.push({
          question: 'Where did the fire or explosion start?',
          answers: this.reviewClaimData.fire_explosion_start,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'Where did the fire or explosion start?',
          answers: this.reviewClaimData.fire_explosion_start,
          answers1: this.reviewClaimData.fire_explosion_start_other,
          type: 'dropdown'
        });
      }
      if (this.reviewClaimData.where_outside_building != "Other") {
        this.formValues.push({
          question: 'Where outside the building?',
          answers: this.reviewClaimData.where_outside_building,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'Where outside the building?',
          answers: this.reviewClaimData.where_outside_building,
          answers1: this.reviewClaimData.where_outside_building_other,
          type: 'dropdown'
        });
      }
      if (this.reviewClaimData.where_inside_building != "Other") {
        this.formValues.push({
          question: 'Where inside the building?',
          answers: this.reviewClaimData.where_inside_building,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'Where inside the building?',
          answers: this.reviewClaimData.where_inside_building,
          answers1: this.reviewClaimData.where_inside_building_other,
          type: 'dropdown'
        });
      }
      this.formValues.push({
        question: 'Did the Fire Brigade attend?',
        answers: this.reviewClaimData.fire_brigade_attend,
        type: 'radio'
      });
      this.formValues.push({
        question: 'Did the smoke detectors function?',
        answers: this.reviewClaimData.smoke_detectors_function,
        type: 'radio'
      });
      this.formValues.push({
        question: 'Why not?',
        answers: this.reviewClaimData.why_not,
        type: 'text'
      });
    }
    //impact_by_tree
    if (this.reviewClaimData.property_nature_loss == "Impact by tree") {
      this.formValues.push({
        question: 'Was anyone cutting or lopping the tree when the impact occurred?',
        answers: this.reviewClaimData.cutting_lopping,
        type: 'radio'
      });
      this.formValues.push({
        question: 'Name of tree cutter',
        answers: this.reviewClaimData.name_party,
        type: 'text'
      });
      if (this.reviewClaimData.was_tree_cutter != "Other") {
        this.formValues.push({
          question: 'Type of tree cutter',
          answers: this.reviewClaimData.was_tree_cutter,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'Type of tree cutter',
          answers: this.reviewClaimData.was_tree_cutter,
          answers1: this.reviewClaimData.was_tree_cutter_other,
          type: 'dropdown'
        });
      }
      this.formValues.push({
        question: 'Prior to the impact was the tree or branch in a safe condition?',
        answers: this.reviewClaimData.tree_branch_condition,
        type: 'radio'
      });
      if (this.reviewClaimData.how_you_know != "Other") {
        this.formValues.push({
          question: 'How did you know?',
          answers: this.reviewClaimData.how_you_know,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'How did you know?',
          answers: this.reviewClaimData.how_you_know,
          answers1: this.reviewClaimData.how_you_know_other,
          type: 'dropdown'
        });
      }
      this.formValues.push({
        question: 'Was the owner aware the tree was a danger to your property?',
        answers: this.reviewClaimData.is_owner_aware,
        type: 'radio'
      });
      if (this.reviewClaimData.how_made_aware != "Other") {
        this.formValues.push({
          question: 'How were they made aware?',
          answers: this.reviewClaimData.how_made_aware,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'How were they made aware?',
          answers: this.reviewClaimData.how_made_aware,
          answers1: this.reviewClaimData.how_made_aware_other,
          type: 'dropdown'
        });
      }
    }

    //impact_by_collision
    if (this.reviewClaimData.property_nature_loss == "Impact by collision") {
      this.formValues.push({
        question: 'What impacted the property?',
        answers: this.reviewClaimData.what_impacted_property,
        type: 'dropdown'
      });
      this.formValues.push({
        question: 'Were you the driver?',
        answers: this.reviewClaimData.were_you_the_driver,
        type: 'radio'
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
        question: 'Email',
        answers: this.reviewClaimData.tp_postal_email,
        type: 'text'
      });
      this.formValues.push({
        question: 'Telephone',
        answers: this.reviewClaimData.tp_tele_main,
        type: 'text'
      });
      if (this.reviewClaimData.type_animal != "Other") {
        this.formValues.push({
          question: 'Type of animal',
          answers: this.reviewClaimData.type_animal,
          type: 'dropdown'
        });
      } else {
        this.formValues.push({
          question: 'Type of animal',
          answers: this.reviewClaimData.type_animal,
          answers1: this.reviewClaimData.type_animal_other,
          type: 'dropdown'
        });
      }
      this.formValues.push({
        question: 'Are you the owner of the animal?',
        answers: this.reviewClaimData.animal_owner,
        type: 'radio'
      });
      this.formValues.push({
        question: 'First Name',
        answers: this.reviewClaimData.tp_christian_animal_owner,
        type: 'text'
      });
      this.formValues.push({
        question: 'Last Name',
        answers: this.reviewClaimData.tp_name_animal_owner,
        type: 'text'
      });
      this.formValues.push({
        question: 'Are you the owner of the bike?',
        answers: this.reviewClaimData.bike_owner,
        type: 'radio'
      });
      this.formValues.push({
        question: 'First Name',
        answers: this.reviewClaimData.tp_christian_bike_owner,
        type: 'text'
      });
      this.formValues.push({
        question: 'Last Name',
        answers: this.reviewClaimData.tp_name_bike_owner,
        type: 'text'
      });
    }
    //# property step 5
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
      question: 'Which station',
      answers: this.reviewClaimData.which_station,
      type: 'text'
    });
    this.formValues.push({
      question: 'Police report number',
      answers: this.reviewClaimData.police_report_number,
      type: 'text'
    });
    //#property step 6
    this.formValues.push({
      question: 'Emergency works needed?',
      answers: this.reviewClaimData.emergency_works_needed,
      type: 'radio'
    });
    if (this.reviewClaimData.works_required != "Other") {
      this.formValues.push({
        question: 'Type of works still required',
        answers: this.reviewClaimData.works_required,
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'Type of works still required',
        answers: this.reviewClaimData.works_required,
        answers1: this.reviewClaimData.works_required_other,
        type: 'dropdown'
      });
    }
    this.formValues.push({
      question: 'Are the premises fit for use?',
      answers: this.reviewClaimData.fit_for_use,
      type: 'radio'
    });
    if (this.reviewClaimData.works_arranged != "Other") {
      this.formValues.push({
        question: 'Works already arranged or performed',
        answers: this.reviewClaimData.works_arranged,
        type: 'dropdon'
      });
    } else {
      this.formValues.push({
        question: 'Works already arranged or performed',
        answers: this.reviewClaimData.works_arranged,
        answers1: this.reviewClaimData.works_arranged_other,
        type: 'dropdown'
      });
    }
    this.formValues.push({
      question: 'Name Contractor',
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
      question: 'Has any cost been paid yet?',
      answers: this.reviewClaimData.cost_paid,
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
      question: 'Account No',
      answers: this.reviewClaimData.bank_account_number,
      type: 'text'
    });
    //# property step 7
    this.formValues.push({
      question: 'Briefly tell us what happened',
      answers: this.reviewClaimData.reported_circumstances,
      type: 'text'
    });
  }
  
  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
