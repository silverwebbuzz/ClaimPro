import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonMockService } from '../common-mock.service';
import { BrowserModule, Title } from '@angular/platform-browser';
import { ToastController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { SigninPage } from './signin.page';

const routes: Routes = [
  {
    path: '',
    component: SigninPage
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
  declarations: [SigninPage],
  providers: [
    Title, CommonMockService,
   ],
})
export class SigninPageModule {}
