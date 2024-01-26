import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { combineLatestWith, map, Observable, of } from 'rxjs';
import { Product } from '../product/product.types';
import { ProductCardComponent } from '../product-card/product-card.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import {
   selectProductsCollection,
   selectProductsCount,
   selectProductsLoading,
   selectProductsPage,
   selectProductsQuery,
} from '../products-state/products-state.selectors';
import { ProductsSortMenu } from '../products-sort-menu/products-sort-menu.component';
import {
   ActiveProductsFiltersChipListComponent
} from '../active-products-filters-chip-list/active-products-filters-chip-list.component';
import { pageProducts } from './products-list.actions';

@Component({
  selector: 'app-products-list',
  standalone: true,
   imports: [
      CommonModule,
      ProductsSortMenu,
      ActiveProductsFiltersChipListComponent,
      ProductCardComponent,
      MatPaginatorModule,
   ],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
   @Input() isMobile$: Observable<boolean> = of(false);
   private store: Store = inject(Store);
   public products$: Observable<Product[]> = this.store.select(selectProductsCollection);
   public count$: Observable<number> = this.store.select(selectProductsCount);
   public query$ = this.store.select(selectProductsQuery);
   public page$ = this.store.select(selectProductsPage);
   public currentIndexLowerBounds$ = this.page$.pipe(map(page => {
      if (page != undefined)
         return (page.index * page.limit) + 1;
      else return 1;
   }));
   public currentIndexUpperBounds$ = this.currentIndexLowerBounds$.pipe(
      combineLatestWith(this.products$),
      map(([lowerBounds, products]) => lowerBounds + products.length - 1)
   );
   public productsLoading: Observable<boolean | null> = this.store.select(selectProductsLoading);

   public page($event : PageEvent) : void {
      this.store.dispatch(pageProducts({
         page: {
            index: $event.pageIndex,
            limit: $event.pageSize,
         }}));
   }
}
