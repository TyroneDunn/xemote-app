import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import {
   selectActiveProductsCategoryFilters
} from '../products-state/products-state.selectors';
import { Observable } from 'rxjs';
import { ProductCategory, ProductCategoryFilter } from '../product/product.types';

@Component({
   selector   : 'app-active-products-filter-chip-list',
   standalone : true,
   imports    : [ CommonModule, MatChipsModule, MatIconModule ],
   templateUrl: './active-products-filters-chip-list.component.html',
   styleUrls  : [ './active-products-filters-chip-list.component.scss' ],
})
export class ActiveProductsFiltersChipListComponent {
   private store : Store = inject(Store);
   protected activeCategoryFilters$: Observable<ProductCategoryFilter[]> =
      this.store.select(selectActiveProductsCategoryFilters);

   public removeCategoryFilter(category : ProductCategory) : void {

   }
}
