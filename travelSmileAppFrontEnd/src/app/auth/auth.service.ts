import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authUrl = 'http://localhost:8080/api/auth';
  isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: any) {
    return this.http.post(`${this.authUrl}/login`, credentials);
  }

  signup(user: any) {
    return this.http.post(`${this.authUrl}/signup`, user);
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuthenticated.next(false);
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }


   /**
   * Show error dialog
   * @param title 
   * @param msg 
   */
  /*showErrorDialog(title: string, msg: string) {
    this.dialog.open(MaterialDialogComponent, {
      width: '300px',
      panelClass: 'error-alert',
      data: { title: title, msg: msg }
    });
  } */

     // Cookies stuffs
  setCookie(cname: string, cvalue: string, exdays: number) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }

}