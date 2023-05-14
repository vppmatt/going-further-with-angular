import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySelector } from './country-selector.component';

describe('CountryListComponent', () => {
  let component: CountrySelector;
  let fixture: ComponentFixture<CountrySelector>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountrySelector]
    });
    fixture = TestBed.createComponent(CountrySelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
