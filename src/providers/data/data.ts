import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  private url: string = "assets/data/lesson.json";

  public lesson ={
    Lesson:"",
    Data:"",
  }
  ID:number;
  public lessons: Lessons[];

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }



  
  getData(){
    return this.http.get(this.url)
    .map(res => res.json())
    
  }


/*   getlocalData(){
    this.http.get("assets/data/lesson.json")
    .map(res => res.json()).subscribe(data =>{
      console.log(data);
  });
} */
}


interface Lessons{
  id: number,
  Data:string,
  Lesson:string,
 }