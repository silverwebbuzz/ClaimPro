import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VehicleStep9Page } from './vehicle-step9.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleStep9Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VehicleStep9Page]
})
export class VehicleStep9PageModule {}
