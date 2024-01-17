import { createAction, props } from '@ngrx/store';
import { ProductCategory } from '../product/product.types';

export const removeCategoryFilter = createAction(
   '[Active Products Filters Chip List] Remove Category Filter',
   props<{category: ProductCategory}>()
);

export const removePriceRangeFilter = createAction(
   '[Active Products Filters Chip List] Remove Price Range Filter',
);
