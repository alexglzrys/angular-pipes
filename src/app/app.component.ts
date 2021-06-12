import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // nombre: string = 'AlEjANDro GonZÁlEz'
  // numero: number = 1000;
  // objeto: object = {
  //   'nombre': 'Jaime Herrera Mondragón'
  // }

  // mostrarInfo() {
  //   console.log(this.nombre)
  //   console.log(this.numero)
  //   console.log(this.objeto)
  // }

  // Inyectar el servicio para efectos hover en algunos componentes de PrimeNG
  constructor(private primeNgConfig: PrimeNGConfig) { }

  ngOnInit() {
    // Activar efecto ripple
    this.primeNgConfig.ripple = true;
  }
}
