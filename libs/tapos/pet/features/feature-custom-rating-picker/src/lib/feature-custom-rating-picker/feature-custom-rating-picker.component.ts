import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingPickerPageComponent } from './components/rating-picker-page/rating-picker-page.component';

@Component({
    selector: 'tapos-feature-custom-rating-picker',
    standalone: true,
  imports: [CommonModule, RatingPickerPageComponent],
    templateUrl: './feature-custom-rating-picker.component.html',
    styleUrl: './feature-custom-rating-picker.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureCustomRatingPickerComponent {}
