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
  		{id:1,name:"Malaria",symptom:["Chills","Fatigue","nausea","vomiting"],precaution:["use mosquito repellents"]},
  		{id:2,name:"Dengue",symptom:["skin rashes","muscular pain","nausea"],precaution:["Personal Protection","cleanliness management"]},
      {id:3,name:"Typhoid",symptom:["Loss of apetite","headache","weight loss"],precaution:["drink purified water","avoid junk food"]},
      {id:4,name:"jaundice",symptom:["Fatigue","Fever","weight loss"],precaution:["avoid contaminated food"]},
      {id:5,name:"chickenpox",symptom:["Fatigue","HighFever"],precaution:["Vaccination","avoid contact with infected person"]},
      {id:6,name:"Diarrhoea",symptom:["abdominal pain","abdominal cramps","nausea"],precaution:["avoid contaminated food"]}

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
