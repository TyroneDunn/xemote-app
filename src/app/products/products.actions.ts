import { createAction, props } from '@ngrx/store';
import { ProductsRequest } from './product.types';

export const loadProducts = createAction(
   '[Products] Load Products',
   props<{ getProductsRequest : ProductsRequest }>()
);
