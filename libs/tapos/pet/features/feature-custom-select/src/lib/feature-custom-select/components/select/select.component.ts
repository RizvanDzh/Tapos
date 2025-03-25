import {
  AfterContentInit, Attribute,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  HostListener,
  Input, OnChanges, OnDestroy,
  Output, QueryList, SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay'
import { animate, state, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { OptionComponent } from '../option/option.component';
import { SelectionChange, SelectionModel } from '@angular/cdk/collections';
import { merge, startWith, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

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
  ]
})

export class SelectComponent<T> implements OnChanges, AfterContentInit, OnDestroy  {
  @Input()
  public set value(val: SelectType<T>) {
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

  public get value(): SelectType<T> {
    if(this.selectionModel.isEmpty()) {
      return null;
    }
    if(this.selectionModel.isMultipleSelection()) {
      return this.selectionModel.selected;
    }
    return this.selectionModel.selected[0];

  }

  @Input() public displayWith: ((val: T) => string | number ) | null = null;

  @Input() public compareWith: ((u1: T | null, u2: T | null) => boolean) = (u1: T | null, u2: T | null) => u1 === u2;

  @Input() public label: string = '';

  @Output() public readonly closed: EventEmitter<void> = new EventEmitter<void>();

  @Output() public readonly  opened: EventEmitter<void> = new EventEmitter<void>();

  @Output() public selectionChanged: EventEmitter<SelectType<T>> = new EventEmitter<SelectType<T>>();

  @HostListener('click')
  public open (): void {
    this.isOpen = true;
  }

  @ContentChildren(OptionComponent, {descendants: true})
  private _contentOptions!: QueryList<OptionComponent<T>>;

  public isOpen: boolean = false;

  public selectionModel:SelectionModel<T> = new SelectionModel<T>(coerceBooleanProperty(this.multiple));

  private _destroy$: Subject<void> = new Subject<void>();

  constructor(public cdr: ChangeDetectorRef, @Attribute('multiple') public multiple: string | null ) {
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

    this.selectionModel.changed.subscribe((values: SelectionChange<T>) => {
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

  public onPanelAnimationDone({fromState, toState}:  AnimationEvent): void {
    if(fromState === 'void' && toState === '*' && this.isOpen) {
      this.opened.emit();
    }
    if(fromState === '*' && toState === 'void' && !this.isOpen) {
      this.closed.emit();
    }
  }

  public clearSelectedValues(e: Event): void {
    e.stopPropagation();
    this.selectionModel.clear();
    this.selectionChanged.emit(this.value);
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
    }
    if(!this.selectionModel.isMultipleSelection()) {
      this.close();
    }
  }

}
