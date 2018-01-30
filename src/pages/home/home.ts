import { Component } from '@angular/core';
import { NavController, ViewController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private nav: NavController, private view: ViewController, private menu: MenuController) {
    this.menu.enable(true);
  }

  // ionic2 will call this automatically
  ionViewWillEnter() {
      // Part 1:
      console.log("Home Page Loaded");
  }
}
