import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from "../../providers/data/data";
import { Storage } from "@ionic/storage";

/**
 * Generated class for the LessondetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lessondetail',
  templateUrl: 'lessondetail.html',
})
export class LessondetailPage {

  public lesson ={
    Lesson:"",
    Data:"",
  } 
 

  constructor(public storage: Storage, public data: DataProvider, public navCtrl: NavController, public navParams: NavParams) {
  

    this.lesson = navParams.data.lesson;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessondetailPage');
  }

  

  goNext(){

  }


  goBack() {
    console.log('i went back')
    this.navCtrl.pop();
    }


    
}



