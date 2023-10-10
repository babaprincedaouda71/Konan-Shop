import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private productService : ProductService) {
  }

  products : Array<any> = []

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

  removeFromCart(product: any) {
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
