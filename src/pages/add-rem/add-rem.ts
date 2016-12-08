import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';
import { Data } from '../../providers/data';

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

	public reminders=[];

	name='';
	description='';
	frequency='';
	userHours: number;
	userMinutes: number;

  constructor(public navCtrl: NavController, public platform: Platform, public alertCtrl: AlertController, public dataService: Data) {

  	this.dataService.getData().then((rems)=>{
  		if(rems){
  			this.reminders=JSON.parse(rems);
  		}
  	});

  	this.userHours=new Date().getHours();
  	this.userMinutes=new Date().getMinutes();
  }

  ionViewDidLoad() {
    console.log('Hello AddRemPage Page');
  }

  saveRem(){

  	/*Saving Reminder */
  	let notificationTime=new Date();
    //Assigning time and checking whether today or tommorrow
  	if(this.userHours<notificationTime.getHours() || (notificationTime.getHours()==this.userHours && notificationTime.getMinutes()>=this.userMinutes))
  	{
  		notificationTime.setHours(this.userHours+24);
  	}
  	else{
  		notificationTime.setHours(this.userHours);
  	}
  	notificationTime.setMinutes(this.userMinutes);
  	notificationTime.setSeconds(0);

  	//Saving
  	/*Saving in Database */
  	let reminder={
  		id: notificationTime.getMilliseconds(),
  		name: this.name,
  		description: this.description,
  		time: notificationTime,
  		hour: notificationTime.getHours(),
  		minute: notificationTime.getMinutes(),
  		frequency: this.frequency
  	};
  	this.reminders.push(reminder);
  	this.dataService.save(this.reminders);

  	/*Saving in system notification */
  	let notification={
      id: notificationTime.getMilliseconds(),
      title: 'Medicine Reminder',
      text: 'Its time to take '+this.name+' medicine :)',
      at: notificationTime,
      led: 'FF0000',
      every: this.frequency
  	};

  	
  	/*Saving in System Notifictation*/
  	LocalNotifications.schedule(notification);  	
  	let msg='Reminder for medicine '+this.name+' has been set.';

  	//Creating Alert
  	let alert = this.alertCtrl.create({
  		title:'Reminder Set',
  		message: msg,
  		buttons: [{
		    text: 'Ok',
		    handler: () => {
		      // user has clicked the alert button
		      // begin the alert's dismiss transition
		      let navTransition = alert.dismiss();

		      // start some async method
		      
		        // once the async operation has completed
		        // then run the next nav transition after the
		        // first transition has finished animating out

		        navTransition.then(() => {
		          this.navCtrl.pop();
		        });
		      return false;
		    }
		  }]
  	});
  	alert.present();
  }

  timeChange(time){
    this.userHours = time.hour.value;
    this.userMinutes = time.minute.value;
	}

}
