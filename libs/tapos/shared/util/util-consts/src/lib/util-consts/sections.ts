export interface ISection {
    title: ESectionTitles;
    url: string;
}

export enum ESectionTitles {
    OTIF = 'ОТИФ',
    ATOT = 'АТОТ',
    MNPZ = 'МНПЗ'
}

export const SECTIONS_URLS: Map<string, string> = new Map(
    Object.entries({
        [ESectionTitles.OTIF]: 'otif',
        [ESectionTitles.ATOT]: 'atot',
        [ESectionTitles.MNPZ]: 'mnpz'
    })
);

export const SECTIONS: ISection[] = [
    {
        title: ESectionTitles.OTIF,
        url: SECTIONS_URLS.get(ESectionTitles.OTIF)!
    },
    {
        title: ESectionTitles.ATOT,
        url: SECTIONS_URLS.get(ESectionTitles.ATOT)!
    },
    {
        title: ESectionTitles.MNPZ,
        url: SECTIONS_URLS.get(ESectionTitles.MNPZ)!
    }
];
