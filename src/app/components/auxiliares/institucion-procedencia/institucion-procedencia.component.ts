import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { InstitucionProcedenciaModel } from '../../../models/institucion-procedencia.model';
import { InstitucionProcedenciaService } from '../../../services/institucion-procedencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-institucion-procedencia',
  templateUrl: './institucion-procedencia.component.html',
  styleUrl: './institucion-procedencia.component.css'
})
export class InstitucionProcedenciaComponent implements OnChanges {
  institucionProcedencia: InstitucionProcedenciaModel = new InstitucionProcedenciaModel();
  textoError: string = 'texto error';
  error: boolean = false ;
  listaDeInstitucionesDeProcedencia: InstitucionProcedenciaModel[] =[ ];
  instituionProcedenciaActualizar: InstitucionProcedenciaModel = new InstitucionProcedenciaModel();

  constructor(private _institucionProcedenciaService: InstitucionProcedenciaService) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`el producto recibido ${this.instituionProcedenciaActualizar}`)
  }
  ngOnInit(): void {
    this.generarIdParaInstProcedencia();
    this.obtenerInstitucionesDeProcedencia();
  }

  recibiendoInstProcedencia(instProcedencia: InstitucionProcedenciaModel){
    this.instituionProcedenciaActualizar = instProcedencia;
    this.institucionProcedencia = this.instituionProcedenciaActualizar;
  }
  actualizarInstitucionProcedencia(instucion: InstitucionProcedenciaModel) {
    // Agregar lógica para actualizar una institución procedencia existente
    this._institucionProcedenciaService.actualizarInstitucionProcedencia(instucion);
    // this._institucionProcedenciaService.actualizarInstitucionProcedencia(this.institucionProcedencia);
    Swal.fire({
      text: `El registro se ha actualizado exitosamente.`,
      icon: 'success',
      width: 400,
      confirmButtonColor: "#1772b8",
    });
    this.institucionProcedencia = new InstitucionProcedenciaModel();
    this.generarIdParaInstProcedencia();
  }
 

  guardar(form: NgForm) {
    console.log(form);
    if(form.invalid){
      this.error = true;
      this.textoError ='Formulario incorrecto. Por favor, revíselo.';
      return;
    }else{
      this.error = false;
      this._institucionProcedenciaService.agregarInstitucionProcedencia(this.institucionProcedencia);
      Swal.fire({
        text: `El registro se ha guardado exitosamente.`,
        icon: 'success',
        width: 400,
        confirmButtonColor: "#1772b8",
      });
      this.institucionProcedencia = new InstitucionProcedenciaModel();
      this.generarIdParaInstProcedencia();
    }
  }

  generarIdParaInstProcedencia() {
    const timestamp = new Date().getTime().toString();
    this.institucionProcedencia = new InstitucionProcedenciaModel();
    this.institucionProcedencia.codProcedencia = timestamp;
  }
  obtenerInstitucionesDeProcedencia(){
     this._institucionProcedenciaService.obtenerInstitucionesDeProcedencia().subscribe(data =>{
      this.listaDeInstitucionesDeProcedencia = data
    });
  }

  eliminarInstitucionDeProcedencia(institucionProcedencia: InstitucionProcedenciaModel){
    Swal.fire({
      title:'Aviso',
      text: `Esta seguro de eliminar el registro? `,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: "#1772b8",
      width: 400,
    }).then(resp =>{
      if(resp.value){
        this._institucionProcedenciaService.eliminarInstitucionProcedencia(institucionProcedencia);
      }
    })
  }
  
}
