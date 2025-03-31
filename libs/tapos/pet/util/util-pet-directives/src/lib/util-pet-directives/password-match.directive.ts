import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[taposPetPasswordMatch]',
  standalone: true,
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordMatchDirective,
    multi: true
  }]
})
export class PasswordMatchDirective implements Validator {

  public validate(control: AbstractControl<string>): ValidationErrors | null {
    // eslint-disable-next-line @typescript-eslint/typedef
    const password = control.get('password');
    // eslint-disable-next-line @typescript-eslint/typedef
    const confirmPassword = control.get('confirmPassword');
    // eslint-disable-next-line @typescript-eslint/typedef
    const error = {taposPetPasswordMatch: {mismatch: true}}

    if(password?.value === confirmPassword?.value) {
      return null
    }

    confirmPassword?.setErrors(error)


    return error;
  }

}
