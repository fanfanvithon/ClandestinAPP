import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  private productos = [
    {
      id: '1',
      nombre: 'Vino botellón',
      precio: 4000,
      stock: 5,
      marca:'Concha y Toro',
      imagen: "https://cdnx.jumpseller.com/dc-central-distribuidora-de-licores/image/16122834/exportacion_cabernet.jpg?1713337716",
      descripcion: ["Exportación trae un selecto vino tinto Cabernet Sauvignon. Ideal para compartir en grandes reuniones debido a su versión botellón. "+"1.5 Litros"] 
    },
    {
      id: '2',
      nombre: 'Ramazzotti',
      precio: 11000,
      stock: 6,
      marca:'Gato',
      imagen: "https://storage.googleapis.com/liquidos-public/products/large/1336056.png",
      descripcion: ["Licor a base de flor de hibiscus, flor de azahar y toques de naranja. Destacando por su sabor a hiervas, es especial para aperitivo, bajativo o junto con el espumante de tu preferencia. "+"700 cc."] 
    },
    {
      id: '3',
      nombre: 'Fernet',
      precio: 15000,
      stock: 5,
      marca:'Gato',
      imagen: "https://storage.googleapis.com/liquidos-public/products/large/1338056.png",
      descripcion: ["Cerveza de calidad "+"1 Litro"] 
    },
    {
      id: '4',
      nombre: 'Cerveza',
      precio: 15000,
      stock: 5,
      marca:'Gato',
      imagen: "https://storage.googleapis.com/liquidos-public/products/large/9993473.png",
      descripcion: ["Cerveza de calidad "+"1 Litro"] 
    },    
    {
      id: '5',
      nombre: 'Pisco',
      precio: 15000,
      stock: 5,
      marca:'Alto Del Carmen',
      imagen: "https://storage.googleapis.com/liquidos-public/products/large/1330080.png",
      descripcion: [" Con un perfecto equilibrio entre la acidez y el dulzor, este pisco es una opción ideal para disfrutarlo con amigos, como ingrediente en cocteles o en una tradicional piscola. "+" 1 Litro 35°"] 
    },
    {
      id: '6',
      nombre: 'Gin Bulldog',
      precio: 20000,
      stock: 5,
      marca:'London Dry Gin',
      imagen: "https://storage.googleapis.com/liquidos-public/products/original/1333009.jpeg",
      descripcion: [" Gin inglés con cuatro destilaciones. Es preparado sobre la base de 12 hierbas cuidadosamente seleccionadas que lo hacen uno de los preferidos del mundo entero. "+" 750 cc"] 
    }

  ];










  constructor() { }


  //LISTAR
  getProductos(){
    return[...this.productos]
  }


  //AGREGAR
  addProductos( nombre: string, precio: number, stock: number, marca: string, imagen: string, descripcion: string[]){
    this.productos.push({
     id: this.productos.length + 1 + "",
     nombre: nombre,
     precio: precio,
     stock: stock,
     marca: marca,
     imagen: imagen,
     descripcion: descripcion
 
    })
 
   }

  //ELIMINAR
  deteleProductos(productoID: string){

    this.productos = this.productos.filter( p => {
      return p.id != productoID
    })

  }


  //BUSCAR
  getProductosById(productoID: string){
    return{
      ...this.productos.find( p => {
        return p.id == productoID
      })
    }
  }







}
