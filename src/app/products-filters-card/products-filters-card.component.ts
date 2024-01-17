import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { ProductCategoryFilter } from '../product/product.types';
import { Store } from '@ngrx/store';
import { toggleProductsCategoryFilter } from './products-filters-card.actions';
import {
   selectProductsCategoryFilters,
   selectProductsLoading,
} from '../products-state/products-state.selectors';
import { Observable, of, switchMap } from 'rxjs';
import { ProductCategory } from '../product/product.types';

@Component({
  selector: 'app-products-filters-card',
  standalone: true,
   imports: [
      CommonModule,
      ProductCardComponent,
      MatCardModule,
      MatDividerModule,
      MatCheckboxModule,
      MatSliderModule,
   ],
  templateUrl: './products-filters-card.component.html',
  styleUrls: ['./products-filters-card.component.scss']
})
export class ProductsFiltersCardComponent {
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
