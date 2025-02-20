import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { IUserInfo } from '@tapos/pet/feature-pet-data-access';
import { BanWordsDirective } from '@tapos/pet/util-pet-directives';

@Component({
    selector: 'tapos-template-form',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, BanWordsDirective],
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

  public onSubmitForm(form: NgForm, event: SubmitEvent): void {
    console.log(form.value);
    console.log(event);

    this.userInfo = {
      firstName: '',
        lastName: '',
        nickname: '',
        email: '',
        yearOfBirth: 0,
        passport: '',
        fullAddress: '',
        city: '',
        postCode: 0
    }
  }
}
