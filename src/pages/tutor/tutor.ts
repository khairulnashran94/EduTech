import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Searchbar } from 'ionic-angular';
import { tutorInfoPage } from '../tutorInfo/tutorInfo'
import { Keyboard } from '@ionic-native/keyboard';
import { TutorProvider } from '../../providers/tutor/tutor';
import { ChangeDetectorRef } from '@angular/core';
import { Console } from '@angular/core/src/console';

/*
  Generated class for the tutor page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tutor',
  templateUrl: 'tutor.html',
  providers: [Keyboard]
})

export class tutorPage {
  
  toggled: boolean;
  @ViewChild('searchbar') searchbar: any;
  allTutor:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private keyboard: Keyboard, private tutorProviderApi : TutorProvider, private cdr : ChangeDetectorRef) {

    this.toggled = false;
  }

  //Called when the search bar gained focus to show the native keyboard.
  searchBarFocus() {
    setTimeout(() => { this.searchbar.setFocus(); }, 150);
    this.keyboard.show();
  }

  //Called when the search bar lose focus to hide the native keyboard.
  searchBarLoseFocus() {
    this.keyboard.close();
  }

  ionViewDidLoad() {
    console.log('Tutor Page Loaded');   
    this.initializeItems(); 
  }

  toggleSearch(ev ? :any) {
    this.toggled = !this.toggled
    this.cdr.detectChanges();
  }

  //Initialize all the tutors informations from Web API
  initializeItems() {
    this.tutorProviderApi.getSP()
    .then(data=> {
      this.allTutor=data;
    });
  }

  //Triggered input based on ionItem input events on search bar.
  triggerInput(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.allTutor = this.allTutor.filter((item) => {
        return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else{
      this.initializeItems();
    }
  }

  //Open the tutorInformation.html
  openInfo(tutor) {

    if(this.toggled){
      this.toggleSearch();
    }

    this.initializeItems();

    this.navCtrl.push(tutorInfoPage, { tutorInfo: tutor }).catch(() => { });
  }
}
