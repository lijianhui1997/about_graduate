import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Headers,RequestOptions } from '@angular/http'
import {HttpClient,HttpHeaders} from '@angular/common/http'; 
import { HomePage } from '../home/home';
/**
 * Generated class for the ChoosePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose',
  templateUrl: 'choose.html',
})
export class ChoosePage {
  username;
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoosePage');
  }
  submitone(){
    this.username = localStorage.getItem('username');
    let sex={sex:'女',username:this.username};
    this.http.post('/zhuce/update',sex,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
  ).subscribe(data=>{
      console.log(data);
    });
    this.navCtrl.push(HomePage);
  }
}
