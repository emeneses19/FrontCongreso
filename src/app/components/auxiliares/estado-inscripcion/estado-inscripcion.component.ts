import { Component } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../institucion-procedencia/institucion-procedencia.component';
import { EstadoInscripcionModel } from '../../../models/estado-inscripcion.model';

@Component({
  selector: 'app-estado-inscripcion',
  templateUrl: './estado-inscripcion.component.html',
  styleUrl: './estado-inscripcion.component.css'
})
export class EstadoInscripcionComponent {

  estadoInscripcion: EstadoInscripcionModel = new EstadoInscripcionModel();
  textoError: string = 'texto error';
  error: boolean = true;

  matcher = new MyErrorStateMatcher();

  nombre = new FormControl('', [Validators.required, Validators.minLength(5)]);

  constructor() {

  }
  ngOnInit(): void {
    this.generarIdParaEstadoInscripcion();
  }

  guardar(form: NgForm) {
    console.log(form);
  }

  generarIdParaEstadoInscripcion() {
    const timestamp = new Date().getTime().toString();
    this.estadoInscripcion = new EstadoInscripcionModel();
    this.estadoInscripcion.codIsncripcion = timestamp;
  }
}
