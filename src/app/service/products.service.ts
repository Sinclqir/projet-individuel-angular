import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Size } from '../models/size.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    new Product(
      "Ordinateur ACER",
      "8go RAM",
      "https://boulanger.scene7.com/is/image/Boulanger/4710886822448_h_f_l_0?wid=1000&hei=1000",
      2300,
      0,
      false,
      new Date("05/03/2002"),
      [new Size("2To",2142),new Size("1To",1742)]
    ),
    new Product(
      "Ordinateur GAMER NOVO",
      "4go RAM",
      "https://www.cdiscount.com/pdt2/q/f/r/1/550x550/82ju00fqfr/rw/pc-portable-gamer-lenovo-legion-5-15ach6h-15-6.jpg",
      1200,
      0,
      false,
      new Date("06/03/2002"),
      [new Size("1To",1023),new Size("520go",890)]
    ),
    new Product(
      "Ordinateur HP",
      "12go RAM",
      "https://cdn.lesnumeriques.com/optim/produits/23/33081/hp-omen-17_588acdeeef92d5dc__450_400.webp",
      2300,
      0,
      false,
      new Date("01/04/2023"),
      [new Size("500Mo",1500),new Size("1To",1782)]
    ),
  ];
  constructor() { }
  
  getAllProducts(): Product[] {
    return this.products;
  }
}

