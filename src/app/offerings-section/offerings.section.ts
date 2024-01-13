import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-offerings-section',
  standalone: true,
   imports: [ CommonModule, MatCardModule ],
  templateUrl: './offerings.section.html',
  styleUrls: ['./offerings.section.scss']
})
export class OfferingsSection {

}
