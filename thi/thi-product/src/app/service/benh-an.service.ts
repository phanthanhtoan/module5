import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {BenhAn} from "../model/benhAn";

@Injectable({
  providedIn: 'root'
})
export class BenhAnService {
  URL_API = 'http://localhost:3000/benhAn';

  constructor(
  private httpClient: HttpClient
  ) { }

  getALl(): Observable<BenhAn[]> {
    return this.httpClient.get<BenhAn[]>(this.URL_API);
  }

  findById(idBenhAn: string): Observable<BenhAn> {
    return this.httpClient.get<BenhAn>(this.URL_API + '/' + idBenhAn);
  }

  createBenhAn(benhAn: BenhAn):Observable<any>{
    return this.httpClient.post(this.URL_API, benhAn);
  }
  updateBenhAn(benhAn: BenhAn): Observable<void> {
    console.log(benhAn);
    return this.httpClient.patch<void>(this.URL_API + '/' + benhAn.id, benhAn);
  }

  deleteBenhAn(idBenhAn: string): Observable<void> {
    return this.httpClient.delete<void>(this.URL_API + '/' + idBenhAn);
  }

  searchCustomer(benhAn: BenhAn):Observable<ArrayBuffer>{
    // @ts-ignore
    return this.httpClient.get<void>(this.URL_API + '/' + benhAn.id, benhAn);
  }
}
