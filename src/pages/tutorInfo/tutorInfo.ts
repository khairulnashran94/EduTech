import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { TutorProvider } from '../../providers/tutor/tutor';


/*
  Generated class for the tutorInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-tutorInfo',
  templateUrl: 'tutorInfo.html'
})
export class tutorInfoPage {

  selectedTutor: any;
  private mode: String;
  private isInputDisabled: boolean = true;
  private hide: boolean = true;
  private hideSave: boolean = false;

  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private TutorProvider: TutorProvider) {

    //Get Value from open(item) in tutor.ts
    this.selectedTutor = this.navParams.get('tutorInfo');
  }

  //Change editable field after clicking Edit/Save/Cancel button
  changeEditable() {
    console.log(this.mode);

    if (this.mode == 'Edit') {
      this.isInputDisabled = false;
    }
    else if (this.mode == 'Save') {
      this.isInputDisabled = true;
    }
    else if (this.mode == 'Cancel') {
      this.isInputDisabled = true;
    }
    console.log('isInputDisable : ', this.isInputDisabled.toString())
  }

  //Edit Method
  edit() {
    this.mode = 'Edit';
    this.changeEditable();
    this.hide = !this.hide;
    this.hideSave = !this.hideSave;
  }

  //Save or Update Method
  save() {
    this.mode = 'Save';
    this.changeEditable();
    this.hide = !this.hide;
    this.hideSave = !this.hideSave;

    this.saveToast();

    console.log(this.selectedTutor.RecId);

    

    this.TutorProvider.updateSP(this.selectedTutor.ServiceProviderID,this.selectedTutor);
    
  }

  //Toast Upon Saving called from save() - TODO
  saveToast() {
    let toast = this.toastCtrl.create({
      message: 'Record Updated!',
      duration: 2000,
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast', this.mode);
    });

    toast.present();
  }

  //Delete Alert Method - Need to align with API - TODO
  showDeleteAlert() {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'Are you sure to delete this record?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('Delete - Yes Clicked');
            this.navCtrl.pop();
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Delete - No clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  //Form Valdation + Save Method - Need to align with PUT API - TODO
  validateInput() {
    this.save();
  }

  //Cancel Method
  cancelEdit() {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'Any changes made will not be saved. Are you sure to leave?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.mode = 'Cancel';
            console.log('Cancel - OK Clicked - ');
            this.changeEditable();
            this.hide = !this.hide;
            this.hideSave = !this.hideSave;
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Cancel - No clicked');
          }
        }
      ]
    });
    confirm.present();

  }

  ionViewDidLoad() {
    console.log('Tutor Information Page Loaded');    
  }

  ionViewCanEnter(){
    if(this.selectedTutor != null || this.selectedTutor != undefined){
      this.TutorProvider.getSelectedSP(this.selectedTutor.ServiceProviderID);
      return true;
    }
    else{
      return false;
    }
    
  }

  ionViewCanLeave(): Promise<{}> {
    if (this.mode == 'Edit')
    {
      console.log('Inside  ',this.mode);
      return new Promise((resolve, reject) => {
        let confirm = this.alertCtrl.create({
          title: 'Are you sure?',
          message: 'Any changes made will not be saved. Are you sure to leave?',
          buttons: [{
            text: 'Yes',
            handler: () => {
              resolve();
            },
          }, {
            text: 'No',
            handler: () => {
              reject();
            }
          }],
        });
        confirm.present();
      })
    }    
  }


}//class
