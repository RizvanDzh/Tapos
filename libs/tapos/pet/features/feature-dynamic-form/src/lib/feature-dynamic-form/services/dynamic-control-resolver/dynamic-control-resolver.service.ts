import { Injectable, Type } from '@angular/core';
import { IDynamicControl } from '../../models/dynamic-forms.model';
import { DynamicInputComponent } from '../../components/dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from '../../components/dynamic-select/dynamic-select.component';

export type TDynamicControlsMap = {
  [T in IDynamicControl['controlType']]: Type<unknown>
}

@Injectable({
  providedIn: 'root'
})

export class DynamicControlResolver {
  private _controlComponents: TDynamicControlsMap = {
    "input": DynamicInputComponent,
    "select": DynamicSelectComponent
  }

  public resolve(controlType: keyof TDynamicControlsMap): Type<unknown> {
    return this._controlComponents[controlType]
  }
}
