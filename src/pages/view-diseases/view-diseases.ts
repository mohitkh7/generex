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
  		{id:1,name:"Malaria",symptom:["Chills","Fatigue","Nausea","Vomiting"],precaution:["Use mosquito repellents"]},
      {id:2,name:"Dengue",symptom:["Skin rashes","Muscular pain","Nausea"],precaution:["Personal Protection","Cleanliness management"]},
      {id:3,name:"Typhoid",symptom:["Loss of apetite","Headache","Weight loss"],precaution:["Drink purified water","Avoid junk food"]},
      {id:4,name:"Jaundice",symptom:["Fatigue","Fever","Weight loss"],precaution:["Avoid contaminated food"]},
      {id:5,name:"Chickenpox",symptom:["Fatigue","HighFever"],precaution:["Vaccination","Avoid contact with infected person"]},
      {id:6,name:"Diarrhoea",symptom:["Abdominal pain","Abdominal cramps","Nausea"],precaution:["Avoid contaminated food"]},
      {id:7,name:"Common Cold",symptom:["Nasal stuffiness or drainage","Sore or scratchy throat "," Sneezing","Hoarseness","Coughing"],precaution:["Use of- hand sanitizers","Use of disinfectants","Use of facial tissues"]},
      {id:8,name:"Rabies ",symptom:["Severe headache","High fever ","Painful spasm of muscle","Inability to swallow even liquid food"],precaution:["Immnunization of pet dog","Isolation of Rabied Dogs"]},
      {id:9,name:"Hepatitis",symptom:["Fever","Yellowing of skin","Headache","Joint Pain","Loss of appetite","Irritating rashes"],precaution:["Use of boiled water","Avoid contaminated Food"]},
      {id:10,name:"Tuberculosis",symptom:["Fever","General weakness","Loss of appetite","Persistent coughing"],precaution:["Isolation of TB patients","Vaccination by BCG"]},
      {id:11,name:"Cholera",symptom:["Acute Diarrhoea","Vomiting","Muscular cramps","Stool is white"],precaution:["Boiling of drinking water","Avoid contaminated food"]},

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
