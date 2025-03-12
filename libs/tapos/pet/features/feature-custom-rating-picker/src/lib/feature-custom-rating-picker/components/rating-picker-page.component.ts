import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EditableContentValueAccessorDirective } from '@tapos/pet/util-pet-directives';


@Component({
    selector: 'tapos-rating-picker-page',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, EditableContentValueAccessorDirective],
    templateUrl: './rating-picker-page.component.html',
    styleUrl: './rating-picker-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingPickerPageComponent {
  public form: FormGroup = this._fb.group({
    reviewText: '',
  });

  constructor(private _fb: FormBuilder) {
  }

  public onSubmit(e: Event): void {
    console.log(this.form.value);
  }


}
