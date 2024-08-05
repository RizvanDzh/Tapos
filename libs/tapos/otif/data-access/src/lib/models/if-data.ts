export interface IIfData {
    ifTotal: string;
    deviation: number;
    graphData: IIfGraphData[];
}

export interface IIfGraphData {
    time: string;
    itemID: string;
    itemName: string;
    plan: number;
    ifItem: number;
    fact: number;
    ifByTime: number;
}
