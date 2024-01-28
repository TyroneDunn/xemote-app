import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import {
   selectActiveProductsCategoryFilters,
   selectProductsLoading,
   selectProductsPriceRangeFilter,
} from '../products/products-state.selectors';
import { Observable } from 'rxjs';
import { ProductCategory, ProductCategoryFilter } from '../products/product.types';
import {
   removeCategoryFilter,
   removePriceRangeFilter,
} from './active-products-filters-chip-list.actions';

@Component({
   selector   : 'app-products-active-filters-chips',
   standalone : true,
   imports    : [
      CommonModule,
      MatChipsModule,
      MatIconModule
   ],
   templateUrl: './products-active-filters-chips.component.html',
   styleUrls  : [ './products-active-filters-chips.component.scss' ],
})
export class ProductsActiveFiltersChipsComponent {
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
