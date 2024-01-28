import { createAction, props } from '@ngrx/store';
import { ProductsSort } from '../products/product.types';

export const sortProducts = createAction(
   '[Products Sort Chips] Products Sort',
   props<{ productsSort: ProductsSort }>()
);
