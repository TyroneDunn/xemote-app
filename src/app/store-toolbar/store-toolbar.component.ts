import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSearchComponent } from '../products-search/products-search.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductsSortMenu } from '../products-sort-menu/products-sort-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Observable, of } from 'rxjs';
import { MatChipsModule } from '@angular/material/chips';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {
   ProductsFiltersBottomSheet
} from '../products-filters-bottom-sheet/products-filters-bottom-sheet.component';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-store-toolbar',
  standalone: true,
   imports: [
      CommonModule,
      ProductsSearchComponent,
      MatToolbarModule,
      ProductsSortMenu,
      MatButtonModule,
      MatIconModule,
      MatChipsModule,
      MatBottomSheetModule,
      MatInputModule,
   ],
  templateUrl: './store-toolbar.component.html',
  styleUrls: ['./store-toolbar.component.scss']
})
export class StoreToolbarComponent {
   @Input() isMobile$: Observable<boolean> = of(false);
   private productsFiltersBottomSheet = inject(MatBottomSheet);

   public openProductsFiltersBottomSheet() : void {
      this.productsFiltersBottomSheet.open(ProductsFiltersBottomSheet);
   }
}
