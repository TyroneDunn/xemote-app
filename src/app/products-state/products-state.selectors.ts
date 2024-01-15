import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_KEY, State } from './products-state.module';

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

export const selectProductsSort = createSelector(
   selectProductsState,
   (state) => state.sort
);

export const selectProductsOrder = createSelector(
   selectProductsState,
   (state) => state.order
);
