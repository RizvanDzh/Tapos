import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tapos-dynamic-select',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dynamic-select.component.html',
    styleUrl: './dynamic-select.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicSelectComponent {}
