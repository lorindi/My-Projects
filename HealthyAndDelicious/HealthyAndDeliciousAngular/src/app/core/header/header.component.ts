import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor(private authService: AuthService, private router: Router) {}

  get isLogged(): boolean {
    return this.authService.isLogged;
  }
  

  logout() {
    this.authService.logout();
  }
}
