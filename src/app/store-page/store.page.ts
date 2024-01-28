import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationToolbar } from '../navigation-toolbar/navigation.toolbar';
import { FooterSection } from '../footer-section/footer.section';
import { Store } from '@ngrx/store';
import { ProductsFiltersCardComponent } from '../products-filters-card/products-filters-card.component';
import { ProductsListComponent } from '../products-list/products-list.component';
import { ProductsSearchComponent } from '../products-search/products-search.component';
import { StoreToolbarComponent } from '../store-toolbar/store-toolbar.component';
import { enterStorePage } from './store.page.actions';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { selectProductsLoading } from '../products-state/products-state.selectors';

@Component({
  selector: 'app-store-page',
  standalone: true,
   imports: [
      CommonModule,
      NavigationToolbar,
      FooterSection,
      ProductsFiltersCardComponent,
      ProductsListComponent,
      ProductsSearchComponent,
      StoreToolbarComponent,
      MatProgressBarModule,
   ],
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss']
})
export class StorePage {
   private store: Store = inject(Store);
   public productsLoading$ = this.store.select(selectProductsLoading);
   private breakpointObserver = inject(BreakpointObserver);
   public isMobile$ = this.breakpointObserver.observe([ Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium]).pipe(
      map(value => value.matches)
   );

   public ngOnInit() : void {
      this.store.dispatch(enterStorePage());
   }
}
