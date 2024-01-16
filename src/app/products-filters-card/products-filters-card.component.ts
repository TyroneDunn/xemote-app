import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { ProductCategory } from '../product/product.types';
import { Store } from '@ngrx/store';
import { addProductCategoryFilter } from './products-filters-card.actions';

@Component({
  selector: 'app-products-filters-card',
  standalone: true,
   imports: [
      CommonModule,
      ProductCardComponent,
      MatCardModule,
      MatDividerModule,
      MatCheckboxModule,
      MatSliderModule
   ],
  templateUrl: './products-filters-card.component.html',
  styleUrls: ['./products-filters-card.component.scss']
})
export class ProductsFiltersCardComponent {
   private store: Store = inject(Store);

   public readonly productCategoryOptions : ProductCategory[] = [
      "Xemote Gateway",
      "Xemote Accessory",
      "Wireless Temperature Sensor",
      "Wireless Humidity Sensor",
      "Wireless AC Current Meter",
      "Wireless Event-Based Sensor",
      "Wireless Infrared Beam Sensor",
      "Wireless 4-30mA Sensor",
   ];

   public filterByCategory(category : ProductCategory, checked : boolean) : void {
      this.store.dispatch(addProductCategoryFilter({categoryFilter: {
            productCategory: category,
            active: checked
         }}));
   }
}
