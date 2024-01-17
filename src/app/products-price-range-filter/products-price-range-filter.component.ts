import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   MatSliderModule,
} from '@angular/material/slider';
import { Store } from '@ngrx/store';
import { updateProductsPriceRangeFilter } from './products-price-range-filter.actions';

@Component({
  selector: 'app-products-price-range-filter',
  standalone: true,
   imports: [ CommonModule, MatSliderModule ],
  templateUrl: './products-price-range-filter.component.html',
  styleUrls: ['./products-price-range-filter.component.scss']
})
export class ProductsPriceRangeFilterComponent {
   private store : Store = inject(Store);
   public readonly priceRangeMax : number = 10000;
   public minPrice : number = 0;
   public maxPrice : number = this.priceRangeMax;

   public minProductPriceRangeFilterChanged($event : number) : void {
      this.store.dispatch(updateProductsPriceRangeFilter({
         priceRange: {
            start: $event,
            end: this.maxPrice
         }}));
   }

   public maxProductPriceRangeFilterChanged($event : number) : void {
      this.store.dispatch(updateProductsPriceRangeFilter({
         priceRange: {
            start: this.minPrice,
            end: $event
         }}));
   }
}
