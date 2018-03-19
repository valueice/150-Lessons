import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LessondetailPage } from './lessondetail';

@NgModule({
  declarations: [
    LessondetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LessondetailPage),
  ],
})
export class LessondetailPageModule {}
