import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from "@ionic/storage";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LessonsPage} from '../pages/lessons/lessons'
import { ContentsPage } from "../pages/contents/contents";
import { AcknowledgementPage } from "../pages/acknowledgement/acknowledgement";
import { DedicationPage } from "../pages/dedication/dedication";
import { ForewordPage } from "../pages/foreword/foreword";
import { PraisePage } from "../pages/praise/praise";
import { CopyrightPage } from "../pages/copyright/copyright";
import { ContactPage } from "../pages/contact/contact";


import { Http, HttpModule } from "@angular/http";
import { SwingModule } from "angular2-swing";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { LessondataPage } from '../pages/lessondata/lessondata';
import { LessondetailPage } from '../pages/lessondetail/lessondetail';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LessonsPage,
    ContentsPage,
    AcknowledgementPage,
    DedicationPage,
    ForewordPage,
    PraisePage,
    CopyrightPage,
    ContactPage,
    LessondataPage,
    LessondetailPage,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    SwingModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LessonsPage,
    ContentsPage,
    AcknowledgementPage,
    DedicationPage,
    ForewordPage,
    PraisePage,
    CopyrightPage,
    ContactPage,
    LessondataPage,
    LessondetailPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
