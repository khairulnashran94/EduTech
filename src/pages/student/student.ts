import { StudentProvider } from './../../providers/student/student';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
import { StudentViewPage } from '../student-view/student-view';

/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {

  students: any;
  arr1 : Array < {
    id: string,
    name: string,
    address: string
  } >

  constructor(public navCtrl: NavController, public navParams: NavParams, public StudentProvider: StudentProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');

    this.StudentProvider.getStudent()
    .then(data=> {
      this.students=data; 
      console.log(this.students);
    });
  }

  viewStudent(selectedStudent) {
    this.navCtrl.push(StudentViewPage, {
      selectedStud: selectedStudent
    }).catch(() => {});
  }
}
