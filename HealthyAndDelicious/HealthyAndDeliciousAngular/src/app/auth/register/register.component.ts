import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../validators/validator';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { handleError } from 'src/app/error/error.Handler';
import { passwordValidator } from 'src/app/validators/validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent {
  form!: FormGroup;
  errors: string | undefined = undefined;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      rePass: ['', [Validators.required, passwordValidator]],
    });
  }

  convertToBase64(file: any){
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result)
      }

      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  async register(){
    this.isLoading = true;

    this.authService.register(this.form.value).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errors = handleError(err.error?.error)
      }
    })
  }

}
