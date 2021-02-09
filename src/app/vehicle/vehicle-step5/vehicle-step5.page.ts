import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-vehicle-step5',
  templateUrl: './vehicle-step5.page.html',
  styleUrls: ['./vehicle-step5.page.scss'],
})
export class VehicleStep5Page implements OnInit {

  vehicle_form_step5: FormGroup;

  damage_type:any = '';

  constructor(private navCtrl: NavController,
    private router:Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) { 
      
      this.damage_type = localStorage.getItem('damage_type');
      this.vehicle_step5_fb();
    }

    ionViewWillEnter() {
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
    }

    vehicle_step5_fb() {
      this.vehicle_form_step5 = this.formBuilder.group({
        someOne_driving: [null, Validators.required],
        name_of_driver: [null, Validators.required],
        street: [null, Validators.required],
        town: [null, Validators.required],
        postal_code: [null, Validators.required],
        date_of_birth: [null, Validators.required],
        license_no: [null, Validators.compose([Validators.maxLength(25), Validators.required])],
        drugs_24: [null, Validators.required],
        what_consume: [null, Validators.required],
        blood_test_result: [null, Validators.required],
        alcohol_test_result: [null, Validators.required],
        briefly_tell_Us: [null, Validators.compose([Validators.maxLength(400), Validators.required])]
      });
    }

    vehicleStep5Next(){
      for (let v in this.vehicle_form_step5.controls) {
        this.vehicle_form_step5.controls[v].markAsTouched();
      }
      if (this.vehicle_form_step5.valid) {
        const body = {
          "someOne_driving" : this.vehicle_form_step5.value.someOne_driving,
          "name_of_driver" : this.vehicle_form_step5.value.name_of_driver,
          "street" : this.vehicle_form_step5.value.street,
          "town" : this.vehicle_form_step5.value.town,
          "postal_code" : this.vehicle_form_step5.value.postal_code,
          "date_of_birth" : this.vehicle_form_step5.value.date_of_birth,
          "license_no" : this.vehicle_form_step5.value.license_no,
          "drugs_24" : this.vehicle_form_step5.value.drugs_24,
          "what_consume" : this.vehicle_form_step5.value.what_consume,
          "blood_test_result" : this.vehicle_form_step5.value.blood_test_result,
          "alcohol_test_result" : this.vehicle_form_step5.value.alcohol_test_result,
          "briefly_tell_Us" : this.vehicle_form_step5.value.briefly_tell_Us
        };
      }
    }

    ngOnInit() {
    }
    
    back(){
      this.navCtrl.pop();
    }

}