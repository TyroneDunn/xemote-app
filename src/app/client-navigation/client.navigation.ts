import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { NavigationLinksComponent } from "../navigation-links/navigation-links.component";
import { SocialLinksComponent } from "../social-links/social-links.component";
import { HomeActionComponent } from '../home-action/home-action.component';

@Component({
   selector   : 'app-client-navigation',
   standalone : true,
   imports    : [
      CommonModule,
      MatToolbarModule,
      HomeActionComponent,
      NavigationLinksComponent,
      SocialLinksComponent
   ],
   templateUrl: './client.navigation.html',
   styleUrls  : [ './client.navigation.scss' ],
})
export class ClientNavigation {

}
