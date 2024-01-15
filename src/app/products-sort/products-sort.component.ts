import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import {
   selectProductsOrder,
   selectProductsSort,
} from '../products-state/products-state.selectors';
import { Observable } from 'rxjs';
import { Order } from '../shared/order.type';
import { ProductSortByOption, productSortByOptions } from '../product/product.types';
import { toggleSort } from './products-sort.actions';

@Component({
   selector   : 'app-products-sort',
   standalone : true,
   imports    : [
      CommonModule,
      MatFormFieldModule,
      MatIconModule,
      MatOptionModule,
      MatSelectModule,
   ],
   templateUrl: './products-sort.component.html',
   styleUrls  : [ './products-sort.component.scss' ],
})
export class ProductsSortComponent {
   protected readonly productSortByOptions : ProductSortByOption[] = productSortByOptions;
   private readonly store : Store = inject(Store);
   protected readonly sortByOption$ : Observable<ProductSortByOption | null> = this.store.select(selectProductsSort);
   protected readonly orderByOption$ : Observable<Order | null> = this.store.select(selectProductsOrder);

   protected orderByIcon(orderBy : "asc" | "desc" | null) : string {
      switch (orderBy) {
         case "asc": return "vertical_align_bottom";
         case "desc": return "vertical_align_top";
         default: return "";
      }
   }

   protected toggleSortBy(sortByOption : ProductSortByOption) : void {
      this.store.dispatch(toggleSort({ sortOption: sortByOption }));
   }
}
