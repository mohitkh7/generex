import { Component, ViewChild  } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Nav } from 'ionic-angular';


import { HomePage } from '../pages/home/home';
import { ViewDoctors } from '../pages/view-doctors/view-doctors';
import { ViewDiseases } from '../pages/view-diseases/view-diseases';
import { Setting } from '../pages/setting/setting';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;
  rootPage = HomePage;

  constructor(platform: Platform, private menu: MenuController) {
  	this.menu=menu;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  //Open HomePage from sidemenu
  OpenHome(){
  	this.menu.close();
  	this.nav.setRoot(HomePage);
  }
  //Open ViewDoctors Page from sidemenu
  OpenViewDoctors(){
  	this.menu.close();
  	this.nav.push(ViewDoctors);
  }
  //Open ViewDiseases Page from sidemenu
  OpenViewDiseases(){
  	this.menu.close();
  	this.nav.push(ViewDiseases);
  }
  //Open ViewDoctors Page from sidemenu
  OpenSetting(){
  	this.menu.close();  		
  	this.nav.push(Setting);
  }
}
