import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtotSectionComponent } from './components/atot-section/atot-section.component';

@Component({
    selector: 'tapos-feature-page-atot',
    standalone: true,
    imports: [CommonModule, AtotSectionComponent],
    templateUrl: './feature-page-atot.component.html',
    styleUrl: './feature-page-atot.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturePageAtotComponent {}
