import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

// 1. Cambiar el idioma por defecto de nuestra aplicación (el nombre de la varible donde guardamos al referencia al modulo de idioma es indiferente "localeMX")
import localeMx from "@angular/common/locales/es-MX";
import localeBr from "@angular/common/locales/br"
import { registerLocaleData } from "@angular/common";

// 2. Registrar el idioma y formato de moneda en nuestra aplicación
// Se puede registrar mas de uno, la razón podemos tener diferentes partes de la app en distintos idiomas (pipe date - locale)
// Pero uno solo a nivel global
registerLocaleData(localeMx);
registerLocaleData(localeBr);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Especial si vamos a hacer uso del modulo de animaciones de angular (algunos componentes de PrimeNG lo usan - fieldset)
    BrowserAnimationsModule,
    SharedModule,
    // Importar el módulo de rutas de mi aplicación
    AppRouterModule,
    // Como los componentes de página no estan siendo importados mediante LazyLoad en el router de nuestra App
    // Es necesario importar su modulo contenedor dentro del modulo principal de la app.
    // El no hacer esto, ocasiona que otros componentes usados dentro de dichos componentes no funcionen
    VentasModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-MX'},  // 3. Cargar globalmente el idioma y formato de moneda en la App
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
