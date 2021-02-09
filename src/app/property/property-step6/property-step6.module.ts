import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { PropertyStep6Page } from './property-step6.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyStep6Page
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
  declarations: [PropertyStep6Page],
  providers: [
    Title, CommonMockService,
   ],
})
export class PropertyStep6PageModule {}
