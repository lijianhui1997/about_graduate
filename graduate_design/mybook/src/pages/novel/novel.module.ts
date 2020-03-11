import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovelPage } from './novel';

@NgModule({
  declarations: [
    NovelPage,
  ],
  imports: [
    IonicPageModule.forChild(NovelPage),
  ],
})
export class NovelPageModule {}
