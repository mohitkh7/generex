import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Aboutus page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-aboutus',
  templateUrl: 'aboutus.html'
})
export class Aboutus {

	public version="1.0.1";
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    
  }

}
