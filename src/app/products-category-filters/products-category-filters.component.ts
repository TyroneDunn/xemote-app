import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import {
   ProductsPriceRangeFilterComponent
} from '../products-price-range-filter/products-price-range-filter.component';
import { Observable, of, switchMap } from 'rxjs';
import {
   selectProductsCategoryFilters,
   selectProductsLoading,
} from '../products-state/products-state.selectors';
import { toggleProductsCategoryFilter } from './products-category-filters.actions';
import { ProductCategory, ProductCategoryFilter } from '../product/product.types';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-products-category-filters',
  standalone: true,
   imports: [
      CommonModule,
      MatCheckboxModule,
      MatDividerModule,
      ProductsPriceRangeFilterComponent
   ],
  templateUrl: './products-category-filters.component.html',
  styleUrls: ['./products-category-filters.component.scss']
})
export class ProductsCategoryFiltersComponent {
   private store: Store = inject(Store);
   protected activeCategoryFilters$: Observable<ProductCategoryFilter[] | undefined> =
      this.store.select(selectProductsCategoryFilters);
   protected productsLoading$: Observable<boolean | null> = this.store.select(selectProductsLoading);
   protected categoryFilters  = [
      { category: "Xemote Gateway", active: this.categoryFilterIsActive("Xemote Gateway") },
      { category: "Xemote Accessory", active: this.categoryFilterIsActive("Xemote Accessory") },
      { category: "Wireless Temperature Sensor", active: this.categoryFilterIsActive("Wireless Temperature Sensor") },
      { category: "Wireless Humidity Sensor", active: this.categoryFilterIsActive("Wireless Humidity Sensor") },
      { category: "Wireless AC Current Meter", active: this.categoryFilterIsActive("Wireless AC Current Meter") },
      { category: "Wireless Event-Based Sensor", active: this.categoryFilterIsActive("Wireless Event-Based Sensor") },
      { category: "Wireless Infrared Beam Sensor", active: this.categoryFilterIsActive("Wireless Infrared Beam Sensor") },
      { category: "Wireless 4-30mA Sensor", active: this.categoryFilterIsActive("Wireless 4-30mA Sensor") },
   ];

   protected toggleProductsCategoryFilter(category : string) : void {
      this.store.dispatch(toggleProductsCategoryFilter({category: category as ProductCategory}));
   };

   private categoryFilterIsActive(category : string) : Observable<boolean> {
      return this.activeCategoryFilters$.pipe(
         switchMap((categoryFilters: ProductCategoryFilter[] | undefined) => {
            return Array.isArray(categoryFilters)
               ? of(categoryFilters.find(categoryFilter =>
                  categoryFilter.category === category,
               )?.active || false)
               : of(false);
         })
      );
   }
}
