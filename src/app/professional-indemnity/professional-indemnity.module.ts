import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonMockService } from '../common-mock.service';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ProfessionalIndemnityPage } from './professional-indemnity.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalIndemnityPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfessionalIndemnityPage],
  providers: [
    Title, CommonMockService,
   ],
})
export class ProfessionalIndemnityPageModule {}
