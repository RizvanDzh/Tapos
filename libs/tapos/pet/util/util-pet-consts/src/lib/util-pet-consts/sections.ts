export interface IPetSection {
  title: EPetSectionTitle;
  url: string;
}

export enum EPetSectionTitle {
  TemplateDriverForms = 'Template-Driver Forms',
  ReactiveForms = 'Reactive Forms',
  CustomRatingPicker = 'Custom Rating Picker',
  DynamicForms = 'Dynamic Forms',
}


export const SECTIONS_PET_URLS: Map<string, string> = new Map<string, string>(
  Object.entries({
    [EPetSectionTitle.TemplateDriverForms]: 'template-drivers-forms',
    [EPetSectionTitle.ReactiveForms]: 'reactive-forms',
    [EPetSectionTitle.CustomRatingPicker]: 'custom-rating-picker',
    [EPetSectionTitle.DynamicForms]: 'dynamic-forms',
  })
);


export const SECTIONS_PET: IPetSection[] = [
  {
    title: EPetSectionTitle.TemplateDriverForms,
    url: SECTIONS_PET_URLS.get(EPetSectionTitle.TemplateDriverForms)!,
  },
  {
    title: EPetSectionTitle.ReactiveForms,
    url: SECTIONS_PET_URLS.get(EPetSectionTitle.ReactiveForms)!,
  },
  {
    title: EPetSectionTitle.CustomRatingPicker,
    url: SECTIONS_PET_URLS.get(EPetSectionTitle.CustomRatingPicker)!,
  },
  {
    title: EPetSectionTitle.DynamicForms,
    url: SECTIONS_PET_URLS.get(EPetSectionTitle.DynamicForms)!,
  }
]
