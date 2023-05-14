import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingDataComponent } from './getting-data.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Transaction} from "../model/Transaction";
import {of} from "rxjs";

describe('GettingDataComponent', () => {
  let component: GettingDataComponent;
  let fixture: ComponentFixture<GettingDataComponent>;

  const now = new Date();
  const t1:Transaction = {id: 1, amount: 90, currency: "USD", country: "",date: now, orderId: "",
    taxCode: 0, taxRate: 0, type:""} as Transaction;
  const t2:Transaction = {id: 2, amount: 100, currency: "CAD",country: "",date: now, orderId: "",
    taxCode: 0, taxRate: 0, type:""} as Transaction;
  const t3:Transaction = {id:3, amount:110, currency: "GBP",country: "",date: now, orderId: "",
    taxCode: 0, taxRate: 0, type:""} as Transaction;

  const mockHttpClientModule = {
    get: () => of([t1, t2, t3])
    };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GettingDataComponent],
      providers: [{provide: HttpClient, useValue: mockHttpClientModule}]
    });
    fixture = TestBed.createComponent(GettingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('data should be in CAD and only over 100', () => {
    const t: Transaction =
    {id:3, amount:110, currency: "CAD", country: "",date: now, orderId: "",
    taxCode: 0, taxRate: 0, type:""} as Transaction
    const expectedData = [t];
    expect(component.transactions).toEqual(expectedData);

  })
});
