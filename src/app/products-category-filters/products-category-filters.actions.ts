import { createAction, props } from '@ngrx/store';
import { ProductCategory } from '../product/product.types';

export const toggleProductsCategoryFilter = createAction(
   '[Products Category Filters] Toggle Products Category Filter',
   props<{ category : ProductCategory}>()
);
