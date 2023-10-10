import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private productService : ProductService) {
  }

  products : Array<Product> = []

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
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

  removeFromCart(product: Product) {
    this.productService.removeFromCart(product)
      .subscribe({
        next : value => {
          this.getProducts()
        },
        error : err => {
          alert("Errorrrrr!!!")
        }
      })
  }
}
