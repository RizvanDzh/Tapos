import { DatemodesType } from '@tapos/shared/data-access';

export interface IOtifRequestData {
    mode: DatemodesType;
    dateTo: string;
    dateFrom: string;
}
