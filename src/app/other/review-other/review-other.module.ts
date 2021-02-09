import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { CommonMockService } from 'src/app/common-mock.service';import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { ReviewOtherPage } from './review-other.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewOtherPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReviewOtherPage],
  providers: [
    Title, CommonMockService,
   ],
})
export class ReviewOtherPageModule {}
