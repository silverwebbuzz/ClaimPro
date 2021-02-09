import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonMockService } from 'src/app/common-mock.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-medical',
  templateUrl: './review-medical.page.html',
  styleUrls: ['./review-medical.page.scss'],
})
export class ReviewMedicalPage implements OnInit {

  reviewClaimData: any;
  claimNumber: any;
  data: any = [];
  notAvailable: any;
  formValues: any = [];

  constructor(private modalCtrl: ModalController,
     public _cS: CommonMockService,
     private route: ActivatedRoute,
     private statusBar: StatusBar) { 
    
      this.data = "medical";
     
      if (this.data == "medical") {
        this.claimNumber = localStorage.getItem('MedicalClaimNumber');
      }
     
      if (this.claimNumber) {
        this.notAvailable = 1;
        // this.spinner.show();
        this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), this.claimNumber)
          .subscribe((data: any) => {
            if (data.status == 0) {

              this.reviewClaimData = data.data;
              
              if (this.reviewClaimData.policy_type == "medical") {
                this.medical();
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

  medical() {
    // #medical step 0
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

    // #medical step 1
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
    this.formValues.push({
      question: 'Are you licensed to conduct healthcare services?',
      answers: this.reviewClaimData.health_care_service,
      type: 'radio'
    });
    if (this.reviewClaimData.description_business != "Other") {
      this.formValues.push({
        question: 'What is your professional occupation?',
        answers: this.reviewClaimData.description_business,
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'What is your professional occupation?',
        answers: this.reviewClaimData.description_business,
        answers1: this.reviewClaimData.description_business_other,
        type: 'dropdown'
      });
    }
    this.formValues.push({
      question: 'Are you required to be licensed to practice?',
      answers: this.reviewClaimData.licensed_service,
      type: 'radio'
    });
    this.formValues.push({
      question: 'Do you hold the required qualifications?',
      answers: this.reviewClaimData.required_qualifications,
      type: 'radio'
    });
    if (this.reviewClaimData.association_name_picklist != "Other") {
      this.formValues.push({
        question: 'Select your professional association',
        answers: this.reviewClaimData.association_name_picklist,
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'Select your professional association',
        answers: this.reviewClaimData.association_name_picklist,
        answers1: this.reviewClaimData.association_name_picklist_other,
        type: 'dropdown'
      });
    }
    //#medical step 2
    this.formValues.push({
      question: 'Do you trade under a business name??',
      answers: this.reviewClaimData.business_name,
      type: 'radio'
    });
    this.formValues.push({
      question: 'Trading name',
      answers: this.reviewClaimData.trading_name,
      type: 'text'
    });
    this.formValues.push({
      question: 'ABN',
      answers: this.reviewClaimData.abn_client,
      type: 'text'
    });

     if (!this._cS.checkOtherOption(this.reviewClaimData.employment_classification)) { 
      this.formValues.push({
        question: 'On what basis are you employed?',
        answers: this._cS.get_JSON_value(this.reviewClaimData.employment_classification),
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'On what basis are you employed?',
        answers: this._cS.get_JSON_value(this.reviewClaimData.employment_classification),
        answers1: this.reviewClaimData.employment_classification_other,
        type: 'dropdown'
      });
    }

    if (!this._cS.checkOtherOption(this.reviewClaimData.employment_status)) {
      this.formValues.push({
        question: 'What is your employment status?',
        answers:  this._cS.get_JSON_value(this.reviewClaimData.employment_status),
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'What is your employment status?',
        answers:  this._cS.get_JSON_value(this.reviewClaimData.employment_status),
        answers1: this.reviewClaimData.employment_status_other,
        type: 'dropdown'
      });
    }
    this.formValues.push({
      question: 'What is your length experience?',
      answers: this.reviewClaimData.years_experience,
      type: 'dropdown'
    });

    if (!this._cS.checkOtherOption(this.reviewClaimData.where_qualified)) {
      this.formValues.push({
        question: 'Where did you qualify?',
        answers: this._cS.get_JSON_value(this.reviewClaimData.where_qualified),
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'Where did you qualify?',
        answers: this._cS.get_JSON_value(this.reviewClaimData.where_qualified),
        answers1: this.reviewClaimData.where_qualified_other,
        type: 'dropdown'
    });
    }

   if (!this._cS.checkOtherOption(this.reviewClaimData.type_practioner)) {
      this.formValues.push({
        question: 'What type of practitioner are you?',
        answers: this._cS.get_JSON_value(this.reviewClaimData.type_practioner),
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'What type of practitioner are you?',
        answers: this._cS.get_JSON_value(this.reviewClaimData.type_practioner),
        answers1: this.reviewClaimData.type_practioner_other,
        type: 'dropdown'
      });
    }
    // #medical step 3      
    this.formValues.push({
      question: 'Has a professional overseeing body written to you?',
      answers: this.reviewClaimData.regulator_inform,
      type: 'radio'
    });

    this.formValues.push({
      question: 'Which organisation?',
      answers: this._cS.get_JSON_value(this.reviewClaimData.regulator),
      type: 'dropdown'
    });
    this.formValues.push({
      question: 'Date you received the letter',
      answers: this.reviewClaimData.date_received_notification,
      type: 'date'
    });
    this.formValues.push({
      question: 'Has the selected organisation asked you to respond?',
      answers: this.reviewClaimData.regulator_respond,
      type: 'radio'
    });
    this.formValues.push({
      question: 'Date you are required to respond',
      answers: this.reviewClaimData.date_respond,
      type: 'date'
    });
    this.formValues.push({
      question: 'Have you already responded?',
      answers: this.reviewClaimData.already_respond,
      type: 'radio'
    });
    this.formValues.push({
      question: 'Do you require legal assistance for response?',
      answers: this.reviewClaimData.require_legal_assistance,
      type: 'radio'
    });

    //#medical step 4
    this.formValues.push({
      question: 'Has a patient made a complaint of injury/damage?',
      answers: this.reviewClaimData.patient_complaint,
      type: 'radio'
    });
    this.formValues.push({
      question: 'Date you were notified of the complaint',
      answers: this.reviewClaimData.loss_date_discovery,
      type: 'date'
    });
    this.formValues.push({
      question: 'Is the complaint in writing?',
      answers: this.reviewClaimData.complaint_writing,
      type: 'radio'
    });
    this.formValues.push({
      question: 'First name',
      answers: this.reviewClaimData.tp_christian_patient,
      type: 'text'
    });
    this.formValues.push({
      question: 'Last name',
      answers: this.reviewClaimData.tp_name_patient,
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
    this.formValues.push({
      question: 'Age of patient',
      answers: this.reviewClaimData.age_patient,
      type: 'dropdown'
    });

    if (!this._cS.checkOtherOption(this.reviewClaimData.where_incident)) {  
      this.formValues.push({
        question: 'Where did you treat the patient?',
        answers: this._cS.get_JSON_value(this.reviewClaimData.where_incident),
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'Where did you treat the patient?',
        answers: this._cS.get_JSON_value(this.reviewClaimData.where_incident),
        answers1: this.reviewClaimData.where_incident_other,
        type: 'dropdown'
      });
    }
    this.formValues.push({
      question: 'How long have you treated the patient?',
      answers: this.reviewClaimData.treatment_period,
      type: 'dropdown'
    });
    this.formValues.push({
      question: 'What type of condition did the patient present with?',
      answers: this.reviewClaimData.patient_condition,
      type: 'text'
    });
    this.formValues.push({
      question: 'What was your treatment?',
      answers: this.reviewClaimData.what_treatment,
      type: 'text'
    });

   if (!this._cS.checkOtherOption(this.reviewClaimData.type_patient)) { 
      this.formValues.push({
        question: 'Type of patient',
        answers: this._cS.get_JSON_value(this.reviewClaimData.type_patient),
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'Type of patient',
        answers: this._cS.get_JSON_value(this.reviewClaimData.type_patient),
        answers1: this.reviewClaimData.type_patient_other,
        type: 'dropdown'
      });
    }
    if (this.reviewClaimData.sex_patient != "Other") {
      this.formValues.push({
        question: 'Sex of patient',
        answers: this.reviewClaimData.sex_patient,
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'Sex of patient',
        answers: this.reviewClaimData.sex_patient,
        answers1: this.reviewClaimData.sex_patient_other,
        type: 'dropdown'
      });
    }

    if (!this._cS.checkOtherOption(this.reviewClaimData.medical_malpractice)) {  
      this.formValues.push({
        question: 'What is the nature of the complaint?',
        answers: this._cS.get_JSON_value(this.reviewClaimData.medical_malpractice),
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'What is the nature of the complaint?',
        answers: this._cS.get_JSON_value(this.reviewClaimData.medical_malpractice),
        answers1: this.reviewClaimData.medical_malpractice_other,
        type: 'dropdown'
      });
    }
    this.formValues.push({
      question: 'Briefly outline the allegations against you',
      answers: this.reviewClaimData.reported_circumstances,
      type: 'text'
    });
    this.formValues.push({
      question: 'Is the inquiry related to a relationship with a patient?',
      answers: this.reviewClaimData.relationship_patient,
      type: 'radio'
    });
    this.formValues.push({
      question: 'Is the inquiry related to a dishonest or criminal act?',
      answers: this.reviewClaimData.related_criminal,
      type: 'radio'
    });
    this.formValues.push({
      question: 'Is the inquiry related to alcohol or substance abuse?',
      answers: this.reviewClaimData.alcohol_substance,
      type: 'radio'
    });
    this.formValues.push({
      question: 'Is the inquiry related to the care or treatment of a patient?',
      answers: this.reviewClaimData.care_treatment_patient,
      type: 'radio'
    });

    //#medical step 5
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
      question: 'Does the complaint refer to a personal injury?',
      answers: this.reviewClaimData.personal_injury,
      type: 'radio'
    });
    this.formValues.push({
      question: 'How did the injury occur?',
      answers: this.reviewClaimData.how_injury_occur,
      type: 'text'
    });
    this.formValues.push({
      question: 'Nature of injury',
      answers: this.reviewClaimData.nature_injury,
      type: 'text'
    });
    this.formValues.push({
      question: 'When did this occur?',
      answers: this.reviewClaimData.date_loss,
      type: 'date'
    });
    if (this.reviewClaimData.reported_loss != "Other") {
      this.formValues.push({
        question: 'What has been damaged?',
        answers: this.reviewClaimData.reported_loss,
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'What has been damaged?',
        answers: this.reviewClaimData.reported_loss,
        answers1: this.reviewClaimData.reported_loss_other,
        type: 'dropdown'
      });
    }
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
    this.formValues.push({
      question: 'How did the damage occur?',
      answers: this.reviewClaimData.how_damage_occur,
      type: 'text'
    });
    this.formValues.push({
      question: 'Do you know the cost of the damage?',
      answers: this.reviewClaimData.reported_gross_estimate,
      type: 'text'
    });

    //#medical step 6
    this.formValues.push({
      question: 'Have you been subjected to previous complaints in the past 3 years?',
      answers: this.reviewClaimData.previous_claims,
      type: 'radio'
    });
    this.formValues.push({
      question: 'Date of previous complaint',
      answers: this.reviewClaimData.previous_claim_date,
      type: 'date'
    });
    if (this.reviewClaimData.previous_type_claim != "Other") {
      this.formValues.push({
        question: 'Nature of previous complaint',
        answers: this.reviewClaimData.previous_type_claim,
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'Nature of previous complaint',
        answers: this.reviewClaimData.previous_type_claim,
        answers1: this.reviewClaimData.previous_type_claim_other,
        type: 'dropdown'
      });
    }
    this.formValues.push({
      question: 'Insurer',
      answers: this.reviewClaimData.previous_insurer,
      type: 'text'
    });
  }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}