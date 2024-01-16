import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { enterStorePage } from '../store-page/store.page.actions';
import { of, switchMap, withLatestFrom } from 'rxjs';
import { loadProducts } from './product.actions.type';
import { Store } from '@ngrx/store';
import { selectProductsQueryParams } from '../products-state/products-state.selectors';
import { toggleProductsSort } from '../products-sort/products-sort.actions';
import { negateOrder } from '../shared/order.utility';
import { addProductCategoryFilter } from '../products-filters-card/products-filters-card.actions';
import { ProductCategory, ProductsFilter } from './product.types';

@Injectable({
  providedIn: 'root'
})
export class ProductEffects {
   private actions$: Actions = inject(Actions);
   private store: Store = inject(Store);

   private loadProducts = createEffect(() =>
      this.actions$.pipe(
         ofType(
            enterStorePage,
         ),
         withLatestFrom(this.store.select(selectProductsQueryParams)),
         switchMap(([_, queryParams]) =>
            of(loadProducts({ getProductsRequest : queryParams }))),
      ));

   private loadSortedProducts = createEffect(() =>
      this.actions$.pipe(
         ofType(
            toggleProductsSort
         ),
         withLatestFrom(this.store.select(selectProductsQueryParams)),
         switchMap(([action, queryParams]) =>
            of(loadProducts({
               getProductsRequest: {
                  ...queryParams,
                  sort: {
                     field: action.sortByOption,
                     order: action.sortByOption === queryParams.sort?.field
                        ? negateOrder(queryParams.sort.order)
                        : "asc",
                  },
               },
            }))),
      ));

   private readonly loadProductsFilteredByCategory = createEffect(() =>
      this.actions$.pipe(
         ofType(addProductCategoryFilter),
         withLatestFrom(this.store.select(selectProductsQueryParams)),
         switchMap(([action, queryParams]) =>
            of(loadProducts({
               getProductsRequest: {
                  ...queryParams,
                  filter: updateCategoryFilter(
                     queryParams.filter,
                     action.categoryFilter.productCategory,
                     action.categoryFilter.active,
                  ),
               },
            })))
      ));
}

const updateCategoryFilter = (
   productsFilter: ProductsFilter | undefined,
   category: ProductCategory,
   activeFilter: boolean
) : ProductsFilter => {
   if (productsFilter === undefined)
      return { category: [ category ] };

   if (activeFilter) {
      if (productsFilter.category === undefined)
         return {
            ...productsFilter,
            category: [ category ],
         };

      if (productsFilter.category.includes(category) )
         return {
            ...productsFilter
         };
      else
         return {
            ...productsFilter,
            category: productsFilter.category.concat(category)
         };
   } else {
      if (productsFilter.category === undefined)
         return {
            ...productsFilter,
         };

      if (productsFilter.category.includes(category) )
         return {
            ...productsFilter,
            category: productsFilter.category.filter(value => value !== category)
         };
      else
         return {
            ...productsFilter,
         };
   }
};
