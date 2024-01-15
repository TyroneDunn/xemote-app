import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadProducts } from '../product/product.actions.type';
import { map, switchMap } from 'rxjs';
import { loadProductsSuccess } from './products-api.actions';
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
         switchMap(() =>
            this.productsApi.getProducts$({})
            .pipe(
               map((response) =>
                  loadProductsSuccess({ response: response }),
               ),
               // todo : implement failure case
               // catchError()
            )),
      ));
}
