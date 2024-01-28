import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { enterStorePage } from '../store-page/store.page.actions';
import { of, switchMap, withLatestFrom } from 'rxjs';
import { loadProducts } from './products.actions';
import { Store } from '@ngrx/store';
import { selectProductsQueryParams } from './products-state.selectors';
import { toggleProductsSort } from '../products-sort-menu/products-sort-menu.actions';
import { negateOrder } from '../shared/order.utility';
import { ProductCategory, ProductsRequest } from './product.types';
import {
   toggleProductsCategoryFilter,
} from '../products-category-filters/products-category-filters.actions';
import {
   updateProductsPriceRangeFilter,
} from '../products-price-range-filter/products-price-range-filter.actions';
import { NumberRange } from '../shared/number-range.type';
import {
   removeCategoryFilter,
   removePriceRangeFilter,
} from '../products-active-filters-chips/active-products-filters-chip-list.actions';
import { pageProducts } from '../products-list/products-list.actions';
import { Page } from '../shared/page.type';
import { searchProducts } from '../products-search/products-search.actions';
import { sortProducts } from '../products-sort-chips/products-sort-chips.actions';

@Injectable({
  providedIn: 'root'
})
export class ProductsEffects {
   private readonly actions$: Actions = inject(Actions);
   private readonly store: Store = inject(Store);

   private readonly loadProductsOnEnterStorePage = createEffect(() =>
      this.actions$.pipe(
         ofType(enterStorePage),
         withLatestFrom(this.store.select(selectProductsQueryParams)),
         switchMap(([_, queryParams]) =>
            of(loadProducts({ getProductsRequest : queryParams }))),
      ));

   private readonly toggleProductsSortAndLoadSortedProducts = createEffect(() =>
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
                  page: {
                     index: 0,
                     limit: queryParams.page.limit
                  }
               },
            })))
      ));

   private readonly loadSortedProducts = createEffect(() =>
      this.actions$.pipe(
         ofType(sortProducts),
         withLatestFrom(this.store.select(selectProductsQueryParams)),
         switchMap(([action, queryParams]) =>
            of(loadProducts({
               getProductsRequest: {
                  ...queryParams,
                  sort: {
                     field: action.productsSort.field,
                     order: action.productsSort.order
                  },
                  page: {
                     index: 0,
                     limit: queryParams.page.limit
                  }
               },
            })))
      ));

   private readonly loadProductsFilteredByCategory = createEffect(() =>
      this.actions$.pipe(
         ofType(toggleProductsCategoryFilter),
         withLatestFrom(this.store.select(selectProductsQueryParams)),
         switchMap(([action, queryParams]) =>
            of(loadProducts({
               getProductsRequest: {
                  ...toggleCategoryFilterActive(queryParams, action.category),
                  page: {
                     index: 0,
                     limit: queryParams.page.limit
                  }
               },
            })))
      ));

   private readonly removeCategoryFilterAndLoadProducts = createEffect(() => {
      return this.actions$.pipe(
         ofType(removeCategoryFilter),
         withLatestFrom(this.store.select(selectProductsQueryParams)),
         switchMap(([action, queryParams]) => {
            return of(loadProducts({
               getProductsRequest: {
                  ...removeCategoryFilterFromQueryParams(queryParams, action.category),
                  page: {
                     index: 0,
                     limit: queryParams.page.limit
                  }
               },
            }));
         })
      );
   });

   private readonly loadProductsFilteredByPriceRange = createEffect(() =>
      this.actions$.pipe(
         ofType(updateProductsPriceRangeFilter),
         withLatestFrom(this.store.select(selectProductsQueryParams)),
         switchMap(([ action, queryParams ]) =>
            of(loadProducts({
               getProductsRequest: {
                  ...replaceProductsPriceRangeFilter(queryParams, action.priceRange),
                  page: {
                     index: 0,
                     limit: queryParams.page.limit
                  }
               },
            }))),
      ));

   private readonly removePriceRangeFilterAndLoadProducts = createEffect(() =>
      this.actions$.pipe(
         ofType(removePriceRangeFilter),
         withLatestFrom(this.store.select(selectProductsQueryParams)),
         switchMap(([ , queryParams ]) =>
            of(loadProducts({
               getProductsRequest: {
                  ...removePriceRangeFilterFromQueryParams(queryParams),
                  page: {
                     index: 0,
                     limit: queryParams.page.limit
                  }
               },
            }))),
      ));

   private readonly loadPagedProducts = createEffect(() =>
      this.actions$.pipe(
         ofType(pageProducts),
         withLatestFrom(this.store.select(selectProductsQueryParams)),
         switchMap(([action, queryParams ]) =>
            of(loadProducts({
               getProductsRequest: {
                  ...updateProductsPageFilter(queryParams, action.page),
               },
            }))),
      ));

   private readonly loadQueriedProducts = createEffect(() =>
      this.actions$.pipe(
         ofType(searchProducts),
         withLatestFrom(this.store.select(selectProductsQueryParams)),
         switchMap(([action, queryParams ]) =>
            of(loadProducts({
               getProductsRequest: {
                  ...updateProductsQuery(queryParams, action.query),
                  page: {
                     index: 0,
                     limit: queryParams.page.limit
                  }
               },
            }))),
      )
   );
}

const toggleCategoryFilterActive =
   (queryParams: ProductsRequest, categoriesFilter : ProductCategory) => {
      if (queryParams !== undefined && queryParams.filter?.byCategories !== undefined) {
         const categoriesFilters = queryParams.filter?.byCategories || [];
         const oldCategoryFilter = categoriesFilters.find(filter => filter.category === categoriesFilter);
         if (oldCategoryFilter !== undefined)
            return ({
               ...queryParams,
               filter: {
                  ...queryParams.filter,
                  byCategories: categoriesFilters
                  .filter(filter => filter.category !== categoriesFilter)
                  .concat({
                     category: oldCategoryFilter.category,
                     active: !oldCategoryFilter.active
                  })
               }
            });
      }
      return {...queryParams};
   };

const removeCategoryFilterFromQueryParams =
   (queryParams : ProductsRequest, category : ProductCategory) => {
      if (queryParams !== undefined && queryParams.filter?.byCategories !== undefined) {
         const categoriesFilters = queryParams.filter?.byCategories || [];
         return {
            ...queryParams,
            filter: {
               ...queryParams.filter,
               byCategories: categoriesFilters
               .filter(filter => filter.category !== category)
               .concat({
                  category: category,
                  active: false
               })
            }
         };
      }
      return {...queryParams};
   };


const replaceProductsPriceRangeFilter =
   (queryParams : ProductsRequest, priceRange : NumberRange): ProductsRequest => {
      if (queryParams !== undefined && queryParams.filter?.byCategories !== undefined)
         return {
            ...queryParams,
            filter: {
               ...(queryParams.filter),
               priceRange: { start: priceRange.start, end: priceRange.end },
            },
         };
      return {...queryParams};
   };

const removePriceRangeFilterFromQueryParams = (queryParams : ProductsRequest) => {
   if (queryParams !== undefined && queryParams.filter?.byCategories !== undefined) {
      return {
         ...queryParams,
         filter: {
            ...(queryParams.filter),
            priceRange: {start: 0, end: 2000}
         }
      }
   }
   return {...queryParams};
};

const updateProductsPageFilter = (productsRequest : ProductsRequest, page : Page) => ({
   ...productsRequest,
   page: page,
});

const updateProductsQuery = (productsRequest : ProductsRequest, query : string) => {
   if (productsRequest !== undefined && productsRequest.filter?.byCategories !== undefined)
      return {
         ...productsRequest,
         filter: {
            ...productsRequest.filter,
            nameRegex: query,
         },
      };
   return { ...productsRequest };
};
