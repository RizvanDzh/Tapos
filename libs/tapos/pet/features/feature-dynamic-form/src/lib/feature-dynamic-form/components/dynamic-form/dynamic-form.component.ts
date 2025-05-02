import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IDynamicControl, IDynamicFormConfig, TValidatorKeys } from '@tapos/pet/feature-pet-data-access';
import { FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { banWords } from '@tapos/pet/util-pet-functions';


@Component({
    selector: 'tapos-dynamic-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './dynamic-form.component.html',
    styleUrl: './dynamic-form.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormComponent implements OnInit {
  public formLoadingTrigger: Subject<'user' | 'company'> = new Subject<'user' | 'company'>();

  public formObservableConfig$!: Observable<IDynamicFormConfig>;

  public form!: FormGroup;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
       this.formObservableConfig$ = this.formLoadingTrigger.pipe(
         switchMap((config: "user" | "company") => this._http.get<IDynamicFormConfig>(`assets/pet-assets/${config}.form.json`)),
         // eslint-disable-next-line @typescript-eslint/typedef
         tap(({controls}) => this._buildForm(controls))
      )
  }

  private _buildForm(controls: IDynamicFormConfig['controls']): void {
    this.form = new FormGroup({});
    Object.keys(controls).forEach((key: string) => {
      const validators: ValidatorFn[] = this._resolveValidators(controls[key]);
      this.form.addControl(key, new FormControl(controls[key].value, validators));
    })
  }

  private _resolveValidators({validators = {}}: IDynamicControl): ValidatorFn[] {
    // eslint-disable-next-line @typescript-eslint/array-type
    return (Object.keys(validators) as Array<keyof typeof validators>).map((key: TValidatorKeys) => {
      // eslint-disable-next-line @typescript-eslint/typedef
      const validatorValue = validators[key];
      if (key === "required") {
        return Validators.required;
      }
      if (key === "email") {
        return Validators.email;
      }
      if(key === 'minLength' &&  typeof validatorValue === 'number') {
        return Validators.minLength(validatorValue);
      }

      if(key === 'banWords' && Array.isArray(validatorValue)) {
        return banWords(validatorValue);
      }

      return Validators.nullValidator;
    })
  }

  public onSubmit(): void {
    console.log("The form was submitted", this.form.value);
    this.form.reset();
  }
}
