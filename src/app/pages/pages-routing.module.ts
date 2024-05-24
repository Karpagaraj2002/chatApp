import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPage } from './chat/chat.page';
import { SettingPage } from './setting/setting.page';

const routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'prefix' },
  {
    path: 'chat',
    component: ChatPage,
  },
  { path: 'setting', component: SettingPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
