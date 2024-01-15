import { ActionReducer, createReducer, on } from '@ngrx/store';
import { ProductsState } from './products-state.type';
import { loadProducts } from '../product/product.actions.type';
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

export const productsReducer: ActionReducer<ProductsState> = createReducer(
   initialState,
   on(loadProducts, (state) => ({
      ...state,
      loading: true,
   })),
   on(loadProductsSuccess, (state, action) => ({
      ...state,
      loading: false,
      collection: action.response.collection,
      count: action.response.count,
      index: action.response.index,
      limit: action.response.limit,
   })),
);
