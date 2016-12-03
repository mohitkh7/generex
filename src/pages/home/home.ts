import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AddRem } from '../add-rem/add-rem';

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
  	
  }

}
