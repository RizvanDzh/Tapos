import { InjectionToken } from '@angular/core';
import { IDynamicControl } from './models/dynamic-forms.model';

export interface IControlData {
  controlKey: string;
  config: IDynamicControl
}


export const CONTROL_DATA: InjectionToken<IControlData> = new InjectionToken<IControlData>('Control Data')
