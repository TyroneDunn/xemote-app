import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientNavigation } from '../client-navigation/client.navigation';
import { FooterSection } from '../footer-section/footer.section';
import { Store } from '@ngrx/store';
import { ProductsFiltersComponent } from '../products-filters/products-filters.component';
import { ProductsListComponent } from '../products-list/products-list.component';
import { SearchComponent } from '../search/search.component';
import { StoreToolbarComponent } from '../store-toolbar/store-toolbar.component';

@Component({
  selector: 'app-store-page',
  standalone: true,
   imports: [ CommonModule, ClientNavigation, FooterSection, ProductsFiltersComponent, ProductsListComponent, SearchComponent, StoreToolbarComponent ],
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss']
})
export class StorePage {
   private store: Store = inject(Store);

}
