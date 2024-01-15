import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Currency, Product } from '../product/product.types';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-card',
  standalone: true,
   imports: [
      CommonModule,
      MatCardModule,
      NgOptimizedImage,
      MatButtonModule,
      MatIconModule
   ],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
   @Input() product!: Product;

   public toCurrencySymbol = (currency : Currency) : string => {
      switch (currency) {
         case "USD": return '$';
         case "ZAR": return 'R';
      }
   };
}
