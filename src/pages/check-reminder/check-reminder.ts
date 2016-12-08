import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { LocalNotifications } from 'ionic-native';

import { HomePage } from '../home/home';
import { UpdateReminder } from '../update-reminder/update-reminder';
/*
  Generated class for the CheckReminder page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-check-reminder',
  templateUrl: 'check-reminder.html'
})
export class CheckReminder {
	
	public reminders=[];

	id;
	name;
	description;
	time;
	hour;
	minute;
	frequency;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService: Data,public alertCtrl: AlertController) {
  	this.dataService.getData().then((rems)=>{
  		if(rems){
  			this.reminders=JSON.parse(rems);
  		}
  	});
  }

  ionViewDidLoad() {
  	this.id=this.navParams.get('reminder').id;
    this.name=this.navParams.get('reminder').name;
    this.description=this.navParams.get('reminder').description;
    this.time=this.navParams.get('reminder').time;
    this.frequency=this.navParams.get('reminder').frequency;
  }

  remove()
  {
  	//Creating Alert
  	let alert = this.alertCtrl.create({
  		title:'Are you sure to delete ?',
  		message: 'Reminder will be lost',
  		buttons: [{
  			text:'Cancel',
  			handler: ()=>{
  				alert.dismiss();
  			}
  		},

  		{
		    text: 'Delete',
		    handler: () => {
		    	for(let i=0;i<this.reminders.length;i++){
  					if(this.id==this.reminders[i].id){
    					this.reminders.splice(i,1);
  						this.dataService.save(this.reminders);
  						LocalNotifications.clear(this.id);

  						let navTransition = alert.dismiss();
  						navTransition.then(() => {
		          this.navCtrl.setRoot(HomePage);
		        	});
		      
						}  	
  				}
  			}
  		}]

  	});
  	alert.present();
  }
  update(){
    this.navCtrl.push(UpdateReminder, {reminder :{id:this.id, name:this.name, description:this.description, time:this.time, frequency:this.frequency}});
  }
}		      
