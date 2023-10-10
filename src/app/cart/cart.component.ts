import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Cart} from "../model/product.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private productService : ProductService) {
  }

  products : Array<Cart> = []

  ngOnInit(): void {
    this.getProductsFromCart()
  }

  getProductsFromCart(){
    this.productService.getProductsFromCart()
      .subscribe({
        next : products => {
          this.products = products
        },
        error : err => {
          alert("Errrrorrr!!!!!")
        }
      })
  }

  removeFromCart(product: Cart) {
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
