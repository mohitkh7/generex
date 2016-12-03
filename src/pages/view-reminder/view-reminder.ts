import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CheckReminder } from '../check-reminder/check-reminder';
import { Data } from '../../providers/data';

/*
  Generated class for the ViewReminder page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-view-reminder',
  templateUrl: 'view-reminder.html'
})

export class ViewReminder {
	public reminders=[];
  constructor(public navCtrl: NavController,public dataService: Data) {
  	this.dataService.getData().then((rems)=>{
  		if(rems){
  			this.reminders=JSON.parse(rems);
  		}
  	});
  }

  ionViewDidLoad() {
  }
  checkReminder(rem){
  	this.navCtrl.push(CheckReminder,{ reminder: rem});
  }

}
