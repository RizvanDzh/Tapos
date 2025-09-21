import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicBaseControl } from '../dynamic-base-control/dynamic-base-control';

@Component({
    selector: 'tapos-dynamic-input',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: `
      <ng-container [formGroup]="formGroup">
        <input [formControlName]="control.controlKey"  [type]="control.config.type" [id]="control.controlKey" [value]="control.config.value">
      </ng-container>`,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicInputComponent extends DynamicBaseControl {

}
