import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import {
   selectProductsLoading,
   selectProductsSort,
} from '../products/products-state.selectors';
import { sortProducts } from './products-sort-chips.actions';
import { ProductsSort } from '../products/product.types';
import { BooleanInput } from '@angular/cdk/coercion';

@Component({
  selector: 'app-products-sort-chips',
  standalone: true,
   imports: [ CommonModule, MatChipsModule, MatIconModule ],
  templateUrl: './products-sort-chips.component.html',
  styleUrls: ['./products-sort-chips.component.scss']
})
export class ProductsSortChipsComponent {
   private store : Store = inject(Store);
   protected readonly sort$ : Observable<ProductsSort | undefined> =
      this.store.select(selectProductsSort);
   protected productsLoading: Observable<boolean | null> =
      this.store.select(selectProductsLoading);

   public sortProductsByNameAsc() : void {
      this.store.dispatch(sortProducts({
         productsSort: {
            field: 'name',
            order: 'asc'
         }
      }));
   }

   public sortProductsByNameDesc() : void {
      this.store.dispatch(sortProducts({
         productsSort: {
            field: 'name',
            order: 'desc'
         }
      }));
   }

   public sortProductsByPriceAsc() : void {
      this.store.dispatch(sortProducts({
         productsSort: {
            field: 'price',
            order: 'asc'
         }
      }));
   }

   public sortProductsByPriceDesc() : void {
      this.store.dispatch(sortProducts({
         productsSort: {
            field: 'price',
            order: 'desc'
         }
      }));
   }

   public sortProductsByCategoryAsc() : void {
      this.store.dispatch(sortProducts({
         productsSort: {
            field: 'category',
            order: 'asc'
         }
      }));
   }

   public sortProductsByCategoryDesc() : void {
      this.store.dispatch(sortProducts({
         productsSort: {
            field: 'category',
            order: 'desc'
         }
      }));
   }

   public selected(productSort : ProductsSort) : Observable<BooleanInput> {
      return this.sort$.pipe(
         map(value =>
            (productSort.field == value?.field) && (productSort.order == value.order))
      );
   }
}
