import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListeComponent } from './dashboard/liste/liste.component';
import { DetailComponent } from './dashboard/detail/detail.component';
import { RechercheComponent } from './dashboard/recherche/recherche.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { CommandesComponent } from './commandes/commandes.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListeComponent,
    DetailComponent,
    RechercheComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    BookDetailsComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent,
    OrderConfirmationComponent,
    CommandesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
