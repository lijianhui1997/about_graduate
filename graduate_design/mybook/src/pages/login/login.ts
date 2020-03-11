import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
    this.userinfo = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  userinfo;
  login(username:HTMLInputElement,password:HTMLInputElement){
    let info={username:username.value,password:password.value};
    

    this.http.post('/login',info,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
  ).subscribe(data=>{
      // console.log(data);
    console.log(data);
    if(JSON.stringify(data) === '[]' || data===null) {
      alert('用户名或密码错误，请重新输入！');
      return ;
      }
    localStorage.setItem('username',info.username);//本地存储username
    });

    this.navCtrl.push(HomePage);

  }
}
