import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonMockService } from '../common-mock.service';
import { BehaviorSubject } from 'rxjs';
declare var AddressFinder: any;
declare var $: any;


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  profile_form: FormGroup;
  user_Details: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private navCtrl: NavController,
    private router:Router,
    private _cS: CommonMockService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {

      this.profile_fb();
      this.get_user_Details()
     }

     ionViewWillEnter() {
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
    }

    profile_fb() {
    this.profile_form = this.formBuilder.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      phone_number: [null, Validators.required],
      mobile: [null, Validators.required],
      email: [null, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])],
      password: [null, Validators.required],
      confirmpassword: [null, Validators.required],

      street: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      postal_code: [null, Validators.required],
      country: [null, Validators.required],

      same_address: [null, Validators.required],

      tp_street: [null, Validators.required],
      tp_city: [null, Validators.required],
      tp_state: [null, Validators.required],
      tp_postal_code: [null, Validators.required],
      tp_country: [null, Validators.required],

      contact_option: [null, Validators.required]
  });
}

ngOnInit() {
  let script = document.createElement("script");
  script.src = "https://api.addressfinder.io/assets/v3/widget.js";
  script.async = true;
  document.body.appendChild(script);
  
  }

  riskAddress() {
    let widget = new AddressFinder.Widget(
      document.getElementById("address_line_1"),
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
        let state_territory = val.metaData.state_territory;
        let country1 = "Australia";
        
        var JSON = {
          street: address_line_1,
          city: mainadddate,
          postal_code: postcode,
          state: state_territory,
          country: country1
        }
        this.profile_form.patchValue(JSON);    
      }
    })
  }

  submit(){
    for (let v in this.profile_form.controls) {
      this.profile_form.controls[v].markAsTouched();
    }
    if (this.profile_form.valid) {

       /* Address Start */
       let StreetValue = null;
       let SuburbValue = null;
       let PostCodeValue = null;
       let StateValue = null;
       let CountryValue = null;
 
       if ((<HTMLInputElement>document.getElementById("address_line_1"))) {
         StreetValue = (<HTMLInputElement>document.getElementById("address_line_1")).value;
       }
       if ((<HTMLInputElement>document.getElementById("city"))) {
         SuburbValue = (<HTMLInputElement>document.getElementById("city")).value;
       }
       if ((<HTMLInputElement>document.getElementById("postcode"))) {
         PostCodeValue = (<HTMLInputElement>document.getElementById("postcode")).value;
       }
       if ((<HTMLInputElement>document.getElementById("state"))) {
         StateValue = (<HTMLInputElement>document.getElementById("state")).value;
       }
       if ((<HTMLInputElement>document.getElementById("country"))) {
         CountryValue = (<HTMLInputElement>document.getElementById("country")).value;
       }
       /* Address End */

      const body = {
        "firstname": this.profile_form.value.firstname,
        "lastname": this.profile_form.value.lastname,
        "phone_number": this.profile_form.value.phone_number,
        "mobile": this.profile_form.value.mobile,
        "email": this.profile_form.value.email,
        "password": this.profile_form.value.password,
        "confirmpassword": this.profile_form.value.confirmpassword,

        "street": StreetValue,
        "city": SuburbValue,
        "state": StateValue,
        "postal_code": PostCodeValue,
        "country": CountryValue,

        "same_address": this.profile_form.value.same_address,

        "tp_street": this.profile_form.value.tp_street,
        "tp_city": this.profile_form.value.tp_city,
        "tp_state": this.profile_form.value.tp_state,
        "tp_postal_code": this.profile_form.value.tp_postal_code,
        "tp_country": this.profile_form.value.tp_country,

        "sla": this.profile_form.value.contact_option

        // "name": this.profile_form.value.name,
        // "street": StreetValue,
        // "city": SuburbValue,
        // "zipcode": PostCodeValue,
        // "state": StateValue,
        // "country": CountryValue,
        // "telephone": this.profile_form.value.phone_number,
        // "email": this.profile_form.value.email_address,
        // "sla": this.profile_form.value.contact_option
      };
      var Tokenvalue = localStorage.getItem('keyToken');
     
      if (Tokenvalue) {
        this._cS.Display_Loader(true);
        this._cS.post_API(this._cS.URL_User_Details_post(), body)
          .subscribe((data: any) => {
            if (data.status == 0) {
              this._cS.presentToastWithOptions(data.message);
            } else {
              this._cS.presentToastWithOptions(data.message);
            }
          }, err => {
          });
      } 
    }
  }
  get_user_Details() {
    this._cS.Display_Loader(true);
    this._cS.get_API(this._cS.URL_User_Details_Get())
      .subscribe((data: any) => {
        if (data.status == 0) {
          this.profile_form.patchValue({
            id: data.data.userid,
            name: data.data.name,
            street: data.data.street,
            postal_code: data.data.zipcode,
            city: data.data.city,
            state: data.data.state,
            country: data.data.country,
            phone_number: data.data.telephone,
            email_address: data.data.email,
            contact_option: data.data.contact_option ? data.data.contact_option : 'Phone Call'
          });
          this.user_Details.next(data.data);
        } else {
          this._cS.logout();
          this.user_Details.next(null);
          // this._cS.Display_Toaster('error', data.message);
        }
        this._cS.Display_Loader(false);
      }, err => {
        this._cS.logout();
        this.user_Details.next(null);
        // this._cS.Display_Toaster('error', err.message);
        this._cS.Display_Loader(false);
      });
  };

  // get_user_Details() {
  //   this._cS.Display_Loader(true);
  //   this._cS.get_API(this._cS.URL_User_Details_Get())
  //     .subscribe((data: any) => {
  //       if (data.status == 0) {
  //         this.profile_form.patchValue({
  //           id: data.data.userid,
  //           name: data.data.name,
  //           street: data.data.street,
  //           postal_code: data.data.zipcode,
  //           city: data.data.city,
  //           state: data.data.state,
  //           phone_number: data.data.telephone,
  //           email_address: data.data.email,
  //           contact_option: data.data.contact_option ? data.data.contact_option : 'Phone Call'
  //         });
  //         this.user_Details.next(data.data);
  //       } else {
  //         this._cS.logout();
  //         this.user_Details.next(null);
  //         this._cS.Display_Toaster('error', data.message);
  //       }
  //       this._cS.Display_Loader(false);
  //     }, err => {
  //       this._cS.logout();
  //       this.user_Details.next(null);
  //       this._cS.Display_Toaster('error', err.message);
  //       this._cS.Display_Loader(false);
  //     });
  // };
    
  back(){
    this.navCtrl.pop();
  }

}