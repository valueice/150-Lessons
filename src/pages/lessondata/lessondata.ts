import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from "../../providers/data/data";
import { LessondetailPage } from '../lessondetail/lessondetail';
import { SlicePipe } from "@angular/common";



/**
 * Generated class for the LessondataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lessondata',
  templateUrl: 'lessondata.html',
  providers: [DataProvider]
})
export class LessondataPage {

  //public lessons = new Array();
  ID:number;
  lessons:Lessons[];


  constructor(public data: DataProvider, public navCtrl: NavController, public navParams: NavParams) {
 
    data.getData().subscribe(lists => {
      console.log("lessons are here", lists);
      this.lessons = lists;
    });

  

    
  }


  loadLesson(lesson){
    console.log('I loaded lesson', lesson);
    this.navCtrl.push(LessondetailPage, {lesson: lesson})
  }


  
  
/*   getData(){
    this.data.getData().subscribe(
      lessons => {
        
      console.log('check data here',lessons);
     
    });
  } */
  
/*   getdata(){
    this.data.getdata().subscribe(
      lessons => {
        
      console.log('check data here',lessons);
     
    });
  } */





  /* lessons: any;

  getlocalData(){
    this.http.get("assets/data/lesson.json")
    .map(res => res.json()).subscribe(res =>{
      this.lessons = res.data;
    }, (err) => {
      alert("failed loading data")
      //console.log('Here', data);
  });
  } */

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessondataPage');
  }

}


interface Lessons{
  id: number,
  Data:string,
  Lesson:string,
 }