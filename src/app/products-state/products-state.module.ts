import { NgModule } from '@angular/core';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsState } from './products-state.type';
import { productsReducer } from './products-state.reducer';

export const FEATURE_KEY: string = 'products';

export type State = {
   products: ProductsState
};

export const actionReducerMap: ActionReducerMap<State> = {
   products: productsReducer
};

@NgModule({
  imports: [
     StoreModule.forFeature(FEATURE_KEY, actionReducerMap),
     EffectsModule.forFeature([ ]),
  ]
})
export class ProductsStateModule {}
