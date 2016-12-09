import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CheckDoctor } from '../check-doctor/check-doctor';

/*
  Generated class for the ViewDoctors page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-view-doctors',
  templateUrl: 'view-doctors.html'
})
export class ViewDoctors {

	searchQuery: string = '';
	public doctor_list=[];
	
  constructor(public navCtrl: NavController) {
  	this.initialize();
  }

  ionViewDidLoad() {
    
  }

  initialize(){
  	this.doctor_list=[
			{id:1,name:"Dr. Abhishek Verma", post:"Cardiologist", img: "man-2.png", phone:"9587462587", address: "Suyash Hospital"},
			{id:2,name:"Dr. Anjali Chourey", post:" Dermatologist", img: "woman-2.png", phone:"8144562347", address: "Bombay Hospital"},
			{id:3,name:"Dr. Chavvi Sharma", post:"Endocrinologist", img: "woman-1.png", phone:"778915973", address: "MY Hospital"},
			{id:4,name:"Dr. Deepak Sharde", post:"Gynecologist", img: "man.png", phone:"7531592365", address: "MediCare Hospital"},
		];
  }

  //this is to open details page
  checkDoctors(doctor_object)
  {
  	this.navCtrl.push(CheckDoctor,{
  		doctor: doctor_object
  	});
  }

  //this is function for searchbar
  getDoctors(ev :any){

  	// Reset items back to all of the items
    this.initialize();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.doctor_list = this.doctor_list.filter((doctor) => {
        return (doctor.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || doctor.post.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
