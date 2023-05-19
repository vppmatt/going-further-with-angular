import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySelector } from './country-selector.component';
import {TransactionsDataService} from "../../../transactions-data.service";
import {Observable, of} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

const mockedTransactionsDataService = {
  getCountries() : Observable<Array<String>> {
    return of(["usa", "USA", "", "gbr", "GBR"]);
  }
}

describe('CountryListComponent', () => {
  let component: CountrySelector;
  let fixture: ComponentFixture<CountrySelector>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountrySelector],
      providers: [{provide: TransactionsDataService, useValue: mockedTransactionsDataService},
        {provide: Router, useValue: {navigate: () => {}}},
        {provide: ActivatedRoute, useValue: {queryParams :  {}  }}
      ]
    });
    fixture = TestBed.createComponent(CountrySelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('data received should be sorted, all in lower case, with no duplicates and no blanks', () => {
    expect(component.countries).toEqual(["gbr", "usa"]);
  });

});
