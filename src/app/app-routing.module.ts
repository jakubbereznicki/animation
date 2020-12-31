import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SpinnerScssComponent } from "./animation-components/spinner-in-scss/spinner-scss/spinnerScssComponent";
import { MainComponent } from './main-page/main/main.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
  },
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
