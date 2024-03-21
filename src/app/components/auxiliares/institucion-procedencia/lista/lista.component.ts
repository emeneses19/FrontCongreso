import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'
import { InstitucionProcedenciaModel } from '../../../../models/institucion-procedencia.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  @Input() listaInstitucionProcedencia: InstitucionProcedenciaModel[] = [];
  constructor( ) {
    console.log('esto es lias');
    console.log(this.listaInstitucionProcedencia);

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
