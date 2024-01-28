import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../home-page/home.page';
import { StorePage } from '../store-page/store.page';
import { NotFoundPage } from "../not-found-page/not-found.page";

const routes: Routes = [
   { path: '', component: HomePage },
   { path: 'store', component: StorePage },
   { path: '**', component: NotFoundPage },
];

@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ],
})
export class AppRoutingModule {}
