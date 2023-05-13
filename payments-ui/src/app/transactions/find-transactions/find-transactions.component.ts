import {Component, ViewChild} from '@angular/core';
import {TransactionsListComponent} from "./transactions-list/transactions-list.component";

@Component({
  selector: 'app-find-transactions',
  templateUrl: './find-transactions.component.html',
  styleUrls: ['./find-transactions.component.css']
})
export class FindTransactionsComponent {

  constructor() {
  }

  country: String = "xxx";
  accountNumber: number = 0;

  @ViewChild(TransactionsListComponent)
  transactionsListComponent: TransactionsListComponent = {} as TransactionsListComponent;

  countryChanged(country: String) {
    this.country = country;
    this.transactionsListComponent.changeCountry(country);
  }

  accountNumberProvided(accountNumber: number) {
    this.accountNumber = accountNumber;
    this.transactionsListComponent.setAccountNumber(accountNumber);
  }
}
