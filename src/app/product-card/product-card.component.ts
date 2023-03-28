import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { Size } from '../models/size.model';

@Component({
  selector: 'app-product-card',
  templateUrl: `./product-card.component.html`,
  styles: []
})
export class ProductCardComponent {
  @Input() myProduct!: Product;
  value: number = 3000;

  SizeSelected(e:any){
    this.value = e.target.value;
  }


  onAddLike(){
    if(this.myProduct.isLiked==false){
      this.myProduct.likes++;
      this.myProduct.isLiked=true;
    }
    else{
      this.myProduct.likes--;
      this.myProduct.isLiked=false;
    }
  }
}
