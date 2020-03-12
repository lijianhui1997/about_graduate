import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Headers,RequestOptions } from '@angular/http'
import {HttpClient,HttpHeaders} from '@angular/common/http'; 

/**
 * Generated class for the XinxiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-xinxi',
  templateUrl: 'xinxi.html',
})
export class XinxiPage {
  username;
  userinfo;
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad XinxiPage');
    this.username = localStorage.getItem('username');
      let a={username:this.username};
      this.http.post('/login/getinfo',a,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }
    ).subscribe(data=>{
        console.log(data);
        this.userinfo=data;
      });
  }

}
