import { Component, OnInit } from '@angular/core';
import { InstitucionProcedenciaModel } from '../../../models/institucion-procedencia.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent implements OnInit {
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
