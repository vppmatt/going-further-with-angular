import {Component, Input, OnInit} from '@angular/core';
import {TransactionsDataService} from "../../../transactions-data.service";
import {Transaction} from "../../../model/Transaction";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent {

  constructor(private transactionsDataService: TransactionsDataService, private router: Router) {
  }



  transactionsLoaded: boolean = true;
  transactions: Array<Transaction> = [];

  selectedCountry: String = "xxx";
  selectedAccountNumber: number = 0;

  changeCountry(country: String) {
    this.transactionsLoaded = false;
    this.selectedCountry = country;
    this.transactionsDataService.getAllPaymentsForCountry(this.selectedCountry).subscribe(
      {
        next: data => {
          this.transactions = data;
          this.transactionsLoaded = true;
        }, error: error => this.router.navigate(["server-error"])

      });
  }

  setAccountNumber(accountNumber: number) {
    this.transactionsLoaded = false;
    this.selectedAccountNumber = accountNumber;
    this.transactionsDataService.getAllPaymentsForAccount(this.selectedAccountNumber).subscribe(
      {
        next: data => {
          this.transactions = data;
          this.transactionsLoaded = true;
        }, error: error => this.router.navigate(["server-error"])
      });
  }

}
