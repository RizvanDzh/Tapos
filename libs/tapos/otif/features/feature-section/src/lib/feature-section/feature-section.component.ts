import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionType } from '@tapos/shared/util-consts';
import { UiSwitcherComponent } from '@tapos/shared/ui-switcher';
import { PrizmSidebarModule, PrizmSwitcherItem, PrizmSwitcherModule } from '@prizm-ui/components';

@Component({
    selector: 'tapos-feature-section',
    standalone: true,
    imports: [CommonModule, UiSwitcherComponent, PrizmSwitcherModule, PrizmSidebarModule],
    templateUrl: './feature-section.component.html',
    styleUrl: './feature-section.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureSectionComponent {
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
