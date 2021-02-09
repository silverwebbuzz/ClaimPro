import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';

@Component({
  selector: 'app-theft',
  templateUrl: './theft.page.html',
  styleUrls: ['./theft.page.scss'],
})
export class TheftPage implements OnInit {

  theft_form: FormGroup;

  constructor(private navCtrl: NavController,
    private router: Router,
    public _cS: CommonMockService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) {

    this.theft_fb();
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  theft_fb() {
    this.theft_form = this.formBuilder.group({
      vehicle_was_locked: [null],
      vehicle_was_stolen: [null],
      vehicle_recovered: [null],
    });
  }

  theftNext() {
    for (let v in this.theft_form.controls) {
      this.theft_form.controls[v].markAsTouched();
    }
    if (this.theft_form.valid) {
      const step4 = {
        "vehicle_was_locked" : this.theft_form.value.vehicle_was_locked,
        "vehicle_was_stolen" : this.theft_form.value.vehicle_was_stolen,
        "vehicle_recovered" : this.theft_form.value.vehicle_recovered,
      };
    }
  }

  ngOnInit() {
  }

  next() {
    this.router.navigate(['/vehicle-step5']);
  }

  back() {
    this.navCtrl.pop();
  }

}