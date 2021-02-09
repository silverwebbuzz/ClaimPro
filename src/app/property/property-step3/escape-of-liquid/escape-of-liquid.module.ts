import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EscapeOfLiquidPage } from './escape-of-liquid.page';

const routes: Routes = [
  {
    path: '',
    component: EscapeOfLiquidPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EscapeOfLiquidPage]
})
export class EscapeOfLiquidPageModule {}
