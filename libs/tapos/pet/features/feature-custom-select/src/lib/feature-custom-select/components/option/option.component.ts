import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlightable } from '@angular/cdk/a11y';

@Component({
    selector: 'tapos-option',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './option.component.html',
    styleUrl: './option.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionComponent<T> implements Highlightable {
  @Input() public value: T | null = null;

  @Output() public selectedOption: EventEmitter<OptionComponent<T>> = new EventEmitter<OptionComponent<T>>();

  @Input() public disabledReason: string = '';

  @Input()
  @HostBinding('class.disabled')
  public isDisabled: boolean = false;

  @HostBinding('class.selected')
  protected isSelected: boolean = false;

  @HostBinding('class.active')
  protected isActivated: boolean = false;

  @HostListener('click')
  protected select():void {
    this.highlightSelectedOption();
    this.selectedOption.emit(this);
  }

  constructor(public cdr: ChangeDetectorRef) {}

  public deselect():void {
    this.isSelected = false;
    this.cdr.markForCheck();
  }

  public highlightSelectedOption(): void {
    this.isSelected = true;
    this.cdr.markForCheck();
  }

  public setActiveStyles(): void {
    this.isActivated = true;
    this.cdr.markForCheck();
  }

  public setInactiveStyles(): void {
    this.isActivated = false;
    this.cdr.markForCheck();
  }
}
