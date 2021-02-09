import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonMockService } from 'src/app/common-mock.service';


import { IonicModule } from '@ionic/angular';

import { ProfessionalStep3Page } from './professional-step3.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalStep3Page
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
  declarations: [ProfessionalStep3Page],
  providers: [
    Title, CommonMockService,
   ],
})
export class ProfessionalStep3PageModule {}
