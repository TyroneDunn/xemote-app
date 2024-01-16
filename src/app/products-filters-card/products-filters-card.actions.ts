import { createAction, props } from '@ngrx/store';
import { ProductCategoriesFilters } from '../product/product.types';

export const filterProductsByCategories = createAction(
   '[Products Filters Card] Filter Products By Categories',
   props<{ categoriesFilters : ProductCategoriesFilters}>()
);
