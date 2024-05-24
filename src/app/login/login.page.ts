import { Router } from '@angular/router';
import { faShower } from './../../../node_modules/@fortawesome/free-solid-svg-icons/faShower.d';
import { Component, OnInit } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Eye: any = faEye;
  EyeSlash = faEyeSlash;
  show: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  password() {
    this.show = !this.show;
  }

  route() {
    this.router.navigate(['/login/forget-password']);
  }
  onSubmit() {
    console.log('submitted');
  }
}
