import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonMockService } from 'src/app/common-mock.service';
import { IonicModule } from '@ionic/angular';

import { GeneralStep5Page } from './general-step5.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralStep5Page
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
  declarations: [GeneralStep5Page],
  providers: [
    Title, CommonMockService,
   ],
})
export class GeneralStep5PageModule {}
