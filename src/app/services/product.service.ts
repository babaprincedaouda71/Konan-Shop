import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  public getProducts() : Observable<any>{
    return this.http.get<Array<any>>("http://localhost:3000/perfumes")
  }

  public getProduct(productId : number) : Observable<any>{
    return this.http.get<any>(`http://localhost:3000/perfumes/${productId}`)
  }
}
