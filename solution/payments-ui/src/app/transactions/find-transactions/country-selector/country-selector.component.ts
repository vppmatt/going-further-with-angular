import {Component, EventEmitter, Output} from '@angular/core';
import {TransactionsDataService} from "../../../transactions-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {distinct, map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css']
})
export class CountrySelector {

  constructor(private transactionsDataService: TransactionsDataService, private router: Router,
              private route: ActivatedRoute) {
  }

  countriesLoaded: boolean = false;
  countries: Array<String> = [];
  selectedCountry: String = "xxx";

  @Output()
  countryChangedEvent = new EventEmitter<String>();

  checkForCountryInUrl() {
    this.route.queryParams.subscribe(params => {
      if (params["country"] != null) {
        this.selectedCountry = params["country"];
      }
      else {
        this.selectedCountry="xxx";
      }
    })
  }

  ngOnInit() {
      this.route.data.subscribe({next: data => {
        console.log(data);
          this.countries = data["countries"];
          this.checkForCountryInUrl();
          this.countriesLoaded = true;
        },
        error : error => console.log("no countries found in the route data")
      });


    // this.transactionsDataService.getCountries()
    //   .pipe(
    //     map(countries => countries
    //       .map(country => country.toLowerCase().trim())
    //       .filter(country => country != "")
    //       .sort()
    //     ),
    //     map( countries => Array.from(new Set<String>(countries)))
    //   )
    //   .subscribe({
    //     next: data => {
    //       this.countries = data;
    //       this.checkForCountryInUrl();
    //       this.countriesLoaded = true;
    //     },
    //     error : error => this.router.navigate(["server-error"])
    //   });
  }




  changeCountry() {
    this.router.navigate(["find"], {queryParams: {country: this.selectedCountry}});
    this.countryChangedEvent.emit(this.selectedCountry);
  }

  clear() {
    this.selectedCountry = "xxx";
    this.countryChangedEvent.emit(this.selectedCountry);
    this.router.navigate(["find"]);
  }
}
