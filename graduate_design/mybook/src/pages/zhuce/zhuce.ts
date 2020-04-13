import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { LoginPage } from '../login/login';
import { ChoosePage } from '../choose/choose';
/**
 * Generated class for the ZhucePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zhuce',
  templateUrl: 'zhuce.html',
})
export class ZhucePage {
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  constructor(public navCtrl: NavController, public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZhucePage');
  }
  myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
  emailreg=/\w+[@][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)/;
  go(username: HTMLInputElement, password: HTMLInputElement,psw:HTMLInputElement,email:HTMLInputElement,tel:HTMLInputElement){
    console.log(username.value);
    if (username.value == '') {
      alert("请输入账号");
    } else if (password.value == '') {
      alert("请输入密码");
    }else if(password.value!=psw.value){
      alert("请保证两次密码一致");
    }else if(!this.myreg.test(tel.value)){
      alert("清输入合法的手机号");
    }else if (email.value == '') {
      alert("请输入邮箱");
    }else if (!this.emailreg.test(email.value)) {
      alert("请输入正确邮箱");
    }else{
      let userinfo: string = '用户名：' + username.value + '密码：' + password.value + '邮箱：' + email.value ;
        // console.log(userinfo);
        let a={
          username:username.value,
          password:password.value,
          email:email.value,
          tel:tel.value
        }
        this.http.post('/zhuce',a,{
          headers : this.headers,
          observe : 'body',
          responseType : 'json'
        }
      ).subscribe(data=>{
          // console.log(data);
        console.log(data);
        });
        this.navCtrl.push(ChoosePage);
    }
  };


  goback(){
    this.navCtrl.pop();
  }

}
