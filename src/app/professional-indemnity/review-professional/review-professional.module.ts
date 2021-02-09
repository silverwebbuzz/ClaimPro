import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReviewProfessionalPage } from './review-professional.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewProfessionalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReviewProfessionalPage]
})
export class ReviewProfessionalPageModule {}
