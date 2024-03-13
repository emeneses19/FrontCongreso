import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InstitucionProcedenciaModel } from '../../../models/institucion-procedencia.model';

@Component({
  selector: 'app-institucion-procedencia',
  templateUrl: './institucion-procedencia.component.html',
  styleUrl: './institucion-procedencia.component.css'
})
export class InstitucionProcedenciaComponent {
  institucionProcedencia: InstitucionProcedenciaModel = new InstitucionProcedenciaModel();
  textoError: string = 'texto error';
  error: boolean = true;

  constructor() {

  }
  ngOnInit(): void {
    this.generarIdParaInstProcedencia();
  }

  guardar(form: NgForm) {
    console.log(form);
  }

  generarIdParaInstProcedencia() {
    const timestamp = new Date().getTime().toString();
    this.institucionProcedencia = new InstitucionProcedenciaModel();
    this.institucionProcedencia.cod_procedencia = timestamp;
  }
}
