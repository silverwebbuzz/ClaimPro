import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonMockService } from 'src/app/common-mock.service';

import { IonicModule } from '@ionic/angular';

import { ProfessionalStep4Page } from './professional-step4.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalStep4Page
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
  declarations: [ProfessionalStep4Page],
  providers: [
    Title, CommonMockService,
   ],
})
export class ProfessionalStep4PageModule {}
