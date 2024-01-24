import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationToolbar } from '../navigation-toolbar/navigation.toolbar';
import { FooterSection } from '../footer-section/footer.section';
import { Store } from '@ngrx/store';
import { ProductsFiltersCardComponent } from '../products-filters-card/products-filters-card.component';
import { ProductsListComponent } from '../products-list/products-list.component';
import { SearchComponent } from '../search/search.component';
import { StoreToolbarComponent } from '../store-toolbar/store-toolbar.component';
import { enterStorePage } from './store.page.actions';

@Component({
  selector: 'app-store-page',
  standalone: true,
   imports: [
      CommonModule,
      NavigationToolbar,
      FooterSection,
      ProductsFiltersCardComponent,
      ProductsListComponent,
      SearchComponent,
      StoreToolbarComponent
   ],
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss']
})
export class StorePage {
   private store: Store = inject(Store);

   public ngOnInit() : void {
      this.store.dispatch(enterStorePage());
   }
}
