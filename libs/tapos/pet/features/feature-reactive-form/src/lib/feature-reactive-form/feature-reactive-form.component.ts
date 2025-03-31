import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

@Component({
    selector: 'tapos-feature-reactive-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormComponent],
    templateUrl: './feature-reactive-form.component.html',
    styleUrl: './feature-reactive-form.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureReactiveFormComponent {
}
