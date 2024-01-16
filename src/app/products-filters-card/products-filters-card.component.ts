import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { ProductCategory } from '../product/product.types';

@Component({
  selector: 'app-products-filters-card',
  standalone: true,
   imports: [ CommonModule, ProductCardComponent, MatCardModule, MatDividerModule, MatCheckboxModule, MatSliderModule ],
  templateUrl: './products-filters-card.component.html',
  styleUrls: ['./products-filters-card.component.scss']
})
export class ProductsFiltersCardComponent {

   public readonly productCategoryOptions : ProductCategory[] = [
      "Xemote Gateway",
      "Xemote Accessory",
      "Wireless Temperature Sensor",
      "Wireless Humidity Sensor",
      "Wireless AC Current Meter",
      "Wireless Event-Based Sensor",
      "Wireless Infrared Beam Sensor",
      "Wireless 4-30mA Sensor",
   ];
}
