import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   MatSliderDragEvent,
   MatSliderModule,
} from '@angular/material/slider';
import { Store } from '@ngrx/store';
import { updateProductsPriceRangeFilter } from './products-price-range-filter.actions';
import { selectProductsPriceRangeFilter } from '../products-state/products-state.selectors';

@Component({
  selector: 'app-products-price-range-filter',
  standalone: true,
   imports: [ CommonModule, MatSliderModule ],
  templateUrl: './products-price-range-filter.component.html',
  styleUrls: ['./products-price-range-filter.component.scss']
})
export class ProductsPriceRangeFilterComponent {
   private store : Store = inject(Store);
   public readonly priceRangeMax : number = 2000;
   public priceRangeFilter$ = this.store.select(selectProductsPriceRangeFilter);

   public productPriceRangeFilterChanged($event : MatSliderDragEvent) : void {
      this.store.dispatch(updateProductsPriceRangeFilter({
         priceRange: {
            start: $event.parent._getInput(1)?.value,
            end: $event.parent._getInput(0)?.value
         }}));
   }
}
