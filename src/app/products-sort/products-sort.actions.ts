import { createAction, props } from '@ngrx/store';
import { ProductSortByOption } from '../product/product.types';

export const toggleSort = createAction(
   '[Products Sort] Toggle Sort',
   props<{ sortOption: ProductSortByOption }>()
);
