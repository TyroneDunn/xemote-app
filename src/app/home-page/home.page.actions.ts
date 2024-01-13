import { createAction, props } from '@ngrx/store';
import { Page } from '../page/page.type';
import {
   PriceRange,
   ProductsAvailability,
   ProductsCategory,
   ProductsSort,
} from '../products/products.type';

export const openProductDetail = createAction(
   '[Home Page] Open Product Detail',
   props<{ productId: string }>()
);

export const openAddProductToCartDialog = createAction(
   '[Home Page] Open Add Product To Cart Dialog',
   props<{ productId: string }>()
);

export const filterProductsByCategory = createAction(
   '[Home Page] Filter Products By Category',
   props<{ category: ProductsCategory }>()
);

export const filterProductsByPriceRange = createAction(
   '[Home Page] Filter Products By Price Range',
   props<{ priceRange: PriceRange }>()
);

export const filterProductsByAvailability = createAction(
   '[Home Page] Filter Products By Availability',
   props<{ availability: ProductsAvailability }>()
);

export const sortProducts = createAction(
   '[Home Page] Sort Products',
   props<{ sort: ProductsSort }>()
);

export const pageProducts = createAction(
   '[Home Page] Page Products',
   props<{ page: Page }>()
);
