import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISwitcher } from './models/switcher.interface';

@Component({
    selector: 'tapos-ui-switcher',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './ui-switcher.component.html',
    styleUrl: './ui-switcher.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiSwitcherComponent implements OnInit {
    public switcherData: ISwitcher[] = [
        { switcherName: 'АИ-92', switcherChip: '88.73' },
        { switcherName: 'АИ-95', switcherChip: '94.66' },
        { switcherName: 'АИ-100', switcherChip: '88.72' },
        { switcherName: 'ДТ сорт F', switcherChip: '100' },
        { switcherName: 'ДТ зимний кл.1', switcherChip: '58.23' }
    ];

    public selectedSwitcherName: string = '';

    ngOnInit(): void {
        this.selectedSwitcherName = this.switcherData[0].switcherName;
    }

    public switchElem(elem: string): void {
        this.selectedSwitcherName = elem;
    }
}
