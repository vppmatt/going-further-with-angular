import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";

import { RouterModule, Routes } from '@angular/router';
import { PrefetchExampleComponent } from './prefetch-example/prefetch-example.component'
import {of} from "rxjs";

let myGlobalVariable = "hello";

const routes: Routes = [
  {path: "prefetch-example", component: PrefetchExampleComponent,
    resolve :{ greeting : () => {

      //use the inject function to access a service or an object that would normally be accessed via constructor injection,
      //eg:  inject(HttpClient).get(...);
      return of( myGlobalVariable);
      } }}
]

@NgModule({
  declarations: [
    AppComponent,
    PrefetchExampleComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
