import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ImpactByCollisionPage } from './impact-by-collision.page';

const routes: Routes = [
  {
    path: '',
    component: ImpactByCollisionPage
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
  declarations: [ImpactByCollisionPage]
})
export class ImpactByCollisionPageModule {}
