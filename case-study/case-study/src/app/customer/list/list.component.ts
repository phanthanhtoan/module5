import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer/customer.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customers: Customer[] | undefined;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getALl().subscribe(next => this.customers = next);
  }

}
