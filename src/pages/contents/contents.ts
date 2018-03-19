import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LessonsPage } from '../lessons/lessons';
import { ForewordPage } from '../foreword/foreword';
import { AcknowledgementPage } from '../acknowledgement/acknowledgement';
import { DedicationPage } from '../dedication/dedication';
import { PraisePage } from '../praise/praise';
import { ContactPage } from "../contact/contact";
import { HomePage } from "../home/home";
import { CopyrightPage } from "../copyright/copyright";
import { LessondataPage } from "../lessondata/lessondata";

/**
 * Generated class for the ContentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contents',
  templateUrl: 'contents.html',
})
export class ContentsPage {

  LessonsPage = LessonsPage;
  CopyrightPage = CopyrightPage;
  ForewordPage = ForewordPage;
  AcknowledgementPage = AcknowledgementPage;
  HomePage = HomePage;
  DedicationPage = DedicationPage;
  PraisePage = PraisePage;
  ContactPage = ContactPage;
  LessondataPage = LessondataPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentsPage');
  }


  onSwipeContent(e) {
		if (e.direction == '2') this.navCtrl.push(this.HomePage);
  }
  

  cP(){ this.navCtrl.push(CopyrightPage); }
  aP(){ this.navCtrl.push(AcknowledgementPage); }
  fP(){ this.navCtrl.push(ForewordPage); }
  pP(){ this.navCtrl.push(PraisePage); }
  dP(){ this.navCtrl.push(DedicationPage); }
  ld(){ this.navCtrl.push(LessondataPage); }
  conP(){ this.navCtrl.push(ContactPage); }

}
