import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LessondataPage } from './lessondata';

@NgModule({
  declarations: [
    LessondataPage,
  ],
  imports: [
    IonicPageModule.forChild(LessondataPage),
  ],
})
export class LessondataPageModule {}
