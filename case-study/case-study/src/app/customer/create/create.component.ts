import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer/customer.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  customer: Customer| undefined;
  createCustomerForm: any;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createCustomerForm = new FormGroup({
      id: new FormControl('',  [Validators.required,Validators.pattern('KH-[\\d]{3}')]) ,
      name: new FormControl(),
      dateOfBirthday: new FormControl(),
      gender: new FormControl(),
      nationalId: new FormControl('', [Validators.required, Validators.pattern('[0-9]{9}')]),
      phone: new FormControl(),
      email: new FormControl(),
      customerType: new FormControl(),
      address: new FormControl(),
    });

  }


  createCustomer() {
    this.customerService.createCustomer(this.createCustomerForm.value).subscribe(
      (data) => {
        alert('Create Customer Success');
        // console.log(data);
      },
      () => {},
      () => {
        this.router.navigateByUrl('/customer');
      }
    );
  }
}
