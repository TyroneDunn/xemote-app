import { createAction, props } from '@ngrx/store';
import { Page } from '../shared/page.type';

export const pageProducts = createAction(
   '[Products List] Page Products',
   props<{page: Page}>()
);
