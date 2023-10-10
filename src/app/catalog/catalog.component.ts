import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{
  constructor(private http : HttpClient) {
  }

  parfumes : Array<any> = []

  ngOnInit(): void {
    this.http.get<Array<any>>("http://localhost:3000/perfumes")
      .subscribe({
        next : data =>{
          this.parfumes = data
        },
        error : err => {
          alert("Erreur lors du chargements des Parfums")
        }
      })
  }

  showDetails(parfume: any) {
  }
}
