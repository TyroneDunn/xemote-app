import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hero-section',
  standalone: true,
   imports: [ CommonModule, MatButtonModule ],
  templateUrl: './hero.section.html',
  styleUrls: ['./hero.section.scss']
})
export class HeroSection {

}
