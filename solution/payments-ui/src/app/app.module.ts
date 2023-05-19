import {inject, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TransactionsListComponent } from './transactions/find-transactions/transactions-list/transactions-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { MenuComponent } from './menu/menu.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerDownComponent } from './server-down/server-down.component';
import { CountrySelector } from './transactions/find-transactions/country-selector/country-selector.component';
import { FindTransactionsComponent } from './transactions/find-transactions/find-transactions.component';
import { AccountSearchComponent } from './transactions/find-transactions/account-search/account-search.component';
import { AddTransactionComponent } from './transactions/add-transaction/add-transaction.component';
import {PrefetchDataService} from "./prefetch-data.service";
import {Observable, of} from "rxjs";

let countries : Array<String> = [];

const getCountries = () : Observable<Array<String>> => {
  if (countries.length > 0) {
    console.log("using countries from cache");
    return of(countries);
  }
  else {
    console.log("using countries from rest");
    const result = inject(PrefetchDataService).getCountries();
    result.subscribe( data => {
      countries = data;
      console.log("caching countries");
    });
    return result;
  }
}

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'find', component: FindTransactionsComponent,
    resolve: {countries: () => getCountries() }},
  {path: 'find/:orderId', component: FindTransactionsComponent,
    resolve: {countries: () => getCountries() }},
  {path: 'add', component: AddTransactionComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: 'server-error',  component: ServerDownComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  declarations: [
    AppComponent,
    TransactionsListComponent,
    MenuComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ServerDownComponent,
    CountrySelector,
    FindTransactionsComponent,
    AccountSearchComponent,
    AddTransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
