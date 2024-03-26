import { Injectable } from '@angular/core';
import { EstadoInscripcionModel } from '../models/estado-inscripcion.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoInscripcionService {

  listaEstadoInscripcion: EstadoInscripcionModel[] = [
    {
      codInscripcion: '123456',
      descripcion: 'ACTIVO',
    }
  ];

  constructor() { }

  agregarEstadoInscripcion(institucionProcedencia: EstadoInscripcionModel){
    this.listaEstadoInscripcion.push(institucionProcedencia);
  }
  eliminarEstadoInscripcion(institucionProcedencia: EstadoInscripcionModel){
    const index = this.listaEstadoInscripcion.findIndex(item => item === institucionProcedencia);
    if (index !== -1) {
      this.listaEstadoInscripcion.splice(index, 1);
    }
  }
  actualizarEstadoInscripcion(institucionProcedenciaActualizado: EstadoInscripcionModel){
    const index = this.listaEstadoInscripcion.findIndex(item => item.codInscripcion === institucionProcedenciaActualizado.codInscripcion);
    if (index !== -1) {
      this.listaEstadoInscripcion[index] = institucionProcedenciaActualizado;
    }
  }
  obtenerEstadoInscripcion(): Observable<EstadoInscripcionModel[]>{
    return of(this.listaEstadoInscripcion);
  }
}
