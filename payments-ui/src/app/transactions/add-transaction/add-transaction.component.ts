import { Component } from '@angular/core';
import {Transaction, TransactionType} from "../../model/Transaction";
import {TransactionsDataService} from "../../transactions-data.service";


@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {

  message: String = "";

  newTransaction : Transaction = {
    id: 0,
    amount: 0,
    country: "USA",
    currency: "USD",
    date: new Date(),
    orderId: "",
    taxCode: 0,
    taxRate: 0,
    type: "sale"
  }

  types = Object.keys(TransactionType);

  constructor(private transactionsDataService: TransactionsDataService) { }

  save() {
    this.transactionsDataService.addNewTransaction(this.newTransaction)
      .subscribe({
        next: data => {
          this.message = "New transaction added with id: " + data.id;
        },
        error: error => {
          this.message = "Error: " + error.message;
        }
      })

  }
}
