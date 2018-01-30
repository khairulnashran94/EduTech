import {
  Component,
} from '@angular/core';
import {
  NavController,
  NavParams,  
  ToastController,
} from 'ionic-angular';

@Component({
  selector: 'page-activityView',
  templateUrl: 'activityView.html'
})


export class ActivityViewPage {

  public selectedActivity: Array < {
      image: string,
      title: string,
      description: string
    } >

    //Need to make it dynamic and save it in database as favourite events
    visible: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {

    //Initialize activities variable
    this.selectedActivity = [];

    this.selectedActivity = this.navParams.get('selected');
  };

  //Favourite button.
  public favourite(): void {
    this.visible = !this.visible;

    if(!this.visible)
    {
      let toast = this.toastCtrl.create({
        message: 'Event added to favourite',
        duration: 2000,
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
  
      toast.present();
    }
    else{
      let toast = this.toastCtrl.create({
        message: 'Event removed from favourite',
        duration: 2000,
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
  
      toast.present();
    }
    

   
  }

  private wishlist(){
    console.log("Added to Wishlist");

    let toast = this.toastCtrl.create({
      message: 'Event added to wishlist',
      duration: 2000,
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
