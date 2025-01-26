import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUserInfo } from '@tapos/pet/feature-pet-data-access';

@Component({
    selector: 'tapos-template-forms-page',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './template-forms-page.component.html',
    styleUrl: './template-forms-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateFormsPageComponent implements OnInit {
    public userInfo: IUserInfo = {
        firstName: '',
        lastName: '',
        nickname: '',
        email: '',
        yearOfBirth: 0,
        passport: '',
        fullAddress: '',
        city: '',
        postCode: 0
    };

    ngOnInit(): void {
        console.log('It is NgOnInit');
    }
}
