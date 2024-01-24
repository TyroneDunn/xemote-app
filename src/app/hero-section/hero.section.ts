import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
   imports: [ CommonModule, MatButtonModule, RouterLink, NgOptimizedImage ],
  templateUrl: './hero.section.html',
  styleUrls: ['./hero.section.scss']
})
export class HeroSection {

}
