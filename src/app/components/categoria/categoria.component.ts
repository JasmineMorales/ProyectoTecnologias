import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categorias: any = [];
  color = "black";
  categoriaForm: FormGroup;
  categoria: any;
  nombreCat: string;
  datosCat: string;
  idCategoria: string;
  textButton: string;

  constructor(protected categoriaService: CategoriaService, public fb: FormBuilder, private route: ActivatedRoute) {
    this.textButton = "Agregar";
    this.categoriaForm = this.fb.group({
      idCategoria: [''],
      nombreCategoria: ['', Validators.required],
      datosCategoria: ['', Validators.required],
      colorCategoria: ['']
    });
  }

  ngOnInit(): void {
    this.getCategorias();
  }


  getCategorias() {
    this.categoriaService.getCategorias().subscribe(res => {
      this.categorias = res;
    });
  }


}
