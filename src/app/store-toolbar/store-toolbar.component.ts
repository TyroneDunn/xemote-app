import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-store-toolbar',
  standalone: true,
   imports: [ CommonModule, SearchComponent, MatToolbarModule ],
  templateUrl: './store-toolbar.component.html',
  styleUrls: ['./store-toolbar.component.scss']
})
export class StoreToolbarComponent {

}
