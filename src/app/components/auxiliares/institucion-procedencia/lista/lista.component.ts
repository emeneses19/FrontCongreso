import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  constructor(
    private _snackBar: MatSnackBar
  ) {

  }

  eliminarInstitucionProcedencia() {
    this._snackBar.open('El registro fue eliminado con éxito', 'aceptar', {
      verticalPosition: 'top',
      panelClass: ['custom-snackbar']
    });
  }

}
