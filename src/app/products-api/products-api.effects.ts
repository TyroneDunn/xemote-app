import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadProducts } from '../products/products.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { loadProductsFailure, loadProductsSuccess } from './products-api.actions';
import { ProductsApiService } from './products-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiEffects {
   private actions$: Actions = inject(Actions);
   private productsApi: ProductsApiService = inject(ProductsApiService);

   private loadProducts = createEffect(() =>
      this.actions$.pipe(
         ofType(
            loadProducts,
         ),
         switchMap((action) =>
            this.productsApi.getProducts$(action.getProductsRequest)
            .pipe(
               map((response) =>
                  loadProductsSuccess({
                     request: action.getProductsRequest,
                     response: response
                  }),
               ),
               catchError(() =>
                  of(loadProductsFailure()))
            )),
      ));
}
