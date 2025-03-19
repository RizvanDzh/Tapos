import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tapos-option',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './option.component.html',
    styleUrl: './option.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionComponent {
  @Input() public value: string | null = null;

  @Output() public selectedOption: EventEmitter<OptionComponent> = new EventEmitter<OptionComponent>();

  @Input() public disabledReason: string = '';

  @Input()
  @HostBinding('class.disabled')
  public isDisabled: boolean = false;

  @HostBinding('class.selected')
  protected isSelected: boolean = false;

  @HostListener('click')
  protected select():void {
    this.highlightSelectedOption();
    this.selectedOption.emit(this)
  }

  public deselect():void {
    this.isSelected = false;
  }

  public highlightSelectedOption(): void {
    this.isSelected = true;
  }
}
