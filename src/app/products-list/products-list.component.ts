import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Product } from '../products/products.type';
import { ProductCardComponent } from '../product-card/product-card.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-products-list',
  standalone: true,
   imports: [ CommonModule, ProductCardComponent, MatChipsModule, MatButtonModule, MatPaginatorModule ],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
   public products: Observable<Product[]> = of([
      {id: "0", name: "Gateway", price: {price: 23.10, currency: 'USD'}, category: "Gateway"},
      {id: "1", name: "Gateway", price: {price: 23.10, currency: 'USD'}, category: "Gateway"},
      {id: "2", name: "Gateway", price: {price: 23.10, currency: 'USD'}, category: "Gateway"},
      {id: "3", name: "Gateway", price: {price: 23.10, currency: 'USD'}, category: "Gateway"},
      {id: "4", name: "Gateway", price: {price: 23.10, currency: 'USD'}, category: "Gateway"},
      {id: "5", name: "Gateway", price: {price: 23.10, currency: 'USD'}, category: "Gateway"},
   ]);
}
