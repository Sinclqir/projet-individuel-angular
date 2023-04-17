import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { ProductsService } from './service/products.service';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styles: []
})
export class AppComponent implements OnInit {
  products!: Product[];
  search: string = '';
  sortOrder: string = 'asc'; // Ordre de tri initial: ascendant

  constructor(private productsServices: ProductsService) {}

  ngOnInit() {
    this.search = '';
    this.products = this.productsServices.getAllProducts();
  }

  sortProducts() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc'; // Alterne entre l'ordre ascendant et descendant
  }
}
