import {
  AfterContentInit, Attribute,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChildren, ElementRef,
  EventEmitter, HostBinding,
  HostListener,
  Input, OnChanges, OnDestroy,
  Output, QueryList, SimpleChanges, ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay'
import { animate, state, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { OptionComponent } from '../option/option.component';
import { SelectionChange, SelectionModel } from '@angular/cdk/collections';
import { merge, startWith, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';

export type SelectType<T> = T | T[] | null;

@Component({
  selector: 'tapos-select',
  standalone: true,
  imports: [CommonModule, OverlayModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('dropDown', [
      state('void', style({ transform: 'scaleY(0)', opacity: 0 })),
      state('*', style({transform: 'scaleY(1)', opacity: 1})),
      transition('void => *', [animate('300ms cubic-bezier(0, 01, 0.25, 1)')]),
      transition('* => void', [animate('400ms cubic-bezier(0.88, -0.7, 0.86, 0.86)')])
    ])
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SelectComponent,
    multi: true
  }]
})

export class SelectComponent<T> implements OnChanges, AfterContentInit, OnDestroy, ControlValueAccessor  {
  @Input()
  public set value(val: SelectType<T>) {
    this._setValue(val);
    this._onChange(this.value);
  }

  public get value(): SelectType<T> {
    if(this.selectionModel.isEmpty()) {
      return null;
    }
    if(this.selectionModel.isMultipleSelection()) {
      return this.selectionModel.selected;
    }
    return this.selectionModel.selected[0];

  }

  @Input()
  public displayWith: ((val: T) => string | number ) | null = null;

  @Input()
  public compareWith: ((u1: T | null, u2: T | null) => boolean) = (u1: T | null, u2: T | null) => u1 === u2;

  @Input()
  public label: string = '';

  @Input()
  public isSearchable: boolean = false;

  @Input()
  public disabled: boolean = false;

  @Output()
  public readonly closed: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public readonly  opened: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public selectionChanged: EventEmitter<SelectType<T>> = new EventEmitter<SelectType<T>>();

  @Output()
  public searchChanged: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('click')
  public open (): void {
    this.isOpen = true;
    if(this.isSearchable) {
      setTimeout(() => {
        this._searchInputEl.nativeElement.focus();
      }, 0)
    }
    this.cdr.markForCheck();
  }

  @HostListener('blur')
  public markAsTouched(): void {
    if(!this.disabled && !this.isOpen) {
      this._onTouch();
    }
  }

  @HostListener('keydown', ['$event'])
  protected onKeyDown(e: KeyboardEvent):void {
    if(e.key === 'ArrowDown' && !this.isOpen) {
      this.open();
      return;
    }
    if((e.key === 'ArrowUp' || e.key === 'ArrowDown') && this.isOpen) {
      this._listKeyManager.onKeydown(e);
    }
  }

  @HostBinding('class.select-panel-open')
  public isOpen: boolean = false;

  @HostBinding('attr.tabIndex')
  @Input()
  public tabIndex: number = 0

  @ContentChildren(OptionComponent, {descendants: true})
  private _contentOptions!: QueryList<OptionComponent<T>>;

  @ViewChild('input') private _searchInputEl!: ElementRef<HTMLInputElement>;

  public selectionModel:SelectionModel<T> = new SelectionModel<T>(coerceBooleanProperty(this.multiple));

  private _destroy$: Subject<void> = new Subject<void>();

  private _listKeyManager!: ActiveDescendantKeyManager<OptionComponent<T>>;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private _onChange: (value: SelectType<T>) => void = () => {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private _onTouch: () => void = () => {};

  constructor(
    public cdr: ChangeDetectorRef,
    public hostElementRef: ElementRef,
    @Attribute('multiple') public multiple: string | null,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['compareWith']) {
      this.selectionModel.compareWith = changes['compareWith'].currentValue;
      this._highlightSelectedOption();
    }
  }

  ngAfterContentInit(): void {
    console.log(this._contentOptions);
    // this._highlightSelectedOption();
    this._listKeyManager = new ActiveDescendantKeyManager(this._contentOptions).withWrap();
    this.selectionModel.changed.pipe(takeUntil(this._destroy$)).subscribe((values: SelectionChange<T>) => {
      values.removed.forEach((rv: T | null ) => this._findOptionsByValue(rv)?.deselect());
      values.added.forEach((av: T | null) => this._findOptionsByValue(av)?.highlightSelectedOption());
    })

    this._contentOptions.changes.pipe(
      startWith(this._contentOptions),
      tap(() => queueMicrotask(() => this._highlightSelectedOption())),
      switchMap((options: OptionComponent<T>[]) => merge(...options.map((option: OptionComponent<T>) => option.selectedOption))),
      takeUntil(this._destroy$),
    ).subscribe((selectedOption: OptionComponent<T>) => {
      this._handleSelection(selectedOption);
      this.cdr.markForCheck();
    })
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public close(): void {
    this.isOpen = false;
    this._onTouch();
    this.hostElementRef.nativeElement.focus();
    this.cdr.markForCheck();
  }

  protected get displayValue(): string | number | SelectType<T> | (string | number)[]  {
    if(this.displayWith && this.value) {
      if(Array.isArray(this.value)) {
        return this.value.map(this.displayWith);
      }
      return this.displayWith(this.value);

    }
    return this.value;
  }

  protected onPanelAnimationDone({fromState, toState}:  AnimationEvent): void {
    if(fromState === 'void' && this.isOpen) {
      this.opened.emit();
    }
    if(toState === 'void' && !this.isOpen) {
      this.closed.emit();
    }
  }

  protected handleSearchInput(e: Event): void {
    this.searchChanged.emit((e.target as HTMLInputElement).value);
  }

  public clearSelectedValues(e: Event): void {
    e.stopPropagation();
    this.selectionModel.clear();
    this.selectionChanged.emit(this.value);
    this._onChange(this.value);
    this.cdr.markForCheck();
  }

  private _highlightSelectedOption(): void {
    const valuesWithUpdatedReferences: T[] = this.selectionModel.selected.map((value: T) => {
        const correspondingOption: OptionComponent<T> | undefined = this._findOptionsByValue(value);
        return correspondingOption ? correspondingOption.value! : value;
    })
    this.selectionModel.clear();
    this.selectionModel.select(...valuesWithUpdatedReferences);
  }

  private _findOptionsByValue(value: T | null): OptionComponent<T> | undefined {
    return this._contentOptions && this._contentOptions.find((option: OptionComponent<T>) => this.compareWith(option.value, value));
  }

  private _handleSelection(option: OptionComponent<T>): void {
    if (option.value) {
      this.selectionModel.toggle(option.value);
      this.selectionChanged.emit(this.value);
      this._onChange(this.value);
    }
    if(!this.selectionModel.isMultipleSelection()) {
      this.close();
    }
  }

  private _setValue(val: SelectType<T>): void {
    this.selectionModel.clear();
    if(val) {
    if(Array.isArray(val)) {
      this.selectionModel.select(...val);
    } else {
      this.selectionModel.select(val);
    }
    this._highlightSelectedOption();
  }
  }

  public writeValue(obj: SelectType<T>): void {
    this._setValue(obj);
    this.cdr.markForCheck();
  }

  public registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }
}
