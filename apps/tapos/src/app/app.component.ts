import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiHeaderComponent } from '@tapos/shared/ui-header';

@Component({
    standalone: true,
    imports: [RouterModule, UiHeaderComponent],
    selector: 'tapos-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    public title: string = 'tapos';
}
