import { Component, OnInit } from '@angular/core';
import { interval } from "rxjs";

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  nombre: string = 'Alejandro';
  genero: string = 'H';
  nombreAlternativo: string = 'Fernanda';
  generoAlternativo: string = 'M';
  // El pipe de i18nSelect necesita un objeto que le sirva de mapeo para saber que texto colocar dependiendo el genero
  mapInvitacion = {
    'H': 'invitarle',
    'M': 'invitarla'
  };

  // i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Ana', 'Daniel', 'Marlen'];
  // El pipe de i18nPlural necesita un objeto que le sirva de mapeo para saber que texto colocar dependiendo del numero de elementos
  mapClientes = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'un cliente',
    'other': '# clientes'
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Alejandro',
    edad: 35,
    direccion: 'San Miguel Almaya'
  }

  // JSON Pipe
  heroes = [
    {
      nombre: 'Super Man',
      poder: true,
    },
    {
      nombre: 'Lupita',
      poder: false,
    },
    {
      nombre: 'Goku',
      poder: true,
    }
  ]

  // Async Pipe
  miObservable = interval(1000); // Genera números en secuencia cada periodo de tiempo, retornados como un observable
  miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promesa resuelta con éxito en 4 segundos')
    }, 4000);
  })

  constructor() { }

  ngOnInit(): void {
  }

  cambiarPersona() {
    let nombreActual:string = this.nombre;
    let generoActual: string = this.genero;

    this.nombre = this.nombreAlternativo
    this.genero = this.generoAlternativo;
    this.nombreAlternativo = nombreActual;
    this.generoAlternativo = generoActual;
  }

  borrarCliente() {
    this.clientes.pop();

  }

}
