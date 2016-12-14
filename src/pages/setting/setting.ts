import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';

/*
  Generated class for the Setting page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class Setting {

	no=[];
	no1="";
	no2="";
  constructor(public navCtrl: NavController, public dataService: Data) {
  	//assigning list of no saved to var no
  	this.dataService.getDataNo().then((nos)=>{
  		if(nos){
  			this.no=JSON.parse(nos);
  			this.no1=this.no[0];
  			this.no2=this.no[1];
  		}
  	});
  }

  ionViewDidLoad() {
    console.log('Hello SettingPage Page');
  }

  //this function will save contact no
  saveNo(){
  	this.no=[this.no1,this.no2];
  	this.dataService.saveNo(this.no);
  	this.navCtrl.pop();
  }

}
