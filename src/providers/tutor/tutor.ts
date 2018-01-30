import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TutorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TutorProvider {

  apiURL: any = "http://localhost:65142/api/vend_ServicesProviderApi/"

  constructor(public http: HttpClient) {
  }

  //Get Method to web API
  getSP(){
    console.log('Tutor Provider GET');

    return new Promise(resolve =>{
      this.http.get(this.apiURL+'Getvend_ServicesProvider').subscribe(data =>{
      resolve (data);
      }, err => { 
      console.log (err);});
      });
  }

  //Get Method to Web Api for specific tutor.
  getSelectedSP(id){
    // console.log(id);
    
    return new Promise(resolve =>{
      this.http.get(this.apiURL+'Getvend_ServicesProvider/'+id).subscribe(data =>{
      resolve (data);
      }, err => { 
      console.log (err);});
      });
  }

  //Put Method to web API
  updateSP(id,tutor){
    console.log('Tutor Provider PUT');

    return new Promise(resolve =>{
      this.http.put(this.apiURL+'Putvend_ServicesProvider/'+id,tutor).subscribe(data =>{
      resolve (data);
      }, err => { 
      console.log (err);});
      });

  }

}
