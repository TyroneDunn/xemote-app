import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { searchProducts } from './products-search.actions';
import { debounceTime, first, Subscription } from 'rxjs';
import { selectProductsQuery } from '../products-state/products-state.selectors';

@Component({
   selector: 'app-products-search',
   standalone: true,
   imports: [
      CommonModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatTooltipModule,
      MatIconModule
   ],
   templateUrl: './products-search.component.html',
   styleUrls: [ './products-search.component.scss' ],
})
export class ProductsSearchComponent {
   private store: Store = inject(Store);
   private formBuilder: FormBuilder = inject(FormBuilder);
   public searchForm: FormGroup = this.formBuilder.nonNullable.group({
      searchQuery: ''
   });
   private query$ = this.store.select(selectProductsQuery);
   public searchQuery = () => this.searchForm.value.searchQuery;
   private formSubscription : Subscription | undefined;

   public ngOnInit() {
      this.query$
      .pipe(first())
      .subscribe(value =>
         this.searchForm.patchValue({searchQuery: value})
      )

      this.formSubscription = this.searchForm.get('searchQuery')?.valueChanges
      .pipe(debounceTime(500))
      .subscribe((query: string) => {
         this.handleSubmitSearch(query);
      });
   }

   public handleSubmitSearch(query: string): void {
      this.store.dispatch(searchProducts({query: query}))
   }

   public handleClearSearchQuery(): void {
      this.searchForm.patchValue({searchQuery: ''});
   }

   public ngOnDestroy() {
      this.formSubscription?.unsubscribe();
   }
}
