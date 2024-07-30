import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tapos-feature-otif',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './feature-otif.component.html',
    styleUrl: './feature-otif.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureOtifComponent {}
