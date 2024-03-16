import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // apiUrl = 'http://localhost:8000/api';

  // constructor(private http: HttpClient) {}

  // registerUser(userData: any) {
  //   return this.http.post(`${this.apiUrl}/register/`, userData);
  // }

  user: UserForAuth | undefined;
  // isLogged = false;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }


  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch {
      this.user = undefined;
    }
  }
  login() {
    this.user = {
      id: '5fa64c1f2183ce1728ff3723',
      firstName: 'Petko',
      email: 'petkoivanov@abv.bg',
      password: '123123',
      phoneNumber: '123-123-123-123',
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }
  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
