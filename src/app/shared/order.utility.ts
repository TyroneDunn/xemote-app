import { Order } from './order.type';

export const negateOrder = (order : Order) : Order => {
   switch (order) {
      case "asc": return "desc";
      case "desc": return "asc";
   }
};
