import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTROL_DATA, IControlData } from '../../control-data.token';

@Component({
    selector: 'tapos-dynamic-input',
    standalone: true,
    imports: [CommonModule],
    template: `<input [type]="control.config.type" [id]="control.controlKey" [value]="control.config.value">`,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicInputComponent {
  public control: IControlData = inject(CONTROL_DATA)
}
