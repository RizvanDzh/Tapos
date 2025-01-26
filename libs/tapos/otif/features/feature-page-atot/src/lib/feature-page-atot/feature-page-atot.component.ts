import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureSectionComponent } from '@tapos/otif/feature-section';

@Component({
    selector: 'tapos-feature-page-atot',
    standalone: true,
    imports: [CommonModule, FeatureSectionComponent],
    templateUrl: './feature-page-atot.component.html',
    styleUrl: './feature-page-atot.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturePageAtotComponent {}
