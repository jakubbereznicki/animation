import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SpinnerScssComponent } from "./animation-components/spinner-in-scss/spinner-scss/spinnerScssComponent";

const routes: Routes = [
  {
    path: 'spinner-in-scss',
    component: SpinnerScssComponent,
  },


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
