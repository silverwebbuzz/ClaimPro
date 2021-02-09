import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';
import { concat, BehaviorSubject } from 'rxjs';
declare var AddressFinder: any;
declare var $: any;


@Component({
  selector: 'app-property-step6',
  templateUrl: './property-step6.page.html',
  styleUrls: ['./property-step6.page.scss'],
})
export class PropertyStep6Page implements OnInit {

  property_form_step6: FormGroup;
  Claim_number: any;
  editClaimData: any;
  attach_receipt_image = [];
  attach_receipt_image_set: any = [];
  ImageServerURL: string;

  /* dropdown option Variable Start */
 name_bank: any;
  
  /* dropdown option Variable End */

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {
    this.ImageServerURL = this._cS.imageUrl();
    this.property_step6_fb();
    this.formControlValueChanged();
    this.setClaimData();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  property_step6_fb() {
    this.property_form_step6 = this.formBuilder.group({
      emergency_works_needed: [null, Validators.required],
      works_required: [null],
      works_required_other: [null],
      fit_for_use: [null],
      works_arranged: [null],
      works_arranged_other: [null],
      contractor_name: [null],
      contractor_street: [null],
      contractor_suburb: [null],
      contractor_post_code: [null],
      cost_paid: [null],
      costs_reimbursed: [null],
      bank_account_name: [null],
      name_bank: [null],
      name_bank_other: [null],
      bank_branch: [null],
      bank_bsb: [null],
      bank_account_number: [null],
    });
  }

  formControlValueChanged() {

    this.property_form_step6.get('emergency_works_needed')
      .valueChanges.subscribe(
        (val: any) => {
          const works_required = this.property_form_step6.get('works_required');
          const fit_for_use = this.property_form_step6.get('fit_for_use');
          const works_arranged = this.property_form_step6.get('works_arranged');
          const cost_paid = this.property_form_step6.get('cost_paid');

          works_required.patchValue(null);
          works_required.clearValidators();
          works_required.updateValueAndValidity();

          fit_for_use.patchValue(null);
          fit_for_use.clearValidators();
          fit_for_use.updateValueAndValidity();

          works_arranged.patchValue(null);
          works_arranged.clearValidators();
          works_arranged.updateValueAndValidity();

          cost_paid.patchValue(null);
          cost_paid.clearValidators();
          cost_paid.updateValueAndValidity();

          if (val == "true") {
            works_required.setValidators([Validators.required]);
            fit_for_use.setValidators([Validators.required]);
            works_arranged.setValidators([Validators.required]);

            cost_paid.setValidators([Validators.required]);
          }
        });
    this.property_form_step6.get('works_required')
      .valueChanges.subscribe(
        (val: any) => {
          const works_required_other = this.property_form_step6.get('works_required_other');
          if (val == "Other") {
            works_required_other.setValidators([Validators.required]);
          } else {
            works_required_other.patchValue(null);
            works_required_other.clearValidators();
            works_required_other.updateValueAndValidity();
          }
        });
    this.property_form_step6.get('works_arranged')
      .valueChanges.subscribe(
        (val: any) => {
          const works_arranged_other = this.property_form_step6.get('works_arranged_other');
          if (val == "Other") {
            works_arranged_other.setValidators([Validators.required]);

          } else {
            works_arranged_other.patchValue(null);
            works_arranged_other.clearValidators();
            works_arranged_other.updateValueAndValidity();
          }
        });
    this.property_form_step6.get('works_arranged')
      .valueChanges.subscribe(
        (val: any) => {
          const contractor_name = this.property_form_step6.get('contractor_name');
          const contractor_street = this.property_form_step6.get('contractor_street');
          const contractor_suburb = this.property_form_step6.get('contractor_suburb');
          const contractor_post_code = this.property_form_step6.get('contractor_post_code');

          contractor_name.patchValue(null);
          contractor_name.clearValidators();
          contractor_name.updateValueAndValidity();

          contractor_street.patchValue(null);
          contractor_street.clearValidators();
          contractor_street.updateValueAndValidity();

          contractor_suburb.patchValue(null);
          contractor_suburb.clearValidators();
          contractor_suburb.updateValueAndValidity();

          contractor_post_code.patchValue(null);
          contractor_post_code.clearValidators();
          contractor_post_code.updateValueAndValidity();

          if (val == "Reinstallation" || val == "Repair" || val == "Rewiring" || val == "Other") {
            contractor_name.setValidators([Validators.required]);
            contractor_street.setValidators([Validators.required]);
            contractor_suburb.setValidators([Validators.required]);
            contractor_post_code.setValidators([Validators.required]);
          }
        });
    this.property_form_step6.get('cost_paid')
      .valueChanges.subscribe(
        (val: any) => {
          const costs_reimbursed = this.property_form_step6.get('costs_reimbursed');

          costs_reimbursed.patchValue(null);
          costs_reimbursed.clearValidators();
          costs_reimbursed.updateValueAndValidity();

          if (val == "true") {
            costs_reimbursed.setValidators([Validators.required]);
          }
        });
    this.property_form_step6.get('costs_reimbursed')
      .valueChanges.subscribe(
        (val: any) => {
          const bank_account_name = this.property_form_step6.get('bank_account_name');
          const name_bank = this.property_form_step6.get('name_bank');
          const bank_branch = this.property_form_step6.get('bank_branch');
          const bank_bsb = this.property_form_step6.get('bank_bsb');
          const bank_account_number = this.property_form_step6.get('bank_account_number');

          bank_account_name.patchValue(null);
          bank_account_name.clearValidators();
          bank_account_name.updateValueAndValidity();

          name_bank.patchValue(null);
          name_bank.clearValidators();
          name_bank.updateValueAndValidity();

          bank_branch.patchValue(null);
          bank_branch.clearValidators();
          bank_branch.updateValueAndValidity();

          bank_bsb.patchValue(null);
          bank_bsb.clearValidators();
          bank_bsb.updateValueAndValidity();

          bank_account_number.patchValue(null);
          bank_account_number.clearValidators();
          bank_account_number.updateValueAndValidity();

          if (val == "true") {
            bank_account_name.setValidators([Validators.required]);
            name_bank.setValidators([Validators.required]);
            bank_branch.setValidators([Validators.required]);
            bank_bsb.setValidators([Validators.required]);
            bank_account_number.setValidators([Validators.required]);

          }
        });
    this.property_form_step6.get('name_bank')
      .valueChanges.subscribe(
        (val: any) => {
          const name_bank_other = this.property_form_step6.get('name_bank_other');
          if (val == '1039') {
            name_bank_other.setValidators([Validators.required]);
          } else {
            name_bank_other.patchValue(null);
            name_bank_other.clearValidators();
            name_bank_other.updateValueAndValidity();
          }
        });
  }

  propertyStep6Next() {
    for (let v in this.property_form_step6.controls) {
      this.property_form_step6.controls[v].markAsTouched();
    }
    if (this.property_form_step6.valid) {

      /* constractorAddress Start */
      let constractorStreetValue = null;
      let constractorSuburbValue = null;
      let constactorPostCodeValue = null;

      if ((<HTMLInputElement>document.getElementById("contractor_street"))) {
        constractorStreetValue = (<HTMLInputElement>document.getElementById("contractor_street")).value;
      }
      if ((<HTMLInputElement>document.getElementById("contractor_street"))) {
        constractorSuburbValue = (<HTMLInputElement>document.getElementById("contractor_street")).value;
      }
      if ((<HTMLInputElement>document.getElementById("contractor_post_code"))) {
        constactorPostCodeValue = (<HTMLInputElement>document.getElementById("contractor_post_code")).value;
      }
      /* constractorAddres End */
      const step6 = {
        "step": 'step6',
        "ClaimNumber": localStorage.getItem('PropertyClaimNumber'),
        "emergency_works_needed": this.property_form_step6.value.emergency_works_needed,
        "works_required": this.property_form_step6.value.works_required,
        "works_required_other": this.property_form_step6.value.works_required_other,
        "fit_for_use": this.property_form_step6.value.fit_for_use,
        "works_arranged": this.property_form_step6.value.works_arranged,
        "works_arranged_other": this.property_form_step6.value.works_arranged_other,
        "contractor_name": this.property_form_step6.value.contractor_name,
        "contractor_street": constractorStreetValue,
        "contractor_suburb": constractorSuburbValue,
        "contractor_post_code": constactorPostCodeValue,
        "cost_paid": this.property_form_step6.value.cost_paid,
        "costs_reimbursed": this.property_form_step6.value.costs_reimbursed,
        "bank_account_name": this.property_form_step6.value.bank_account_name,
        "name_bank": this.property_form_step6.value.name_bank,
        "name_bank_other": this.property_form_step6.value.name_bank_other,
        "bank_branch": this.property_form_step6.value.bank_branch,
        "bank_bsb": this.property_form_step6.value.bank_bsb,
        "bank_account_number": this.property_form_step6.value.bank_account_number,
        "attach_receipt": this.attach_receipt_image_set,
      };
      this._cS.put_API(this._cS.URL_Property_Claim_Post(), step6)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.attach_receipt_image_set = [];
            this.setClaimData();
            this.router.navigate(['/property-step7']);

          } else {
          }
        }, err => {
        });
    }
  }

  deleteImage(img, position) {
    this.attach_receipt_image.splice(position, 1);
    if (img.val) {
      var details = {
        ClaimNumber: localStorage.getItem('PropertyClaimNumber'),
        image_name: img.val,
        image_type: 'attach_receipt',
      };
      this._cS.post_API(this._cS.URL_image_delet(), details)
        .subscribe((data: any) => {
          console.log('data', data);
          if (data.status == 0) {
            var dynamicI = this.dynamicImages(data.data, 'attach_receipt/');
            this.attach_receipt_image = dynamicI;
            this._cS.presentToastWithOptions(data.message);
          } else {
            this._cS.presentToastWithOptions(data.message);
          }
        });
    }

  }

  fileUpload(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      var extension = event.target.files[0].name.split('.').pop().toLowerCase();
      var fileName = event.target.files[0].name;
      var fileTypes = ['jpg', 'jpeg', 'png', 'gif']

      let formData = new FormData();
      formData.append('file', event.target.files[0]);
      formData.append("image_type", "attach_receipt");
      formData.append("claimNumber", localStorage.getItem('PropertyClaimNumber'));
      this._cS.ImageUpload(formData).subscribe(val => {
        reader.onload = (event: any) => {
          let json = {
            fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
            path: event.target.result,
            name: val.data[0].file_name,
            val: undefined
          }
          this.attach_receipt_image.push(json);
        }
        reader.readAsDataURL(event.target.files[0]);
        this.attach_receipt_image_set.push(val.data[0].file_name);
        if (val) {
          this._cS.presentToastWithOptions(val.message);
        }
        else {
          this._cS.presentToastWithOptions(val.message);
        }

      })
    }
  }
  dynamicImages(array, path) {
    let imageArray = array.split(',');
    var fileTypes = ['jpg', 'jpeg', 'png', 'gif']
    var json = [];
    imageArray.forEach((val) => {
      var fileArray = val.split('/');
      var extension = fileArray[1].split('.').pop().toLowerCase();
      var fileName = fileArray[1];
      console.log(fileArray[1].indexOf(extension) > -1);
      json.push({
        fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
        path: this.ImageServerURL + path + val,
        name: fileName,
        val: val
      })
    })
    return json;
  }

  contractorAddress() {
    let widget = new AddressFinder.Widget(
      document.getElementById("contractor_street"),
      "PVW639JF4ET8ALGDHNKB",
      "AU",
      {}
    );
    let returnResult = new BehaviorSubject(null);
    widget.on("result:select", function (fullAddress, metaData) {
      var selected = new AddressFinder.NZSelectedAddress(fullAddress, metaData);
      let SpaceCount = selected.originalAddressLines[1].split(" ").length;
      let setnum = SpaceCount - 2;
      let mainadddate = selected.originalAddressLines[1].split(" ").splice(-SpaceCount);
      let adddate = selected.originalAddressLines[1].split(" ").splice(setnum);
      this.addstate = adddate[0];
      this.addpincode = adddate[1];

      const index: number = mainadddate.indexOf(this.addstate);
      if (index !== -1) {
        mainadddate.splice(index, 1);
      }
      const index2: number = mainadddate.indexOf(this.addpincode);
      if (index2 !== -1) {
        mainadddate.splice(index2, 2);
      }
      let returnJSON = {
        mainadddate: mainadddate,
        metaData: metaData
      }
      returnResult.next(returnJSON);
    });
    returnResult.subscribe(val => {
      if (val) {
        let address_line_1 = val.metaData.address_line_1;
        let mainadddate = val.mainadddate.join(' ');
        let postcode = val.metaData.postcode;
        this.property_form_step6.patchValue({ contractor_street: address_line_1, contractor_suburb: mainadddate, contractor_post_code: postcode }, { onlySelf: true });
      }
    })
  }

  setClaimData() {
    var claimNumber = localStorage.getItem('PropertyClaimNumber');
    if (claimNumber) {
      this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
        .subscribe((data: any) => {
          if (data.status == 0) {
            console.log("editdate", data);
            this.editClaimData = data.data;

            if(this.editClaimData.name_bank){
              var name_bank = JSON.parse(this.editClaimData.name_bank);
              for (var name_bank_set in name_bank) {
              }
            }
            else{
              name_bank_set = null;
            }

            this.property_form_step6.setValue({
              emergency_works_needed: this.editClaimData.emergency_works_needed,
              works_required: this.editClaimData.works_required,
              works_required_other: this.editClaimData.works_required_other,
              fit_for_use: this.editClaimData.fit_for_use,
              works_arranged: this.editClaimData.works_arranged,
              works_arranged_other: this.editClaimData.works_arranged_other,
              contractor_name: this.editClaimData.contractor_name,
              contractor_street: this.editClaimData.contractor_street,
              contractor_suburb: this.editClaimData.contractor_suburb,
              contractor_post_code: this.editClaimData.contractor_post_code,
              cost_paid: this.editClaimData.cost_paid,
              costs_reimbursed: this.editClaimData.costs_reimbursed,
              bank_account_name: this.editClaimData.bank_account_name,
              name_bank: name_bank_set,
              name_bank_other: this.editClaimData.name_bank_other,
              bank_branch: this.editClaimData.bank_branch,
              bank_bsb: this.editClaimData.bank_bsb,
              bank_account_number: this.editClaimData.bank_account_number,
            })
            if (this.editClaimData.attach_receipt) {
              var dynamicI = (this.dynamicImages(this.editClaimData.attach_receipt, '/attach_receipt/'));
              this.attach_receipt_image = dynamicI;
            }
          }
        });
    }
  }


  ngOnInit() {
    let script = document.createElement("script");
    script.src = "https://api.addressfinder.io/assets/v3/widget.js";
    script.async = true;
    document.body.appendChild(script);

    //dropdown value set
    /*  name bank */
    this._cS.getoptionvalue_API(6)
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.name_bank = data.data;
        }
      });
  }

  back() {
    this.navCtrl.pop();
  }

}