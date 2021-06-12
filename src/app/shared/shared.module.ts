import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    // Los componentes de este modulo hacen uso de los componentes de PrimeNG
    PrimeNgModule,
  ],
  // Componentes que se usarán en otros modulos
  exports: [
    MenuComponent,
  ]
})
export class SharedModule { }
