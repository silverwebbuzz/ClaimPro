import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommonMockService } from 'src/app/common-mock.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-review-other',
  templateUrl: './review-other.page.html',
  styleUrls: ['./review-other.page.scss'],
})
export class ReviewOtherPage implements OnInit {

  reviewClaimData: any;
  claimNumber: any;
  Claim_number: any;
  data: any = [];
  notAvailable: any;
  formValues: any = [];

  constructor(private modalCtrl: ModalController,
     public _cS: CommonMockService,
     private route: ActivatedRoute,
     private statusBar: StatusBar,
     private router: Router) { 
    
      this.data = "other";
     
      if (this.data == "other") {
        this.claimNumber = localStorage.getItem('OtherClaimNumber');
      }
     
      if (this.claimNumber) {
        this.notAvailable = 1;
        this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), this.claimNumber)
          .subscribe((data: any) => {
            if (data.status == 0) {

              this.reviewClaimData = data.data;
              
              if (this.reviewClaimData.policy_type == "other") {
                this.other();
              }
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

  ngOnInit() {
  }
  other() {
    // #other step 0
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

    // #other step 1
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
      question: 'What does the loss or damage refer to?',
      answers: this.reviewClaimData.reported_loss,
      type: 'text'
    });

    // #other step 2     
    if (!this._cS.checkOtherOption(this.reviewClaimData.where_loss_damage)) {  
      this.formValues.push({
        question: 'Where did this occur?',
        answers:  this._cS.get_JSON_value(this.reviewClaimData.where_loss_damage),
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
    this.formValues.push({
      question: 'How did this occur?',
      answers: this.reviewClaimData.reported_circumstances,
      type: 'text'
    });
    this.formValues.push({
      question: 'When did the loss/damage occur?',
      answers: this.reviewClaimData.date_loss,
      type: 'date'
    });
    this.formValues.push({
      question: 'What time did this occur?',
      answers: this.reviewClaimData.time_loss,
      type: 'time'
    });
    this.formValues.push({
      question: 'How did this occur?',
      answers: this.reviewClaimData.how_did_this_occur,
      type: 'dropdown'
    });
    // step 3       
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  // submitClaim() {
  //   var body = {
  //     step: 'step4',
  //     ClaimNumber: localStorage.getItem('OtherClaimNumber'),
  //   };
  //   this._cS.put_API(this._cS.URL_Other_Claim_Post(), body)
  //     .subscribe((data: any) => {
  //       if (data.status == 0) {
  //         this.Claim_number = localStorage.getItem('OtherClaimNumber'),
  //         localStorage.removeItem('OtherClaimNumber');
  //         this.router.navigate(['/step5'],{queryParams: {step: this.Claim_number}});
  //         } else {
  //       }
  //     }, err => {
  //     });
  // };

}
