import { inject, Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { map, Observable } from 'rxjs';
import { ProductsRequest, GetProductsResponse } from '../product/product.types';
import { API_PRODUCTS_URL } from '../../environments/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
   private http: HttpService = inject(HttpService);

   public getProducts$ = (getProductsRequest: ProductsRequest): Observable<GetProductsResponse> => {
      const getProductsUrl: string = this.mapGetProductsRequestToGetProductsUrl(getProductsRequest);
      return this.http.getRequest$<GetProductsResponse>(getProductsUrl)
         .pipe(
            map((response) => {
               console.log('http response: ', response.body);
               return (response.body as GetProductsResponse);
            })
         );
   };

   private mapGetProductsRequestToGetProductsUrl = (getProductsRequest : ProductsRequest) : string => {
      const url : URL = new URL(API_PRODUCTS_URL);
      if (getProductsRequest.filter?.nameRegex)
         url.searchParams.append('nameRegex', getProductsRequest.filter.nameRegex);
      if (
         getProductsRequest.filter?.byCategories
         && getProductsRequest.filter.byCategories.filter(value => value.active).length > 0
      ) {
         url.searchParams.append('category', JSON.stringify(
            getProductsRequest.filter.byCategories
            .filter(categoryFilter => categoryFilter.active)
            .map(categoryFilter => categoryFilter.category)
         ));
      }
      if (getProductsRequest.filter?.priceRange)
         url.searchParams.append('price', JSON.stringify(getProductsRequest.filter.priceRange));
      if (getProductsRequest.sort) {
         url.searchParams.append('sort', getProductsRequest.sort.field);
         url.searchParams.append('order', getProductsRequest.sort.order);
      }
      if (getProductsRequest.page) {
         url.searchParams.append('index', getProductsRequest.page.index.toString());
         url.searchParams.append('limit', getProductsRequest.page.limit.toString());
      }
      return url.toString();
   };
}
