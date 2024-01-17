import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {
   ProductsPriceRangeFilterComponent
} from '../products-price-range-filter/products-price-range-filter.component';
import {
   ProductsCategoryFiltersComponent
} from '../products-category-filters/products-category-filters.component';

@Component({
  selector: 'app-products-filters-card',
  standalone: true,
   imports: [
      CommonModule,
      MatCardModule,
      MatDividerModule,
      ProductsCategoryFiltersComponent,
      ProductsPriceRangeFilterComponent,
   ],
  templateUrl: './products-filters-card.component.html',
  styleUrls: ['./products-filters-card.component.scss']
})
export class ProductsFiltersCardComponent {
}
