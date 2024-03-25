import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IUser } from '../types/user';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: null | IUser | undefined;
  private user$$ = new BehaviorSubject<IUser | undefined>(undefined);

  constructor(private http: HttpClient, private router: Router) {
    // Check for token in local storage on service initialization
    const token = localStorage.getItem('token');
    if (token) {
      this.authenticateWithToken(token);
    }
  }

  get isLogged(): boolean {
    return !!this.user;
  }

  getUser(): Observable<IUser> {
    return this.user$$.asObservable().pipe(
      filter((user: IUser | undefined) => !!user),
      // Преобразуване на типа, за да уверите TypeScript
      map((user: IUser | undefined) => user as IUser)
    );
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

  private authenticateWithToken(token: string) {
    // Send request to server to authenticate using the token
    this.http
      .get<IUser>(`${API_URL}/auth/profile/`, { headers: this.getHeaders() })
      .subscribe({
        next: (user: IUser) => {
          this.user$$.next(user);
          this.user = user;
        },
        error: () => {
          // Clear token and reset user if authentication fails
          localStorage.removeItem('token');
          this.user = null;
        },
      });
  }

  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${API_URL}/auth/login/`, { username, password })
      .pipe(
        tap((response) => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
            this.authenticateWithToken(response.token);
          }
        })
      );
  }
  logout() {
    this.user = null;
    localStorage.removeItem('token');
    return this.http.delete(`${API_URL}/auth/logout/`).subscribe();
  }

  getProfile(): Observable<IUser> {
    return this.http
      .get<IUser>(`${API_URL}/auth/profile/`, { headers: this.getHeaders() })
      .pipe(
        tap((user) => {
          // Запазване на потребителя в behavior subject
          this.user$$.next(user);
        })
      );
  }
}
