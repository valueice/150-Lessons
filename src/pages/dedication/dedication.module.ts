import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DedicationPage } from './dedication';

@NgModule({
  declarations: [
    DedicationPage,
  ],
  imports: [
    IonicPageModule.forChild(DedicationPage),
  ],
})
export class DedicationPageModule {}
