import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subject, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IDynamicFormConfig } from '@tapos/pet/feature-pet-data-access';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


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
    Object.keys(controls).forEach((key: string) => this.form.addControl(key, new FormControl(controls[key].value)))
    console.log(this.form.value);
  }

  public onSubmit(): void {
    console.log("The form was submitted", this.form.value);
    this.form.reset();
  }
}
