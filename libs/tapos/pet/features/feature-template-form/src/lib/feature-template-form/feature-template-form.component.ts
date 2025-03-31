import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './components/template-form/template-form.component';

@Component({
    selector: 'tapos-feature-template-form',
    standalone: true,
    imports: [CommonModule, TemplateFormComponent],
    templateUrl: './feature-template-form.component.html',
    styleUrl: './feature-template-form.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureTemplateFormComponent {}
