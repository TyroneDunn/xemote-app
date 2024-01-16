import { createAction, props } from '@ngrx/store';
import { ProductCategory } from '../product/product.types';

export const addProductCategoryFilter = createAction(
   '[Products Filters Card] Add Product Category Filter',
   props<{ categoryFilter : {
      productCategory : ProductCategory,
      active : boolean
   }}>()
);
