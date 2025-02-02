import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tapos-feature-custom-rating-picker',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './feature-custom-rating-picker.component.html',
    styleUrl: './feature-custom-rating-picker.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureCustomRatingPickerComponent {}
