import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../services/customer.service";
import {Customer} from "../model/customer.model";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

  customers : Array<Customer> =[]
  ngOnInit(): void {
    this.getCustomers()
  }

  constructor(private customerService : CustomerService) {
  }

  getCustomers(){
    this.customerService.getCustomers()
      .subscribe({
        next : data => {
          this.customers = data
        },
        error : err => {
          alert("Erreur lors du Chargement de la fiche Client")
        }
      })
  }

}
