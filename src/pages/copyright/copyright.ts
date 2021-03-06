import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ContentsPage } from "../contents/contents";
import { LessonsPage } from "../lessons/lessons";

/**
 * Generated class for the CopyrightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-copyright',
  templateUrl: 'copyright.html',
})
export class CopyrightPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CopyrightPage');
  }

  lP(){ this.navCtrl.push(LessonsPage); }
  cP(){ this.navCtrl.push(ContentsPage); }

}
