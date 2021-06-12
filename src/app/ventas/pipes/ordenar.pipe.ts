import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  // Tomar un arreglo de Heroes y retornar un arreglo de Heroes ordenados por nombre
  transform(heroes: Heroe[], ordenarPor: string = 'sin valor'): Heroe[] {
    // Evitar mutar el arreglo original
    let myHeroes = [...heroes];

    switch(ordenarPor) {
      case 'nombre':
        return myHeroes.sort((a, b) => {
          if (a.nombre > b.nombre) {
            // A va primero
            return 1
          } else {
            // A va despues
            return -1
          }
        })
      case 'color':
        return myHeroes.sort((a, b) => (a.color > b.color) ? 1 : -1)
      case 'vuela':
        // Primero necesito los true / 1 y luego los false / 0
        return myHeroes.sort((a, b) => (a.vuela > b.vuela) ? -1 : 1)
      default:
        return myHeroes;
    }


  }

}
