import { Injectable } from '@angular/core';
import { InstitucionProcedenciaModel } from '../models/institucion-procedencia.model';

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

  constructor() { }
}
