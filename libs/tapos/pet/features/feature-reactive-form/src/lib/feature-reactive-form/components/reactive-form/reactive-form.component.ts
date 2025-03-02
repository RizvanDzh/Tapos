import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { mergeMap, Observable, of } from 'rxjs';

@Component({
    selector: 'tapos-reactive-form',
    standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './reactive-form.component.html',
    styleUrl: './reactive-form.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveFormComponent implements OnInit {

  public phoneLabels:string[] = ['Main', 'Home', 'Work'];

  // eslint-disable-next-line @typescript-eslint/typedef
  public form = new FormGroup({
    firstName: new FormControl('Rizvan'),
    lastName: new FormControl('Dzhamaludinov'),
    nickname: new FormControl('Rizotto6'),
    email: new FormControl('1234@gmail.com'),
    yearOfBirth: new FormControl(2025),
    passport: new FormControl(''),
    address: new FormGroup({
      fullAddress: new FormControl(''),
      city: new FormControl(''),
      postcode: new FormControl(0),
    }),
    phones: new FormArray([
      new FormGroup({
        label: new FormControl(this.phoneLabels[0]),
        phoneNumber: new FormControl(''),
      })
    ])
  });

  public get years(): number[] {
    const now: number = new Date().getUTCFullYear()
    return Array(now - (now - 40)).fill('').map((_: number, idx: number) => now - idx)
  }

  public ngOnInit(): void {
    console.log('ngOnInit reactive form');
  }

  public addPhone(): void {
    this.form.controls.phones.insert(0, new FormGroup({
      label: new FormControl(this.phoneLabels[0]),
      phoneNumber: new FormControl(''),
    }));
  }

  public removePhone(index: number): void {
    this.form.controls.phones.removeAt(index);
  }
}
