import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-offerings-section',
  standalone: true,
   imports: [ CommonModule, MatCardModule ],
  templateUrl: './offerings-section.component.html',
  styleUrls: ['./offerings-section.component.scss']
})
export class OfferingsSectionComponent {

}
