import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmThemeModule } from '@prizm-ui/theme';
import { UiHeaderComponent } from '@tapos/ui-header';
@Component({
    standalone: true,
    imports: [RouterModule, UiHeaderComponent, PrizmThemeModule],
    selector: 'tapos-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    public title: string = 'tapos';
}
