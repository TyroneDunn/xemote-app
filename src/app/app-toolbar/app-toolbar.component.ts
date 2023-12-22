import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { HomeActionComponent } from "../home-action/home-action.component";
import { NavigationItemsComponent } from "../navigation-items/navigation-items.component";
import { SocialLinkItemsComponent } from "../social-link-items/social-link-items.component";

@Component({
   selector: 'app-toolbar',
   standalone: true,
   imports: [ CommonModule, MatToolbarModule, HomeActionComponent, NavigationItemsComponent, SocialLinkItemsComponent ],
   templateUrl: './app-toolbar.component.html',
   styleUrls: [ './app-toolbar.component.scss' ],
})
export class AppToolbarComponent {

}
