import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Cart, Product} from "../model/product.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private productService : ProductService) {
  }

  products$! : Observable<Array<Cart>>

  ngOnInit(): void {
    this.getProductsFromCart()
  }

  getProductsFromCart(){
    this.products$ = this.productService.getProductsFromCart()
  }

  removeFromCart(product: Cart) {
    if(confirm("Do really want to delete this product"))
    this.productService.removeFromCart(product)
      .subscribe({
        next : value => {
          this.getProductsFromCart()
        },
        error : err => {
          alert("Errorrrrr!!!")
        }
      })
  }

  updatePrice(product : Cart) {

  }
}
