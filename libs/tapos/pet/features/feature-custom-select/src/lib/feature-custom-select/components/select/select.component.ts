import {
  AfterContentInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  HostListener,
  Input, OnDestroy,
  Output, QueryList
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay'
import { animate, state, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { OptionComponent } from '../option/option.component';
import { SelectionChange, SelectionModel } from '@angular/cdk/collections';
import { merge, startWith, Subject, switchMap, takeUntil } from 'rxjs';

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
export class SelectComponent implements AfterContentInit, OnDestroy  {
  @Input()
  public set value(val: string | null) {
    this.selectionModel.clear();
    if(val) {
      this.selectionModel.select(val);
    }
  }

  public get value(): string | null {
    return this.selectionModel.selected[0] || null
  }

  @Input() public label: string = '';

  @Output() public readonly closed: EventEmitter<void> = new EventEmitter<void>();

  @Output() public readonly  opened: EventEmitter<void> = new EventEmitter<void>();

  @Output() public selectionChanged: EventEmitter<string | null> = new EventEmitter<string | null>();

  @HostListener('click')
  public open (): void {
    this.isOpen = true;
  }

  @ContentChildren(OptionComponent, {descendants: true})
  private _contentOptions!: QueryList<OptionComponent>;

  public isOpen: boolean = false;

  public selectionModel:SelectionModel<string> = new SelectionModel<string>();

  private _destroy$: Subject<void> = new Subject<void>();

  constructor(public cdr: ChangeDetectorRef) {
  }

  ngAfterContentInit(): void {
    console.log(this._contentOptions);
    this._highlightSelectedOption(this.value);

    this.selectionModel.changed.subscribe((values: SelectionChange<string>) => {
      values.removed.forEach((rv:string ) => this._findOptionsByValue(rv)?.deselect());
    })

    this._contentOptions.changes.pipe(
      /*startWith(this._contentOptions),*/
      switchMap((options: OptionComponent[]) => merge(...options.map((option: OptionComponent) => option.selectedOption))),
      takeUntil(this._destroy$),
    ).subscribe((selectedOption: OptionComponent) => {
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

  public onPanelAnimationDone({fromState, toState}:  AnimationEvent): void {
    if(fromState === 'void' && toState === '*' && this.isOpen) {
      this.opened.emit();
    }
    if(fromState === '*' && toState === 'void' && !this.isOpen) {
      this.closed.emit();
    }
  }

  private _highlightSelectedOption(value: string | null): void {
    this._findOptionsByValue(value)?.highlightSelectedOption();
  }

  private _findOptionsByValue(value: string | null): OptionComponent | undefined {
    return this._contentOptions && this._contentOptions.find((option: OptionComponent) => option.value === value)
  }

  private _handleSelection(option: OptionComponent): void {
    if (option.value) {
      this.selectionModel.toggle(option.value);
      this.selectionChanged.emit(this.value);
    }
    this.close();
  }

}
