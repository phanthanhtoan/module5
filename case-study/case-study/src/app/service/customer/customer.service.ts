import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
   URL_API = 'http://localhost:3000/customers';

  constructor(private httpClient: HttpClient) { }

  getALl(): Observable<Customer[]> {
      return this.httpClient.get<Customer[]>(this.URL_API);
  }

  findById(id: string): Observable<Customer> {
    return this.httpClient.get<Customer>(this.URL_API + '/' + id);
  }

  updateCustomer(customers: Customer): Observable<void> {
    console.log(customers);
    return this.httpClient.patch<void>(this.URL_API + '/' + customers.id, customers);
  }

}
