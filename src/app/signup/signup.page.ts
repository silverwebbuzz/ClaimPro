import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonMockService } from '../common-mock.service';
import { BehaviorSubject } from 'rxjs';
declare var AddressFinder: any;
declare var $: any;


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  registration_form: FormGroup;
  lst_states: any = [];
  addcity: any;
  addstate: any;
  addpincode: any;


  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar,
    private menu: MenuController) {

    this.registration_fb();
  }

  ionViewWillEnter(){
    this.menu.enable(false);

    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  registration_fb() {
    this.registration_form = this.formBuilder.group({
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
          this.registration_form.patchValue(JSON);    
        }
      })
    }

  submitRegister() {
    console.log('type:', this.registration_form.value.usertype);
    for (let v in this.registration_form.controls) {
      this.registration_form.controls[v].markAsTouched();
    }
    if (this.registration_form.valid) {
      this._cS.presentLoading();
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
        "firstname": this.registration_form.value.firstname,
        "lastname": this.registration_form.value.lastname,
        "phone_number": this.registration_form.value.phone_number,
        "mobile": this.registration_form.value.mobile,
        "email": this.registration_form.value.email,
        "password": this.registration_form.value.password,
        "confirmpassword": this.registration_form.value.confirmpassword,

        "street": StreetValue,
        "city": SuburbValue,
        "state": StateValue,
        "postal_code": PostCodeValue,
        "country": CountryValue,

        "same_address": this.registration_form.value.same_address,

        "tp_street": this.registration_form.value.tp_street,
        "tp_city": this.registration_form.value.tp_city,
        "tp_state": this.registration_form.value.tp_state,
        "tp_postal_code": this.registration_form.value.tp_postal_code,
        "tp_country": this.registration_form.value.tp_country,

        "sla": this.registration_form.value.contact_option
      };  
        this._cS.post_API_withOutToken(this._cS.URL_User_Create_post(), body)
          .subscribe((data: any) => {
            if(this._cS.isLoading){
              this._cS.dismissLoading();
            }
            if (data.status == 0) {
             
              this._cS.presentToastWithOptions(data.message);
              this._cS._router.navigate(['/signin']);
            } else {
              this._cS.presentToastWithOptions(data.message);
            }
          }, err => {
            if (this._cS.isLoading) {
              this._cS.dismissLoading();
            }
          });
      
    }
  }

  back() {
    this.navCtrl.pop();
  }

}
