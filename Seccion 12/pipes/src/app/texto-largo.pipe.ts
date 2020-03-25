import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textoLargo'
})
export class TextoLargoPipe implements PipeTransform {

  transform(value: string): string {
    if(value.toString().length > 140){
      value = value.substr(0, 140) + "...";

    }
    return value;
  }

}
