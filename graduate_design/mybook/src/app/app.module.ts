import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ZhucePage } from '../pages/zhuce/zhuce';
import { LoginPage } from '../pages/login/login';
import { NovelPage } from '../pages/novel/novel';
import { DetailPage } from '../pages/detail/detail';
import { ChoosePage } from '../pages/choose/choose';
import { XinxiPage } from '../pages/xinxi/xinxi';

import { HttpClientModule  } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ZhucePage,
    LoginPage,
    NovelPage,
    DetailPage,
    ChoosePage,
    XinxiPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ZhucePage,
    LoginPage,
    NovelPage,
    DetailPage,
    ChoosePage,
    XinxiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
