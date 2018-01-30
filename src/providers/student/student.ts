import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StudentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentProvider {

  apiURL: any = "http://localhost:65142/api/cust_students/"

  constructor(public http: HttpClient) {
  }

  getStudent(){
    console.log("Student Provider GET");

    return new Promise(resolve =>{
      this.http.get(this.apiURL+'Getcust_Students').subscribe(data =>{
      resolve (data);
      }, err => { 
      console.log (err);});
      });
  }

  getStudentID(id){

  }

  deleteStudent(id){

  }

  editStudent(id){

  }

  addStudent(){

  }
}
