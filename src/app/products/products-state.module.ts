import { NgModule } from '@angular/core';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsState } from './products-state.type';
import { productsReducer } from './products-state.reducer';
import { ProductsEffects } from './products.effects';
import { ProductsApiEffects } from '../products-api/products-api.effects';

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
     EffectsModule.forFeature([
        ProductsEffects,
        ProductsApiEffects,
     ]),
  ]
})
export class ProductsStateModule {}
