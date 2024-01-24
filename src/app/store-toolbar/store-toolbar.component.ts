import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductsSortComponent } from '../products-sort/products-sort.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-store-toolbar',
  standalone: true,
   imports: [
      CommonModule,
      SearchComponent,
      MatToolbarModule,
      ProductsSortComponent,
      MatButtonModule,
      MatIconModule,
   ],
  templateUrl: './store-toolbar.component.html',
  styleUrls: ['./store-toolbar.component.scss']
})
export class StoreToolbarComponent {

}
