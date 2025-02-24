import { ChangeDetectorRef, Directive } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { Promise } from 'cypress/types/cy-bluebird';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Directive({
  selector: '[taposPetUniqueName]',
  standalone: true,
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: UniqueNameDirective,
    multi: true
  }]
})
export class UniqueNameDirective implements AsyncValidator {

  constructor(private _httpClient: HttpClient, private _cdr: ChangeDetectorRef) { }

  public validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this._httpClient.get<unknown[]>(`https://jsonplaceholder.typicode.com/users?username=${control.value}`)
      .pipe(
        map((users: unknown[]) => users.length === 0 ? null : {taposPetUniqueName: {isTaken: true}}),
        catchError(() => of(({taposPetUniqueName: {unknownError: true}}))),
        tap(() => this._cdr.markForCheck())
      )
  }
}
