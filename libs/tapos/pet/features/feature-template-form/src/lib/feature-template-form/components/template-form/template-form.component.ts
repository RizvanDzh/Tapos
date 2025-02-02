import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IUserInfo } from '@tapos/pet/feature-pet-data-access';

@Component({
    selector: 'tapos-template-form',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './template-form.component.html',
    styleUrl: './template-form.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateFormComponent {
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
