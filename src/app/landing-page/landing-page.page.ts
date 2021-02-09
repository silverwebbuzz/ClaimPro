import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  constructor(private menu: MenuController,private statusBar: StatusBar, private router:Router) { }

  ionViewWillEnter(){
    this.menu.enable(false);
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }
  
  ngOnInit() {

   
  }

  signin(){
    this.router.navigate(['/signin']);
  }

  signup(){
    this.router.navigate(['/signup']);
  }

}
