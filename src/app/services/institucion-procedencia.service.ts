import { Injectable } from '@angular/core';
import { InstitucionProcedenciaModel } from '../models/institucion-procedencia.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstitucionProcedenciaService {
  listaInstitucionProcedencia: InstitucionProcedenciaModel[] = [
    {
      codProcedencia: '20240703125',
      nombre: 'UTP',
    }
  ];

  constructor() {
    console.log(this.listaInstitucionProcedencia);
   }
  agregarInstitucionProcedencia(institucionProcedencia: InstitucionProcedenciaModel){
    this.listaInstitucionProcedencia.push(institucionProcedencia);
  }
  eliminarInstitucionProcedencia(institucionProcedencia: InstitucionProcedenciaModel){
    const index = this.listaInstitucionProcedencia.findIndex(item => item === institucionProcedencia);
    if (index !== -1) {
      this.listaInstitucionProcedencia.splice(index, 1);
    }
  }
  actualizarInstitucionProcedencia(institucionProcedenciaActualizado: InstitucionProcedenciaModel){
    const index = this.listaInstitucionProcedencia.findIndex(item => item.codProcedencia === institucionProcedenciaActualizado.codProcedencia);
    if (index !== -1) {
      this.listaInstitucionProcedencia[index] = institucionProcedenciaActualizado;
    }
  }
  obtenerInstitucionProcedencia(idInstitucionProcedencia: string){
    
  }
  obtenerInstitucionesDeProcedencia(): Observable<InstitucionProcedenciaModel[]>{
    return of(this.listaInstitucionProcedencia);
  }
}
