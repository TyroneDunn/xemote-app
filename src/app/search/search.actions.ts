import { createAction, props } from '@ngrx/store';

export const searchProducts = createAction(
   '[Search] Search Products',
   props<{query: string}>()
);
