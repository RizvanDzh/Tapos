export interface IOtifGeneralData {
    atot: IGeneralData;
}

export interface IGeneralData {
    orifValue: number;
    averageValue: number;
    otifAdditionalValue: number;
    gpaphData: IGraphDataValue[];
}

export interface IGraphDataValue {
    time: string;
    value: number;
}
