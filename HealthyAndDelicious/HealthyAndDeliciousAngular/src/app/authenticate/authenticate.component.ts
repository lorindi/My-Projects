import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IUser } from '../types/user';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
})
export class AuthenticateComponent implements OnInit {
  isAuthenticating = true;
  user: IUser | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    setTimeout(() => {
      // Проверка дали вече имаме логнат потребител
      if (this.authService.isLogged) {
        // Вземане на данните за логнатия потребител
        this.authService.getUser().subscribe((user) => {
          this.user = user;
          this.isAuthenticating = false;
        });
      } else {
        // Ако няма логнат потребител, правим заявка за вход
        this.authService.getProfile().subscribe({
          next: (user: IUser) => {
            this.user = user;
            this.isAuthenticating = false;
          },
          error: () => {
            this.isAuthenticating = false;
          },
          complete: () => {
            this.isAuthenticating = false;
          },
        });
      }
    }, 3000);
  }
}
