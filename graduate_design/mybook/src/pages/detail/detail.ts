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
  index;
  novel;
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
      });
  }

  ionViewDidLoad() {
    //首先接收参数
    
  }
  goback(){
    this.navCtrl.pop();
  }

}
