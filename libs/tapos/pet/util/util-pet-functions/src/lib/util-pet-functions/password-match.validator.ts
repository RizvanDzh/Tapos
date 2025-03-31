import { AbstractControl, ValidationErrors } from '@angular/forms';


export function passwordShouldMatch(control: AbstractControl): ValidationErrors | null {
  const password: AbstractControl<unknown, unknown> | null = control.get('password');
  const confirmPassword: AbstractControl<unknown, unknown> | null = control.get('confirmPassword');
  const error: {passwordShouldMatch: {mismatch: true}} = {passwordShouldMatch: {mismatch: true}};

  if(password?.value === confirmPassword?.value) {
    return null;
  }

  confirmPassword?.setErrors(error);

  return error;
}
