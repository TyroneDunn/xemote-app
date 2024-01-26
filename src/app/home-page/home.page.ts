import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { HeroSection } from '../hero-section/hero.section';
import { OfferingsSection } from '../offerings-section/offerings.section';
import {
   TestimonialsSection
} from '../testimonials-section/testimonials.section';
import { NavigationToolbar } from '../navigation-toolbar/navigation.toolbar';
import { FooterSection } from '../footer-section/footer.section';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';

@Component({
   selector   : 'app-home-page',
   standalone : true,
   imports: [
      CommonModule,
      MatToolbarModule,
      NavigationToolbar,
      HeroSection,
      OfferingsSection,
      TestimonialsSection,
      FooterSection,
   ],
   templateUrl: './home.page.html',
   styleUrls  : [ './home.page.scss' ],
})
export class HomePage {
   private breakpointObserver = inject(BreakpointObserver);
   public isMobile$ = this.breakpointObserver.observe([ Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium]).pipe(
      map(value => value.matches)
   );
}
