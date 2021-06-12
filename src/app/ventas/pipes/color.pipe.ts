import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/ventas';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  // Devuelve el nombre del color, asociado al indice pasado como valor en el Enum.
  // Importante tener ordenados los colores en el Enum si se desea ordenar en algun momento por este tipo de campo
  transform(value: number): string {
    return Color[value];
  }

}
