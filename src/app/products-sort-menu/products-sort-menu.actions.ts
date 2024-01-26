import { createAction, props } from '@ngrx/store';
import { ProductsSortByOption } from '../product/product.types';

export const toggleProductsSort = createAction(
   '[Products Sort Menu] Toggle Products Sort',
   props<{ sortByOption: ProductsSortByOption }>()
);
