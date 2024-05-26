import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ProductosService } from  '../productos.service'

@Component({
  selector: 'app-detalles-productos',
  templateUrl: './detalles-productos.page.html',
  styleUrls: ['./detalles-productos.page.scss'],
})  
export class DetallesProductosPage implements OnInit {

   datos: any = {}

  constructor(private Servicio: ProductosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const productoID = params.get('productoID');
      if (productoID) { // Comprueba si productoID no es null
        console.log(productoID);
        this.datos = this.Servicio.getProductosById(productoID);
        console.log(this.datos);
      } else {
        console.error('El parámetro productoID está vacío.');
      }
    });
  }
}
