import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../product/product.types';
import { ProductCardComponent } from '../product-card/product-card.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import {
   selectProductsCollection,
   selectProductsLoading,
} from '../products-state/products-state.selectors';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductsSortComponent } from '../products-sort/products-sort.component';
import {
   ActiveProductsFiltersChipListComponent
} from '../active-products-filters-chip-list/active-products-filters-chip-list.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
   imports: [
      CommonModule,
      ProductsSortComponent,
      ActiveProductsFiltersChipListComponent,
      MatProgressSpinnerModule,
      ProductCardComponent,
      MatPaginatorModule,
   ],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
   private store: Store = inject(Store);
   public products: Observable<Product[]> = this.store.select(selectProductsCollection);
   public productsLoading: Observable<boolean | null> = this.store.select(selectProductsLoading);
}
