import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CheckDisease } from '../check-disease/check-disease';

/*
  Generated class for the ViewDiseases page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-view-diseases',
  templateUrl: 'view-diseases.html'
})
export class ViewDiseases {

	searchQuery: string = '';
	public disease_list=[];

  constructor(public navCtrl: NavController) {
  	this.initialize();
  }

  ionViewDidLoad() {
    console.log('Hello ViewDiseasesPage Page');
  }

  //this will intialize list of diseases
  initialize(){
  	this.disease_list=[
  		{id:1,name:"Fever",symptom:["Headache","Heat"],precaution:["rest","vomit"]},
  		{id:2,name:"Pain",symptom:["Headache","Heat"],precaution:["rest","vomit"]}
  	];
  }

  //To redirect to page showing details of disease
  checkDisease(disease_object){
  	this.navCtrl.push(CheckDisease,{ disease: disease_object})
  }

  //this is function for searchbar
  getDisease(ev :any){

  	// Reset items back to all of the items
    this.initialize();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.disease_list = this.disease_list.filter((disease) => {
        return (disease.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }



}
