import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http'; // Импортиране на HttpErrorResponse
import { handleError } from 'src/app/error/error.Handler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router){}

  errors: string | undefined = undefined;

  login(form: NgForm): void {
    this.isLoading = true;
    this.authService.login(form.value.username, form.value.password).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/'])
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading = false; 
        this.errors = handleError(err); 
      }
    })
  }
}
