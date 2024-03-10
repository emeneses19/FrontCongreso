import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventoComponent } from './components/evento/evento.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
//angular Material
import { MaterialModule } from './shared/modules/material.module';
import { InstitucionProcedenciaComponent } from './components/institucion-procedencia/institucion-procedencia.component';
import { AgregarComponent } from './components/institucion-procedencia/agregar/agregar.component';
import { FormsModule } from '@angular/forms';
import { AuxiliaresComponent } from './components/auxiliares/auxiliares.component';
import { CategoriaComponent } from './components/auxiliares/categoria/categoria.component';
import { EstadoInscripcionComponent } from './components/auxiliares/estado-inscripcion/estado-inscripcion.component';
import { CongresoComponent } from './components/auxiliares/congreso/congreso.component';


@NgModule({
  declarations: [
    AppComponent,
    EventoComponent,
    InstitucionProcedenciaComponent,
    AgregarComponent,
    AuxiliaresComponent,
    CategoriaComponent,
    EstadoInscripcionComponent,
    CongresoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
