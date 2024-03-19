import { Component } from '@angular/core';
import { CategoriaModel } from '../../../models/categoria.model';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {

  categoria:CategoriaModel = new CategoriaModel();

  guardarCategoria(){

  }
}

