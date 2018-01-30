import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';



/*
  Generated class for the EduTechProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EduTechProvider {

  constructor(public http: HttpClient) {
    console.log("EduTechProvider Loaded");
  }

  //For toggeling search bar
  toggleSearch(toggled:any) {
    return toggled = !toggled;
    // this.cdr.detectChanges();
  }
  
  //  //Called when the search bar gained focus to show the native keyboard.
  //  searchBarFocus() {
  //   setTimeout(() => { this.searchbar.setFocus(); }, 150);
  //   this.keyboard.show();
  // }

  customSearch(searchTerm, objectList,objectListItem){

    //Get the value of the object
    if (typeof searchTerm == "object") {
      searchTerm = searchTerm.target.value;
    }

    //Search By Title
    if (objectListItem == 'title') {
      console.log("masuk dalam title");
      console.log(searchTerm);
      
      // if the value is an empty string don't filter the items
      if (searchTerm && searchTerm.trim() != '') {
        objectList = objectList.filter((item) => {
          return (item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        })
      }
      else {
        console.log("No search found!");
        return;
      }
    }

    //Search By description
    else if(objectListItem == 'description'){
      // if the value is an empty string don't filter the items
      if (searchTerm && searchTerm.trim() != '') {
        objectList = objectList.filter((item) => {
          return (item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        })
      }
      else {
        console.log("No search found!");
        return;
      }

    }

    
  }

  
} //Class
