import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { SignInComponent } from "../sign-in/sign-in.component";
import { AboutComponent } from "../about/about.component";
import { ProductsPageComponent } from "../products/products-page/products-page.component";
import { ProductPageComponent } from "../products/product-page/product-page.component";
import { OrdersPageComponent } from "../orders/orders-page/orders-page.component";
import { OrderPageComponent } from "../orders/order-page/order-page.component";
import { InventoryPageComponent } from "../inventory/inventory-page/inventory-page.component";
import { NotFoundComponent } from "../not-found/not-found.component";

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'about', component: AboutComponent },
   { path: 'sign-in', component: SignInComponent },
   { path: 'products', component: ProductsPageComponent },
   { path: 'products/:id', component: ProductPageComponent },
   { path: 'orders', component: OrdersPageComponent },
   { path: 'orders/:id', component: OrderPageComponent },
   { path: 'inventory', component: InventoryPageComponent },
   { path: '**', component: NotFoundComponent },
];

@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ],
})
export class AppRoutingModule {}
