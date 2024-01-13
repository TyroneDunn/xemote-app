import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [ CommonModule, CarouselModule, MatCardModule ],
  templateUrl: './testimonials.section.html',
  styleUrls: ['./testimonials.section.scss']
})
export class TestimonialsSection {

}
