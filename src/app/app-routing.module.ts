import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { DailycaloriesComponent } from './components/dailycalories/dailycalories.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'daily-calories', component: DailycaloriesComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
