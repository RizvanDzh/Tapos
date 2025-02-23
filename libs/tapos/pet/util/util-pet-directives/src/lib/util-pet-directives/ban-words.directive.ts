import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[taposPetBanWords]',
  standalone: true,
  providers: [{ provide: NG_VALIDATORS, useExisting: BanWordsDirective, multi: true}]
})
export class BanWordsDirective implements Validator{
  @Input()
  public set taposPetBanWords(value: string | string[]) {
    this._bannedWords = Array.isArray(value) ? value : [value];
    this._onChange();
  }

  private _bannedWords: string[] = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private _onChange: () => void = () => {}

  public validate(control: AbstractControl<string>): ValidationErrors | null {
    const foundBannedWord: string | undefined = this._bannedWords.find((bannedWord: string) => control.value?.toLowerCase() === bannedWord.toLowerCase());
    return !foundBannedWord
      ? null
      : { taposPetBanWords: { bannedWords: foundBannedWord}};
  }

  public registerOnValidatorChange(fn: () => void): void {
    this._onChange = fn;
  }
}
