import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTROL_DATA, IControlData } from '../../control-data.token';

@Component({
    selector: 'tapos-dynamic-select',
    standalone: true,
    imports: [CommonModule],
    template: `
      <select [id]="control.controlKey" [value]="control.config.value">
        <option *ngFor="let option of control.config?.options" [value]="option.value">{{option.label}}</option>
      </select>`,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicSelectComponent {
  public control: IControlData = inject(CONTROL_DATA);
}
