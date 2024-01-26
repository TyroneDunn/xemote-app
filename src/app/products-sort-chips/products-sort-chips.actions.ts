import { createAction, props } from '@ngrx/store';
import { ProductsSort } from '../product/product.types';

export const sortProducts = createAction(
   '[Products Sort Chips] Products Sort',
   props<{ productsSort: ProductsSort }>()
);
