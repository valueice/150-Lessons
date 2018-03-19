import { Component } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';
import { ImportResolver } from '@angular/compiler';


import { LessonsPage } from '../lessons/lessons';
import { ForewordPage } from '../foreword/foreword';
import { AcknowledgementPage } from '../acknowledgement/acknowledgement';
import { ContentsPage } from '../contents/contents';
import { DedicationPage } from '../dedication/dedication';
import { PraisePage } from '../praise/praise';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  LessonsPage = LessonsPage;
  ForewordPage = ForewordPage;
  AcknowledgementPage = AcknowledgementPage;
  ContentsPage = ContentsPage;
  DedicationPage = DedicationPage;
  PraisePage = PraisePage;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    ) {

  }

  // swipeEvent(e) {
  //   if(e.direction == '2'){
  //      this.navCtrl.parent.select(2);
  //   }
  //   else if(e.direction == '4'){
  //      this.navCtrl.parent.select(0);
  //   }
  // }


	onSwipeContent(e) {
		if (e.direction == '2') this.navCtrl.push(this.ContentsPage);
  }
  
  


}
