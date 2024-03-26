import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { EstadoInscripcionModel } from '../../../../models/estado-inscripcion.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnChanges {

  listaPersonas:EstadoInscripcionModel[] = [];
  displayedColumns: string[] = ['codigo', 'descripción'];
  dataSource = new MatTableDataSource<EstadoInscripcionModel>() ;

  @Input() listaDeEstadoInscripcion: EstadoInscripcionModel[] = [];
  @Output() estadoInscripcionEliminar = new EventEmitter();
  @Output() estadoInscripcionActualizar = new EventEmitter();
  constructor( ) {
  }
  ngOnChanges(): void {
  }

  eliminarEstadoInscripcion(estadoInscripcion: EstadoInscripcionModel) {
   this.estadoInscripcionEliminar.emit(estadoInscripcion);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
