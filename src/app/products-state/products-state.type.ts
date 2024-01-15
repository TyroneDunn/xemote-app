import { Product, ProductsSort } from '../product/product.types';
import { Order } from '../shared/order.type';

export type ProductsState = {
   collection : Product[],
   loading: boolean | null,
   selectedProduct : Product | null,
   query : string | null,
   filters : ProductsSort[];
   sort : ProductsSort | null,
   order : Order | null,
   count : number | null,
   index : number | null,
   limit : number | null,
};
