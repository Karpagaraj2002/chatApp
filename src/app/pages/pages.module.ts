import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { IonicModule } from '@ionic/angular';
import { ChatPageModule } from './chat/chat.module';
import { SettingPageModule } from './setting/setting.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    IonicModule,
    ChatPageModule,
    SettingPageModule,
  ],
})
export class PagesModule {}
