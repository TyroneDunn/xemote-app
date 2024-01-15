import { Action, ActionReducer, createReducer } from '@ngrx/store';
import { ProductsState } from './products-state.type';

const initialState: ProductsState = {
   collection: [],
   loading: null,
   selectedProduct: null,
   query: null,
   filters: [],
   sort: null,
   order: null,
   count: null,
   index: null,
   limit: null,
};

export const productsReducer: ActionReducer<ProductsState, Action> = createReducer(
   initialState,
);
