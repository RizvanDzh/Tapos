import { Route } from '@angular/router';
import { ESectionTitles, SECTIONS_URLS } from '@tapos/shared/util-consts';
import { FeatureOtifComponent } from '@tapos/otif/feature-otif';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: SECTIONS_URLS.get(ESectionTitles.OTIF)
    },
    {
        path: SECTIONS_URLS.get(ESectionTitles.OTIF),
        component: FeatureOtifComponent
    },
    {
        path: SECTIONS_URLS.get(ESectionTitles.ATOT),
        // eslint-disable-next-line @typescript-eslint/typedef
        loadComponent: () => import('@tapos/atot/feature-atot').then((m) => m.FeatureAtotComponent)
    },
    {
        path: SECTIONS_URLS.get(ESectionTitles.MNPZ),
        // eslint-disable-next-line @typescript-eslint/typedef
        loadComponent: () => import('@tapos/mnpz/feature-mnpz').then((m) => m.FeatureMnpzComponent)
    },
    {
        path: SECTIONS_URLS.get(ESectionTitles.PET),
        // eslint-disable-next-line @typescript-eslint/typedef
        loadChildren: () => import('@tapos/pet/feature-pet').then((m) => m.featurePetRoutes)
    }
];
