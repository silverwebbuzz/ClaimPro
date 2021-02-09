import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { CommonMockService } from 'src/app/common-mock.service';

import { ProfessionalStep8Page } from './professional-step8.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalStep8Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfessionalStep8Page],
  providers: [
    Title, CommonMockService,
   ],
})
export class ProfessionalStep8PageModule {}
