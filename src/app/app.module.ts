import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BanniereComponent } from './banniere/banniere.component';
import { GridComponent } from './grid/grid.component';
import { CardComponent } from './card/card.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BanniereComponent,
    GridComponent,
    CardComponent,
    PageAboutComponent,
    PageDetailComponent,
    PageAccueilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
