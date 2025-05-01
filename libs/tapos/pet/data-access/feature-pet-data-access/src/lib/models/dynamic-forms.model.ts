export interface IDynamicOptions {
  label: string,
  value: string,
}

export interface IDynamicControl<T = string> {
  controlType: "input" | "select",
  type?: string,
  label: string,
  value: T | null,
  options?: IDynamicOptions[],
}

export interface IDynamicFormConfig {
  description: string,
  controls: {
    [key: string]: IDynamicControl<string>,
  }
}
