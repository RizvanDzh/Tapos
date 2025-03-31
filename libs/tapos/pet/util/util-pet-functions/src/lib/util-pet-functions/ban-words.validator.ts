import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function banWords(bannedWords: string[] = []): ValidatorFn {
  return (control: AbstractControl<string | null>): ValidationErrors | null => {
    const foundedWord: string | undefined = bannedWords.find(
      (word: string) => control.value?.toLowerCase() === word.toLowerCase()
    );

    return !foundedWord ? null : {banWords: {bannedWords: foundedWord}}
  }
}
