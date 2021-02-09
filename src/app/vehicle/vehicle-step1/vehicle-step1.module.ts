import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { VehicleStep1Page } from './vehicle-step1.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleStep1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VehicleStep1Page],providers: [
    Title, CommonMockService,
   ],
})
export class VehicleStep1PageModule {}
