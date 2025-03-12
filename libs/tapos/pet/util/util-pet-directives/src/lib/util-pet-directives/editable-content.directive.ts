import { Directive, ElementRef, Renderer2, SecurityContext } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { HostListener } from '@angular/core'

// eslint-disable-next-line @typescript-eslint/typedef
const DEFAULT_REVIEW_TEMPLATE = `
    <h4 data-placeholder="Title..."></h4>
    <p data-placeholder="Describe experience..."></p>
`;

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[formControlName][contenteditable],[formControl][contenteditable],[ngModel][contenteditable]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: EditableContentValueAccessorDirective,
      multi: true
  }]
})
export class EditableContentValueAccessorDirective implements ControlValueAccessor {
  private _onChange!: (newValue: string) => void;
  private _onTouched!: () => void;

  @HostListener('input', ['$event'])
     public onInput(event: Event): void {
    this._onChange((event.target as HTMLElement).innerHTML);
  }

  @HostListener('blur')
  public onBlur(): void {
    this._onTouched();
  }

  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef,
    private _sanitizer: DomSanitizer
  ) {}

  public writeValue(obj: any): void {
      console.log('Method writeValue has been called', obj);
      this._renderer.setProperty(
        this._elementRef.nativeElement,
        'innerHTML',
        this._sanitizer.sanitize(SecurityContext.HTML, obj) || DEFAULT_REVIEW_TEMPLATE
      )
  }

  public registerOnChange(fn: any): void {
      console.log('Method RegisterOnChange has been called', fn);
      this._onChange = fn;
  }

  public registerOnTouched(fn: any): void {
      console.log('Method RegisterOnTouched has been called', fn);
      this._onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
      console.log('Method SetDisabled has been called', isDisabled);
      this._renderer.setProperty(
        this._elementRef.nativeElement,
        'contentEditable',
        !isDisabled
      )
  }
}
