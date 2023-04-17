import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product.model';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {
  transform(products: Product[], sortOrder: string): Product[] {
    if (sortOrder === 'asc') {
      return products.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else {
      return products.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
  }
}
