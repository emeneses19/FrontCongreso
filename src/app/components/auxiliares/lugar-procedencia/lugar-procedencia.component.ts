import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lugar-procedencia',
  templateUrl: './lugar-procedencia.component.html',
  styleUrl: './lugar-procedencia.component.css'
})
export class LugarProcedenciaComponent {
  error: boolean = false
  textoError: string = '';
  cargando: boolean = false;
  
  guardar(form: NgForm){
    console.log('form');
  }
}
