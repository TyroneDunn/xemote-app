import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-offerings-section',
  standalone: true,
   imports: [ CommonModule, MatCardModule, MatIconModule ],
  templateUrl: './offerings.section.html',
  styleUrls: ['./offerings.section.scss']
})
export class OfferingsSection {

}
