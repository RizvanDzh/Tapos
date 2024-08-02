import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tapos-ui-switcher',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './ui-switcher.component.html',
    styleUrl: './ui-switcher.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiSwitcherComponent {}
