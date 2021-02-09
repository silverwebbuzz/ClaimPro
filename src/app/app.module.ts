import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReviewGeneralPage } from './general-liability/review-general/review-general.page';
import { ReviewProfessionalPage } from './professional-indemnity/review-professional/review-professional.page';
import { CommonMockService } from 'src/app/common-mock.service';
import { Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReviewMedicalPage } from './medical-malpractice/review-medical/review-medical.page';
import { ReviewVehiclePage } from './vehicle/review-vehicle/review-vehicle.page';
import { ReviewPropertyPage } from './property/review-property/review-property.page';
import { ReviewOtherPage } from './other/review-other/review-other.page';


@NgModule({
  declarations: [AppComponent, ReviewOtherPage,
  ReviewGeneralPage, ReviewProfessionalPage, ReviewMedicalPage, ReviewVehiclePage, ReviewPropertyPage],
  entryComponents: [ReviewOtherPage,ReviewGeneralPage, ReviewProfessionalPage, ReviewMedicalPage, ReviewVehiclePage, ReviewPropertyPage],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(
    {mode:'ios'}),
    AppRoutingModule],
  providers: [Title, CommonMockService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
