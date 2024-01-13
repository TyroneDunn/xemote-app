import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { LandingSection } from '../landing-section/landing.section';
import { OfferingsSection } from '../offerings-section/offerings.section';
import {
   TestimonialsSection
} from '../testimonials-section/testimonials.section';
import { AppToolbarComponent } from '../../app-toolbar/app-toolbar.component';
import { FooterSectionComponent } from '../../footer-section/footer-section.component';

@Component({
   selector   : 'app-home-page',
   standalone : true,
   imports: [
      CommonModule,
      MatToolbarModule,
      AppToolbarComponent,
      LandingSection,
      OfferingsSection,
      TestimonialsSection,
      FooterSectionComponent,
   ],
   templateUrl: './home.page.html',
   styleUrls  : [ './home.page.scss' ],
})
export class HomePage {

}
