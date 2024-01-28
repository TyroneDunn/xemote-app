import { inject, Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { map, Observable } from 'rxjs';
import { GetProductsResponse, ProductsRequest } from '../products/product.types';
import { API_PRODUCTS_URL } from '../../environments/constants';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
   private http: HttpService = inject(HttpService);

   public getProducts$ = (getProductsRequest: ProductsRequest): Observable<GetProductsResponse> =>
      this.http.getRequest$<GetProductsResponse>(mapGetProductsRequestToGetProductsUrl(getProductsRequest))
      .pipe(
         map((response : HttpResponse<GetProductsResponse>) =>
            (response.body as GetProductsResponse)));
}

const mapGetProductsRequestToGetProductsUrl = (getProductsRequest : ProductsRequest) : string => {
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
