import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-impact-by-tree',
  templateUrl: './impact-by-tree.page.html',
  styleUrls: ['./impact-by-tree.page.scss'],
})
export class ImpactByTreePage implements OnInit {

  impact_by_tree_form: FormGroup;

  constructor(private navCtrl: NavController,
    private router:Router,
    private formBuilder: FormBuilder,
    private statusBar: StatusBar) { 

      this.impact_by_tree_fb();
    }

    ionViewWillEnter() {
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
    }

    impact_by_tree_fb() {
      this.impact_by_tree_form = this.formBuilder.group({
        cutting_lopping: [null, Validators.required],
        name_party: [null, Validators.required],
        was_tree_cutter: [null, Validators.required],
        was_tree_cutter_other: [null, Validators.required],
        tree_branch_condition: [null, Validators.required],
        how_you_know: [null, Validators.required],
        how_you_know_other: [null, Validators.required],
        is_owner_aware: [null, Validators.required],
        how_made_aware: [null, Validators.required],
        how_made_aware_other: [null, Validators.required],
      });
    }

    ImpactByTreeNext(){
      for (let v in this.impact_by_tree_form.controls) {
        this.impact_by_tree_form.controls[v].markAsTouched();
      }
      if (this.impact_by_tree_form.valid) {
        const body = {
          "cutting_lopping" : this.impact_by_tree_form.value.cutting_lopping,
          "name_party" : this.impact_by_tree_form.value.name_party,
          "was_tree_cutter" : this.impact_by_tree_form.value.was_tree_cutter,
          "was_tree_cutter_other" : this.impact_by_tree_form.value.was_tree_cutter_other,
          "tree_branch_condition" : this.impact_by_tree_form.value.tree_branch_condition,
          "how_you_know" : this.impact_by_tree_form.value.how_you_know,
          "how_you_know_other" : this.impact_by_tree_form.value.how_you_know_other,
          "is_owner_aware" : this.impact_by_tree_form.value.is_owner_aware,
          "how_made_aware" : this.impact_by_tree_form.value.how_made_aware,
          "how_made_aware_other" : this.impact_by_tree_form.value.how_made_aware_other,
        };
      }
    }

    ngOnInit() {
    }
    
    back(){
      this.navCtrl.pop();
    }

}