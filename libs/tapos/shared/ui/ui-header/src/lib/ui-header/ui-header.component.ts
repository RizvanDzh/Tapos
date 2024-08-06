import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilIconsModule } from '@tapos/shared/util-icons';
import { FormsModule, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { PrizmDay, PrizmInputLayoutDateComponent, PrizmInputTextModule } from '@prizm-ui/components';
import { PrizmIconsComponent, PrizmIconsFullComponent } from '@prizm-ui/icons';
import { ISection, SECTIONS } from '@tapos/shared/util-consts';
import { PrizmThemeService } from '@prizm-ui/theme';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
    selector: 'tapos-ui-header',
    standalone: true,
    imports: [
        CommonModule,
        UtilIconsModule,
        PrizmInputLayoutDateComponent,
        PrizmInputTextModule,
        FormsModule,
        ReactiveFormsModule,
        PrizmIconsComponent,
        PrizmIconsFullComponent,
        RouterLink,
        RouterModule
    ],
    templateUrl: './ui-header.component.html',
    styleUrl: './ui-header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiHeaderComponent implements OnInit {
    public readonly control: UntypedFormControl = new UntypedFormControl(new PrizmDay(2024, 6, 23));

    public isOpened: boolean = false;

    public menuOptions: ISection[] = SECTIONS;

    constructor(private _theme: PrizmThemeService) {}

    ngOnInit(): void {
        this._theme.update('dark');
    }
}
