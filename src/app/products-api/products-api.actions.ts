import { createAction, props } from '@ngrx/store';

import {
   GetProductsResponse,
   ProductsRequest as GetProductsRequest,
} from '../products/product.types';

export const loadProductsSuccess = createAction(
   '[Products API] Load Products Success',
   props<{
      request: GetProductsRequest,
      response: GetProductsResponse
   }>()
);

export const loadProductsFailure = createAction(
   '[Products API] Load Products Failure',
);
