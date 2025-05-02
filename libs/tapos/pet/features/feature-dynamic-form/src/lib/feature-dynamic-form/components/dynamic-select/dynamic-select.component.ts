import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicBaseControl } from '../dynamic-base-control/dynamic-base-control';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'tapos-dynamic-select',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: `
      <ng-container [formGroup]="formGroup">
        <select [formControlName]="control.controlKey" [id]="control.controlKey" [value]="control.config.value">
          <option *ngFor="let option of control.config?.options" [value]="option.value">{{option.label}}</option>
        </select>
      </ng-container>
      `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicSelectComponent extends DynamicBaseControl {
}
