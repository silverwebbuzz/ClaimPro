import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonMockService } from 'src/app/common-mock.service';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { BrowserModule, Title } from '@angular/platform-browser';

import { FirePage } from './fire.page';

const routes: Routes = [
  {
    path: '',
    component: FirePage
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
  declarations: [FirePage],
  providers: [
    Title, CommonMockService,
   ],
})
export class FirePageModule {}
