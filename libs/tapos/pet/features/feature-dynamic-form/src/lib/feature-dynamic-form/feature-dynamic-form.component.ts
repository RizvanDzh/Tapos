import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tapos-feature-dynamic-form',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './feature-dynamic-form.component.html',
    styleUrl: './feature-dynamic-form.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureDynamicFormComponent {}
