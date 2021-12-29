import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { CommandesComponent } from './commandes/commandes.component';
import { DetailsCommandeComponent } from './details-commande/details-commande.component';
const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "book/:id", component: BookDetailsComponent},
  { path: "detailscommande/:id", component: DetailsCommandeComponent},
  { path: "auth", component: LoginComponent},
  { path: "cart", component: CartComponent},
  { path: "checkout", component: CheckoutComponent},
  { path: "order-confirmation", component: OrderConfirmationComponent},
  { path: "commande", component: CommandesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
