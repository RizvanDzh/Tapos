import { IOtifGeneralData } from './otif-general-data';

export interface IOtifTab {
    title: ETabTitle;
    url: ERouteTab;
    data?: IOtifGeneralData;
}

export enum ETabTitle {
    ATOT = 'АТОТ',
    UPB = 'УПБ',
    GRS = 'ГРС'
}

export enum ERouteTab {
    EMPTY = '',
    ATOT = 'atot',
    UPB = 'upb',
    GRS = 'grs'
}

export const tabsSections: IOtifTab[] = [
    {
        title: ETabTitle.ATOT,
        url: ERouteTab.ATOT
    },
    {
        title: ETabTitle.GRS,
        url: ERouteTab.GRS
    },
    {
        title: ETabTitle.UPB,
        url: ERouteTab.UPB
    }
];
