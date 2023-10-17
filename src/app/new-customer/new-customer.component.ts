import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CustomerService} from "../services/customer.service";
import {Customer} from "../model/customer.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit{

  public formGroup! : FormGroup
  constructor(private formBuilder : FormBuilder, private customerService : CustomerService, private router : Router) {
  }
  //Nombre de consommateur dans la base de données
  nbrCustomers : number = 0
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      first_name : this.formBuilder.control(""),
      last_name : this.formBuilder.control(""),
      address_mail : this.formBuilder.control(""),
      phone_number : this.formBuilder.control("")
    })
    this.countCustomer()
  }

  //Method pour ajouter un nouveau consommateur
  saveCustomer() {
    let customer : Customer = this.formGroup.value
    //Attribution static d'un id au consommateur
    customer.id = this.nbrCustomers + 1
    this.customerService.saveCustomer(customer)
      .subscribe({
        next : data => {
          this.router.navigate(['/order-confirmation'])
        },
        error : err => {
          alert("Erreur lors de la sauvegarde")
        }
      })
  }

  //Method pour compter le nombre de consommateur
  countCustomer(){
    this.customerService.getCustomers()
      .subscribe({
        next : data => {
          this.nbrCustomers = data.length
        }
      })
  }
}
