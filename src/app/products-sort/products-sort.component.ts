import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-products-sort',
  standalone: true,
   imports: [ CommonModule, MatFormFieldModule, MatIconModule, MatOptionModule, MatSelectModule ],
  templateUrl: './products-sort.component.html',
  styleUrls: ['./products-sort.component.scss']
})
export class ProductsSortComponent {
   public readonly sortByOptions  = [
      "Name",
      "Price",
      "Category"
   ];

   public readonly orderByIconValue = {
      "asc" : "vertical_align_bottom",
      "desc" : "vertical_align_top",
   };
}
