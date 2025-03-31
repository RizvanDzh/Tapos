import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Promise } from 'cypress/types/cy-bluebird';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniqueNameService implements AsyncValidator {

  constructor(private _http: HttpClient) { }

  public validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this._http.get<unknown[]>(`https://jsonplaceholder.typicode.com/users?username=${control.value}`)
      .pipe(
        map((value: unknown[]) =>
          value.length === 0
            ? null
            : { uniqueName: { isTaken: true }}
        ),
        catchError(() => of(({uniqueName: {unknownError: true}}))),
      )
  }
}
