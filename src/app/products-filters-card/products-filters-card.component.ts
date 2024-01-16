import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { ProductCategoriesFilters } from '../product/product.types';
import { Store } from '@ngrx/store';
import { filterProductsByCategories } from './products-filters-card.actions';
import { selectProductsCategoryFilters } from '../products-state/products-state.selectors';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

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
      FormsModule,
      ReactiveFormsModule,
   ],
  templateUrl: './products-filters-card.component.html',
  styleUrls: ['./products-filters-card.component.scss']
})
export class ProductsFiltersCardComponent {
   private formBuilder = inject(FormBuilder);
   private store: Store = inject(Store);
   protected activeCategoryFilters$: Observable<ProductCategoriesFilters | undefined> =
      this.store.select(selectProductsCategoryFilters);
   protected categoriesFilterForm = this.formBuilder.group({
      "Xemote Gateway" : false,
      "Xemote Accessory" : false,
      "Wireless Temperature Sensor" : false,
      "Wireless Humidity Sensor" : false,
      "Wireless AC Current Meter" : false,
      "Wireless Event-Based Sensor" : false,
      "Wireless Infrared Beam Sensor" : false,
      "Wireless 4-30mA Sensor" : false,
   });

   protected filterProductsByCategory() : void {
      this.store.dispatch(filterProductsByCategories({
         categoriesFilters: mapFormToProductCategoriesFilters(this.categoriesFilterForm)
      }));
   };
}

const mapFormToProductCategoriesFilters = (categoriesFilterForm : FormGroup) : ProductCategoriesFilters => ({
   'Xemote Gateway'               : categoriesFilterForm.get('Xemote Gateway')?.value as boolean,
   'Xemote Accessory'             : categoriesFilterForm.get('Xemote Accessory')?.value as boolean,
   'Wireless Temperature Sensor'  : categoriesFilterForm.get('Wireless Temperature Sensor')?.value as boolean,
   'Wireless Humidity Sensor'     : categoriesFilterForm.get('Wireless Humidity Sensor')?.value as boolean,
   'Wireless AC Current Meter'    : categoriesFilterForm.get('Wireless AC Current Meter')?.value as boolean,
   'Wireless Event-Based Sensor'  : categoriesFilterForm.get('Wireless Event-Based Sensor')?.value as boolean,
   'Wireless Infrared Beam Sensor': categoriesFilterForm.get('Wireless Infrared Beam Sensor')?.value as boolean,
   'Wireless 4-30mA Sensor'       : categoriesFilterForm.get('Wireless 4-30mA Sensor')?.value as boolean
});
