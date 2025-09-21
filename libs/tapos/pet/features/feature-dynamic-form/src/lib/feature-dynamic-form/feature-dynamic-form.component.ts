import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

@Component({
    selector: 'tapos-feature-dynamic-form',
    standalone: true,
    imports: [CommonModule, DynamicFormComponent],
    templateUrl: './feature-dynamic-form.component.html',
    styleUrl: './feature-dynamic-form.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureDynamicFormComponent {}
