import {
   Product,
   ProductsFilter,
   ProductsSort,
} from '../product/product.types';
import { Page } from '../page/page.type';

export type ProductsState = {
   collection : Product[],
   count : number,
   loading : boolean | null,
   selectedProduct : Product | null,
   filter : ProductsFilter | null,
   sort : ProductsSort | null;
   page : Page | null
};
