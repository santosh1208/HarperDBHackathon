import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';

import { WeekPage } from '../week/week';
import { DailyPage } from '../daily/daily'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'  
})

export class HomePage {

  constructor(public navCtrl: NavController, public http: Http) {
      //this.pushPage = WeekPage;
  }

  weekPage() {
    this.navCtrl.push(WeekPage);


    var headers = new Headers();
//    headers.append("Accept", 'application/json');
      var encodedAutHeaderValue="YWRtaW46cGFzc3dvcmQ=";
    headers.append('Content-Type', 'application/json' );
    headers.append("Authorization","Basic " + encodedAutHeaderValue);
  
    let options = new RequestOptions({ headers: headers });

    let postParams = {
      "operation":"sql",
      "sql":"select Distance , MaxSpeed ,Fuel from vehicle.car" ,
      "schema":"vehicle",
      "table":"car",
      
      
      
      }
    
    this.http.post("http://localhost:9925", postParams, options)
      .subscribe(data => {
        console.log('Here===>');
        console.log(data['_body']);
       }, error => {
        console.log(error);// Error getting the data
      });


    //let headers = new Headers();
  }

  daily() {
    this.navCtrl.push(DailyPage);
  }

}
