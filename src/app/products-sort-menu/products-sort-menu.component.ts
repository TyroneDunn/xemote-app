import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { selectProductsSort } from '../products/products-state.selectors';
import { Observable } from 'rxjs';
import { Order } from '../shared/order.type';
import { ProductsSortByOption, productSortByOptions, ProductsSort } from '../products/product.types';
import { toggleProductsSort } from './products-sort-menu.actions';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
   selector   : 'app-products-sort-menu',
   standalone : true,
   imports: [
      CommonModule,
      MatIconModule,
      MatOptionModule,
      MatSelectModule,
      MatChipsModule,
      MatMenuModule,
      RouterLink,
   ],
   templateUrl: './products-sort-menu.component.html',
   styleUrls  : [ './products-sort-menu.component.scss' ],
})
export class ProductsSortMenu {
   protected readonly productSortByOptions : ProductsSortByOption[] = productSortByOptions;
   private readonly store : Store = inject(Store);
   protected readonly sort$ : Observable<ProductsSort | undefined> =
      this.store.select(selectProductsSort);

   protected orderByIcon(orderBy : Order | undefined) : string {
      switch (orderBy) {
         case "asc": return "vertical_align_bottom";
         case "desc": return "vertical_align_top";
         default: return "";
      }
   }

   protected toggleSortBy(sortByOption : ProductsSortByOption) : void {
      this.store.dispatch(toggleProductsSort({ sortByOption: sortByOption }));
   }

   public formatSortOption(sortByOptionb : ProductsSortByOption | undefined) : string {
      switch (sortByOptionb) {
         case "name": return "Name";
         case "price": return "Price";
         case "category": return "Category"
         default: return "";
      }
   }
}
