import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import {HomePage} from '../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, private menu: MenuController) {

    this.menu.enable(false);
  }

  loginAction()
  {
    //Upon clicking login button, will redirect to Home Page. 
    //TO DO checking here
    
    this.navCtrl.setRoot(HomePage)
  }

}