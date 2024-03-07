import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarComponent } from './agregar/agregar.component';
import { MatTableDataSource } from '@angular/material/table';
import { InstitucionProcedenciaModel } from '../../models/institucion-procedencia.model';


@Component({
  selector: 'app-institucion-procedencia',
  templateUrl: './institucion-procedencia.component.html',
  styleUrl: './institucion-procedencia.component.css'
})
export class InstitucionProcedenciaComponent {
  listaInstitucionProcedencia: InstitucionProcedenciaModel[] = [
    {
      cod_procedencia: '20240703125',
      nombre: 'UTP',
    },
    {
      cod_procedencia: '20240703122',
      nombre: 'UNI',
    },
  ];
  displayedColumns: string[] = ['cod_procedencia', 'nombre', 'acciones'];
  dataSource = new MatTableDataSource(this.listaInstitucionProcedencia);

  constructor(public dialog: MatDialog) {
  }
  openDialog() {
    this.dialog.open(AgregarComponent);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
