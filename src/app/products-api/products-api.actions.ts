import { createAction, props } from '@ngrx/store';

import { GetProductsResponse } from '../product/product.types';

export const loadProductsSuccess = createAction(
   '[Products API] Load Products Success',
   props<{response: GetProductsResponse}>()
);

export const loadProductsFailure = createAction(
   '[Products API] Load Products Failure',
);
