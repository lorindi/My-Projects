import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http'; // Импорт на HttpErrorResponse
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IUser } from '../types/user';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: null | IUser | undefined;

  constructor(private http: HttpClient, private router: Router) {}

  get isLogged(): boolean {
    return !!this.user;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    });
  }

  register(data: {}): Observable<IUser> {
    return this.http.post<IUser>(`${API_URL}/auth/register/`, data);
  }

  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${API_URL}/auth/login/`, { username, password })
      .pipe(
        tap((response) => {
          // Проверка дали има отговор и токен в отговора
          if (response && response.token) {
            // Запазване на токена в localStorage
            localStorage.setItem('token', response.token);
            // Запазване на потребителските данни в случай, че са нужни
            this.user = response.user;
          }
        })
      );
  }

  logout() {
    this.user = null;
    localStorage.removeItem('token');
    return this.http.delete(`${API_URL}/auth/logout/`).subscribe();
  }
}
