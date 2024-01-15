import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { enterStorePage } from '../store-page/store.page.actions';
import { of, switchMap } from 'rxjs';
import { loadProducts } from './product.actions.type';

@Injectable({
  providedIn: 'root'
})
export class ProductEffects {
   private actions$: Actions = inject(Actions);

   private loadProducts = createEffect(() =>
      this.actions$.pipe(
         ofType(
            enterStorePage,
         ),
         switchMap(() => of(loadProducts())),
      ));
}
