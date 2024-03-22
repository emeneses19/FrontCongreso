import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { InstitucionProcedenciaModel } from '../../../models/institucion-procedencia.model';
import { InstitucionProcedenciaService } from '../../../services/institucion-procedencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-institucion-procedencia',
  templateUrl: './institucion-procedencia.component.html',
  styleUrl: './institucion-procedencia.component.css'
})
export class InstitucionProcedenciaComponent {
  institucionProcedencia: InstitucionProcedenciaModel = new InstitucionProcedenciaModel();
  textoError: string = 'texto error';
  error: boolean = false ;
  listaDeInstitucionesDeProcedencia: InstitucionProcedenciaModel[] =[ ];


  nombre = new FormControl('', [Validators.required, Validators.minLength(5)]);

  constructor(private _institucionProcedenciaService: InstitucionProcedenciaService) {
    console.log(this.listaDeInstitucionesDeProcedencia);
  }
  ngOnInit(): void {
    this.generarIdParaInstProcedencia();
    this.obtenerInstitucionesDeProcedencia();
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
      console.log(this._institucionProcedenciaService.listaInstitucionProcedencia);
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
    console.log('obteniendo desde padre');
    console.log(this.listaDeInstitucionesDeProcedencia);
  }
  
}
