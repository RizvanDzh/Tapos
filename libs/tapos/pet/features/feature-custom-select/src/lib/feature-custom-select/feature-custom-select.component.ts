import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './components/select/select.component';
import { OptionComponent } from './components/option/option.component';

@Component({
    selector: 'tapos-feature-custom-select',
    standalone: true,
    imports: [CommonModule, SelectComponent, OptionComponent],
    templateUrl: './feature-custom-select.component.html',
    styleUrl: './feature-custom-select.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureCustomSelectComponent {
  public defaultSelectedValue: string = 'potato'

  public onSelectionChange(event: string | null): void {
    console.log(event);
  }
}
