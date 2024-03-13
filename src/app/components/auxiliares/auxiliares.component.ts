import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaComponent } from './categoria/categoria.component';
import { InstitucionProcedenciaComponent } from './institucion-procedencia/institucion-procedencia.component';

@Component({
  selector: 'app-auxiliares',
  templateUrl: './auxiliares.component.html',
  styleUrl: './auxiliares.component.css'
})
export class AuxiliaresComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CategoriaComponent);
  }
  openInstitucionProcendia(){
    this.dialog.open(InstitucionProcedenciaComponent);
  }
}
