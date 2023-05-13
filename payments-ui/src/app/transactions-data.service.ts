import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Transaction} from "./model/Transaction";

@Injectable({
  providedIn: 'root'
})
export class TransactionsDataService {

  constructor(private http: HttpClient) { }

  private serverUrl: String = "http://localhost:8080";

  getCountries() : Observable<Array<String>> {
    return this.http.get<Array<String>>(this.serverUrl + '/api/country');
  }

  getAllPaymentsForCountry(country: String) : Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>( `http://localhost:8080/api/payment?country=${country}`);
  }

  getAllPaymentsForAccount(accountId: number) : Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(`http://localhost:8080/api/payment?order=${accountId}`);
  }

  addNewTransaction (transaction: Transaction) : Observable<Transaction> {
    return this.http.post<Transaction>( "http://localhost:8080/api/payment", transaction);
  }

  getAllPayments() : Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>( `http://localhost:8080/api/payment`);
  }


}
