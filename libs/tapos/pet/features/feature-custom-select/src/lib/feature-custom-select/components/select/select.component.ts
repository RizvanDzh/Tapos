import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay'
import { animate, state, style, transition, trigger, AnimationEvent } from '@angular/animations';

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
export class SelectComponent {
  @Input() public value: string | null = null;

  @Input() public label: string = '';

  @Output() public readonly closed: EventEmitter<void> = new EventEmitter<void>();

  @Output() public readonly  opened: EventEmitter<void> = new EventEmitter<void>();

  @HostListener('click')
  public open (): void {
    this.isOpen = true;
  }

  public isOpen: boolean = false;

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
}
