import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { Data } from '../../providers/data';

import { SMS } from 'ionic-native';

import { AddRem } from '../add-rem/add-rem';

import { ViewReminder } from '../view-reminder/view-reminder';

import { ViewDoctors } from '../view-doctors/view-doctors';

import { ViewDiseases } from '../view-diseases/view-diseases';

import { Setting } from '../setting/setting';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public reminder=[];
  public tap=0; //count no. of taps
  no=['','']; //to send emergency alert

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public dataService: Data) {
    this.tap=0;
  }

  //this function will work whenver page come to view
  ionViewWillEnter(){
    this.tap=0;
    //assigning list of no saved to var no
  	this.dataService.getDataNo().then((nos)=>{
  		if(nos){
  			this.no=JSON.parse(nos);
  		}
  	});

  }
  addRem(){
  	this.navCtrl.push(AddRem);
  }

  viewRem(){
  	this.navCtrl.push(ViewReminder);
  }
  viewDoctors()
  {
    this.navCtrl.push(ViewDoctors);
  }

  viewDiseases()
  {
    this.navCtrl.push(ViewDiseases);
  }

  viewSetting()
  {
    this.navCtrl.push(Setting);
  }
  //Panic Button Tap action
  tapEvent(e)
  {
    this.tap++;
    if(this.tap>=3)
    {
      this.sendSMS();
      this.tap=0;
    }
  }

  //Panic button alert
  showPanicAlert()
  {
    let alert = this.alertCtrl.create({
      title: 'Panic Alert',
      subTitle: 'Panic Alert has been send to '+ this.no[0]+' and '+this.no[1],
      buttons: ['Ok']
    });
    alert.present();
  }

  //ALert When panic button fails
  showFailAlert()
  {
    let alert=this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Panic Alert fails to send Alert',
      buttons:['Ok']
    });
    alert.present();
  }

  //alert promptiing to save no first
  showSaveNoAlert()
  {
    let alert=this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Save Emergency Contact First.',
      buttons:['Ok']
    });
    alert.present();
  }
  //send SMS
  sendSMS(){
    var options={
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
            intent: 'INTENT'  // Opens Default sms app
            //intent: '' // Sends sms without opening default sms app
          }
    }

    if(this.no[0]==''){
    	this.showSaveNoAlert();
    }

    else{
	    SMS.send('+919826123672,+919407221181','Emergency. Need Help !',options)
	      .then(()=>{
	        this.showPanicAlert();
	      },()=>{
	      this.showFailAlert();
	      });
	    /*SMS.send(this.no,'Emergency. Need Help !',options,this.showPanicAlert,this.showFailAlert);*/
	  }

  }//sendSMS ends
}
