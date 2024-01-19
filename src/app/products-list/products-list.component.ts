import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { combineLatestWith, map, Observable } from 'rxjs';
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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductsSortComponent } from '../products-sort/products-sort.component';
import {
   ActiveProductsFiltersChipListComponent
} from '../active-products-filters-chip-list/active-products-filters-chip-list.component';
import { pageProducts } from './products-list.actions';

@Component({
  selector: 'app-products-list',
  standalone: true,
   imports: [
      CommonModule,
      ProductsSortComponent,
      ActiveProductsFiltersChipListComponent,
      MatProgressSpinnerModule,
      ProductCardComponent,
      MatPaginatorModule,
   ],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
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
