import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DailyCaloriesComponent } from './components/daily-calories/daily-calories.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'daily-calories', component: DailyCaloriesComponent},
  {path: 'products', component: ProductsComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
