import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ProductsRequest, GetProductsResponse } from '../products/product.types';

const stubGetProductsResponse: GetProductsResponse = {
   status: 200,
   collection: [
      {
         id: "0",
         name: "Gateway",
         price: {price: 23.10, currency: 'USD'},
         category: "Xemote Gateway",
         imageUrl: "https://xemoteiot.co.za/wp-content/uploads/2022/02/TH-Amphenol-XWEB2.png"
      },
      {
         id: "0",
         name: "Gateway",
         price: {price: 23.10, currency: 'USD'},
         category: "Xemote Gateway",
         imageUrl: "https://xemoteiot.co.za/wp-content/uploads/2022/02/TH-Amphenol-XWEB2.png"
      },
      {
         id: "0",
         name: "Gateway",
         price: {price: 23.10, currency: 'USD'},
         category: "Xemote Gateway",
         imageUrl: "https://xemoteiot.co.za/wp-content/uploads/2022/02/TH-Amphenol-XWEB2.png"
      },
      {
         id: "0",
         name: "Gateway",
         price: {price: 23.10, currency: 'USD'},
         category: "Xemote Gateway",
         imageUrl: "https://xemoteiot.co.za/wp-content/uploads/2022/02/TH-Amphenol-XWEB2.png"
      },
      {
         id: "0",
         name: "Gateway",
         price: {price: 23.10, currency: 'USD'},
         category: "Xemote Gateway",
         imageUrl: "https://xemoteiot.co.za/wp-content/uploads/2022/02/TH-Amphenol-XWEB2.png"
      },
      {
         id: "0",
         name: "Gateway",
         price: {price: 23.10, currency: 'USD'},
         category: "Xemote Gateway",
         imageUrl: "https://xemoteiot.co.za/wp-content/uploads/2022/02/TH-Amphenol-XWEB2.png"
      },
      {
         id: "0",
         name: "Gateway",
         price: {price: 23.10, currency: 'USD'},
         category: "Xemote Gateway",
         imageUrl: "https://xemoteiot.co.za/wp-content/uploads/2022/02/TH-Amphenol-XWEB2.png"
      },
      {
         id: "0",
         name: "Gateway",
         price: {price: 23.10, currency: 'USD'},
         category: "Xemote Gateway",
         imageUrl: "https://xemoteiot.co.za/wp-content/uploads/2022/02/TH-Amphenol-XWEB2.png"
      },
      {
         id: "0",
         name: "Gateway",
         price: {price: 23.10, currency: 'USD'},
         category: "Xemote Gateway",
         imageUrl: "https://xemoteiot.co.za/wp-content/uploads/2022/02/TH-Amphenol-XWEB2.png"
      },
      {
         id: "0",
         name: "Gateway",
         price: {price: 23.10, currency: 'USD'},
         category: "Xemote Gateway",
         imageUrl: "https://xemoteiot.co.za/wp-content/uploads/2022/02/TH-Amphenol-XWEB2.png"
      },
      {
         id: "0",
         name: "Gateway",
         price: {price: 23.10, currency: 'USD'},
         category: "Xemote Gateway",
         imageUrl: "https://xemoteiot.co.za/wp-content/uploads/2022/02/TH-Amphenol-XWEB2.png"
      },
      {
         id: "0",
         name: "Gateway",
         price: {price: 23.10, currency: 'USD'},
         category: "Xemote Gateway",
         imageUrl: "https://xemoteiot.co.za/wp-content/uploads/2022/02/TH-Amphenol-XWEB2.png"
      },
      {
         id: "0",
         name: "Gateway",
         price: {price: 23.10, currency: 'USD'},
         category: "Xemote Gateway",
         imageUrl: "https://xemoteiot.co.za/wp-content/uploads/2022/02/TH-Amphenol-XWEB2.png"
      },
      {
         id: "0",
         name: "Gateway",
         price: {price: 23.10, currency: 'USD'},
         category: "Xemote Gateway",
         imageUrl: "https://xemoteiot.co.za/wp-content/uploads/2022/02/TH-Amphenol-XWEB2.png"
      },
      {
         id: "0",
         name: "Gateway",
         price: {price: 23.10, currency: 'USD'},
         category: "Xemote Gateway",
         imageUrl: "https://xemoteiot.co.za/wp-content/uploads/2022/02/TH-Amphenol-XWEB2.png"
      },
      {
         id: "0",
         name: "Gateway",
         price: {price: 23.10, currency: 'USD'},
         category: "Xemote Gateway",
         imageUrl: "https://xemoteiot.co.za/wp-content/uploads/2022/02/TH-Amphenol-XWEB2.png"
      },
      {
         id: "0",
         name: "Gateway",
         price: {price: 23.10, currency: 'USD'},
         category: "Xemote Gateway",
         imageUrl: "https://xemoteiot.co.za/wp-content/uploads/2022/02/TH-Amphenol-XWEB2.png"
      },
   ],
   count: 19,
   index: 0,
   limit: 16
};

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
   public getProducts$ = (getProductsRequest: ProductsRequest): Observable<GetProductsResponse> =>
      of(stubGetProductsResponse as GetProductsResponse).pipe(delay(3000));
}
