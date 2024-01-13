import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { LandingSection } from '../landing-section/landing.section';
import { OfferingsSection } from '../offerings-section/offerings.section';
import {
   TestimonialsSection
} from '../testimonials-section/testimonials.section';
import { ClientNavigation } from '../client-navigation/client.navigation';
import { FooterSection } from '../footer-section/footer.section';

@Component({
   selector   : 'app-home-page',
   standalone : true,
   imports: [
      CommonModule,
      MatToolbarModule,
      ClientNavigation,
      LandingSection,
      OfferingsSection,
      TestimonialsSection,
      FooterSection,
   ],
   templateUrl: './home.page.html',
   styleUrls  : [ './home.page.scss' ],
})
export class HomePage {

}
