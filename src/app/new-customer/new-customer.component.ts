import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit{

  public formGroup! : FormGroup
  constructor(private formBuilder : FormBuilder) {
  }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      first_name : this.formBuilder.control(""),
      last_name : this.formBuilder.control(""),
      address_mail : this.formBuilder.control(""),
      phone : this.formBuilder.control(""),
    })
  }

  saveCustomer() {

  }
}
