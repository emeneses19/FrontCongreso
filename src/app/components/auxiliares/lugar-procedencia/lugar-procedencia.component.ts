import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LugarProcedenciaModel } from '../../../models/lugar-procedencia.models';

@Component({
  selector: 'app-lugar-procedencia',
  templateUrl: './lugar-procedencia.component.html',
  styleUrl: './lugar-procedencia.component.css'
})
export class LugarProcedenciaComponent {
  error: boolean = false
  textoError: string = '';
  cargando: boolean = false;
  lugarProcedencia: LugarProcedenciaModel = new LugarProcedenciaModel();


  guardar(form: NgForm) {
    console.log('form');
  }
}
