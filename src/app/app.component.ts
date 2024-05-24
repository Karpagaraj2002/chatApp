import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'chat', url: '/pages/chat', icon: 'chatbubble-ellipses-outline' },
    { title: 'setting', url: '/pages/setting', icon: 'settings-outline' },
  ];
  constructor(private router: Router) {}

  route(url: any) {
    this.router.navigate([`${url}`]);
  }
}
