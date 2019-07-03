import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true ): string {


    if ( activar ) {
      let remplazo = '';

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < value.length; i++) {
        remplazo += '*';
      }
      value = remplazo;
    }

    return value;
  }

}
