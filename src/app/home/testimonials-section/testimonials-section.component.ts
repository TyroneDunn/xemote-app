import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
   imports: [ CommonModule, CarouselModule, MatCardModule ],
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.scss']
})
export class TestimonialsSectionComponent {

}
