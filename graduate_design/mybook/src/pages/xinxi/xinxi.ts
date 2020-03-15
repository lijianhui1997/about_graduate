import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Headers,RequestOptions } from '@angular/http'
import {HttpClient,HttpHeaders} from '@angular/common/http'; 
import {ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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
  juzi;
  novel;
  isActive=1;
  user_id;
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private alertCtrl:AlertController,public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad XinxiPage');
    this.username = localStorage.getItem('username');
    this.user_id = localStorage.getItem('user_id');
      let a={user_id:this.user_id};
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

  isClick(i){
    this.isActive=i;
    if(i==4){
      this.user_id = localStorage.getItem('user_id');
      this.username = localStorage.getItem('username');
      let a={user_id:this.user_id};
      this.http.post('/shoucang/content',a,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }
    ).subscribe(data=>{
        console.log(data);
        this.juzi=data;
      });
    }


    if(i==5){
      this.user_id = localStorage.getItem('user_id');
      this.username = localStorage.getItem('username');
      let a={user_id:this.user_id};
      this.http.post('/search/record',a,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }
    ).subscribe(data=>{
        console.log(data);
        this.novel=data;
      });
    }
  }

  rewrite(name: HTMLInputElement,tel: HTMLInputElement,email: HTMLInputElement,sex: HTMLInputElement){
    let alert = this.alertCtrl.create({
      title:'提示信息',
  subTitle:'修改成功',
  buttons:['确定']
    });
    this.user_id = localStorage.getItem('user_id');
    let a={
      user_id:this.user_id,
      username:name.value||this.userinfo[0].username,
      email:email.value||this.userinfo[0].email,
      tel:tel.value||this.userinfo[0].tel,
      sex:sex.value||this.userinfo[0].sex
    };
    console.log(a);
    this.http.post('/zhuce/rewrite',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
  ).subscribe(data=>{
      // console.log(data);
    console.log(data);  
    alert.present();
  });
  }

}
