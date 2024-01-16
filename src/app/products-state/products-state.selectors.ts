import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_KEY, State } from './products-state.module';
import { ProductsRequest } from '../product/product.types';

export const selectSharedProductsState = createFeatureSelector<State>(FEATURE_KEY);

export const selectProductsState = createSelector(
   selectSharedProductsState,
   (state) => state.products
);

export const selectProductsCollection = createSelector(
   selectProductsState,
   (state) => state.collection
);

export const selectProductsLoading = createSelector(
   selectProductsState,
   (state) => state.loading
);

export const selectProductsFilter = createSelector(
   selectProductsState,
   (state) => state.filter || undefined
);

export const selectProductsSort = createSelector(
   selectProductsState,
   (state) => state.sort || undefined
);

export const selectProductsPage = createSelector(
   selectProductsState,
   (state) => state.page || undefined
);

export const selectProductsQueryParams = createSelector(
   selectProductsFilter,
   selectProductsSort,
   selectProductsPage,
   (
      filter,
      sort,
      page
   ) : ProductsRequest => ({
      ...filter && { filter: filter },
      ...sort && { sort: sort },
      ...page && { page: page },
   }));

export const selectProductsCategoryFilters = createSelector(
   selectProductsFilter,
   (filter) => filter?.category
);
