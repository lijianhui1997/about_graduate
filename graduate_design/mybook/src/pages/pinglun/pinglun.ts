import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Headers,RequestOptions } from '@angular/http'
import {HttpClient,HttpHeaders} from '@angular/common/http'; 
/**
 * Generated class for the PinglunPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pinglun',
  templateUrl: 'pinglun.html',
})
export class PinglunPage {
  user_id;
  novel;
  index;
  pinglun;
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    this.index=this.navParams.get('index');
    console.log(this.index);
    let a={index:this.index};
    this.http.post('/pinglun/content',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
  ).subscribe(data=>{
      this.pinglun=data;
    });
  }

  ionViewDidLoad() {
    let a={index:this.index};
    this.http.post('/novel/index',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
  ).subscribe(data=>{
      this.novel=data;
    });
    this.http.post('/pinglun/content',a,{
      headers : this.headers,
      observe : 'body',
      responseType : 'json'
    }
  ).subscribe(data=>{
      this.pinglun=data;
    });
  }


  goback(){
    this.navCtrl.pop();
  }
  
  fabiao(content:HTMLInputElement){
    console.log(content.value);
    this.user_id = localStorage.getItem('user_id');
    let b={user_id:this.user_id,novel_id:this.index,pinglun:content.value};
    console.log(b);
    if(content.value==''){
      alert("请提交非空内容");
    }else{
      this.http.post('/pinglun/write',b,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }
    ).subscribe(data=>{
        console.log(data);
        content.value='';
      });
      this.http.post('/pinglun/content',{index:this.index},{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }
    ).subscribe(data=>{
        this.pinglun=data;
      });
    }  
  }
}
