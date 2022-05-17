import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup |any;
  customer: Customer | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private customerService : CustomerService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap)=>{
    const id = String(paraMap.get('id'));
    this.customerService.findById(id).subscribe(
      next=>{
        this.customer = next;
        this.editForm.patchValue({
          id: this.customer.id,
          name: this.customer.name,
          dateOfBirthday: this.customer.dateOfBirthday,
          gender: this.customer.gender,
          nationalId: this.customer.nationalId,
          phone: this.customer.phone,
          email: this.customer.email,
          customerType: this.customer.customerType,
          address: this.customer.address
        });
      });
    });
    this.editForm = this.fb.group({
      id: '',
      name: '',
      dateOfBirthday:'' ,
      gender: '',
      nationalId:'' ,
      phone:'' ,
      email:'',
      customerType: '',
      address:''
    });
  }

  onSubmit() {
    console.log(this.editForm);
    if (this.editForm.valid) {
      this.customer = this.editForm.value;
      if (this.customer) {
        this.customerService.updateCustomer(this.customer).subscribe(next => this.router.navigateByUrl('/customer'));
      }
    }
  }

}
