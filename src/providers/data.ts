import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';


/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {

  constructor(public storage: Storage) {
    console.log('Hello Data Provider');
  }

  getData(){
  	return this.storage.get('reminder');
  }
  save(data){
  	let newData=JSON.stringify(data);
  	this.storage.set('reminder',newData);
  }

  //functions for Emergency No save
  saveNo(data){
    let newData=JSON.stringify(data);
    this.storage.set('no',newData);
  }
  getDataNo()
  {
    return this.storage.get('no');
  }

  //function for Intro Save
  saveIntro(data){
    let newData=JSON.stringify(data);
    this.storage.set('intro',newData);
  }
  getIntro(){
    return this.storage.get('intro');
  }

}
