import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserSkillsService } from '@tapos/pet/feature-pet-data-access';
import { Observable, tap } from 'rxjs';

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

  public skills$!: Observable<string[]>;

  // eslint-disable-next-line @typescript-eslint/typedef
  public form = new FormGroup({
    firstName: new FormControl('Rizvan'),
    lastName: new FormControl('Dzhamaludinov'),
    nickname: new FormControl('Rizotto6'),
    email: new FormControl('1234@gmail.com'),
    yearOfBirth: new FormControl(this.years[this.years.length - 1], { nonNullable: true }),
    passport: new FormControl(''),
    address: new FormGroup({
      fullAddress: new FormControl(''),
      city: new FormControl(''),
      postcode: new FormControl(0),
    }),
    phones: new FormArray([
      new FormGroup({
        label: new FormControl(this.phoneLabels[0], {nonNullable: true}),
        phoneNumber: new FormControl(''),
      })
    ]),
    skills: new FormGroup<{[key: string]: FormControl<boolean>}>({})
  });

  constructor(private _userSkillsService: UserSkillsService) {
  }


  public get years(): number[] {
    const now: number = new Date().getUTCFullYear()
    return Array(now - (now - 40)).fill('').map((_: number, idx: number) => now - idx)
  }

  public ngOnInit(): void {
    this.skills$ = this._userSkillsService.getSkills().pipe(
      tap((skills: string[]) => this._buildSkillControls(skills)));

    console.log('ngOnInit reactive form');
  }

  public addPhone(): void {
    this.form.controls.phones.insert(0, new FormGroup({
      label: new FormControl(this.phoneLabels[0], {nonNullable: true}),
      phoneNumber: new FormControl(''),
    }));
  }

  public removePhone(index: number): void {
    this.form.controls.phones.removeAt(index);
  }

  public onSubmit(e: Event): void {
    console.log(this.form.value);
  }

  private _buildSkillControls(skills: string[]): void {
    skills.forEach((skill: string) => {
      this.form.controls.skills.addControl(skill, new FormControl(false, {nonNullable: true}));
    })
  }
}
