import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSkillsService {
  private _skills: string[] = ['Angular', 'CSS', 'Javascript', 'Git'];

  public getSkills(): Observable<string[]> {
    return of(this._skills).pipe(delay(1000))
  }
}
