import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { LandingSectionComponent } from '../landing-section/landing-section.component';
import { OfferingsSectionComponent } from '../offerings-section/offerings-section.component';
import {
   TestimonialsSectionComponent
} from '../testimonials-section/testimonials-section.component';
import { AppToolbarComponent } from '../../app-toolbar/app-toolbar.component';
import { FooterSectionComponent } from '../../footer-section/footer-section.component';

@Component({
   selector   : 'app-home-page',
   standalone : true,
   imports: [
      CommonModule,
      MatToolbarModule,
      AppToolbarComponent,
      LandingSectionComponent,
      OfferingsSectionComponent,
      TestimonialsSectionComponent,
      FooterSectionComponent,
   ],
   templateUrl: './home.page.html',
   styleUrls  : [ './home.page.scss' ],
})
export class HomePage {

}
