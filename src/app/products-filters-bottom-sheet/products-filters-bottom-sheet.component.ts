import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   ProductsCategoryFiltersComponent
} from '../products-category-filters/products-category-filters.component';
import {
   ProductsPriceRangeFilterComponent
} from '../products-price-range-filter/products-price-range-filter.component';
import { ProductsSortMenu } from '../products-sort-menu/products-sort-menu.component';
import { ProductsSortChipsComponent } from '../products-sort-chips/products-sort-chips.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-products-filters-bottom-sheet',
  standalone: true,
   imports: [
      CommonModule,
      ProductsCategoryFiltersComponent,
      ProductsPriceRangeFilterComponent,
      ProductsSortMenu,
      ProductsSortChipsComponent,
      MatDividerModule
   ],
  templateUrl: './products-filters-bottom-sheet.component.html',
  styleUrls: ['./products-filters-bottom-sheet.component.scss']
})
export class ProductsFiltersBottomSheet {
}
