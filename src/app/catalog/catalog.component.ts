import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{
  constructor(private productService : ProductService) {
  }

  parfumes : Array<any> = []

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe({
        next : data =>{
          this.parfumes = data
        },
        error : err => {
          alert("Erreur lors du chargements des Parfums")
        }
      })
  }
}
