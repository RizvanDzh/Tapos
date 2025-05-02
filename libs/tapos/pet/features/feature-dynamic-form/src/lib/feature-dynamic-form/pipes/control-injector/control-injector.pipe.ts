import { inject, Injector, Pipe, PipeTransform } from '@angular/core';
import { IDynamicControl } from '../../models/dynamic-forms.model';
import { CONTROL_DATA } from '../../control-data.token';

@Pipe({
    name: 'controlInjector',
    standalone: true
})
export class ControlInjector implements PipeTransform {
  public injector: Injector = inject(Injector);

    public transform(controlKey: string, config: IDynamicControl): Injector {
        return Injector.create({
          providers: [
            {
              provide: CONTROL_DATA,
              useValue: { controlKey, config }
            }
          ],
          parent: this.injector
        })
    }
}
