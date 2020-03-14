import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Http,Headers,RequestOptions } from '@angular/http'
import {HttpClient,HttpHeaders} from '@angular/common/http'; 
import { ZhucePage } from '../zhuce/zhuce';
import { LoginPage } from '../login/login';
import { NovelPage } from '../novel/novel';
import { DetailPage } from '../detail/detail';
import { XinxiPage } from '../xinxi/xinxi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  flag=false;
  isActive=1;
  user;
  juzi;
  userinfo;
  username;
  novel;
  haslogin=false;
  imgsrc='http://lijianhui.site/image/heart.png';
  imgsrc1='http://lijianhui.site/image/Heart.png';
  scjz;
  avaster2='http://lijianhui.site/image/yun.jpg';
  avaster1='http://lijianhui.site/image/my.png';
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    
  };
  ionViewDidLoad() {
    this.http.get('http://47.93.25.185:8000/').subscribe(data=>{
      this.user=data;
    });
    this.username = localStorage.getItem('username');
    console.log(this.username);
    let a={username:this.username};
      this.http.post('/login/getinfo',a,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }
    ).subscribe(data=>{
      if(JSON.stringify(data) === '[]' || data===null) {
        this.haslogin=false;
        return ;
        }else{
          this.haslogin=true;
        }
        console.log(data,this.haslogin);
      });
  }
  //到达具体小说页面
  gonovel(index){
    this.navCtrl.push(DetailPage,{novelindex:index+1});
  }
  
  zhuce(){
    this.navCtrl.push(ZhucePage);
  }

  // login(){
  //   this.navCtrl.push(LoginPage);
  // }
  go(){
    if(this.haslogin){
      this.navCtrl.push(XinxiPage);
    }else{
      this.navCtrl.push(LoginPage);
    }
  }
  //ngswitch事件
  isClick(i){
    this.isActive=i;
    if(i==2){
      this.http.get('/juzi').subscribe(data=>{
        this.juzi=data;
          this.username = localStorage.getItem('username');
          let a={username:this.username};
          this.http.post('/shoucang/content',a,{
              headers : this.headers,
              observe : 'body',
              responseType : 'json'
          }
          ).subscribe(data1=>{
            this.scjz=data1;
            for(var i=0;i<this.juzi.length;i++){
              for(var j=0;j<this.scjz.length;j++){
                if(this.juzi[i].juzi_id==this.scjz[j].juzi_id){
                   this.juzi[i].flag=true;
                }
              }
            }
            });
      
    });
  }

    if(i==3){
      let a={type:'青春校园'};
      //青春校园读物
      console.log(3);
      this.http.post('/novel/qingchun',a,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }
    ).subscribe(data=>{
        console.log(data);
        this.novel=data;
      });

    }

    if(i==4){
      //在收藏表里查找句子
      this.username = localStorage.getItem('username');
      let a={username:this.username};
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
  };

  shoucang(index){
    this.flag=this.juzi[index].flag;
    if(!this.flag){
      this.flag=false;
    }
    let a={username:this.username,juzi_id:index,flag:this.flag};
    console.log(a);
    //如果ischeck为true，发送post请求
    //每点击一次，应该重新获取状态，使flag正确标识图标
    if(!this.flag){
      this.http.post('/shoucang/insert',a,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }
    ).subscribe(data=>{
        console.log(data);
      });
      this.juzi[index].flag=!this.flag;
    }else{
      this.http.post('/shoucang/delete',a,{
        headers : this.headers,
        observe : 'body',
        responseType : 'json'
      }).subscribe(data=>{
        console.log(data);
      });
      this.juzi[index].flag=!this.flag;
    }
  };


  
  search(type:HTMLInputElement){
    this.navCtrl.push(NovelPage,{type:type.value});
    type.value='';
  }

  changeinfo(){
    this.navCtrl.push(XinxiPage);
  }

}
