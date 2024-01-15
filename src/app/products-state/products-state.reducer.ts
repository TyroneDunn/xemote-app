import { ActionReducer, createReducer, on } from '@ngrx/store';
import { ProductsState } from './products-state.type';
import { loadProducts } from '../product/product.actions.type';
import { loadProductsSuccess } from '../products-api/products-api.actions';

const initialState: ProductsState = {
   collection: [],
   count: 0,
   loading: null,
   selectedProduct: null,
   filter: null,
   sort: {
      field: "Name",
      order: "asc"
   },
   page: null,
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
      ...action.request,
      collection: action.response.collection,
      count: action.response.count,
      index: action.response.index,
      limit: action.response.limit,
   })),
);
