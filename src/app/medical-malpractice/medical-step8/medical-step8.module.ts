import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { CommonMockService } from 'src/app/common-mock.service';
import { MedicalStep8Page } from './medical-step8.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalStep8Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MedicalStep8Page],
  providers: [
    Title, CommonMockService,
   ],
})
export class MedicalStep8PageModule {}
