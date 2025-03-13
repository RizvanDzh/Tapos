import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay'

@Component({
    selector: 'tapos-select',
    standalone: true,
    imports: [CommonModule, OverlayModule],
    templateUrl: './select.component.html',
    styleUrl: './select.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {
  @Input() public value: string | null = null;

  @Input() public label: string = '';

  @HostListener('click')
  public open (): void {
    this.isOpen = true;
  }

  public isOpen: boolean = false;

  public close(): void {
    this.isOpen = false;
  }

}
