import {  ActivityViewPage } from '../activityView/activityView';
import {  Component,  ViewChild } from '@angular/core';
import {  NavController,  NavParams,  AlertController,  Content } from 'ionic-angular';
import {  EduTechProvider } from '../../providers/edu-tech/edu-tech';
import { Keyboard } from '@ionic-native/keyboard';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
  providers: [
    Keyboard
  ]
})


export class ActivityPage {

  //Need to set to false and make it only visible when scrolling
  public showButton = true;

  //Declare variables for activities
  activities: any;

  //Need to make it dynamic and save it in database as favourite events choosen by the users.
  favButtonVisible: boolean = true;

  //Search Bar toggle actions
  toggled:boolean = false;
  @ViewChild('searchbar') searchbar: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private eduTech : EduTechProvider, private keyboard: Keyboard, private cdr:ChangeDetectorRef) {

    //Initialize activities variable
    this.activities = [];

    // TODO - Get all information from webapi/database to display all activities
    for (let i = 1; i < 51; i++) {
      this.activities.push({
        "image": 'assets/imgs/banner.jpg',
        "title": 'This is activity #' + i,
        "description": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laudantium animi et neque ipsam, iusto quaerat obcaecati, corrupti blanditiis iste ullam in voluptatibus deleniti.'
      });
    }
  };

  //Open the information page activityView.html
  viewActivity(selectedActivity) {
    this.navCtrl.push(ActivityViewPage, {
      selected: selectedActivity
    }).catch(() => {});
  }

  //Favourite button.
  public favourite(): void {
    this.favButtonVisible = !this.favButtonVisible;
  }

  //Sort Alert Buttons
  public sortAlert() {

    let alert = this.alertCtrl.create();
    alert.setTitle('Sort');

    alert.addInput({
      type: 'radio',
      label: 'Ascending',
      value : 'ascending'
    });
    alert.addInput({
      type: 'radio',
      label: 'Descending',
      value: 'descending',
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.sortActivities(data);
      }
    });
    alert.present();
  }

  //Scroll to top button action
  //Need to make it appear only when scrolling
  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  //Sorting Method
  sortActivities(mode) {
    if(mode == 'ascending'){
      this.activities.sort((a,b)=>a.title.localeCompare(b.title));
    }
    else{
      this.activities.sort((a,b)=>b.title.localeCompare(a.title));
    }   
  }



  //Filter Method
  toggleSearch(){
    this.toggled = this.eduTech.toggleSearch(this.toggled);

    //Search Bar Gained Focus
    if(this.toggled){
      setTimeout(() => { this.searchbar.setFocus(); }, 150);
      this.keyboard.show();
    }
    //Search Bar Lose Focus
    else{
      this.keyboard.close();
    }
  }
  searchActivities(ev : any){
    let val = ev.target.value;

   // if the value is an empty string don't filter the items
   if (val && val.trim() != '') {
     this.activities = this.activities.filter((item) => {
       return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
     })
   }
    //console.log(this.activities);
    //this.activities = this.eduTech.customSearch(ev,this.activities,"title");
    //console.log(this.activities);
  }

} //Class
