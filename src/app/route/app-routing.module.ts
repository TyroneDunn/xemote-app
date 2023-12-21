import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { SignInComponent } from "../sign-in/sign-in.component";
import { AboutComponent } from "../about/about.component";
import { ProductsPageComponent } from "../products/products-page/products-page.component";
import { ProductPageComponent } from "../products/product-page/product-page.component";

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'about', component: AboutComponent },
   { path: 'sign-in', component: SignInComponent },
   { path: 'products', component: ProductsPageComponent },
   { path: 'products/:id', component: ProductPageComponent },
];

@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ],
})
export class AppRoutingModule {}
