import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

/*
  Generated class for the CheckDoctor page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-check-doctor',
  templateUrl: 'check-doctor.html'
})
export class CheckDoctor {

	name;
	post;
	phone;
	img;
	address;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
  	this.name=this.navParams.get('doctor').name;
  	this.post=this.navParams.get('doctor').post;
  	this.img=this.navParams.get('doctor').img;
  	this.address=this.navParams.get('doctor').address;
  	this.phone=this.navParams.get('doctor').phone;

  }

}
