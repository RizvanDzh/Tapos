import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tapos-feature-tabs',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './feature-tabs.component.html',
    styleUrl: './feature-tabs.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureTabsComponent {}
