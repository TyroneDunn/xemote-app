import { createAction, props } from '@ngrx/store';
import { NumberRange } from '../shared/number-range.type';

export const updateProductsPriceRangeFilter = createAction(
   '[Products Price Range Filter] Update Products Price Range Filter',
   props<{ priceRange : NumberRange }>()
);
