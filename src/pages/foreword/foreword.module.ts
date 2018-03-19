import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForewordPage } from './foreword';

@NgModule({
  declarations: [
    ForewordPage,
  ],
  imports: [
    IonicPageModule.forChild(ForewordPage),
  ],
})
export class ForewordPageModule {}
