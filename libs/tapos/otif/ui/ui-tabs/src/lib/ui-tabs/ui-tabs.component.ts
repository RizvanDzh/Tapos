import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmIconsComponent, PrizmIconsFullComponent } from '@prizm-ui/icons';
import { IOtifTab, tabsSections } from '@tapos/otif/data-access';

@Component({
    selector: 'tapos-ui-tabs',
    standalone: true,
    imports: [CommonModule, PrizmIconsComponent, PrizmIconsFullComponent],
    templateUrl: './ui-tabs.component.html',
    styleUrl: './ui-tabs.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiTabsComponent {
    public tabSections: IOtifTab[] = tabsSections;
}
