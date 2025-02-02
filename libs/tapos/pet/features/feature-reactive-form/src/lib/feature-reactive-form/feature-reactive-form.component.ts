import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tapos-feature-reactive-form',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './feature-reactive-form.component.html',
    styleUrl: './feature-reactive-form.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureReactiveFormComponent {}
