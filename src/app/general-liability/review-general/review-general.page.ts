import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonMockService } from 'src/app/common-mock.service';


@Component({
  selector: 'app-review-general',
  templateUrl: './review-general.page.html',
  styleUrls: ['./review-general.page.scss'],
})
export class ReviewGeneralPage implements OnInit {

  reviewClaimData: any;
  claimNumber: any;
  data: any = [];
  notAvailable: any;
  formValues: any = [];

  constructor(private modalCtrl: ModalController,
     public _cS: CommonMockService,
     private statusBar: StatusBar) { 
    
      this.data = "general";
     
      if (this.data == "general") {
        this.claimNumber = localStorage.getItem('GeneralClaimNumber');
      }
     
      if (this.claimNumber) {
        this.notAvailable = 1;
        // this.spinner.show();
        this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), this.claimNumber)
          .subscribe((data: any) => {
            if (data.status == 0) {

              this.reviewClaimData = data.data;
              
              if (this.reviewClaimData.policy_type == "general") {
                this.general();
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

  general() {
    // #general step 0
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

    // #general step 1
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
    this.formValues.push({
      question: 'Do you trade under a business name?',
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
    if (this.reviewClaimData.employee_basis != "Other") {
      this.formValues.push({
        question: 'On what basis are you employed?',
        answers: this.reviewClaimData.employee_basis,
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'On what basis are you employed?',
        answers: this.reviewClaimData.employee_basis,
        answers1: this.reviewClaimData.employee_basis_other,
        type: 'dropdown'
      });
    }
    if (this.reviewClaimData.employment_status2 != "Other") {
      this.formValues.push({
        question: 'What is your employment status?',
        answers: this.reviewClaimData.employment_status2,
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'What is your employment status?',
        answers: this.reviewClaimData.employment_status2,
        answers1: this.reviewClaimData.employment_status2_other,
        type: 'dropdown'
      });
    }
    this.formValues.push({
      question: 'What is your length experience?',
      answers: this.reviewClaimData.length_experience,
      type: 'dropdown'
    });

    // #general step 2    

    this.formValues.push({
      question: 'Briefly outline the allegations against you',
      answers: this.reviewClaimData.reported_circumstances,
      type: 'text'
    });
    this.formValues.push({
      question: 'Is it alleged you were at fault?',
      answers: this.reviewClaimData.alleged_you_fault,
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
      question: 'When did this occur?',
      answers: this.reviewClaimData.date_loss,
      type: 'date'
    });
    this.formValues.push({
      question: 'What time did this occur?',
      answers: this.reviewClaimData.time_loss,
      type: 'time'
    });
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
    if (this.reviewClaimData.how_aware_complaint != "Other") {
      this.formValues.push({
        question: 'How did you become aware of the complaint',
        answers: this.reviewClaimData.how_aware_complaint,
        type: 'dropdown'
      });
    } else {
      this.formValues.push({
        question: 'How did you become aware of the complaint',
        answers: this.reviewClaimData.how_aware_complaint,
        answers1: this.reviewClaimData.how_aware_complaint_other,
        type: 'dropdown'
      });
    }

    // #general step 3
    this.formValues.push({
      question: 'First name',
      answers: this.reviewClaimData.tp_christian_claimant,
      type: 'text'
    });
    this.formValues.push({
      question: 'Last name',
      answers: this.reviewClaimData.tp_name_claimant,
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
      question: 'Does the claimant have legal representation?',
      answers: this.reviewClaimData.tp_legal_represented,
      type: 'radio'
    });
    this.formValues.push({
      question: 'Name of firm',
      answers: this.reviewClaimData.tp_name_firm,
      type: 'text'
    });
    this.formValues.push({
      question: 'Does this notification relate to injury to a third party?',
      answers: this.reviewClaimData.related_injury,
      type: 'radio'
    });
    this.formValues.push({
      question: 'Nature of injury',
      answers: this.reviewClaimData.nature_injury,
      type: 'text'
    });
    this.formValues.push({
      question: 'Personal injury',
      answers: this.reviewClaimData.personal_injury,
      type: 'radio'
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
    this.formValues.push({
      question: 'What was your business function (contract) when the incident occurred?',
      answers: this.reviewClaimData.business_contract,
      type: 'text'
    });
    this.formValues.push({
      question: 'What was the value of the work you were performing ($)?',
      answers: this.reviewClaimData.contract_value,
      type: 'text'
    });
    // #general step 4
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
    // #general end            
  }
  
  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}