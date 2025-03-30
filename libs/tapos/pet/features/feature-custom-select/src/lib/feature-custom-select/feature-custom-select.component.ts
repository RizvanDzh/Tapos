import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent, SelectType } from './components/select/select.component';
import { OptionComponent } from './components/option/option.component';
import { User } from '@tapos/pet/feature-pet-data-access';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'tapos-feature-custom-select',
    standalone: true,
    imports: [CommonModule, SelectComponent, OptionComponent, ReactiveFormsModule],
    templateUrl: './feature-custom-select.component.html',
    styleUrl: './feature-custom-select.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureCustomSelectComponent implements OnInit {
  public defaultSelectedValue: FormControl<SelectType<User>> =  new FormControl([
    new User(1, 'Peter Jackson', 'peter'),
    new User(2, 'Steve Maiden', 'steve'),
  ])

  public users: User[] = [
    new User(1, 'Peter Jackson', 'peter'),
    new User(2, 'Steve Maiden', 'steve'),
    new User(3, 'Chris Tucker', 'chris'),
    new User(4, 'Phil Richard', 'phil', true),
    new User(5, 'Alex Clare', 'alex'),
    new User(6, 'Nicolas Jackson', 'nicolas'),
    new User(7, 'Cole Palmer', 'cole'),
    new User(8, 'Jadon Sancho', 'jadon'),
    new User(9, 'Marcus Rashford', 'marcus'),
    new User(10, 'Jack Grealish', 'jack', true),
  ]

  public filteredUsers: User[] = this.users;

  constructor(private _cdr: ChangeDetectorRef) {
    // setTimeout(() => {
    //   this.defaultSelectedValue = new User(2, 'Chris Tucker', 'chris');
    //   this.users = [
    //     new User(1, 'Peter Jackson', 'peter'),
    //     new User(2, 'Chris Tucker', 'chris'),
    //     new User(3, 'Phil Richard', 'phil', true)
    //   ];
    //   this._cdr.markForCheck();
    // }, 3000)
  }

  ngOnInit(): void {
    this.defaultSelectedValue.valueChanges.subscribe(this.onSelectionChange)
  }

  public onSelectionChange(event: string | null | User | User[]): void {
    console.log(event);
  }

  public onSearchChanged(queryValue: string): void {
    this.filteredUsers = this.users.filter((user: User) => {
      return user.name.toLowerCase().startsWith(queryValue.toLowerCase())
    })
  }

  public displayWithFn(user: User): string {
    return user.name;
  }

  public compareWithFn(user1: User | null, user2: User | null): boolean {
    return user1?.name === user2?.name;
  }


}
