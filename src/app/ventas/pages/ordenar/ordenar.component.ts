import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = true;
  heroes: Heroe[] = [
    {
      nombre: 'Siperman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Scooby Doo',
      vuela: false,
      color: Color.azul
    },
    {
      nombre: 'Goku',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Ironman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Flash',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Ranma',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    }
  ]
  ordenarPor: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  alternarArgumento() {
    this.enMayusculas = !this.enMayusculas;
    console.log(this.enMayusculas)
  }

  ordenarPropiedadPor(value: string) {
    this.ordenarPor = value;
  }

}
