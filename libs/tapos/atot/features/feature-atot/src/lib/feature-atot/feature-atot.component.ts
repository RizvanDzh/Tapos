import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tapos-feature-atot',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './feature-atot.component.html',
    styleUrl: './feature-atot.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureAtotComponent {}
