import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppToolbarComponent } from "../app-toolbar/app-toolbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
   selector: 'app-home-page',
   standalone: true,
   imports: [
      CommonModule,
      MatToolbarModule,
      AppToolbarComponent,
   ],
   templateUrl: './home-page.component.html',
   styleUrls: [ './home-page.component.scss' ],
})
export class HomePageComponent {

}
