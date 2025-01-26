export interface ILegendItem {
    legendName: string;
    legendAmount?: number;
    legendMarker: string;
}

export interface ILegendDynamicItems {
    legendId: string;
    legendDynamicItems: ILegendItem[];
}
