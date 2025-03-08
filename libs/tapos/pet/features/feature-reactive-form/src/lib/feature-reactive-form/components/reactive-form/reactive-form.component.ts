import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UniqueNameService, UserSkillsService } from '@tapos/pet/feature-pet-data-access';
import { bufferCount, filter, Observable, startWith, Subject, takeUntil, tap } from 'rxjs';
import { banWords, passwordShouldMatch } from '@tapos/pet/util-pet-functions';


@Component({
  selector: 'tapos-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveFormComponent implements OnInit, OnDestroy {

  public phoneLabels:string[] = ['Main', 'Home', 'Work'];

  public skills$!: Observable<string[]>;

  private _destroy: Subject<void> = new Subject<void>();

  // eslint-disable-next-line @typescript-eslint/typedef
  public form = this._fb.group({
    firstName: ['Rizvan', [Validators.required, Validators.minLength(4), banWords(['dummy'])]],
    lastName: ['Dzhamaludinov', [Validators.required, Validators.minLength(2)]],
    nickname: this._fb.nonNullable.control('', {
      validators: [
        Validators.pattern(/^[\w.]+$/),
        Validators.required,
        Validators.minLength(2)
      ],
      asyncValidators: [
        this._uniqueName.validate.bind(this._uniqueName)
      ],
      updateOn: 'blur'
    }),
    email: this._fb.nonNullable.control('1234@gmail.com', [Validators.required, Validators.email]),
    yearOfBirth: this._fb.nonNullable.control(this.years[this.years.length - 1], Validators.required),
    passport: ['', [Validators.pattern(/^[0-9]{10}$/)]],
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

  constructor(
    private _userSkillsService: UserSkillsService,
    private _fb: FormBuilder,
    private _uniqueName: UniqueNameService,
    private _cdr: ChangeDetectorRef
  )  {
  }


  public get years(): number[] {
    const now: number = new Date().getUTCFullYear()
    return Array(now - (now - 40)).fill('').map((_: number, idx: number) => now - idx)
  }

  public ngOnInit(): void {
    this.skills$ = this._userSkillsService.getSkills().pipe(
      tap((skills: string[]) => this._buildSkillControls(skills)));

    this.form.controls.yearOfBirth.valueChanges
      .pipe(
        tap(() => this.form.controls.passport.markAsDirty()),
        startWith(this.form.controls.yearOfBirth.value),
        takeUntil(this._destroy)
      )
      .subscribe((yearOfBirth: number) => {
        this._isAdult(yearOfBirth)
          ? this.form.controls.passport.setValidators(Validators.required)
          : this.form.controls.passport.removeValidators(Validators.required);
        this.form.controls.passport.updateValueAndValidity();
      })

    this.form.statusChanges
      .pipe(
        bufferCount(2,1),
        // eslint-disable-next-line @typescript-eslint/typedef
        filter(([prevState]): boolean => prevState === 'PENDING'),
        takeUntil(this._destroy)
      ).subscribe(() => this._cdr.markForCheck())

    console.log('ngOnInit reactive form');
  }

  public ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.complete();
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

  private _isAdult(yearOfBirth: number): boolean {
    const now: number = new Date().getFullYear();
    return now - yearOfBirth >= 18;
  }
}
