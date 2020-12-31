import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SpinnerScssComponent } from "./animation-components/spinner-in-scss/spinner-scss/spinnerScssComponent";
import { MainComponent } from './main-page/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerScssComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
