import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';
declare var AddressFinder: any;
declare var $: any;
import { concat, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-windscreen-glass',
  templateUrl: './windscreen-glass.page.html',
  styleUrls: ['./windscreen-glass.page.scss'],
})
export class WindscreenGlassPage implements OnInit {

  windscreen_glass_form: FormGroup;
  editClaimData: any;
  attach_receipt_image = [];
  attach_receipt_image_set: any = [];
  attach_invoice_image = [];
  attach_invoice_image_set: any = [];
  ImageServerURL: string;


  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {
      this.ImageServerURL = this._cS.imageUrl();
    this.windscreen_glass_fb();
    this.formControlValueChanged();
    this.setClaimData();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  windscreen_glass_fb() {
    this.windscreen_glass_form = this.formBuilder.group({
      vehicle_how_did_occur: [null, Validators.required],
      vehicle_how_did_occur_other: [null],
      has_glass_repaired: [null, Validators.required],
      contractor_name: [null],
      contractor_street: [null],
      contractor_suburb: [null],
      contractor_post_code: [null],
      repair_cost: [null],
      cost_paid: [null],
    });
  }

  formControlValueChanged() {
    this.windscreen_glass_form.get('has_glass_repaired')
    .valueChanges.subscribe(
      (val: any) => {
        const contractor_name = this.windscreen_glass_form.get('contractor_name');
        const contractor_street = this.windscreen_glass_form.get('contractor_street');
        const contractor_suburb = this.windscreen_glass_form.get('contractor_suburb');
        const contractor_post_code = this.windscreen_glass_form.get('contractor_post_code');
        const repair_cost = this.windscreen_glass_form.get('repair_cost');
        const cost_paid = this.windscreen_glass_form.get('cost_paid');
        if (val == "true") {
          contractor_name.setValidators([Validators.required]);
          contractor_street.setValidators([Validators.required]);
          contractor_suburb.setValidators([Validators.required]);
          contractor_post_code.setValidators([Validators.required]);
          repair_cost.setValidators([Validators.required]);
          cost_paid.setValidators([Validators.required]);
        } else {
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

          repair_cost.patchValue(null);
          repair_cost.clearValidators();
          repair_cost.updateValueAndValidity();

          cost_paid.patchValue(null);
          cost_paid.clearValidators();
          cost_paid.updateValueAndValidity();
        }

      });

  }

  windscreenGlassNext() {
    for (let v in this.windscreen_glass_form.controls) {
      this.windscreen_glass_form.controls[v].markAsTouched();
    }
    if (this.windscreen_glass_form.valid) {
      /* contractorAddres Start */
      let ContractorStreetValue = null;
      let ContractorSuburbValue = null;
      let ContractorPostCodeValue = null;
      if ((<HTMLInputElement>document.getElementById("contractor_street"))) {
        ContractorStreetValue = (<HTMLInputElement>document.getElementById("contractor_street")).value;
      }
      if ((<HTMLInputElement>document.getElementById("contractor_suburb"))) {
        ContractorSuburbValue = (<HTMLInputElement>document.getElementById("contractor_suburb")).value;
      }
      if ((<HTMLInputElement>document.getElementById("contractor_post_code"))) {
        ContractorPostCodeValue = (<HTMLInputElement>document.getElementById("contractor_post_code")).value;
      }
      /* contractorAddres End */

      const step4 = {
        "step": 'step4',
        "ClaimNumber": localStorage.getItem('ClaimNumber'),
        "vehicle_how_did_occur": this.windscreen_glass_form.value.vehicle_how_did_occur,
        "vehicle_how_did_occur_other": this.windscreen_glass_form.value.vehicle_how_did_occur_other,
        "has_glass_repaired": this.windscreen_glass_form.value.has_glass_repaired,
        "contractor_name": this.windscreen_glass_form.value.contractor_name,
        "contractor_street": ContractorStreetValue,
        "contractor_suburb": ContractorSuburbValue,
        "contractor_post_code": ContractorPostCodeValue,
        "repair_cost": this.windscreen_glass_form.value.repair_cost,
        "cost_paid": this.windscreen_glass_form.value.cost_paid,
        "attach_receipt": this.attach_receipt_image_set,
        "attach_invoice": this.attach_invoice_image_set,
      };
      this._cS.put_API(this._cS.URL_Vehicle_Claim_Post(), step4)
        .subscribe((data: any) => {
          if (data.status == 0) {
            this.attach_receipt_image_set = [];
            this.attach_invoice_image_set = [];
            this.setClaimData();
            this.router.navigate(['/vehicle-step5']);

          } else {
          }
        }, err => {
        });
    }
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
        
        var JSON = {
          contractor_street: address_line_1,
          contractor_suburb: mainadddate,
          contractor_post_code: postcode,
        }
        this.windscreen_glass_form.patchValue(JSON);
      }
       
  
    })
  }

  setClaimData() {
    var claimNumber = localStorage.getItem('ClaimNumber');
    if (claimNumber) {
      this._cS.get_API_Data(this._cS.URL_Ref_Claim_data(), claimNumber)
        .subscribe((data: any) => {
          if (data.status == 0) {
            console.log("editdate", data);
            this.editClaimData = data.data;

            this.windscreen_glass_form.setValue({
              vehicle_how_did_occur: this.editClaimData.vehicle_how_did_occur,
              vehicle_how_did_occur_other: this.editClaimData.vehicle_how_did_occur_other,
              has_glass_repaired: this.editClaimData.has_glass_repaired,
              contractor_name: this.editClaimData.contractor_name,
              contractor_street: this.editClaimData.contractor_street,
              contractor_suburb: this.editClaimData.contractor_suburb,
              contractor_post_code: this.editClaimData.contractor_post_code,
              repair_cost: this.editClaimData.repair_cost,
              cost_paid: this.editClaimData.cost_paid,
            })
            if (this.editClaimData.attach_receipt) {
              var dynamicI = (this.dynamicImages(this.editClaimData.attach_receipt, '/attach_receipt/'));
              this.attach_receipt_image = dynamicI;
            }
            if (this.editClaimData.attach_invoice) {
              var dynamicI = (this.dynamicImages(this.editClaimData.attach_invoice, '/attach_invoice/'));
              this.attach_invoice_image = dynamicI;
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
  }

  delete_attach_receipt(img, position) {
    this.attach_receipt_image.splice(position, 1);
    if (img.val) {
      var details = {
        ClaimNumber: localStorage.getItem('ClaimNumber'),
        image_name: img.val,
        image_type: 'attach_receipt',
      };
      this._cS.post_API(this._cS.URL_image_delet(), details)
        .subscribe((data: any) => {
          console.log('data', data);
          if (data.status == 0) {
            var dynamicI = this.dynamicImages(data.data, 'attach_receipt/');
            this.attach_receipt_image = dynamicI;
            //this._cS.Display_Toaster('success', 'Image successfully deleted.');
          } else {
            //this._cS.Display_Toaster('error', data.message);
          }
        });
    }

  }

  attach_receipt(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      var extension = event.target.files[0].name.split('.').pop().toLowerCase();
      var fileName = event.target.files[0].name;
      var fileTypes = ['jpg', 'jpeg', 'png', 'gif']

      let formData = new FormData();
      formData.append('file', event.target.files[0]);
      formData.append("image_type", "attach_receipt");
      formData.append("claimNumber", localStorage.getItem('ClaimNumber'));
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

      })
    }
  }

  delete_attach_invoice(img, position) {
    this.attach_invoice_image.splice(position, 1);
    if (img.val) {
      var details = {
        ClaimNumber: localStorage.getItem('ClaimNumber'),
        image_name: img.val,
        image_type: 'attach_invoice',
      };
      this._cS.post_API(this._cS.URL_image_delet(), details)
        .subscribe((data: any) => {
          console.log('data', data);
          if (data.status == 0) {
            var dynamicI = this.dynamicImages(data.data, 'attach_invoice/');
            this.attach_invoice_image = dynamicI;
            //this._cS.Display_Toaster('success', 'Image successfully deleted.');
          } else {
            //this._cS.Display_Toaster('error', data.message);
          }
        });
    }

  }

  attach_invoice(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      var extension = event.target.files[0].name.split('.').pop().toLowerCase();
      var fileName = event.target.files[0].name;
      var fileTypes = ['jpg', 'jpeg', 'png', 'gif']

      let formData = new FormData();
      formData.append('file', event.target.files[0]);
      formData.append("image_type", "attach_invoice");
      formData.append("claimNumber", localStorage.getItem('ClaimNumber'));
      this._cS.ImageUpload(formData).subscribe(val => {
        reader.onload = (event: any) => {
          let json = {
            fileIcon: fileTypes.indexOf(extension) > -1 ? false : true,
            path: event.target.result,
            name: val.data[0].file_name,
            val: undefined
          }
          this.attach_invoice_image.push(json);
        }
        reader.readAsDataURL(event.target.files[0]);
        this.attach_invoice_image_set.push(val.data[0].file_name);

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


 

  // next() {
  //   this.router.navigate(['/vehicle-step5']);
  // }

  back() {
    this.navCtrl.pop();
  }

}