import { createAction, props } from '@ngrx/store';
import { GetProductsRequest } from './product.types';

export const loadProducts = createAction(
   '[Product] Load Products',
   props<{ getProductsRequest : GetProductsRequest }>()
);

