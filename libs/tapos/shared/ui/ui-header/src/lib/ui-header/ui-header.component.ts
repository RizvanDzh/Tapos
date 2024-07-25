import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilIconsModule } from '@tapos/util-icons';
import { FormsModule, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { PrizmDay, PrizmDropdownHostModule, PrizmInputLayoutMonthModule } from '@prizm-ui/components';
import { PrizmIconsComponent, PrizmIconsFullComponent } from '@prizm-ui/icons';

@Component({
    selector: 'tapos-ui-header',
    standalone: true,
    imports: [
        CommonModule,
        UtilIconsModule,
        PrizmInputLayoutMonthModule,
        FormsModule,
        ReactiveFormsModule,
        PrizmDropdownHostModule,
        PrizmIconsComponent,
        PrizmIconsFullComponent
    ],
    templateUrl: './ui-header.component.html',
    styleUrl: './ui-header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiHeaderComponent {
    public readonly control: UntypedFormControl = new UntypedFormControl(new PrizmDay(2024, 6, 23));

    public isOpened: boolean = false;
}
