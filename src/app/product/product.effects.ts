import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { enterStorePage } from '../store-page/store.page.actions';
import { of, switchMap, withLatestFrom } from 'rxjs';
import { loadProducts } from './product.actions.type';
import { Store } from '@ngrx/store';
import { selectProductsQueryParams } from '../products-state/products-state.selectors';
import { toggleProductsSort } from '../products-sort/products-sort.actions';
import { negateOrder } from '../shared/order.utility';
import { filterProductsByCategories } from '../products-filters-card/products-filters-card.actions';
import { ProductCategoriesFilters } from './product.types';

@Injectable({
  providedIn: 'root'
})
export class ProductEffects {
   private readonly actions$: Actions = inject(Actions);
   private readonly store: Store = inject(Store);

   private readonly loadProducts = createEffect(() =>
      this.actions$.pipe(
         ofType(enterStorePage),
         withLatestFrom(this.store.select(selectProductsQueryParams)),
         switchMap(([_, queryParams]) =>
            of(loadProducts({ getProductsRequest : queryParams }))),
      ));

   private readonly loadSortedProducts = createEffect(() =>
      this.actions$.pipe(
         ofType(toggleProductsSort),
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
         ofType(filterProductsByCategories),
         withLatestFrom(this.store.select(selectProductsQueryParams)),
         switchMap(([action, queryParams]) =>
            of(loadProducts({
               getProductsRequest: {
                  ...queryParams,
                  ...mapProductsCategoriesFiltersToProductsFilter(action.categoriesFilters)
               },
            })))
      ));
}

const mapProductsCategoriesFiltersToProductsFilter =
   (categoriesFilters : ProductCategoriesFilters) => ({
      filter: {
         byCategories: { ...categoriesFilters }
      }
   });
