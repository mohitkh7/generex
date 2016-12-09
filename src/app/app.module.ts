import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Storage } from '@ionic/storage';
import { Data } from '../providers/data'; 

import { HomePage } from '../pages/home/home';
import { AddRem } from '../pages/add-rem/add-rem';
import { ViewReminder } from '../pages/view-reminder/view-reminder';
import { CheckReminder } from '../pages/check-reminder/check-reminder';
import { UpdateReminder } from '../pages/update-reminder/update-reminder';
import { ViewDoctors } from '../pages/view-doctors/view-doctors';
import { CheckDoctor } from '../pages/check-doctor/check-doctor';
import { ViewDiseases } from '../pages/view-diseases/view-diseases';
import { CheckDisease } from '../pages/check-disease/check-disease';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddRem,
    ViewReminder,
    CheckReminder,
    UpdateReminder,
    ViewDoctors,
    CheckDoctor,
    ViewDiseases,
    CheckDisease
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddRem,
    ViewReminder,
    CheckReminder,
    UpdateReminder,
    ViewDoctors,
    CheckDoctor,
    ViewDiseases,
    CheckDisease
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Storage, Data]
})
export class AppModule {}
