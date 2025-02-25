import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tapos-reactive-form',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './reactive-form.component.html',
    styleUrl: './reactive-form.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveFormComponent {}
