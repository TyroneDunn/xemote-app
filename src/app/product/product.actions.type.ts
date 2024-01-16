import { createAction, props } from '@ngrx/store';
import { ProductsRequest } from './product.types';

export const loadProducts = createAction(
   '[Product] Load Products',
   props<{ getProductsRequest : ProductsRequest }>()
);
