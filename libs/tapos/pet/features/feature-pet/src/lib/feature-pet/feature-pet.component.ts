import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tapos-feature-pet',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './feature-pet.component.html',
    styleUrl: './feature-pet.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturePetComponent {}
