import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tapos-feature-mnpz',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './feature-mnpz.component.html',
    styleUrl: './feature-mnpz.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureMnpzComponent {}
