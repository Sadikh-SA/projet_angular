import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './dashboard/detail/detail.component';
import { ListeComponent } from './dashboard/liste/liste.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent},
  { path: "liste", component: ListeComponent},
  { path: "detail", component: DetailComponent},
  { path: "navbar", component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
