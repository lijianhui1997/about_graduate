import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,Headers,RequestOptions } from '@angular/http'
import {HttpClient,HttpHeaders} from '@angular/common/http'; 
/**
 * Generated class for the NovelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-novel',
  templateUrl: 'novel.html',
})
export class NovelPage {
  type;
  novel;
  exist;
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
           this.type=this.navParams.get('type');
          console.log(this.type);
              let a={type:this.type};
              this.http.post('/novel/type',a,{
                headers : this.headers,
                observe : 'body',
                responseType : 'json'
              }
            ).subscribe(data=>{
                console.log(data);
                this.novel=data;
                if(this.novel.video){
                  this.exist=true;
                }
                else{
                  this.exist=false;
                }
             });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovelPage');
  }

  goback(){
    this.navCtrl.pop();
  }

}
