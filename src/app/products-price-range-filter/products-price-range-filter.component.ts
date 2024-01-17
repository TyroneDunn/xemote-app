import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-products-price-range-filter',
  standalone: true,
   imports: [ CommonModule, MatSliderModule ],
  templateUrl: './products-price-range-filter.component.html',
  styleUrls: ['./products-price-range-filter.component.scss']
})
export class ProductsPriceRangeFilterComponent {
   public readonly priceRangeMax : number = 10000;
   public minPrice : number = 0;
   public maxPrice : number = this.priceRangeMax;

   public updateProductPriceRangeFilter() : void {
      console.log('min; ', this.minPrice, 'max: ', this.maxPrice);
   }
}
