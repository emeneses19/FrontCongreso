import { Component, Input, OnChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'
import { InstitucionProcedenciaModel } from '../../../../models/institucion-procedencia.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnChanges {
  @Input() listaDeInstitucionesDeProcedencia: InstitucionProcedenciaModel[] = [ ];
  constructor( ) {
  }
  ngOnChanges(): void {
      console.log('Lista de Instituciones en el componente hijo:', this.listaDeInstitucionesDeProcedencia);
  }

  eliminarInstitucionProcedencia() {
    Swal.fire({
      title:'Aviso',
      text: `Esta seguro de eliminar el registro? `,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: "#1772b8",
      width: 400,
    });
  }

}
