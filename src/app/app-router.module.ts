import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';

// ng g m appRouter --flat (--flat para que no genere una carpeta para este modulo)

// RUTAS PRINCIPALES DE LA APP
const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full'
  },
  {
    path: 'numeros',
    component: NumerosComponent
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent
  }, 
  {
    path: 'ordenar',
    component: OrdenarComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Registrar rutas principales
    RouterModule.forRoot(routes)
  ],
  exports: [
    // Exponer varios componentes del routerModule (en el modulo que lo importa - router-outlet)
    RouterModule,
  ]
})
export class AppRouterModule { }
