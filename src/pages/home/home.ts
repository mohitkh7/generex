import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AddRem } from '../add-rem/add-rem';

import { ViewReminder } from '../view-reminder/view-reminder';

import { ViewDoctors } from '../view-doctors/view-doctors';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public reminder=[];
  constructor(public navCtrl: NavController) {
    
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

}
