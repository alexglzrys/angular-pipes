import { NgModule } from '@angular/core';

/* ESTE MODULO AGRUPA TODOS LOS MÓDULOS DE PRIME-NG QUE USARÁ MI APP */

// PrimeNG - Se recomienda instalar la versión emparejada con la de Angular
//           En este caso como este proyecto tiene Angular 11, se procedió a instalar [primeng@11.4.2]
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import { FieldsetModule } from "primeng/fieldset";
import { ToolbarModule } from "primeng/toolbar";
import { TableModule } from "primeng/table";

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    // Requiere previamente: npm install @angular/cdk --save
    TableModule,
  ]
})
export class PrimeNgModule { }
