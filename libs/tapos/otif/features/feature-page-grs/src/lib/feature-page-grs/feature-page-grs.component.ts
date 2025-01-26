import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tapos-feature-page-grs',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './feature-page-grs.component.html',
    styleUrl: './feature-page-grs.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturePageGrsComponent {}
