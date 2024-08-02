import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmIconsComponent, PrizmIconsFullComponent } from '@prizm-ui/icons';
import { ITab, tabsSections } from '@tapos/data-access';

@Component({
    selector: 'tapos-feature-tabs',
    standalone: true,
    imports: [CommonModule, PrizmIconsComponent, PrizmIconsFullComponent],
    templateUrl: './feature-tabs.component.html',
    styleUrl: './feature-tabs.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureTabsComponent {
    public tabSections: ITab[] = tabsSections;
}
