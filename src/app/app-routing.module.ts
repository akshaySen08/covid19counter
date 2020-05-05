import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidComponent } from './main/covid.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'covid19',
    pathMatch: 'full',
  },
  {
    path: 'covid19',
    component: CovidComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
