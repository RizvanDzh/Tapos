import { IOtifFactorData } from './otif-factor-data';
import { IOtifGeneralData } from './otif-general-data';
import { IOtifIfData } from './otif-if-data';
import { IOtifOtData } from './otif-ot-data';

export interface IOtifResponseData {
    generalData: IOtifGeneralData;
    ifData: IOtifIfData;
    factorData: IOtifFactorData[];
    otData: IOtifOtData;
}
