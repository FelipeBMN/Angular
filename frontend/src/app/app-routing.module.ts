import { ProductsDeleteComponent } from './components/products/products-delete/products-delete.component';
import { ProductsUpdateComponent } from './components/products/products-update/products-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "products/create",
    component: ProductsCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductsUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductsDeleteComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
