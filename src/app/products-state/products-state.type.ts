import { Product, ProductsSort } from '../products/products.type';
import { Order } from '../shared/order.type';

export type ProductsState = {
   collection : Product[],
   selectedProduct : Product | null,
   query : string | null,
   filters : ProductsSort[];
   sort : ProductsSort | null,
   order : Order | null,
   count : number | null,
   index : number | null,
   limit : number | null,
};
