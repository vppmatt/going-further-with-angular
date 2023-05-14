import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Transaction} from "../model/Transaction";
import {catchError, map} from "rxjs";

@Component({
  selector: 'app-getting-data',
  templateUrl: './getting-data.component.html',
  styleUrls: ['./getting-data.component.css']
})
export class GettingDataComponent implements OnInit{

  transactions: Array<Transaction> = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Array<Transaction>>("http://localhost:8080/api/payment?country=bra")
      .pipe(
        catchError(error => { return [] }),
        map(transactions => transactions.filter(t => t.amount > 100)),
        map(transactions => transactions.map(t => {
          t.currency = "CAD";
          return t;
        })),

      )
      .subscribe({
        next : data => this.transactions = data,
        error: error => console.log(error)
      });
  }
}
