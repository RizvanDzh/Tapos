import { inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmIconsFullRegistry, PrizmIconsRegistry } from '@prizm-ui/icons/core';
import { PrizmIconsComponent, PrizmIconsFullComponent } from '@prizm-ui/icons';
import { prizmIconsTempChevronsDropdownSmall } from '@prizm-ui/icons/full/source';

// export enum EIconSvg {
//     CHEVRON_DOWN = 'chevron-down'
// }

// export const iconSvgChevronDown: {
//     name: EIconSvg;
//     data: string;
// } = {
//     name: EIconSvg.CHEVRON_DOWN,
//     data: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6H4L8 10L12 6Z" fill="currentColor"/></svg>`
// };

@NgModule({
    imports: [CommonModule, PrizmIconsComponent, PrizmIconsFullComponent]
})
export class UtilIconsModule {
    private readonly _iconsFullRegistry: PrizmIconsFullRegistry = inject(PrizmIconsFullRegistry);
    private readonly _iconsBaseRegistry: PrizmIconsRegistry = inject(PrizmIconsRegistry);

    constructor() {
        this._iconsFullRegistry.registerIcons([prizmIconsTempChevronsDropdownSmall]);
        this._iconsBaseRegistry.registerIcons([prizmIconsTempChevronsDropdownSmall]);
    }
}
