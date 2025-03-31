import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EditableContentValueAccessorDirective } from '@tapos/pet/util-pet-directives';
import { RatingPickerComponent, RatingOptionsType } from '../rating-picker/rating-picker.component';

interface IReviewFormInterface  {
  reviewText: string;
  reviewRating: RatingOptionsType;
}

@Component({
    selector: 'tapos-rating-picker-page',
    standalone: true,
    imports: [
      CommonModule,
      ReactiveFormsModule,
      EditableContentValueAccessorDirective,
      RatingPickerComponent
    ],
    templateUrl: './rating-picker-page.component.html',
    styleUrl: './rating-picker-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingPickerPageComponent {
  public form: FormGroup = this._fb.group<IReviewFormInterface>({
    reviewText: '',
    reviewRating: null
  });

  constructor(private _fb: FormBuilder) {
    // this.form.controls['reviewRating'].disable();

  }

  public onSubmit(e: Event): void {
    console.log(this.form.value);
    this.form.reset()
  }
}
