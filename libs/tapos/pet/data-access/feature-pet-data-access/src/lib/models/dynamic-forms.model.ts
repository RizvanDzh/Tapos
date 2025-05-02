import { ValidatorFn, Validators } from '@angular/forms';

export interface IDynamicOptions {
  label: string,
  value: string,
}

type TCustomValidators = { banWords: ValidatorFn }
export type TValidatorKeys = keyof Omit<typeof Validators & TCustomValidators, 'prototype' | 'compose' | 'composeAsync'>;

export interface IDynamicControl<T = string> {
  controlType: "input" | "select",
  type?: string,
  label: string,
  value: T | null,
  options?: IDynamicOptions[],
  validators?: {
    [key in TValidatorKeys]?: unknown;
  }
}

export interface IDynamicFormConfig {
  description: string,
  controls: {
    [key: string]: IDynamicControl<string>,
  }
}
