import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { IUserInfo } from '@tapos/pet/feature-pet-data-access';
import { BanWordsDirective, PasswordMatchDirective } from '@tapos/pet/util-pet-directives';
import {
  UniqueNameDirective
} from '@tapos/pet/util-pet-directives';

@Component({
    selector: 'tapos-template-form',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, BanWordsDirective, PasswordMatchDirective, UniqueNameDirective],
    templateUrl: './template-form.component.html',
    styleUrl: './template-form.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateFormComponent implements OnInit, AfterViewInit {
  public userInfo: IUserInfo = {
    firstName: 'Rizvan',
    lastName: 'Dzhamaldinov',
    nickname: '',
    email: '1234@gmail.com',
    yearOfBirth: 2022,
    passport: '1234567821',
    fullAddress: '',
    city: '',
    postCode: 0,
    password: '',
    confirmPassword: ''
  };

  private _initialFormValue: unknown;

  @ViewChild(NgForm)
  private _ngFormDir!: NgForm;

  ngOnInit(): void {
    console.log('It is NgOnInit');
  }

  ngAfterViewInit(): void {
    queueMicrotask(() => {
      this._initialFormValue = this._ngFormDir.value;
    })
  }

  public get isAdult(): boolean {
    const currentDate: number = new Date().getFullYear();

    return currentDate - this.userInfo.yearOfBirth >= 18;
  }

  public get years(): number[] {
    const now: number = new Date().getUTCFullYear()
    return Array(now - (now - 40)).fill('').map((_: number, idx: number) => now - idx)
  }

  public onSubmitForm(e: SubmitEvent): void {
    this._ngFormDir.resetForm(this._ngFormDir.value);
    this._initialFormValue = this._ngFormDir.value;
  }

  public onReset(e: Event): void {
    e.preventDefault();
    this._ngFormDir.resetForm(this._initialFormValue)
  }
}
