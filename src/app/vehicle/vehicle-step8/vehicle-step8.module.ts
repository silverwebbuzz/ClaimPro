import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { CommonMockService } from 'src/app/common-mock.service';
import { VehicleStep8Page } from './vehicle-step8.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleStep8Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VehicleStep8Page],
  providers: [
    Title, CommonMockService,
   ],
})
export class VehicleStep8PageModule {}
