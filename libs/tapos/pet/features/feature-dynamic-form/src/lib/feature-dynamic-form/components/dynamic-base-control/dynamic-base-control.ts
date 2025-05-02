import { Directive, inject } from '@angular/core';
import { CONTROL_DATA, IControlData } from '../../control-data.token';
import { ControlContainer, FormGroup } from '@angular/forms';

@Directive()

export class DynamicBaseControl {
  public control: IControlData = inject(CONTROL_DATA);

  public get formGroup(): FormGroup {
    return this.parentFormGroup.control as FormGroup;
  }

  public parentFormGroup: ControlContainer = inject(ControlContainer);
}
