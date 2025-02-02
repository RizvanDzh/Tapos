import {Route} from "@angular/router";
import {FeaturePetComponent} from "./feature-pet/feature-pet.component";
import { FeatureTemplateFormComponent } from '@tapos/pet/feature-template-form';
import { FeatureReactiveFormComponent } from '@tapos/pet/feature-reactive-form';
import { FeatureCustomRatingPickerComponent } from '@tapos/feature-custom-rating-picker';
import { FeatureDynamicFormComponent } from '@tapos/feature-dynamic-form';


export const featurePetRoutes: Route[] = [
  {
    path: '',
    component: FeaturePetComponent,
    children: [
      {
        path: 'template-drivers-forms',
        component: FeatureTemplateFormComponent
      },
      {
        path: 'reactive-forms',
        component: FeatureReactiveFormComponent
      },
      {
        path: 'custom-rating-picker',
        component: FeatureCustomRatingPickerComponent
      },
      {
        path: 'dynamic-forms',
        component: FeatureDynamicFormComponent
      }
    ]
  }
]
