// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    // Implement your authentication check logic here
    // For example, check if a token exists in localStorage
    const token = localStorage.getItem('auth-token');
    return !!token;
  }

  login(token: string) {
    // Save token on login
    localStorage.setItem('auth-token', token);
  }

  logout() {
    // Remove token on logout
    localStorage.removeItem('auth-token');
  }
}
