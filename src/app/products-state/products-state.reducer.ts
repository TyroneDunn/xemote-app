import { Action, ActionReducer, createReducer } from '@ngrx/store';
import { ProductsState } from './products-state.type';
import { loadProductsSuccess } from '../products-api/products-api.actions';

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
   on(loadProductsSuccess, (state, action) => ({
      ...state,
      loading: false,
      collection: action.response.collection,
      count: action.response.count,
      index: action.response.index,
      limit: action.response.limit,
   })),
);
