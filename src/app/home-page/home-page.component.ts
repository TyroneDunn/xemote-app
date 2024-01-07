import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppToolbarComponent } from "../app-toolbar/app-toolbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { LandingSectionComponent } from '../landing-section/landing-section.component';

@Component({
   selector   : 'app-home-page',
   standalone : true,
   imports    : [
      CommonModule,
      MatToolbarModule,
      AppToolbarComponent,
      LandingSectionComponent,
   ],
   templateUrl: './home-page.component.html',
   styleUrls  : [ './home-page.component.scss' ],
})
export class HomePageComponent {

}
