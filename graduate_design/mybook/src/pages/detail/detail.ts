import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Headers,RequestOptions } from '@angular/http'
import {HttpClient,HttpHeaders} from '@angular/common/http'; 
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  username;
  index;
  novel;
  user_id;
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    this.index=this.navParams.get('novelindex');
    let a={index:this.index};
    console.log(a);
    this.http.post('/novel/index',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
      ).subscribe(data=>{
      console.log(data);
      this.novel=data;
      this.username=localStorage.getItem('username');
      this.user_id = localStorage.getItem('user_id');
      let b={user_id:this.user_id,book:this.novel[0].name};
      console.log(b);
      this.http.post('/search/insert',b,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
        }).subscribe(data=>{ console.log(data); });
      });
  }

  ionViewDidLoad() {
    //首先接收参数
    
  }
  goback(){
    this.navCtrl.pop();
  }

}
