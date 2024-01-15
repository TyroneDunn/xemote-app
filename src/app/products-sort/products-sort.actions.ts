import { createAction, props } from '@ngrx/store';
import { ProductSortByOption } from '../product/product.types';

export const toggleProductsSort = createAction(
   '[Products Sort] Toggle Products Sort',
   props<{ sortByOption: ProductSortByOption }>()
);
