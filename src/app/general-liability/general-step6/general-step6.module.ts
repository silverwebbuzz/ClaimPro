import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { CommonMockService } from 'src/app/common-mock.service';


import { GeneralStep6Page } from './general-step6.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralStep6Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GeneralStep6Page],
  providers: [
    Title, CommonMockService,
   ],
})
export class GeneralStep6PageModule {}
