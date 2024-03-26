import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuxiliaresComponent } from './components/auxiliares/auxiliares.component';
import { CategoriaComponent } from './components/auxiliares/categoria/categoria.component';
import { EstadoInscripcionComponent } from './components/auxiliares/estado-inscripcion/estado-inscripcion.component';
import { CongresoComponent } from './components/auxiliares/congreso/congreso.component';
//angular Material
import { MaterialModule } from './shared/modules/material.module';
import { InstitucionProcedenciaComponent } from './components/auxiliares/institucion-procedencia/institucion-procedencia.component';
import { ListaComponent } from './components/auxiliares/institucion-procedencia/lista/lista.component';


@NgModule({
  declarations: [
    AppComponent,
    AuxiliaresComponent,
    CategoriaComponent,
    EstadoInscripcionComponent,
    CongresoComponent,
    InstitucionProcedenciaComponent,
    ListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
