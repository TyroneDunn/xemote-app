import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from "../login-page/login.page";
import { AboutPage } from "../about-page/about.page";
import { NotFoundPage } from "../not-found-page/not-found.page";
import { HomePage } from '../home-page/home.page';
import { StorePage } from '../store-page/store.page';

const routes: Routes = [
   { path: '', component: HomePage },
   { path: 'about', component: AboutPage },
   { path: 'store', component: StorePage },
   { path: 'login', component: LoginPage },
   { path: '**', component: NotFoundPage },
];

@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ],
})
export class AppRoutingModule {}
