export interface IOtData {
    deviation: number;
    otTotal: number;
    generalOtData: IGeneralOtData[];
    planData: IPlanData[];
    factData: IFactData[];
}

export interface IGeneralOtData {
    time: string;
    otValue: number;
    averageTime: number;
}

export interface IPlanData {
    kontrolPointID: string;
    kontrolPointName: string;
    plan: number;
}

export interface IFactData {
    time: string;
    kontrolPointID: string;
    kontrolPointName: string;
    fact: number;
}
