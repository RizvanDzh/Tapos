import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './components/select/select.component';
import { OptionComponent } from './components/option/option.component';
import { User } from '@tapos/pet/feature-pet-data-access';

@Component({
    selector: 'tapos-feature-custom-select',
    standalone: true,
    imports: [CommonModule, SelectComponent, OptionComponent],
    templateUrl: './feature-custom-select.component.html',
    styleUrl: './feature-custom-select.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureCustomSelectComponent {
  public defaultSelectedValue: User = new User(1, 'Peter Jackson', 'peter');

  public users: User[] = [
    new User(1, 'Peter Jackson', 'peter'),
    new User(2, 'Steve Maiden', 'steve'),
    new User(3, 'Chris Tucker', 'chris'),
    new User(4, 'Phil Richard', 'phil', true)
  ]

  constructor(private _cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.defaultSelectedValue = new User(2, 'Chris Tucker', 'chris');
      this.users = [
        new User(1, 'Peter Jackson', 'peter'),
        new User(2, 'Chris Tucker', 'chris'),
        new User(3, 'Phil Richard', 'phil', true)
      ];
      this._cdr.markForCheck();
    }, 3000)
  }

  public onSelectionChange(event: string | null | User): void {
    console.log(event);
  }

  public displayWithFn(user: User): string {
    return user.name;
  }

  public compareWithFn(user1: User | null, user2: User | null): boolean {
    return user1?.name === user2?.name;
  }
}
