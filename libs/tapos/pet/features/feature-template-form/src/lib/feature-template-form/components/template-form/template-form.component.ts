import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { IUserInfo } from '@tapos/pet/feature-pet-data-access';
import { BanWordsDirective, PasswordMatchDirective } from '@tapos/pet/util-pet-directives';

@Component({
    selector: 'tapos-template-form',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, BanWordsDirective, PasswordMatchDirective],
    templateUrl: './template-form.component.html',
    styleUrl: './template-form.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateFormComponent implements OnInit {
  public userInfo: IUserInfo = {
    firstName: '',
    lastName: '',
    nickname: '',
    email: '',
    yearOfBirth: 2022,
    passport: '',
    fullAddress: '',
    city: '',
    postCode: 0,
    password: '',
    confirmPassword: ''
  };

  ngOnInit(): void {
    console.log('It is NgOnInit');
  }

  public get isAdult(): boolean {
    const currentDate: number = new Date().getFullYear();

    return currentDate - this.userInfo.yearOfBirth >= 18;
  }

  public get years(): number[] {
    const now: number = new Date().getUTCFullYear()
    return Array(now - (now - 40)).fill('').map((_: number, idx: number) => now - idx)
  }

  public onSubmitForm(form: NgForm, event: SubmitEvent): void {
    console.log(form.value);

    this.userInfo = {
      firstName: '',
      lastName: '',
      nickname: '',
      email: '',
      yearOfBirth: 2022,
      passport: '',
      fullAddress: '',
      city: '',
      postCode: 0,
      password: '',
      confirmPassword: ''
    }
  }
}
