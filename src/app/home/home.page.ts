import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../productos/productos.service';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  productos : any[] = []


  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    loop: true,
  };





  constructor(private router: Router, private Servicio: ProductosService) {}

  goToLogin() {
    this.router.navigateByUrl('/login');

  }
  ngOnInit() {
    this.productos = this.Servicio.getProductos()
  }





}
