import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../product/product.types';
import { ProductCardComponent } from '../product-card/product-card.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { selectProductsCollection } from '../products-state/products-state.selectors';

@Component({
  selector: 'app-products-list',
  standalone: true,
   imports: [
      CommonModule,
      ProductCardComponent,
      MatChipsModule,
      MatButtonModule,
      MatPaginatorModule
   ],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
   private store: Store = inject(Store);
   public products: Observable<Product[]> = this.store.select(selectProductsCollection);
}
