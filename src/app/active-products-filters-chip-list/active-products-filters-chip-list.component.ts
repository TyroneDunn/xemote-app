import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import {
   selectActiveProductsCategoryFilters, selectProductsLoading,
   selectProductsPriceRangeFilter, selectProductsSort,
} from '../products-state/products-state.selectors';
import { Observable } from 'rxjs';
import { ProductCategory, ProductCategoryFilter } from '../product/product.types';
import {
   removeCategoryFilter,
   removePriceRangeFilter,
} from './active-products-filters-chip-list.actions';

@Component({
   selector   : 'app-active-products-filters-chip-list',
   standalone : true,
   imports    : [ CommonModule, MatChipsModule, MatIconModule ],
   templateUrl: './active-products-filters-chip-list.component.html',
   styleUrls  : [ './active-products-filters-chip-list.component.scss' ],
})
export class ActiveProductsFiltersChipListComponent {
   private store : Store = inject(Store);
   protected activeCategoryFilters$: Observable<ProductCategoryFilter[]> =
      this.store.select(selectActiveProductsCategoryFilters);
   protected activePriceRangeFilter$ =
      this.store.select(selectProductsPriceRangeFilter);
   protected productsLoading: Observable<boolean | null> =
      this.store.select(selectProductsLoading);

   public removeCategoryFilter(category : ProductCategory) : void {
      this.store.dispatch(removeCategoryFilter({category: category}));
   }

   public removePriceRangeFilter() : void {
      this.store.dispatch(removePriceRangeFilter());
   }
}
