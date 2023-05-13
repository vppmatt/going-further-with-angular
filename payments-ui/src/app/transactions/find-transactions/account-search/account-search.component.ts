import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-account-search',
  templateUrl: './account-search.component.html',
  styleUrls: ['./account-search.component.css']
})
export class AccountSearchComponent implements OnInit {

  accountNumber: String = "";

  @Output()
  accountNumberEntered = new EventEmitter<number>();

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  checkForAccountNumberInUrl() {
    this.route.queryParams.subscribe(params => {
      if (params["account"] != null) {
        this.accountNumber = params["account"];
      }
      else {
        this.accountNumber="";
      }

    })
  }

  ngOnInit() {
    this.checkForAccountNumberInUrl();
  }

  search() {
    this.accountNumberEntered.emit(+this.accountNumber);
    this.router.navigate(["find"], {queryParams: {account: this.accountNumber}});
  }

  clear() {
    this.accountNumber = "";
    this.accountNumberEntered.emit(0);
    this.router.navigate(["find"]);
  }

}
