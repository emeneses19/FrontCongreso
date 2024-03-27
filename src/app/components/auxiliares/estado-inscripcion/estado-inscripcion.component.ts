import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { EstadoInscripcionModel } from '../../../models/estado-inscripcion.model';
import { EstadoInscripcionService } from '../../../services/estado-inscripcion.service';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-estado-inscripcion',
  templateUrl: './estado-inscripcion.component.html',
  styleUrl: './estado-inscripcion.component.css'
})
export class EstadoInscripcionComponent implements OnChanges {

  listaPersonas:EstadoInscripcionModel[] = [
    
  ];
  

  displayedColumns: string[] = ['codigo', 'descripcion'];
  dataSource = new MatTableDataSource<EstadoInscripcionModel>() ;

  estadoInscripcion: EstadoInscripcionModel = new EstadoInscripcionModel();
  textoError: string = 'texto error';
  error: boolean = false ;
  listaEstadoInscripcion: EstadoInscripcionModel[] =[ ];
  estadoInscripcionActualizar: EstadoInscripcionModel = new EstadoInscripcionModel();
  datosFiltro = new MatTableDataSource(filtroEstadoInscripcion)

  constructor(private _estadoInscripcionService: EstadoInscripcionService,
              private spinner: NgxSpinnerService
    ) {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`el producto recibido ${this.estadoInscripcionActualizar}`)
  }
  ngOnInit(): void {
    this.generarIdEstadoInscripcion();
    this.obtenerEstadoInscripcion();
  }

  aplicarFiltro(event: Event){
    const valorFiltro = (event.target as HTMLInputElement).value;
    this.datosFiltro.filter = valorFiltro.trim().toLocaleLowerCase();
  }

  recibiendoEstInscripcion(estInscripcion: EstadoInscripcionModel){
    this.estadoInscripcionActualizar = estInscripcion;
    this.estadoInscripcion = this.estadoInscripcionActualizar;
  }
  actualizarEstadoInscripcion(inscripcion: EstadoInscripcionModel) {

    this._estadoInscripcionService.actualizarEstadoInscripcion(inscripcion);

    Swal.fire({
      text: `El registro se ha actualizado exitosamente.`,
      icon: 'success',
      width: 400,
      confirmButtonColor: "#1772b8",
    });
    this.estadoInscripcion = new EstadoInscripcionModel();
    this.generarIdEstadoInscripcion();
  }
 
  guardar(form: NgForm) {
    console.log(form);
    if(form.invalid){
      this.error = true;
      this.textoError ='Formulario incorrecto. Por favor, revíselo.';
      return;
    }else{
      
      this.error = false;
      this._estadoInscripcionService.agregarEstadoInscripcion(this.estadoInscripcion);
      Swal.fire({
        text: `El registro se ha guardado exitosamente.`,
        icon: 'success',
        width: 400,
        confirmButtonColor: "#1772b8",
      });
      this.estadoInscripcion = new EstadoInscripcionModel();
      this.generarIdEstadoInscripcion();

    }
  }

  generarIdEstadoInscripcion() {
    const timestamp = new Date().getTime().toString();
    this.estadoInscripcion = new EstadoInscripcionModel();
    this.estadoInscripcion.codInscripcion = timestamp;
  }
  obtenerEstadoInscripcion(){
     this._estadoInscripcionService.obtenerEstadoInscripcion().subscribe(data =>{
      this.listaEstadoInscripcion = data
    });
  }

  eliminarEstadoInscripcion(estadoInscripcion: EstadoInscripcionModel){
    Swal.fire({
      title:'Aviso',
      text: `Esta seguro de eliminar el registro? `,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: "#1772b8",
      width: 400,
    }).then(resp =>{
      if(resp.value){
        this._estadoInscripcionService.eliminarEstadoInscripcion(estadoInscripcion);
      }
    })
  }
}

const filtroEstadoInscripcion:EstadoInscripcionModel[]=[];