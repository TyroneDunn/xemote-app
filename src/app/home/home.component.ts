import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppToolbarComponent } from "../app-toolbar/app-toolbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
   selector: 'app-home',
   standalone: true,
   imports: [
      CommonModule,
      MatToolbarModule,
      AppToolbarComponent,
   ],
   templateUrl: './home.component.html',
   styleUrls: [ './home.component.scss' ],
})
export class HomeComponent {

}
