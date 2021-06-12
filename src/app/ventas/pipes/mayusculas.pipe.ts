import { Pipe, PipeTransform } from '@angular/core';

// ng g pipe ruta/pipes/nombrepipe

@Pipe({
  name: 'mayusculas'  // El nombre de nuestro pipe
})
export class MayusculasPipe implements PipeTransform {

  // Los pipes reciben un valor, opcionalmente unos argumentos separados por :, y debe retornar un valor
  // Estos no mutan la información, solo la decoran.

  // Si son varios argumentos se usa como parametro un array destructurado ...args: string[]
  // Parametros opcionales se define su valor por defecto en la firma del metodo
  transform(value: string, enMayusculas: boolean = true): string {
    return enMayusculas ? value.toUpperCase() : value.toLowerCase();
  }

}
