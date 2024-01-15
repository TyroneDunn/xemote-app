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