import { createAction, props } from '@ngrx/store';
import { Page } from '../page/page.type';
import {
   PriceRange,
   ProductsAvailability,
   ProductsCategory,
   ProductsSort,
} from '../products/products.type';

export const openProductDetail = createAction(
   '[Store Page] Open Product Detail',
   props<{ productId: string }>()
);

export const openAddProductToCartDialog = createAction(
   '[Store Page] Open Add Product To Cart Dialog',
   props<{ productId: string }>()
);

export const openCheckout = createAction(
   '[Store Page] Open Checkout'
);

export const searchProducts = createAction(
   '[Store Page] Search Products',
   props<{ query: string }>()
);

export const filterProductsByCategory = createAction(
   '[Store Page] Filter Products By Category',
   props<{ category: ProductsCategory }>()
);

export const filterProductsByPriceRange = createAction(
   '[Store Page] Filter Products By Price Range',
   props<{ priceRange: PriceRange }>()
);

export const filterProductsByAvailability = createAction(
   '[Store Page] Filter Products By Availability',
   props<{ availability: ProductsAvailability }>()
);

export const sortProducts = createAction(
   '[Store Page] Sort Products',
   props<{ sort: ProductsSort }>()
);

export const pageProducts = createAction(
   '[Store Page] Page Products',
   props<{ page: Page }>()
);
