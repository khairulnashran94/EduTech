import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StudentViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-student-view',
  templateUrl: 'student-view.html',
})
export class StudentViewPage {

  selectedStudent : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.selectedStudent = this.navParams.get('selectedStud');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentViewPage');
    console.log(this.selectedStudent.Name);
  }

}
