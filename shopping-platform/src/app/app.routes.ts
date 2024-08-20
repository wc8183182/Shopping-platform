import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ProductsComponent } from "./pages/products/products.component";
import { AllProductsNewComponent } from "./pages/all-products-new/all-products-new.component";
import { ActivitiesSixtyFiveComponent } from "./pages/activities-sixty-five/activities-sixty-five.component";
import { ActivitiesEightyFiveComponent } from "./pages/activities-eighty-five/activities-eighty-five.component";
import { ActivitiesBronzeComponent } from "./pages/activities-bronze/activities-bronze.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'all-products-new',
    component:AllProductsNewComponent
  },
  {
    path: 'products/discount/65',
    component: ActivitiesSixtyFiveComponent
  },

  {
    path: 'products/bronze',
    component: ActivitiesBronzeComponent
  },
  
  {
    path: 'eight-five',
    component: ActivitiesEightyFiveComponent
  },
];
