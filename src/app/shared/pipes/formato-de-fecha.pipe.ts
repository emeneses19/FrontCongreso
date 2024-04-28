import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoDeFecha'
})
export class FormatoDeFechaPipe implements PipeTransform {

  transform(fecha: Date, formato: string): string {
    if(!fecha){
      return '';
    }
    const dd = fecha.getDate().toString().padStart(2, '0');
    const mm = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const yyyy = fecha.getFullYear().toString();

    return formato.replace('dd', dd).replace('MM', mm).replace('yyyy', yyyy);
  }

}
