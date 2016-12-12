import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

/*
  Generated class for the Intro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class Intro {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello IntroPage Page');
  }

  //gotohomepage
  goToHome(){
  	this.navCtrl.setRoot(HomePage);
  }

}
