import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { AddRem } from '../add-rem/add-rem';

import { ViewReminder } from '../view-reminder/view-reminder';

import { ViewDoctors } from '../view-doctors/view-doctors';

import { ViewDiseases } from '../view-diseases/view-diseases';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public reminder=[];
  public tap=0; //count no. of taps
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.tap=0;  
  }

  //this function will work whenver page come to view
  ionViewWillEnter(){
    this.tap=0;
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

  //Panic Button Tap action
  tapEvent(e)
  {
    this.tap++;
    if(this.tap>=3)
    {
      this.showPanicAlert();
      this.tap=0;
    }
  }

  //Panic button alert
  showPanicAlert()
  {
    let alert = this.alertCtrl.create({
      title: 'Panic Alert',
      subTitle: 'Panic Alert has been send to +919826123672, +917509429528 and nearest hospital.',
      buttons: ['Ok']
    });
    alert.present();
  }

  /*//send SMS
  sendSMS(){
    var options={
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
               intent: 'INTENT'  // Opens Default sms app
              //intent: '' // Sends sms without opening default sms app
            }
    }
    SMS.send('+919826123672', 'Hello world!',options)
      .then(()=>{
        alert("success");
      },()=>{
      alert("failed");
      });
  }//sendSMS ends*/
}
