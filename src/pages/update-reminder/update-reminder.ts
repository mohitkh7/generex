import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { LocalNotifications } from 'ionic-native';
import { HomePage } from '../home/home';
/*
  Generated class for the UpdateReminder page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-update-reminder',
  templateUrl: 'update-reminder.html'
})
export class UpdateReminder {

	public reminders=[];

	id;
	name;
	description;
	time;
	hour;
	minute;
	frequency;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService: Data) {
  	//assigning list of reminders saved to var reminders
  	this.dataService.getData().then((rems)=>{
  		if(rems){
  			this.reminders=JSON.parse(rems);
  		}
  	});
  }

  ionViewDidLoad() {
  	//setting data that we send as parameter from check-reminder
    this.id=this.navParams.get('reminder').id;
    this.name=this.navParams.get('reminder').name;
    this.description=this.navParams.get('reminder').description;
    this.time=this.navParams.get('reminder').time;
    this.frequency=this.navParams.get('reminder').frequency;
  }

  updateRem()
  {
  	for(let i=0;i<this.reminders.length;i++){
			if(this.id==this.reminders[i].id){
				this.reminders.splice(i,1);
			}
		}
		//pushing new reminder after deleting previous

		//taking time to set hour and minute converting string to date object
		let notificationTime = new Date(this.time);

		console.log(this.time);
		this.reminders.push({
			id:this.id,
			name: this.name,
  		description: this.description,
  		time: this.time,
  		hour: notificationTime.getHours(),
  		minute: notificationTime.getMinutes(),
  		frequency: this.frequency
		});
		this.dataService.save(this.reminders);

		//changing reminder in device
		LocalNotifications.update({
			id:this.id,
			text:'Its time to take '+this.name+' medicine :)',
      at: notificationTime,
      led: 'FF0000',
      every: this.frequency
		});

		this.navCtrl.setRoot(HomePage);
	}
}

