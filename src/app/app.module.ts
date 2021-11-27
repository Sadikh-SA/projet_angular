import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListeComponent } from './dashboard/liste/liste.component';
import { DetailComponent } from './dashboard/detail/detail.component';
import { RechercheComponent } from './dashboard/recherche/recherche.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListeComponent,
    DetailComponent,
    RechercheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
