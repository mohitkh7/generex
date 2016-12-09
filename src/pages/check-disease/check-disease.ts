import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

/*
  Generated class for the CheckDisease page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-check-disease',
  templateUrl: 'check-disease.html'
})
export class CheckDisease {

	name;
	symptom;
	precaution;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.name=this.navParams.get('disease').name;
    this.symptom=this.navParams.get('disease').symptom;
    this.precaution=this.navParams.get('disease').precaution;
  }

}
