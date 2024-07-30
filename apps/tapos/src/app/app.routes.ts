import { Route } from '@angular/router';
import { ESectionTitles, SECTIONS_URLS } from '@tapos/util-consts';
// import { FeatureOtifComponent } from '@tapos/feature-otif';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: SECTIONS_URLS.get(ESectionTitles.OTIF)
    },
    {
        path: SECTIONS_URLS.get(ESectionTitles.OTIF),
        // component: FeatureOtifComponent
        // eslint-disable-next-line @typescript-eslint/typedef
        loadComponent: () => import('@tapos/feature-otif').then((m) => m.FeatureOtifComponent)
    },
    {
        path: SECTIONS_URLS.get(ESectionTitles.ATOT),
        // eslint-disable-next-line @typescript-eslint/typedef
        loadComponent: () => import('@tapos/feature-atot').then((m) => m.FeatureAtotComponent)
    },
    {
        path: SECTIONS_URLS.get(ESectionTitles.MNPZ),
        // eslint-disable-next-line @typescript-eslint/typedef
        loadComponent: () => import('@tapos/feature-mnpz').then((m) => m.FeatureMnpzComponent)
    }
];
