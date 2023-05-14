import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {GettingDataComponent} from "./getting-data/getting-data.component";
import {HttpClientModule} from "@angular/common/http";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, GettingDataComponent],
    imports: [HttpClientModule]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'playground'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('playground');
  });

});
