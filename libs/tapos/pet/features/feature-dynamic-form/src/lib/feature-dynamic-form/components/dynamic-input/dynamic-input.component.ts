import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tapos-dynamic-input',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dynamic-input.component.html',
    styleUrl: './dynamic-input.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicInputComponent {}
