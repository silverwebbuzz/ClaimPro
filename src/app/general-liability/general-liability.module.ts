import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonMockService } from 'src/app/common-mock.service';
import { IonicModule } from '@ionic/angular';

import { GeneralLiabilityPage } from './general-liability.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralLiabilityPage
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
  declarations: [GeneralLiabilityPage],
  providers: [
    Title, CommonMockService,
   ],
})
export class GeneralLiabilityPageModule {}
