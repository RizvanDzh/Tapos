import { IAtotGeneralData } from './general-data';

export interface ITab {
    title: ETabTitle;
    url: ERouteTab;
    data?: IAtotGeneralData;
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

export const tabsSections: ITab[] = [
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
