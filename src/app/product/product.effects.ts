import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { enterStorePage } from '../store-page/store.page.actions';
import { of, switchMap, withLatestFrom } from 'rxjs';
import { loadProducts } from './product.actions.type';
import { Store } from '@ngrx/store';
import { selectProductsQueryParams } from '../products-state/products-state.selectors';

@Injectable({
  providedIn: 'root'
})
export class ProductEffects {
   private actions$: Actions = inject(Actions);
   private store: Store = inject(Store);

   private loadProducts = createEffect(() =>
      this.actions$.pipe(
         ofType(
            enterStorePage,
         ),
         withLatestFrom(this.store.select(selectProductsQueryParams)),
         switchMap(([_, queryParams]) =>
            of(loadProducts({ getProductsRequest : queryParams }))),
      ));
}
