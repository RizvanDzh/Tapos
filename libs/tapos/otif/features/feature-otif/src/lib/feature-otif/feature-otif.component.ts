import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureTabsComponent } from '@tapos/feature-tabs';
import { FeaturePageAtotComponent } from '@tapos/feature-page-atot';

@Component({
    selector: 'tapos-feature-otif',
    standalone: true,
    imports: [CommonModule, FeatureTabsComponent, FeaturePageAtotComponent],
    templateUrl: './feature-otif.component.html',
    styleUrl: './feature-otif.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureOtifComponent {}
