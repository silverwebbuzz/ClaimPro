import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escape-of-liquid',
  templateUrl: './escape-of-liquid.page.html',
  styleUrls: ['./escape-of-liquid.page.scss'],
})
export class EscapeOfLiquidPage implements OnInit {

  escape_of_liquid_form: FormGroup;

  constructor(private navCtrl: NavController,
    private router:Router,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) { 

      this.escape_of_liquid_fb();
    }

    ionViewWillEnter() {
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
    }

    escape_of_liquid_fb() {
      this.escape_of_liquid_form = this.formBuilder.group({
        how_liquid_escape: [null, Validators.required],
        how_liquid_escape_other: [null, Validators.required],
        why_liquid_escape: [null, Validators.required],
        why_liquid_escape_other: [null, Validators.required],
        is_liquid_escaping: [null, Validators.required],
      });
    }

    escapeOfLiquidNext(){
      for (let v in this.escape_of_liquid_form.controls) {
        this.escape_of_liquid_form.controls[v].markAsTouched();
      }
      if (this.escape_of_liquid_form.valid) {
        const body = {
          "how_liquid_escape" : this.escape_of_liquid_form.value.how_liquid_escape,
          "how_liquid_escape_other" : this.escape_of_liquid_form.value.how_liquid_escape_other,
          "why_liquid_escape" : this.escape_of_liquid_form.value.why_liquid_escape,
          "why_liquid_escape_other" : this.escape_of_liquid_form.value.why_liquid_escape_other,
          "is_liquid_escaping" : this.escape_of_liquid_form.value.is_liquid_escaping,
        };
      }
    }

    ngOnInit() {
    }
    
    back(){
      this.navCtrl.pop();
    }

}