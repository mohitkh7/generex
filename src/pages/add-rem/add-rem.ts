import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';

/*
  Generated class for the AddRem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-rem',
  templateUrl: 'add-rem.html'
})
export class AddRem {

	name;
	userHours: number;
	userMinutes: number;

  constructor(public navCtrl: NavController, public platform: Platform, public alertCtrl: AlertController) {
  	this.userHours=new Date().getHours();
  	this.userMinutes=new Date().getMinutes();
  }

  ionViewDidLoad() {
    console.log('Hello AddRemPage Page');
  }

  saveRem(){
  	let notificationTime=new Date();
  	if(this.userHours<notificationTime.getHours() || (notificationTime.getHours()==this.userHours && notificationTime.getMinutes()>=this.userMinutes))
  	{
  		notificationTime.setHours(this.userHours+24);
  	}
  	else{
  		notificationTime.setHours(this.userHours);
  	}
  	notificationTime.setMinutes(this.userMinutes);

  	let notification={
      id: 1,
      title: 'Hey!',
      text: 'You just got notified :)',
      at: notificationTime,
      every: 'week'
  	};

  	LocalNotifications.schedule(notification);
  	let msg='Reminder for medicine '+this.name+' has been set';
  	let alert = this.alertCtrl.create({
  		title:'Reminder Set',
  		message: msg,
  		buttons: ['Ok']
  	});
  	alert.present();
  	this.navCtrl.pop();
  }

  timeChange(time){
    this.userHours = time.hour.value;
    this.userMinutes = time.minute.value;
	}

}
