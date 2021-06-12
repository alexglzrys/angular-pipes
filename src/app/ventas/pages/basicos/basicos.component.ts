import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombreLower: string = 'alejandro';
  nombreUpper: string = 'ALEJANDRO';
  nombreCompleto: string = 'AleJANDro GonzÁLez';

  fecha: Date = new Date();

}
