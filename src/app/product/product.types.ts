import { Page } from '../page/page.type';
import { Order } from '../shared/order.type';
import { NumberRange } from '../shared/number-range.type';

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
   | "Wireless Humidity Sensor"
   | "Wireless AC Current Meter"
   | "Wireless Event-Based Sensor"
   | "Wireless Infrared Beam Sensor"
   | "Wireless 4-30mA Sensor";

export type ProductsRequest = {
   filter?: ProductsFilter,
   sort?: ProductsSort,
   page?: Page,
};

export type ProductsFilter = {
   nameRegex? : string,
   category? : ProductCategory,
   priceRange?: NumberRange,
};

export type ProductsSort = {
   field: ProductsSortByOption,
   order: Order,
};

export type GetProductsResponse = {
   collection: Product[],
   count: number,
   index: number,
   limit: number,
};

export type ProductsSortByOption =
   | "Name"
   | "Price"
   | "Category";

export const productSortByOptions : ProductsSortByOption[] = [
   "Name",
   "Price",
   "Category",
];
