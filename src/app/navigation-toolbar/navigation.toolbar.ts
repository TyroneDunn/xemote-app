import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { NavigationLinksComponent } from "../navigation-links/navigation-links.component";
import { SocialLinksComponent } from "../social-links/social-links.component";
import { HomeActionComponent } from '../home-action/home-action.component';
import { Observable, of } from 'rxjs';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';

@Component({
   selector   : 'app-navigation-toolbar',
   standalone : true,
   imports: [
      CommonModule,
      MatToolbarModule,
      HomeActionComponent,
      NavigationLinksComponent,
      SocialLinksComponent,
      NavigationMenuComponent,
   ],
   templateUrl: './navigation.toolbar.html',
   styleUrls  : [ './navigation.toolbar.scss' ],
})
export class NavigationToolbar {
   @Input() isMobile$: Observable<boolean> = of(false);
}
