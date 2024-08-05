import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionType } from '@tapos/util-consts';
import { UiSwitcherComponent } from '@tapos/ui-switcher';
import { PrizmSidebarModule, PrizmSwitcherItem, PrizmSwitcherModule } from '@prizm-ui/components';

@Component({
    selector: 'tapos-atot-section',
    standalone: true,
    imports: [CommonModule, UiSwitcherComponent, PrizmSwitcherModule, PrizmSidebarModule],
    templateUrl: './atot-section.component.html',
    styleUrl: './atot-section.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AtotSectionComponent {
    @Input() public sectionType!: SectionType;

    public selectedIndex: number = 0;

    public readonly switchersIf: PrizmSwitcherItem[] = [
        {
            title: 'Общий'
        },
        {
            title: 'Динамика по продукту'
        }
    ];

    public readonly switchersOt: PrizmSwitcherItem[] = [
        {
            title: 'Общий'
        },
        {
            title: 'Динамика по операциям'
        }
    ];
}
