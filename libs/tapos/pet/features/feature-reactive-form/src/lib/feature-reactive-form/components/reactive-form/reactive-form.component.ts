import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserSkillsService } from '@tapos/pet/feature-pet-data-access';
import { Observable, tap } from 'rxjs';
import { banWords, passwordShouldMatch } from '@tapos/pet/util-pet-functions';


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
  public form = this._fb.group({
    firstName: ['Rizvan', [Validators.required, Validators.minLength(4), banWords(['dummy'])]],
    lastName: ['Dzhamaludinov', [Validators.required, Validators.minLength(2)]],
    nickname: this._fb.nonNullable.control('Rizotto6',
      [
        Validators.pattern(/^[\w.]+$/),
        Validators.required,
        Validators.minLength(2)]),
    email: this._fb.nonNullable.control('1234@gmail.com', [Validators.required, Validators.email]),
    yearOfBirth: this._fb.nonNullable.control(this.years[this.years.length - 1], Validators.required),
    passport: ['', [Validators.pattern(/^[0-9]{10}$/), Validators.required]],
    address: this._fb.nonNullable.group({
      fullAddress: ['', Validators.required],
      city: ['', Validators.required],
      postcode: [0, Validators.required],
    }),
    phones: this._fb.array([
      this._fb.group({
        label: this._fb.nonNullable.control(this.phoneLabels[0]),
        phoneNumber: '',
      })
    ]),
    skills: this._fb.record<boolean>({}),
    passwords: this._fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ''
    }, {
      validators: passwordShouldMatch
    })
  });

  constructor(private _userSkillsService: UserSkillsService, private _fb: FormBuilder) {
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
