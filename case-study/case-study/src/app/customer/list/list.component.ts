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
  page = 1;
  pageSize =5;
  title = 'custom-search-filter-example';
  name: string |any;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerService.getALl().subscribe(next => this.customers = next);
  }


  search() {
    if (this.name==""){
      this.ngOnInit();
    }else {
      this.customers = this.customers?.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }

    if (this.name==""){
      this.ngOnInit();
    }else {
      this.customers = this.customers?.filter(res=>{
        return res.name.toLocaleUpperCase().match(this.name.toLocaleUpperCase());
      })
    }
  }

}
