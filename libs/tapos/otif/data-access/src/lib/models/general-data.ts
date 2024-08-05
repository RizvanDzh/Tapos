export interface IAtotGeneralData {
    atot: IGeneralData;
}

export interface IGeneralData {
    otifValue: number;
    averageValue: number;
    otifAdditionalValue: number;
    graphData: IGeneralGraphData[];
}

export interface IGeneralGraphData {
    time: string;
    value: number;
}
