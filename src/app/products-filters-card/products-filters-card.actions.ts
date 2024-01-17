import { createAction, props } from '@ngrx/store';
import { ProductCategory } from '../product/product.types';

export const toggleProductsCategoryFilter = createAction(
   '[Products Filters Card] Toggle Products Category Filter',
   props<{ category : ProductCategory}>()
);
