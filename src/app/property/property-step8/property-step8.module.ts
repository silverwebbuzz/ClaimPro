import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { PropertyStep8Page } from './property-step8.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyStep8Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PropertyStep8Page],
  providers: [
    Title, CommonMockService,
   ],
})
export class PropertyStep8PageModule {}
