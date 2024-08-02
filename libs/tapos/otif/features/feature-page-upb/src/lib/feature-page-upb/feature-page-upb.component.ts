import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tapos-feature-page-upb',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './feature-page-upb.component.html',
    styleUrl: './feature-page-upb.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturePageUpbComponent {}
