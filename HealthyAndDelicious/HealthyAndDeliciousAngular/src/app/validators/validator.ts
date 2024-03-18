import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) { return null; }
  return /^[a-zA-Z0-9\.-]{4,}@[a-z]+\.[a-z]+$/.test(control.value) ? null : {
    invalidEmail: true
  };
}
export function passwordValidator(control: AbstractControl): ValidationErrors | null {
  if(!control.value){ return null;}
  const password = control.parent?.get('password')?.value;
  const rePassword = control.value;
  return password == rePassword ? null : {invalidPasswords: true}
}