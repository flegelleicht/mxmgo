import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }  from './components/login/login.component';
import { HomeComponent }  from './components/home/home.component';


/**
 * I decided to use routing instead of „just toggling“ the components 
 * on and off in the app components.
 *
 * This separates the different screens quite nicely ...
 * ... and --since I cannot directly pass down something directly to child
 * components any more-- has the additional good side-effect of forcing me 
 * to use services for data handling.
 * 
 **/
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
