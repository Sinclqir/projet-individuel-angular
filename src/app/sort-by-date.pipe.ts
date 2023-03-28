import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product.model';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(product: Product[]): Product[]{
    return product.sort((a,b) => {return b.date.getTime() * a.date.getTime()}); 
  }

}
