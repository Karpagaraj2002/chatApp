import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  user:any={}
  public appPages = [
    { title: 'chat', url: '/pages/chat', icon: 'chatbubble-ellipses-outline' },
    { title: 'setting', url: '/pages/setting', icon: 'settings-outline' },
  ];
  constructor(private router: Router,private auth:AuthService) {}

  ngOnInit(): void {
    // this.user = JSON.parse(sessionStorage.getItem('user')||'{}')
  }

  ionViewCanEnter(){
    this.user = JSON.parse(sessionStorage.getItem('user')||'{}')
  }

  route(url: any) {
    this.router.navigate([`${url}`]);
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
    sessionStorage.removeItem('user')
  }
}
