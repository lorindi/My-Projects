import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { emailValidator } from '../utils/email-validator';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true,
    },
  ],
})
export class EmailDirective implements Validator, OnChanges {
  @Input() appEmail: string[] = [];
  constructor() {}

  validator: ValidatorFn = () => null;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log('control', control);
    return this.validator(control)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['appEmail']);
    const { currentValue } = changes['appEmail'];
    if (currentValue?.length) {
      this.validator = emailValidator(currentValue);
    }
  }
}
