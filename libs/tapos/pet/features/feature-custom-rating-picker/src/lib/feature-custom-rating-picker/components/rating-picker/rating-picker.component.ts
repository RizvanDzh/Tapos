import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter, HostBinding, HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type RatingOptionsType = 'perfect' | 'good' | 'neutral' | 'bad' | null;

@Component({
  selector: 'tapos-rating-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating-picker.component.html',
  styleUrl: './rating-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RatingPickerComponent,
      multi: true
  }]
})
export class RatingPickerComponent implements OnChanges, ControlValueAccessor {
  @Input() public value: RatingOptionsType = null;

  @Input()
  public disabled: boolean = false;

  @Output() public changed: EventEmitter<RatingOptionsType> = new EventEmitter<RatingOptionsType>();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private _onChange: (value: RatingOptionsType) => void = () => {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private _onTouched: () => void = () => {};

  @HostBinding('attr.tabIndex')
  public tabIndex: number = 0

  @Input()
  @HostListener('blur')
  public onBlur(): void {
    this._onTouched()
  }

  constructor(private _cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['value']) {
       this._onChange(changes['value'].currentValue);
    }
  }

  public writeValue(obj: RatingOptionsType): void {
      this.value = obj;
      this._cdr.markForCheck();
  }


  public registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this._cdr.markForCheck();
  }

  public setValue(value: RatingOptionsType): void {
    if (!this.disabled) {
      this.value = value;
      this._onChange(this.value);
      this._onTouched();
      this.changed.emit(this.value);
    }
  }
}
