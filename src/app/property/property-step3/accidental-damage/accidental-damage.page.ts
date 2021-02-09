import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accidental-damage',
  templateUrl: './accidental-damage.page.html',
  styleUrls: ['./accidental-damage.page.scss'],
})
export class AccidentalDamagePage implements OnInit {

  accidental_form: FormGroup;

  // property_damage_type: any = '';

  constructor(private navCtrl: NavController,
    private router:Router,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) { 

      //this.property_damage_type = localStorage.getItem('property_damage_type');
      this.accidental_fb();
    }

    ionViewWillEnter() {
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
    }

    accidental_fb() {
      this.accidental_form = this.formBuilder.group({
        resultant_damage: [null, Validators.required],
        resultant_damage_other: [null, Validators.required],
      });
    }

    accidentalNext(){
      for (let v in this.accidental_form.controls) {
        this.accidental_form.controls[v].markAsTouched();
      }
      if (this.accidental_form.valid) {
        const body = {
          "resultant_damage" : this.accidental_form.value.resultant_damage,
          "resultant_damage_other" : this.accidental_form.value.resultant_damage_other,
        };
      }
    }

    ngOnInit() {
    }

    // next(){

    //   const damageTypeArray = ['Other', 'Weather related', 'Escape of liquid', 'Earthquake']

    //   if(damageTypeArray.indexOf(this.property_damage_type) > -1 ){
    //     this.router.navigateByUrl('/property-step6');
    //   }
    //   else{
    //     this.router.navigateByUrl('/property-step5');
        
    //   }
    // }
    
    back(){
      this.navCtrl.pop();
    }

}