import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from "../login-page/login.page";
import { AboutPage } from "../about-page/about.page";
import { ProductsPage } from "../products-page/products.page";
import { ProductPage } from "../product-page/product.page";
import { OrdersPageComponent } from "../orders/orders-page/orders-page.component";
import { OrderPageComponent } from "../orders/order-page/order-page.component";
import { InventoryPage } from "../inventory-page/inventory.page";
import { NotFoundPage } from "../not-found-page/not-found.page";
import { AuthGuard } from "../auth/auth-guard.service";
import { HomePage } from '../home-page/home.page';
import { StorePage } from '../store-page/store.page';

const routes: Routes = [
   { path: '', component: HomePage },
   { path: 'about', component: AboutPage },
   { path: 'store', component: StorePage },
   { path: 'login', component: LoginPage },
   { path: 'products', component: ProductsPage, canActivate: [AuthGuard] },
   { path: 'products/:id', component: ProductPage, canActivate: [AuthGuard] },
   { path: 'orders', component: OrdersPageComponent, canActivate: [AuthGuard] },
   { path: 'orders/:id', component: OrderPageComponent, canActivate: [AuthGuard] },
   { path: 'inventory', component: InventoryPage, canActivate: [AuthGuard] },
   { path: '**', component: NotFoundPage },
];

@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ],
})
export class AppRoutingModule {}
