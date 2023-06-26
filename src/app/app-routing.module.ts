import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';

const routes: Routes = [
  {path:'', component: PageAccueilComponent },
  {path:'about', component: PageAboutComponent },
  {path:'detail/:id', component: PageDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
