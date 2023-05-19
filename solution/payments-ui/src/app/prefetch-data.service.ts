import { Injectable } from '@angular/core';
import {TransactionsDataService} from "./transactions-data.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PrefetchDataService {

  constructor(private transactionsDataService: TransactionsDataService) { }

  getCountries() : Observable<Array<String>> {
    return this.transactionsDataService.getCountries()
      .pipe(
        map(countries => countries
          .map(country => country.toLowerCase().trim())
          .filter(country => country != "")
          .sort()
        ),
        map( countries => Array.from(new Set<String>(countries)))
      )
      ;
  }
}
