import { Order } from '../shared/order.type';
import { NumberRange } from '../shared/number-range.type';
import { Page } from '../shared/page.type';

export type Product = {
   id: string,
   name: string,
   price: Price,
   category: ProductCategory,
   imageUrl: string,
};

export type Price = {
  price: number,
  currency: Currency,
};

export type Currency = "ZAR" | "USD";

export type ProductCategory =
   | "Xemote Gateway"
   | "Xemote Accessory"
   | "Wireless Temperature Sensor"
   | "Wireless AC Current Meter"
   | "Wireless Event-Based Sensor"
   | "Wireless Infrared Beam Sensor"
   | "Wireless 4-30mA Sensor"
   | "Wireless Control Device";

export type ProductsRequest = {
   filter?: ProductsFilter,
   sort?: ProductsSort,
   page: Page,
};

export type ProductCategoryFilter = { category: ProductCategory, active: boolean };

export type ProductsFilter = {
   nameRegex? : string,
   byCategories : ProductCategoryFilter[],
   priceRange?: NumberRange,
};

export type ProductsSort = {
   field: ProductsSortByOption,
   order: Order,
};

export type GetProductsResponse = {
   status: number,
   collection: Product[],
   count: number,
   index: number,
   limit: number,
};

export type ProductsSortByOption =
   | "name"
   | "price"
   | "category";

export const productSortByOptions : ProductsSortByOption[] = [
   "name",
   "price",
   "category",
];
