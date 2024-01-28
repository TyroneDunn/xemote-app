import { createAction, props } from '@ngrx/store';

export const searchProducts = createAction(
   '[Products Search] Search Products',
   props<{query: string}>()
);
